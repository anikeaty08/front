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
      

<nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-neutral-950/70 backdrop-blur-lg">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tighter text-white flex items-center gap-1" href="#">
                K<span className="text-amber-500">B</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#home">Home</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#portfolio">Portfolio</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-neutral-950 bg-amber-500 hover:bg-amber-400 rounded-full transition-all duration-300" href="#contact">
                Book Now
            </a>

<button className="md:hidden text-white">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" id="home">

<div className="absolute inset-0 z-0">
<img alt="Luxury Event" className="w-full h-full object-cover object-center opacity-40" src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500 text-xs font-medium mb-8 fade-in-up">
<iconify-icon height="16" icon="solar:stars-linear" strokeWidth="1.5" width="16"></iconify-icon>
                Premium Event Management
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-white leading-tight fade-in-up delay-100">
                We Create <br/><span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-500">Unforgettable Events</span>
</h1>
<p className="mt-6 text-base md:text-lg text-neutral-400 max-w-2xl mx-auto font-light fade-in-up delay-200">
                Luxury event management for weddings, corporate gatherings, and special occasions. We turn your vision into an extraordinary reality.
            </p>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 fade-in-up delay-300">
<a className="w-full sm:w-auto px-8 py-3.5 text-sm font-medium text-neutral-950 bg-amber-500 hover:bg-amber-400 rounded-full transition-all duration-300 flex items-center justify-center gap-2" href="#contact">
                    Book Now
                    <iconify-icon height="18" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 text-sm font-medium text-white border border-white/10 hover:bg-white/5 rounded-full transition-all duration-300 flex items-center justify-center" href="#services">
                    View Services
                </a>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 relative border-t border-white/5" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-6">Redefining Elegance in Every Detail</h2>
<p className="text-sm md:text-base text-neutral-400 mb-6 font-light leading-relaxed">
                        At Katti Batti Event, we specialize in curating bespoke experiences that linger in memories. From intimate gatherings to grand celebrations, our approach combines creativity, meticulous planning, and flawless execution.
                    </p>
<p className="text-sm md:text-base text-neutral-400 mb-10 font-light leading-relaxed">
                        Our dedicated team ensures that your special moments are elevated to the highest standard of luxury and professionalism.
                    </p>
<div className="grid grid-cols-2 gap-6">
<div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
<div className="text-3xl font-semibold tracking-tighter text-amber-500 mb-2">5+</div>
<div className="text-sm text-neutral-400">Years Experience</div>
</div>
<div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
<div className="text-3xl font-semibold tracking-tighter text-amber-500 mb-2">100+</div>
<div className="text-sm text-neutral-400">Events Completed</div>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-[4/5] rounded-3xl overflow-hidden relative">
<img alt="Event Setup" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 border border-white/10 rounded-3xl mix-blend-overlay"></div>
</div>

<div className="absolute -bottom-8 -left-8 w-48 h-48 bg-amber-500/20 blur-3xl rounded-full z-[-1]"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900 border-t border-white/5" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-4">Our Expertise</h2>
<p className="text-sm text-neutral-400 font-light">Comprehensive event management solutions tailored to your unique requirements.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl bg-neutral-950 border border-white/5 hover:border-amber-500/30 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500/0 via-amber-500/0 to-amber-500/0 group-hover:via-amber-500/50 transition-all duration-500"></div>
<div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="24" icon="solar:hearts-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight">Wedding Planning</h3>
<p className="text-sm text-neutral-400 font-light">Haldi, Mehendi, Sangeet, and luxurious destination weddings executed flawlessly.</p>
</div>

<div className="group p-8 rounded-2xl bg-neutral-950 border border-white/5 hover:border-amber-500/30 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500/0 via-amber-500/0 to-amber-500/0 group-hover:via-amber-500/50 transition-all duration-500"></div>
<div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="24" icon="solar:buildings-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight">Corporate Events</h3>
<p className="text-sm text-neutral-400 font-light">Professional seminars, impactful product launches, and grand corporate conferences.</p>
</div>

<div className="group p-8 rounded-2xl bg-neutral-950 border border-white/5 hover:border-amber-500/30 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500/0 via-amber-500/0 to-amber-500/0 group-hover:via-amber-500/50 transition-all duration-500"></div>
<div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="24" icon="solar:glass-water-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight">Social Events</h3>
<p className="text-sm text-neutral-400 font-light">Unforgettable birthdays, anniversary celebrations, and exclusive private parties.</p>
</div>

<div className="group p-8 rounded-2xl bg-neutral-950 border border-white/5 hover:border-amber-500/30 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500/0 via-amber-500/0 to-amber-500/0 group-hover:via-amber-500/50 transition-all duration-500"></div>
<div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="24" icon="solar:music-notes-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight">Entertainment</h3>
<p className="text-sm text-neutral-400 font-light">High-energy live concerts, electrifying DJ nights, and cultural festivals.</p>
</div>

<div className="group p-8 rounded-2xl bg-neutral-950 border border-white/5 hover:border-amber-500/30 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden lg:col-span-2">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500/0 via-amber-500/0 to-amber-500/0 group-hover:via-amber-500/50 transition-all duration-500"></div>
<div className="flex flex-col md:flex-row gap-6 items-start">
<div className="w-12 h-12 shrink-0 rounded-xl bg-white/5 flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="24" icon="solar:star-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight">Special Events &amp; Exhibitions</h3>
<p className="text-sm text-neutral-400 font-light max-w-xl">From glamorous fashion shows to large-scale exhibitions and dynamic college fests, we handle complex logistical requirements with elegant precision.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 border-t border-white/5" id="portfolio">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-4">Captured Moments</h2>
<p className="text-sm text-neutral-400 font-light">A glimpse into the spectacular events we've brought to life.</p>
</div>
<a className="text-sm text-amber-500 hover:text-amber-400 flex items-center gap-2 transition-colors" href="#">
                    View Full Gallery <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="col-span-2 row-span-2 group relative overflow-hidden rounded-2xl bg-neutral-900 aspect-square md:aspect-auto">
<img alt="Wedding Ceremony" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<span className="text-white font-medium tracking-tight">Grand Weddings</span>
</div>
</div>
<div className="group relative overflow-hidden rounded-2xl bg-neutral-900 aspect-square">
<img alt="Corporate Event" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="group relative overflow-hidden rounded-2xl bg-neutral-900 aspect-square">
<img alt="Party" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="col-span-2 group relative overflow-hidden rounded-2xl bg-neutral-900 aspect-[2/1]">
<img alt="Concert" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-center text-white mb-16">The Katti Batti Advantage</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center">
<div className="w-16 h-16 mx-auto rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-amber-500 mb-6">
<iconify-icon height="32" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h4 className="text-base font-medium text-white mb-2 tracking-tight">Experienced Team</h4>
<p className="text-xs text-neutral-400 font-light">Industry veterans executing your vision.</p>
</div>
<div className="text-center">
<div className="w-16 h-16 mx-auto rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-amber-500 mb-6">
<iconify-icon height="32" icon="solar:lightbulb-minimalistic-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h4 className="text-base font-medium text-white mb-2 tracking-tight">Creative Concepts</h4>
<p className="text-xs text-neutral-400 font-light">Unique themes and innovative designs.</p>
</div>
<div className="text-center">
<div className="w-16 h-16 mx-auto rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-amber-500 mb-6">
<iconify-icon height="32" icon="solar:clock-circle-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h4 className="text-base font-medium text-white mb-2 tracking-tight">On-Time Execution</h4>
<p className="text-xs text-neutral-400 font-light">Flawless timing and logistics management.</p>
</div>
<div className="text-center">
<div className="w-16 h-16 mx-auto rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-amber-500 mb-6">
<iconify-icon height="32" icon="solar:wallet-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h4 className="text-base font-medium text-white mb-2 tracking-tight">Affordable Packages</h4>
<p className="text-xs text-neutral-400 font-light">Premium service without compromising budget.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-center text-white mb-16">Client Stories</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl bg-white/5 border border-white/10 relative">
<div className="flex text-amber-500 mb-4">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-neutral-300 font-light mb-6 leading-relaxed">"Katti Batti made our destination wedding an absolute dream. From decor to guest management, everything was handled beautifully. Truly a luxury experience."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-medium text-neutral-400">P</div>
<div>
<div className="text-sm font-medium text-white tracking-tight">Priya &amp; Rohan</div>
<div className="text-xs text-neutral-500">Wedding Clients</div>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-white/5 border border-white/10 relative">
<div className="flex text-amber-500 mb-4">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-neutral-300 font-light mb-6 leading-relaxed">"Our annual corporate summit was a huge success thanks to their precise planning. The stage setup and audiovisuals were top-notch and highly professional."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-medium text-neutral-400">A</div>
<div>
<div className="text-sm font-medium text-white tracking-tight">Amit Sharma</div>
<div className="text-xs text-neutral-500">Corporate Director</div>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-white/5 border border-white/10 relative md:hidden lg:block">
<div className="flex text-amber-500 mb-4">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-neutral-300 font-light mb-6 leading-relaxed">"I hired them for my 50th birthday bash. They suggested a phenomenal theme and executed it beyond my expectations. Highly recommend their services!"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-medium text-neutral-400">M</div>
<div>
<div className="text-sm font-medium text-white tracking-tight">Meera Desai</div>
<div className="text-xs text-neutral-500">Private Party</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden border-t border-white/5 bg-gradient-to-br from-neutral-900 to-neutral-950">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-5 mix-blend-screen"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-6">Let’s Plan Your Next Event</h2>
<p className="text-sm md:text-base text-neutral-400 font-light mb-10 max-w-xl mx-auto">Contact us today for a consultation and let us design an experience that reflects your style and exceeds your expectations.</p>
<a className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-neutral-950 bg-amber-500 hover:bg-amber-400 rounded-full transition-all duration-300 shadow-[0_0_40px_-10px_rgba(245,158,11,0.5)]" href="#contact">
                Get Started
            </a>
</div>
</section>

<section className="py-24 bg-neutral-950 border-t border-white/5" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">

<div className="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-4">Get in Touch</h2>
<p className="text-sm text-neutral-400 font-light mb-12">Reach out to us to discuss your event requirements. Our team is ready to assist you.</p>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-amber-500 shrink-0">
<iconify-icon height="20" icon="solar:user-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="">
<div className="text-xs text-neutral-500 mb-1">Contact Person</div>
<div className="text-sm font-medium text-white tracking-tight">Rahul Nimbalkar</div>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-amber-500 shrink-0">
<iconify-icon height="20" icon="solar:phone-calling-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="">
<div className="text-xs text-neutral-500 mb-1">Phone Number</div>
<a className="text-sm font-medium text-white hover:text-amber-500 transition-colors tracking-tight" href="tel:+919049039059">+91 90490 39059</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-amber-500 shrink-0">
<iconify-icon height="20" icon="solar:letter-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="">
<div className="text-xs text-neutral-500 mb-1">Email Address</div>
<a className="text-sm font-medium text-white hover:text-amber-500 transition-colors tracking-tight" href="mailto:rahulbimbalkar07@gmail.com">rahulbimbalkar07@gmail.com</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-amber-500 shrink-0">
<iconify-icon height="20" icon="solar:map-point-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="">
<div className="text-xs text-neutral-500 mb-1">Location</div>
<div className="text-sm font-medium text-white tracking-tight">Mumbai, Maharashtra, India</div>
</div>
</div>
</div>
</div>

<div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
<form className="space-y-5">
<div className="grid md:grid-cols-2 gap-5">
<div className="space-y-2">
<label className="text-xs text-neutral-400 font-medium">Full Name</label>
<input className="w-full bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all" placeholder="e.g. Rahul Nimbalkar" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs text-neutral-400 font-medium">Email Address</label>
<input className="w-full bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all" placeholder="e.g. rahulbimbalkar07@gmail.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs text-neutral-400 font-medium">Phone Number</label>
<input className="w-full bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all" placeholder="e.g. +91 90490 39059" type="tel"/>
</div>
<div className="space-y-2">
<label className="text-xs text-neutral-400 font-medium">Event Type</label>
<div className="relative">
<select className="w-full bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all appearance-none cursor-pointer">
<option disabled="" selected="" value="">Select an event type</option>
<option value="wedding">Wedding Planning</option>
<option value="corporate">Corporate Event</option>
<option value="social">Social Party</option>
<option value="other">Other</option>
</select>
<div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-neutral-400">
<iconify-icon height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-xs text-neutral-400 font-medium">Message</label>
<textarea className="w-full bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all resize-none" placeholder="Tell us about your event..." rows="4"></textarea>
</div>
<button className="w-full py-3.5 text-sm font-medium text-neutral-950 bg-amber-500 hover:bg-amber-400 rounded-xl transition-all duration-300 mt-2" type="button">
                            Send Message
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-black py-12 border-t border-white/10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-8 mb-12">
<div className="md:col-span-2">
<a className="text-xl font-semibold tracking-tighter text-white flex items-center gap-1 mb-4" href="#">
                        K<span className="text-amber-500">B</span> Event
                    </a>
<p className="text-xs text-neutral-500 max-w-sm font-light">
                        Luxury event management creating unforgettable experiences for weddings, corporate, and special occasions.
                    </p>
</div>
<div>
<h5 className="text-sm font-medium text-white mb-4 tracking-tight">Quick Links</h5>
<ul className="space-y-2 text-xs text-neutral-500 font-light">
<li><a className="hover:text-amber-500 transition-colors" href="#home">Home</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#portfolio">Gallery</a></li>
</ul>
</div>
<div>
<h5 className="text-sm font-medium text-white mb-4 tracking-tight">Legal</h5>
<ul className="space-y-2 text-xs text-neutral-500 font-light">
<li><a className="hover:text-amber-500 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row border-white/5 border-t pt-8 gap-x-4 gap-y-4 items-center justify-between">
<p className="text-xs font-light text-neutral-600">© 2026 Katti Batti Event. All rights reserved.</p>
<div className="flex items-center gap-4 text-neutral-500">
<a className="hover:text-white transition-colors" href="#">
<iconify-icon height="20" icon="solar:camera-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="hover:text-white transition-colors" href="#">
<iconify-icon height="20" icon="solar:letter-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">

<a aria-label="Back to top" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/10 hover:border-white/20 transition-all shadow-lg hidden md:flex" href="#home">
<iconify-icon height="20" icon="solar:alt-arrow-up-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>

<a aria-label="WhatsApp Chat" className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center text-white hover:bg-[#20bd5a] transition-all shadow-lg hover:scale-105" href="https://wa.me/919049039059" target="_blank">
<iconify-icon height="24" icon="solar:chat-round-dots-linear" strokeWidth="1.5" width="24"></iconify-icon>
</a>
</div>

    </>
  );
}
