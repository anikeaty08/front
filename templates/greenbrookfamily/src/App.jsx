import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const mobileToggle = document.getElementById('mobile-toggle');
        const mobileClose = document.getElementById('mobile-close');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        function toggleMenu() {
            const isHidden = mobileMenu.classList.contains('opacity-0');
            if (isHidden) {
                // Open
                mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
                mobileMenu.classList.add('opacity-100', 'pointer-events-auto');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            } else {
                // Close
                mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
                mobileMenu.classList.add('opacity-0', 'pointer-events-none');
                document.body.style.overflow = '';
            }
        }

        mobileToggle.addEventListener('click', toggleMenu);
        mobileClose.addEventListener('click', toggleMenu);

        // Close menu when clicking a link
        mobileLinks.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-emerald-950 text-emerald-50 text-xs font-medium py-2 px-4 border-b border-emerald-900">
<div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left">
<div className="flex items-center gap-4">
<span className="flex items-center gap-1.5">
<iconify-icon className="text-emerald-400 text-sm" icon="solar:bell-linear"></iconify-icon>
                    Emergency Services Available 24/7
                </span>
<span className="hidden sm:inline text-emerald-800">|</span>
<span className="flex items-center gap-1.5">
<iconify-icon className="text-emerald-400 text-sm" icon="solar:map-point-linear"></iconify-icon>
                    933 N Washington Ave, Green Brook, NJ
                </span>
</div>
<div className="flex items-center gap-3">
<span>Voted Best of the Best in Central Jersey</span>
</div>
</div>
</div>

<header className="sticky md:p-4 w-full z-50 pt-3 pr-3 pb-3 pl-3 top-0 right-0 left-0">
<nav className="mx-auto max-w-7xl rounded-2xl backdrop-blur-xl border shadow-lg px-4 md:px-6 py-3 flex items-center justify-between transition-all duration-300 bg-white/90 border-white/20 shadow-slate-200/50">

<a className="flex items-center gap-2 group" href="#">
<div className="bg-emerald-500 p-1.5 rounded-lg group-hover:bg-emerald-600 transition-colors text-white">
<iconify-icon height="24" icon="solar:tooth-linear" width="24"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-lg font-semibold tracking-tight text-slate-900 leading-none">Green Brook</span>
<span className="text-xs font-medium text-emerald-600 tracking-wide uppercase">Family Dentalcare</span>
</div>
</a>

<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-emerald-600" href="#">Home</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-emerald-600" href="#services">Dentistry Services</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-emerald-600" href="#sedation">Sedation</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-emerald-600" href="#new-patients">New Patients</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-emerald-600" href="#contact">Contact</a>
</div>

<div className="hidden lg:flex items-center gap-3">
<a className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-emerald-600 transition-colors" href="tel:7329688585">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear"></iconify-icon>
                    732-968-8585
                </a>
<a className="inline-flex items-center gap-2 bg-emerald-500 text-sm font-medium px-5 py-2.5 rounded-full transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:bg-emerald-600 text-white" href="#book">
                    Book Appointment
                </a>
</div>

<button className="lg:hidden text-slate-900 p-1 relative z-50" id="mobile-toggle">
<iconify-icon height="28" icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</nav>

<div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl opacity-0 pointer-events-none flex flex-col items-center justify-center space-y-8 p-6" id="mobile-menu">

<button className="absolute top-6 right-6 text-slate-500 hover:text-slate-900" id="mobile-close">
<iconify-icon height="32" icon="solar:close-circle-linear" width="32"></iconify-icon>
</button>
<a className="mobile-link text-2xl font-semibold text-slate-900" href="#">Home</a>
<a className="mobile-link text-2xl font-semibold text-slate-900" href="#services">Services</a>
<a className="mobile-link text-2xl font-semibold text-slate-900" href="#sedation">Sedation</a>
<a className="mobile-link text-2xl font-semibold text-slate-900" href="#new-patients">New Patients</a>
<a className="mobile-link text-2xl font-semibold text-slate-900" href="#contact">Location</a>
<hr className="w-12 border-slate-200"/>
<a className="flex items-center gap-2 text-xl font-medium text-emerald-600" href="tel:7329688585">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
                732-968-8585
            </a>
<a className="mobile-link w-full max-w-xs text-center bg-emerald-500 text-white font-medium py-4 rounded-xl shadow-lg shadow-emerald-500/20" href="#book">
                Book Appointment
            </a>
</div>
</header>

<section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Green Brook Dental Office" className="w-full h-full object-cover" src="https://lirp.cdn-website.com/784f9e155fe14027956d13575480dadd/dms3rep/multi/opt/1923cf6-1920w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 backdrop-blur-md">
<span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
<span className="text-xs font-semibold text-emerald-50 tracking-wide uppercase">Accepting New Patients</span>
</div>
<h1 className="text-4xl lg:text-6xl font-semibold tracking-tighter leading-[1.1] text-white">
                    Family &amp; Sedation <br/>
                    Dentistry in <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">Green Brook, NJ</span>
</h1>
<p className="text-lg text-slate-200 font-medium leading-relaxed max-w-lg">
                    Don't let a fear of the dentist prevent you from showing off your gorgeous smile. We specialize in anxiety-free dental services and complete family care.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<a className="inline-flex justify-center items-center gap-2 bg-emerald-500 text-base font-medium px-8 py-3.5 rounded-full transition-all shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:-translate-y-1 hover:bg-emerald-600 text-white" href="#book">
                        Book Appointment
                        <iconify-icon className="text-lg" icon="solar:calendar-add-linear"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-2 border text-base font-medium px-8 py-3.5 rounded-full transition-all bg-white/10 backdrop-blur-md hover:bg-white text-white hover:text-slate-900 border-white/20" href="tel:7329688585">
                        Call 732-968-8585
                    </a>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/10">
<div className="flex items-center gap-2 text-white/90">
<iconify-icon className="text-emerald-400 text-xl" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm font-medium">Accept All Insurance</span>
</div>
<div className="flex items-center gap-2 text-white/90">
<iconify-icon className="text-emerald-400 text-xl" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm font-medium">Care Credit</span>
</div>
<div className="flex items-center gap-2 text-white/90">
<iconify-icon className="text-emerald-400 text-xl" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm font-medium">Senior Discounts</span>
</div>
<div className="flex items-center gap-2 text-white/90">
<iconify-icon className="text-emerald-400 text-xl" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm font-medium">Anxiety-Free</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-slate-900">
                    Comprehensive <span className="text-emerald-600">Dental Services</span>
</h2>
<p className="text-lg text-slate-500 font-medium">
                    From simple cleanings to complex cosmetic dentistry, we act as a true one-stop source for all of your family's dental health needs.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-emerald-900/5 transition-all group">
<div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:smile-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Cosmetic Dentistry</h3>
<p className="text-sm text-slate-500">Transform your smile with veneers, bonding, and aesthetic treatments designed for you.</p>
</div>
<div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-emerald-900/5 transition-all group">
<div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:stars-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Teeth Whitening</h3>
<p className="text-sm text-slate-500">Professional whitening services to brighten your smile safely and effectively.</p>
</div>
<div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-emerald-900/5 transition-all group">
<div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:bone-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Implants &amp; Surgery</h3>
<p className="text-sm text-slate-500">Expert oral surgery and dental implants to restore function and confidence.</p>
</div>
<div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-emerald-900/5 transition-all group">
<div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Periodontics</h3>
<p className="text-sm text-slate-500">Specialized care for gum health to prevent and treat periodontal disease.</p>
</div>
<div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-emerald-900/5 transition-all group">
<div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Orthodontic Dentistry</h3>
<p className="text-sm text-slate-500">Straighten your teeth and improve your bite with our orthodontic solutions.</p>
</div>
<div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-emerald-900/5 transition-all group">
<div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:sleeping-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Sleep Apnea &amp; TMJ</h3>
<p className="text-sm text-slate-500">Specialized appliances for sleep apnea and TMJ relief.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="sedation">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div>
<span className="text-emerald-600 font-semibold tracking-wide uppercase text-sm">Anxiety-Free Dentistry</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mt-4 mb-6 text-slate-900">
                        We Prioritize Your <span className="text-emerald-500">Comfort</span>
</h2>
<p className="text-lg text-slate-500 font-medium leading-relaxed mb-8">
                        Our office offers a warm, friendly atmosphere that puts our patients at ease. We train on a continuing basis to stay abreast of new information and processes.
                    </p>
<div className="space-y-4">
<div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
<div className="p-2 bg-white rounded-lg shadow-sm text-emerald-500">
<iconify-icon icon="solar:medical-kit-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-slate-900">Sedation Options</h4>
<p className="text-sm text-slate-500 mt-1">We offer IV Sedation, Nitrous Oxide, and Conscious Sedation for anxiety-free visits.</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
<div className="p-2 bg-white rounded-lg shadow-sm text-emerald-500">
<iconify-icon icon="solar:wallet-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-slate-900">Affordable Care</h4>
<p className="text-sm text-slate-500 mt-1">We accept all forms of insurance, offer Senior Discounts, and accept Care Credit.</p>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group shadow-emerald-900/10 border-4 border-white">
<img alt="Patient Smile" className="w-full object-cover" src="https://cdn.website.thryv.com/784f9e155fe14027956d13575480dadd/dms3rep/multi/975.jpg"/>

<div className="absolute bottom-8 left-8 right-8 backdrop-blur-xl p-4 rounded-2xl shadow-xl flex items-center gap-4 bg-white/95">
<div className="p-3 rounded-full bg-emerald-100 text-emerald-600">
<iconify-icon icon="solar:cup-star-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-xs font-bold uppercase tracking-wider mb-0.5 text-emerald-600">Award Winning</p>
<p className="font-medium text-slate-900 text-sm">Voted Best of the Best in Central Jersey</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-emerald-950 text-white rounded-t-[3rem]" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

<div className="space-y-8">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Visit Our Office</h2>
<p className="text-emerald-100/80 text-lg">Conveniently located in Green Brook, NJ.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-emerald-900/50 flex items-center justify-center text-emerald-400 shrink-0">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold">Address</h3>
<p className="text-emerald-100/70">933 N Washington Ave<br/>Green Brook, NJ 08812</p>
<a className="text-sm font-medium text-emerald-400 mt-2 inline-flex items-center gap-1 hover:text-white" href="https://www.google.com/maps/place/Green+Brook+Family+Dentalcare/@40.60112,-74.4736048,15z" target="_blank">
                                    Get Directions <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-emerald-900/50 flex items-center justify-center text-emerald-400 shrink-0">
<iconify-icon icon="solar:phone-calling-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold">Phone</h3>
<p className="text-emerald-100/70">For appointments and emergencies:</p>
<a className="text-xl font-bold text-white mt-1 block hover:text-emerald-400 transition-colors" href="tel:7329688585">732-968-8585</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-emerald-900/50 flex items-center justify-center text-emerald-400 shrink-0">
<iconify-icon icon="solar:letter-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold">Email</h3>
<a className="text-emerald-100/70 hover:text-white transition-colors" href="mailto:greenbrookdental@earthlink.net">greenbrookdental@earthlink.net</a>
</div>
</div>
</div>
</div>

<div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
<div className="flex items-center gap-3 mb-8">
<iconify-icon className="text-emerald-400 text-3xl" icon="solar:clock-circle-linear"></iconify-icon>
<h3 className="text-2xl font-semibold">Operating Hours</h3>
</div>
<ul className="space-y-4 text-emerald-50/90 text-sm md:text-base">
<li className="flex justify-between border-b border-white/10 pb-3">
<span>Mon, Thu</span>
<span className="font-medium">9:30 am - 6:00 pm</span>
</li>
<li className="flex justify-between border-b border-white/10 pb-3">
<span>Tue - Wed</span>
<span className="font-medium">10:00 am - 6:00 pm</span>
</li>
<li className="flex justify-between border-b border-white/10 pb-3">
<span>Friday</span>
<span className="font-medium">9:30 am - 5:00 pm</span>
</li>
<li className="flex justify-between border-b border-white/10 pb-3">
<span>Saturday</span>
<span className="font-medium">9:00 am - 2:00 pm</span>
</li>
<li className="flex justify-between text-emerald-400">
<span>Sunday</span>
<span className="font-medium">Closed</span>
</li>
</ul>
<div className="mt-8 pt-6 border-t border-white/10">
<p className="text-sm text-center text-emerald-200">Emergency services available 24/7. Call us immediately.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="book">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-10">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Request an Appointment</h2>
<p className="text-slate-500 mt-2">Fill out the form below and we will contact you to confirm.</p>
</div>
<form className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 border border-slate-100 space-y-5">


<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div>
<label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name</label>
<input className="w-full border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-slate-50" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1.5">Phone Number</label>
<input className="w-full border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-slate-50" placeholder="(555) 555-5555" type="tel"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div>
<label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address</label>
<input className="w-full border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-slate-50" placeholder="john@example.com" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1.5">Preferred Date</label>
<input className="w-full border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-slate-50" type="date"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1.5">Reason for Visit</label>
<select className="w-full border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-slate-50 appearance-none">
<option>General Checkup / Cleaning</option>
<option>Tooth Pain / Emergency</option>
<option>Cosmetic Consultation</option>
<option>Implants / Surgery</option>
<option>Other</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1.5">Message (Optional)</label>
<textarea className="w-full border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-slate-50" placeholder="Any specific concerns?" rows="3"></textarea>
</div>
<button className="w-full bg-emerald-500 text-white font-semibold text-lg py-3.5 rounded-xl shadow-lg shadow-emerald-500/20 hover:bg-emerald-600 transition-all flex items-center justify-center gap-2" type="button">
                    Submit Request
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

<div className="space-y-4">
<a className="flex items-center gap-2" href="#">
<div className="bg-emerald-500 p-1.5 rounded-lg text-white">
<iconify-icon icon="solar:tooth-linear" width="20"></iconify-icon>
</div>
<span className="text-lg font-semibold text-slate-900">Green Brook</span>
</a>
<p className="text-slate-500 text-sm leading-relaxed">
                        Providing quality dental care and sedation dentistry to Green Brook, NJ and surrounding communities.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-emerald-50 hover:text-emerald-600 transition-colors" href="https://www.facebook.com/Green-Brook-Family-Dentalcare-616834138476383/" target="_blank">
<iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon>
</a>

<a className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-emerald-50 hover:text-emerald-600 transition-colors" href="https://www.google.com/maps/place/Green+Brook+Family+Dentalcare/@40.60112,-74.4736048,15z" target="_blank">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="font-bold text-slate-900 mb-6">Quick Links</h4>
<ul className="space-y-3 text-sm font-medium text-slate-500">
<li><a className="hover:text-emerald-600" href="#">Home</a></li>
<li><a className="hover:text-emerald-600" href="#services">Dentistry Services</a></li>
<li><a className="hover:text-emerald-600" href="#sedation">Sedation Dentistry</a></li>
<li><a className="hover:text-emerald-600" href="#new-patients">New Patient Info</a></li>
</ul>
</div>

<div>
<h4 className="font-bold text-slate-900 mb-6">Services</h4>
<ul className="space-y-3 text-sm font-medium text-slate-500">
<li><a className="hover:text-emerald-600" href="#">Cosmetic Dentistry</a></li>
<li><a className="hover:text-emerald-600" href="#">Implants</a></li>
<li><a className="hover:text-emerald-600" href="#">Teeth Whitening</a></li>
<li><a className="hover:text-emerald-600" href="#">Oral Surgery</a></li>
</ul>
</div>

<div>
<h4 className="font-bold text-slate-900 mb-6">Contact</h4>
<ul className="space-y-3 text-sm font-medium text-slate-500">
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-500 mt-0.5" icon="solar:map-point-linear"></iconify-icon>
<span>933 N Washington Ave<br/>Green Brook, NJ 08812</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-emerald-500" icon="solar:phone-calling-linear"></iconify-icon>
<a className="hover:text-emerald-600" href="tel:7329688585">732-968-8585</a>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-emerald-500" icon="solar:letter-linear"></iconify-icon>
<a className="hover:text-emerald-600 break-all" href="mailto:greenbrookdental@earthlink.net">greenbrookdental@earthlink.net</a>
</li>
</ul>
</div>
</div>
<div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-medium">
<p>© 2026 Green Brook Family Dentalcare. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-emerald-600" href="#">Terms of Use</a>
<a className="hover:text-emerald-600" href="#">Privacy Policy</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
