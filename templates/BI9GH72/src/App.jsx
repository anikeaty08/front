import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
lucide.createIcons();

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 backdrop-blur bg-white/80">
<div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4 md:px-8">
<a className="text-xl font-semibold tracking-tight font-sans" href="#">NewHomes<span className="text-indigo-600 font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>AskBrandy</span></a>
<nav className="hidden md:flex gap-8 text-sm">
<a className="hover:text-indigo-600 transition font-sans" href="#about" style={{transition: 'outline 0.1s ease-in-out'}}>About</a>
<a className="hover:text-indigo-600 transition font-sans" href="#listings" style={{transition: 'outline 0.1s ease-in-out'}}>Listings</a>
<a className="hover:text-indigo-600 transition font-sans" href="#why" style={{transition: 'outline 0.1s ease-in-out'}}>Why Me</a>
<a className="hover:text-indigo-600 transition font-sans" href="#contact" style={{transition: 'outline 0.1s ease-in-out'}}>Contact</a>
</nav>
<div className="flex items-center gap-4 text-sm">
<span className="hidden sm:block font-sans"><strong className="font-sans">(555)</strong> 123-4567</span>
<a className="px-4 py-2 rounded-md bg-indigo-600 text-white shadow-sm hover:bg-indigo-700 transition font-sans" href="#lead" style={{transition: 'outline 0.1s ease-in-out'}}>Free Consultation</a>
</div>
</div>
</header>

<section className="text-white" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&amp', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}>
<div className="bg-gray-900/50" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="max-w-6xl mx-auto min-h-[90vh] flex flex-col items-center justify-center text-center px-4">
<h1 className="text-4xl md:text-6xl tracking-tight animate-fadeUp delay-[200ms] font-bricolage font-semibold">Find Your Dream New Home Today</h1>
<p className="mt-4 text-lg md:text-2xl animate-fadeUp delay-[400ms] font-bricolage font-semibold">Your DFW real estate expert. Modern homes. Service tailored just for you.</p>

<form aria-label="Contact form" className="w-full max-w-xl mt-10 space-y-5 text-left animate-fadeUp delay-[600ms]">
<div className="">
<label className="block text-sm mb-1 text-white/90 font-sans" htmlFor="hero-name">Name</label>
<input autocomplete="name" className="w-full rounded-md border border-white/30 bg-white/90 text-gray-900 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 px-4 py-3 transition" id="hero-name" name="name" placeholder="John Doe" required="" style={{transition: 'outline 0.1s ease-in-out'}} type="text"/>
</div>
<div>
<label className="block text-sm mb-1 text-white/90 font-sans" htmlFor="hero-email">Email</label>
<input autocomplete="email" className="w-full rounded-md border border-white/30 bg-white/90 text-gray-900 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 px-4 py-3 transition" id="hero-email" name="email" placeholder="you@example.com" required="" style={{transition: 'outline 0.1s ease-in-out'}} type="email"/>
</div>
<div>
<label className="block text-sm mb-1 text-white/90 font-sans" htmlFor="hero-phone">Phone</label>
<input autocomplete="tel" className="w-full rounded-md border border-white/30 bg-white/90 text-gray-900 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 px-4 py-3 transition" id="hero-phone" name="phone" placeholder="(555) 987-6543" style={{transition: 'outline 0.1s ease-in-out'}} type="tel"/>
</div>
<div>
<label className="block text-sm mb-1 text-white/90 font-sans" htmlFor="hero-message">Message</label>
<textarea className="w-full rounded-md border border-white/30 bg-white/90 text-gray-900 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 px-4 py-3 transition" id="hero-message" name="message" placeholder="Tell me what you’re looking for…" rows="4" style={{transition: 'outline 0.1s ease-in-out'}}></textarea>
</div>
<button className="w-full py-3 rounded-md bg-indigo-600/90 hover:bg-indigo-700 transition text-lg font-semibold shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 font-sans" style={{transition: 'outline 0.1s ease-in-out'}} type="submit">Send Message</button>
</form>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto py-20 px-4" id="about">
<div className="grid md:grid-cols-2 gap-12 items-center">
<img alt="Brandy Jennings" className="w-full h-72 object-cover rounded-lg shadow-lg animate-fadeUp" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="">
<h2 className="text-3xl md:text-4xl tracking-tight mb-4 animate-fadeUp delay-[200ms] font-bricolage font-semibold">Meet Brandy Jennings</h2>
<p className="text-gray-600 leading-relaxed animate-fadeUp delay-[300ms] font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>With <strong className="font-sans">20+ years of experience</strong> helping clients discover exceptional new-construction homes, Brandy leverages unmatched market knowledge, builder relationships, and negotiation skill to ensure you land the perfect property—at the perfect price.</p>
<div className="mt-6 flex flex-col gap-2 text-sm animate-fadeUp delay-[400ms]">
<span className="font-sans"><strong className="font-sans">Phone:</strong> (555) 123-4567</span>
<span><strong className="font-sans">Email:</strong> <a className="text-indigo-600 hover:underline font-sans" href="mailto:brandy@newhomesbybrandy.com" style={{transition: 'outline 0.1s ease-in-out'}}>brandy@newhomesbybrandy.com</a></span>
<div className="flex gap-4 mt-2">
<svg className="lucide lucide-linkedin hover:text-indigo-600" data-lucide="linkedin" fill="none" height="24" href="#" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{transition: 'outline 0.1s ease-in-out'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
<svg className="lucide lucide-instagram hover:text-indigo-600" data-lucide="instagram" fill="none" height="24" href="#" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{transition: 'outline 0.1s ease-in-out'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
<svg className="lucide lucide-facebook hover:text-indigo-600" data-lucide="facebook" fill="none" height="24" href="#" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{transition: 'outline 0.1s ease-in-out'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</div>
</div>
</div>
</div>
</section>

<div className="max-w-6xl mx-auto border-t border-gray-200" style={{transition: 'outline 0.1s ease-in-out'}}></div>

<section className="max-w-6xl mr-auto ml-auto pt-20 pr-4 pb-20 pl-4" id="aura-emcf08l08"></section>

<section className="bg-gray-50 py-20 px-4" id="why" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl md:text-4xl tracking-tight text-center mb-14 animate-fade font-bricolage font-semibold">Why Clients Choose Brandy</h2>
<div className="grid md:grid-cols-3 gap-10">
<div className="flex flex-col items-center text-center p-6 animate-fadeUp">
<svg className="lucide lucide-map-pin w-14 h-14 mb-4 flex items-center justify-center rounded-full bg-indigo-50 text-indigo-600" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{transition: 'outline 0.1s ease-in-out'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<h4 className="font-semibold mb-2 font-sans">Exclusive Communities</h4>
<p className="text-gray-600 text-sm font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>Private access to premier new-build neighborhoods before they hit the market.</p>
</div>
<div className="flex flex-col items-center text-center p-6 animate-fadeUp delay-[150ms]">
<svg className="lucide lucide-eye w-14 h-14 mb-4 flex items-center justify-center rounded-full bg-indigo-50 text-indigo-600" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{transition: 'outline 0.1s ease-in-out'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<h4 className="font-semibold mb-2 font-sans">Personalized Tours</h4>
<p className="text-gray-600 text-sm font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>Tailored walkthroughs focused on your lifestyle, design, and investment goals.</p>
</div>
<div className="flex flex-col items-center text-center p-6 animate-fadeUp delay-[300ms]">
<svg className="lucide lucide-handshake w-14 h-14 mb-4 flex items-center justify-center rounded-full bg-indigo-50 text-indigo-600" data-lucide="handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{transition: 'outline 0.1s ease-in-out'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 17 2 2a1 1 0 1 0 3-3"></path><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path d="m21 3 1 11h-2"></path><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path><path d="M3 4h8"></path></svg>
<h4 className="font-semibold mb-2 font-sans">Negotiation &amp; Financing</h4>
<p className="text-gray-600 text-sm font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>Leverage decades of builder relationships and lending expertise for the best deal.</p>
</div>
</div>
</div>
</section>

<section className="relative" id="lead">
<div className="absolute inset-0 overflow-hidden">
<img alt="" className="w-full h-full object-cover blur-sm scale-110" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
</div>
<div className="relative bg-white/80 backdrop-blur py-24 px-4">
<div className="max-w-xl mx-auto">
<h2 className="text-3xl md:text-4xl tracking-tight text-center mb-8 animate-fade font-bricolage font-semibold">Get Early Access to New Homes</h2>
<form className="space-y-6 animate-fadeUp delay-[200ms]">
<div>
<label className="block text-sm mb-1 font-sans">Name</label>
<input className="w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" placeholder="John Doe" style={{transition: 'outline 0.1s ease-in-out'}} type="text"/>
</div>
<div>
<label className="block text-sm mb-1 font-sans">Email</label>
<input className="w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" placeholder="you@example.com" style={{transition: 'outline 0.1s ease-in-out'}} type="email"/>
</div>
<div>
<label className="block text-sm mb-1 font-sans">Phone</label>
<input className="w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" placeholder="(555) 987-6543" style={{transition: 'outline 0.1s ease-in-out'}} type="tel"/>
</div>
<div>
<label className="block text-sm mb-1 font-sans">Desired Location / Budget</label>
<input className="w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" placeholder="e.g., Austin • $600-800k" style={{transition: 'outline 0.1s ease-in-out'}} type="text"/>
</div>
<button className="w-full py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition font-sans" style={{transition: 'outline 0.1s ease-in-out'}} type="submit">Get Access Now</button>
</form>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto py-20 px-4">
<h2 className="text-3xl md:text-4xl tracking-tight text-center mb-14 animate-fade font-bricolage font-semibold">Client Testimonials</h2>
<div className="grid md:grid-cols-2 gap-8">
</div>
</section>

<footer className="bg-gray-900 text-gray-300 py-12" id="contact" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-4">
<div>
<h3 className="text-xl font-semibold mb-4 tracking-tight text-white font-sans">Contact</h3>
<p className="font-sans">Brandy Jennings, Licensed Realtor®</p>
<p className="font-sans">(555) 123-4567</p>
<p><a className="hover:text-white underline font-sans" href="mailto:brandy@newhomesbybrandy.com">brandy@newhomesbybrandy.com</a></p>
<div className="flex gap-4 mt-4">
<svg className="lucide lucide-linkedin hover:text-white" data-lucide="linkedin" fill="none" height="24" href="#" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
<svg className="lucide lucide-instagram hover:text-white" data-lucide="instagram" fill="none" height="24" href="#" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
<svg className="lucide lucide-facebook hover:text-white" data-lucide="facebook" fill="none" height="24" href="#" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</div>
</div>
<div>
<h3 className="text-xl font-semibold mb-4 tracking-tight text-white font-sans">Quick Links</h3>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-white font-sans" href="#listings">Featured Listings</a></li>
<li><a className="hover:text-white font-sans" href="#lead">Get Early Access</a></li>
<li><a className="hover:text-white font-sans" href="#why">Why Choose Brandy</a></li>
<li><a className="hover:text-white font-sans" href="#">Privacy Policy</a></li>
</ul>
</div>
<div>
<h3 className="text-xl font-semibold mb-4 tracking-tight text-white font-sans">Disclaimer</h3>
<p className="text-xs leading-relaxed font-sans">© 2023 Brandy Jennings. All rights reserved. Brokerage affiliation: Example Realty, 123 Main St, Suite 200, Austin, TX 78701. Information deemed reliable but not guaranteed and is subject to change without notice.</p>
</div>
</div>
<div className="border-t border-gray-800 mt-10 pt-6 text-center text-xs" style={{transition: 'outline 0.1s ease-in-out'}}>
<p className="font-sans">Website design for demonstration purposes only.</p>
</div>
</footer>




    </>
  );
}
