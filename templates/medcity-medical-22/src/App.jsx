import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Roboto', 'sans-serif'],
heading: ['Quicksand', 'sans-serif'],
},
colors: {
primary: '#1d2a4d',      // Deep Blue
secondary: '#21cdc0',    // Bright Teal
accent: '#18223d',       // Darker Blue
body: '#7f88a6',         // Gray text
light: '#f4f7fa',        // Light bg
},
letterSpacing: {
tight: '-0.025em',
},
boxShadow: {
'custom': '0 5px 30px rgba(29, 42, 77, 0.08)',
}
}
}
}



        // Preloader Logic
        window.addEventListener('load', function() {
            const preloader = document.getElementById('preloader');
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        });

        // Sticky Navbar & Scroll Top Button
        const navbar = document.getElementById('navbar');
        const scrollTopBtn = document.getElementById('scrollTopBtn');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.classList.add('py-2');
                navbar.classList.remove('py-4');
                scrollTopBtn.classList.remove('opacity-0', 'invisible');
            } else {
                navbar.classList.add('py-4');
                navbar.classList.remove('py-2');
                scrollTopBtn.classList.add('opacity-0', 'invisible');
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Mobile Menu Toggle
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Simple Fade Slider Logic
        let currentSlide = 0;
        const slides = document.querySelectorAll('.fade-slide');
        const totalSlides = slides.length;

        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            slides[index].classList.add('active');
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            showSlide(currentSlide);
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            showSlide(currentSlide);
        }

        // Auto slide
        setInterval(nextSlide, 5000);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<div className="preloader" id="preloader" style={{opacity: '0', display: 'none'}}>
<div className="loading"><span></span><span></span><span></span><span></span></div>
</div>

<header className="w-full relative z-40">

<div className="bg-white border-b border-gray-100 py-2 hidden lg:block">
<div className="container mx-auto px-4 flex justify-between items-center">
<div className="flex items-center space-x-2 text-sm text-primary font-medium">
<iconify-icon className="text-secondary text-lg" icon="solar:danger-circle-linear"></iconify-icon>
<span>Our Clinic sees over 10,000 patients every year.</span>
<a className="underline decoration-secondary underline-offset-2 hover:text-secondary transition-colors" href="#">Hear their real stories</a>
</div>
<ul className="flex items-center space-x-6 text-sm font-medium text-primary">
<li className="flex items-center gap-2">
<iconify-icon className="text-secondary text-lg" icon="solar:phone-calling-linear"></iconify-icon>
<a className="hover:text-secondary transition-colors" href="tel:+5565454117">Emergency: (002) 01061245741</a>
</li>
<li className="flex items-center gap-2">
<iconify-icon className="text-secondary text-lg" icon="solar:map-point-linear"></iconify-icon>
<span>Brooklyn, New York</span>
</li>
<li className="flex items-center gap-2">
<iconify-icon className="text-secondary text-lg" icon="solar:clock-circle-linear"></iconify-icon>
<span>Mon - Fri: 8:00 am - 7:00 pm</span>
</li>
</ul>
</div>
</div>

<nav className="bg-white shadow-sm transition-all duration-300 sticky top-0" id="navbar">
<div className="container mx-auto px-4 py-4 flex justify-between items-center">

<a className="text-2xl font-heading font-bold text-primary tracking-tighter flex items-center gap-1" href="#">
                    MED<span className="text-secondary">CITY</span>
</a>

<div className="hidden lg:flex items-center space-x-8">
<ul className="flex space-x-6 font-heading font-semibold text-primary">
<li className="group relative cursor-pointer">
<a className="text-secondary flex items-center gap-1" href="#">Home <iconify-icon className="text-xs" icon="solar:alt-arrow-down-linear"></iconify-icon></a>

<div className="absolute top-full left-0 w-48 bg-white shadow-custom rounded-b-lg py-2 hidden group-hover:block border-t-2 border-secondary animate-fade-in">
<a className="block px-4 py-2 hover:bg-gray-50 hover:text-secondary text-sm" href="#">Home Main</a>
<a className="block px-4 py-2 hover:bg-gray-50 hover:text-secondary text-sm" href="#">Home Dentist</a>
</div>
</li>
<li className="hover:text-secondary transition-colors cursor-pointer flex items-center gap-1">About Us <iconify-icon className="text-xs" icon="solar:alt-arrow-down-linear"></iconify-icon></li>
<li className="hover:text-secondary transition-colors cursor-pointer flex items-center gap-1">Doctors <iconify-icon className="text-xs" icon="solar:alt-arrow-down-linear"></iconify-icon></li>
</ul>
<div className="flex items-center gap-4 border-l border-gray-200 pl-6">
<button className="text-primary hover:text-secondary transition-colors text-xl">
<iconify-icon icon="solar:magnifer-linear"></iconify-icon>
</button>
<a className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-full font-heading font-semibold text-sm transition-colors duration-300 flex items-center gap-2" href="#appointment">
<iconify-icon className="text-lg" icon="solar:calendar-linear"></iconify-icon>
<span>Appointment</span>
</a>
</div>
</div>

<button className="lg:hidden text-primary text-3xl" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>

<div className="hidden lg:hidden bg-white border-t p-4 absolute w-full shadow-lg" id="mobile-menu">
<ul className="space-y-4 font-heading font-semibold text-primary">
<li><a className="block text-secondary" href="#">Home</a></li>
<li><a className="block" href="#">About Us</a></li>
<li><a className="block" href="#">Doctors</a></li>
</ul>
</div>
</nav>
</header>

<section className="relative h-[650px] w-full overflow-hidden bg-gray-900">

<div className="fade-slide active flex items-center" id="slide1">
<div className="absolute inset-0 z-0">
<img alt="Dentist" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&amp;w=2068&amp;auto=format&amp;fit=crop"/>
</div>
<div className="container mx-auto px-4 relative z-10 pt-20">
<div className="max-w-3xl">
<span className="block text-secondary font-heading font-semibold text-xl mb-4 tracking-wide">The Best Medical And General Practice Care!</span>
<h2 className="text-white font-heading font-bold text-5xl md:text-6xl leading-tight mb-6 tracking-tight">Vibrant Smile For <br/>Healthy Lifestyle!!</h2>
<p className="text-gray-200 text-lg mb-10 max-w-xl font-light">The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.</p>
<div className="flex flex-wrap gap-4">
<a className="bg-secondary hover:bg-white hover:text-primary text-white px-8 py-3.5 rounded-full font-heading font-semibold transition-all duration-300 flex items-center gap-2" href="#">
                            Our Services <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="bg-white text-primary hover:bg-secondary hover:text-white px-8 py-3.5 rounded-full font-heading font-semibold transition-all duration-300 flex items-center gap-2" href="#">
                            More About Us <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>

<div className="fade-slide flex items-center" id="slide2">
<div className="absolute inset-0 z-0">
<img alt="Dental Care" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&amp;w=2068&amp;auto=format&amp;fit=crop"/>
</div>
<div className="container mx-auto px-4 relative z-10 pt-20">
<div className="max-w-3xl">
<span className="block text-secondary font-heading font-semibold text-xl mb-4 tracking-wide">World Class Dental Services</span>
<h2 className="text-white font-heading font-bold text-5xl md:text-6xl leading-tight mb-6 tracking-tight">Best Care For <br/>Dental Health!</h2>
<p className="text-gray-200 text-lg mb-10 max-w-xl font-light">The health and well-being of our patients and their health care team will always be our priority.</p>
<div className="flex flex-wrap gap-4">
<a className="bg-secondary hover:bg-white hover:text-primary text-white px-8 py-3.5 rounded-full font-heading font-semibold transition-all duration-300 flex items-center gap-2" href="#">
                            Our Services <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>

<div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-10 z-20">
<button className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-secondary hover:border-secondary transition-all" onclick="prevSlide()">
<iconify-icon className="text-xl" icon="solar:arrow-left-linear"></iconify-icon>
</button>
</div>
<div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-10 z-20">
<button className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-secondary hover:border-secondary transition-all" onclick="nextSlide()">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</section>

<section className="-mt-20 container z-30 mt-9 mr-auto ml-auto pb-20 relative">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-8 rounded-lg shadow-custom group hover:-translate-y-2 transition-transform duration-300">
<div className="w-14 h-14 bg-blue-50 text-secondary rounded-full flex items-center justify-center text-3xl mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
<iconify-icon icon="solar:heart-pulse-linear"></iconify-icon>
</div>
<h4 className="text-primary font-heading font-bold text-xl mb-3">Cosmetic Dentistry</h4>
<p className="text-body text-sm leading-relaxed mb-4">Cosmetic dentistry is generally used to refer to dental work that improves the appearance of teeth.</p>
<a className="inline-flex items-center text-secondary font-semibold text-sm hover:underline" href="#">
                    Read More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white p-8 rounded-lg shadow-custom group hover:-translate-y-2 transition-transform duration-300">
<div className="w-14 h-14 bg-blue-50 text-secondary rounded-full flex items-center justify-center text-3xl mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
<iconify-icon icon="solar:bone-broken-linear"></iconify-icon>
</div>
<h4 className="text-primary font-heading font-bold text-xl mb-3">Implant Dentistry</h4>
<p className="text-body text-sm leading-relaxed mb-4">Dental implants are surgical fixtures placed in the jawbone, which then fuse with jawbone.</p>
<a className="inline-flex items-center text-secondary font-semibold text-sm hover:underline" href="#">
                    Read More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white p-8 rounded-lg shadow-custom group hover:-translate-y-2 transition-transform duration-300">
<div className="w-14 h-14 bg-blue-50 text-secondary rounded-full flex items-center justify-center text-3xl mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
<iconify-icon className="" icon="solar:smile-circle-linear"></iconify-icon>
</div>
<h4 className="text-primary font-heading font-bold text-xl mb-3">Dental Care</h4>
<p className="text-body text-sm leading-relaxed mb-4">By placing a strong emphasis on oral health and hygiene, general dentists help people avoid pain.</p>
<a className="inline-flex items-center text-secondary font-semibold text-sm hover:underline" href="#">
                    Read More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white p-8 rounded-lg shadow-custom group hover:-translate-y-2 transition-transform duration-300">
<div className="w-14 h-14 bg-blue-50 text-secondary rounded-full flex items-center justify-center text-3xl mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
<iconify-icon icon="solar:user-hand-up-linear"></iconify-icon>
</div>
<h4 className="text-primary font-heading font-bold text-xl mb-3">Pediatric Dentistry</h4>
<p className="text-body text-sm leading-relaxed mb-4">Pediatric dentists are dedicated to the oral health of children, they have the experience.</p>
<a className="inline-flex items-center text-secondary font-semibold text-sm hover:underline" href="#">
                    Read More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-10 md:py-16">
<div className="container mx-auto px-4">
<div className="flex flex-col lg:flex-row gap-12">
<div className="lg:w-1/2">
<h3 className="text-primary font-heading font-bold text-3xl md:text-4xl mb-6 leading-tight tracking-tight">Improving The Quality Of Your Life Through Better Health.</h3>
<p className="text-body mb-6 leading-relaxed">Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and to be the first and best choice for healthcare.</p>
<p className="text-body mb-8 leading-relaxed">We will work with you to develop individualised care plans, including management of chronic diseases. We are committed to being the region’s premier healthcare network.</p>
<div className="flex items-center gap-8">
<a className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full font-heading font-semibold transition-colors" href="#">Meet Our Doctors</a>
<div className="opacity-70">

<svg className="" data-icon-replaced="true" data-icon-set="lucide" data-lucide="headphones" fill="none" height="40" stroke="#1d2a4d" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(127, 136, 166)'}} viewbox="0 0 24 24" width="100" xmlns="http://www.w3.org/2000/svg"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path></svg>
</div>
</div>
</div>
<div className="lg:w-1/2 relative">
<div className="relative rounded-lg overflow-hidden h-[400px] shadow-lg">
<img alt="About" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&amp;w=2080&amp;auto=format&amp;fit=crop"/>
<a className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center text-secondary hover:text-primary transition-colors cursor-pointer shadow-xl animate-pulse" href="#">
<iconify-icon className="text-5xl ml-1" icon="solar:play-circle-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 relative overflow-hidden">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover opacity-5" src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&amp;w=2053&amp;auto=format&amp;fit=crop" style={{}}/>
</div>
<div className="container mx-auto px-4 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 mb-16">
<div className="">
<h3 className="text-primary font-heading font-bold text-3xl md:text-4xl mb-4 tracking-tight">Providing Care for The Sickest In Community.</h3>
</div>
<div className="">
<p className="text-primary font-medium mb-6">Medcity has been present in Europe since 1990, offering innovative solutions, specializing in medical services for treatment of medical infrastructure.</p>
<div className="flex items-center gap-6">
<a className="bg-primary hover:bg-secondary text-white px-7 py-3 rounded-full font-heading font-semibold transition-colors flex items-center gap-2" href="#">
                            Make Appointment <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="text-secondary font-semibold hover:text-primary transition-colors flex items-center gap-2" href="#">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon> Our Core Values
                        </a>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0.5 bg-gray-200 border border-gray-200">

<div className="bg-white p-8 group hover:bg-gray-50 transition-colors">
<iconify-icon className="text-5xl text-gray-300 group-hover:text-secondary mb-4 transition-colors" icon="solar:heart-angle-linear"></iconify-icon>
<h4 className="text-primary font-heading font-bold text-lg mb-4">Medical Advices &amp; Check Ups</h4>
<a className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-secondary group-hover:text-white group-hover:border-secondary transition-all" href="#">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white p-8 group hover:bg-gray-50 transition-colors">
<iconify-icon className="text-5xl text-gray-300 group-hover:text-secondary mb-4 transition-colors" icon="solar:stethoscope-linear"></iconify-icon>
<h4 className="text-primary font-heading font-bold text-lg mb-4">Trusted Medical Treatment</h4>
<a className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-secondary group-hover:text-white group-hover:border-secondary transition-all" href="#">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white p-8 group hover:bg-gray-50 transition-colors">
<iconify-icon className="text-5xl text-gray-300 group-hover:text-secondary mb-4 transition-colors" icon="solar:ambulance-linear"></iconify-icon>
<h4 className="text-primary font-heading font-bold text-lg mb-4">Emergency Help Available 24/7</h4>
<a className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-secondary group-hover:text-white group-hover:border-secondary transition-all" href="#">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white p-8 group hover:bg-gray-50 transition-colors">
<iconify-icon className="text-5xl text-gray-300 group-hover:text-secondary mb-4 transition-colors" icon="solar:test-tube-linear"></iconify-icon>
<h4 className="text-primary font-heading font-bold text-lg mb-4">Medical Research Professionals</h4>
<a className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-secondary group-hover:text-white group-hover:border-secondary transition-all" href="#">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white p-8 group hover:bg-gray-50 transition-colors">
<iconify-icon className="text-5xl text-gray-300 group-hover:text-secondary mb-4 transition-colors" icon="solar:user-circle-linear"></iconify-icon>
<h4 className="text-primary font-heading font-bold text-lg mb-4">Only Qualified Doctors</h4>
<a className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-secondary group-hover:text-white group-hover:border-secondary transition-all" href="#">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white p-8 group hover:bg-gray-50 transition-colors">
<iconify-icon className="text-5xl text-gray-300 group-hover:text-secondary mb-4 transition-colors" icon="solar:hospital-linear"></iconify-icon>
<h4 className="text-primary font-heading font-bold text-lg mb-4">Cutting Edge Facility</h4>
<a className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-secondary group-hover:text-white group-hover:border-secondary transition-all" href="#">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white p-8 group hover:bg-gray-50 transition-colors">
<iconify-icon className="text-5xl text-gray-300 group-hover:text-secondary mb-4 transition-colors" icon="solar:bill-list-linear"></iconify-icon>
<h4 className="text-primary font-heading font-bold text-lg mb-4">Affordable Prices For All</h4>
<a className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-secondary group-hover:text-white group-hover:border-secondary transition-all" href="#">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white p-8 group hover:bg-gray-50 transition-colors">
<iconify-icon className="text-5xl text-gray-300 group-hover:text-secondary mb-4 transition-colors" icon="solar:adhesive-plaster-linear"></iconify-icon>
<h4 className="text-primary font-heading font-bold text-lg mb-4">Quality Care For Every Patient</h4>
<a className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-secondary group-hover:text-white group-hover:border-secondary transition-all" href="#">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
<div className="text-center mt-12 max-w-2xl mx-auto">
<p className="text-primary font-medium">
                    Serve the community by improving the quality of life through better health. We have put protocols to protect our patients.
                    <a className="text-secondary hover:text-primary transition-colors inline-flex items-center ml-1" href="#">Contact Us <iconify-icon className="ml-1 text-sm" icon="solar:arrow-right-linear"></iconify-icon></a>
</p>
</div>
</div>
</section>

<section className="py-24 bg-primary relative overflow-hidden">

<div className="z-0 absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="container mx-auto px-4 relative z-10">
<div className="mb-16">
<h2 className="text-secondary font-heading font-semibold text-lg mb-2">Caring For The Health Of You And Your Family.</h2>
<div className="flex flex-col lg:flex-row gap-12">
<div className="lg:w-1/2">
<h3 className="text-white font-heading font-bold text-3xl md:text-4xl leading-tight tracking-tight">We Provide All Aspects Of Medical Practice For Your Whole Family!</h3>
</div>
<div className="lg:w-1/2">
<p className="font-medium text-gray-50 mb-8">We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals.</p>
<ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300 text-sm font-medium">
<li className="flex items-center"><span className="w-2 h-2 rounded-full bg-secondary mr-2"></span> Fractures and dislocations</li>
<li className="flex items-center"><span className="w-2 h-2 rounded-full bg-secondary mr-2"></span> Health Assessments</li>
<li className="flex items-center"><span className="w-2 h-2 rounded-full bg-secondary mr-2"></span> Desensitisation injections</li>
</ul>
</div>
</div>
</div>

<div className="flex overflow-x-auto gap-6 pb-8 snap-x no-scrollbar">

<div className="min-w-[280px] md:min-w-[300px] snap-center">
<div className="relative pl-4 border-l-2 border-gray-700 hover:border-secondary transition-colors duration-300">
<span className="absolute -left-[9px] top-0 text-gray-600 font-heading font-bold text-xl bg-primary px-1">01</span>
<div className="mb-4 mt-8 text-secondary text-4xl">
<iconify-icon icon="solar:clipboard-check-linear"></iconify-icon>
</div>
<h4 className="text-white font-heading font-bold text-lg mb-3">Fill In Our Medical Application</h4>
<p className="text-gray-400 text-sm leading-relaxed mb-4">Medcity offers low-cost health coverage for adults with limited income, you can enroll.</p>
<a className="text-secondary font-semibold text-sm hover:text-white transition-colors flex items-center" href="#">
                            Doctors' Timetable <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="min-w-[280px] md:min-w-[300px] snap-center">
<div className="relative pl-4 border-l-2 border-gray-700 hover:border-secondary transition-colors duration-300">
<span className="absolute -left-[9px] top-0 text-gray-600 font-heading font-bold text-xl bg-primary px-1">02</span>
<div className="mb-4 mt-8 text-secondary text-4xl">
<iconify-icon className="" icon="solar:dna-linear"></iconify-icon>
</div>
<h4 className="text-white font-heading font-bold text-lg mb-3">Review Family Medical History</h4>
<p className="text-gray-400 text-sm leading-relaxed mb-4">Regular health exams can help find all the problems, also can find it early chances.</p>
<a className="text-secondary font-semibold text-sm hover:text-white transition-colors flex items-center" href="#">
                            Start A Check Up <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="min-w-[280px] md:min-w-[300px] snap-center">
<div className="relative pl-4 border-l-2 border-gray-700 hover:border-secondary transition-colors duration-300">
<span className="absolute -left-[9px] top-0 text-gray-600 font-heading font-bold text-xl bg-primary px-1">03</span>
<div className="mb-4 mt-8 text-secondary text-4xl">
<iconify-icon className="" icon="solar:jar-of-pills-linear"></iconify-icon>
</div>
<h4 className="text-white font-heading font-bold text-lg mb-3">Choose Our Care Programs</h4>
<p className="text-gray-400 text-sm leading-relaxed mb-4">We have protocols to protect our patients while continuing to provide necessary care.</p>
<a className="text-secondary font-semibold text-sm hover:text-white transition-colors flex items-center" href="#">
                            Explore Programs <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="min-w-[280px] md:min-w-[300px] snap-center">
<div className="relative pl-4 border-l-2 border-gray-700 hover:border-secondary transition-colors duration-300">
<span className="absolute -left-[9px] top-0 text-gray-600 font-heading font-bold text-xl bg-primary px-1">04</span>
<div className="mb-4 mt-8 text-secondary text-4xl">
<iconify-icon icon="solar:stethoscope-linear"></iconify-icon>
</div>
<h4 className="text-white font-heading font-bold text-lg mb-3">Introduce Qualified Doctors</h4>
<p className="text-gray-400 text-sm leading-relaxed mb-4">Our administration and support staff have exceptional skills and trained to assist you.</p>
<a className="text-secondary font-semibold text-sm hover:text-white transition-colors flex items-center" href="#">
                            Meet Our Doctors <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<div className="bg-secondary py-10">
<div className="container mx-auto px-4">
<div className="flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-6">
<iconify-icon className="text-white text-6xl opacity-80" icon="solar:shield-warning-linear"></iconify-icon>
<div className="">
<h4 className="text-white font-heading font-bold text-xl mb-1">True Healthcare For Your Family!</h4>
<p className="text-white/90 text-sm max-w-xl">Serve the community by improving the quality of life through better health. We have put protocols to protect our patients.</p>
</div>
</div>
<a className="border-2 border-white text-white hover:bg-white hover:text-secondary px-8 py-3 rounded-full font-heading font-semibold transition-colors flex-shrink-0 flex items-center gap-2" href="#">
                    Healthcare Programs <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>

<section className="bg-white opacity-20 pt-24 pb-24">
<div className="container mx-auto px-4">
<div className="text-center max-w-2xl mx-auto mb-16">
<h3 className="text-primary font-heading font-bold text-3xl md:text-4xl mb-4 tracking-tight">Meet Our Doctors</h3>
<p className="text-body">Our administration and support staff all have exceptional people skills and trained to assist you with all medical enquiries.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group">
<div className="rounded-lg overflow-hidden mb-6 relative">
<img className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<div className="px-2">
<h5 className="text-primary font-heading font-bold text-xl"><a className="hover:text-secondary" href="#">Mike Dooley</a></h5>
<p className="text-secondary font-medium text-sm mb-3">Cardiology Specialist</p>
<p className="text-body text-sm mb-4 line-clamp-3">Muldoone obtained his undergraduate degree in Biomedical Engineering at Tulane University prior to attending St George's University.</p>
<div className="flex items-center justify-between border-t border-gray-100 pt-4">
<a className="text-secondary font-semibold text-sm hover:underline flex items-center" href="#">Read More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></a>
<div className="flex gap-3 text-gray-400">
<a className="hover:text-secondary" href="#"><iconify-icon icon="brandico:facebook"></iconify-icon></a>
<a className="hover:text-secondary" href="#"><iconify-icon icon="brandico:twitter-bird"></iconify-icon></a>
</div>
</div>
</div>
</div>

<div className="group">
<div className="rounded-lg overflow-hidden mb-6 relative">
<img className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<div className="px-2">
<h5 className="text-primary font-heading font-bold text-xl"><a className="hover:text-secondary" href="#">Dermatologists</a></h5>
<p className="text-secondary font-medium text-sm mb-3">Skin Specialist</p>
<p className="text-body text-sm mb-4 line-clamp-3">Brian specializes in treating skin, hair, nail, and mucous membrane. He also address cosmetic issues.</p>
<div className="flex items-center justify-between border-t border-gray-100 pt-4">
<a className="text-secondary font-semibold text-sm hover:underline flex items-center" href="#">Read More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></a>
<div className="flex gap-3 text-gray-400">
<a className="hover:text-secondary" href="#"><iconify-icon icon="brandico:facebook"></iconify-icon></a>
<a className="hover:text-secondary" href="#"><iconify-icon icon="brandico:twitter-bird"></iconify-icon></a>
</div>
</div>
</div>
</div>

<div className="group">
<div className="rounded-lg overflow-hidden mb-6 relative">
<img className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<div className="px-2">
<h5 className="text-primary font-heading font-bold text-xl"><a className="hover:text-secondary" href="#">Maria Andaloro</a></h5>
<p className="text-secondary font-medium text-sm mb-3">Pediatrician</p>
<p className="text-body text-sm mb-4 line-clamp-3">Andaloro graduated from medical school and completed 3 years residency program in pediatrics.</p>
<div className="flex items-center justify-between border-t border-gray-100 pt-4">
<a className="text-secondary font-semibold text-sm hover:underline flex items-center" href="#">Read More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></a>
<div className="flex gap-3 text-gray-400">
<a className="hover:text-secondary" href="#"><iconify-icon icon="brandico:facebook"></iconify-icon></a>
<a className="hover:text-secondary" href="#"><iconify-icon icon="brandico:twitter-bird"></iconify-icon></a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 relative bg-gradient-to-r from-blue-900 via-primary to-teal-800" id="appointment">
<div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&amp;w=2128&amp;auto=format&amp;fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
<div className="container mx-auto px-4 relative z-10">
<div className="flex flex-col lg:flex-row gap-16">
<div className="lg:w-5/12 text-white">
<h3 className="font-heading font-bold text-3xl md:text-4xl mb-6 leading-tight">Committed To Build A Positive, Safe, Patient Focused Culture.</h3>
<p className="text-gray-200 mb-8 font-light">Today the hospital is recognised as a world renowned institution, not only providing outstanding care and treatment, our goal is to deliver quality care in a respectful &amp; compassionate manner.</p>
<div className="flex items-center gap-6 mb-10">
<a className="bg-white text-primary hover:bg-secondary hover:text-white px-7 py-3 rounded-full font-heading font-semibold transition-colors flex items-center gap-2" href="#">
                            Find A Doctor <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="border border-white text-white hover:bg-white hover:text-primary px-7 py-3 rounded-full font-heading font-semibold transition-colors" href="#">
                            Contact Us
                        </a>
</div>
<ul className="space-y-3">
<li className="flex items-center text-sm"><span className="w-2 h-2 rounded-full bg-secondary mr-3"></span> Fractures and dislocations</li>
<li className="flex items-center text-sm"><span className="w-2 h-2 rounded-full bg-secondary mr-3"></span> Health Assessments</li>
<li className="flex items-center text-sm"><span className="w-2 h-2 rounded-full bg-secondary mr-3"></span> Desensitisation injections</li>
</ul>
</div>
<div className="lg:w-7/12">
<div className="bg-white rounded-xl p-8 shadow-2xl">
<div className="mb-6">
<h4 className="text-primary font-heading font-bold text-2xl">Book An Appointment</h4>
<p className="text-body text-sm mt-2">Please feel welcome to contact our friendly reception staff with any general or medical enquiry.</p>
</div>
<form className="space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="relative">
<iconify-icon className="absolute left-4 top-3.5 text-gray-400" icon="solar:widget-linear"></iconify-icon>
<select className="w-full bg-gray-50 border border-gray-200 text-gray-700 rounded h-12 pl-10 pr-4 focus:outline-none focus:border-secondary appearance-none">
<option value="0">Choose Clinic</option>
<option value="1">Pathology Clinic</option>
<option value="2">Dentist Clinic</option>
</select>
</div>
<div className="relative">
<iconify-icon className="absolute left-4 top-3.5 text-gray-400" icon="solar:user-linear"></iconify-icon>
<select className="w-full bg-gray-50 border border-gray-200 text-gray-700 rounded h-12 pl-10 pr-4 focus:outline-none focus:border-secondary appearance-none">
<option value="0">Choose Doctor</option>
<option value="1">Ahmed Abdallah</option>
<option value="2">Mahmoud Begha</option>
</select>
</div>
<div className="relative">
<iconify-icon className="absolute left-4 top-3.5 text-gray-400" icon="solar:user-id-linear"></iconify-icon>
<input className="w-full bg-gray-50 border border-gray-200 text-gray-700 rounded h-12 pl-10 pr-4 focus:outline-none focus:border-secondary" placeholder="Name" type="text"/>
</div>
<div className="relative">
<iconify-icon className="absolute left-4 top-3.5 text-gray-400" icon="solar:letter-linear"></iconify-icon>
<input className="w-full bg-gray-50 border border-gray-200 text-gray-700 rounded h-12 pl-10 pr-4 focus:outline-none focus:border-secondary" placeholder="Email" type="email"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="relative">
<iconify-icon className="absolute left-4 top-3.5 text-gray-400" icon="solar:phone-linear"></iconify-icon>
<input className="w-full bg-gray-50 border border-gray-200 text-gray-700 rounded h-12 pl-10 pr-4 focus:outline-none focus:border-secondary" placeholder="Phone" type="text"/>
</div>
<div className="relative">
<iconify-icon className="absolute left-4 top-3.5 text-gray-400" icon="solar:calendar-linear"></iconify-icon>
<input className="w-full bg-gray-50 border border-gray-200 text-gray-700 rounded h-12 pl-10 pr-4 focus:outline-none focus:border-secondary" type="date"/>
</div>
<div className="relative">
<iconify-icon className="absolute left-4 top-3.5 text-gray-400" icon="solar:clock-circle-linear"></iconify-icon>
<input className="w-full bg-gray-50 border border-gray-200 text-gray-700 rounded h-12 pl-10 pr-4 focus:outline-none focus:border-secondary" type="time"/>
</div>
</div>
<button className="w-full bg-secondary hover:bg-primary text-white font-heading font-bold py-4 rounded transition-colors flex justify-center items-center gap-2 mt-4" type="submit">
                                Book Appointment <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="container mx-auto px-4">
<div className="flex flex-col lg:flex-row gap-12">
<div className="lg:w-5/12">
<h3 className="text-primary font-heading font-bold text-3xl md:text-4xl mb-4">Inspiring Stories!</h3>
<div className="w-16 h-1 bg-secondary rounded"></div>
</div>
<div className="lg:w-7/12">
<div className="mb-8">
<h3 className="text-primary font-heading font-medium text-xl leading-relaxed italic">
                            “Their doctors include highly qualified practitioners who come from a range of backgrounds and bring with them a diversity of skills and special interests. They also have registered nurses on staff who are available to triage any urgent matters.”
                        </h3>
</div>
<div className="flex gap-6">
<div className="flex items-center gap-3 cursor-pointer opacity-100 transition-opacity">
<img className="w-12 h-12 rounded-full object-cover" src="https://randomuser.me/api/portraits/men/32.jpg"/>
<div>
<h4 className="font-bold text-primary text-sm">Sami Wade</h4>
<p className="text-xs text-secondary">7oroof Inc</p>
</div>
</div>
<div className="flex items-center gap-3 cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
<img className="w-12 h-12 rounded-full object-cover" src="https://randomuser.me/api/portraits/women/44.jpg"/>
<div className="">
<h4 className="font-bold text-primary text-sm">Sonia Blake</h4>
<p className="text-xs text-secondary">Web Inc</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="pb-20 pt-0">
<div className="container mr-auto ml-auto pr-4 pl-4">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
<div className="rounded-lg overflow-hidden h-40 group relative">
<img alt="Doctor Portrait" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="rounded-lg overflow-hidden h-40 group relative">
<img alt="Female Doctor" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="rounded-lg overflow-hidden h-40 group relative">
<img alt="Medical Professional" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="rounded-lg overflow-hidden h-40 group relative">
<img alt="Doctor Consultation" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="rounded-lg overflow-hidden h-40 hidden md:block group relative">
<img alt="Senior Doctor" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="rounded-lg overflow-hidden h-40 hidden lg:block group relative">
<img alt="Specialist" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<footer className="bg-primary pt-20 pb-8 text-white">
<div className="container mx-auto px-4 border-b border-gray-700 pb-16">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

<div>
<a className="text-2xl font-heading font-bold text-white tracking-tighter flex items-center gap-1 mb-6" href="#">
                        MED<span className="text-secondary">CITY</span>
</a>
<p className="text-gray-400 text-sm leading-relaxed mb-6">Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you.</p>
<a className="text-secondary font-bold text-sm hover:text-white transition-colors flex items-center" href="#">
                        Make Appointment <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="">
<h6 className="text-lg font-bold font-heading mb-6">Departments</h6>
<ul className="space-y-3 text-gray-400 text-sm">
<li className=""><a className="hover:text-secondary transition-colors" href="#">Neurology Clinic</a></li>
<li className=""><a className="hover:text-secondary transition-colors" href="#">Cardiology Clinic</a></li>
<li className=""><a className="hover:text-secondary transition-colors" href="#">Pathology Clinic</a></li>
</ul>
</div>

<div className="">
<h6 className="text-lg font-bold font-heading mb-6">Links</h6>
<ul className="space-y-3 text-gray-400 text-sm">
<li className=""><a className="hover:text-secondary transition-colors" href="#">About Us</a></li>
<li className=""><a className="hover:text-secondary transition-colors" href="#">Our Clinic</a></li>
<li className=""><a className="hover:text-secondary transition-colors" href="#">Our Doctors</a></li>
</ul>
</div>

<div>
<h6 className="text-lg font-bold font-heading mb-6">Quick Contacts</h6>
<p className="text-gray-400 text-sm mb-4">If you have any questions or need help, feel free to contact with our team.</p>
<a className="text-xl font-bold text-secondary flex items-center gap-2 mb-4 hover:text-white transition-colors" href="tel:01061245741">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon> 01061245741
                    </a>
<p className="text-gray-300 text-sm mb-6">2307 Beverley Rd Brooklyn, New York 11226 United States.</p>
<div className="flex items-center justify-between">
<a className="bg-secondary hover:bg-white hover:text-primary text-white text-xs font-bold px-4 py-3 rounded transition-colors flex items-center gap-2" href="#">
                             Get Directions <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
<div className="flex gap-3">
<a className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-secondary transition-colors" href="#"><iconify-icon className="text-xs" icon="brandico:facebook"></iconify-icon></a>
<a className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-secondary transition-colors" href="#"><iconify-icon className="text-xs" icon="brandico:twitter-bird"></iconify-icon></a>
</div>
</div>
</div>
</div>
</div>
<div className="container mx-auto px-4 pt-8">
<div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
<div>
                    © 2020 DataSoft, All Rights Reserved. With Love by <a className="text-secondary hover:underline" href="#">7oroof.com</a>
</div>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-secondary" href="#">Terms &amp; Conditions</a>
<a className="hover:text-secondary" href="#">Privacy Policy</a>
<a className="hover:text-secondary" href="#">Cookies</a>
</div>
</div>
</div>
</footer>

<button className="fixed bottom-8 right-8 bg-secondary hover:bg-primary text-white w-10 h-10 rounded shadow-lg flex items-center justify-center transition-all duration-300 z-50" id="scrollTopBtn">
<iconify-icon className="text-xl" icon="solar:arrow-up-linear"></iconify-icon>
</button>


    </>
  );
}
