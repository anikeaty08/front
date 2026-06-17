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
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
brand: {
navy: '#153860', // Derived from source AVVO badge
gold: '#C4A470', // Premium accent
light: '#F9F9F9',
dark: '#0B1120',
}
}
}
}
}



        // Mobile Menu Logic (Hidden by default, standard pattern A)
        const menuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIconOpen = document.getElementById('menu-icon-open');
        const menuIconClose = document.getElementById('menu-icon-close');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        function toggleMenu() {
            // Toggle Visibility
            mobileMenu.classList.toggle('opacity-0');
            mobileMenu.classList.toggle('pointer-events-none');
            
            // Toggle Icons
            menuIconOpen.classList.toggle('hidden');
            menuIconClose.classList.toggle('hidden');

            // Prevent scroll on body when menu is open
            document.body.classList.toggle('overflow-hidden');
        }

        menuBtn.addEventListener('click', toggleMenu);

        // Close menu when a link is clicked
        mobileLinks.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });

        // Sticky Header Transition
        const header = document.getElementById('main-header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                header.classList.add('shadow-md');
                header.classList.remove('py-2');
            } else {
                header.classList.remove('shadow-md');
                header.classList.add('py-2');
            }
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
      

<header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all duration-300" id="main-header">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex flex-col z-50 relative" href="#">
<span className="font-serif text-2xl font-bold text-brand-navy tracking-tight leading-none">KEITH</span>
<span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-medium">Family Law</span>
</a>

<nav className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-brand-navy transition-colors" href="#about">About Us</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-navy transition-colors" href="#attorneys">Attorneys</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-navy transition-colors" href="#practice-areas">Practice Areas</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-navy transition-colors" href="#locations">Locations</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-navy transition-colors" href="#reviews">Reviews</a>
</nav>

<div className="hidden lg:flex items-center gap-4">
<a className="flex items-center gap-2 text-brand-navy font-semibold text-sm hover:opacity-80 transition-opacity" href="tel:9087749655">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
                    (908) 774-9655
                </a>
<a className="bg-brand-navy text-white text-sm font-medium px-6 py-3 rounded-sm hover:bg-slate-800 transition-colors shadow-lg shadow-brand-navy/20" href="#consultation">
                    Schedule Consultation
                </a>
</div>

<button aria-label="Menu" className="lg:hidden z-50 text-brand-navy p-2 focus:outline-none" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" id="menu-icon-open" width="32"></iconify-icon>
<iconify-icon className="hidden" icon="solar:close-square-linear" id="menu-icon-close" width="32"></iconify-icon>
</button>
</div>
</header>

<div className="fixed inset-0 bg-white z-40 flex flex-col pt-32 px-8 opacity-0 pointer-events-none transition-all duration-300 lg:hidden" id="mobile-menu">
<nav className="flex flex-col gap-6 text-center">
<a className="mobile-link text-2xl font-serif text-brand-navy" href="#about">About Us</a>
<a className="mobile-link text-2xl font-serif text-brand-navy" href="#attorneys">Attorneys</a>
<a className="mobile-link text-2xl font-serif text-brand-navy" href="#practice-areas">Practice Areas</a>
<a className="mobile-link text-2xl font-serif text-brand-navy" href="#locations">Locations</a>
<a className="mobile-link text-2xl font-serif text-brand-navy" href="#reviews">Reviews</a>
</nav>
<div className="mt-12 flex flex-col gap-4">
<a className="w-full flex items-center justify-center gap-2 border border-brand-navy text-brand-navy py-4 rounded-sm font-medium" href="tel:9087749655">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
                Call (908) 774-9655
            </a>
<a className="w-full bg-brand-navy text-white py-4 rounded-sm font-medium text-center shadow-lg" href="#consultation">
                Schedule Consultation
            </a>
</div>
</div>

<section className="relative min-h-[90vh] flex items-center justify-center pt-20">

<div className="absolute inset-0 z-0">
<img alt="Keith Family Law Office" className="w-full h-full object-cover" src="https://keithfamilylaw.com/wp-content/uploads/2023/11/homepage-hero-scaled.webp"/>
<div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="text-white space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
<span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
<span className="text-xs font-medium tracking-wide uppercase">Serving New Jersey Families Since 2012</span>
</div>
<h1 className="lg:text-7xl leading-[1.1] text-5xl font-semibold tracking-tight font-serif">Secure law, <br/> <span className="text-brand-gold italic">when it matters most.</span></h1>
<p className="text-lg text-slate-200 leading-relaxed max-w-lg font-light">
                    Experienced Divorce and Family Law attorneys on your side. We help you navigate complex legal processes with as little stress and conflict as possible.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="bg-brand-gold hover:bg-[#b39360] text-white text-center px-8 py-4 rounded-sm font-medium transition-colors shadow-lg shadow-orange-900/20" href="#consultation">
                        Schedule Consultation
                    </a>
<a className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white text-center px-8 py-4 rounded-sm font-medium transition-colors" href="tel:9087749655">
                        Call (908) 774-9655
                    </a>
</div>
</div>
</div>
</section>

<div className="bg-brand-navy py-6 border-b border-white/10 relative z-20">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center text-center">
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-brand-gold text-2xl" icon="solar:star-circle-bold"></iconify-icon>
<span className="text-white text-xs font-medium uppercase tracking-widest">Avvo 10.0 Rating</span>
</div>
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-brand-gold text-2xl" icon="solar:medal-ribbon-star-linear"></iconify-icon>
<span className="text-white text-xs font-medium uppercase tracking-widest">Rated by Super Lawyers</span>
</div>
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-brand-gold text-2xl" icon="solar:users-group-rounded-linear"></iconify-icon>
<span className="text-white text-xs font-medium uppercase tracking-widest">Dedicated Team</span>
</div>
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-brand-gold text-2xl" icon="solar:map-point-linear"></iconify-icon>
<span className="text-white text-xs font-medium uppercase tracking-widest">Serving 9 NJ Counties</span>
</div>
</div>
</div>
</div>

<section className="py-24 bg-white" id="about">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="font-serif text-4xl lg:text-5xl text-slate-900 mb-6">Compassionate Counsel, <span className="italic text-brand-navy">Commanding Advocacy</span></h2>
<div className="w-20 h-0.5 bg-brand-gold mx-auto mb-8"></div>
<p className="text-lg text-slate-600 leading-relaxed font-light mb-8">
                Divorce can tear families apart, driving wedges between spouses and their children. Emotions run hot and people get more unpredictable under the stress. Without proper legal counsel and a human touch, these issues become unmanageable.
            </p>
<p className="text-lg text-slate-600 leading-relaxed font-light">
                Our attorneys’ proactive approach keeps you calmer and more informed. It can even prevent your divorce from becoming needlessly contentious – saving you time, money, and stress. But if your divorce does become adversarial, you want an experienced attorney alongside you.
            </p>
</div>
</section>

<section className="py-24 bg-brand-light" id="practice-areas">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<span className="text-brand-navy text-sm font-bold uppercase tracking-widest mb-2 block">Our Expertise</span>
<h2 className="font-serif text-4xl text-slate-900">Practice Areas</h2>
</div>
<a className="text-brand-navy font-medium hover:text-brand-gold transition-colors flex items-center gap-2" href="#consultation">
                    View All Services <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 group border-t-2 border-transparent hover:border-brand-gold">
<div className="w-12 h-12 bg-brand-navy/5 text-brand-navy rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-navy group-hover:text-white transition-colors">
<iconify-icon icon="solar:document-add-linear" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-slate-900 mb-3">Divorce &amp; Separation</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">Work with an experienced divorce lawyer to find common ground and achieve mutual family goals.</p>
<a className="text-sm font-bold text-brand-navy uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all" href="#">Read More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 group border-t-2 border-transparent hover:border-brand-gold">
<div className="w-12 h-12 bg-brand-navy/5 text-brand-navy rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-navy group-hover:text-white transition-colors">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-slate-900 mb-3">Child Support &amp; Custody</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">We place an importance on the interests of your children, working tirelessly to ensure their needs are met.</p>
<a className="text-sm font-bold text-brand-navy uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all" href="#">Read More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 group border-t-2 border-transparent hover:border-brand-gold">
<div className="w-12 h-12 bg-brand-navy/5 text-brand-navy rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-navy group-hover:text-white transition-colors">
<iconify-icon icon="solar:pen-new-square-linear" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-slate-900 mb-3">Agreements</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">Marital Settlement Agreements are the foundation of your new life. We ensure all decisions align with what’s right.</p>
<a className="text-sm font-bold text-brand-navy uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all" href="#">Read More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 group border-t-2 border-transparent hover:border-brand-gold">
<div className="w-12 h-12 bg-brand-navy/5 text-brand-navy rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-navy group-hover:text-white transition-colors">
<iconify-icon icon="solar:shield-warning-linear" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-slate-900 mb-3">Domestic Violence</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">Aggressive representation designed to protect your rights and ensure your safety in all domestic violence cases.</p>
<a className="text-sm font-bold text-brand-navy uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all" href="#">Read More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 group border-t-2 border-transparent hover:border-brand-gold">
<div className="w-12 h-12 bg-brand-navy/5 text-brand-navy rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-navy group-hover:text-white transition-colors">
<iconify-icon icon="solar:hand-shake-linear" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-slate-900 mb-3">Amicable Divorce</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">Navigate the complex divorce process with as little stress and conflict as possible through creative resolution.</p>
<a className="text-sm font-bold text-brand-navy uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all" href="#">Read More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 group border-t-2 border-transparent hover:border-brand-gold">
<div className="w-12 h-12 bg-brand-navy/5 text-brand-navy rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-navy group-hover:text-white transition-colors">
<iconify-icon icon="solar:wallet-money-linear" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-slate-900 mb-3">Alimony</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">Expert guidance on spousal support and financial planning for your future stability.</p>
<a className="text-sm font-bold text-brand-navy uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all" href="#">Read More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="attorneys">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-brand-gold font-medium uppercase tracking-widest text-sm">Our Team</span>
<h2 className="font-serif text-4xl lg:text-5xl text-slate-900 mt-2">Meet Our Attorneys</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="flex flex-col items-center text-center group">
<div className="w-64 h-64 rounded-full overflow-hidden mb-6 border-4 border-slate-100 group-hover:border-brand-gold transition-colors duration-300 shadow-xl">
<img alt="Heather C. Keith, Esq." className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://keithfamilylaw.com/wp-content/uploads/2025/06/heather-keith-250.webp"/>
</div>
<h3 className="font-serif text-2xl text-slate-900">Heather C. Keith, Esq.</h3>
<p className="text-brand-navy font-medium text-sm uppercase tracking-wide mt-1">Founder</p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-64 h-64 rounded-full overflow-hidden mb-6 border-4 border-slate-100 group-hover:border-brand-gold transition-colors duration-300 shadow-xl">
<img alt="Serena K. McGann, Esq." className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://keithfamilylaw.com/wp-content/uploads/2025/06/serena-mcgann.webp"/>
</div>
<h3 className="font-serif text-2xl text-slate-900">Serena K. McGann, Esq.</h3>
<p className="text-brand-navy font-medium text-sm uppercase tracking-wide mt-1">Attorney</p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-64 h-64 rounded-full overflow-hidden mb-6 border-4 border-slate-100 group-hover:border-brand-gold transition-colors duration-300 shadow-xl">
<img alt="Megan Hodes, Esq." className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://keithfamilylaw.com/wp-content/uploads/2025/06/Megan-Hodes-sq-250.webp"/>
</div>
<h3 className="font-serif text-2xl text-slate-900">Megan Hodes, Esq.</h3>
<p className="text-brand-navy font-medium text-sm uppercase tracking-wide mt-1">Associate Attorney</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-navy text-white relative overflow-hidden" id="reviews">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<iconify-icon className="text-brand-gold text-5xl mb-6 opacity-50" icon="solar:quote-up-square-linear"></iconify-icon>
<h2 className="font-serif text-3xl lg:text-4xl leading-relaxed mb-8">
                "Not only did Ms. Keith help me resolve my case (in my favor) but she also helped me understand what I needed to do for myself and for my child to keep our lives moving forward in a positive direction."
            </h2>
<div className="flex items-center justify-center gap-4">
<div className="w-12 h-[1px] bg-brand-gold"></div>
<cite className="not-italic font-medium tracking-widest text-sm text-slate-300">KAT P.</cite>
<div className="w-12 h-[1px] bg-brand-gold"></div>
</div>
<div className="flex justify-center gap-1 mt-6 text-brand-gold">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
</div>
</section>

<section className="py-24 bg-white" id="locations">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="space-y-8">
<div>
<span className="text-brand-navy text-sm font-bold uppercase tracking-widest mb-2 block">Our Office</span>
<h2 className="font-serif text-4xl text-slate-900 mb-6">Westfield, NJ</h2>
<p className="text-slate-600 leading-relaxed">
                        From the heart of Monmouth County to the quiet corners of Morris County, Keith Family Law is proud to serve a broad range of locations throughout New Jersey.
                    </p>
</div>
<div className="bg-brand-light p-8 rounded-sm border border-slate-100">
<h3 className="font-serif text-2xl text-slate-900 mb-4">Contact Details</h3>
<ul className="space-y-4">
<li className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-brand-navy text-white flex items-center justify-center flex-shrink-0 mt-1">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<span className="block font-bold text-slate-900">Address</span>
<span className="text-slate-600">238 Saint Paul Street, Suite 201<br/>Westfield, NJ 07090</span>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-brand-navy text-white flex items-center justify-center flex-shrink-0 mt-1">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
</div>
<div>
<span className="block font-bold text-slate-900">Phone</span>
<a className="text-slate-600 hover:text-brand-navy underline" href="tel:9087749655">(908) 774-9655</a>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-brand-navy text-white flex items-center justify-center flex-shrink-0 mt-1">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
</div>
<div>
<span className="block font-bold text-slate-900">Hours</span>
<span className="text-slate-600">Mon - Fri: 9:00 AM - 5:00 PM</span>
</div>
</li>
</ul>
</div>
</div>

<div className="bg-white rounded-lg shadow-2xl p-8 lg:p-12 border border-slate-100 relative" id="consultation">
<div className="absolute top-0 left-0 w-full h-2 bg-brand-gold rounded-t-lg"></div>
<h3 className="font-serif text-3xl text-slate-900 mb-2">Request Consultation</h3>
<p className="text-slate-500 mb-8 text-sm">Fill out the form below and our team will contact you shortly.</p>
<form className="space-y-4" onsubmit="event.preventDefault(); alert('Thank you. A member of our team will contact you shortly.');">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-bold uppercase text-slate-500">First Name</label>
<input className="w-full border border-slate-200 p-3 rounded-sm focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy transition-all" required="" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-bold uppercase text-slate-500">Last Name</label>
<input className="w-full border border-slate-200 p-3 rounded-sm focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy transition-all" required="" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-bold uppercase text-slate-500">Phone</label>
<input className="w-full border border-slate-200 p-3 rounded-sm focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy transition-all" required="" type="tel"/>
</div>
<div className="space-y-1">
<label className="text-xs font-bold uppercase text-slate-500">Email</label>
<input className="w-full border border-slate-200 p-3 rounded-sm focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy transition-all" required="" type="email"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-bold uppercase text-slate-500">Matter Type</label>
<select className="w-full border border-slate-200 p-3 rounded-sm focus:outline-none focus:border-brand-navy bg-white" required="">
<option value="">Select a Practice Area</option>
<option>Divorce</option>
<option>Child Custody</option>
<option>Alimony</option>
<option>Domestic Violence</option>
<option>Other</option>
</select>
</div>
<div className="space-y-1">
<label className="text-xs font-bold uppercase text-slate-500">Message</label>
<textarea className="w-full border border-slate-200 p-3 rounded-sm focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy transition-all" placeholder="How can we help you?" rows="4"></textarea>
</div>
<button className="w-full bg-brand-navy hover:bg-slate-800 text-white font-bold py-4 rounded-sm transition-colors uppercase tracking-widest text-sm" type="submit">
                        Submit Request
                    </button>
<p className="text-[10px] text-slate-400 text-center pt-2">
                        *Setup Note: Connect to secure legal CRM.
                    </p>
</form>
</div>
</div>
</section>

<footer className="bg-brand-dark text-slate-400 py-16 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

<div className="space-y-4">
<a className="flex flex-col" href="#">
<span className="font-serif text-2xl font-bold text-white tracking-tight leading-none">KEITH</span>
<span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-medium">Family Law</span>
</a>
<p className="text-sm leading-relaxed">
                        Helping New Jersey families since 2012. We strive toward the most favorable possible outcome for you and your loved ones.
                    </p>
<div className="flex gap-4 pt-2">
<a className="text-white hover:text-brand-gold transition-colors" href="https://www.facebook.com/KeithFamilyLaw"><iconify-icon icon="solar:facebook-bold" width="24"></iconify-icon></a>
<a className="text-white hover:text-brand-gold transition-colors" href="https://www.linkedin.com/company/keith-family-law/"><iconify-icon icon="solar:linkedin-bold" width="24"></iconify-icon></a>
<a className="text-white hover:text-brand-gold transition-colors" href="https://www.instagram.com/keithfamilylaw/"><iconify-icon icon="solar:instagram-bold" width="24"></iconify-icon></a>
</div>
</div>

<div>
<h4 className="text-white font-serif text-lg mb-6">Quick Links</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-brand-gold transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-brand-gold transition-colors" href="#attorneys">Attorneys</a></li>
<li><a className="hover:text-brand-gold transition-colors" href="#practice-areas">Practice Areas</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-serif text-lg mb-6">Areas Served</h4>
<div className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
<span>Union County</span>
<span>Essex County</span>
<span>Middlesex</span>
<span>Morris County</span>
<span>Hudson County</span>
<span>Bergen County</span>
</div>
</div>

<div>
<h4 className="text-white font-serif text-lg mb-6">Contact</h4>
<ul className="space-y-3 text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-brand-gold" icon="solar:map-point-linear"></iconify-icon>
<span>238 Saint Paul Street<br/>Suite 201<br/>Westfield, NJ 07090</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-brand-gold" icon="solar:phone-calling-linear"></iconify-icon>
<a className="hover:text-brand-gold" href="tel:9087749655">(908) 774-9655</a>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-brand-gold" icon="solar:printer-linear"></iconify-icon>
<span>(908) 233-4557</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
<p>© 2025 Keith Family Law. All Rights Reserved.</p>
<div className="mt-4 md:mt-0 max-w-lg text-center md:text-right">
<p className="leading-relaxed">The information on this website is for informational purposes only and is not legal advice. No aspect of this advertisement has been approved by the Supreme Court of New Jersey.</p>
</div>
</div>
</div>
</footer>



    </>
  );
}
