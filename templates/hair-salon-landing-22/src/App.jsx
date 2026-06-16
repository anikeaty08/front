import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
stone: {
50: '#fafaf9',
100: '#f5f5f4',
200: '#e7e5e4',
800: '#292524',
900: '#1c1917',
},
rose: {
50: '#fff1f2',
100: '#ffe4e6',
200: '#fecdd3',
300: '#fda4af', // Accent
400: '#fb7185',
900: '#881337',
},
gold: {
100: '#fdf6e3',
400: '#d4af37',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
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
      

<nav className="sticky top-0 z-50 bg-stone-50/90 backdrop-blur-md border-b border-stone-200/50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="md:hidden">
<label className="cursor-pointer" htmlFor="mobile-menu-toggle">
<iconify-icon height="24" icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</label>
</div>

<a className="flex-shrink-0" href="#">
<span className="font-serif text-2xl tracking-tighter text-stone-900 uppercase">Blanca’s</span>
</a>

<div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide text-stone-600">
<a className="hover:text-rose-400 transition-colors" href="#home">Home</a>
<a className="hover:text-rose-400 transition-colors" href="#about">About</a>
<a className="hover:text-rose-400 transition-colors" href="#services">Services</a>
<a className="hover:text-rose-400 transition-colors" href="#team">Team</a>
<a className="hover:text-rose-400 transition-colors" href="#reviews">Reviews</a>
<a className="hover:text-rose-400 transition-colors" href="#contact">Contact</a>
</div>

<div className="flex items-center">
<a className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-xs font-semibold tracking-wide uppercase text-white bg-stone-900 hover:bg-rose-300 hover:text-stone-900 transition-all duration-300 rounded-full" href="#book">
                    Book Appointment
                </a>

<a className="md:hidden text-stone-900" href="#book">
<iconify-icon height="24" icon="lucide:calendar-clock" strokeWidth="1.5" width="24"></iconify-icon>
</a>
</div>
</div>

<input className="hidden peer" id="mobile-menu-toggle" type="checkbox"/>
<div className="fixed inset-0 bg-stone-50 z-40 transform -translate-x-full peer-checked:translate-x-0 transition-transform duration-300 md:hidden flex flex-col pt-24 px-6 space-y-6">
<label className="absolute top-6 right-6 cursor-pointer" htmlFor="mobile-menu-toggle">
<iconify-icon height="24" icon="lucide:x" strokeWidth="1.5" width="24"></iconify-icon>
</label>
<a className="text-2xl font-serif text-stone-900" href="#home">Home</a>
<a className="text-2xl font-serif text-stone-900" href="#about">About</a>
<a className="text-2xl font-serif text-stone-900" href="#services">Services</a>
<a className="text-2xl font-serif text-stone-900" href="#reviews">Reviews</a>
<a className="text-2xl font-serif text-stone-900" href="#contact">Contact</a>
<div className="pt-8">
<a className="w-full block text-center py-4 bg-stone-900 text-white font-medium rounded-lg" href="#book">Book Now</a>
</div>
</div>
</nav>

<section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden" id="home">

<div className="absolute inset-0 z-0">
<img alt="Elegant Salon Interior" className="w-full h-full object-cover object-center opacity-90" src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-stone-50/90 via-stone-50/60 to-transparent"></div>
</div>
<div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
<div className="space-y-8 fade-in-up" style={{animationDelay: '0.1s'}}>
<h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-stone-900">
                    Professional <br/>
<span className="italic text-rose-400/90">Hair Care</span> <br/>
                    You Can Trust.
                </h1>
<p className="text-lg text-stone-600 max-w-md leading-relaxed">
                    Expert styling, coloring, and personalized care in a welcoming salon environment designed for your comfort.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold tracking-wide uppercase text-white bg-stone-900 hover:bg-stone-800 transition-colors rounded-full shadow-lg shadow-stone-200/50" href="#book">
                        Book Now
                    </a>
<a className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold tracking-wide uppercase text-stone-900 bg-white border border-stone-200 hover:border-stone-300 hover:bg-stone-50 transition-colors rounded-full" href="#services">
                        View Services
                    </a>
</div>
</div>

<div className="hidden md:block"></div>
</div>
</section>

<section className="py-24 bg-white" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="aspect-[4/5] bg-stone-100 rounded-2xl overflow-hidden shadow-xl shadow-stone-200/50">
<img alt="Blanca Stylist" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&amp;w=1978&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -bottom-6 -right-6 w-32 h-32 bg-rose-100 rounded-full -z-10 blur-2xl opacity-60"></div>
</div>
<div className="space-y-6">
<span className="text-xs font-semibold tracking-widest text-rose-400 uppercase">About Blanca</span>
<h2 className="font-serif text-4xl tracking-tight text-stone-900">Enhancing beauty with effortless style.</h2>
<p className="text-stone-600 leading-relaxed">
                        With over 15 years of experience in the hairstyling industry, Blanca founded her studio with a simple mission: to create a space where every client feels heard, cared for, and beautiful.
                    </p>
<p className="text-stone-600 leading-relaxed">
                        Specializing in lived-in color, balayage, and precision cutting, the studio combines modern techniques with a warm, personalized approach. We don't just do hair; we build confidence.
                    </p>
<div className="pt-4">
<a className="group inline-flex items-center text-sm font-medium text-stone-900 border-b border-stone-300 pb-1 hover:border-rose-400 transition-colors" href="#about-page">
                            Meet Blanca
                            <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" height="16" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
<span className="text-xs font-semibold tracking-widest text-stone-500 uppercase">What We Do</span>
<h2 className="font-serif text-4xl tracking-tight text-stone-900">Curated Services</h2>
<p className="text-stone-600">Premium treatments tailored to your unique hair type and lifestyle.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-stone-100/50">
<div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center text-stone-900 mb-6 group-hover:bg-rose-50 group-hover:text-rose-400 transition-colors">
<iconify-icon height="24" icon="lucide:scissors" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-stone-900 mb-3">Precision Cuts</h3>
<p className="text-sm text-stone-500 leading-relaxed mb-6">Tailored haircuts for women, men, and children designed to frame your face and suit your lifestyle.</p>
<a className="text-xs font-semibold uppercase tracking-wide text-stone-900 group-hover:text-rose-400 transition-colors" href="#book">Book Now</a>
</div>

<div className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-stone-100/50">
<div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center text-stone-900 mb-6 group-hover:bg-rose-50 group-hover:text-rose-400 transition-colors">
<iconify-icon height="24" icon="lucide:palette" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-stone-900 mb-3">Color &amp; Balayage</h3>
<p className="text-sm text-stone-500 leading-relaxed mb-6">Expert application of permanent color, highlights, and hand-painted balayage for a natural look.</p>
<a className="text-xs font-semibold uppercase tracking-wide text-stone-900 group-hover:text-rose-400 transition-colors" href="#book">Book Now</a>
</div>

<div className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-stone-100/50">
<div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center text-stone-900 mb-6 group-hover:bg-rose-50 group-hover:text-rose-400 transition-colors">
<iconify-icon height="24" icon="lucide:wind" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-stone-900 mb-3">Styling &amp; Blowouts</h3>
<p className="text-sm text-stone-500 leading-relaxed mb-6">From sleek blowouts to voluminous curls, leave the salon looking red-carpet ready.</p>
<a className="text-xs font-semibold uppercase tracking-wide text-stone-900 group-hover:text-rose-400 transition-colors" href="#book">Book Now</a>
</div>

<div className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-stone-100/50">
<div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center text-stone-900 mb-6 group-hover:bg-rose-50 group-hover:text-rose-400 transition-colors">
<iconify-icon height="24" icon="lucide:sparkles" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-stone-900 mb-3">Treatments</h3>
<p className="text-sm text-stone-500 leading-relaxed mb-6">Deep conditioning, keratin treatments, and scalp therapy to restore health and shine.</p>
<a className="text-xs font-semibold uppercase tracking-wide text-stone-900 group-hover:text-rose-400 transition-colors" href="#book">Book Now</a>
</div>

<div className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-stone-100/50">
<div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center text-stone-900 mb-6 group-hover:bg-rose-50 group-hover:text-rose-400 transition-colors">
<iconify-icon height="24" icon="lucide:calendar-heart" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-stone-900 mb-3">Bridal &amp; Special</h3>
<p className="text-sm text-stone-500 leading-relaxed mb-6">On-site or in-salon styling for weddings, proms, and special events.</p>
<a className="text-xs font-semibold uppercase tracking-wide text-stone-900 group-hover:text-rose-400 transition-colors" href="#book">Inquire</a>
</div>

<div className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-stone-100/50 flex flex-col justify-center items-center text-center">
<h3 className="font-serif text-xl text-stone-900 mb-3">See Full Menu</h3>
<p className="text-sm text-stone-500 leading-relaxed mb-6">View our complete price list and detailed descriptions on our booking page.</p>
<a className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-stone-200 text-stone-900 hover:bg-rose-50 hover:border-rose-200 transition-all" href="#book">
<iconify-icon height="20" icon="lucide:arrow-right" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="gallery">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<div>
<span className="text-xs font-semibold tracking-widest text-stone-500 uppercase">Portfolio</span>
<h2 className="font-serif text-3xl md:text-4xl tracking-tight text-stone-900 mt-2">Recent Work</h2>
</div>
<a className="hidden md:flex items-center text-sm font-medium text-stone-500 hover:text-rose-400 transition-colors" href="https://instagram.com" target="_blank">
<iconify-icon className="mr-2" height="18" icon="lucide:instagram" width="18"></iconify-icon>
                    Follow on Instagram
                </a>
</div>

<div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">

<div className="break-inside-avoid rounded-xl overflow-hidden group relative">
<img alt="Hair Color" className="w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<span className="text-white font-serif text-lg tracking-wide">Blonde Highlights</span>
</div>
</div>

<div className="break-inside-avoid rounded-xl overflow-hidden group relative">
<img alt="Styling" className="w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<span className="text-white font-serif text-lg tracking-wide">Textured Cut</span>
</div>
</div>

<div className="break-inside-avoid rounded-xl overflow-hidden group relative">
<img alt="Salon Vibe" className="w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>

<div className="break-inside-avoid rounded-xl overflow-hidden group relative">
<img alt="Hair Treatment" className="w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>

<div className="break-inside-avoid rounded-xl overflow-hidden group relative">
<img alt="Balayage" className="w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>

<div className="break-inside-avoid rounded-xl overflow-hidden group relative">
<img alt="Styling Tools" className="w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-100" id="reviews">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<div className="flex justify-center space-x-1 text-rose-400 mb-4">
<iconify-icon icon="lucide:star" width="20"></iconify-icon>
<iconify-icon icon="lucide:star" width="20"></iconify-icon>
<iconify-icon icon="lucide:star" width="20"></iconify-icon>
<iconify-icon icon="lucide:star" width="20"></iconify-icon>
<iconify-icon icon="lucide:star" width="20"></iconify-icon>
</div>
<h2 className="font-serif text-3xl md:text-4xl tracking-tight text-stone-900">Loved by Locals</h2>
<p className="mt-4 text-stone-600">Rated 5 stars on Google and Vagaro</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200/60 relative">
<iconify-icon className="text-stone-200 absolute top-6 right-6" icon="lucide:quote" width="32"></iconify-icon>
<p className="text-stone-700 leading-relaxed mb-6">"Blanca is simply the best. She listened to exactly what I wanted and the color came out even better than I imagined. The salon is so relaxing!"</p>
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center font-serif text-stone-500">S</div>
<div className="ml-3">
<p className="text-sm font-semibold text-stone-900">Sarah M.</p>
<p className="text-xs text-stone-500">Balayage &amp; Cut</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200/60 relative">
<iconify-icon className="text-stone-200 absolute top-6 right-6" icon="lucide:quote" width="32"></iconify-icon>
<p className="text-stone-700 leading-relaxed mb-6">"Finally found a salon that knows how to handle curly hair. Professional, clean, and such a warm atmosphere. Highly recommend!"</p>
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center font-serif text-stone-500">E</div>
<div className="ml-3">
<p className="text-sm font-semibold text-stone-900">Emily R.</p>
<p className="text-xs text-stone-500">Curly Cut</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200/60 relative">
<iconify-icon className="text-stone-200 absolute top-6 right-6" icon="lucide:quote" width="32"></iconify-icon>
<p className="text-stone-700 leading-relaxed mb-6">"I've been coming here for two years and wouldn't go anywhere else. The attention to detail is unmatched."</p>
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center font-serif text-stone-500">J</div>
<div className="ml-3">
<p className="text-sm font-semibold text-stone-900">Jessica T.</p>
<p className="text-xs text-stone-500">Root Touch Up</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-stone-900 text-center px-6">
<h2 className="font-serif text-3xl md:text-4xl text-white tracking-tight mb-6">Ready to refresh your look?</h2>
<p className="text-stone-400 mb-8 max-w-lg mx-auto">Book your appointment online easily. We look forward to seeing you at the studio.</p>
<a className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold tracking-wide uppercase text-stone-900 bg-white hover:bg-rose-100 transition-colors rounded-full" href="#book">
            Book Appointment
        </a>
</section>

<section className="py-24 bg-stone-50" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">

<div className="space-y-8">
<div>
<span className="text-xs font-semibold tracking-widest text-stone-500 uppercase">Contact Us</span>
<h2 className="font-serif text-4xl tracking-tight text-stone-900 mt-2">Visit the Studio</h2>
</div>
<div className="space-y-6">
<div className="flex items-start">
<iconify-icon className="text-rose-400 mt-1 mr-4" icon="lucide:map-pin" width="20"></iconify-icon>
<div>
<h4 className="font-medium text-stone-900">Address</h4>
<p className="text-stone-600 mt-1">123 Fashion Avenue, Suite 104<br/>New York, NY 10012</p>
</div>
</div>
<div className="flex items-start">
<iconify-icon className="text-rose-400 mt-1 mr-4" icon="lucide:phone" width="20"></iconify-icon>
<div>
<h4 className="font-medium text-stone-900">Phone</h4>
<p className="text-stone-600 mt-1">(555) 123-4567</p>
</div>
</div>
<div className="flex items-start">
<iconify-icon className="text-rose-400 mt-1 mr-4" icon="lucide:mail" width="20"></iconify-icon>
<div>
<h4 className="font-medium text-stone-900">Email</h4>
<p className="text-stone-600 mt-1">hello@blancashairstudio.com</p>
</div>
</div>
<div className="flex items-start">
<iconify-icon className="text-rose-400 mt-1 mr-4" icon="lucide:clock" width="20"></iconify-icon>
<div>
<h4 className="font-medium text-stone-900">Hours</h4>
<p className="text-stone-600 mt-1">Mon: Closed</p>
<p className="text-stone-600">Tue - Fri: 10am - 7pm</p>
<p className="text-stone-600">Sat: 9am - 4pm</p>
<p className="text-stone-600">Sun: Closed</p>
</div>
</div>
</div>

<div className="w-full h-48 bg-stone-200 rounded-xl overflow-hidden relative">
<img alt="Map" className="w-full h-full object-cover opacity-50 grayscale" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&amp;w=1774&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<a className="bg-white px-4 py-2 rounded-lg text-xs font-semibold shadow-md hover:bg-stone-50" href="#">Get Directions</a>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-xl shadow-stone-200/50 border border-stone-100" id="book">
<h3 className="font-serif text-2xl text-stone-900 mb-6">Request Appointment</h3>
<form className="space-y-5" onsubmit="event.preventDefault();">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-stone-500 uppercase">First Name</label>
<input className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:outline-none focus:border-rose-300 focus:ring-1 focus:ring-rose-300 transition-all bg-stone-50" placeholder="Jane" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-stone-500 uppercase">Last Name</label>
<input className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:outline-none focus:border-rose-300 focus:ring-1 focus:ring-rose-300 transition-all bg-stone-50" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-stone-500 uppercase">Email</label>
<input className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:outline-none focus:border-rose-300 focus:ring-1 focus:ring-rose-300 transition-all bg-stone-50" placeholder="jane@example.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-stone-500 uppercase">Service Interest</label>
<div className="relative">
<select className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:outline-none focus:border-rose-300 focus:ring-1 focus:ring-rose-300 transition-all bg-stone-50 appearance-none text-stone-600">
<option>Haircut &amp; Styling</option>
<option>Balayage / Highlights</option>
<option>All Over Color</option>
<option>Treatment</option>
</select>
<iconify-icon className="absolute right-4 top-3.5 text-stone-400 pointer-events-none" icon="lucide:chevron-down" width="16"></iconify-icon>
</div>
</div>
<div className="space-y-3 pt-2">
<label className="flex items-center space-x-3 cursor-pointer">
<input className="custom-checkbox" type="checkbox"/>
<span className="text-sm text-stone-500">I am a new client</span>
</label>
</div>
<button className="w-full py-4 bg-stone-900 hover:bg-rose-400 text-white font-medium rounded-lg transition-colors flex items-center justify-center space-x-2 mt-4">
<span>Continue to Vagaro</span>
<iconify-icon icon="lucide:external-link" width="16"></iconify-icon>
</button>
<p className="text-xs text-center text-stone-400 mt-4">Powered by Vagaro Booking System</p>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-stone-900 text-stone-300 py-12 border-t border-stone-800">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
<div className="col-span-1 md:col-span-2">
<span className="font-serif text-2xl tracking-tighter text-white uppercase">Blanca’s</span>
<p className="mt-4 text-stone-400 max-w-xs text-sm leading-relaxed">
                    A luxury hair studio dedicated to modern styling and personalized care. Building confidence one appointment at a time.
                </p>
</div>
<div>
<h4 className="text-white font-medium mb-4">Quick Links</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-rose-300 transition-colors" href="#home">Home</a></li>
<li><a className="hover:text-rose-300 transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-rose-300 transition-colors" href="#team">Team</a></li>
<li><a className="hover:text-rose-300 transition-colors" href="#book">Book Now</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Social</h4>
<div className="flex space-x-4">
<a className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-rose-300 hover:text-stone-900 transition-all" href="#">
<iconify-icon icon="lucide:instagram" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-rose-300 hover:text-stone-900 transition-all" href="#">
<iconify-icon icon="lucide:facebook" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-stone-800 text-xs text-stone-500 flex flex-col md:flex-row justify-between items-center">
<p>© 2023 Blanca’s Hair Studio. All rights reserved.</p>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="hover:text-white" href="#">Privacy</a>
<a className="hover:text-white" href="#">Terms</a>
</div>
</div>
</footer>

    </>
  );
}
