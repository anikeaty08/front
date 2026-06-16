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
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-zinc-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-8 hidden md:flex">
<a className="text-sm font-medium hover:text-rose-900 transition-colors" href="#">Home</a>
<a className="text-sm font-medium hover:text-rose-900 transition-colors" href="#">Services</a>
<a className="text-sm font-medium hover:text-rose-900 transition-colors" href="#">About Us</a>
</div>

<div className="flex flex-col items-center justify-center absolute left-1/2 transform -translate-x-1/2 cursor-pointer">
<div className="w-8 h-8 border border-zinc-900 rounded-full flex items-center justify-center mb-1">
<span className="text-xs font-light tracking-widest text-zinc-900">M</span>
</div>
<span className="text-xs tracking-[0.3em] font-medium text-zinc-900 uppercase">Mauve</span>
</div>
<div className="flex items-center gap-8 hidden md:flex">
<a className="text-sm font-medium hover:text-rose-900 transition-colors" href="#">Book</a>
<a className="text-sm font-medium hover:text-rose-900 transition-colors" href="#">Gift Certificate</a>
<a className="text-sm font-medium hover:text-rose-900 transition-colors" href="#">Contact</a>
</div>

<button className="md:hidden text-zinc-900">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">

<img alt="Premium Salon Interior" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-white/90"></div>
</div>
<div className="relative z-10 text-center max-w-4xl px-6 pt-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white mb-6 shadow-lg shadow-black/5">
<span className="w-1.5 h-1.5 rounded-full bg-rose-200"></span>
<span className="text-xs font-medium tracking-wide uppercase">New York's Premier Med Spa</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-6 drop-shadow-sm leading-[1.1]">
                Redefining Beauty <br/> <span className="text-rose-50 font-light italic opacity-90">Through Science.</span>
</h1>
<p className="text-lg md:text-xl text-white/95 max-w-2xl mx-auto mb-10 font-light leading-relaxed drop-shadow-md">
                Experience the pinnacle of laser treatments and aesthetic care in a sanctuary designed for your rejuvenation.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="px-8 py-4 bg-white text-zinc-900 rounded-lg text-sm font-medium hover:bg-zinc-100 transition-colors shadow-lg shadow-black/5" href="#locations">
                    Book Appointment
                </a>
<a className="px-8 py-4 bg-transparent border border-white/80 backdrop-blur-sm text-white rounded-lg text-sm font-medium hover:bg-white/10 transition-colors" href="#services">
                    View Services
                </a>
</div>
</div>
</section>

<section className="relative z-20 -mt-20 max-w-6xl mx-auto px-6">
<div className="bg-white rounded-2xl shadow-xl shadow-zinc-200/50 border border-zinc-100 p-8 md:p-12">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-zinc-100">

<div className="flex gap-4 items-start pt-4 md:pt-0">
<div className="p-3 bg-rose-50 rounded-lg text-rose-900">
<i className="w-6 h-6" data-lucide="clock"></i>
</div>
<div>
<h3 className="text-base font-medium text-zinc-900 tracking-tight mb-1">Opening Times</h3>
<p className="text-sm text-zinc-500">Sunday: 11:00 - 6:00</p>
<p className="text-sm text-zinc-500">Mon - Thu: 10:00 - 7:00</p>
<p className="text-sm text-zinc-500">Friday: 10:00 - 1:00</p>
</div>
</div>

<div className="flex gap-4 items-start pt-8 md:pt-0 md:pl-12">
<div className="p-3 bg-rose-50 rounded-lg text-rose-900">
<i className="w-6 h-6" data-lucide="map-pin"></i>
</div>
<div>
<h3 className="text-base font-medium text-zinc-900 tracking-tight mb-1">Our Locations</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                            347 Flushing Ave, Brooklyn<br/>
                            52 Bakertown Rd, Monroe
                        </p>
</div>
</div>

<div className="flex gap-4 items-start pt-8 md:pt-0 md:pl-12">
<div className="p-3 bg-rose-50 rounded-lg text-rose-900">
<i className="w-6 h-6" data-lucide="calendar"></i>
</div>
<div>
<h3 className="text-base font-medium text-zinc-900 tracking-tight mb-1">Book Now</h3>
<p className="text-sm text-zinc-500">718-484-4412</p>
<p className="text-sm text-zinc-500">845-783-0070</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<div className="flex items-center gap-2 mb-4 text-rose-900">
<i className="w-5 h-5" data-lucide="sparkles"></i>
<span className="text-sm font-medium uppercase tracking-wider">Limited Offer</span>
</div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-900 mb-6">
                        Special Promo Package
                    </h2>
<p className="text-lg text-zinc-500 mb-6 leading-relaxed">
                        Our unlimited laser packages take a new approach to hair removal. Instead of paying high prices for results that aren't guaranteed, our packages have one low price for 2 years of unlimited appointments.
                    </p>
<p className="text-lg text-zinc-500 mb-8 leading-relaxed">
                        The high-tech Diode machine delivers faster results with less discomfort than standard laser treatments. It's the permanent, affordable solution you've been waiting for.
                    </p>
<div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-zinc-200 inline-flex shadow-sm">
<div className="h-10 w-10 bg-rose-100 rounded-full flex items-center justify-center text-rose-900 font-semibold">
                            $
                         </div>
<div>
<p className="text-xs text-zinc-400 uppercase tracking-wide">Starting at</p>
<p className="text-zinc-900 font-medium">$2,800 for 2 years</p>
</div>
</div>
</div>

<div className="grid gap-6" id="locations">
<a className="group relative overflow-hidden rounded-2xl bg-white p-8 border border-zinc-200 hover:border-rose-200 transition-all duration-300 hover:shadow-lg hover:shadow-rose-100/50" href="#">
<div className="flex justify-between items-center relative z-10">
<div>
<h3 className="text-xl font-medium text-zinc-900 tracking-tight mb-2">Brooklyn Location</h3>
<p className="text-sm text-zinc-500">The W Mall, 2nd Floor</p>
</div>
<div className="h-10 w-10 rounded-full bg-zinc-50 group-hover:bg-rose-50 flex items-center justify-center transition-colors">
<i className="w-5 h-5 text-zinc-400 group-hover:text-rose-900" data-lucide="arrow-right"></i>
</div>
</div>
</a>
<a className="group relative overflow-hidden rounded-2xl bg-white p-8 border border-zinc-200 hover:border-rose-200 transition-all duration-300 hover:shadow-lg hover:shadow-rose-100/50" href="#">
<div className="flex justify-between items-center relative z-10">
<div>
<h3 className="text-xl font-medium text-zinc-900 tracking-tight mb-2">Monroe Location</h3>
<p className="text-sm text-zinc-500">52 Bakertown Rd</p>
</div>
<div className="h-10 w-10 rounded-full bg-zinc-50 group-hover:bg-rose-50 flex items-center justify-center transition-colors">
<i className="w-5 h-5 text-zinc-400 group-hover:text-rose-900" data-lucide="arrow-right"></i>
</div>
</div>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="services">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-900 mb-4">Treatment Menu</h2>
<p className="text-lg text-zinc-500">Transparent pricing for premium care.</p>
</div>

<div className="grid grid-cols-2 gap-4 mb-12">
<div className="aspect-[4/3] rounded-2xl overflow-hidden relative group cursor-pointer shadow-lg">

<img alt="Laser Treatment" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
<div className="absolute bottom-6 left-6 text-white text-xl font-medium tracking-tight drop-shadow-md">Laser</div>
</div>
<div className="aspect-[4/3] rounded-2xl overflow-hidden relative group cursor-pointer shadow-lg">

<img alt="Facial Treatment" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
<div className="absolute bottom-6 left-6 text-white text-xl font-medium tracking-tight drop-shadow-md">Face</div>
</div>
</div>

<div className="bg-zinc-50 rounded-2xl p-8 md:p-12 border border-zinc-100">
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">

<div className="space-y-6">
<div className="flex items-end justify-between border-b border-dashed border-zinc-200 pb-2">
<span className="text-base font-medium text-zinc-800">Full Body</span>
<span className="text-base font-medium text-rose-900">$500</span>
</div>
<div className="flex items-end justify-between border-b border-dashed border-zinc-200 pb-2">
<span className="text-base text-zinc-600">Hairline Front Only</span>
<span className="text-base text-zinc-500">$70</span>
</div>
<div className="flex items-end justify-between border-b border-dashed border-zinc-200 pb-2">
<span className="text-base text-zinc-600">Legs Lower &amp; Upper</span>
<span className="text-base text-zinc-500">$240</span>
</div>
<div className="flex items-end justify-between border-b border-dashed border-zinc-200 pb-2">
<span className="text-base text-zinc-600">Legs Lower</span>
<span className="text-base text-zinc-500">$110</span>
</div>
<div className="flex items-end justify-between border-b border-dashed border-zinc-200 pb-2">
<span className="text-base text-zinc-600">Arms Upper And Lower</span>
<span className="text-base text-zinc-500">$150</span>
</div>
<div className="flex items-end justify-between border-b border-dashed border-zinc-200 pb-2">
<span className="text-base text-zinc-600">Arms Lower</span>
<span className="text-base text-zinc-500">$80</span>
</div>
</div>

<div className="space-y-6">
<div className="flex items-end justify-between border-b border-dashed border-zinc-200 pb-2">
<span className="text-base font-medium text-zinc-800">Hair Line Full Front &amp; Back</span>
<span className="text-base font-medium text-rose-900">$120</span>
</div>
<div className="flex items-end justify-between border-b border-dashed border-zinc-200 pb-2">
<span className="text-base text-zinc-600">Hairline Back Only</span>
<span className="text-base text-zinc-500">$70</span>
</div>
<div className="flex items-end justify-between border-b border-dashed border-zinc-200 pb-2">
<span className="text-base text-zinc-600">Legs Upper</span>
<span className="text-base text-zinc-500">$145</span>
</div>
<div className="flex items-end justify-between border-b border-dashed border-zinc-200 pb-2">
<span className="text-base text-zinc-600">Brazillian</span>
<span className="text-base text-zinc-500">$145</span>
</div>
<div className="flex items-end justify-between border-b border-dashed border-zinc-200 pb-2">
<span className="text-base text-zinc-600">Arms Upper</span>
<span className="text-base text-zinc-500">$80</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 overflow-hidden bg-zinc-900">
<div className="absolute inset-0 opacity-50">

<img alt="Spa Treatment" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-transparent"></div>
<div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col items-start justify-center h-full">
<p className="text-rose-200 font-medium tracking-widest uppercase mb-4 text-sm">Discover Our Services</p>
<h2 className="text-5xl md:text-7xl font-medium text-white tracking-tight mb-8">
                We do Laser. <br/>
<span className="text-zinc-400">Excellence in every pulse.</span>
</h2>
<button className="flex items-center gap-3 text-white border-b border-white pb-1 hover:text-rose-200 hover:border-rose-200 transition-colors">
<span className="text-lg">Contact us to learn more</span>
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</div>
</section>

<footer className="bg-zinc-950 text-zinc-400 py-16 border-t border-zinc-800">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

<div>
<h4 className="text-white text-base font-medium tracking-tight mb-6 flex items-center gap-2">
<i className="w-4 h-4 text-rose-500" data-lucide="map-pin"></i> Brooklyn Hours
                    </h4>
<div className="space-y-3 text-sm">
<div className="flex justify-between border-b border-zinc-800 pb-2">
<span>Sunday</span>
<span className="text-zinc-500">11:00 - 6:00</span>
</div>
<div className="flex justify-between border-b border-zinc-800 pb-2">
<span>Monday - Thursday</span>
<span className="text-zinc-500">10:00 - 7:00</span>
</div>
<div className="flex justify-between border-b border-zinc-800 pb-2">
<span>Friday</span>
<span className="text-zinc-500">10:00 - 3:00</span>
</div>
</div>
</div>

<div>
<h4 className="text-white text-base font-medium tracking-tight mb-6 flex items-center gap-2">
<i className="w-4 h-4 text-rose-500" data-lucide="map-pin"></i> Monroe Hours
                    </h4>
<div className="space-y-3 text-sm">
<div className="flex justify-between border-b border-zinc-800 pb-2">
<span>Sunday</span>
<span className="text-zinc-500">11:00 - 6:00</span>
</div>
<div className="flex justify-between border-b border-zinc-800 pb-2">
<span>Monday - Thursday</span>
<span className="text-zinc-500">10:00 - 6:00</span>
</div>
<div className="flex justify-between border-b border-zinc-800 pb-2">
<span>Friday</span>
<span className="text-zinc-500">10:00 - 1:00</span>
</div>
</div>
</div>

<div>
<h4 className="text-white text-base font-medium tracking-tight mb-6 flex items-center gap-2">
<i className="w-4 h-4 text-rose-500" data-lucide="phone"></i> Contact Us
                    </h4>
<div className="space-y-4 text-sm">
<p>The W Mall, 347 Flushing Ave, 2nd Floor, Brooklyn NY 11205</p>
<p>52 Bakertown Rd Monroe NY 10950</p>
<div className="pt-4 space-y-2">
<p><span className="text-zinc-500 w-16 inline-block">Phone:</span> <span className="text-white">718-484-4412</span></p>
<p><span className="text-zinc-500 w-16 inline-block">Phone:</span> <span className="text-white">845-783-0070</span></p>
<p><span className="text-zinc-500 w-16 inline-block">Email:</span> <a className="text-white hover:underline" href="#">info@mauvespa.com</a></p>
</div>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-900 text-xs text-zinc-600">
<p>© 2026 Mauve Spa. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
