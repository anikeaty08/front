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
      

<nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<span className="text-xl font-medium tracking-tight text-white group-hover:text-blue-500 transition-colors">ZAZA</span>
<span className="text-sm font-normal text-zinc-400 tracking-widest uppercase">Cutz</span>
</a>
<div className="hidden md:flex items-center gap-8 text-base font-normal text-zinc-300">
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#gallery">Gallery</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center text-base font-normal bg-blue-600 text-white px-5 py-2.5 rounded-md hover:bg-blue-700 transition-colors shadow-sm" href="#book">
                    Book Now
                </a>
<button className="md:hidden text-zinc-300 hover:text-white">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative min-h-[90vh] flex items-center justify-center pt-16 overflow-hidden">
<div className="absolute inset-0 z-0">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-zinc-950 to-zinc-950"></div>

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M54.627 0l.83.48-28.96 16.72L-2.464.48l.83-.48h56.26zM27.327 34.02L0 18.24v31.55l27.327 15.78v-31.55zm2.653 0v31.55l27.327-15.78V18.24L29.98 34.02z\\' fill=\\'%23ffffff\\' fillOpacity=\\'1\\' fill-rule=\\'evenodd\\'/%3E%3C/svg%3E\')'}}></div>
</div>
<div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-12">
<div className="flex flex-col items-center gap-3 mb-8">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm shadow-sm">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="text-sm font-normal text-zinc-300">Open today in Winchester</span>
</div>
<a className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm shadow-sm hover:bg-zinc-800 transition-colors" href="#contact">
<div className="flex text-yellow-500 gap-0.5">
<iconify-icon icon="solar:star-bold" strokeWidth="1.5" width="14"></iconify-icon>
<span className="text-sm font-medium text-white ml-1">5.0</span>
</div>
<span className="w-1 h-1 rounded-full bg-zinc-700"></span>
<span className="text-sm font-normal text-zinc-300">44 Google Reviews</span>
</a>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-6 leading-tight">
                Precision Cutz.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Fresh Style.</span>
</h1>
<p className="text-xl md:text-2xl text-zinc-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                Winchester's premium grooming destination. Experience unmatched attention to detail in our modern, immersive studio.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-base font-normal bg-blue-600 text-white px-8 py-3.5 rounded-md hover:bg-blue-700 transition-all shadow-sm" href="#book">
<iconify-icon icon="solar:calendar-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Reserve Your Slot
                </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-base font-normal bg-zinc-900/50 text-zinc-300 px-8 py-3.5 rounded-md border border-zinc-800 hover:border-zinc-600 hover:text-white transition-all backdrop-blur-sm" href="#services">
                    View Services
                </a>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 border-t border-zinc-900" id="services">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Our Services</h2>
<p className="text-zinc-400 text-base md:text-lg max-w-xl mx-auto font-light">Masterful techniques tailored to your lifestyle. We offer a comprehensive range of traditional and modern grooming services.</p>
</div>
<div className="grid md:grid-cols-2 gap-12 lg:gap-24">

<div className="space-y-6">
<div className="group flex justify-between items-end border-b border-zinc-800 pb-4 hover:border-blue-500/50 transition-colors cursor-default">
<div>
<h4 className="text-xl font-normal text-zinc-200 group-hover:text-blue-400 transition-colors">Skin Fade</h4>
<p className="text-sm text-zinc-500 mt-1 font-light">Seamless blend down to the skin</p>
</div>
<span className="text-xl font-medium text-white">£28</span>
</div>
<div className="group flex justify-between items-end border-b border-zinc-800 pb-4 hover:border-blue-500/50 transition-colors cursor-default">
<div>
<h4 className="text-xl font-normal text-zinc-200 group-hover:text-blue-400 transition-colors">Taper Fade</h4>
<p className="text-sm text-zinc-500 mt-1 font-light">Clean taper on sides and neckline</p>
</div>
<span className="text-xl font-medium text-white">£25</span>
</div>
<div className="group flex justify-between items-end border-b border-zinc-800 pb-4 hover:border-blue-500/50 transition-colors cursor-default">
<div>
<h4 className="text-xl font-normal text-zinc-200 group-hover:text-blue-400 transition-colors">Standard Haircut</h4>
<p className="text-sm text-zinc-500 mt-1 font-light">Classic scissor or clipper work</p>
</div>
<span className="text-xl font-medium text-white">£22</span>
</div>
</div>

<div className="space-y-6">
<div className="group flex justify-between items-end border-b border-zinc-800 pb-4 hover:border-blue-500/50 transition-colors cursor-default">
<div>
<h4 className="text-xl font-normal text-zinc-200 group-hover:text-blue-400 transition-colors">Beard Trim &amp; Shape</h4>
<p className="text-sm text-zinc-500 mt-1 font-light">Sculpted with hot towel finish</p>
</div>
<span className="text-xl font-medium text-white">£18</span>
</div>
<div className="group flex justify-between items-end border-b border-zinc-800 pb-4 hover:border-blue-500/50 transition-colors cursor-default">
<div>
<h4 className="text-xl font-normal text-zinc-200 group-hover:text-blue-400 transition-colors">Haircut &amp; Beard Combo</h4>
<p className="text-sm text-zinc-500 mt-1 font-light">The full grooming experience</p>
</div>
<span className="text-xl font-medium text-white">£40</span>
</div>
<div className="group flex justify-between items-end border-b border-zinc-800 pb-4 hover:border-blue-500/50 transition-colors cursor-default">
<div>
<h4 className="text-xl font-normal text-zinc-200 group-hover:text-blue-400 transition-colors">Line Up / Shape Up</h4>
<p className="text-sm text-zinc-500 mt-1 font-light">Crisp edges using straight razor</p>
</div>
<span className="text-xl font-medium text-white">£12</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 border-t border-zinc-800" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="relative group rounded-2xl overflow-hidden aspect-[4/5] lg:aspect-square border border-zinc-800 shadow-xl bg-zinc-950">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503951914710-eb296aa2d5eb?auto=format&amp;fit=crop&amp;q=80')] bg-cover bg-center opacity-70 group-hover:opacity-100 transition-all duration-700 mix-blend-luminosity"></div>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-90"></div>
</div>
<div>
<span className="text-blue-500 text-sm font-medium tracking-widest uppercase mb-4 block">The Zaza Story</span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6 leading-tight">More than a haircut.<br/>It's a statement.</h2>
<div className="space-y-5 text-zinc-400 text-base md:text-lg font-light leading-relaxed mb-10">
<p>Located in the heart of Winchester, Zaza Cutz was founded on a simple principle: every man deserves to look and feel his absolute best. We blend traditional barbering techniques with modern aesthetics in our uniquely designed studio.</p>
<p>Our team of master barbers are dedicated to enhancing your personal image. From the moment you walk through our doors, you'll experience a high-end, relaxed environment designed specifically for the modern professional.</p>
</div>
<div className="grid grid-cols-2 gap-8 pt-8 border-t border-zinc-800">
<div>
<div className="text-4xl font-medium text-white mb-2 tracking-tight">5.0</div>
<div className="text-sm text-zinc-500 font-light">Google Rating</div>
</div>
<div>
<div className="text-4xl font-medium text-white mb-2 tracking-tight">44+</div>
<div className="text-sm text-zinc-500 font-light">Happy Clients</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950" id="gallery">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-3">Our Environment</h2>
<p className="text-zinc-400 text-base font-light">Follow us on TikTok to see our daily transformations.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-base text-zinc-300 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:play-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    @zaza.cutz
                </a>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
<div className="aspect-square rounded-xl overflow-hidden group bg-zinc-900 border border-zinc-800">
<div className="w-full h-full bg-[url('attachment-1.jpg')] bg-cover bg-center opacity-70 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500 mix-blend-luminosity hover:mix-blend-normal"></div>
</div>
<div className="aspect-square rounded-xl overflow-hidden group bg-zinc-900 border border-zinc-800">
<div className="w-full h-full bg-[url('attachment-2.jpg')] bg-cover bg-center opacity-70 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500 mix-blend-luminosity hover:mix-blend-normal"></div>
</div>
<div className="aspect-square rounded-xl overflow-hidden group bg-zinc-900 border border-zinc-800">
<div className="w-full h-full bg-[url('attachment-3.jpg')] bg-cover bg-center opacity-70 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500 mix-blend-luminosity hover:mix-blend-normal"></div>
</div>
<div className="aspect-square rounded-xl overflow-hidden group bg-zinc-900 border border-zinc-800 hidden md:block">
<div className="w-full h-full bg-[url('attachment-4.jpg')] bg-cover bg-center opacity-70 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500 mix-blend-luminosity hover:mix-blend-normal"></div>
</div>
</div>
<div className="mt-8 flex justify-center md:hidden">
<a className="inline-flex items-center gap-2 text-base text-zinc-300 hover:text-white transition-colors border border-zinc-800 rounded-full px-6 py-2 bg-zinc-900" href="#">
<iconify-icon icon="solar:play-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Follow @zaza.cutz
                </a>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 border-y border-zinc-800">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-12 text-center">Word on the Street</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl bg-zinc-950 border border-zinc-800 flex flex-col justify-between shadow-sm">
<div>
<div className="flex text-blue-500 mb-6 gap-1">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-zinc-300 text-base font-light leading-relaxed mb-8">"Best skin fade in Winchester. The attention to detail is insane, and the shop has an incredible premium vibe. The new aesthetic is next level."</p>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-sm text-zinc-400 font-medium">JD</div>
<div className="text-sm">
<div className="font-medium text-white">James D.</div>
<div className="text-zinc-500 font-light">Local Professional</div>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-zinc-950 border border-zinc-800 flex flex-col justify-between shadow-sm">
<div>
<div className="flex text-blue-500 mb-6 gap-1">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-zinc-300 text-base font-light leading-relaxed mb-8">"Found Zaza Cutz after moving to the area. They nailed the beard trim and shape up perfectly. Professional, clean, and top-tier service every time."</p>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-sm text-zinc-400 font-medium">MS</div>
<div className="text-sm">
<div className="font-medium text-white">Marcus S.</div>
<div className="text-zinc-500 font-light">First-time Client</div>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-zinc-950 border border-zinc-800 flex flex-col justify-between shadow-sm hidden md:flex">
<div>
<div className="flex text-blue-500 mb-6 gap-1">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-zinc-300 text-base font-light leading-relaxed mb-8">"Always a fresh cut and great environment. The blue neon setup looks amazing. Booking online makes it seamless to fit into a busy schedule."</p>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-sm text-zinc-400 font-medium">TH</div>
<div className="text-sm">
<div className="font-medium text-white">Tom H.</div>
<div className="text-zinc-500 font-light">Regular Client</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-zinc-950" id="book">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Lock In Your Look</h2>
<p className="text-zinc-400 text-base font-light">Select a service, choose a time, and let us handle the rest.</p>
</div>
<div className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-3xl p-8 md:p-12 shadow-2xl">
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="space-y-2">
<label className="text-sm font-medium text-zinc-400 pl-1">Full Name</label>
<div className="relative">
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" icon="solar:user-linear" strokeWidth="1.5" width="20"></iconify-icon>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-3.5 pl-12 pr-4 text-base text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500/50 focus:bg-zinc-950 transition-all" placeholder="John Doe" type="text"/>
</div>
</div>

<div className="space-y-2">
<label className="text-sm font-medium text-zinc-400 pl-1">Phone Number</label>
<div className="relative">
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" icon="solar:phone-linear" strokeWidth="1.5" width="20"></iconify-icon>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-3.5 pl-12 pr-4 text-base text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500/50 focus:bg-zinc-950 transition-all" placeholder="01962 123456" type="tel"/>
</div>
</div>
</div>

<div className="space-y-2">
<label className="text-sm font-medium text-zinc-400 pl-1">Select Service</label>
<div className="relative">
<select className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-3.5 pl-4 pr-12 text-base text-white appearance-none focus:outline-none focus:border-blue-500/50 focus:bg-zinc-950 transition-all cursor-pointer">
<option className="text-zinc-600" disabled="" selected="" value="">Choose an option...</option>
<option value="fade">Skin Fade - £28</option>
<option value="taper">Taper Fade - £25</option>
<option value="combo">Haircut &amp; Beard - £40</option>
<option value="beard">Beard Trim - £18</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="space-y-2">
<label className="text-sm font-medium text-zinc-400 pl-1">Preferred Date</label>
<div className="relative">
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-3.5 px-4 text-base text-white focus:outline-none focus:border-blue-500/50 focus:bg-zinc-950 transition-all [color-scheme:dark]" type="date"/>
</div>
</div>

<div className="space-y-2">
<label className="text-sm font-medium text-zinc-400 pl-1">Preferred Time</label>
<div className="relative">
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-3.5 px-4 text-base text-white focus:outline-none focus:border-blue-500/50 focus:bg-zinc-950 transition-all [color-scheme:dark]" type="time"/>
</div>
</div>
</div>

<div className="pt-6 mt-2 border-t border-zinc-800 flex items-center gap-3">
<div className="relative flex items-center">
<input className="custom-checkbox appearance-none w-5 h-5 rounded border border-zinc-600 bg-zinc-950 cursor-pointer transition-colors relative z-10 hover:border-blue-500" id="addon" type="checkbox"/>
</div>
<label className="text-sm text-zinc-300 cursor-pointer select-none font-light" htmlFor="addon">Add Hot Towel Finish (+£5)</label>
</div>
<button className="w-full bg-blue-600 text-white font-normal py-4 rounded-xl text-base hover:bg-blue-700 transition-colors mt-8 flex justify-center items-center gap-2 shadow-lg shadow-blue-900/20" type="button">
                        Confirm Appointment
                        <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</form>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 border-t border-zinc-800" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl font-medium tracking-tight text-white mb-10">Visit the Shop</h2>
<div className="space-y-10">
<div className="flex gap-5">
<div className="w-12 h-12 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center text-blue-500 shrink-0 shadow-sm">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-base font-normal text-white mb-2">Location</h4>
<p className="text-base text-zinc-400 font-light leading-relaxed">3, De Lunn Buildings<br/>Jewry St, Winchester<br/>SO23 8SA, United Kingdom</p>
</div>
</div>
<div className="flex gap-5">
<div className="w-12 h-12 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center text-blue-500 shrink-0 shadow-sm">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-base font-normal text-white mb-2">Hours</h4>
<ul className="text-base text-zinc-400 font-light space-y-2">
<li className="flex justify-between w-48"><span>Mon - Sat</span> <span>Opens 9am</span></li>
<li className="flex justify-between w-48 text-zinc-500"><span>Sunday</span> <span>Closed</span></li>
</ul>
</div>
</div>
<div className="flex gap-5">
<div className="w-12 h-12 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center text-blue-500 shrink-0 shadow-sm">
<iconify-icon icon="solar:phone-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-base font-normal text-white mb-2">Contact</h4>
<p className="text-base text-zinc-400 font-light leading-relaxed">01962 582527<br/>hello@zazacutz.co.uk</p>
</div>
</div>
</div>
</div>

<div className="bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden aspect-video lg:aspect-auto relative group flex items-center justify-center shadow-inner">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&amp;fit=crop&amp;q=80')] bg-cover bg-center opacity-20 mix-blend-luminosity grayscale"></div>
<div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay"></div>
<div className="relative z-10 text-center flex flex-col items-center">
<iconify-icon className="text-zinc-600 mb-3" icon="solar:map-linear" strokeWidth="1.5" width="40"></iconify-icon>
<span className="text-sm text-zinc-400 font-normal tracking-widest uppercase">Map View Available</span>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-zinc-950 border-t border-zinc-900 pt-20 pb-10 mt-auto">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-b border-zinc-900 pb-16">
<div className="col-span-1 md:col-span-2">
<a className="inline-block mb-6" href="#">
<span className="text-2xl font-medium tracking-tight text-white">ZAZA</span>
<span className="text-sm font-normal text-zinc-400 tracking-widest uppercase ml-1">Cutz</span>
</a>
<p className="text-sm text-zinc-400 max-w-sm leading-relaxed font-light">Precision barbering in Winchester. Elevating men's grooming with meticulous detail in a modern, immersive space.</p>
</div>
<div>
<h5 className="text-white text-sm font-medium uppercase tracking-wider mb-6">Explore</h5>
<ul className="space-y-4 text-base text-zinc-400 font-light">
<li><a className="hover:text-blue-500 transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-blue-500 transition-colors" href="#services">Services &amp; Prices</a></li>
<li><a className="hover:text-blue-500 transition-colors" href="#gallery">Our Studio</a></li>
<li><a className="hover:text-blue-500 transition-colors" href="#book">Book Appointment</a></li>
</ul>
</div>
<div>
<h5 className="text-white text-sm font-medium uppercase tracking-wider mb-6">Social</h5>
<div className="flex gap-4">
<a aria-label="TikTok" className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 hover:border-zinc-700 transition-all shadow-sm" href="#">
<iconify-icon icon="solar:play-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</a>
<a aria-label="Instagram" className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 hover:border-zinc-700 transition-all shadow-sm" href="#">
<iconify-icon icon="solar:camera-linear" strokeWidth="1.5" width="24"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-zinc-500 font-light">
<p>© 2024 Zaza Cutz. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-zinc-300 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
