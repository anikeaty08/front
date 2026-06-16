import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
black: '#050505',
brand: '#E60000',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", function() {
            const reveals = document.querySelectorAll(".reveal");

            const revealOnScroll = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                root: null,
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            });

            reveals.forEach(reveal => {
                revealOnScroll.observe(reveal);
            });
            
            // Trigger immediately for elements in viewport on load
            setTimeout(() => {
                reveals.forEach(reveal => {
                    const rect = reveal.getBoundingClientRect();
                    if (rect.top < window.innerHeight) {
                        reveal.classList.add("active");
                    }
                });
            }, 100);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
<a className="text-white text-2xl font-semibold tracking-tighter uppercase flex items-center gap-1" href="#">
<span className="text-brand">AUTO</span>FIX
            </a>
<div className="hidden md:flex items-center gap-10 text-xs tracking-widest uppercase font-medium text-zinc-400">
<a className="hover:text-white transition-colors duration-300" href="#about">About</a>
<a className="hover:text-white transition-colors duration-300" href="#services">Services</a>
<a className="hover:text-white transition-colors duration-300" href="#why-us">Why Us</a>
<a className="hover:text-white transition-colors duration-300" href="#contact">Contact</a>
</div>
<button className="md:hidden text-white hover:text-brand transition-colors">
<iconify-icon className="text-3xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</nav>

<a className="fixed right-0 top-1/2 -translate-y-1/2 z-50 group flex items-center shadow-[0_0_30px_rgba(230,0,0,0.15)] hover:shadow-[0_0_40px_rgba(230,0,0,0.3)] transition-all duration-500" href="#contact">
<div className="bg-brand text-white rounded-l-2xl flex items-center h-16 px-5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] w-[125px] group-hover:w-[220px]">
<iconify-icon className="text-2xl shrink-0 group-hover:rotate-90 transition-transform duration-700" icon="solar:settings-linear"></iconify-icon>
<div className="relative w-full h-full ml-3 flex items-center overflow-hidden">
<span className="absolute left-0 text-sm font-semibold tracking-tight transition-all duration-500 opacity-100 group-hover:opacity-0 group-hover:-translate-y-4">Reserve</span>
<span className="absolute left-0 text-sm font-semibold tracking-tight transition-all duration-500 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 whitespace-nowrap">Reserve your time</span>
</div>
</div>
</a>

<section className="relative min-h-screen flex items-end pb-32 pt-32 justify-start overflow-hidden hero-clip bg-zinc-950">

<div className="absolute inset-0 z-0">
<img alt="Premium Garage" className="w-full h-full object-cover grayscale brightness-[0.25] scale-105 transform origin-center" src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&amp;w=2874&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50"></div>

<div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-brand/10 rounded-full blur-[120px]"></div>
</div>
<div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex justify-between items-end reveal">
<div className="max-w-4xl">
<div className="flex items-center gap-4 mb-8">
<div className="w-12 h-[1px] bg-brand"></div>
<span className="text-xs font-medium uppercase tracking-widest text-brand">Professional Automotive Care</span>
</div>
<h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter text-white uppercase leading-[0.9]">
                    Mastery in <br/>
<span className="text-zinc-500">Motion.</span>
</h1>
</div>

<div className="hidden lg:flex flex-col items-center gap-4 text-zinc-500 opacity-50">
<span className="text-xs uppercase tracking-widest -rotate-90 origin-bottom mb-10">Scroll</span>
<div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-zinc-500 to-transparent"></div>
</div>
</div>
</section>

<section className="py-32 relative" id="about">
<div className="max-w-7xl mx-auto px-6 reveal">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
<div className="lg:col-span-5 relative">
<div className="aspect-[4/5] overflow-hidden rounded-sm relative">
<img alt="Engine Detail" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1632823462923-23d249f394c8?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 border border-white/10 m-4 rounded-sm z-10 pointer-events-none"></div>
</div>
</div>
<div className="lg:col-span-7 flex flex-col justify-center h-full pt-10">
<div className="flex items-center gap-4 mb-8">
<span className="text-xs font-medium uppercase tracking-widest text-brand">The Standard</span>
<div className="flex-1 h-[1px] bg-white/5"></div>
</div>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white mb-8 leading-tight">
                        Redefining performance <br/>and reliability.
                    </h2>
<p className="text-lg text-zinc-400 mb-8 leading-relaxed max-w-2xl font-normal">
                        We don't just repair cars; we restore confidence. AutoFix represents a higher tier of automotive care, founded on precision engineering, state-of-the-art diagnostics, and an unwavering commitment to mechanical excellence.
                    </p>
<p className="text-sm text-zinc-500 leading-relaxed max-w-2xl font-normal">
                        Our facility is staffed exclusively by master technicians with decades of combined experience across high-performance, luxury, and daily-driven vehicles. When you demand nothing but the absolute best for your machine, we deliver.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-zinc-950 border-y border-white/5 relative" id="services">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(230,0,0,0.02)_0,transparent_100%)] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 reveal">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
<div>
<h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white uppercase leading-none">Services</h2>
</div>
<p className="text-zinc-500 max-w-sm text-sm">Engineered solutions for every aspect of your vehicle's performance and maintenance needs.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">

<div className="group bg-black p-10 border border-white/5 hover:border-brand/30 transition-colors duration-500 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<iconify-icon className="text-4xl text-brand mb-8 group-hover:-translate-y-2 transition-transform duration-500" icon="solar:laptop-minimalistic-linear"></iconify-icon>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-4">Engine Diagnostics</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Advanced telemetry and computer analysis to pinpoint faults with surgical precision.</p>
</div>

<div className="group bg-black p-10 border border-white/5 hover:border-brand/30 transition-colors duration-500 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<iconify-icon className="text-4xl text-brand mb-8 group-hover:-translate-y-2 transition-transform duration-500" icon="solar:waterdrop-linear"></iconify-icon>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-4">Oil Change</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Premium synthetic lubrication services vital for preserving high-stress internal components.</p>
</div>

<div className="group bg-black p-10 border border-white/5 hover:border-brand/30 transition-colors duration-500 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<iconify-icon className="text-4xl text-brand mb-8 group-hover:-translate-y-2 transition-transform duration-500" icon="solar:record-circle-linear"></iconify-icon>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-4">Brake Repair</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Complete stopping power restoration utilizing high-performance pads and rotors.</p>
</div>

<div className="group bg-black p-10 border border-white/5 hover:border-brand/30 transition-colors duration-500 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<iconify-icon className="text-4xl text-brand mb-8 group-hover:-translate-y-2 transition-transform duration-500" icon="solar:wheel-linear"></iconify-icon>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-4">Tire Service</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Precision mounting, road-force balancing, and laser alignment for perfect contact.</p>
</div>

<div className="group bg-black p-10 border border-white/5 hover:border-brand/30 transition-colors duration-500 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<iconify-icon className="text-4xl text-brand mb-8 group-hover:-translate-y-2 transition-transform duration-500" icon="solar:slider-vertical-linear"></iconify-icon>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-4">Suspension Repair</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Chassis tuning and component replacement for optimal handling and stability.</p>
</div>

<div className="group bg-black p-10 border border-white/5 hover:border-brand/30 transition-colors duration-500 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<iconify-icon className="text-4xl text-brand mb-8 group-hover:-translate-y-2 transition-transform duration-500" icon="solar:settings-linear"></iconify-icon>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-4">General Maintenance</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Comprehensive factory-scheduled servicing to ensure long-term mechanical integrity.</p>
</div>
</div>
</div>
</section>

<section className="py-32 relative" id="why-us">
<div className="max-w-7xl mx-auto px-6 reveal">
<div className="text-center mb-24">
<h2 className="text-xs font-medium uppercase tracking-widest text-brand mb-6">The Advantage</h2>
<h3 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white">Why professionals choose us</h3>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="flex flex-col border-l border-brand/50 pl-6">
<iconify-icon className="text-3xl text-white mb-6" icon="solar:diploma-linear"></iconify-icon>
<h4 className="text-xl font-semibold tracking-tight text-white mb-3">Certified Mechanics</h4>
<p className="text-sm text-zinc-500">Elite technicians with ASE master certifications and extensive factory training.</p>
</div>

<div className="flex flex-col border-l border-brand/50 pl-6">
<iconify-icon className="text-3xl text-white mb-6" icon="solar:stopwatch-linear"></iconify-icon>
<h4 className="text-xl font-semibold tracking-tight text-white mb-3">Fast Service</h4>
<p className="text-sm text-zinc-500">Streamlined workflows ensuring minimal downtime and rapid turnarounds.</p>
</div>

<div className="flex flex-col border-l border-brand/50 pl-6">
<iconify-icon className="text-3xl text-white mb-6" icon="solar:tag-price-linear"></iconify-icon>
<h4 className="text-xl font-semibold tracking-tight text-white mb-3">Fair Pricing</h4>
<p className="text-sm text-zinc-500">Uncompromising transparency. Clear estimates devoid of hidden charges.</p>
</div>

<div className="flex flex-col border-l border-brand/50 pl-6">
<iconify-icon className="text-3xl text-white mb-6" icon="solar:shield-check-linear"></iconify-icon>
<h4 className="text-xl font-semibold tracking-tight text-white mb-3">Service Warranty</h4>
<p className="text-sm text-zinc-500">Ironclad backing on all parts and labor, providing total peace of mind.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-zinc-950 border-t border-white/5" id="contact">
<div className="max-w-7xl mx-auto px-6 reveal">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

<div>
<div className="mb-12">
<h2 className="text-5xl font-semibold tracking-tighter text-white mb-4">Get in touch.</h2>
<p className="text-zinc-500">Reach out to schedule maintenance or discuss complex diagnostic requirements.</p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium uppercase tracking-widest text-zinc-500" htmlFor="name">Name</label>
<input className="w-full bg-black border-b border-white/10 text-white text-base py-3 focus:outline-none focus:border-brand transition-colors placeholder:text-zinc-700" id="name" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium uppercase tracking-widest text-zinc-500" htmlFor="phone">Phone</label>
<input className="w-full bg-black border-b border-white/10 text-white text-base py-3 focus:outline-none focus:border-brand transition-colors placeholder:text-zinc-700" id="phone" placeholder="+1 (555) 000-0000" type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium uppercase tracking-widest text-zinc-500" htmlFor="email">Email</label>
<input className="w-full bg-black border-b border-white/10 text-white text-base py-3 focus:outline-none focus:border-brand transition-colors placeholder:text-zinc-700" id="email" placeholder="john@example.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium uppercase tracking-widest text-zinc-500" htmlFor="message">Message</label>
<textarea className="w-full bg-black border-b border-white/10 text-white text-base py-3 focus:outline-none focus:border-brand transition-colors placeholder:text-zinc-700 resize-none" id="message" placeholder="Vehicle details or specific inquiries..." rows="3"></textarea>
</div>
<button className="mt-8 bg-white hover:bg-brand text-black hover:text-white text-sm font-semibold uppercase tracking-widest py-4 px-10 rounded-sm transition-all duration-300" type="button">
                            Send Request
                        </button>
</form>
</div>

<div className="space-y-12">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
<div>
<h4 className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-6 border-b border-white/10 pb-4">Contact Detail</h4>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<iconify-icon className="text-brand text-2xl shrink-0" icon="solar:map-point-linear"></iconify-icon>
<span className="text-sm text-zinc-400">1234 Automotive Blvd,<br/>Motor City, MC 90210</span>
</li>
<li className="flex items-center gap-4">
<iconify-icon className="text-brand text-2xl shrink-0" icon="solar:phone-linear"></iconify-icon>
<span className="text-sm text-zinc-400">+1 (555) 987-6543</span>
</li>
<li className="flex items-center gap-4">
<iconify-icon className="text-brand text-2xl shrink-0" icon="solar:letter-linear"></iconify-icon>
<span className="text-sm text-zinc-400">service@autofix.com</span>
</li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-6 border-b border-white/10 pb-4">Working Hours</h4>
<ul className="space-y-4 text-sm text-zinc-400">
<li className="flex justify-between">
<span>Monday - Friday</span>
<span className="text-white">8:00 AM - 6:00 PM</span>
</li>
<li className="flex justify-between">
<span>Saturday</span>
<span className="text-white">9:00 AM - 2:00 PM</span>
</li>
<li className="flex justify-between">
<span>Sunday</span>
<span className="text-brand">Closed</span>
</li>
</ul>
</div>
</div>

<div className="w-full h-64 rounded-sm overflow-hidden relative border border-white/5">
<iframe allowfullscreen="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901204965!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007!5e0!3m2!1sen!2sus!4v1689622955403!5m2!1sen!2sus" style={{border: '0', filter: 'grayscale(100%) invert(100%) contrast(85%) hue-rotate(180deg)'}} width="100%">
</iframe>

<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-black py-16 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 reveal">
<a className="text-white text-xl font-semibold tracking-tighter uppercase flex items-center gap-1" href="#">
<span className="text-brand">AUTO</span>FIX
            </a>
<p className="text-xs text-zinc-600 font-medium uppercase tracking-widest">
                © 2023 AutoFix. All Rights Reserved.
            </p>
<div className="flex items-center gap-6">
<a className="text-zinc-600 hover:text-white transition-colors" href="#">
<iconify-icon className="text-2xl" icon="solar:facebook-linear"></iconify-icon>
</a>
<a className="text-zinc-600 hover:text-white transition-colors" href="#">
<iconify-icon className="text-2xl" icon="solar:instagram-linear"></iconify-icon>
</a>
<a className="text-zinc-600 hover:text-white transition-colors" href="#">
<iconify-icon className="text-2xl" icon="solar:twitter-linear"></iconify-icon>
</a>
</div>
</div>
</footer>



    </>
  );
}
