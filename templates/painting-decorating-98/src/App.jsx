import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Simple mobile menu toggle
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');

        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-slate-900 text-slate-300 py-2.5 hidden md:block border-b border-slate-800">
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-xs font-medium tracking-wide">
<div className="flex gap-6">
<a className="hover:text-white transition-colors flex items-center gap-2" href="tel:07928778468">
<iconify-icon icon="solar:phone-linear" width="16"></iconify-icon> 07928 778 468
                </a>
<a className="hover:text-white transition-colors flex items-center gap-2" href="mailto:info@jordansalt.co.uk">
<iconify-icon icon="solar:letter-linear" width="16"></iconify-icon> info@jordansalt.co.uk
                </a>
</div>
<div className="flex items-center gap-4">
<span>Covering Lancashire &amp; Surrounding Areas</span>
<a className="text-slate-400 hover:text-blue-400 transition-colors" href="https://www.facebook.com/jordansaltpaintinganddecorating" target="_blank">
<iconify-icon icon="brandico:facebook-rect" width="14"></iconify-icon>
</a>
</div>
</div>
</div>

<nav className="sticky top-0 z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex items-center">
<a className="block" href="/">
<img alt="Jordan Salt Painting &amp; Decorating" className="h-12 w-auto object-contain mix-blend-multiply" src="https://www.jordansalt.co.uk/wp-content/uploads/2023/02/Logo.jpg"/>
</a>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-blue-900 border-b-2 border-blue-600 pb-0.5" href="/">Home</a>
<a className="text-sm font-medium text-slate-600 hover:text-blue-900 transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-slate-600 hover:text-blue-900 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-600 hover:text-blue-900 transition-colors" href="#gallery">Gallery</a>
<a className="text-sm font-medium bg-slate-900 text-white px-5 py-2.5 rounded-lg hover:bg-slate-800 transition-all hover:shadow-lg shadow-md" href="#contact">Get a Quote</a>
</div>

<div className="md:hidden flex items-center">
<button className="text-slate-900 p-2" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden bg-white border-t border-slate-100 absolute w-full left-0 top-20 shadow-xl" id="mobile-menu">
<div className="px-6 py-4 space-y-4">
<a className="block text-sm font-medium text-blue-900" href="/">Home</a>
<a className="block text-sm font-medium text-slate-600" href="#about">About</a>
<a className="block text-sm font-medium text-slate-600" href="#services">Services</a>
<a className="block text-sm font-medium text-slate-600" href="#gallery">Gallery</a>
<a className="block text-sm font-medium text-blue-600" href="#contact">Contact Us</a>
</div>
</div>
</nav>

<div className="relative w-full h-[600px] lg:h-[700px] flex items-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Painting and Decorating" className="w-full h-full object-cover" src="https://www.jordansalt.co.uk/wp-content/uploads/2023/02/Jordan-Salt-Painting-And-Decorating-Services-In-Preston-3-1500x630.jpg"/>
<div className="absolute inset-0 hero-overlay"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-12">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 backdrop-blur-md mb-6">
<span className="block w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
<span className="text-blue-100 text-xs font-medium tracking-wide uppercase">Covering Preston &amp; Lancashire</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
                    Professional Painting &amp; <br/>Decorating Services
                </h1>
<p className="text-lg text-slate-300 mb-8 max-w-xl font-light leading-relaxed">
                    We offer a full interior and exterior decorating service for both commercial and domestic properties. Transforming your home into the space of your dreams.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center px-8 py-3.5 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-500/25" href="#contact">
                        Get a Free Quote
                    </a>
<a className="inline-flex justify-center items-center px-8 py-3.5 text-sm font-semibold text-white bg-white/10 border border-white/20 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all" href="#services">
                        Our Services
                    </a>
</div>
<div className="mt-8 flex items-center gap-2 text-slate-400 text-sm">
<iconify-icon className="text-blue-400" icon="solar:phone-calling-linear" width="18"></iconify-icon>
<span>Call now for a free quotation: <a className="text-white hover:underline" href="tel:07928778468">07928 778 468</a></span>
</div>
</div>
</div>
</div>

<section className="py-20 lg:py-28 bg-white" id="about">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mb-6">
                        Painting &amp; Decorating homes and businesses in and around Preston.
                    </h2>
<div className="w-20 h-1 bg-blue-600 rounded-full mb-8"></div>
<div className="prose prose-slate prose-lg text-slate-500 leading-relaxed space-y-6">
<p>
                            We offer the most competitive prices for Painting &amp; Decorating in Preston and surrounding areas. Jordan Salt Painting Professionals cover both interior and exterior jobs – so don't hesitate to get in touch if you think we can help you with a project.
                        </p>
<p>
                            Painting and Decorating your home should be a joyous experience. You should be able to transform your home into the home of your dreams, without having to stress about wonky wallpaper or botched paint jobs. We believe at the heart of our work is a pride that shines through, from the minor details to the overall finish.
                        </p>
</div>
</div>
<div className="relative group">
<div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-slate-100 rounded-2xl transform rotate-2 group-hover:rotate-1 transition-transform duration-500"></div>
<img alt="Interior Design" className="relative rounded-xl shadow-xl w-full h-[400px] object-cover" src="https://www.jordansalt.co.uk/wp-content/uploads/2015/10/modern-home-845x321.jpg"/>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-blue-600 font-semibold tracking-wide uppercase text-xs">What We Do</span>
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mt-3">Our Services</h2>
<p className="mt-4 text-slate-500">Comprehensive painting solutions tailored to your specific needs.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="h-56 overflow-hidden">
<img alt="Residential Painting" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://www.jordansalt.co.uk/wp-content/uploads/2015/10/modern-home-845x321.jpg"/>
</div>
<div className="p-8">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-6">
<iconify-icon icon="solar:home-smile-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Residential Painting</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
                            Our residential painting covers a large selection ranging from new builds, large dwellings, and refurbishment to small jobs.
                        </p>
<a className="text-blue-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all" href="#contact">
                            Get a Quote <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="h-56 overflow-hidden">
<img alt="Commercial Painting" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://www.jordansalt.co.uk/wp-content/uploads/2023/02/Jordan-Salt-Painting-And-Decorating-Services-In-Preston-6-845x321.jpg"/>
</div>
<div className="p-8">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-6">
<iconify-icon icon="solar:buildings-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Commercial Painting</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
                            Complete redecoration and refurbishment of your workspace. We ensure minimal disruption to your business operations.
                        </p>
<a className="text-blue-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all" href="#contact">
                            Get a Quote <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="h-56 overflow-hidden">
<img alt="Exterior Painting" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://www.jordansalt.co.uk/wp-content/uploads/2015/10/superb-backyard-845x321.jpg"/>
</div>
<div className="p-8">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-6">
<iconify-icon icon="solar:sun-fog-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Exterior Painting</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
                            Generally provided between March &amp; October. We handle everything from fences to full exterior property repaints.
                        </p>
<a className="text-blue-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all" href="#contact">
                            Get a Quote <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-white border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight">Why Choose Us?</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">

<div className="flex gap-4 items-start">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-900">
<iconify-icon icon="solar:paint-roller-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">We got the tools</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                            From respraying garden fences to the final touches in tricky corners, we have the specialized tools for a perfect finish.
                        </p>
</div>
</div>

<div className="flex gap-4 items-start">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-900">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Experienced Team</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                            The team at Jordan Salt are experienced professionals. You can rest assured that your project is in the best hands.
                        </p>
</div>
</div>

<div className="flex gap-4 items-start">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-900">
<iconify-icon icon="solar:tag-price-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Competitive Pricing</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                            Get in touch for a free quotation and you'll see that our prices are hard to beat for the quality provided.
                        </p>
</div>
</div>

<div className="flex gap-4 items-start">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-900">
<iconify-icon icon="solar:home-smile-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">No job too small</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                            No matter the size of the job, sometimes it's best left to professionals. Let us take the stress out of decorating.
                        </p>
</div>
</div>

<div className="flex gap-4 items-start">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-900">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Respect your Home</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                            We treat your home like our own, ensuring the greatest care, cleanliness, and respect is shown throughout the project.
                        </p>
</div>
</div>

<div className="flex gap-4 items-start">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-900">
<iconify-icon icon="solar:chat-round-dots-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Great Support</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                            Unsure about a paint brand or colour matching? Our experienced team is on hand to offer advice and support.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-slate-50" id="contact">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16">

<div>
<span className="text-blue-600 font-semibold tracking-wide uppercase text-xs">Contact Us</span>
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mt-3 mb-6">Let's discuss your next project</h2>
<p className="text-slate-500 mb-10 text-lg">
                        Ready to transform your property? Fill out the form or contact us directly for a free, no-obligation quote.
                    </p>
<div className="space-y-6">
<div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
<div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Call Us</p>
<a className="text-slate-900 font-semibold hover:text-blue-600" href="tel:07928778468">07928 778 468</a>
</div>
</div>
<div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
<div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Email</p>
<a className="text-slate-900 font-semibold hover:text-blue-600" href="mailto:info@jordansalt.co.uk">info@jordansalt.co.uk</a>
</div>
</div>
<div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
<div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Location</p>
<p className="text-slate-900 font-semibold">37 Whitmore Drive, Preston, PR2 6LA</p>
</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
<form action="#" className="space-y-5" method="post">
<div>
<label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="name">Name <span className="text-red-500">*</span></label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder-slate-400" id="name" name="name" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="email">Email <span className="text-red-500">*</span></label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder-slate-400" id="email" name="email" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="phone">Phone Number</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder-slate-400" id="phone" name="phone" type="tel"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="message">Message <span className="text-red-500">*</span></label>
<textarea className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder-slate-400" id="message" name="message" required="" rows="4"></textarea>
</div>
<button className="w-full bg-blue-600 text-white font-semibold py-3.5 rounded-lg hover:bg-blue-500 transition-all shadow-md hover:shadow-lg" type="submit">
                            Send Message
                        </button>
<p className="text-xs text-slate-400 text-center mt-4">
                            Protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                        </p>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8 text-slate-400">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div>
<h4 className="text-white font-semibold mb-4 text-lg">Jordan Salt</h4>
<p className="text-sm leading-relaxed mb-6">
                        Professional painting and decorating services covering Preston and Lancashire. Dedicated to quality and customer satisfaction.
                    </p>
<a className="inline-flex items-center gap-2 text-white hover:text-blue-400 transition-colors" href="https://www.facebook.com/jordansaltpaintinganddecorating/" target="_blank">
<iconify-icon icon="brandico:facebook-rect" width="20"></iconify-icon> Follow us on Facebook
                    </a>
</div>

<div>
<h4 className="text-white font-semibold mb-4 text-lg">Contact Info</h4>
<div className="space-y-3 text-sm">
<p className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-blue-500" icon="solar:map-point-linear"></iconify-icon>
                            37 Whitmore Drive<br/>Preston, PR2 6LA
                        </p>
<p className="flex items-center gap-3">
<iconify-icon className="text-blue-500" icon="solar:phone-linear"></iconify-icon>
<a className="hover:text-white transition-colors" href="tel:07928778468">07928 778 468</a>
</p>
<p className="flex items-center gap-3">
<iconify-icon className="text-blue-500" icon="solar:letter-linear"></iconify-icon>
<a className="hover:text-white transition-colors" href="mailto:info@jordansalt.co.uk">info@jordansalt.co.uk</a>
</p>
</div>
</div>

<div>
<h4 className="text-white font-semibold mb-4 text-lg">Opening Hours</h4>
<ul className="space-y-2 text-sm">
<li className="flex justify-between"><span>Monday - Saturday:</span> <span className="text-white">8am - 5pm</span></li>
<li className="flex justify-between"><span>Sunday:</span> <span className="text-red-400">Closed</span></li>
</ul>
</div>

<div>
<h4 className="text-white font-semibold mb-4 text-lg">Verified Reviews</h4>
<p className="text-xs mb-3">See our reviews on Trust A Trader</p>
<a className="inline-block hover:opacity-80 transition-opacity bg-white p-2 rounded-lg" href="https://www.trustatrader.com/traders/js-painting-decorating-painters-decorators-preston-north" target="_blank">
<img alt="Trust A Trader" className="w-32 h-auto" src="https://www.jordansalt.co.uk/wp-content/uploads/2023/02/trustatrader-logo-large.bygr0c.image_.x2r.jpg"/>
</a>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
<div>
                    © 2023 Jordan Salt Painting and Decorating. All rights reserved.
                </div>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
