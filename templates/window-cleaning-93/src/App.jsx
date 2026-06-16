import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Intersection Observer for scroll animations
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const scrollElements = document.querySelectorAll('.reveal');
            scrollElements.forEach(el => observer.observe(el));
            
            // Navbar Solid on Scroll
            const navbar = document.querySelector('nav');
            window.addEventListener('scroll', () => {
                if(window.scrollY > 50) {
                    navbar.classList.add('bg-[#1f2937]/90', 'backdrop-blur-md', 'shadow-sm', 'border-b', 'border-white/10');
                } else {
                    navbar.classList.remove('bg-[#1f2937]/90', 'backdrop-blur-md', 'shadow-sm', 'border-b', 'border-white/10');
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="relative w-full max-w-[1600px] bg-[#f8fafc] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl ring-4 ring-white/50 flex flex-col">

<nav className="absolute top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 flex justify-between items-center animate-enter">
<div className="text-white font-serif text-xl md:text-2xl font-medium tracking-tight drop-shadow-md">
                Parkers Window Cleaning
            </div>

<div className="hidden md:flex items-center gap-8">
<a className="text-white/90 hover:text-white text-sm font-medium tracking-wide transition drop-shadow-md" href="#services">Services</a>
<a className="text-white/90 hover:text-white text-sm font-medium tracking-wide transition drop-shadow-md" href="#about">About</a>
<a className="text-white/90 hover:text-white text-sm font-medium tracking-wide transition drop-shadow-md" href="#contact">Contact</a>
<a className="px-6 py-2.5 rounded-full bg-[#0ea5e9] text-white text-xs font-semibold uppercase tracking-widest hover:bg-[#0284c7] transition shadow-lg" href="#quote">
                    Free Quote
                </a>
</div>

<button className="md:hidden text-white drop-shadow-md">
<iconify-icon height="28" icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</nav>

<div className="relative w-full h-[90vh] bg-[#1f2937] overflow-hidden shrink-0">

<div className="absolute inset-0 animate-enter duration-1000">
<img alt="Professional window cleaner working" className="w-full h-full object-cover object-center opacity-70 scale-105" src="https://storables.com/wp-content/uploads/2021/12/Featured-Photo-for-Window-Cleaners-scaled.jpeg?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-[#1A1A1A]/30 to-transparent"></div>
</div>

<div className="relative w-full h-full flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-16 pointer-events-none">
<div className="pointer-events-auto max-w-4xl">

<div className="flex flex-wrap items-center gap-3 mb-6 animate-enter delay-100">
<span className="px-4 py-1.5 border border-white/30 text-white backdrop-blur-md text-xs font-medium uppercase tracking-widest rounded-full">
                            Residential Window Cleaning
                        </span>
<span className="px-4 py-1.5 border border-white/30 text-white backdrop-blur-md text-xs font-medium uppercase tracking-widest rounded-full">
                            Local Service
                        </span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight font-serif mb-6 leading-[1.1] drop-shadow-xl animate-enter delay-200">
                        Professional Window<br/>Cleaning You Can Trust
                    </h1>
<p className="text-white/80 text-lg md:text-xl font-light max-w-xl leading-relaxed mb-10 animate-enter delay-300">
                        Reliable, friendly and affordable window cleaning for homes and businesses. Enjoy spotless results from a local team dedicated to excellence.
                    </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-enter delay-500">
<a className="w-full sm:w-auto text-center bg-[#0ea5e9] text-white px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-[#0284c7] transition-colors group" href="#quote">
                            Get a Free Quote
                        </a>
<a className="w-full sm:w-auto text-center border border-white text-white px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-white/10 transition-colors" href="#contact">
                            Book a Clean
                        </a>
</div>
</div>
</div>

<div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 animate-bounce delay-500">
<iconify-icon height="24" icon="solar:mouse-circle-linear" width="24"></iconify-icon>
</div>
</div>

<section className="bg-[#f8fafc] w-full px-6 md:px-16 py-24 lg:py-32" id="about">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

<div className="lg:col-span-5 relative rounded-[2rem] overflow-hidden reveal group">
<img alt="Local window cleaner working on a residential property" className="w-full h-full object-cover min-h-[500px] group-hover:scale-105 transition duration-700" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1600&amp;q=80"/>
<div className="absolute inset-0 border border-[#1f2937]/10 rounded-[2rem] pointer-events-none"></div>
</div>

<div className="lg:col-span-7 flex flex-col justify-center reveal reveal-delay-200">
<span className="text-[#0ea5e9] text-xs font-semibold uppercase tracking-widest mb-4 block">About Us</span>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight leading-[1.1] text-[#1A1A1A] font-serif mb-8">
                        Spotless Results,<br/>Dependable Service
                    </h2>
<div className="space-y-6 text-[#1A1A1A]/70 text-lg font-light leading-relaxed mb-12">
<p>
                            Parkers Window Cleaning provides reliable and professional window cleaning services with a strong focus on quality and customer satisfaction. We take pride in delivering spotless results while offering a friendly, dependable service our customers can trust.
                        </p>
<p>
                            Whether it’s regular window cleaning or exterior cleaning for gutters, fascias or conservatories, we always aim to provide the highest standard of work at a fair price.
                        </p>
</div>

<div className="grid grid-cols-2 gap-8 border-t border-[#1A1A1A]/10 pt-8">
<div>
<span className="block text-3xl font-serif text-[#1f2937] mb-1">100%</span>
<span className="text-sm font-medium text-[#1A1A1A]/60">Satisfaction Guaranteed</span>
</div>
<div>
<span className="block text-3xl font-serif text-[#1f2937] mb-1">LOCAL</span>
<span className="text-sm font-medium text-[#1A1A1A]/60">Professional Service</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white w-full px-6 md:px-16 py-24 lg:py-32 rounded-t-[3rem] -mt-8 relative z-10 border-t border-stone-100 shadow-[0_-10px_40px_rgba(0,0,0,0.02)]" id="services">
<div className="max-w-6xl mx-auto">

<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<span className="text-[#0ea5e9] text-xs font-semibold uppercase tracking-widest mb-4 block">Our Expertise</span>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight font-serif text-[#1A1A1A] mb-6">Our Services</h2>
<p className="text-[#1A1A1A]/60 text-lg font-light">
                        Professional window cleaners providing complete exterior cleaning solutions to keep your property looking its absolute best year-round.
                    </p>
</div>

<div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 reveal reveal-delay-100">
<button className="px-6 py-2 rounded-full bg-[#1f2937] text-white text-sm font-medium transition">Windows</button>
<button className="px-6 py-2 rounded-full text-[#1A1A1A]/60 hover:text-[#1A1A1A] hover:bg-[#f8fafc] text-sm font-medium transition">Gutters</button>
<button className="px-6 py-2 rounded-full text-[#1A1A1A]/60 hover:text-[#1A1A1A] hover:bg-[#f8fafc] text-sm font-medium transition">Conservatories</button>
<button className="px-6 py-2 rounded-full text-[#1A1A1A]/60 hover:text-[#1A1A1A] hover:bg-[#f8fafc] text-sm font-medium transition">Fascias &amp; Soffits</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

<div className="bg-[#f8fafc] p-8 rounded-[2rem] shadow-sm hover:-translate-y-1 transition duration-300 reveal reveal-delay-100">
<div className="flex justify-between items-start mb-4 gap-4">
<h4 className="font-serif text-xl font-medium text-[#1A1A1A]">Window Cleaning</h4>
</div>
<p className="text-sm text-[#1A1A1A]/70 leading-relaxed font-light">
                            Professional cleaning for residential and small commercial properties, leaving a streak-free shine every time.
                        </p>
</div>

<div className="bg-[#f8fafc] p-8 rounded-[2rem] shadow-sm hover:-translate-y-1 transition duration-300 relative overflow-hidden reveal reveal-delay-200">
<div className="absolute top-0 right-0 bg-[#0ea5e9] text-white text-[10px] uppercase font-bold px-3 py-1 rounded-bl-xl tracking-wider">Popular</div>
<div className="flex justify-between items-start mb-4 gap-4">
<h4 className="font-serif text-xl font-medium text-[#1A1A1A]">Conservatory Cleaning</h4>
</div>
<p className="text-sm text-[#1A1A1A]/70 leading-relaxed font-light">
                            Complete cleaning of conservatory glass and frames to let the natural light flood back into your home.
                        </p>
</div>

<div className="bg-[#f8fafc] p-8 rounded-[2rem] shadow-sm hover:-translate-y-1 transition duration-300 reveal reveal-delay-300">
<div className="flex justify-between items-start mb-4 gap-4">
<h4 className="font-serif text-xl font-medium text-[#1A1A1A]">Gutter Cleaning</h4>
</div>
<p className="text-sm text-[#1A1A1A]/70 leading-relaxed font-light">
                            Thorough removal of debris and buildup to keep gutters flowing properly and protect your property.
                        </p>
</div>

<div className="bg-[#f8fafc] p-8 rounded-[2rem] shadow-sm hover:-translate-y-1 transition duration-300 reveal reveal-delay-100">
<div className="flex justify-between items-start mb-4 gap-4">
<h4 className="font-serif text-xl font-medium text-[#1A1A1A]">Fascia &amp; Soffit Cleaning</h4>
</div>
<p className="text-sm text-[#1A1A1A]/70 leading-relaxed font-light">
                            Restore the fresh look of your home with detailed cleaning of all your exterior trims and rooflines.
                        </p>
</div>

<div className="bg-[#f8fafc] p-8 rounded-[2rem] shadow-sm hover:-translate-y-1 transition duration-300 reveal reveal-delay-200">
<div className="flex justify-between items-start mb-4 gap-4">
<h4 className="font-serif text-xl font-medium text-[#1A1A1A]">Exterior Frame Cleaning</h4>
</div>
<p className="text-sm text-[#1A1A1A]/70 leading-relaxed font-light">
                            Detailed washing and cleaning of window frames alongside exterior glass for a complete refresh.
                        </p>
</div>
</div>

<div className="text-center reveal reveal-delay-300">
<p className="text-xs text-[#1A1A1A]/50 italic mb-6">Fully insured and equipped for all exterior cleaning needs.</p>
<a className="inline-flex items-center justify-center gap-2 border border-[#1f2937] text-[#1f2937] px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-[#1f2937] hover:text-white transition-colors" href="#quote">
                        Get Your Free Quote
                    </a>
</div>
</div>
</section>

<section className="bg-[#f8fafc] w-full px-6 md:px-16 py-12 lg:py-20">
<div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-[600px] reveal">
<div className="col-span-2 row-span-2 rounded-[2rem] overflow-hidden group relative shadow-md">
<img alt="Spotless modern house windows" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" src="https://images.unsplash.com/photo-1613539246066-78db6ec4ff0f?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition duration-500"></div>
</div>
<div className="rounded-[1.5rem] md:rounded-[2rem] overflow-hidden group relative shadow-md">
<img alt="Bright residential home exterior" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&amp;q=80"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition duration-500"></div>
</div>
<div className="rounded-[1.5rem] md:rounded-[2rem] overflow-hidden group relative shadow-md">
<img alt="Squeegee cleaning action" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" src="https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition duration-500"></div>
</div>
<div className="col-span-2 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden group relative shadow-md">
<img alt="Clean gutters and fascias" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition duration-500"></div>
</div>
</div>
</section>

<section className="bg-[#1f2937] w-full px-6 md:px-16 py-24 lg:py-32 text-[#f8fafc] relative overflow-hidden" id="quote">

<div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'url(\'https://www.transparenttextures.com/patterns/stucco.png\')'}}></div>
<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">

<div className="flex flex-col justify-center reveal">
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight font-serif mb-6 leading-[1.1]">
                        Get Sparkling Clean Windows Today
                    </h2>
<p className="text-white/70 text-lg font-light mb-12 max-w-md leading-relaxed">
                        Contact Parkers Window Cleaning for reliable, affordable window cleaning you can count on. Fill out the form below and we'll get back to you with a free, no-obligation quote.
                    </p>
<div className="bg-white/5 rounded-[2rem] p-8 border border-white/10 backdrop-blur-sm max-w-sm">
<div className="flex items-center gap-4 mb-6 text-white/90">
<iconify-icon className="text-[#0ea5e9]" height="28" icon="solar:clock-circle-linear" width="28"></iconify-icon>
<h3 className="text-xl font-medium font-serif">Service Hours</h3>
</div>
<ul className="space-y-4 text-sm font-light text-white/70">
<li className="flex justify-between border-b border-white/10 pb-2">
<span>Monday - Friday</span>
<span>8:00 AM - 6:00 PM</span>
</li>
<li className="flex justify-between pb-1">
<span>Saturday - Sunday</span>
<span className="text-[#0ea5e9] font-medium">By Appointment</span>
</li>
</ul>
</div>
</div>

<div className="bg-[#f8fafc] text-[#1A1A1A] rounded-[2.5rem] p-8 md:p-12 shadow-2xl reveal reveal-delay-200">
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider text-[#1A1A1A]/60">Full Name</label>
<input className="w-full bg-transparent border-b border-[#1A1A1A]/20 py-2 focus:outline-none focus:border-[#0ea5e9] transition text-[#1A1A1A] placeholder:text-[#1A1A1A]/30" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider text-[#1A1A1A]/60">Email</label>
<input className="w-full bg-transparent border-b border-[#1A1A1A]/20 py-2 focus:outline-none focus:border-[#0ea5e9] transition text-[#1A1A1A] placeholder:text-[#1A1A1A]/30" placeholder="john@example.com" type="email"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2 relative">
<label className="text-xs font-semibold uppercase tracking-wider text-[#1A1A1A]/60">Preferred Date</label>
<input className="w-full bg-transparent border-b border-[#1A1A1A]/20 py-2 focus:outline-none focus:border-[#0ea5e9] transition text-[#1A1A1A]" type="date"/>
</div>
<div className="space-y-2 relative">
<label className="text-xs font-semibold uppercase tracking-wider text-[#1A1A1A]/60">Preferred Time</label>
<input className="w-full bg-transparent border-b border-[#1A1A1A]/20 py-2 focus:outline-none focus:border-[#0ea5e9] transition text-[#1A1A1A]" type="time"/>
</div>
</div>
<div className="space-y-2 relative">
<label className="text-xs font-semibold uppercase tracking-wider text-[#1A1A1A]/60">Service Needed</label>
<select className="w-full bg-transparent border-b border-[#1A1A1A]/20 py-2 focus:outline-none focus:border-[#0ea5e9] transition text-[#1A1A1A] cursor-pointer">
<option>Window Cleaning</option>
<option>Gutter Cleaning</option>
<option>Conservatory Cleaning</option>
<option>Fascia &amp; Soffit Cleaning</option>
<option>Multiple Services</option>
</select>
<iconify-icon className="absolute right-0 bottom-3 text-[#1A1A1A]/40 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<button className="w-full mt-8 bg-[#0ea5e9] text-white py-4 rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-[#0284c7] transition shadow-lg shadow-[#0ea5e9]/20" type="button">
                            Request a Free Quote
                        </button>
</form>
</div>
</div>
</section>

<section className="bg-[#f8fafc] w-full px-6 md:px-16 py-24 relative overflow-hidden text-center">
<div className="max-w-5xl mx-auto reveal">
<span className="text-[#0ea5e9] text-xs font-semibold uppercase tracking-widest mb-4 block">Testimonials</span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight font-serif text-[#1A1A1A] mb-8">
                    What Our Customers Say
                </h2>
<div className="flex items-center justify-center gap-3 mb-12">
<div className="flex text-[#0ea5e9]">
<iconify-icon height="24" icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon height="24" icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon height="24" icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon height="24" icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon height="24" icon="solar:star-bold" width="24"></iconify-icon>
</div>
<span className="text-xl font-medium font-serif text-[#1A1A1A]">5.0/5</span>
<span className="text-sm text-[#1A1A1A]/50 font-light border-l border-[#1A1A1A]/20 pl-3">Based on verified local reviews</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
<div className="bg-white p-8 rounded-[2rem] shadow-sm border border-[#1A1A1A]/5 flex flex-col justify-between">
<p className="font-serif text-lg text-[#1A1A1A]/80 italic mb-6">"Excellent service and a really good price. Nothing's too much trouble and Steve is a lovely friendly guy."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#1f2937] text-white flex items-center justify-center font-serif">R</div>
<span className="font-medium text-sm text-[#1A1A1A]">Rachel Jennings</span>
</div>
</div>
<div className="bg-white p-8 rounded-[2rem] shadow-sm border border-[#1A1A1A]/5 flex flex-col justify-between">
<p className="font-serif text-lg text-[#1A1A1A]/80 italic mb-6">"Steve has done a fantastic job. Windows, fascias, guttering and conservatory all cleaned to a really high standard. He is friendly, efficient and reasonably priced. Would highly recommend."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#0ea5e9] text-white flex items-center justify-center font-serif">D</div>
<span className="font-medium text-sm text-[#1A1A1A]">Donna Hall</span>
</div>
</div>
<div className="bg-white p-8 rounded-[2rem] shadow-sm border border-[#1A1A1A]/5 flex flex-col justify-between md:col-span-1">
<p className="font-serif text-lg text-[#1A1A1A]/80 italic mb-6">"A great professional service, hard to find these days! I can't recommend Parkers Window Cleaning Services enough."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#1f2937] text-white flex items-center justify-center font-serif">R</div>
<span className="font-medium text-sm text-[#1A1A1A]">Richard Brine</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white w-full px-6 md:px-16 py-20 border-t border-[#1A1A1A]/5" id="contact">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto reveal">

<div className="space-y-8">
<div>
<h3 className="text-3xl font-medium font-serif mb-6 text-[#1A1A1A]">Contact Us</h3>
<p className="text-[#1A1A1A]/70 text-lg font-light leading-relaxed mb-6">
                            Serving local homes and businesses with professional window cleaning services.
                        </p>
<div className="space-y-4">
<a className="flex items-center gap-3 text-[#1A1A1A]/80 hover:text-[#0ea5e9] transition" href="tel:01234567890">
<iconify-icon height="20" icon="solar:phone-linear" width="20"></iconify-icon>
<span>(555) 123-4567</span>
</a>
<a className="flex items-center gap-3 text-[#1A1A1A]/80 hover:text-[#0ea5e9] transition" href="mailto:hello@parkerswindowcleaning.com">
<iconify-icon height="20" icon="solar:letter-linear" width="20"></iconify-icon>
<span>hello@parkerswindowcleaning.com</span>
</a>
</div>
</div>
<div className="pt-8 border-t border-[#1A1A1A]/10">
<span className="text-xs font-semibold uppercase tracking-wider text-[#1A1A1A]/50 block mb-4">Follow Us</span>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-[#f8fafc] flex items-center justify-center text-[#1A1A1A] hover:bg-[#0ea5e9] hover:text-white transition" href="#">
<iconify-icon height="20" icon="ri:instagram-line" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-[#f8fafc] flex items-center justify-center text-[#1A1A1A] hover:bg-[#0ea5e9] hover:text-white transition" href="#">
<iconify-icon height="20" icon="ri:facebook-fill" width="20"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="h-full min-h-[350px] w-full rounded-[2rem] overflow-hidden shadow-sm border border-[#1A1A1A]/10 relative group bg-[#f8fafc]">

<iframe allowfullscreen="" className="absolute inset-0 w-full h-full border-0 filter grayscale opacity-90 group-hover:grayscale-0 transition duration-700" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.8398866946!2d-0.24168153706114134!3d51.52877184087611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2srs!4v1700000000000!5m2!1sen!2srs"></iframe>
</div>
</div>
</section>

<footer className="bg-[#f8fafc] px-6 md:px-16 py-8 border-t border-[#1A1A1A]/10 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<p className="text-[#1A1A1A] font-serif font-medium text-lg">Parkers Window Cleaning</p>
<p className="text-[#1A1A1A]/50 text-xs mt-1">© 2026 Parkers Window Cleaning. All rights reserved.</p>
</div>
<div className="flex flex-wrap justify-center gap-6">
<a className="text-[#1A1A1A]/60 hover:text-[#0ea5e9] text-xs font-medium transition" href="#about">About</a>
<a className="text-[#1A1A1A]/60 hover:text-[#0ea5e9] text-xs font-medium transition" href="#services">Services</a>
<a className="text-[#1A1A1A]/60 hover:text-[#0ea5e9] text-xs font-medium transition" href="#quote">Get a Quote</a>
<a className="text-[#1A1A1A]/60 hover:text-[#0ea5e9] text-xs font-medium transition" href="#">Privacy</a>
<a className="text-[#1A1A1A]/60 hover:text-[#0ea5e9] text-xs font-medium transition" href="#">Terms</a>
</div>
</footer>

<div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] z-50">
<a className="flex items-center justify-center gap-2 w-full bg-[#0ea5e9] text-white py-4 rounded-full text-xs font-semibold uppercase tracking-widest shadow-xl shadow-[#0ea5e9]/30 border border-white/20" href="#quote">
                Get a Free Quote
            </a>
</div>
</div>


    </>
  );
}
