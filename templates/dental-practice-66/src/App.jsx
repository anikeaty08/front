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
surface: '#F8FAFC',
surfaceHighlight: '#EFF6FF',
primary: '#2563EB',
primaryDark: '#1D4ED8',
accent: '#06B6D4',
dark: '#0F172A',
darkText: '#1E293B',
muted: '#64748B',
border: '#E2E8F0',
gold: '#D97706',
goldLight: '#FEF3C7',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
heading: ['Poppins', 'sans-serif'],
},
boxShadow: {
'soft': '0 10px 40px -10px rgba(37, 99, 235, 0.1)',
'lift': '0 20px 40px -15px rgba(37, 99, 235, 0.15)',
'glow': '0 0 20px rgba(6, 182, 212, 0.15)',
},
animation: {
'fade-in': 'fadeIn 0.5s ease-out',
'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { transform: 'translateY(20px)', opacity: '0' },
'100%': { transform: 'translateY(0)', opacity: '1' },
}
}
}
}
}



        lucide.createIcons();

        // Reveal on Scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));

        // Hero Slider Logic
        const slides = document.querySelectorAll('.hero-slide');
        let currentSlide = 0;

        function nextSlide() {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }

        setInterval(nextSlide, 5000); // Change slide every 5 seconds

        // Navbar Scroll Effect
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 20) {
                nav.classList.add('shadow-sm', 'bg-white/95', 'h-16');
                nav.classList.remove('bg-white/80', 'h-20');
            } else {
                nav.classList.remove('shadow-sm', 'bg-white/95', 'h-16');
                nav.classList.add('bg-white/80', 'h-20');
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
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-border" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-4">

<a className="flex-shrink-0" href="#">
<img alt="Dental Arts of Downingtown" className="h-10 w-auto object-contain" src="https://www.dentalartsofdowningtown.com/images/daod-logo.png"/>
</a>

<div className="hidden lg:flex items-center gap-6 text-sm font-medium text-muted">
<a className="hover:text-primary transition-colors" href="#services">Services</a>
<a className="hover:text-primary transition-colors" href="#staff">Team</a>
<a className="hover:text-primary transition-colors" href="#hours">Hours</a>
<a className="hover:text-primary transition-colors" href="#documents">Forms</a>
<a className="hover:text-primary transition-colors" href="#office">Office</a>
</div>

<div className="hidden md:flex items-center gap-3">
<a className="text-dark font-medium text-sm hover:text-primary transition-colors px-3" href="https://dentalartsdowningtown.secure.lq-pay.net/" target="_blank">
                    Pay Online
                </a>
<a className="bg-primary text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primaryDark transition-colors duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/30" href="#contact">
                    Book Appointment
                </a>
</div>

<button className="lg:hidden text-dark" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>

<div className="hidden absolute top-20 left-0 w-full bg-white border-b border-border p-6 flex flex-col gap-4 shadow-xl" id="mobile-menu">
<a className="text-lg font-medium text-dark" href="#services">Services</a>
<a className="text-lg font-medium text-dark" href="#staff">Team</a>
<a className="text-lg font-medium text-dark" href="#hours">Hours</a>
<a className="text-lg font-medium text-dark" href="#documents">Documents</a>
<a className="text-primary font-medium" href="https://dentalartsdowningtown.secure.lq-pay.net/">Pay Online</a>
</div>
</nav>

<div className="pt-24 pb-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-xl border border-blue-200 bg-white/60 backdrop-blur shadow-sm">
<div className="flex items-center gap-4">
<div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-primary flex-shrink-0">
<i className="w-6 h-6" data-lucide="crown"></i>
</div>
<div>
<h3 className="font-heading font-semibold text-lg text-dark">Dental Arts Membership Plan</h3>
<p className="text-sm text-muted">No insurance? No problem. Join our exclusive in-office membership plan.</p>
</div>
</div>
<a className="w-full md:w-auto text-center whitespace-nowrap bg-dark text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary transition-colors duration-300 shadow-lg shadow-dark/10" href="https://www.dentalartsofdowningtown.com/images/documents/Membership2026.pdf" target="_blank">
                    View Plan Details
                </a>
</div>
</div>
</div>

<section className="relative h-[500px] lg:h-[600px] w-full overflow-hidden bg-gray-100">

<div className="absolute inset-0 z-0" id="hero-slider">

<div className="hero-slide active" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1629909615184-74f495363b63?q=80&amp'}}>
<div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent"></div>
</div>

<div className="hero-slide" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&amp'}}>
<div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent"></div>
</div>

<div className="hero-slide" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1572631844256-43d9990e947c?q=80&amp'}}>
<div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent"></div>
</div>
</div>
<div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
<div className="max-w-2xl animate-slide-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-primary/20 text-primary text-xs font-semibold mb-6 shadow-sm backdrop-blur">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
</span>
                    Accepting New Patients
                </div>
<h1 className="font-heading font-semibold text-5xl lg:text-7xl tracking-tight leading-[1.1] mb-6 text-dark drop-shadow-sm">
                    Creating smiles with a <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">gentle touch.</span>
</h1>
<p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed font-medium">
                    Comprehensive care including routine cleanings, implants, and orthodontics. Conveniently located on Route 113.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-primary text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-primaryDark transition-all duration-300 shadow-soft shadow-primary/30 text-center flex items-center justify-center gap-2" href="tel:610-269-3978">
<i className="w-4 h-4" data-lucide="phone"></i> Call 610-269-3978
                    </a>
<a className="bg-white/90 backdrop-blur border border-border text-darkText px-8 py-3.5 rounded-full text-sm font-medium hover:border-primary hover:text-primary transition-all duration-300 text-center shadow-sm flex items-center justify-center gap-2" href="sms:484-699-9578">
<i className="w-4 h-4" data-lucide="message-square"></i> Text Us
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-border" id="hours">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-3 gap-12 lg:gap-20">

<div className="reveal-on-scroll">
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-blue-50 rounded-lg text-primary">
<i className="w-5 h-5" data-lucide="clock"></i>
</div>
<h2 className="font-heading font-semibold text-2xl text-dark">Office Hours</h2>
</div>
<div className="bg-surface rounded-2xl p-6 border border-border space-y-4">
<div className="flex justify-between items-center text-sm border-b border-dashed border-gray-200 pb-3">
<span className="font-medium text-muted">Monday</span>
<span className="font-semibold text-dark">8:00 am - 4:00 pm</span>
</div>
<div className="flex justify-between items-center text-sm border-b border-dashed border-gray-200 pb-3">
<span className="font-medium text-muted">Tuesday</span>
<span className="font-semibold text-dark">10:00 am - 6:00 pm</span>
</div>
<div className="flex justify-between items-center text-sm border-b border-dashed border-gray-200 pb-3">
<span className="font-medium text-muted">Wednesday</span>
<span className="font-semibold text-dark">8:00 am - 4:00 pm</span>
</div>
<div className="flex justify-between items-center text-sm pb-1">
<span className="font-medium text-muted">Thursday</span>
<span className="font-semibold text-dark">8:00 am - 4:00 pm</span>
</div>
</div>
</div>

<div className="lg:col-span-2 reveal-on-scroll delay-100">
<div className="flex items-center gap-3 mb-8">
<div className="p-2 bg-blue-50 rounded-lg text-primary">
<i className="w-5 h-5" data-lucide="heart"></i>
</div>
<h2 className="font-heading font-semibold text-2xl text-dark">Why Choose Us?</h2>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="p-6 rounded-2xl bg-white border border-border hover:shadow-lg transition-shadow duration-300">
<div className="flex gap-1 text-gold mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-muted text-sm leading-relaxed mb-4">
                                "I absolutely love going to Dr. Broderick! I had terrible experiences with dentists growing up... The office staff as a whole is friendly, efficient, and great to deal with! If you're searching for a dentist, your search will stop here!"
                            </p>
<p className="font-heading font-semibold text-dark text-sm">- Jackie H.</p>
</div>

<div className="p-6 rounded-2xl bg-white border border-border hover:shadow-lg transition-shadow duration-300">
<div className="flex gap-1 text-gold mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-muted text-sm leading-relaxed mb-4">
                                "Dr. Rewkowski fixed a problem I had been dealing with for several years, painlessly and with great concern for my comfort. She explained each step along the way. Awesome experience."
                            </p>
<p className="font-heading font-semibold text-dark text-sm">- Bill H.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surfaceHighlight" id="staff">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
<span className="text-primary font-medium tracking-wide text-xs uppercase mb-3 block">Expert Care</span>
<h2 className="font-heading font-semibold text-3xl lg:text-4xl text-dark mb-4 tracking-tight">Meet Our Team</h2>
<p className="text-muted">A dedicated group of professionals committed to your oral health and comfort.</p>
</div>

<div className="bg-white rounded-3xl p-8 border border-border shadow-sm mb-12 reveal-on-scroll">
<div className="flex flex-col lg:flex-row gap-8 items-start">
<img alt="Dr. Broderick" className="w-full lg:w-1/3 rounded-2xl object-cover shadow-md aspect-[4/5]" src="https://www.dentalartsofdowningtown.com/images/staffphotos/CRB2018.png"/>
<div className="lg:w-2/3">
<h3 className="font-heading font-semibold text-2xl text-dark mb-1">CarrieAnn R. Broderick DMD</h3>
<p className="text-primary font-medium text-sm mb-6">Owner &amp; Dentist</p>
<div className="space-y-4 text-muted text-sm leading-relaxed">
<p>Dr. Broderick (maiden name: Dr. Rewkowski) practices general dentistry, cosmetic dentistry and comprehensive orthodontics. Originally from the DC area, Dr. Broderick moved to Downingtown with her family in 1989. She graduated from Downingtown High School with honors.</p>
<p>She attended Penn State University before her early acceptance to Nova Southeastern University School of Dental Medicine. She joined our team as an associate dentist in 2006. Dr. Broderick has been a partner in the practice since May 2015 and became the sole practitioner in 2022. Her gentle touch and fine skills are paralleled only by her compassion for her patients.</p>
</div>
</div>
</div>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 reveal-on-scroll group">
<div className="h-64 overflow-hidden">
<img alt="Kendra" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" src="https://www.dentalartsofdowningtown.com/images/staffphotos/Kendra2017.png"/>
</div>
<div className="p-6">
<h4 className="font-heading font-semibold text-lg text-dark">Kendra</h4>
<p className="text-primary text-xs font-semibold uppercase mb-4">Hygienist</p>
<p className="text-muted text-xs leading-relaxed">
                            Kendra is one of our two full-time hygienists with outstanding qualifications. Her gentle touch and informative nature ensure you get the most from your check up. She has been with the office for over 10 years.
                        </p>
</div>
</div>

<div className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 reveal-on-scroll group delay-100">
<div className="h-64 overflow-hidden">
<img alt="Karen" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" src="https://www.dentalartsofdowningtown.com/images/staffphotos/Karen2017.png"/>
</div>
<div className="p-6">
<h4 className="font-heading font-semibold text-lg text-dark">Karen</h4>
<p className="text-primary text-xs font-semibold uppercase mb-4">Front Desk &amp; Admin</p>
<p className="text-muted text-xs leading-relaxed">
                            Karen has been with our office since 2015. She brings warmth and a calming presence to every patient visit. A resident of East Fallowfield, Karen takes pride in making sure each person feels comfortable.
                        </p>
</div>
</div>

<div className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 reveal-on-scroll group delay-200">
<div className="h-64 overflow-hidden">
<img alt="Amy" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" src="https://www.dentalartsofdowningtown.com/images/staffphotos/Amy2022.png"/>
</div>
<div className="p-6">
<h4 className="font-heading font-semibold text-lg text-dark">Amy</h4>
<p className="text-primary text-xs font-semibold uppercase mb-4">Hygienist</p>
<p className="text-muted text-xs leading-relaxed">
                            Amy has lived in Chester County since 1987. Practicing dental hygiene locally for almost 30 years, her attention to detail and cheerful attitude have made her a fabulous addition since joining full time in 2022.
                        </p>
</div>
</div>

<div className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 reveal-on-scroll group">
<div className="h-64 overflow-hidden">
<img alt="Mary Ann" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" src="https://www.dentalartsofdowningtown.com/images/staffphotos/MaryAnn2025.JPG"/>
</div>
<div className="p-6">
<h4 className="font-heading font-semibold text-lg text-dark">Mary Ann</h4>
<p className="text-primary text-xs font-semibold uppercase mb-4">Dental Assistant</p>
<p className="text-muted text-xs leading-relaxed">
                            Mary Ann joined our team at the end of 2024. With 25 years of experience as an assistant, she makes your visit comfortable and easy. She lives in Coatesville with her husband.
                        </p>
</div>
</div>

<div className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 reveal-on-scroll group delay-100">
<div className="h-64 overflow-hidden">
<img alt="Lindsay" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" src="https://www.dentalartsofdowningtown.com/images/staffphotos/Lindsay2025.png"/>
</div>
<div className="p-6">
<h4 className="font-heading font-semibold text-lg text-dark">Lindsay</h4>
<p className="text-primary text-xs font-semibold uppercase mb-4">Staff</p>
<p className="text-muted text-xs leading-relaxed">
                            A lifelong resident of Chester County, Lindsay joined us recently. She enjoys diving into a good book, gardening, and cheering for her three sons at their football games.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-border" id="office">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center justify-between mb-12">
<h2 className="font-heading font-semibold text-3xl text-dark">Our Office</h2>
<div className="h-px bg-border flex-1 ml-8"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal-on-scroll">
<div className="relative group overflow-hidden rounded-2xl aspect-video">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://www.dentalartsofdowningtown.com/images/officephotos/officeoutside.png"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<span className="text-white font-medium">Exterior</span>
</div>
</div>
<div className="relative group overflow-hidden rounded-2xl aspect-video">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://www.dentalartsofdowningtown.com/images/officephotos/Reception.png"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<span className="text-white font-medium">Reception</span>
</div>
</div>
<div className="relative group overflow-hidden rounded-2xl aspect-video">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://www.dentalartsofdowningtown.com/images/officephotos/Operatory.png"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<span className="text-white font-medium">Treatment Room</span>
</div>
</div>
<div className="relative group overflow-hidden rounded-2xl aspect-video">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://www.dentalartsofdowningtown.com/images/officephotos/Renovation.png"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<span className="text-white font-medium">Renovations</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surface border-t border-border" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 reveal-on-scroll">
<span className="text-primary font-medium tracking-wide text-xs uppercase mb-2 block">Comprehensive Care</span>
<h2 className="font-heading font-semibold text-3xl text-dark mb-4 tracking-tight">Our Services</h2>
<p className="text-muted">State-of-the-art technology meets compassionate care.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-2xl border border-border shadow-sm hover:border-primary/50 transition-colors">
<div className="w-10 h-10 bg-blue-50 text-primary rounded-lg flex items-center justify-center mb-4"><i className="w-5 h-5" data-lucide="shield-check"></i></div>
<h3 className="font-heading font-semibold text-dark mb-2">Preventive Care</h3>
<p className="text-sm text-muted">Cleanings, exams, oral cancer screenings, and fluoride treatments.</p>
</div>
<div className="bg-white p-6 rounded-2xl border border-border shadow-sm hover:border-primary/50 transition-colors">
<div className="w-10 h-10 bg-blue-50 text-primary rounded-lg flex items-center justify-center mb-4"><i className="w-5 h-5" data-lucide="hammer"></i></div>
<h3 className="font-heading font-semibold text-dark mb-2">Restorative</h3>
<p className="text-sm text-muted">Composite fillings, bonding, and esthetic restorations.</p>
</div>
<div className="bg-white p-6 rounded-2xl border border-border shadow-sm hover:border-primary/50 transition-colors">
<div className="w-10 h-10 bg-blue-50 text-primary rounded-lg flex items-center justify-center mb-4"><i className="w-5 h-5" data-lucide="braces"></i></div>
<h3 className="font-heading font-semibold text-dark mb-2">Orthodontics</h3>
<p className="text-sm text-muted">Adult orthodontics including ClearCorrect and Six Month Smiles.</p>
</div>
<div className="bg-white p-6 rounded-2xl border border-border shadow-sm hover:border-primary/50 transition-colors">
<div className="w-10 h-10 bg-blue-50 text-primary rounded-lg flex items-center justify-center mb-4"><i className="w-5 h-5" data-lucide="anchor"></i></div>
<h3 className="font-heading font-semibold text-dark mb-2">Implants</h3>
<p className="text-sm text-muted">Permanent solutions for missing teeth using advanced materials.</p>
</div>
<div className="bg-white p-6 rounded-2xl border border-border shadow-sm hover:border-primary/50 transition-colors">
<div className="w-10 h-10 bg-blue-50 text-primary rounded-lg flex items-center justify-center mb-4"><i className="w-5 h-5" data-lucide="sparkles"></i></div>
<h3 className="font-heading font-semibold text-dark mb-2">Cosmetic</h3>
<p className="text-sm text-muted">Veneers and teeth whitening to enhance your natural smile.</p>
</div>
<div className="bg-white p-6 rounded-2xl border border-border shadow-sm hover:border-primary/50 transition-colors">
<div className="w-10 h-10 bg-blue-50 text-primary rounded-lg flex items-center justify-center mb-4"><i className="w-5 h-5" data-lucide="scan"></i></div>
<h3 className="font-heading font-semibold text-dark mb-2">Technology</h3>
<p className="text-sm text-muted">iTero Intraoral Scanning and digital X-rays.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-t border-border" id="documents">
<div className="max-w-4xl mx-auto px-6">
<h2 className="font-heading font-semibold text-2xl text-dark mb-8 flex items-center gap-3">
<i className="w-6 h-6 text-primary" data-lucide="file-text"></i> Patient Documents
            </h2>
<div className="grid md:grid-cols-2 gap-4">
<a className="flex items-center justify-between p-4 bg-surface rounded-xl border border-border hover:border-primary/50 transition-colors group" href="https://app.operadds.com/Forms/SetFormsGroupGen?cFgId=0556aa65-d8cc-451a-b1f5-3fb753bb02a6" target="_blank">
<span className="font-medium text-dark text-sm">New Patient Registration</span>
<i className="w-4 h-4 text-muted group-hover:text-primary" data-lucide="external-link"></i>
</a>
<a className="flex items-center justify-between p-4 bg-surface rounded-xl border border-border hover:border-primary/50 transition-colors group" href="https://app.operadds.com/Forms/SetFormsGroupGen?cFgId=5159f6bf-ceeb-4ed3-b484-f61c918968f6" target="_blank">
<span className="font-medium text-dark text-sm">Insurance Update Form</span>
<i className="w-4 h-4 text-muted group-hover:text-primary" data-lucide="external-link"></i>
</a>
<a className="flex items-center justify-between p-4 bg-surface rounded-xl border border-border hover:border-primary/50 transition-colors group ring-2 ring-primary/10" href="https://www.dentalartsofdowningtown.com/images/documents/Membership2026.pdf" target="_blank">
<span className="font-medium text-primary text-sm">Membership Information</span>
<i className="w-4 h-4 text-primary" data-lucide="download"></i>
</a>
<a className="flex items-center justify-between p-4 bg-surface rounded-xl border border-border hover:border-primary/50 transition-colors group" href="http://app.operadds.com/Forms/SetForm?cfId=c07b73f4-cb2a-4575-89d9-87bbc887d4c0" target="_blank">
<span className="font-medium text-dark text-sm">Orthodontic Questionnaire</span>
<i className="w-4 h-4 text-muted group-hover:text-primary" data-lucide="external-link"></i>
</a>
</div>
</div>
</section>

<footer className="bg-dark pt-20 pb-8 text-white/80">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div>
<img alt="Logo" className="h-12 w-auto brightness-0 invert opacity-90 mb-6" src="https://www.dentalartsofdowningtown.com/images/daod-logo.png"/>
<p className="text-sm leading-relaxed text-white/60 mb-6">
                        104 Schubert Dr, Downingtown<br/>
                        PA 19335
                    </p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors" href="https://www.facebook.com/pages/Dr-Alan-W-Sherrill-and-CarrieAnn-R-Broderick-DMD/193930967318585" target="_blank"><i className="w-4 h-4" data-lucide="facebook"></i></a>
<a className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors" href="https://goo.gl/VWsBii" target="_blank"><i className="w-4 h-4" data-lucide="map-pin"></i></a>
</div>
</div>

<div>
<h4 className="text-white font-heading font-semibold mb-6">Contact</h4>
<ul className="space-y-4 text-sm">
<li className="flex items-center gap-3 group">
<i className="w-4 h-4 text-accent" data-lucide="phone"></i>
<a className="hover:text-accent transition-colors" href="tel:610-269-3978">610-269-3978</a>
</li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-accent" data-lucide="message-square"></i>
<a className="hover:text-accent transition-colors" href="sms:484-699-9578">Text: 484-699-9578</a>
</li>
</ul>
</div>

<div>
<h4 className="text-white font-heading font-semibold mb-6">Affiliations</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="http://www.ada.org/en/" target="_blank"><i className="w-3 h-3 text-white/40" data-lucide="link"></i> ADA</a></li>
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="http://www.padental.org/" target="_blank"><i className="w-3 h-3 text-white/40" data-lucide="link"></i> PDA</a></li>
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="https://clearcorrect.com/" target="_blank"><i className="w-3 h-3 text-white/40" data-lucide="link"></i> ClearCorrect</a></li>
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="http://www.invisalign.com/" target="_blank"><i className="w-3 h-3 text-white/40" data-lucide="link"></i> Invisalign</a></li>
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="https://www.carecredit.com/go/QZB889/" target="_blank"><i className="w-3 h-3 text-white/40" data-lucide="link"></i> CareCredit</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-heading font-semibold mb-6">Patient Links</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-white transition-colors" href="https://dentalartsdowningtown.secure.lq-pay.net/" target="_blank">Online Payment</a></li>
<li><a className="hover:text-white transition-colors" href="#documents">Patient Forms</a></li>
<li><a className="text-accent hover:text-white transition-colors font-medium" href="https://www.dentalartsofdowningtown.com/images/documents/Membership2026.pdf" target="_blank">Membership Plan</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
<p>© 2026 Dental Arts of Downingtown. All rights reserved.</p>
<div className="flex items-center gap-4 mt-4 md:mt-0 grayscale opacity-50">
<img className="h-6" src="https://www.dentalartsofdowningtown.com/images/logos/ada.png"/>
<img className="h-6" src="https://www.dentalartsofdowningtown.com/images/logos/carecredit.png"/>
</div>
</div>
</div>
</footer>


    </>
  );
}
