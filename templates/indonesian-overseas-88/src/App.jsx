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
colors: {
primary: '#0086CE', // Trust & Professionalism (Matches Logo Blue)
accent: '#E5B022',  // Success & Opportunity (Matches Logo Yellow)
dark: '#333333',    // Body Text
light: '#F9FAFB',   // Light Background
},
fontFamily: {
sans: ['Open Sans', 'sans-serif'],
heading: ['Montserrat', 'sans-serif'],
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
}
}
}
}



        function navigateTo(pageId) {
            // Hide all pages
            const pages = document.querySelectorAll('.page-section');
            pages.forEach(page => {
                page.style.display = 'none';
            });

            // Show selected page
            const selectedPage = document.getElementById(pageId);
            if (selectedPage) {
                selectedPage.style.display = 'block';
                selectedPage.style.animation = 'fadeIn 0.4s ease-in-out';
            }

            // Scroll to top
            window.scrollTo(0, 0);

            // Close mobile menu if open
            const mobileMenu = document.getElementById('mobile-menu');
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }

        function toggleMobileMenu() {
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenu.classList.toggle('hidden');
        }

        // Initialize with home page
        document.addEventListener('DOMContentLoaded', () => {
            navigateTo('home');
        });
    
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
      

<nav className="fixed w-full z-50 glass-nav">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between h-20">

<div className="flex-shrink-0 flex items-center cursor-pointer" onclick="navigateTo('home')">
<div className="flex flex-col justify-center">
<h1 className="font-heading font-black text-2xl sm:text-3xl tracking-tighter text-primary leading-none">SGK</h1>
<span className="font-heading font-bold text-[10px] sm:text-xs tracking-widest text-gray-600 uppercase leading-none mt-1">PT Solusi Global Karier</span>
</div>
</div>

<div className="hidden md:flex md:items-center md:space-x-8">
<button className="nav-link text-sm font-medium text-gray-600 hover:text-primary transition-colors" onclick="navigateTo('home')">Home</button>
<button className="nav-link text-sm font-medium text-gray-600 hover:text-primary transition-colors" onclick="navigateTo('about')">About Us</button>
<button className="nav-link text-sm font-medium text-gray-600 hover:text-primary transition-colors" onclick="navigateTo('services')">Services</button>
<button className="nav-link text-sm font-medium text-gray-600 hover:text-primary transition-colors" onclick="navigateTo('jobs')">Job Openings</button>
<button className="nav-link text-sm font-medium text-gray-600 hover:text-primary transition-colors" onclick="navigateTo('employers')">For Employers</button>
<button className="ml-4 px-5 py-2.5 rounded-full bg-primary text-white text-sm font-medium hover:bg-opacity-90 transition-all shadow-sm" onclick="navigateTo('contact')">Contact Us</button>
</div>

<div className="flex items-center md:hidden">
<button className="text-gray-600 hover:text-primary focus:outline-none" onclick="toggleMobileMenu()">
<span className="iconify" data-icon="lucide:menu" data-width="28"></span>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden bg-white border-t border-gray-100" id="mobile-menu">
<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
<button className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md" onclick="navigateTo('home')">Home</button>
<button className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md" onclick="navigateTo('about')">About Us</button>
<button className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md" onclick="navigateTo('services')">Services</button>
<button className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md" onclick="navigateTo('jobs')">Job Openings</button>
<button className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md" onclick="navigateTo('employers')">For Employers</button>
<button className="block w-full text-left px-3 py-2 text-base font-medium text-primary hover:bg-blue-50 rounded-md" onclick="navigateTo('contact')">Contact Us</button>
</div>
</div>
</nav>

<main className="flex-grow pt-20">

<div className="page-section" id="home">

<div className="relative w-full h-[600px] md:h-[700px] overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 z-0">
<img alt="Indonesian professionals collaborating" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2071&amp;q=80"/>
<div className="absolute inset-0 hero-gradient opacity-90"></div>
</div>
<div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
<div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-1.5 mb-6 border border-white/20">
<span className="text-accent text-xs font-semibold tracking-wider uppercase">PT Solusi Global Karier</span>
</div>
<h1 className="text-4xl md:text-6xl font-heading font-semibold text-white tracking-tight mb-6 leading-tight">
                        Transforming Indonesian Potential into <span className="text-accent">Global Impact</span>
</h1>
<p className="text-lg md:text-xl text-gray-100 mb-10 font-light max-w-2xl mx-auto">
                        We are the bridge connecting Indonesia's skilled workforce with global career opportunities, providing comprehensive training and support.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3.5 bg-accent text-white font-semibold rounded-lg hover:bg-yellow-500 transition-all shadow-lg text-sm flex items-center justify-center gap-2" onclick="navigateTo('jobs')">
                            Find Your Global Career
                            <span className="iconify" data-icon="lucide:arrow-right"></span>
</button>
<button className="w-full sm:w-auto px-8 py-3.5 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-all text-sm" onclick="navigateTo('employers')">
                            Partner With Us
                        </button>
</div>
</div>
</div>

<div className="border-b border-gray-100 bg-white">
<div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
<p className="text-center text-xs font-medium text-gray-400 uppercase tracking-widest mb-6">Connecting Talent To</p>
<div className="flex justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2"><span className="iconify text-3xl" data-icon="emojione:flag-for-japan"></span> <span className="font-heading font-semibold text-gray-800">Japan</span></div>
<div className="flex items-center gap-2"><span className="iconify text-3xl" data-icon="emojione:flag-for-saudi-arabia"></span> <span className="font-heading font-semibold text-gray-800">Saudi Arabia</span></div>
<div className="flex items-center gap-2"><span className="iconify text-3xl" data-icon="emojione:flag-for-singapore"></span> <span className="font-heading font-semibold text-gray-800">Singapore</span></div>
<div className="flex items-center gap-2"><span className="iconify text-3xl" data-icon="emojione:flag-for-australia"></span> <span className="font-heading font-semibold text-gray-800">Australia</span></div>
</div>
</div>
</div>

<div className="py-20 bg-light">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-heading font-semibold text-gray-900 tracking-tight mb-4">Comprehensive Solutions</h2>
<p className="text-gray-600 max-w-2xl mx-auto">End-to-end support for both candidates and employers in the international recruitment landscape.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
<span className="iconify text-primary text-2xl" data-icon="lucide:users"></span>
</div>
<h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">Talent Recruitment</h3>
<p className="text-gray-500 text-sm mb-6 leading-relaxed">Rigorous sourcing and vetting to find the perfect match for international requirements.</p>
<button className="text-primary text-sm font-medium hover:text-blue-700 inline-flex items-center gap-1" onclick="navigateTo('services')">
                                Learn More <span className="iconify" data-icon="lucide:chevron-right"></span>
</button>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
<span className="iconify text-primary text-2xl" data-icon="lucide:graduation-cap"></span>
</div>
<h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">Skills Training</h3>
<p className="text-gray-500 text-sm mb-6 leading-relaxed">Language, technical, and cultural training to meet global standards before departure.</p>
<button className="text-primary text-sm font-medium hover:text-blue-700 inline-flex items-center gap-1" onclick="navigateTo('services')">
                                Learn More <span className="iconify" data-icon="lucide:chevron-right"></span>
</button>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
<span className="iconify text-primary text-2xl" data-icon="lucide:plane"></span>
</div>
<h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">Global Placement</h3>
<p className="text-gray-500 text-sm mb-6 leading-relaxed">Seamless handling of visas, documentation, and travel for a stress-free transition.</p>
<button className="text-primary text-sm font-medium hover:text-blue-700 inline-flex items-center gap-1" onclick="navigateTo('services')">
                                Learn More <span className="iconify" data-icon="lucide:chevron-right"></span>
</button>
</div>
</div>
</div>
</div>

<div className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<span className="text-primary text-xs font-semibold tracking-widest uppercase mb-2 block">For Job Seekers</span>
<h2 className="text-3xl font-heading font-semibold text-gray-900 tracking-tight">Your Journey to a Global Career</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 -z-10"></div>

<div className="text-center">
<div className="w-24 h-24 mx-auto bg-white border-2 border-primary rounded-full flex items-center justify-center mb-6 shadow-sm">
<span className="text-3xl font-bold text-primary">1</span>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Apply</h3>
<p className="text-sm text-gray-500">Browse openings and submit your profile.</p>
</div>

<div className="text-center">
<div className="w-24 h-24 mx-auto bg-white border-2 border-gray-200 rounded-full flex items-center justify-center mb-6 shadow-sm">
<span className="text-3xl font-bold text-gray-400">2</span>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Assessment</h3>
<p className="text-sm text-gray-500">Skill verification and interviews.</p>
</div>

<div className="text-center">
<div className="w-24 h-24 mx-auto bg-white border-2 border-gray-200 rounded-full flex items-center justify-center mb-6 shadow-sm">
<span className="text-3xl font-bold text-gray-400">3</span>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Training</h3>
<p className="text-sm text-gray-500">Upskill for your specific role abroad.</p>
</div>

<div className="text-center">
<div className="w-24 h-24 mx-auto bg-white border-2 border-gray-200 rounded-full flex items-center justify-center mb-6 shadow-sm">
<span className="text-3xl font-bold text-gray-400">4</span>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Placement</h3>
<p className="text-sm text-gray-500">Visa processing and departure.</p>
</div>
</div>
</div>
</div>

<div className="py-20 bg-light border-t border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-heading font-semibold text-gray-900 tracking-tight mb-12 text-center">Success Stories</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="bg-white p-8 rounded-xl shadow-sm">
<div className="flex text-accent mb-4">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
</div>
<p className="text-gray-600 text-sm mb-6 italic">"PT Solusi Global Karier guided me from zero to hero. The language training was exceptional, and I'm now happily working in Osaka."</p>
<div className="flex items-center">
<div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold text-xs">BP</div>
<div className="ml-3">
<p className="text-sm font-semibold text-gray-900">Budi P.</p>
<p className="text-xs text-gray-500">Engineer, Japan</p>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-xl shadow-sm">
<div className="flex text-accent mb-4">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
</div>
<p className="text-gray-600 text-sm mb-6 italic">"Transparent process and supportive team. They helped me secure a nursing position in Saudi Arabia quickly."</p>
<div className="flex items-center">
<div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold text-xs">SR</div>
<div className="ml-3">
<p className="text-sm font-semibold text-gray-900">Siti R.</p>
<p className="text-xs text-gray-500">Nurse, Saudi Arabia</p>
</div>
</div>
</div>
<div className="hidden lg:block bg-white p-8 rounded-xl shadow-sm">
<div className="flex text-accent mb-4">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
</div>
<p className="text-gray-600 text-sm mb-6 italic">"Working in hospitality in Singapore has changed my life. Thank you for the professional guidance."</p>
<div className="flex items-center">
<div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold text-xs">AH</div>
<div className="ml-3">
<p className="text-sm font-semibold text-gray-900">Agus H.</p>
<p className="text-xs text-gray-500">Hospitality, Singapore</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-primary py-16">
<div className="max-w-4xl mx-auto px-4 text-center">
<h2 className="text-3xl font-heading font-semibold text-white tracking-tight mb-6">Ready to Transform Your Career?</h2>
<p className="text-blue-100 mb-8 max-w-2xl mx-auto">Join thousands of Indonesians who have found success abroad through our network.</p>
<button className="px-8 py-3.5 bg-white text-primary font-semibold rounded-lg hover:bg-gray-50 transition-all shadow-lg text-sm" onclick="navigateTo('jobs')">
                        Explore Opportunities
                    </button>
</div>
</div>
</div>

<div className="page-section" id="about">
<div className="relative bg-dark py-24">
<div className="absolute inset-0 overflow-hidden">
<img alt="Team meeting" className="w-full h-full object-cover opacity-20" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2084&amp;q=80"/>
</div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h1 className="text-4xl font-heading font-semibold text-white tracking-tight mb-4">Our Mission: Your Global Success</h1>
<p className="text-lg text-gray-300 max-w-3xl mx-auto">We are dedicated to elevating the Indonesian workforce by connecting talent with dignified, high-value opportunities worldwide.</p>
</div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
<div>
<h2 className="text-2xl font-heading font-semibold text-gray-900 mb-6">Who We Are</h2>
<p className="text-gray-600 mb-4 leading-relaxed">PT Solusi Global Karier is a licensed and accredited international recruitment agency based in Jakarta. We specialize in identifying potential, nurturing talent through rigorous training, and placing professionals in environments where they can thrive.</p>
<p className="text-gray-600 leading-relaxed">Our vision is to be the most trusted partner for Indonesian talent seeking overseas employment and for global companies seeking reliable workforce solutions.</p>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-blue-50 p-6 rounded-xl">
<span className="block text-3xl font-bold text-primary mb-2">5+</span>
<span className="text-sm text-gray-600">Years Experience</span>
</div>
<div className="bg-yellow-50 p-6 rounded-xl">
<span className="block text-3xl font-bold text-accent mb-2">1k+</span>
<span className="text-sm text-gray-600">Candidates Placed</span>
</div>
<div className="bg-gray-50 p-6 rounded-xl col-span-2">
<span className="block text-3xl font-bold text-gray-800 mb-2">10+</span>
<span className="text-sm text-gray-600">Partner Countries</span>
</div>
</div>
</div>
<h2 className="text-2xl font-heading font-semibold text-gray-900 mb-10 text-center">Why Choose Us?</h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
<div className="text-center p-6 border border-gray-100 rounded-xl hover:shadow-lg transition-all">
<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
<span className="iconify" data-icon="lucide:shield-check"></span>
</div>
<h3 className="font-semibold text-gray-900 mb-2">Expert Guidance</h3>
<p className="text-xs text-gray-500">Legal and career advice from certified professionals.</p>
</div>
<div className="text-center p-6 border border-gray-100 rounded-xl hover:shadow-lg transition-all">
<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
<span className="iconify" data-icon="lucide:book-open"></span>
</div>
<h3 className="font-semibold text-gray-900 mb-2">Comprehensive Training</h3>
<p className="text-xs text-gray-500">Skill upgrading to match international standards.</p>
</div>
<div className="text-center p-6 border border-gray-100 rounded-xl hover:shadow-lg transition-all">
<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
<span className="iconify" data-icon="lucide:globe-2"></span>
</div>
<h3 className="font-semibold text-gray-900 mb-2">Global Network</h3>
<p className="text-xs text-gray-500">Direct partnerships with reputable overseas employers.</p>
</div>
<div className="text-center p-6 border border-gray-100 rounded-xl hover:shadow-lg transition-all">
<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
<span className="iconify" data-icon="lucide:heart-handshake"></span>
</div>
<h3 className="font-semibold text-gray-900 mb-2">End-to-End Support</h3>
<p className="text-xs text-gray-500">From application to landing and beyond.</p>
</div>
</div>
</div>
</div>

<div className="page-section" id="services">
<div className="bg-gray-50 py-16 border-b border-gray-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h1 className="text-3xl md:text-4xl font-heading font-semibold text-gray-900 tracking-tight">Our Comprehensive Solutions</h1>
<p className="mt-4 text-gray-600 max-w-2xl mx-auto">We provide a full spectrum of services to ensure the success of Indonesian migrant workers and satisfaction of global employers.</p>
</div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">

<div className="flex flex-col md:flex-row gap-12 items-center">
<div className="md:w-1/2">
<img alt="Recruitment Interview" className="rounded-2xl shadow-lg w-full object-cover h-80" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1469&amp;q=80"/>
</div>
<div className="md:w-1/2">
<div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
<span className="iconify" data-icon="lucide:search" data-width="24"></span>
</div>
<h2 className="text-2xl font-heading font-semibold text-gray-900 mb-4">Talent Recruitment</h2>
<p className="text-gray-600 mb-6 leading-relaxed">Our recruitment process is designed to identify the best talent across Indonesia. We conduct thorough background checks, initial skill assessments, and psychological screenings to ensure candidates meet the specific requirements of international employers.</p>
<ul className="space-y-3">
<li className="flex items-center text-sm text-gray-700"><span className="iconify text-green-500 mr-2" data-icon="lucide:check-circle-2"></span> Nationwide sourcing network</li>
<li className="flex items-center text-sm text-gray-700"><span className="iconify text-green-500 mr-2" data-icon="lucide:check-circle-2"></span> Rigorous pre-screening</li>
<li className="flex items-center text-sm text-gray-700"><span className="iconify text-green-500 mr-2" data-icon="lucide:check-circle-2"></span> Skill matching technology</li>
</ul>
</div>
</div>

<div className="flex flex-col md:flex-row-reverse gap-12 items-center">
<div className="md:w-1/2">
<img alt="Training Session" className="rounded-2xl shadow-lg w-full object-cover h-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="md:w-1/2">
<div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
<span className="iconify" data-icon="lucide:book-open-check" data-width="24"></span>
</div>
<h2 className="text-2xl font-heading font-semibold text-gray-900 mb-4">Workforce Training</h2>
<p className="text-gray-600 mb-6 leading-relaxed">We don't just find talent; we shape it. Our training centers provide intensive courses in language proficiency (English, Japanese, Arabic, etc.), technical skills relevant to the job, and cultural orientation to minimize culture shock.</p>
<ul className="space-y-3">
<li className="flex items-center text-sm text-gray-700"><span className="iconify text-green-500 mr-2" data-icon="lucide:check-circle-2"></span> Language certification</li>
<li className="flex items-center text-sm text-gray-700"><span className="iconify text-green-500 mr-2" data-icon="lucide:check-circle-2"></span> Safety &amp; technical workshops</li>
<li className="flex items-center text-sm text-gray-700"><span className="iconify text-green-500 mr-2" data-icon="lucide:check-circle-2"></span> Cultural adaptation courses</li>
</ul>
</div>
</div>

<div className="flex flex-col md:flex-row gap-12 items-center">
<div className="md:w-1/2">
<img alt="International Travel" className="rounded-2xl shadow-lg w-full object-cover h-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="md:w-1/2">
<div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
<span className="iconify" data-icon="lucide:passport" data-width="24"></span>
</div>
<h2 className="text-2xl font-heading font-semibold text-gray-900 mb-4">International Placement</h2>
<p className="text-gray-600 mb-6 leading-relaxed">We handle the complex logistics of moving abroad. From visa applications and medical clearances to flight bookings and airport pickups, we ensure a smooth transition for every candidate.</p>
<ul className="space-y-3">
<li className="flex items-center text-sm text-gray-700"><span className="iconify text-green-500 mr-2" data-icon="lucide:check-circle-2"></span> Visa &amp; work permit processing</li>
<li className="flex items-center text-sm text-gray-700"><span className="iconify text-green-500 mr-2" data-icon="lucide:check-circle-2"></span> Medical check-up coordination</li>
<li className="flex items-center text-sm text-gray-700"><span className="iconify text-green-500 mr-2" data-icon="lucide:check-circle-2"></span> Pre-departure briefing</li>
</ul>
</div>
</div>
</div>
</div>

<div className="page-section" id="jobs">
<div className="bg-primary text-white py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h1 className="text-3xl md:text-4xl font-heading font-semibold tracking-tight">Current Global Opportunities</h1>
<p className="mt-4 text-blue-100">Find your next role in top international companies.</p>
</div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

<div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-10 -mt-20 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
<div>
<label className="block text-xs font-medium text-gray-700 mb-1">Keyword</label>
<input className="custom-input w-full rounded-md border-gray-300 py-2 px-3 text-sm" placeholder="Job title..." type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1">Country</label>
<div className="relative">
<select className="custom-input w-full rounded-md border-gray-300 py-2 px-3 text-sm appearance-none bg-white">
<option>All Countries</option>
<option>Japan</option>
<option>Saudi Arabia</option>
<option>Singapore</option>
</select>
<span className="absolute right-3 top-2.5 pointer-events-none text-gray-500"><span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span></span>
</div>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1">Industry</label>
<div className="relative">
<select className="custom-input w-full rounded-md border-gray-300 py-2 px-3 text-sm appearance-none bg-white">
<option>All Industries</option>
<option>Healthcare</option>
<option>Construction</option>
<option>Hospitality</option>
<option>Manufacturing</option>
</select>
<span className="absolute right-3 top-2.5 pointer-events-none text-gray-500"><span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span></span>
</div>
</div>
<div className="flex items-end">
<button className="w-full bg-primary text-white py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">Search Jobs</button>
</div>
</div>
</div>

<div className="space-y-4">

<div className="bg-white border border-gray-100 rounded-lg p-6 hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center">
<div>
<span className="inline-block px-2 py-1 bg-green-50 text-green-700 text-[10px] font-bold uppercase tracking-wider rounded-sm mb-2">New</span>
<h3 className="text-lg font-semibold text-gray-900">Registered Nurse</h3>
<p className="text-sm text-gray-500 mb-2">Confidential Medical Group • Riyadh, Saudi Arabia</p>
<div className="flex flex-wrap gap-2 mt-2">
<span className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded border border-gray-200">Healthcare</span>
<span className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded border border-gray-200">Full Time</span>
</div>
</div>
<div className="mt-4 md:mt-0">
<button className="px-4 py-2 bg-white border border-primary text-primary text-sm font-medium rounded hover:bg-primary hover:text-white transition-colors">View &amp; Apply</button>
</div>
</div>

<div className="bg-white border border-gray-100 rounded-lg p-6 hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center">
<div>
<h3 className="text-lg font-semibold text-gray-900">Construction Engineer (Civil)</h3>
<p className="text-sm text-gray-500 mb-2">Leading Construction Co. • Tokyo, Japan</p>
<div className="flex flex-wrap gap-2 mt-2">
<span className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded border border-gray-200">Engineering</span>
<span className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded border border-gray-200">Contract</span>
</div>
</div>
<div className="mt-4 md:mt-0">
<button className="px-4 py-2 bg-white border border-primary text-primary text-sm font-medium rounded hover:bg-primary hover:text-white transition-colors">View &amp; Apply</button>
</div>
</div>

<div className="bg-white border border-gray-100 rounded-lg p-6 hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center">
<div>
<h3 className="text-lg font-semibold text-gray-900">Hotel Housekeeping Staff</h3>
<p className="text-sm text-gray-500 mb-2">Luxury Resorts • Singapore</p>
<div className="flex flex-wrap gap-2 mt-2">
<span className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded border border-gray-200">Hospitality</span>
<span className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded border border-gray-200">Full Time</span>
</div>
</div>
<div className="mt-4 md:mt-0">
<button className="px-4 py-2 bg-white border border-primary text-primary text-sm font-medium rounded hover:bg-primary hover:text-white transition-colors">View &amp; Apply</button>
</div>
</div>
</div>
</div>
</div>

<div className="page-section" id="employers">
<div className="grid grid-cols-1 lg:grid-cols-2">
<div className="bg-dark py-20 px-8 sm:px-12 lg:px-20 flex flex-col justify-center">
<span className="text-accent font-semibold tracking-wider text-sm uppercase mb-4">Corporate Partnership</span>
<h1 className="text-4xl md:text-5xl font-heading font-semibold text-white tracking-tight mb-6">Hire Top Indonesian Talent</h1>
<p className="text-lg text-gray-300 mb-8 leading-relaxed">
                        Indonesian professionals are known for their hard work, adaptability, and technical proficiency. We simplify the recruitment process for international businesses, ensuring compliance and quality.
                    </p>
<div className="space-y-4">
<div className="flex items-start">
<span className="iconify text-accent mt-1 mr-3" data-icon="lucide:check" data-width="20"></span>
<div>
<h4 className="text-white font-medium">Pre-Vetted Candidates</h4>
<p className="text-sm text-gray-400">Strict screening to ensure skills match requirements.</p>
</div>
</div>
<div className="flex items-start">
<span className="iconify text-accent mt-1 mr-3" data-icon="lucide:check" data-width="20"></span>
<div>
<h4 className="text-white font-medium">Fast Turnaround</h4>
<p className="text-sm text-gray-400">Efficient processing to fill vacancies quickly.</p>
</div>
</div>
</div>
</div>
<div className="bg-white py-20 px-8 sm:px-12 lg:px-20">
<h2 className="text-2xl font-heading font-semibold text-gray-900 mb-6">Request a Consultation</h2>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-gray-700 mb-1">Company Name</label>
<input className="custom-input w-full rounded-md border-gray-300 py-2.5 px-3 text-sm bg-gray-50" placeholder="Your Company" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1">Country</label>
<input className="custom-input w-full rounded-md border-gray-300 py-2.5 px-3 text-sm bg-gray-50" placeholder="HQ Location" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1">Business Email</label>
<input className="custom-input w-full rounded-md border-gray-300 py-2.5 px-3 text-sm bg-gray-50" placeholder="hr@company.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1">Hiring Needs</label>
<textarea className="custom-input w-full rounded-md border-gray-300 py-2.5 px-3 text-sm bg-gray-50" placeholder="Describe the roles you are looking to fill..." rows="4"></textarea>
</div>
<button className="w-full bg-primary text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition-colors shadow-sm" type="button">
                            Submit Inquiry
                        </button>
</form>
</div>
</div>
<div className="py-16 bg-light text-center">
<div className="max-w-7xl mx-auto px-4">
<h2 className="text-2xl font-heading font-semibold text-gray-900 mb-10">Industries We Serve</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100 flex flex-col items-center">
<span className="iconify text-primary text-2xl mb-2" data-icon="lucide:hard-hat"></span>
<span className="text-sm font-medium text-gray-800">Construction</span>
</div>
<div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100 flex flex-col items-center">
<span className="iconify text-primary text-2xl mb-2" data-icon="lucide:stethoscope"></span>
<span className="text-sm font-medium text-gray-800">Healthcare</span>
</div>
<div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100 flex flex-col items-center">
<span className="iconify text-primary text-2xl mb-2" data-icon="lucide:utensils"></span>
<span className="text-sm font-medium text-gray-800">Hospitality</span>
</div>
<div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100 flex flex-col items-center">
<span className="iconify text-primary text-2xl mb-2" data-icon="lucide:factory"></span>
<span className="text-sm font-medium text-gray-800">Manufacturing</span>
</div>
</div>
</div>
</div>
</div>

<div className="page-section" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
<div className="text-center mb-16">
<h1 className="text-3xl font-heading font-semibold text-gray-900 tracking-tight">Get In Touch</h1>
<p className="mt-4 text-gray-600">Have questions about overseas recruitment or looking for a job? We're here to help.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
<div className="p-8 md:p-12">
<h2 className="text-xl font-semibold text-gray-900 mb-6">Send us a message</h2>
<form className="space-y-5">
<div className="grid grid-cols-2 gap-5">
<div>
<label className="block text-xs font-medium text-gray-700 mb-1">Name</label>
<input className="custom-input w-full rounded-md border-gray-200 bg-gray-50 py-2.5 px-3 text-sm" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1">Phone</label>
<input className="custom-input w-full rounded-md border-gray-200 bg-gray-50 py-2.5 px-3 text-sm" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1">Email Address</label>
<input className="custom-input w-full rounded-md border-gray-200 bg-gray-50 py-2.5 px-3 text-sm" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1">Subject</label>
<input className="custom-input w-full rounded-md border-gray-200 bg-gray-50 py-2.5 px-3 text-sm" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1">Message</label>
<textarea className="custom-input w-full rounded-md border-gray-200 bg-gray-50 py-2.5 px-3 text-sm" rows="4"></textarea>
</div>
<button className="w-full bg-primary text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition-colors shadow-sm" type="button">
                                Send Message
                            </button>
</form>
</div>
<div className="bg-gray-50 p-8 md:p-12 flex flex-col justify-between">
<div>
<h2 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h2>
<div className="space-y-6">
<div className="flex items-start">
<span className="iconify text-primary mt-1 mr-4" data-icon="lucide:map-pin" data-width="20"></span>
<p className="text-sm text-gray-600">Jl. Jend. Sudirman Kav. 52-53,<br/>Jakarta Selatan, 12190, Indonesia</p>
</div>
<div className="flex items-start">
<span className="iconify text-primary mt-1 mr-4" data-icon="lucide:phone" data-width="20"></span>
<p className="text-sm text-gray-600">+62 21 555 0199</p>
</div>
<div className="flex items-start">
<span className="iconify text-primary mt-1 mr-4" data-icon="lucide:mail" data-width="20"></span>
<p className="text-sm text-gray-600">info@solusiglobalkarier.co.id</p>
</div>
</div>
<div className="mt-10">
<h3 className="text-sm font-semibold text-gray-900 mb-4">Follow Us</h3>
<div className="flex space-x-4">
<a className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-primary hover:shadow-sm transition-all border border-gray-200" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-width="18"></span>
</a>
<a className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-primary hover:shadow-sm transition-all border border-gray-200" href="#">
<span className="iconify" data-icon="lucide:facebook" data-width="18"></span>
</a>
<a className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-primary hover:shadow-sm transition-all border border-gray-200" href="#">
<span className="iconify" data-icon="lucide:instagram" data-width="18"></span>
</a>
</div>
</div>
</div>

<div className="mt-8 rounded-lg overflow-hidden h-48 bg-gray-200 relative">
<img alt="Map Location" className="w-full h-full object-cover opacity-60 grayscale" src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1631&amp;q=80"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="bg-white px-3 py-1 rounded shadow text-xs font-semibold text-gray-800">Jakarta HQ</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="bg-white border-t border-gray-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">

<div className="flex items-center gap-3 mb-4">
<div className="flex flex-col justify-center">
<h1 className="font-heading font-black text-2xl tracking-tighter text-primary leading-none">SGK</h1>
<span className="font-heading font-bold text-[9px] tracking-wider text-gray-600 uppercase leading-none mt-1">PT Solusi Global Karier</span>
</div>
</div>
<p className="text-xs text-gray-500 mb-4 italic">Transforming Indonesian Potential into Global Impact</p>
</div>
<div>
<h3 className="font-heading font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wider">Services</h3>
<ul className="space-y-2">
<li><a className="text-sm text-gray-500 hover:text-primary transition-colors" href="#" onclick="navigateTo('services')">Talent Recruitment</a></li>
<li><a className="text-sm text-gray-500 hover:text-primary transition-colors" href="#" onclick="navigateTo('services')">Workforce Training</a></li>
<li><a className="text-sm text-gray-500 hover:text-primary transition-colors" href="#" onclick="navigateTo('services')">Global Placement</a></li>
</ul>
</div>
<div>
<h3 className="font-heading font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wider">Company</h3>
<ul className="space-y-2">
<li><a className="text-sm text-gray-500 hover:text-primary transition-colors" href="#" onclick="navigateTo('about')">About Us</a></li>
<li><a className="text-sm text-gray-500 hover:text-primary transition-colors" href="#" onclick="navigateTo('jobs')">Job Openings</a></li>
<li><a className="text-sm text-gray-500 hover:text-primary transition-colors" href="#" onclick="navigateTo('contact')">Contact</a></li>
</ul>
</div>
<div>
<h3 className="font-heading font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wider">Legal</h3>
<ul className="space-y-2">
<li><a className="text-sm text-gray-500 hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-sm text-gray-500 hover:text-primary transition-colors" href="#">Terms of Service</a></li>
<li><a className="text-sm text-gray-500 hover:text-primary transition-colors" href="#">License Info</a></li>
</ul>
</div>
</div>
<div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center">
<p className="text-xs text-gray-400">© 2023 PT Solusi Global Karier. All rights reserved.</p>
<div className="flex space-x-4 mt-4 md:mt-0">
<span className="iconify text-gray-400 hover:text-primary cursor-pointer" data-icon="lucide:facebook"></span>
<span className="iconify text-gray-400 hover:text-primary cursor-pointer" data-icon="lucide:twitter"></span>
<span className="iconify text-gray-400 hover:text-primary cursor-pointer" data-icon="lucide:linkedin"></span>
</div>
</div>
</div>
</footer>



    </>
  );
}
