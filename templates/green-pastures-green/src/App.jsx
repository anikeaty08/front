import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
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
      

<nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-zinc-200/50 transition-all duration-300">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="flex transition-transform duration-300 text-white bg-slate-950 w-6 h-6 rounded-md shadow-sm items-center justify-center">
<span className="font-normal text-xs">G</span>
</div>
<span className="text-sm font-medium tracking-tight text-zinc-900">Green Pastures</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-normal text-zinc-500 hover:text-zinc-900 transition-colors" href="#expertise">Expertise</a>
<a className="hover:text-zinc-900 transition-colors text-xs font-normal text-zinc-500" href="#about">Philosophy</a>
<a className="text-xs font-normal text-zinc-500 hover:text-zinc-900 transition-colors" href="#contact">Contact</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 bg-zinc-900 text-white rounded-md text-xs font-normal hover:bg-zinc-800 transition-colors" href="#contact">
                Book Consultation
            </a>
<button className="md:hidden text-zinc-500 hover:text-zinc-900 transition-colors">
<iconify-icon height="20" icon="solar:hamburger-menu-linear" width="20"></iconify-icon>
</button>
</div>
</nav>

<section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-zinc-50">
<div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-16 items-center relative z-10">
<div className="reveal mt-12 md:mt-0 active">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 bg-white text-zinc-500 text-xs font-normal tracking-wide mb-8 shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="inline-flex bg-lime-50 w-2 h-2 rounded-full relative"></span>
</span>
                    Based in Dubai, UAE
                </div>
<h1 className="md:text-6xl leading-[1.1] text-4xl font-medium text-zinc-900 tracking-tight mb-6">
                    Bespoke outdoor environments for luxury living.
                </h1>
<p className="text-base md:text-lg text-zinc-500 max-w-md mb-10 leading-relaxed font-light">
                    Over a decade of excellence in crafting premium residential and commercial landscapes. We transform spaces with uncompromising quality and architectural precision.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-md hover:bg-zinc-800 transition-all text-sm font-normal shadow-sm group" href="#contact">
                        Start your project
                        <iconify-icon className="group-hover:translate-x-0.5 transition-transform" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-zinc-200 text-zinc-900 rounded-md hover:bg-zinc-50 transition-all text-sm font-normal shadow-sm" href="#expertise">
                        Explore services
                    </a>
</div>
<div className="mt-16 flex items-center gap-8 border-t border-zinc-200 pt-8">
<div>
<span className="block text-2xl font-medium tracking-tight text-zinc-900">10+</span>
<span className="text-xs text-zinc-500">Years Experience</span>
</div>
<div>
<span className="block text-2xl font-medium tracking-tight text-zinc-900">100%</span>
<span className="text-xs text-zinc-500">Premium Execution</span>
</div>
</div>
</div>

<div className="relative h-[60vh] md:h-[80vh] w-full rounded-2xl overflow-hidden reveal delay-200 shadow-2xl shadow-zinc-200/50 active">
<img alt="Luxury Villa Landscape Dubai" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1721222204128-3f8262e14f35?w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/20 to-transparent"></div>
</div>
</div>
</section>

<section className="py-32 bg-white relative" id="expertise">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20 max-w-2xl reveal">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-900 mb-4">Comprehensive Landscaping Excellence</h2>
<p className="text-sm text-zinc-500 leading-relaxed font-light">
                    We specialize in end-to-end outdoor transformations. From conceptual design to flawless installation, our services are tailored to the unique climate and luxury standards of the UAE.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
<div className="reveal group">
<div className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-700 mb-6 group-hover:bg-zinc-100 group-hover:border-zinc-200 transition-all">
<iconify-icon height="20" icon="solar:home-angle-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-zinc-900 mb-2">Residential &amp; Commercial</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">
                        Tailored landscape architecture for luxury villas, corporate headquarters, and premium real estate developments.
                    </p>
</div>
<div className="reveal delay-100 group">
<div className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-700 mb-6 group-hover:bg-zinc-100 group-hover:border-zinc-200 transition-all">
<iconify-icon height="20" icon="solar:cup-star-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-zinc-900 mb-2">Sports Turf Installation</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">
                        Professional-grade turf solutions for tennis courts, padel arenas, and private athletic facilities, built to international standards.
                    </p>
</div>
<div className="reveal delay-200 group">
<div className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-700 mb-6 group-hover:bg-zinc-100 group-hover:border-zinc-200 transition-all">
<iconify-icon height="20" icon="solar:gamepad-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-zinc-900 mb-2">Kids Play Areas</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">
                        Safe, stimulating, and aesthetically pleasing recreational zones designed with premium, impact-absorbing materials.
                    </p>
</div>
<div className="reveal group">
<div className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-700 mb-6 group-hover:bg-zinc-100 group-hover:border-zinc-200 transition-all">
<iconify-icon height="20" icon="solar:waterdrops-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-zinc-900 mb-2">Automatic Irrigation</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">
                        Smart, water-efficient irrigation networks utilizing advanced sensor technology to maintain pristine greenery in the desert climate.
                    </p>
</div>
<div className="reveal delay-100 group">
<div className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-700 mb-6 group-hover:bg-zinc-100 group-hover:border-zinc-200 transition-all">
<iconify-icon height="20" icon="solar:leaf-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-zinc-900 mb-2">Artificial &amp; Natural Grass</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">
                        Impeccable lawn installation offering the choice between resilient native flora or hyper-realistic, low-maintenance artificial turf.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-zinc-50" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="relative h-[500px] rounded-2xl overflow-hidden reveal shadow-sm">
<img alt="Detail of landscaping" className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1734079692102-01de4d42697d?w=1600&amp;q=80"/>
</div>
<div className="reveal delay-100">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-900 mb-6">Driven by Design. Grounded in Quality.</h2>
<div className="space-y-6 text-sm text-zinc-500 leading-relaxed font-light">
<p>
                            Green Pastures was founded on a singular vision: to elevate the standard of outdoor living in the UAE. For over ten years, we have partnered with discerning homeowners and leading developers to craft spaces that blur the line between architecture and nature.
                        </p>
<p className="">
                            We reject the ordinary. Every stone pathway, every blade of grass, and every drop of water is orchestrated with intent. Our approach combines rigorous project management with unparalleled aesthetic sensibility, ensuring your investment matures beautifully over time.
                        </p>
</div>
<ul className="mt-10 space-y-4">
<li className="flex items-center gap-3 text-sm text-zinc-900 font-normal">
<iconify-icon className="text-zinc-400" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                            Bespoke Architectural Integration
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-900 font-normal">
<iconify-icon className="text-zinc-400" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                            Sustainable Resource Management
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-900 font-normal">
<iconify-icon className="text-zinc-400" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                            Turnkey Project Execution
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white border-t border-zinc-100" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 lg:gap-24">
<div className="reveal">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-900 mb-4">Initiate a Project</h2>
<p className="text-sm text-zinc-500 mb-10 font-light leading-relaxed">
                        Consult with our design architects to discuss your vision. Provide your details below, and our team will contact you to schedule an initial site assessment.
                    </p>
<form action="#" className="space-y-5">
<div className="grid grid-cols-2 gap-5">
<div>
<label className="block text-xs font-normal text-zinc-700 mb-1.5" htmlFor="firstName">First Name</label>
<input className="block w-full appearance-none rounded-md border border-zinc-200 bg-zinc-50/50 px-3 py-2 text-sm text-zinc-900 focus:border-zinc-400 focus:bg-white focus:outline-none transition-colors" id="firstName" placeholder="John" type="text"/>
</div>
<div>
<label className="block text-xs font-normal text-zinc-700 mb-1.5" htmlFor="lastName">Last Name</label>
<input className="block w-full appearance-none rounded-md border border-zinc-200 bg-zinc-50/50 px-3 py-2 text-sm text-zinc-900 focus:border-zinc-400 focus:bg-white focus:outline-none transition-colors" id="lastName" placeholder="Doe" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-normal text-zinc-700 mb-1.5" htmlFor="email">Email Address</label>
<input className="block w-full appearance-none rounded-md border border-zinc-200 bg-zinc-50/50 px-3 py-2 text-sm text-zinc-900 focus:border-zinc-400 focus:bg-white focus:outline-none transition-colors" id="email" placeholder="john@example.com" type="email"/>
</div>
<div className="">
<label className="block text-xs font-normal text-zinc-700 mb-1.5" htmlFor="service">Primary Interest</label>
<div className="relative">
<select className="block appearance-none focus:border-zinc-400 focus:bg-white focus:outline-none transition-colors text-sm text-zinc-900 bg-zinc-50/50 w-full border-zinc-200 border rounded-md pt-2 pr-10 pb-2 pl-3" id="service">
<option disabled="" selected="" value="">Select a service...</option>
<option value="residential">Residential Landscaping</option>
<option value="commercial">Commercial Landscaping</option>
<option value="turf">Sports Turf Installation</option>
<option value="play">Kids Play Areas</option>
<option value="irrigation">Irrigation Systems</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-zinc-500">
<iconify-icon height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="">
<label className="block text-xs font-normal text-zinc-700 mb-1.5" htmlFor="message">Project Details</label>
<textarea className="block w-full appearance-none rounded-md border border-zinc-200 bg-zinc-50/50 px-3 py-2 text-sm text-zinc-900 focus:border-zinc-400 focus:bg-white focus:outline-none transition-colors" id="message" placeholder="Briefly describe your requirements..." rows="4"></textarea>
</div>
<button className="w-full py-2.5 bg-zinc-900 text-white rounded-md text-sm font-normal hover:bg-zinc-800 transition-colors mt-2" type="button">
                            Submit Inquiry
                        </button>
</form>
</div>
<div className="reveal delay-100 flex flex-col h-full">
<div className="mb-10 space-y-8">
<div>
<h4 className="text-xs font-medium tracking-tight text-zinc-900 uppercase mb-2">Headquarters</h4>
<p className="text-sm text-zinc-500 font-light leading-relaxed">
                                Business Bay, Downtown District<br/>
                                Dubai, United Arab Emirates
                            </p>
</div>
<div>
<h4 className="text-xs font-medium tracking-tight text-zinc-900 uppercase mb-2">Direct Contact</h4>
<p className="text-sm text-zinc-500 font-light space-y-1 flex flex-col">
<a className="hover:text-zinc-900 transition-colors" href="#">inquiries@greenpastures.ae</a>
<a className="hover:text-zinc-900 transition-colors" href="#">+971 4 123 4567</a>
</p>
</div>
</div>
<div className="w-full h-full min-h-[250px] rounded-xl overflow-hidden border border-zinc-200 relative bg-zinc-100">
<iframe allowfullscreen="" className="grayscale opacity-80 hover:opacity-100 transition-opacity duration-500" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115535.13289052516!2d55.1917719602492!3d25.18432326792613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-zinc-200 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-zinc-900 rounded flex items-center justify-center text-white">
<span className="font-normal text-[0.6rem]">G</span>
</div>
<span className="text-xs font-medium tracking-tight text-zinc-900">Green Pastures</span>
</div>
<div className="flex gap-6 text-xs text-zinc-500 font-normal">
<a className="hover:text-zinc-900 transition-colors" href="#">Privacy</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Terms</a>
<a className="hover:text-zinc-900 transition-colors" href="#">LinkedIn</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Instagram</a>
</div>
<p className="text-xs text-zinc-400 font-light">
                © 2023 Green Pastures LLC. Dubai, UAE.
            </p>
</div>
</footer>

    </>
  );
}
