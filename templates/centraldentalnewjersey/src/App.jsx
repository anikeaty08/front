import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        // Toggle Menu
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
        });

        // Close when clicking a link
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 right-0 z-50 w-full p-3 md:p-6 transition-all duration-300">

<div className="hidden md:flex justify-end items-center gap-6 max-w-7xl mx-auto mb-3 px-4 text-xs font-semibold tracking-wide text-slate-500 uppercase">
<span className="flex items-center gap-1.5 hover:text-emerald-600 transition-colors cursor-pointer">
<iconify-icon icon="solar:map-point-linear" width="14"></iconify-icon> 137 Summit Ave, Summit, NJ
            </span>
<a className="flex items-center gap-1.5 hover:text-emerald-600 transition-colors" href="tel:9082734688">
<iconify-icon icon="solar:phone-calling-linear" width="14"></iconify-icon> (908)- 273-4688
            </a>
<a className="flex items-center gap-1.5 text-emerald-600 hover:text-emerald-700 transition-colors" href="https://www.paymydentist.net/patientpay/72941?dataservicesid=072941NJD" target="_blank">
<iconify-icon icon="solar:card-linear" width="14"></iconify-icon> Pay Bill Online
            </a>
</div>
<nav className="mx-auto max-w-7xl rounded-full backdrop-blur-xl border shadow-lg px-5 py-3 flex items-center justify-between transition-all duration-300 bg-white/90 border-white/20 shadow-slate-200/50">

<a className="flex items-center gap-2 group" href="#">
<div className="bg-emerald-500 p-1.5 rounded-lg group-hover:bg-emerald-600 transition-colors text-white">
<iconify-icon icon="solar:smile-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-lg font-bold tracking-tight text-slate-900 leading-none">Central Dental</span>
<span className="text-[10px] font-semibold tracking-widest uppercase text-emerald-600 leading-none mt-0.5">Care</span>
</div>
</a>

<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-emerald-600" href="#">Home</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-emerald-600" href="#services">Services</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-emerald-600" href="#about">About Dr. Depekary</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-emerald-600" href="#new-patients">New Patients</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-emerald-600" href="#contact">Contact</a>
</div>

<div className="hidden md:flex items-center gap-3">
<a className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50" href="tel:9082734688">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</a>
<a className="inline-flex items-center gap-2 bg-emerald-500 text-sm font-semibold px-5 py-2.5 rounded-full transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:bg-emerald-600 text-white" href="#book">
                    Book Appointment
                    <iconify-icon icon="solar:calendar-add-linear" width="18"></iconify-icon>
</a>
</div>

<button className="lg:hidden text-slate-900 p-2 -mr-2" id="menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</nav>

<div className="hidden absolute top-24 left-4 right-4 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-100 p-6 flex-col gap-4 z-40 transform origin-top" id="mobile-menu">
<a className="mobile-link text-lg font-semibold text-slate-800 py-2 border-b border-slate-100" href="#">Home</a>
<a className="mobile-link text-lg font-semibold text-slate-800 py-2 border-b border-slate-100" href="#services">Services</a>
<a className="mobile-link text-lg font-semibold text-slate-800 py-2 border-b border-slate-100" href="#about">Meet Dr. Depekary</a>
<a className="mobile-link text-lg font-semibold text-slate-800 py-2 border-b border-slate-100" href="#contact">Locations</a>
<a className="mobile-link text-lg font-semibold text-emerald-600 py-2" href="https://www.paymydentist.net/patientpay/72941?dataservicesid=072941NJD" target="_blank">Pay Bill Online</a>
<a className="mobile-link mt-2 w-full bg-emerald-500 text-white font-semibold py-3.5 rounded-xl flex justify-center items-center gap-2" href="#book">
                Book Appointment
            </a>
</div>
</header>

<section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="space-y-8 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold tracking-wider uppercase">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        Accepting New Patients
                    </div>
<h1 className="text-5xl lg:text-7xl font-bold tracking-tighter leading-[1.1] text-slate-900">
                        Leave Our Office <br/>
                        With a <span className="text-transparent bg-clip-text bg-gradient-to-r to-teal-500 from-emerald-600">Smile.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 font-medium max-w-lg leading-relaxed">
                        Dr. Fred Depekary and the team at Central Dental Care provide comprehensive and preventive care for the entire family in Summit, NJ.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<a className="inline-flex justify-center items-center gap-2 bg-emerald-500 text-base font-semibold px-8 py-4 rounded-full transition-all shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:-translate-y-1 hover:bg-emerald-600 text-white" href="#book">
                            Book Appointment
                            <iconify-icon icon="solar:calendar-linear" width="20"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-2 border text-base font-semibold px-8 py-4 rounded-full transition-all bg-white hover:bg-slate-50 text-slate-700 border-slate-200 hover:border-emerald-200 hover:text-emerald-600" href="tel:9082734688">
                            (908)- 273-4688
                        </a>
</div>

<div className="flex flex-wrap gap-x-8 gap-y-4 pt-6 text-sm font-semibold text-slate-600">
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-500" icon="solar:shield-check-linear" width="20"></iconify-icon>
                            Most Insurances Accepted
                        </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-500" icon="solar:shop-linear" width="20"></iconify-icon>
                            Locally Owned
                        </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-500" icon="solar:clock-circle-linear" width="20"></iconify-icon>
                            Evening Hours Available
                        </div>
</div>
</div>

<div className="relative">
<div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group shadow-emerald-900/10 border-4 border-white">

<img alt="Smiling Family Central Dental Care" className="w-full h-[500px] lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.squarespace-cdn.com/content/v1/5a874b14b7411cf2ef2e79ac/1518816261967-Y311H05NG7WMUZJOZJJA/Smiling+Family+2.jpg"/>

<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent from-emerald-950/60"></div>

<div className="absolute bottom-8 left-8 right-8 backdrop-blur-xl p-6 rounded-2xl shadow-xl flex items-center gap-4 bg-white/95">
<div className="p-3 rounded-full bg-emerald-100 text-emerald-600 shrink-0">
<iconify-icon icon="solar:heart-angle-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-xs font-bold uppercase tracking-wider mb-1 text-emerald-600">Our Goal</p>
<p className="font-bold text-slate-900 leading-tight">"Make sure you leave our office smiling."</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-emerald-600 font-bold tracking-wider text-sm uppercase">Comprehensive Care</span>
<h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-3 mb-6 text-slate-900">
                    Services Worth <span className="text-emerald-600">Smiling About</span>
</h2>
<p className="text-lg text-slate-500 font-medium">
                    We are devoted to comprehensive and preventative oral care for the entire family.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 border border-slate-100 relative overflow-hidden">
<div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:stethoscope-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-bold mb-3 text-slate-900">General Dentistry</h3>
<p className="text-slate-500 leading-relaxed mb-6">Routine checkups, cleanings, and fillings to maintain optimal oral health for patients of all ages.</p>
<a className="inline-flex items-center text-emerald-600 font-semibold gap-1 hover:gap-2 transition-all" href="#book">
                        Book Visit <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 border border-slate-100 relative overflow-hidden">
<div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:star-shine-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-bold mb-3 text-slate-900">Cosmetic Services</h3>
<p className="text-slate-500 leading-relaxed mb-6">Beautiful cosmetic services designed to enhance your natural smile and boost your confidence.</p>
<a className="inline-flex items-center text-emerald-600 font-semibold gap-1 hover:gap-2 transition-all" href="#book">
                        Consultation <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 border border-slate-100 relative overflow-hidden">
<div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:shield-check-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-bold mb-3 text-slate-900">Preventive Care</h3>
<p className="text-slate-500 leading-relaxed mb-6">Proactive treatments and education to prevent issues before they start for the entire family.</p>
<a className="inline-flex items-center text-emerald-600 font-semibold gap-1 hover:gap-2 transition-all" href="#book">
                        Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row gap-16 items-center">

<div className="w-full lg:w-1/2 relative">
<div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-slate-100 relative shadow-2xl">

<img alt="Dr. Fred Depekary" className="w-full h-full object-cover" src="https://images.squarespace-cdn.com/content/v1/5a874b14b7411cf2ef2e79ac/1518818720990-EM02N8V3RRV7DPM1XU1X/Dr.+Depekary+at+Office.jpg?w=800&amp;q=80"/>
<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-emerald-950/80 to-transparent p-8 pt-24 text-white">
<h3 className="text-2xl font-bold">Dr. Fred Depekary</h3>
<p className="text-emerald-200 font-medium">General Dentist</p>
</div>
</div>
</div>

<div className="w-full lg:w-1/2">
<span className="text-emerald-600 font-bold tracking-wider text-sm uppercase">Meet The Doctor</span>
<h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-3 mb-6 text-slate-900">
                        You're in <span className="text-emerald-600">Good Hands</span>
</h2>
<div className="space-y-6 text-lg text-slate-500 font-medium leading-relaxed">
<p>
                            Located conveniently in , Central Dental Care and Dr. Fred Depekary take great satisfaction in helping you maintain optimal oral health.
                        </p>
<p>
                            Our practice is locally owned and devoted to providing a comfortable environment where we take the time to explain everything to our patients.
                        </p>
<div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mt-6">
<div className="flex items-start gap-4">
<iconify-icon className="text-emerald-500 shrink-0" icon="solar:quote-up-square-linear" width="32"></iconify-icon>
<div>
<p className="text-slate-800 italic mb-4">
                                        "Dr. Depekary is very knowledgable and takes the time to explain everything. Plus, walking distance from the Summit train station and evening hours? Doesn’t get any better than that!"
                                    </p>
<div className="flex items-center gap-2">
<span className="font-bold text-slate-900">— Jessica M.</span>
<span className="text-xs text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full font-bold">Verified Patient</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<div>
<span className="text-emerald-600 font-bold tracking-wider text-sm uppercase">Our Location</span>
<h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-3 mb-8 text-slate-900">
                        Visit Us in Summit
                    </h2>
<div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
<h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
<iconify-icon className="text-emerald-500" icon="solar:map-point-bold"></iconify-icon>
                            Central Dental Care
                        </h3>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
<iconify-icon icon="solar:map-linear" width="20"></iconify-icon>
</div>
<div>
<p className="font-semibold text-slate-900">Address</p>
<p className="text-slate-500">137 Summit Ave<br/>Summit, NJ 07901</p>
<p className="text-xs text-emerald-600 mt-1 font-medium">Walking distance from Summit Train Station</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<div>
<p className="font-semibold text-slate-900">Phone</p>
<a className="text-slate-500 hover:text-emerald-600 transition-colors" href="tel:9082734688">(908)- 273-4688</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
<iconify-icon icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
<div>
<p className="font-semibold text-slate-900">Hours</p>
<p className="text-slate-500">Call for appointment</p>
<span className="inline-block mt-1 px-2 py-0.5 rounded text-xs font-semibold bg-blue-50 text-blue-600">Evening Hours Available</span>
</div>
</div>
</div>
<div className="mt-8 pt-8 border-t border-slate-100 flex gap-4">
<a className="flex-1 bg-slate-900 text-white font-semibold py-3 rounded-xl flex justify-center items-center gap-2 hover:bg-slate-800 transition-colors" href="https://maps.google.com/?q=137+Summit+Ave,+Summit,+NJ+07901" target="_blank">
<iconify-icon icon="solar:map-arrow-right-linear" width="18"></iconify-icon> Get Directions
                            </a>
<a className="flex-1 border border-slate-200 text-slate-700 font-semibold py-3 rounded-xl flex justify-center items-center gap-2 hover:border-emerald-500 hover:text-emerald-600 transition-colors" href="tel:9082734688">
<iconify-icon icon="solar:phone-linear" width="18"></iconify-icon> Call Now
                            </a>
</div>
</div>
</div>

<div id="new-patients">
<span className="text-emerald-600 font-bold tracking-wider text-sm uppercase">Patient Information</span>
<h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-3 mb-8 text-slate-900">
                        Common Questions
                    </h2>
<div className="space-y-4">
<details className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-100 [&amp;_summary::-webkit-details-marker]:hidden open:ring-1 open:ring-emerald-500/20">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900 font-bold text-lg">
                                Do you accept insurance?
                                <iconify-icon className="text-emerald-500 transition-transform group-open:-rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="mt-4 leading-relaxed text-slate-500">
                                Yes, we accept most insurances! Please contact our office with your specific provider information and we will be happy to verify your benefits.
                            </p>
</details>
<details className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-100 [&amp;_summary::-webkit-details-marker]:hidden open:ring-1 open:ring-emerald-500/20">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900 font-bold text-lg">
                                Do you offer payment plans?
                                <iconify-icon className="text-emerald-500 transition-transform group-open:-rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="mt-4 leading-relaxed text-slate-500">
                                Yes, we offer payment plans to help make your dental care affordable. We also have an online payment portal for your convenience.
                            </p>
</details>
<details className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-100 [&amp;_summary::-webkit-details-marker]:hidden open:ring-1 open:ring-emerald-500/20">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900 font-bold text-lg">
                                Where are you located?
                                <iconify-icon className="text-emerald-500 transition-transform group-open:-rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="mt-4 leading-relaxed text-slate-500">
                                We are located at 137 Summit Ave, Summit, NJ 07901. We are locally owned and situated within walking distance of the Summit train station.
                            </p>
</details>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-emerald-950 rounded-t-[3rem] lg:rounded-t-[4rem] relative overflow-hidden text-white" id="book">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Request an Appointment</h2>
<p className="text-emerald-200/80 text-lg">Fill out the form below and our team will contact you to confirm your visit.</p>
</div>
<form className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 md:p-10 rounded-3xl space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-emerald-200 mb-2">Full Name</label>
<input className="w-full bg-emerald-900/50 border border-emerald-800 rounded-xl px-4 py-3 text-white placeholder-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-emerald-200 mb-2">Phone Number</label>
<input className="w-full bg-emerald-900/50 border border-emerald-800 rounded-xl px-4 py-3 text-white placeholder-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="(908) 555-0123" type="tel"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-emerald-200 mb-2">Email Address</label>
<input className="w-full bg-emerald-900/50 border border-emerald-800 rounded-xl px-4 py-3 text-white placeholder-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="john@example.com" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-emerald-200 mb-2">Service Type</label>
<select className="w-full bg-emerald-900/50 border border-emerald-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 appearance-none">
<option className="text-slate-900">General Checkup</option>
<option className="text-slate-900">Cosmetic Consultation</option>
<option className="text-slate-900">Preventive Care</option>
<option className="text-slate-900">Other</option>
</select>
</div>
</div>
<div>
<label className="block text-sm font-medium text-emerald-200 mb-2">Message or Preferred Time</label>
<textarea className="w-full bg-emerald-900/50 border border-emerald-800 rounded-xl px-4 py-3 text-white placeholder-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="I would like an evening appointment if possible..." rows="3"></textarea>
</div>
<button className="w-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-lg py-4 rounded-xl transition-all shadow-lg shadow-emerald-500/20" type="button">
                    Submit Request
                </button>
<p className="text-center text-xs text-emerald-400 mt-4">
                    *Note for Setup: Connect this form to instant email autoresponder + staff notification email.
                </p>
</form>
</div>
</section>

<footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

<div className="space-y-4">
<div className="flex items-center gap-2">
<div className="bg-emerald-500 p-1.5 rounded-lg text-white">
<iconify-icon icon="solar:smile-circle-linear" width="24"></iconify-icon>
</div>
<span className="text-lg font-bold text-slate-900">Central Dental Care</span>
</div>
<p className="text-slate-500 text-sm leading-relaxed">
                        Helping you maintain optimal oral health in Summit, NJ. Locally owned and dedicated to your smile.
                    </p>
</div>

<div>
<h4 className="font-bold text-slate-900 mb-4">Contact Us</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li className="flex items-start gap-2">
<iconify-icon className="text-emerald-500 mt-0.5" icon="solar:map-point-linear"></iconify-icon>
                            137 Summit Ave,<br/>Summit, NJ 07901
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-emerald-500" icon="solar:phone-linear"></iconify-icon>
                            (908)- 273-4688
                        </li>
</ul>
</div>

<div>
<h4 className="font-bold text-slate-900 mb-4">Patients</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-emerald-600" href="#new-patients">New Patient Info</a></li>
<li><a className="hover:text-emerald-600" href="https://www.paymydentist.net/patientpay/72941?dataservicesid=072941NJD" target="_blank">Pay Bill Online</a></li>
</ul>
</div>

<div>
<h4 className="font-bold text-slate-900 mb-4">Office Hours</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li>Please call for hours.</li>
<li className="text-emerald-600 font-semibold">Evening appointments available.</li>
</ul>
</div>
</div>
<div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
<p>© 2026 Central Dental Care. All Rights Reserved.</p>
<p>Website Design Concept.</p>
</div>
</div>
</footer>



    </>
  );
}
