import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Navbar scroll effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-[#0F172A]/90', 'backdrop-blur-md', 'shadow-lg');
            } else {
                navbar.classList.remove('bg-[#0F172A]/90', 'backdrop-blur-md', 'shadow-lg');
            }
        });

        // Intersection Observer for scroll animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-on-scroll').forEach((element) => {
            observer.observe(element);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed transition-all duration-300 z-50 w-full border-transparent border-b pt-4 pb-4 top-0" id="navbar">
<div className="flex max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="flex flex-col relative z-50 group" href="#">
<span className="md:text-3xl group-hover:opacity-80 transition-opacity text-2xl text-[#F8FAFC] tracking-tight font-serif">
                    RADIANT SKIN
                </span>
<span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-medium">Dermatology &amp; Laser NYC</span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-light text-slate-200 hover:text-[#D4AF37] transition-colors tracking-wide uppercase" href="#services">Services</a>
<a className="text-sm font-light text-slate-200 hover:text-[#D4AF37] transition-colors tracking-wide uppercase" href="#about">About</a>
<a className="text-sm font-light text-slate-200 hover:text-[#D4AF37] transition-colors tracking-wide uppercase" href="#testimonials">Reviews</a>
<a className="text-sm font-light text-slate-200 hover:text-[#D4AF37] transition-colors tracking-wide uppercase" href="#contact">Contact</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center gap-2 px-6 py-2 bg-[#D4AF37] text-white text-sm font-medium tracking-wide hover:brightness-110 transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.4)]" href="#appointment">
<span className="">Request Appointment</span>
<iconify-icon icon="solar:calendar-linear" width="20"></iconify-icon>
</a>

<button aria-label="Menu" className="md:hidden text-white relative z-50">
<iconify-icon className="" icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</div>
</header>

<section className="relative w-full h-[85vh] min-h-[600px] overflow-hidden flex items-center justify-center bg-[#0F172A]">

<div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
<video autoplay="" className="absolute min-w-full min-h-full w-auto h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover" loop="" muted="" playsinline="" poster="https://images.unsplash.com/photo-1556760544-74068565f05c?q=80&amp;w=2000&amp;auto=format&amp;fit=crop">

<source src="https://videos.pexels.com/video-files/5927885/5927885-hd_1920_1080_25fps.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
</div>

<div className="z-10 bg-gradient-to-r from-[#0F172A]/90 via-[#0F172A]/60 to-[#0F172A]/20 absolute inset-0"></div>

<div className="z-20 w-full max-w-7xl mr-auto ml-auto pt-12 pr-6 pl-6 relative">
<div className="max-w-2xl reveal-on-scroll">
<p className="text-[#D4AF37] text-sm md:text-base uppercase tracking-[0.2em] mb-4 font-medium">Board-Certified Excellence</p>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1] mb-6 tracking-tight">
                    Advanced Dermatology <br/> <span className="italic text-[#fbeebb]">In New York City</span>
</h1>
<p className="text-slate-200 text-base md:text-lg font-light leading-relaxed mb-8 max-w-lg shadow-black drop-shadow-md">
                    We are excited about partnering with our patients to create result-driven, personalized regimens to enhance skin health and appearance.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 px-8 py-3 bg-[#D4AF37] text-white text-sm tracking-wide font-medium hover:scale-105 transition-transform duration-300 shadow-lg" href="#appointment">
                        Book Appointment
                    </a>
<a className="inline-flex justify-center items-center gap-2 px-8 py-3 border border-white/30 text-white backdrop-blur-md text-sm tracking-wide font-medium hover:bg-white hover:text-[#0F172A] transition-all duration-300" href="tel:2122290007">
<iconify-icon className="" icon="solar:phone-calling-linear" width="20"></iconify-icon>
                        (212) 229-0007
                    </a>
</div>
</div>
</div>

<div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 animate-bounce text-white/50">
<iconify-icon icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</div>
</section>

<div className="bg-[#0F172A] border-b border-white/5 py-8 relative z-20">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
<div className="reveal-on-scroll">
<p className="text-3xl text-white font-serif mb-1">5,000s+</p>
<p className="text-xs text-[#D4AF37] uppercase tracking-widest">Happy Patients</p>
</div>
<div className="reveal-on-scroll reveal-delay-100">
<p className="text-3xl text-white font-serif mb-1">7,490s+</p>
<p className="text-xs text-[#D4AF37] uppercase tracking-widest">Procedures Done</p>
</div>
<div className="reveal-on-scroll reveal-delay-200">
<p className="text-3xl font-serif text-white mb-1">18+</p>
<p className="text-xs text-[#D4AF37] uppercase tracking-widest">Years Practice</p>
</div>
<div className="reveal-on-scroll reveal-delay-300">
<p className="text-3xl font-serif text-white mb-1">25+</p>
<p className="text-xs text-[#D4AF37] uppercase tracking-widest">Awards Won</p>
</div>
</div>
</div>
</div>

<section className="overflow-hidden bg-white pt-24 pb-24" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="relative reveal-on-scroll">
<div className="absolute -top-4 -left-4 w-24 h-24 bg-[#D4AF37]/10 z-0"></div>
<div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#0F172A]/5 z-0"></div>

<img alt="Dr. Dele-Michael" className="object-left transition-all duration-700 w-full h-[500px] object-cover z-10 relative shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/878cf253-e334-4220-8b46-317a1e95f5ff_1600w.png"/>

<div className="absolute -bottom-8 left-8 md:right-8 md:left-auto max-w-xs p-6 bg-white shadow-xl z-20 border-l-4 border-[#D4AF37]">
<p className="font-serif italic text-slate-800 text-lg">"Healthy, radiant skin is not just a goal, it's a journey we take together."</p>
</div>
</div>

<div className="reveal-on-scroll reveal-delay-200">
<h2 className="uppercase text-xs font-semibold text-[#D4AF37] tracking-[0.2em] mb-3">Meet The #1 Of the BEST DERMATOLOGIST (NYC)</h2>
<h3 className="text-3xl md:text-4xl font-serif text-[#0F172A] mb-6 tracking-tight">Dr. Dele-Michael</h3>
<p className="text-slate-600 font-light leading-relaxed mb-6">
                        Dr. Dele-Michael is a board-certified dermatologist specializing in General Dermatology, Dermatologic Surgery, and Cosmetic Dermatology in Manhattan, New York.
                    </p>
<p className="text-slate-600 font-light leading-relaxed mb-8">
                        She is an Assistant Professor of Dermatology at the prestigious Mount Sinai School of Medicine where she teaches residents and medical students. Recognized as one of the best dermatologists in NYC, she combines medical expertise with an artistic eye to help you achieve your most radiant self.
                    </p>
<div className="flex items-center gap-4">
<div className="">
<p className="font-serif text-[#0F172A] text-lg">Radiant Skin Dermatology</p>
<p className="text-xs text-[#D4AF37] uppercase tracking-wide">Board Certified</p>
</div>
</div>
<div className="mt-8">
<a className="text-sm font-medium text-[#0F172A] border-b border-[#D4AF37] pb-1 hover:text-[#D4AF37] transition-colors" href="#appointment">
                            Read Full Bio <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0F172A] text-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal-on-scroll">
<span className="text-[#D4AF37] text-xs font-semibold tracking-[0.2em] uppercase">Comprehensive Care</span>
<h2 className="text-3xl md:text-4xl font-serif mt-3 tracking-tight">Our Specialties</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-8 border border-white/5 bg-white/5 hover:bg-[#D4AF37] transition-all duration-500 reveal-on-scroll">
<div className="w-12 h-12 mb-6 text-[#D4AF37] group-hover:text-white transition-colors duration-500 flex items-center justify-center">
<iconify-icon icon="solar:face-scan-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-serif mb-3 group-hover:text-white transition-colors">Acne &amp; Scars</h3>
<p className="text-sm font-light text-slate-400 group-hover:text-white/90 leading-relaxed">
                        Customized treatment plans for acne and scarring to restore smooth, clear confidence to your complexion.
                    </p>
</div>

<div className="group p-8 border border-white/5 bg-white/5 hover:bg-[#D4AF37] transition-all duration-500 reveal-on-scroll reveal-delay-100">
<div className="w-12 h-12 mb-6 text-[#D4AF37] group-hover:text-white transition-colors duration-500 flex items-center justify-center">
<iconify-icon icon="solar:user-bold" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-serif mb-3 group-hover:text-white transition-colors">Hair Loss</h3>
<p className="text-sm font-light text-slate-400 group-hover:text-white/90 leading-relaxed">
                        Leading Alopecia treatments. We help restore hair density with expert care and modern therapies.
                    </p>
</div>

<div className="group p-8 border border-white/5 bg-white/5 hover:bg-[#D4AF37] transition-all duration-500 reveal-on-scroll reveal-delay-200">
<div className="w-12 h-12 mb-6 text-[#D4AF37] group-hover:text-white transition-colors duration-500 flex items-center justify-center">
<iconify-icon icon="solar:syringe-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-serif mb-3 group-hover:text-white transition-colors">Cosmetic Injectables</h3>
<p className="text-sm font-light text-slate-400 group-hover:text-white/90 leading-relaxed">
                        Botox, Dermal Fillers, and volumizing treatments to smooth wrinkles and enhance natural contours.
                    </p>
</div>

<div className="group p-8 border border-white/5 bg-white/5 hover:bg-[#D4AF37] transition-all duration-500 reveal-on-scroll reveal-delay-300">
<div className="w-12 h-12 mb-6 text-[#D4AF37] group-hover:text-white transition-colors duration-500 flex items-center justify-center">
<iconify-icon icon="solar:shield-check-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-serif mb-3 group-hover:text-white transition-colors">Medical Dermatology</h3>
<p className="text-sm font-light text-slate-400 group-hover:text-white/90 leading-relaxed">
                        Expert diagnosis and treatment for skin cancer, biopsies, rashes, and all general skin conditions.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA]" id="gallery">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 reveal-on-scroll">
<div>
<span className="text-[#D4AF37] text-xs font-semibold tracking-[0.2em] uppercase">Visual Results</span>
<h2 className="text-3xl md:text-4xl font-serif mt-3 text-[#0F172A] tracking-tight">The Radiant Difference</h2>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-[#0F172A] border-b border-[#D4AF37] pb-1 hover:text-[#D4AF37] transition-colors" href="#">
                    View Before &amp; Afters <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="relative group overflow-hidden reveal-on-scroll h-80">
<img alt="Cosmetic Injection" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://cdn.prod.website-files.com/605eea74abaa952d89167728/606175bc5c9d2b735b400006_Mask%20Group.png"/>
<div className="absolute inset-0 bg-[#0F172A]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<p className="text-white font-serif text-xl tracking-wide">Injectables</p>
</div>
</div>

<div className="relative group overflow-hidden reveal-on-scroll reveal-delay-100 h-80">
<img alt="Body Contouring" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://cdn.prod.website-files.com/605eea74abaa952d89167728/606175bc150ebe04f7ed2d3a_Mask%20Group-1.png"/>
<div className="absolute inset-0 bg-[#0F172A]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<p className="text-white font-serif text-xl tracking-wide">Body Contouring</p>
</div>
</div>

<div className="relative group overflow-hidden reveal-on-scroll reveal-delay-200 h-80">
<img alt="Botox" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://cdn.prod.website-files.com/605eea74abaa952d89167728/606175bc58b08a4d4a22a285_Mask%20Group-2.png"/>
<div className="absolute inset-0 bg-[#0F172A]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<p className="text-white font-serif text-xl tracking-wide">Anti-Aging</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100" id="testimonials">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal-on-scroll">
<span className="text-[#D4AF37] text-xs font-semibold tracking-[0.2em] uppercase">Testimonials</span>
<h2 className="text-3xl md:text-4xl font-serif mt-3 text-[#0F172A] tracking-tight">Patient Stories</h2>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-slate-50 p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 reveal-on-scroll">
<div className="flex text-[#D4AF37] mb-4 gap-1">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-slate-600 font-light italic mb-6">"I have been going to Dr. Dele-Michael for some time now and I can honestly say that she’s one of the best. She’s very knowledgeable and has been able to get my skin under control."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center text-white font-serif text-lg">E</div>
<div>
<p className="font-medium text-[#0F172A] text-sm">E.S.</p>
<p className="text-xs text-slate-400">Verified Patient</p>
</div>
</div>
</div>

<div className="bg-slate-50 p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 reveal-on-scroll reveal-delay-100">
<div className="flex text-[#D4AF37] mb-4 gap-1">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-slate-600 font-light italic mb-6">"She’s wonderful. I was very nervous meeting with a new derm, but she quickly took away my worries! Nice, sweet. Looking forward to our appointment a couple of weeks from now!"</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center text-white font-serif text-lg">J</div>
<div>
<p className="font-medium text-[#0F172A] text-sm">J.W.</p>
<p className="text-xs text-slate-400">Verified Patient</p>
</div>
</div>
</div>

<div className="bg-slate-50 p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 reveal-on-scroll reveal-delay-200">
<div className="flex text-[#D4AF37] mb-4 gap-1">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-slate-600 font-light italic mb-6">"I am very pleased about my experience with Dr. Dele-Michael. She is an outstanding dermatologist with superb bedside manners. I would recommend her without hesitation."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center text-white font-serif text-lg">Y</div>
<div>
<p className="font-medium text-[#0F172A] text-sm">Y.F.</p>
<p className="text-xs text-slate-400">Verified Patient</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal-on-scroll">
<span className="text-[#D4AF37] text-xs font-semibold tracking-[0.2em] uppercase">Visit Us</span>
<h2 className="text-3xl md:text-4xl font-serif mt-3 text-[#0F172A] tracking-tight">Our Location</h2>
</div>
<div className="max-w-3xl mx-auto">

<div className="flex flex-col md:flex-row border border-slate-100 bg-slate-50 reveal-on-scroll">
<div className="h-64 md:h-auto md:w-1/2 bg-slate-200 relative">

<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.914902341457!2d-73.95540328459296!3d40.80164897932224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f612847c1b81%3A0x6e7b1a6448386b8!2s207%20W%20115th%20St%2C%20New%20York%2C%20NY%2010026!5e0!3m2!1sen!2sus!4v1634567890123!5m2!1sen!2sus" style={{border: '0', filter: 'grayscale(100%)'}} width="100%"></iframe>
</div>
<div className="p-10 md:w-1/2">
<h3 className="text-xl font-serif text-[#0F172A] mb-2">Harlem / NYC</h3>
<p className="text-slate-500 font-light text-sm mb-6">207 W. 115 St.<br/>New York, NY 10026</p>
<div className="flex flex-col gap-4 mb-8">
<a className="flex items-center gap-3 text-sm text-slate-600 hover:text-[#D4AF37]" href="tel:2122290007">
<iconify-icon className="text-[#D4AF37]" icon="solar:phone-calling-linear" width="18"></iconify-icon> +1 (212) 229-0007
                            </a>
<div className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-[#D4AF37]" icon="solar:clock-circle-linear" width="18"></iconify-icon> Mon-Fri: 9AM - 6PM
                            </div>
</div>
<a className="inline-block w-full py-3 border border-[#0F172A] text-[#0F172A] text-sm font-medium hover:bg-[#0F172A] hover:text-white transition-colors uppercase tracking-wide text-center" href="https://radiantskindermatologyandlaser.novopatient.com/home!requestAppointment.do">
                            Get Directions
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0F172A] relative overflow-hidden" id="appointment">
<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#D4AF37]/5 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16">

<div className="reveal-on-scroll">
<span className="text-[#D4AF37] text-xs font-semibold tracking-[0.2em] uppercase">Start Your Journey</span>
<h2 className="text-3xl md:text-5xl font-serif mt-3 text-white tracking-tight mb-6">Request An <br/>Appointment</h2>
<p className="text-slate-400 font-light leading-relaxed mb-10 max-w-md">
                        Your quest for radiant skin ends here. Fill out the form, and our team will contact you to schedule your consultation with Dr. Dele-Michael.
                    </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="p-3 bg-white/5 rounded-full text-[#D4AF37] flex items-center justify-center">
<iconify-icon icon="solar:phone-calling-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-white font-medium">Office Phone</p>
<p className="text-slate-400 text-sm font-light">+1 (212) 229-0007</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 bg-white/5 rounded-full text-[#D4AF37] flex items-center justify-center">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-white font-medium">Insurance</p>
<p className="text-slate-400 text-sm font-light">We participate in most commercial plans.</p>
</div>
</div>
</div>
</div>

<div className="bg-white p-8 md:p-10 shadow-2xl reveal-on-scroll reveal-delay-200">
<form action="#" className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div>
<label className="block text-xs uppercase text-slate-500 font-medium mb-2">Name</label>
<input className="w-full bg-slate-50 border border-slate-200 p-3 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all" placeholder="Your Name" type="text"/>
</div>
<div>
<label className="block text-xs uppercase text-slate-500 font-medium mb-2">Phone</label>
<input className="w-full bg-slate-50 border border-slate-200 p-3 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all" placeholder="+1 (212) ..." type="tel"/>
</div>
</div>
<div>
<label className="block text-xs uppercase text-slate-500 font-medium mb-2">Interested In</label>
<select className="w-full bg-slate-50 border border-slate-200 p-3 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all text-slate-600">
<option>General Dermatology</option>
<option>Acne Treatment</option>
<option>Hair Loss / Alopecia</option>
<option>Cosmetic Procedures</option>
<option>Skin Cancer Screening</option>
</select>
</div>
<div className="">
<label className="block text-xs uppercase text-slate-500 font-medium mb-2">Message</label>
<textarea className="w-full bg-slate-50 border border-slate-200 p-3 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all" placeholder="How can we help you?" rows="3"></textarea>
</div>
<button className="w-full py-4 bg-[#D4AF37] text-white font-semibold text-sm tracking-widest uppercase hover:brightness-110 transition-all duration-300" type="submit">
                            Request Appointment
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-[#020617] text-slate-400 py-16 border-t border-white/5" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

<div className="col-span-1 md:col-span-1">
<a className="text-xl font-serif text-white tracking-tight block mb-4" href="#">RADIANT SKIN NYC</a>
<p className="text-sm font-light leading-relaxed mb-6">
                        Providing top-tier dermatological and cosmetic care in the heart of New York City.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-[#D4AF37] transition-colors" href="https://www.instagram.com/radiantskinnyc/" target="_blank"><iconify-icon icon="ri:instagram-line" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-[#D4AF37] transition-colors" href="https://www.linkedin.com/company/radiantskinnyc/" target="_blank"><iconify-icon icon="ri:linkedin-fill" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-[#D4AF37] transition-colors" href="https://www.youtube.com/channel/UCjoKe_QciW8na01TQyB2vVg" target="_blank"><iconify-icon icon="ri:youtube-fill" width="20"></iconify-icon></a>
</div>
</div>

<div className="">
<h4 className="text-white font-medium uppercase text-xs tracking-widest mb-6">Explore</h4>
<ul className="space-y-3 text-sm font-light">
<li className=""><a className="hover:text-[#D4AF37] transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-[#D4AF37] transition-colors" href="#services">Services</a></li>
<li className=""><a className="hover:text-[#D4AF37] transition-colors" href="#blog">Blog</a></li>
<li><a className="hover:text-[#D4AF37] transition-colors" href="#contact">Contact</a></li>
</ul>
</div>

<div className="">
<h4 className="text-white font-medium uppercase text-xs tracking-widest mb-6">Patients</h4>
<ul className="space-y-3 text-sm font-light">
<li className=""><a className="hover:text-[#D4AF37] transition-colors" href="#">Patient Forms</a></li>
<li><a className="hover:text-[#D4AF37] transition-colors" href="#">Insurance Policy</a></li>
<li className=""><a className="hover:text-[#D4AF37] transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-[#D4AF37] transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>

<div className="">
<h4 className="text-white font-medium uppercase text-xs tracking-widest mb-6">Contact</h4>
<ul className="space-y-3 text-sm font-light">
<li className="flex items-center gap-2"><iconify-icon className="text-[#D4AF37]" icon="solar:phone-calling-linear" width="16"></iconify-icon> +1 (212) 229-0007</li>
<li className="flex items-start gap-2"><iconify-icon className="text-[#D4AF37]" icon="solar:map-point-linear" width="16"></iconify-icon> 207 W. 115 St.<br/>New York NY 10026</li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-light">
<p className="">© 2026 Dr. Dele-Michael. All rights reserved. Customized by Ryan Smith</p>
<div className="mt-4 md:mt-0 opacity-50">
                    Designed with Radiant Care
                </div>
</div>
</div>
</footer>



    </>
  );
}
