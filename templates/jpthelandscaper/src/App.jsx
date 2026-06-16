import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



document.addEventListener("DOMContentLoaded", function() {
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('active');
}
});
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-nav">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2.5 group" href="#">
<div className="w-9 h-9 bg-green-700 rounded-lg flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform duration-300">
<iconify-icon icon="solar:leaf-bold" width="20"></iconify-icon>
</div>
<div className="flex flex-col leading-none">
<span className="text-lg font-semibold tracking-tight text-stone-900">JOSE'S</span>
<span className="text-[0.65rem] uppercase tracking-widest text-green-700 font-medium">Gardening &amp; Tree Services</span>
</div>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-stone-600 hover:text-green-700 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-stone-600 hover:text-green-700 transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-stone-600 hover:text-green-700 transition-colors" href="#hours">Info</a>
<a className="inline-flex items-center gap-2 px-4 py-2 bg-stone-900 text-white text-xs font-medium uppercase tracking-wide rounded-md hover:bg-stone-800 transition-all" href="#contact">
                    Get Estimate
                    <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<button className="md:hidden text-stone-800">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
<div className="reveal z-10">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-100 text-green-800 text-xs font-medium uppercase tracking-wider mb-8 shadow-sm">
<iconify-icon icon="solar:tag-price-bold" width="14"></iconify-icon>
                    New Customer Offer: 50% Off First Month
                </div>
<h1 className="text-5xl lg:text-7xl font-medium tracking-tight text-stone-900 leading-[1.05] mb-6">
                    Expert Care for <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-500">Your Garden.</span>
</h1>
<p className="text-lg text-stone-500 max-w-lg mb-8 leading-relaxed">
                    Professional lawn care, tree trimming, and landscaping construction in Santa Ana and Orange County. We make your outdoor space thrive.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-8 py-3.5 bg-green-700 text-white rounded-lg font-medium hover:bg-green-800 transition-all shadow-lg shadow-green-900/10 group" href="#contact">
                        Request Free Estimate
                        <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:clipboard-check-linear" width="18"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center px-8 py-3.5 bg-white border border-stone-200 text-stone-700 rounded-lg font-medium hover:bg-stone-50 transition-all" href="tel:7144371225">
<iconify-icon className="mr-2 text-stone-400" icon="solar:phone-calling-linear" width="18"></iconify-icon>
                        (714) 437-1225
                    </a>
</div>
</div>

<div className="reveal delay-100 relative">
<div className="absolute inset-0 bg-gradient-to-tr from-green-100/50 to-transparent rounded-2xl transform translate-x-4 translate-y-4 -z-10"></div>
<img alt="Beautiful manicured lawn and garden" className="w-full h-[500px] object-cover rounded-2xl shadow-2xl border border-white/50" src="https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>

<div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-xl shadow-xl border border-stone-100 max-w-xs hidden md:block">
<div className="flex items-start gap-4">
<div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 shrink-0">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-stone-900">Satisfaction Guaranteed</p>
<p className="text-xs text-stone-500 mt-1">No obligation required, you can cancel our maintenance service anytime.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50 border-t border-stone-200" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 reveal">
<div>
<span className="text-green-700 font-medium text-sm tracking-widest uppercase mb-2 block">Our Expertise</span>
<h2 className="text-3xl md:text-4xl font-medium text-stone-900 tracking-tight">Comprehensive Services</h2>
</div>
<p className="text-stone-500 max-w-md mt-4 md:mt-0 text-sm">
                    From routine maintenance to complex tree removal and hardscaping construction.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-white p-6 rounded-xl border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal">
<div className="w-12 h-12 bg-stone-50 rounded-lg flex items-center justify-center text-stone-600 group-hover:bg-green-600 group-hover:text-white transition-colors mb-6">
<iconify-icon icon="solar:spedometer-low-linear" width="24"></iconify-icon> 
</div>
<h3 className="text-lg font-medium text-stone-900 mb-2">Lawn Care</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                        Expert lawn maintenance, mowing, and edging for your home or office.
                    </p>
</div>

<div className="group bg-white p-6 rounded-xl border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal delay-75">
<div className="w-12 h-12 bg-stone-50 rounded-lg flex items-center justify-center text-stone-600 group-hover:bg-green-600 group-hover:text-white transition-colors mb-6">
<iconify-icon icon="solar:leaf-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-2">Tree Trimming</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                        Professional palm and tree trimming services. No job is too big or too small.
                    </p>
</div>

<div className="group bg-white p-6 rounded-xl border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal delay-150">
<div className="w-12 h-12 bg-stone-50 rounded-lg flex items-center justify-center text-stone-600 group-hover:bg-green-600 group-hover:text-white transition-colors mb-6">
<iconify-icon icon="solar:trash-bin-trash-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-2">Stump Removal</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                        Remove unsightly stumps without ruining your yard. Clean and efficient.
                    </p>
</div>

<div className="group bg-white p-6 rounded-xl border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal delay-200">
<div className="w-12 h-12 bg-stone-50 rounded-lg flex items-center justify-center text-stone-600 group-hover:bg-green-600 group-hover:text-white transition-colors mb-6">
<iconify-icon icon="solar:hammer-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-2">Construction</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                        Hardscaping, fences, and garden construction to build your dream outdoor space.
                    </p>
</div>
</div>

<div className="mt-16 pt-16 border-t border-stone-200 reveal">
<h3 className="text-lg font-medium text-stone-900 mb-6">Additional Capabilities</h3>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="flex items-center gap-2 text-stone-600 text-sm">
<iconify-icon className="text-green-600" icon="solar:check-circle-linear"></iconify-icon>
                        Sprinkler Service
                    </div>
<div className="flex items-center gap-2 text-stone-600 text-sm">
<iconify-icon className="text-green-600" icon="solar:check-circle-linear"></iconify-icon>
                        Outdoor Lighting
                    </div>
<div className="flex items-center gap-2 text-stone-600 text-sm">
<iconify-icon className="text-green-600" icon="solar:check-circle-linear"></iconify-icon>
                        Fence Installation
                    </div>
<div className="flex items-center gap-2 text-stone-600 text-sm">
<iconify-icon className="text-green-600" icon="solar:check-circle-linear"></iconify-icon>
                        Flower Care
                    </div>
<div className="flex items-center gap-2 text-stone-600 text-sm">
<iconify-icon className="text-green-600" icon="solar:check-circle-linear"></iconify-icon>
                        Succulents
                    </div>
<div className="flex items-center gap-2 text-stone-600 text-sm">
<iconify-icon className="text-green-600" icon="solar:check-circle-linear"></iconify-icon>
                        Gravel &amp; Mulch
                    </div>
<div className="flex items-center gap-2 text-stone-600 text-sm">
<iconify-icon className="text-green-600" icon="solar:check-circle-linear"></iconify-icon>
                        Artificial Grass
                    </div>
<div className="flex items-center gap-2 text-stone-600 text-sm">
<iconify-icon className="text-green-600" icon="solar:check-circle-linear"></iconify-icon>
                        Plumbing &amp; Drains
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="hours">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-12 gap-12">

<div className="lg:col-span-5 reveal">
<h2 className="text-2xl font-medium text-stone-900 mb-6">Information &amp; Hours</h2>
<div className="space-y-8">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-900 shrink-0">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-stone-900">Service Area</p>
<p className="text-sm text-stone-500 mt-1">Santa Ana, CA 92705<br/>Serving all of Orange County</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-900 shrink-0">
<iconify-icon icon="solar:phone-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-stone-900">Contact</p>
<a className="text-sm text-stone-500 mt-1 block hover:text-green-700 transition-colors" href="tel:7144371225">(714) 437-1225</a>
<a className="text-sm text-stone-500 block hover:text-green-700 transition-colors" href="mailto:j-partida@att.net">j-partida@att.net</a>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-900 shrink-0">
<iconify-icon icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
<div className="w-full">
<p className="text-sm font-semibold text-stone-900 mb-2">Operating Hours</p>
<div className="grid grid-cols-2 gap-x-8 gap-y-2 text-xs text-stone-500">
<div className="flex justify-between border-b border-stone-100 pb-1"><span>Mon - Fri</span> <span>7:00am - 6:00pm</span></div>
<div className="flex justify-between border-b border-stone-100 pb-1"><span>Saturday</span> <span>7:00am - 6:00pm</span></div>
<div className="flex justify-between border-b border-stone-100 pb-1"><span>Sunday</span> <span>Appointment Only</span></div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7 h-80 lg:h-auto rounded-2xl overflow-hidden border border-stone-200 reveal delay-100 shadow-inner">
<iframe allowfullscreen="" className="grayscale hover:grayscale-0 transition-all duration-700" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106146.06669935105!2d-117.94723055498877!3d33.745505021575845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd28087968e73b%3A0x6280b57e7f7b3d32!2sSanta%20Ana%2C%20CA!5e0!3m2!1sen!2sus!4v1683928492000!5m2!1sen!2sus" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-900 text-white relative overflow-hidden" id="contact">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-900/20 rounded-full blur-3xl pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10">
<div className="text-center mb-12 reveal">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Ready to Transform Your Landscape?</h2>
<p className="text-stone-400">Get your free estimate today. Sign up for service and get your first month at 50% off.</p>
</div>
<form className="space-y-4 bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm reveal delay-100">
<div className="grid md:grid-cols-2 gap-4">
<div className="relative">
<input className="floating-input peer block w-full appearance-none rounded-lg border border-stone-700 bg-stone-900/50 px-4 py-3 text-white focus:border-green-500 focus:outline-none focus:ring-0 transition-colors" id="name" placeholder=" " type="text"/>
<label className="absolute left-4 top-3 z-10 origin-[0] -translate-y-0 scale-100 text-stone-500 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-90 peer-focus:-translate-y-0 peer-focus:bg-stone-900 peer-focus:text-green-500" htmlFor="name">Name</label>
</div>
<div className="relative">
<input className="floating-input peer block w-full appearance-none rounded-lg border border-stone-700 bg-stone-900/50 px-4 py-3 text-white focus:border-green-500 focus:outline-none focus:ring-0 transition-colors" id="email" placeholder=" " type="email"/>
<label className="absolute left-4 top-3 z-10 origin-[0] -translate-y-0 scale-100 text-stone-500 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-90 peer-focus:-translate-y-0 peer-focus:bg-stone-900 peer-focus:text-green-500" htmlFor="email">Email</label>
</div>
</div>
<div className="relative">
<input className="floating-input peer block w-full appearance-none rounded-lg border border-stone-700 bg-stone-900/50 px-4 py-3 text-white focus:border-green-500 focus:outline-none focus:ring-0 transition-colors" id="phone" placeholder=" " type="tel"/>
<label className="absolute left-4 top-3 z-10 origin-[0] -translate-y-0 scale-100 text-stone-500 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-90 peer-focus:-translate-y-0 peer-focus:bg-stone-900 peer-focus:text-green-500" htmlFor="phone">Phone</label>
</div>
<div className="relative">
<textarea className="floating-input peer block w-full appearance-none rounded-lg border border-stone-700 bg-stone-900/50 px-4 py-3 text-white focus:border-green-500 focus:outline-none focus:ring-0 transition-colors" id="message" placeholder=" " rows="3"></textarea>
<label className="absolute left-4 top-3 z-10 origin-[0] -translate-y-0 scale-100 text-stone-500 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-90 peer-focus:-translate-y-0 peer-focus:bg-stone-900 peer-focus:text-green-500" htmlFor="message">How can we help?</label>
</div>
<button className="w-full py-3.5 bg-green-600 hover:bg-green-500 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2" type="button">
                    Send Request
                    <iconify-icon icon="solar:plain-2-linear" width="18"></iconify-icon>
</button>
</form>
</div>
</section>

<footer className="bg-stone-950 text-stone-500 py-12 border-t border-stone-900">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-stone-800 rounded flex items-center justify-center text-white text-xs">J</div>
<span className="text-stone-300 font-medium text-sm tracking-tight">Jose's Gardening &amp; Tree Services</span>
</div>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all" icon="logos:facebook" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all" icon="logos:google-icon" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all" icon="logos:yelp" width="20"></iconify-icon></a>
</div>
<p className="text-xs text-stone-600">© 2023 Jose's Gardening. All rights reserved.</p>
</div>
</footer>

    </>
  );
}
