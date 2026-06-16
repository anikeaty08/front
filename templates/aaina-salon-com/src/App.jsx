import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Intersection Observer for Scroll Animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });

        // Sticky Navbar Effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-sm');
                navbar.classList.replace('py-4', 'py-2');
            } else {
                navbar.classList.remove('shadow-sm');
                navbar.classList.replace('py-2', 'py-4');
            }
        });

        // Form Submission Simulation
        document.getElementById('bookingForm').addEventListener('submit', function(e) {
            e.preventDefault();
            this.classList.add('hidden');
            document.getElementById('successMessage').classList.remove('hidden');
            document.getElementById('successMessage').classList.add('flex');
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex flex-col" href="#">
<span className="text-xl font-medium tracking-tight uppercase text-[#1A1A1A] leading-none mb-1">Aaina</span>
<span className="text-[10px] tracking-[0.2em] text-[#C5A059] uppercase">Unisex Salon</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm font-normal text-gray-600">
<a className="hover:text-[#C5A059] transition-colors duration-200" href="#home">Home</a>
<a className="hover:text-[#C5A059] transition-colors duration-200" href="#about">About Us</a>
<a className="hover:text-[#C5A059] transition-colors duration-200" href="#services">Services</a>
<a className="hover:text-[#C5A059] transition-colors duration-200" href="#gallery">Gallery</a>
<a className="hover:text-[#C5A059] transition-colors duration-200" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center justify-center px-5 py-2.5 rounded-none bg-[#1A1A1A] text-white text-xs font-medium hover:bg-[#C5A059] transition-colors duration-300" href="#booking">
                    Book Appointment
                </a>
<button className="md:hidden text-gray-900" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="md:hidden hidden bg-white border-t border-gray-100 absolute w-full" id="mobile-menu">
<div className="flex flex-col px-6 py-4 gap-4 text-sm font-normal text-gray-600">
<a className="hover:text-[#C5A059]" href="#home">Home</a>
<a className="hover:text-[#C5A059]" href="#about">About Us</a>
<a className="hover:text-[#C5A059]" href="#services">Services</a>
<a className="hover:text-[#C5A059]" href="#gallery">Gallery</a>
<a className="hover:text-[#C5A059]" href="#contact">Contact</a>
<a className="mt-2 inline-block text-center px-5 py-2.5 bg-[#1A1A1A] text-white text-xs hover:bg-[#C5A059]" href="#booking">Book Appointment</a>
</div>
</div>
</header>
<main className="w-full">

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#1A1A1A]" id="home">

<div className="absolute inset-0 z-0">
<img alt="Salon Interior" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 image-overlay"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white flex flex-col items-center">
<div className="reveal inline-flex items-center gap-2 mb-6">
<span className="h-px w-8 bg-[#C5A059]"></span>
<span className="text-xs font-medium tracking-[0.2em] text-[#C5A059] uppercase">Welcome to Luxury</span>
<span className="h-px w-8 bg-[#C5A059]"></span>
</div>
<h1 className="reveal delay-100 text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-6 leading-[1.1]">
                    Aaina Unisex Salon
                </h1>
<p className="reveal delay-200 text-lg md:text-xl text-white/80 font-light max-w-2xl mb-10 tracking-wide">
                    Professional Beauty &amp; Grooming for Everyone. Experience premium services in a relaxing, luxurious environment.
                </p>
<div className="reveal delay-300 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="group relative flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium text-white bg-[#C5A059] overflow-hidden transition-all duration-300 hover:bg-[#b08d4b]" href="#booking">
<span className="relative z-10 flex items-center gap-2">
                            Book Appointment
                            <iconify-icon icon="solar:calendar-add-linear" strokeWidth="1.5" width="18"></iconify-icon>
</span>
</a>
<a className="flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium text-white bg-transparent border border-white/30 hover:bg-white/10 transition-all duration-300" href="#services">
                        View Services
                    </a>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 bg-[#FAF9F6]" id="about">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="relative reveal">
<div className="aspect-[4/5] w-full max-w-md mx-auto relative z-10">
<img alt="Stylist working" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1521590832167-7bfc17484d20?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#C5A059]/10 rounded-full blur-3xl z-0"></div>
</div>
<div className="reveal delay-100">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 text-[#1A1A1A]">Discover Your True Reflection</h2>
<p className="text-gray-600 font-light leading-relaxed mb-6">
                        At Aaina Unisex Salon, we believe that beauty is an art form. Our mission is to provide professional beauty, grooming, and skincare services tailored to your unique style and needs.
                    </p>
<p className="text-gray-600 font-light leading-relaxed mb-8">
                        Step into our friendly and professional environment, designed to be your sanctuary of relaxation. Whether you're preparing for a special event or enjoying a routine self-care day, our expert team ensures you leave feeling confident and refreshed.
                    </p>
<div className="grid grid-cols-2 gap-8 border-t border-gray-200 pt-8">
<div>
<div className="text-3xl font-medium tracking-tight text-[#C5A059] mb-1">10+</div>
<div className="text-xs text-gray-500 uppercase tracking-wider">Years Experience</div>
</div>
<div>
<div className="text-3xl font-medium tracking-tight text-[#C5A059] mb-1">Premium</div>
<div className="text-xs text-gray-500 uppercase tracking-wider">Quality Products</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 bg-white" id="services">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-20 reveal">
<span className="text-xs font-medium tracking-[0.2em] text-[#C5A059] uppercase mb-4 block">Our Expertise</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#1A1A1A]">Comprehensive Services</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="p-8 border border-gray-100 bg-[#FAF9F6] hover:border-[#C5A059]/50 transition-colors duration-300 reveal">
<iconify-icon className="text-[#C5A059] mb-6" icon="solar:scissors-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="text-lg font-medium mb-4 tracking-tight">Hair Services</h3>
<ul className="text-sm text-gray-600 space-y-2 font-light">
<li>Haircut &amp; Blow Dry</li>
<li>Hairstyling</li>
<li>Balayage &amp; Coloring</li>
<li>Hair Extensions</li>
<li>Shampoo &amp; Conditioning</li>
</ul>
</div>

<div className="p-8 border border-gray-100 bg-[#FAF9F6] hover:border-[#C5A059]/50 transition-colors duration-300 reveal delay-100">
<iconify-icon className="text-[#C5A059] mb-6" icon="solar:stars-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="text-lg font-medium mb-4 tracking-tight">Beauty &amp; Skin</h3>
<ul className="text-sm text-gray-600 space-y-2 font-light">
<li>Eyebrow Threading &amp; Tint</li>
<li>Eyelashes</li>
<li>Facials &amp; Skin Care</li>
<li>Acne Treatments</li>
<li>Tanning</li>
</ul>
</div>

<div className="p-8 border border-gray-100 bg-[#FAF9F6] hover:border-[#C5A059]/50 transition-colors duration-300 reveal delay-200">
<iconify-icon className="text-[#C5A059] mb-6" icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="text-lg font-medium mb-4 tracking-tight">Makeup &amp; Bridal</h3>
<ul className="text-sm text-gray-600 space-y-2 font-light">
<li>Party Make-up</li>
<li>Professional Make-up Services</li>
<li>Bridal Packages</li>
<li>Wedding Preparation</li>
</ul>
</div>

<div className="p-8 border border-gray-100 bg-[#FAF9F6] hover:border-[#C5A059]/50 transition-colors duration-300 reveal delay-300">
<iconify-icon className="text-[#C5A059] mb-6" icon="solar:hand-stars-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="text-lg font-medium mb-4 tracking-tight">Hands &amp; Feet</h3>
<ul className="text-sm text-gray-600 space-y-2 font-light">
<li>Classic Manicure</li>
<li>Spa Pedicure</li>
<li>Nail Art</li>
<li>Gel Polish</li>
</ul>
</div>

<div className="p-8 border border-gray-100 bg-[#FAF9F6] hover:border-[#C5A059]/50 transition-colors duration-300 reveal">
<iconify-icon className="text-[#C5A059] mb-6" icon="solar:leaf-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="text-lg font-medium mb-4 tracking-tight">Waxing Services</h3>
<ul className="text-sm text-gray-600 space-y-2 font-light">
<li>Full Body Waxing</li>
<li>Brazilian Waxing</li>
<li>Facial Waxing</li>
<li>Gentle Waxing</li>
</ul>
</div>

<div className="p-8 border border-gray-100 bg-[#FAF9F6] hover:border-[#C5A059]/50 transition-colors duration-300 reveal delay-100">
<iconify-icon className="text-[#C5A059] mb-6" icon="solar:bath-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="text-lg font-medium mb-4 tracking-tight">Wellness</h3>
<ul className="text-sm text-gray-600 space-y-2 font-light">
<li>Relaxing Massage</li>
<li>Deep Tissue Massage</li>
<li>Spa Services</li>
<li>Aromatherapy</li>
</ul>
</div>

<div className="p-8 border border-gray-100 bg-[#FAF9F6] hover:border-[#C5A059]/50 transition-colors duration-300 reveal delay-200">
<iconify-icon className="text-[#C5A059] mb-6" icon="solar:dna-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="text-lg font-medium mb-4 tracking-tight">Advanced Beauty</h3>
<ul className="text-sm text-gray-600 space-y-2 font-light">
<li>Permanent Makeup</li>
<li>Permanent Hair Removal</li>
<li>Laser Treatments</li>
</ul>
</div>

<div className="p-8 border border-gray-100 bg-[#FAF9F6] hover:border-[#C5A059]/50 transition-colors duration-300 reveal delay-300">
<iconify-icon className="text-[#C5A059] mb-6" icon="solar:home-smile-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="text-lg font-medium mb-4 tracking-tight">Special Services</h3>
<ul className="text-sm text-gray-600 space-y-2 font-light">
<li>Online Salon Booking</li>
<li>Mobile Salon Service</li>
<li>Home Services</li>
<li>Event Consultations</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-2 bg-[#1A1A1A]" id="gallery">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">Our Work</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-2">
<div className="aspect-square bg-gray-800 overflow-hidden reveal"><img alt="Gallery Image" className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1595476108010-b4d1f10d5e43?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/></div>
<div className="aspect-square bg-gray-800 overflow-hidden reveal delay-100"><img alt="Gallery Image" className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/></div>
<div className="aspect-square bg-gray-800 overflow-hidden reveal delay-200"><img alt="Gallery Image" className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/></div>
<div className="aspect-square bg-gray-800 overflow-hidden reveal delay-300"><img alt="Gallery Image" className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/></div>
<div className="aspect-square bg-gray-800 overflow-hidden reveal"><img alt="Gallery Image" className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1516975080661-46bfa2c281c7?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/></div>
<div className="aspect-square bg-gray-800 overflow-hidden reveal delay-100"><img alt="Gallery Image" className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/></div>
<div className="aspect-square bg-gray-800 overflow-hidden reveal delay-200"><img alt="Gallery Image" className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/></div>
<div className="aspect-square bg-gray-800 overflow-hidden reveal delay-300"><img alt="Gallery Image" className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/></div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 bg-[#FAF9F6] relative overflow-hidden" id="booking">

<div className="absolute top-0 right-0 w-1/2 h-full bg-white z-0 hidden md:block"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16">
<div className="reveal pt-8">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-[#1A1A1A]">Reserve Your Time</h2>
<p className="text-gray-600 font-light mb-12 max-w-md">
                            Book your appointment online. Select your preferred service, date, and time, and we'll be ready for you.
                        </p>

<div className="bg-white p-6 border border-gray-100 relative mt-12 hidden md:block">
<iconify-icon className="text-[#C5A059] absolute -top-4 -left-2 bg-white px-2" icon="solar:quote-left-linear" strokeWidth="1.5" width="24"></iconify-icon>
<p className="text-sm font-light text-gray-600 italic mb-4">"The best salon experience I've had. Professional staff and amazing results. Highly recommend for both grooming and spa services."</p>
<div className="text-xs font-medium uppercase tracking-widest text-[#1A1A1A]">- Sarah Jenkins</div>
</div>
</div>
<div className="bg-white p-8 md:p-12 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] reveal delay-100">
<form className="flex flex-col gap-6" id="bookingForm">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="flex flex-col">
<label className="text-xs text-gray-500 mb-1">Full Name</label>
<input className="form-input text-sm text-[#1A1A1A]" placeholder="Jane Doe" required="" type="text"/>
</div>
<div className="flex flex-col">
<label className="text-xs text-gray-500 mb-1">Phone Number</label>
<input className="form-input text-sm text-[#1A1A1A]" placeholder="+91 0000000000" required="" type="tel"/>
</div>
</div>
<div className="flex flex-col">
<label className="text-xs text-gray-500 mb-1">Select Service</label>
<select className="form-input text-sm text-[#1A1A1A] bg-transparent" required="">
<option disabled="" selected="" value="">Choose a service...</option>
<optgroup label="Hair">
<option>Haircut &amp; Styling</option>
<option>Coloring &amp; Balayage</option>
</optgroup>
<optgroup label="Beauty &amp; Skin">
<option>Facial Treatment</option>
<option>Threading &amp; Waxing</option>
</optgroup>
<optgroup label="Makeup">
<option>Bridal Package</option>
<option>Party Makeup</option>
</optgroup>
<optgroup label="Wellness">
<option>Spa Massage</option>
<option>Manicure &amp; Pedicure</option>
</optgroup>
</select>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="flex flex-col">
<label className="text-xs text-gray-500 mb-1">Date</label>
<input className="form-input text-sm text-[#1A1A1A]" required="" type="date"/>
</div>
<div className="flex flex-col">
<label className="text-xs text-gray-500 mb-1">Time</label>
<input className="form-input text-sm text-[#1A1A1A]" required="" type="time"/>
</div>
</div>
<div className="flex flex-col">
<label className="text-xs text-gray-500 mb-1">Message (Optional)</label>
<textarea className="form-input text-sm text-[#1A1A1A] resize-none" placeholder="Any special requests?" rows="2"></textarea>
</div>
<button className="mt-4 w-full py-4 bg-[#1A1A1A] text-white text-sm font-medium hover:bg-[#C5A059] transition-colors duration-300 flex items-center justify-center gap-2 group" type="submit">
                                Confirm Appointment
                                <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</form>

<div className="hidden flex-col items-center justify-center text-center py-12" id="successMessage">
<div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-green-500 mb-4">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-[#1A1A1A] mb-2">Request Received!</h3>
<p className="text-sm text-gray-500 font-light">We will contact you shortly to confirm your appointment details.</p>
<button className="mt-6 text-xs text-[#C5A059] uppercase tracking-wider hover:underline" onclick="document.getElementById('successMessage').classList.add('hidden'); document.getElementById('bookingForm').classList.remove('hidden'); document.getElementById('bookingForm').reset();">Book Another</button>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#1A1A1A] text-white/70 pt-24 pb-12 px-6 border-t border-white/10" id="contact">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">

<div className="reveal">
<h2 className="text-3xl font-medium tracking-tight text-white mb-8">Visit Us</h2>
<div className="space-y-6 text-sm font-light">
<div className="flex gap-4">
<iconify-icon className="text-[#C5A059] shrink-0 mt-1" icon="solar:map-point-linear" strokeWidth="1.5" width="20"></iconify-icon>
<div>
<div className="text-white font-medium mb-1">Aaina Unisex Salon</div>
<p className="leading-relaxed">Old Pawar Gas Godam, New Bus Stand Road<br/>Jaisalmer House, 1st Floor<br/>Ravindra Nagar, Bara<br/>Madhya Pradesh – 486001</p>
</div>
</div>
<div className="flex gap-4 items-center">
<iconify-icon className="text-[#C5A059] shrink-0" icon="solar:phone-linear" strokeWidth="1.5" width="20"></iconify-icon>
<a className="hover:text-white transition-colors" href="tel:08269547604">08269547604</a>
</div>
<div className="flex gap-4">
<iconify-icon className="text-[#C5A059] shrink-0 mt-1" icon="solar:clock-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
<div>
<div className="text-white font-medium mb-1">Opening Hours</div>
<p>Monday – Sunday: 9:00 AM – 9:00 PM</p>
</div>
</div>
</div>
<div className="flex gap-4 mt-10">
<a className="px-6 py-3 border border-white/20 text-white text-xs font-medium hover:bg-white/10 transition-colors flex items-center gap-2" href="tel:08269547604">
<iconify-icon icon="solar:phone-calling-linear" width="16"></iconify-icon>
                                Call Now
                            </a>
<a className="px-6 py-3 bg-[#25D366] text-white text-xs font-medium hover:bg-[#20b858] transition-colors flex items-center gap-2" href="#">
<iconify-icon icon="solar:letter-linear" width="16"></iconify-icon>
                                WhatsApp
                            </a>
</div>
</div>

<div className="h-[400px] bg-white/5 border border-white/10 relative flex items-center justify-center reveal delay-100 group overflow-hidden">
<img alt="Map Area" className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#1A1A1A]/50"></div>
<a className="relative z-10 px-6 py-3 bg-white text-[#1A1A1A] text-xs font-medium hover:bg-[#C5A059] hover:text-white transition-colors flex items-center gap-2" href="https://maps.google.com/?q=Aaina+Unisex+Salon+Madhya+Pradesh+486001" target="_blank">
                            Open in Google Maps
                            <iconify-icon icon="solar:map-arrow-up-linear" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-white/10 pt-12 text-sm font-light reveal">
<div className="col-span-1 md:col-span-2">
<div className="flex flex-col mb-4">
<span className="text-lg font-medium tracking-tight uppercase text-white leading-none mb-1">Aaina</span>
<span className="text-[9px] tracking-[0.2em] text-[#C5A059] uppercase">Unisex Salon</span>
</div>
<p className="max-w-xs mb-6">Redefining beauty and grooming standards with premium services and professional care.</p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:text-[#C5A059] hover:border-[#C5A059] transition-all" href="#"><iconify-icon icon="solar:camera-linear" width="16"></iconify-icon></a>
<a className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:text-[#C5A059] hover:border-[#C5A059] transition-all" href="#"><iconify-icon icon="solar:users-group-rounded-linear" width="16"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-xs uppercase tracking-widest">Quick Links</h4>
<ul className="space-y-2">
<li><a className="hover:text-white transition-colors" href="#home">Home</a></li>
<li><a className="hover:text-white transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-white transition-colors" href="#gallery">Gallery</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-xs uppercase tracking-widest">Legal</h4>
<ul className="space-y-2">
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-white transition-colors" href="#">Cancellation Policy</a></li>
</ul>
</div>
</div>
<div className="mt-12 text-center text-xs text-white/30 font-light reveal">
                    © 2024 Aaina Unisex Salon. All rights reserved.
                </div>
</div>
</footer>
</main>


    </>
  );
}
