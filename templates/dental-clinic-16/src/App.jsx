import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
surface: '#ffffff',
surfaceHighlight: '#fafafa', // zinc-50
primary: '#09090b', // zinc-950
primaryDark: '#27272a', // zinc-800
accent: '#2563eb', // subtle professional blue
accentLight: '#eff6ff',
dark: '#09090b',
darkText: '#27272a', // zinc-800
muted: '#71717a', // zinc-500
border: '#e4e4e7', // zinc-200
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
boxShadow: {
'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05)',
'lift': '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -4px rgba(0, 0, 0, 0.05)',
},
backgroundImage: {
'grid-pattern': 'linear-gradient(to right, #e4e4e7 1px, transparent 1px), linear-gradient(to bottom, #e4e4e7 1px, transparent 1px)',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    // Reveal on Scroll Animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -20px 0px"
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

    // Form Handling
    function selectTime(value) {
      const display = document.getElementById('selected-time');
      display.innerText = value;
      display.classList.remove('text-muted');
      display.classList.add('text-primary');
      document.getElementById('timeInput').value = value;
    }

    // Toggle Patient Type Segmented Control
    function togglePatientType() {
      const bg = document.getElementById('segmented-bg');
      const newOpt = document.getElementById('opt-new');
      const currOpt = document.getElementById('opt-current');
      const input = document.getElementById('patientType');

      if (input.value === "New Patient") {
        bg.style.transform = 'translateX(100%)';
        newOpt.classList.remove('active');
        currOpt.classList.add('active');
        input.value = "Current Patient";
      } else {
        bg.style.transform = 'translateX(0)';
        currOpt.classList.remove('active');
        newOpt.classList.add('active');
        input.value = "New Patient";
      }
    }

    function handleSubmit() {
      const form = document.getElementById('bookingForm');
      const successMsg = document.getElementById('successMessage');
      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.innerHTML;
      
      btn.innerHTML = '<iconify-icon icon="solar:spinner-linear" class="animate-spin text-lg"></iconify-icon> Processing...';

      setTimeout(() => {
        form.classList.add('hidden');
        successMsg.classList.remove('hidden');
        btn.innerHTML = originalText;
      }, 1000);
    }

    function resetForm() {
      document.getElementById('bookingForm').reset();
      document.getElementById('bookingForm').classList.remove('hidden');
      document.getElementById('successMessage').classList.add('hidden');
      
      const timeDisplay = document.getElementById('selected-time');
      timeDisplay.innerText = 'Select time';
      timeDisplay.classList.add('text-muted');
      timeDisplay.classList.remove('text-primary');

      const bg = document.getElementById('segmented-bg');
      const newOpt = document.getElementById('opt-new');
      const currOpt = document.getElementById('opt-current');
      const input = document.getElementById('patientType');
      bg.style.transform = 'translateX(0)';
      currOpt.classList.remove('active');
      newOpt.classList.add('active');
      input.value = "New Patient";
    }

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
      const dropdowns = document.querySelectorAll('.custom-select-wrapper');
      dropdowns.forEach(dropdown => {
        if (!dropdown.contains(e.target)) {
          dropdown.classList.remove('open');
        }
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-border" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2.5 group" href="#">
<div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
<iconify-icon height="18" icon="solar:tooth-linear" width="18"></iconify-icon>
</div>
<span className="font-sans font-semibold text-base tracking-tight text-primary">
          Piedmont Dental
        </span>
</a>

<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-muted">
<a className="hover:text-primary transition-colors" href="#home">Home</a>
<a className="hover:text-primary transition-colors" href="#services">Services</a>
<a className="hover:text-primary transition-colors" href="#team">Team</a>
<a className="hover:text-primary transition-colors" href="#about">About</a>
<a className="hover:text-primary transition-colors" href="#contact">Contact</a>
</div>
<div className="hidden md:flex">
<a className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primaryDark transition-all duration-200 shadow-sm flex items-center gap-2" href="#book">
          Book Appointment
        </a>
</div>

<button className="lg:hidden text-primary" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>

<div className="hidden absolute top-16 left-0 w-full bg-white border-b border-border p-6 flex flex-col gap-4 shadow-soft" id="mobile-menu">
<a className="text-sm font-medium text-dark" href="#home">Home</a>
<a className="text-sm font-medium text-dark" href="#services">Services</a>
<a className="text-sm font-medium text-dark" href="#team">Team</a>
<a className="text-sm font-medium text-dark" href="#about">About</a>
<a className="text-sm font-medium text-dark" href="#contact">Contact</a>
<a className="bg-primary text-white text-center py-2.5 rounded-md text-sm font-medium mt-2" href="#book">
        Book Appointment
      </a>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-surface" id="home">

<div className="absolute inset-0 bg-grid-pattern [background-size:32px_32px] opacity-[0.03] pointer-events-none"></div>
<div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="relative z-10 reveal-on-scroll">
<div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-surfaceHighlight border border-border text-primary text-xs font-medium mb-6 shadow-sm">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
</span>
          Accepting New Patients in Piedmont
        </div>
<h1 className="font-sans font-semibold text-4xl lg:text-6xl tracking-tight leading-[1.05] mb-6 text-primary">
          Exceptional care for the <br className="hidden lg:block"/>
<span className="text-muted">Piedmont community.</span>
</h1>
<p className="text-base text-muted mb-8 max-w-lg leading-relaxed">
          Experience modern dentistry in a professional, welcoming environment. We combine advanced technology with compassionate care for your entire family.
        </p>
<div className="flex flex-col sm:flex-row gap-3">
<a className="bg-primary text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-primaryDark transition-all duration-200 shadow-sm text-center" href="#book">
            Book Appointment
          </a>
<a className="bg-white border border-border text-primary px-5 py-2.5 rounded-md text-sm font-medium hover:bg-surfaceHighlight transition-all duration-200 text-center shadow-sm" href="#services">
            Explore Services
          </a>
</div>
</div>
<div className="relative reveal-on-scroll delay-100">
<div className="relative rounded-2xl overflow-hidden shadow-soft border border-border bg-surfaceHighlight aspect-[4/3]">
<img alt="Piedmont Dental Clinic" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-lg p-3 shadow-sm border border-border/50 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="bg-surfaceHighlight p-2 rounded-md border border-border text-primary">
<iconify-icon height="20" icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-[10px] text-muted uppercase tracking-wider font-semibold">
                  Certified
                </p>
<p className="text-sm font-semibold text-primary">
                  Top Rated in Piedmont
                </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surfaceHighlight border-y border-border relative overflow-hidden" id="team">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="reveal-on-scroll">
<img alt="Piedmont Dental Team" className="rounded-2xl border border-border shadow-soft object-cover aspect-[4/3] w-full" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
<div className="reveal-on-scroll delay-100">
<span className="text-muted font-medium text-xs uppercase tracking-wider mb-2 block">Our Professionals</span>
<h2 className="font-sans font-semibold text-3xl text-primary mb-5 tracking-tight">Meet the Piedmont Team</h2>
<p className="text-muted text-sm leading-relaxed mb-6">
            Our experienced professionals are dedicated to providing the highest quality care. From our front desk staff to our specialized hygienists and lead dentists, every member of the Piedmont Dental team is here to ensure your visit is comfortable, efficient, and exceptionally handled.
          </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-primary text-sm font-medium">
<iconify-icon className="text-muted text-lg" icon="solar:check-circle-linear"></iconify-icon>
              Board-Certified Specialists
            </li>
<li className="flex items-center gap-3 text-primary text-sm font-medium">
<iconify-icon className="text-muted text-lg" icon="solar:check-circle-linear"></iconify-icon>
              Continuous Education &amp; Training
            </li>
<li className="flex items-center gap-3 text-primary text-sm font-medium">
<iconify-icon className="text-muted text-lg" icon="solar:check-circle-linear"></iconify-icon>
              Patient-First Approach
            </li>
</ul>
<a className="inline-flex items-center text-sm font-medium text-primary hover:text-accent transition-colors gap-1 group" href="#contact">
            Contact our office
            <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surface" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 reveal-on-scroll">
<div className="max-w-2xl">
<h2 className="font-sans font-semibold text-3xl text-primary tracking-tight">
            Comprehensive Services
          </h2>
<p className="text-muted mt-3 text-sm">
            Everything you need for a healthy smile, utilizing the latest in modern dentistry.
          </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-surfaceHighlight rounded-xl p-6 border border-border hover:shadow-soft transition-all duration-200 group reveal-on-scroll">
<div className="w-10 h-10 bg-white border border-border rounded-lg flex items-center justify-center text-primary mb-4 shadow-sm">
<iconify-icon height="20" icon="solar:health-linear" width="20"></iconify-icon>
</div>
<h3 className="font-sans font-semibold text-base text-primary mb-2 tracking-tight">
            General Care
          </h3>
<p className="text-sm text-muted mb-4 leading-relaxed">
            Routine cleanings, examinations, and preventive care to maintain optimal oral health.
          </p>
</div>

<div className="bg-surfaceHighlight rounded-xl p-6 border border-border hover:shadow-soft transition-all duration-200 group reveal-on-scroll delay-100">
<div className="w-10 h-10 bg-white border border-border rounded-lg flex items-center justify-center text-primary mb-4 shadow-sm">
<iconify-icon height="20" icon="solar:stars-minimalistic-linear" width="20"></iconify-icon>
</div>
<h3 className="font-sans font-semibold text-base text-primary mb-2 tracking-tight">
            Cosmetic
          </h3>
<p className="text-sm text-muted mb-4 leading-relaxed">
            Professional whitening, veneers, and smile makeovers tailored to your aesthetic goals.
          </p>
</div>

<div className="bg-surfaceHighlight rounded-xl p-6 border border-border hover:shadow-soft transition-all duration-200 group reveal-on-scroll delay-200">
<div className="w-10 h-10 bg-white border border-border rounded-lg flex items-center justify-center text-primary mb-4 shadow-sm">
<iconify-icon height="20" icon="solar:smile-circle-linear" width="20"></iconify-icon>
</div>
<h3 className="font-sans font-semibold text-base text-primary mb-2 tracking-tight">
            Orthodontics
          </h3>
<p className="text-sm text-muted mb-4 leading-relaxed">
            Clear aligners and modern orthodontic solutions for precise, discreet alignment.
          </p>
</div>

<div className="bg-surfaceHighlight rounded-xl p-6 border border-border hover:shadow-soft transition-all duration-200 group reveal-on-scroll delay-300">
<div className="w-10 h-10 bg-white border border-border rounded-lg flex items-center justify-center text-primary mb-4 shadow-sm">
<iconify-icon height="20" icon="solar:bone-linear" width="20"></iconify-icon>
</div>
<h3 className="font-sans font-semibold text-base text-primary mb-2 tracking-tight">
            Implants
          </h3>
<p className="text-sm text-muted mb-4 leading-relaxed">
            Durable, natural-looking tooth replacement using state-of-the-art implant technology.
          </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surfaceHighlight border-t border-border relative" id="book">
<div className="max-w-3xl mx-auto px-6 relative z-10">
<div className="bg-white rounded-2xl p-8 shadow-sm border border-border">
<div className="mb-8">
<h2 className="font-sans font-semibold text-2xl text-primary tracking-tight mb-2">
            Request an Appointment
          </h2>
<p className="text-muted text-sm">
            Complete the details below, and our Piedmont office will confirm your visit.
          </p>
</div>
<form className="space-y-5" id="bookingForm" onsubmit="event.preventDefault(); handleSubmit();">

<div className="segmented-control w-full sm:w-64 mb-6" onclick="togglePatientType()">
<div className="segmented-bg" id="segmented-bg"></div>
<div className="segmented-option active" id="opt-new">New Patient</div>
<div className="segmented-option" id="opt-current">Current Patient</div>
<input id="patientType" name="patient_type" type="hidden" value="New Patient"/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div>
<label className="block text-xs font-medium text-primary mb-1.5">Full Name</label>
<input className="input-field" id="name" placeholder="John Doe" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-primary mb-1.5">Phone Number</label>
<input className="input-field" id="phone" placeholder="(555) 000-0000" required="" type="tel"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div>
<label className="block text-xs font-medium text-primary mb-1.5">Email Address</label>
<input className="input-field" id="email" placeholder="john@example.com" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-primary mb-1.5">Preferred Time</label>
<div className="custom-select-wrapper" onclick="this.classList.toggle('open')">
<div className="custom-select-trigger text-sm text-muted">
<span id="selected-time">Select time</span>
<iconify-icon className="text-muted" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="custom-select-options text-sm">
<div className="custom-option" onclick="selectTime('Morning (8am - 12pm)')">Morning (8am - 12pm)</div>
<div className="custom-option" onclick="selectTime('Afternoon (12pm - 4pm)')">Afternoon (12pm - 4pm)</div>
<div className="custom-option" onclick="selectTime('Evening (4pm - 6pm)')">Evening (4pm - 6pm)</div>
</div>
<input id="timeInput" name="time" type="hidden"/>
</div>
</div>
</div>
<div>
<label className="block text-xs font-medium text-primary mb-1.5">Preferred Date</label>
<input className="input-field text-primary" id="date" required="" type="date"/>
</div>
<button className="w-full bg-primary text-white font-medium py-2.5 rounded-md shadow-sm hover:bg-primaryDark transition-all duration-200 flex items-center justify-center gap-2 mt-4 text-sm" type="submit">
            Confirm Request
          </button>
</form>

<div className="hidden text-center py-12" id="successMessage">
<div className="w-12 h-12 bg-surfaceHighlight border border-border rounded-full flex items-center justify-center mx-auto mb-4 text-primary shadow-sm">
<iconify-icon height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-sans font-semibold text-primary mb-1 tracking-tight">
            Request Received
          </h3>
<p className="text-muted text-sm">
            Our team will contact you shortly to confirm your slot.
          </p>
<button className="mt-4 text-xs font-medium text-primary hover:text-accent transition-colors" onclick="resetForm()">
            Book another appointment
          </button>
</div>
</div>
</div>
</section>

<footer className="bg-surface border-t border-border pt-16 pb-8 text-sm" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

<div className="md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center text-white">
<iconify-icon icon="solar:tooth-linear" width="14"></iconify-icon>
</div>
<span className="font-sans font-semibold text-base tracking-tight text-primary">
              Piedmont Dental
            </span>
</div>
<p className="text-muted text-xs leading-relaxed mb-4">
            Modern, professional dental care for the Piedmont community.
          </p>
</div>

<div>
<h4 className="text-primary font-medium mb-4 text-xs uppercase tracking-wider">Contact</h4>
<ul className="space-y-3 text-muted text-sm">
<li>123 Piedmont Avenue, Suite 200<br/>City, ST 12345</li>
<li><a className="hover:text-primary transition-colors" href="tel:5551234567">(555) 123-4567</a></li>
<li><a className="hover:text-primary transition-colors" href="mailto:hello@piedmontdental.com">hello@piedmontdental.com</a></li>
</ul>
</div>

<div>
<h4 className="text-primary font-medium mb-4 text-xs uppercase tracking-wider">Hours</h4>
<ul className="space-y-3 text-muted text-sm">
<li className="flex justify-between"><span>Mon - Fri</span><span>8:00 AM - 5:00 PM</span></li>
<li className="flex justify-between"><span>Saturday</span><span>By Appointment</span></li>
<li className="flex justify-between"><span>Sunday</span><span>Closed</span></li>
</ul>
</div>

<div>
<h4 className="text-primary font-medium mb-4 text-xs uppercase tracking-wider">Legal</h4>
<ul className="space-y-3 text-muted text-sm flex flex-col">
<a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
<a className="hover:text-primary transition-colors" href="#">Accessibility</a>
</ul>
</div>
</div>
<div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-muted">
<p>© 2026 Piedmont Dental Care. All rights reserved.</p>
</div>
</div>
</footer>


    </>
  );
}
