import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        const links = document.querySelectorAll('.mobile-link');
        let isMenuOpen = false;

        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                // Open: Visible, Opacity 100, Pointer Events Auto
                menu.classList.remove('invisible', 'opacity-0', 'pointer-events-none');
                menu.classList.add('opacity-100', 'pointer-events-auto');
                // Change icon to close
                btn.innerHTML = '<iconify-icon icon="solar:close-circle-linear" width="28" height="28"></iconify-icon>';
                document.body.style.overflow = 'hidden'; // Lock scroll
            } else {
                // Close: Hidden
                menu.classList.add('invisible', 'opacity-0', 'pointer-events-none');
                menu.classList.remove('opacity-100', 'pointer-events-auto');
                // Change icon back
                btn.innerHTML = '<iconify-icon icon="solar:hamburger-menu-linear" width="28" height="28"></iconify-icon>';
                document.body.style.overflow = ''; // Unlock scroll
            }
        }

        btn.addEventListener('click', toggleMenu);

        // Close menu when clicking a link
        links.forEach(link => {
            link.addEventListener('click', () => {
                if(isMenuOpen) toggleMenu();
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-slate-900 text-slate-300 text-xs py-2.5 px-4 hidden md:block">
<div className="max-w-7xl mx-auto flex justify-between items-center">
<div className="flex gap-6">
<span className="flex items-center gap-2">
<iconify-icon className="text-sky-400 text-sm" icon="solar:map-point-linear"></iconify-icon> 
                    180 South St. New Providence, NJ
                </span>
<span className="flex items-center gap-2">
<iconify-icon className="text-sky-400 text-sm" icon="solar:clock-circle-linear"></iconify-icon> 
                    Mon - Fri: 9:00 AM - 5:00 PM
                </span>
</div>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="https://www.facebook.com/singhandsmiledental/" target="_blank">Facebook</a>
<a className="hover:text-white transition-colors" href="https://www.instagram.com/singhandsmiledental/" target="_blank">Instagram</a>
</div>
</div>
</div>

<header className="sticky top-0 left-0 right-0 z-50 w-full bg-white/90 backdrop-blur-xl border-b border-slate-200 transition-all duration-300">
<nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

<a className="flex items-center gap-2 group shrink-0" href="#">
<img alt="Singh and Smile Logo" className="h-10 md:h-12 w-auto object-contain" src="https://singhandsmile.com/wp-content/uploads/2018/03/Singh-and-Smile-01-copy.png"/>
</a>

<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-semibold text-brand" href="#">Home</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-brand" href="#about">About</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-brand" href="#services">Services</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-brand" href="#new-patients">New Patients</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-brand" href="#locations">Locations</a>
</div>

<div className="hidden md:flex items-center gap-4">
<a className="flex flex-col items-end leading-tight group" href="tel:908-312-7300">
<span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Call Us Today</span>
<span className="text-base font-bold text-slate-900 group-hover:text-brand transition-colors">908-312-7300</span>
</a>
<a className="inline-flex items-center gap-2 bg-brand text-sm font-medium px-5 py-2.5 rounded-full transition-all shadow-lg shadow-sky-900/10 hover:shadow-sky-900/20 hover:bg-[#055a91] text-white" href="#book">
                    Request Appointment
                    <iconify-icon className="text-lg" icon="solar:calendar-linear"></iconify-icon>
</a>
</div>

<button className="lg:hidden text-slate-900 p-2 z-50 relative" id="mobile-menu-btn">
<iconify-icon height="28" icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</nav>
</header>

<div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl opacity-0 invisible pointer-events-none transition-all duration-300 flex flex-col justify-center items-center gap-8" id="mobile-menu">
<a className="mobile-link text-2xl font-medium text-slate-900 hover:text-brand" href="#">Home</a>
<a className="mobile-link text-2xl font-medium text-slate-900 hover:text-brand" href="#about">About Us</a>
<a className="mobile-link text-2xl font-medium text-slate-900 hover:text-brand" href="#services">Services</a>
<a className="mobile-link text-2xl font-medium text-slate-900 hover:text-brand" href="#new-patients">New Patients</a>
<a className="mobile-link text-2xl font-medium text-slate-900 hover:text-brand" href="#contact">Contact</a>
<div className="flex flex-col gap-4 w-64 mt-4">
<a className="w-full text-center border-2 border-brand text-brand font-bold py-3 rounded-xl" href="tel:908-312-7300">
                Call 908-312-7300
            </a>
<a className="mobile-link w-full text-center bg-brand text-white font-bold py-3 rounded-xl shadow-lg" href="#book">
                Book Appointment
            </a>
</div>
</div>

<section className="relative pt-10 pb-20 lg:pt-28 lg:pb-32 overflow-hidden bg-white">

<div className="absolute inset-0 z-0">
<img alt="Pediatric Dentist with Patient" className="w-full h-full object-cover object-top opacity-100" src="https://singhandsmile.com/wp-content/uploads/2018/04/home-page.jpg"/>

<div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent lg:via-white/50"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="max-w-2xl space-y-8">
<div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-100 px-3 py-1 rounded-full text-brand text-xs font-bold uppercase tracking-wider shadow-sm">
<span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span> ABPD Board Certified
                </div>
<h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-slate-900">
                    Pediatric Dentistry <br/>
<span className="text-brand">You Can Trust.</span>
</h1>
<p className="text-lg md:text-xl text-slate-600 font-medium max-w-lg leading-relaxed bg-white/60 backdrop-blur-sm p-4 rounded-xl lg:bg-transparent lg:p-0">
                    We offer a full range of preventative and restorative dental services for children. Experience friendly, comfortable care designed specifically for young smiles.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 bg-brand text-base font-semibold px-8 py-3.5 rounded-full transition-all shadow-xl shadow-sky-900/20 hover:shadow-sky-900/40 hover:-translate-y-1 hover:bg-[#055a91] text-white" href="#book">
                        Book Appointment
                        <iconify-icon className="text-lg" icon="solar:calendar-add-linear"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-2 border-2 bg-white text-base font-semibold px-8 py-3.5 rounded-full transition-all text-slate-700 border-slate-200 hover:border-brand hover:text-brand" href="tel:908-312-7300">
                        Call (908) 312-7300
                    </a>
</div>

<div className="flex items-center gap-6 pt-6 border-t border-slate-200/60 mt-4">
<div className="flex items-center gap-2">
<img alt="Board Certified" className="h-8 md:h-10 object-contain mix-blend-multiply" src="https://singhandsmile.com/wp-content/uploads/2019/04/ABPD-BoardCertified-300x64.jpg"/>
</div>
<div className="hidden md:block w-px h-8 bg-slate-300"></div>
<div className="flex flex-col">
<div className="flex text-yellow-400 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-xs font-semibold text-slate-500">Top Rated Pediatric Care</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-slate-900">
                    Comprehensive <span className="text-brand">Pediatric Care</span>
</h2>
<p className="text-lg text-slate-500 font-medium">
                    We specialize in treating infants, children, and teens with a gentle touch and modern technology.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-3xl bg-white shadow-sm hover:shadow-xl hover:shadow-sky-900/10 transition-all duration-300 border border-slate-100 hover:border-sky-200 relative overflow-hidden">
<div className="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center text-brand mb-6 group-hover:bg-brand group-hover:text-white transition-colors">
<iconify-icon icon="solar:shield-check-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-bold mb-3 text-slate-900">Preventative Care</h3>
<p className="text-slate-500 leading-relaxed mb-6">Routine check-ups, cleanings, sealants, and fluoride treatments to keep little smiles healthy from the start.</p>
</div>

<div className="group p-8 rounded-3xl bg-white shadow-sm hover:shadow-xl hover:shadow-sky-900/10 transition-all duration-300 border border-slate-100 hover:border-sky-200 relative overflow-hidden">
<div className="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center text-brand mb-6 group-hover:bg-brand group-hover:text-white transition-colors">
<iconify-icon icon="solar:magic-stick-3-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-bold mb-3 text-slate-900">Restorative Dentistry</h3>
<p className="text-slate-500 leading-relaxed mb-6">Gentle fillings, crowns, and nerve treatments designed to restore function and esthetics for children.</p>
</div>

<div className="group p-8 rounded-3xl bg-white shadow-sm hover:shadow-xl hover:shadow-sky-900/10 transition-all duration-300 border border-slate-100 hover:border-sky-200 relative overflow-hidden">
<div className="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center text-brand mb-6 group-hover:bg-brand group-hover:text-white transition-colors">
<iconify-icon icon="solar:baby-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-bold mb-3 text-slate-900">First Dental Visits</h3>
<p className="text-slate-500 leading-relaxed mb-6">We create a fun, positive environment for your baby's first visit to establish a lifetime of good oral health.</p>
</div>

<div className="group p-8 rounded-3xl bg-white shadow-sm hover:shadow-xl hover:shadow-sky-900/10 transition-all duration-300 border border-slate-100 hover:border-sky-200 relative overflow-hidden">
<div className="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center text-brand mb-6 group-hover:bg-brand group-hover:text-white transition-colors">
<iconify-icon icon="solar:heart-angle-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-bold mb-3 text-slate-900">Special Needs Care</h3>
<p className="text-slate-500 leading-relaxed mb-6">Our team is trained to provide compassionate, customized care for children with special healthcare needs.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative order-2 lg:order-1">
<div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group border-4 border-slate-100">

<img alt="Dr. Singh Pediatric Dentist" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" src="https://singhandsmile.com/wp-content/uploads/2018/04/doctor.jpg"/>

<div className="absolute bottom-6 right-6 backdrop-blur-xl bg-white/95 p-5 rounded-2xl shadow-xl border border-white/50">
<p className="text-xs font-bold uppercase tracking-wider mb-1 text-brand">ABPD Certified</p>
<p className="font-bold text-slate-900">Expert Pediatric Care</p>
</div>
</div>
</div>

<div className="order-1 lg:order-2 space-y-6">
<span className="inline-block text-brand font-bold tracking-wider uppercase text-sm">About Our Practice</span>
<h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
                        Singh and Smile <br/><span className="text-brand">Pediatric Dentistry</span>
</h2>
<p className="text-lg text-slate-500 font-medium leading-relaxed">
                        When you choose a practice that specializes in pediatric dentistry such as ours, you’re ensuring that your child receives customized, age-appropriate care.
                    </p>
<p className="text-lg text-slate-500 leading-relaxed">
                        At Singh and Smile Pediatric Dentistry, your child will be treated in a friendly and comfortable office with advanced dental practices and modern technology. Our office is designed specifically with kids in mind!
                    </p>
<div className="pt-4 flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 bg-slate-900 text-white font-medium px-8 py-3 rounded-full hover:bg-slate-800 transition-colors" href="#book">
                            Meet The Team
                        </a>
<a className="inline-flex justify-center items-center gap-2 text-slate-600 font-medium px-8 py-3 rounded-full border border-slate-200 hover:border-brand hover:text-brand transition-colors" href="#new-patients">
                            Office Tour
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-sky-50" id="locations">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">

<div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
<h3 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
<div className="p-3 bg-brand/10 rounded-full text-brand">
<iconify-icon icon="solar:map-point-bold"></iconify-icon>
</div>
                        New Providence, NJ
                    </h3>
<div className="space-y-8">
<div>
<p className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">Visit Us</p>
<p className="text-xl font-medium text-slate-900">180 South St.<br/>New Providence, NJ</p>
<a className="inline-flex items-center gap-1 text-brand font-semibold mt-2 hover:underline" href="https://maps.google.com/?q=180+South+St+New+Providence+NJ" target="_blank">
                                Get Directions <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div>
<p className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">Contact</p>
<a className="text-xl font-medium text-slate-900 block hover:text-brand" href="tel:908-312-7300">908-312-7300</a>
<a className="text-lg text-slate-600 hover:text-brand" href="mailto:info@singhandsmile.com">info@singhandsmile.com</a>
</div>
<div>
<p className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-4">Office Hours</p>
<ul className="space-y-3">
<li className="flex justify-between text-slate-600 border-b border-slate-100 pb-2">
<span>Mon - Fri</span>
<span className="font-bold text-slate-900">9:00 AM - 5:00 PM</span>
</li>
<li className="flex justify-between text-slate-600 border-b border-slate-100 pb-2">
<span>Sat - Sun</span>
<span className="font-bold text-slate-400">Closed</span>
</li>
</ul>
</div>
</div>
</div>

<div className="rounded-3xl overflow-hidden shadow-lg border-4 border-white h-full min-h-[400px] relative bg-slate-200">
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.649938830206!2d-74.40192568459463!3d40.69974597933333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ba8f07065963%3A0x6b8f3e3e0e4b8b0!2s180%20South%20St%2C%20New%20Providence%2C%20NJ%2007974!5e0!3m2!1sen!2sus!4v1625687452145!5m2!1sen!2sus" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="new-patients">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900">
                    New Patient <span className="text-brand">Resources</span>
</h2>
<p className="text-lg text-slate-500 font-medium">
                    Preparing for your first visit? Here is what you need to know.
                </p>
<div className="mt-8">
<a className="inline-flex items-center gap-2 border border-slate-200 bg-slate-50 px-6 py-4 rounded-xl font-semibold text-slate-700 hover:bg-slate-100 transition-colors" href="https://singhandsmile.com/new-patient-forms/" target="_blank">
<iconify-icon className="text-xl text-brand" icon="solar:file-download-linear"></iconify-icon>
                        Download New Patient Forms
                    </a>
</div>
</div>
<div className="space-y-4">

<details className="group rounded-2xl border border-slate-100 shadow-sm [&amp;_summary::-webkit-details-marker]:hidden open:ring-1 open:ring-brand/20 bg-white">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900">
<h3 className="text-lg font-bold">How should I prepare for the first visit?</h3>
<div className="rounded-full p-1.5 text-brand transition duration-300 group-open:-rotate-180 bg-sky-50">
<iconify-icon icon="solar:alt-arrow-down-bold"></iconify-icon>
</div>
</summary>
<p className="px-6 pb-6 text-slate-500 leading-relaxed">
                        You can make the first visit enjoyable and positive! Tell your child that the dentist is a friendly doctor who will help keep their teeth shiny and strong. Avoid using words that might cause fear such as "needle" or "pain".
                    </p>
</details>

<details className="group rounded-2xl border border-slate-100 shadow-sm [&amp;_summary::-webkit-details-marker]:hidden open:ring-1 open:ring-brand/20 bg-white">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900">
<h3 className="text-lg font-bold">Do you accept insurance?</h3>
<div className="rounded-full p-1.5 text-brand transition duration-300 group-open:-rotate-180 bg-sky-50">
<iconify-icon icon="solar:alt-arrow-down-bold"></iconify-icon>
</div>
</summary>
<p className="px-6 pb-6 text-slate-500 leading-relaxed">
                        We work with many insurance providers. Please contact our office at 908-312-7300 with your insurance card handy, and we will be happy to verify your benefits.
                    </p>
</details>

<details className="group rounded-2xl border border-slate-100 shadow-sm [&amp;_summary::-webkit-details-marker]:hidden open:ring-1 open:ring-brand/20 bg-white">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900">
<h3 className="text-lg font-bold">What happens during the first visit?</h3>
<div className="rounded-full p-1.5 text-brand transition duration-300 group-open:-rotate-180 bg-sky-50">
<iconify-icon icon="solar:alt-arrow-down-bold"></iconify-icon>
</div>
</summary>
<p className="px-6 pb-6 text-slate-500 leading-relaxed">
                        We review your child's history, count their teeth, check for any issues, and discuss oral hygiene, diet, and development. We make it fun and educational!
                    </p>
</details>
</div>
</div>
</section>

<section className="py-24 relative bg-brand text-white overflow-hidden rounded-t-[3rem]" id="book">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="space-y-6">
<h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                        Start Your Child's <br/> Smile Journey Here.
                    </h2>
<p className="font-medium text-lg text-sky-100 max-w-md">
                        Booking your next visit is simple. Fill out the form and we'll confirm your appointment shortly.
                    </p>
<div className="flex items-center gap-4 pt-4">
<div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm">
<p className="text-2xl font-bold">908-312-7300</p>
<p className="text-xs uppercase tracking-wide opacity-80">Call us directly</p>
</div>
</div>
</div>

<div className="bg-white text-slate-900 rounded-3xl p-8 shadow-2xl">
<h3 className="text-xl font-bold mb-6">Request an Appointment</h3>
<form className="space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-bold text-slate-500 uppercase mb-1">First Name</label>
<input className="w-full border border-slate-200 rounded-xl px-4 py-3 bg-slate-50 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all" placeholder="Child's First Name" type="text"/>
</div>
<div>
<label className="block text-xs font-bold text-slate-500 uppercase mb-1">Last Name</label>
<input className="w-full border border-slate-200 rounded-xl px-4 py-3 bg-slate-50 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all" placeholder="Child's Last Name" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-bold text-slate-500 uppercase mb-1">Email</label>
<input className="w-full border border-slate-200 rounded-xl px-4 py-3 bg-slate-50 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all" placeholder="parent@email.com" type="email"/>
</div>
<div>
<label className="block text-xs font-bold text-slate-500 uppercase mb-1">Phone Number</label>
<input className="w-full border border-slate-200 rounded-xl px-4 py-3 bg-slate-50 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all" placeholder="(555) 555-5555" type="tel"/>
</div>
<div>
<label className="block text-xs font-bold text-slate-500 uppercase mb-1">Message / Preferred Time</label>
<textarea className="w-full border border-slate-200 rounded-xl px-4 py-3 bg-slate-50 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all" placeholder="Preferred dates, times, and insurance information..." rows="3"></textarea>
</div>
<div className="pt-2">
<button className="w-full bg-brand hover:bg-[#055a91] text-white font-bold text-lg py-4 rounded-xl transition-all shadow-lg shadow-sky-900/10 flex items-center justify-center gap-2" type="button">
                                Submit Request
                            </button>
<p className="text-center text-xs text-slate-400 mt-3">* Our team will contact you to confirm.</p>

<p className="hidden">Connect to email autoresponder and office notification system.</p>
</div>
</form>
</div>
</div>
</div>
</section>

<footer className="pt-20 pb-10 bg-slate-900 text-slate-300" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="space-y-6">
<a className="flex items-center gap-2 bg-white/10 p-2 rounded-lg w-fit" href="#">

<span className="text-xl font-bold tracking-tight text-white">Singh and Smile</span>
</a>
<p className="font-medium leading-relaxed opacity-80">
                        Pediatric Dentistry You Can Trust. Preventative and restorative dental services for children.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand transition-all text-white" href="https://www.facebook.com/singhandsmiledental/">
<iconify-icon icon="solar:facebook-bold"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand transition-all text-white" href="https://www.instagram.com/singhandsmiledental/">
<iconify-icon icon="solar:instagram-bold"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="font-bold mb-6 text-white text-lg">Contact Us</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3 font-medium">
<iconify-icon className="text-brand shrink-0 text-xl" icon="solar:map-point-linear"></iconify-icon>
<span>180 South St.<br/>New Providence, NJ</span>
</li>
<li className="flex items-center gap-3 font-medium">
<iconify-icon className="text-brand shrink-0 text-xl" icon="solar:phone-calling-linear"></iconify-icon>
<span>908-312-7300</span>
</li>
<li className="flex items-center gap-3 font-medium">
<iconify-icon className="text-brand shrink-0 text-xl" icon="solar:letter-linear"></iconify-icon>
<span>info@singhandsmile.com</span>
</li>
</ul>
</div>

<div>
<h4 className="font-bold mb-6 text-white text-lg">Working Hours</h4>
<ul className="space-y-3 font-medium">
<li className="flex justify-between border-b border-white/10 pb-2">
<span>Mon - Fri</span>
<span className="text-white">9am - 5pm</span>
</li>
<li className="flex justify-between border-b border-white/10 pb-2">
<span>Saturday</span>
<span className="text-slate-500">Closed</span>
</li>
<li className="flex justify-between border-b border-white/10 pb-2">
<span>Sunday</span>
<span className="text-slate-500">Closed</span>
</li>
</ul>
</div>

<div>
<h4 className="font-bold mb-6 text-white text-lg">Resources</h4>
<ul className="space-y-3 font-medium">
<li><a className="hover:text-brand transition-colors" href="#new-patients">New Patient Forms</a></li>
<li><a className="hover:text-brand transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-brand transition-colors" href="#about">Meet the Team</a></li>
<li><a className="hover:text-brand transition-colors" href="#book">Book Appointment</a></li>
</ul>
</div>
</div>

<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="font-medium text-sm opacity-60">© 2026 Singh and Smile. All Rights Reserved.</p>
<div className="flex items-center gap-2 opacity-80">
<img alt="ABPD" className="h-8 mix-blend-screen grayscale opacity-50" src="https://singhandsmile.com/wp-content/uploads/2019/04/ABPD-BoardCertified-300x64.jpg"/>
</div>
</div>
</div>
</footer>



    </>
  );
}
