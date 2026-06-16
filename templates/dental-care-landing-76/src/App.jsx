import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
heading: ['Poppins', 'sans-serif'],
},
colors: {
brand: {
50: '#f2fcf9',
100: '#d1f4eb',
200: '#a3e8db',
500: '#00d084',
600: '#006451', // PHC Green
700: '#005041',
800: '#003c31',
900: '#002821',
},
gold: {
500: '#CEA052', // PHC Accent Gold
}
},
boxShadow: {
'soft': '0 2px 10px rgba(0, 0, 0, 0.03)',
'card': '0 0 0 1px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.04)',
'card-hover': '0 0 0 1px rgba(0, 100, 81, 0.2), 0 8px 30px rgba(0,0,0,0.08)',
},
letterSpacing: {
tight: '-0.02em',
tighter: '-0.04em',
}
}
}
}



        // Initialize Icons
        lucide.createIcons();

        // Mobile Menu
        function toggleMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('open');
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-white border-b border-gray-100 hidden lg:block" style={{}}>
<div className="max-w-7xl mx-auto px-6 py-2 flex justify-end items-center gap-6 text-xs font-medium text-gray-500" style={{}}>
<a className="hover:text-brand-600 transition-colors" href="/your-visit/appointments/">Make an Appointment</a>
<a className="hover:text-brand-600 transition-colors" href="https://mychart.ochin.org/PHealthCenter/Authentication/Login" target="_blank">MyChart</a>
<a className="flex items-center gap-1.5 hover:text-brand-600 transition-colors" href="tel:+17075597500">
<svg className="lucide lucide-phone w-3 h-3" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg> (707) 559-7500
            </a>
<a className="hover:text-brand-600 transition-colors" href="/providers/">Meet Our Providers</a>
<a className="text-brand-600 hover:text-brand-700" href="/donate/">Donate</a>
<div className="flex items-center gap-3 pl-3 border-l border-gray-200" style={{}}>
<button aria-label="Search" className="hover:text-brand-600"><svg className="lucide lucide-search w-3.5 h-3.5" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg></button>
<div className="flex items-center gap-1 cursor-pointer hover:text-brand-600">
<svg className="lucide lucide-globe w-3.5 h-3.5" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg> EN
                </div>
</div>
</div>
</div>

<nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/80" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center justify-between h-20">

<a className="flex-shrink-0" href="https://phealthcenter.org">
<img alt="Petaluma Health Center" className="h-12 w-auto" src="https://phealthcenter.org/wp-content/uploads/2025/08/Layer_1.svg"/>
</a>

<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-600" style={{}}>
<a className="hover:text-brand-600 transition-colors" href="https://phealthcenter.org/your-visit/">Prepare for Your Visit</a>
<a className="hover:text-brand-600 transition-colors" href="/locations">Locations</a>
<a className="text-brand-600 font-semibold bg-brand-50 px-3 py-1.5 rounded-full" href="/services">Services</a>
<a className="hover:text-brand-600 transition-colors" href="https://phealthcenter.org/insurance-and-costs/">Insurance &amp; Costs</a>
<a className="hover:text-brand-600 transition-colors" href="https://phealthcenter.org/about-us/">About Us</a>
</div>

<button className="lg:hidden p-2 text-gray-900" onclick="toggleMenu()" style={{}}>
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>

<div className="lg:hidden bg-white border-t border-gray-100 shadow-xl" id="mobile-menu" style={{}}>
<div className="px-6 py-6 flex flex-col gap-4 text-sm font-medium">
<a className="text-gray-900" href="/your-visit/" style={{}}>Prepare for Your Visit</a>
<a className="text-gray-900" href="/locations" style={{}}>Locations</a>
<a className="text-brand-600" href="/services">Services</a>
<a className="text-gray-900" href="/insurance-and-costs/" style={{}}>Insurance &amp; Costs</a>
<a className="text-gray-900" href="/about-us/" style={{}}>About Us</a>
<hr className="border-gray-100 my-2" style={{}}/>
<a className="text-brand-600 flex items-center gap-2" href="https://mychart.ochin.org/"><svg className="lucide lucide-user w-4 h-4" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> MyChart</a>
<a className="text-gray-600 flex items-center gap-2" href="tel:+17075597500" style={{}}><svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg> Call Us</a>
</div>
</div>
</nav>

<div className="lg:py-16 max-w-7xl mr-auto ml-auto pt-12 pr-6 pb-12 pl-6">

<nav className="flex items-center gap-2 text-xs text-gray-400 mb-8 font-medium tracking-wide uppercase reveal" style={{}}>
<a className="hover:text-brand-600 transition-colors" href="https://phealthcenter.org/">Home</a>
<svg className="lucide lucide-chevron-right w-3 h-3" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
<a className="hover:text-brand-600 transition-colors" href="https://phealthcenter.org/services/">Services</a>
<svg className="lucide lucide-chevron-right w-3 h-3" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
<span className="text-brand-600">Dental Care</span>
</nav>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

<main className="lg:col-span-8 reveal delay-100">
<h1 className="lg:text-5xl text-4xl font-semibold text-gray-900 tracking-tighter font-heading mb-6" style={{}}>
                    Dental Care
                </h1>
<p className="text-lg text-gray-500 leading-relaxed mb-10" style={{}}>
                    We offer diagnostic, preventative, restorative, surgical, and specialized areas of care to help keep your teeth and gums healthy and to keep you smiling.
                </p>

<div className="rounded-2xl overflow-hidden shadow-card mb-12 border border-gray-100 group" style={{}}>
<img alt="Dental providers at Petaluma Health Center" className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105" src="https://phealthcenter.org/wp-content/uploads/2025/10/petaluma-health-center_dental-care01-1024x683.webp"/>
</div>

<div className="mb-16">
<h2 className="font-heading font-semibold text-2xl text-gray-900 tracking-tight mb-6" style={{}}>Our Dental Services</h2>
<p className="text-gray-500 mb-8 leading-relaxed" style={{}}>
                        Oral health is essential for your well-being. Dental checkups and cleanings are important for healthy teeth and gums and for diagnosing and treating dental problems. Our friendly, high quality dental team is here to help you keep your teeth healthy.
                    </p>
<div className="grid sm:grid-cols-2 gap-4">

<div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:border-brand-200 transition-colors" style={{}}>
<div className="mt-0.5 p-1 bg-brand-50 rounded-full text-brand-600"><svg className="lucide lucide-check w-3.5 h-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<div><span className="text-xs text-gray-500" style={{}}>Dental Exams and X-Rays</span></div>
</div>
<div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:border-brand-200 transition-colors" style={{}}>
<div className="mt-0.5 p-1 bg-brand-50 rounded-full text-brand-600"><svg className="lucide lucide-check w-3.5 h-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<div><span className="text-xs text-gray-500" style={{}}>Adult Patients, Children &amp; Teens</span></div>
</div>
<div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:border-brand-200 transition-colors" style={{}}>
<div className="mt-0.5 p-1 bg-brand-50 rounded-full text-brand-600"><svg className="lucide lucide-check w-3.5 h-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<div><span className="text-xs text-gray-500" style={{}}>Specialized for children</span></div>
</div>
<div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:border-brand-200 transition-colors" style={{}}>
<div className="mt-0.5 p-1 bg-brand-50 rounded-full text-brand-600"><svg className="lucide lucide-check w-3.5 h-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<div><span className="text-xs text-gray-500" style={{}}>Cleanings, Sealants, Fluoride</span></div>
</div>
<div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:border-brand-200 transition-colors" style={{}}>
<div className="mt-0.5 p-1 bg-brand-50 rounded-full text-brand-600"><svg className="lucide lucide-check w-3.5 h-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<div><span className="text-xs text-gray-500" style={{}}>Fillings and Crowns</span></div>
</div>
<div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:border-brand-200 transition-colors" style={{}}>
<div className="mt-0.5 p-1 bg-brand-50 rounded-full text-brand-600"><svg className="lucide lucide-check w-3.5 h-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<div><span className="text-xs text-gray-500" style={{}}>Root Canals</span></div>
</div>
<div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:border-brand-200 transition-colors" style={{}}>
<div className="mt-0.5 p-1 bg-brand-50 rounded-full text-brand-600"><svg className="lucide lucide-check w-3.5 h-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<div><span className="text-xs text-gray-500" style={{}}>Bridges, Partials, Dentures</span></div>
</div>
<div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:border-brand-200 transition-colors" style={{}}>
<div className="mt-0.5 p-1 bg-brand-50 rounded-full text-brand-600"><svg className="lucide lucide-check w-3.5 h-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<div><span className="text-xs text-gray-500" style={{}}>Extractions</span></div>
</div>
</div>
</div>

<div className="bg-brand-50/50 rounded-2xl p-8 border border-brand-100 mb-12">
<h2 className="font-heading font-semibold text-2xl text-gray-900 tracking-tight mb-4" style={{}}>Costs Overview</h2>
<p className="text-brand-700 font-medium mb-4">PHC offers free or low cost dental care for children, teens and pregnant women.</p>
<p className="text-gray-500 text-sm leading-relaxed mb-6" style={{}}>
                        A steady regimen of brushing, flossing, and visiting your dentist regularly helps maintain a healthy smile. We welcome residents who are insured through Medi-Cal or who are uninsured or underinsured. Visa, MasterCard, AMEX, Discover, checks and cash are accepted.
                    </p>
<a className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700 hover:underline decoration-brand-200 underline-offset-4 transition-all" href="/your-visit/forms#insurance-costs">
                        View Our Sliding Fee Scale <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 bg-gray-900 rounded-2xl text-white shadow-card" style={{}}>
<div>
<h2 className="font-heading font-semibold text-xl tracking-tight mb-2">Get Started with Telehealth</h2>
<p className="text-gray-400 text-sm" style={{}}>Access care from the comfort of your home.</p>
</div>
<div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
<a className="px-5 py-2.5 bg-white text-gray-900 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors text-center" href="http://webex.com/downloads" style={{}} target="_blank">
                            Download Webex
                        </a>
<a className="px-5 py-2.5 bg-brand-600 text-white rounded-lg text-sm font-medium hover:bg-brand-500 transition-colors text-center" href="/services/telehealth">
                            How it Works
                        </a>
</div>
</div>
</main>

<aside className="lg:col-span-4 space-y-6 reveal delay-200">

<div className="bg-white p-6 rounded-2xl shadow-card border border-gray-100 lg:sticky lg:top-24" style={{}}>
<h3 className="font-heading font-semibold text-lg text-gray-900 mb-4" style={{}}>Make an Appointment</h3>
<p className="text-sm text-gray-500 mb-6" style={{}}>Our team is ready to help you maintain your dental health.</p>
<a className="w-full flex items-center justify-center gap-2 bg-brand-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-brand-700 transition-all shadow-md shadow-brand-500/20 mb-6 group" href="tel:+17075597500">
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg> (707) 559-7500
                    </a>
<div className="space-y-4 pt-6 border-t border-gray-100" style={{}}>
<h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider" style={{}}>Available Locations</h4>

<a className="group block" href="https://phealthcenter.org/locations/petaluma-health-center/">
<div className="flex items-start gap-3">
<svg className="lucide lucide-map-pin w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<div>
<p className="text-sm font-medium text-gray-700 group-hover:text-brand-600 transition-colors" style={{}}>Petaluma Health Center</p>
<p className="text-xs text-gray-400 mt-0.5" style={{}}>1179 N. McDowell Blvd</p>
</div>
</div>
</a>

<a className="group block" href="https://phealthcenter.org/locations/rohnert-park-health-center/">
<div className="flex items-start gap-3">
<svg className="lucide lucide-map-pin w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<div>
<p className="text-sm font-medium text-gray-700 group-hover:text-brand-600 transition-colors" style={{}}>Rohnert Park Health Center</p>
<p className="text-xs text-gray-400 mt-0.5" style={{}}>5900 State Farm Dr</p>
</div>
</div>
</a>

<a className="group block" href="https://phealthcenter.org/locations/cha-dental-clinic/">
<div className="flex items-start gap-3">
<svg className="lucide lucide-map-pin w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<div>
<p className="text-sm font-medium text-gray-700 group-hover:text-brand-600 transition-colors" style={{}}>CHA Dental Clinic</p>
<p className="text-xs text-gray-400 mt-0.5" style={{}}>65 Third St, Point Reyes Station</p>
</div>
</div>
</a>

<a className="group block" href="https://phealthcenter.org/locations/petaluma-mobile-unit/">
<div className="flex items-start gap-3">
<svg className="lucide lucide-truck w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" data-lucide="truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
<div>
<p className="text-sm font-medium text-gray-700 group-hover:text-brand-600 transition-colors" style={{}}>Petaluma Mobile Unit</p>
<p className="text-xs text-gray-400 mt-0.5" style={{}}>Check schedule</p>
</div>
</div>
</a>
</div>
</div>
</aside>
</div>

<section className="mt-24 pt-16 border-t border-gray-200" style={{}}>
<div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
<div>
<h2 className="font-heading font-semibold text-3xl text-gray-900 tracking-tight mb-3" style={{}}>Meet Our Dental Team</h2>
<p className="text-gray-500" style={{}}>Board certified professionals dedicated to your smile.</p>
</div>
<a className="text-sm font-medium text-brand-600 hover:text-brand-700 flex items-center gap-1" href="/providers/">
                    See All Providers <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group">
<div className="aspect-[4/5] bg-brand-50 relative overflow-hidden">
<img alt="Anastasia Lester" className="w-full h-full object-cover object-top" src="https://phealthcenter.org/wp-content/webp-express/webp-images/uploads/2025/08/phc-profile-placeholder.png.webp"/>
</div>
<div className="p-5">
<h3 className="font-semibold text-gray-900 group-hover:text-brand-600 transition-colors" style={{}}>Anastasia Lester, DDS</h3>
<p className="text-xs text-gray-500 font-medium uppercase tracking-wide mt-1 mb-3" style={{}}>Dentist</p>
<div className="flex flex-col gap-2 text-xs text-gray-500" style={{}}>
<div className="flex items-center gap-2">
<svg className="lucide lucide-map-pin w-3 h-3 text-gold-500" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Petaluma
                            </div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-globe w-3 h-3 text-gold-500" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg> English
                            </div>
</div>
</div>
</div>

<div className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group">
<div className="aspect-[4/5] bg-brand-50 relative overflow-hidden">
<img alt="Angel Ceballos" className="w-full h-full object-cover object-top" src="https://phealthcenter.org/wp-content/webp-express/webp-images/uploads/2025/08/phc-profile-placeholder.png.webp"/>
</div>
<div className="p-5">
<h3 className="font-semibold text-gray-900 group-hover:text-brand-600 transition-colors" style={{}}>Angel Ceballos, DDS</h3>
<p className="text-xs text-gray-500 font-medium uppercase tracking-wide mt-1 mb-3" style={{}}>Dentist</p>
<div className="flex flex-col gap-2 text-xs text-gray-500" style={{}}>
<div className="flex items-center gap-2">
<svg className="lucide lucide-map-pin w-3 h-3 text-gold-500" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Rohnert Park
                            </div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-globe w-3 h-3 text-gold-500" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg> English, Spanish
                            </div>
</div>
</div>
</div>

<div className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group">
<div className="aspect-[4/5] bg-brand-50 relative overflow-hidden">
<img alt="Corey Bornstein" className="w-full h-full object-cover object-top" src="https://phealthcenter.org/wp-content/webp-express/webp-images/uploads/2025/08/phc-profile-placeholder.png.webp"/>
</div>
<div className="p-5">
<h3 className="font-semibold text-gray-900 group-hover:text-brand-600 transition-colors" style={{}}>Corey Bornstein, DDS</h3>
<p className="text-xs text-gray-500 font-medium uppercase tracking-wide mt-1 mb-3" style={{}}>Dentist</p>
<div className="flex flex-col gap-2 text-xs text-gray-500" style={{}}>
<div className="flex items-center gap-2">
<svg className="lucide lucide-map-pin w-3 h-3 text-gold-500" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Petaluma
                            </div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-globe w-3 h-3 text-gold-500" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg> English
                            </div>
</div>
</div>
</div>

<div className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group">
<div className="aspect-[4/5] bg-brand-50 relative overflow-hidden">

<img alt="Jacqueline Uy" className="w-full h-full object-cover object-top" src="https://phealthcenter.org/wp-content/webp-express/webp-images/uploads/2025/10/jacqueline-uy-dds_headshot.jpg.webp"/>
</div>
<div className="p-5">
<h3 className="font-semibold text-gray-900 group-hover:text-brand-600 transition-colors" style={{}}>Jacqueline Uy, DDS</h3>
<p className="text-xs text-gray-500 font-medium uppercase tracking-wide mt-1 mb-3" style={{}}>Dentist</p>
<div className="flex flex-col gap-2 text-xs text-gray-500" style={{}}>
<div className="flex items-center gap-2">
<svg className="lucide lucide-map-pin w-3 h-3 text-gold-500" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Rohnert Park
                            </div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-globe w-3 h-3 text-gold-500" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg> English, Tagalog
                            </div>
</div>
</div>
</div>

<div className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group">
<div className="aspect-[4/5] bg-brand-50 relative overflow-hidden">
<img alt="Jason Jaber" className="w-full h-full object-cover object-top" src="https://phealthcenter.org/wp-content/webp-express/webp-images/uploads/2025/08/phc-profile-placeholder.png.webp"/>
</div>
<div className="p-5">
<h3 className="font-semibold text-gray-900 group-hover:text-brand-600 transition-colors" style={{}}>Jason Jaber, DDS</h3>
<p className="text-xs text-gray-500 font-medium uppercase tracking-wide mt-1 mb-3" style={{}}>Lead Dentist</p>
<div className="flex flex-col gap-2 text-xs text-gray-500" style={{}}>
<div className="flex items-center gap-2">
<svg className="lucide lucide-map-pin w-3 h-3 text-gold-500" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Multiple Locations
                            </div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-globe w-3 h-3 text-gold-500" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg> English
                            </div>
</div>
</div>
</div>

<div className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group">
<div className="aspect-[4/5] bg-brand-50 relative overflow-hidden">
<img alt="Joanne Ngo" className="w-full h-full object-cover object-top" src="https://phealthcenter.org/wp-content/webp-express/webp-images/uploads/2025/08/phc-profile-placeholder.png.webp"/>
</div>
<div className="p-5">
<h3 className="font-semibold text-gray-900 group-hover:text-brand-600 transition-colors" style={{}}>Joanne Ngo, DDS</h3>
<p className="text-xs text-gray-500 font-medium uppercase tracking-wide mt-1 mb-3" style={{}}>Dentist</p>
<div className="flex flex-col gap-2 text-xs text-gray-500" style={{}}>
<div className="flex items-center gap-2">
<svg className="lucide lucide-map-pin w-3 h-3 text-gold-500" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Rohnert Park
                            </div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-globe w-3 h-3 text-gold-500" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg> English
                            </div>
</div>
</div>
</div>
</div>
</section>
</div>

<footer className="bg-white border-t border-gray-200 pt-16 pb-8" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">

<div className="col-span-2 lg:col-span-2">
<img alt="PHC" className="h-10 w-auto mb-6" src="https://phealthcenter.org/wp-content/uploads/2025/08/Logo-1.svg"/>
<div className="text-sm text-gray-500 space-y-2 mb-6" style={{}}>
<p><a className="font-semibold text-gray-900 hover:text-brand-600" href="tel:+17075597500" style={{}}>(707) 559-7500</a></p>
<p>1179 North McDowell BlvdPetaluma, CA 94954</p>
</div>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-brand-600 hover:text-white transition-all" href="https://www.facebook.com/PetalumaHealthCenter" style={{}} target="_blank"><svg className="lucide lucide-facebook w-4 h-4" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
<a className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-brand-600 hover:text-white transition-all" href="http://instagram.com/petalumahealthcntr/" style={{}} target="_blank"><svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-brand-600 hover:text-white transition-all" href="https://vimeo.com/petalumahealthcenter" style={{}} target="_blank"><svg className="lucide lucide-video w-4 h-4" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg></a>
</div>
</div>

<div>
<h5 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4" style={{}}>Quick Links</h5>
<ul className="space-y-3 text-sm text-gray-500" style={{}}>
<li><a className="hover:text-brand-600 transition-colors" href="/your-visit/">Prepare for Your Visit</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="/providers/">Meet Our Providers</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="/services/">Services</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="/locations/">Locations</a></li>
</ul>
</div>

<div>
<h5 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4" style={{}}>Resources</h5>
<ul className="space-y-3 text-sm text-gray-500" style={{}}>
<li><a className="hover:text-brand-600 transition-colors" href="/insurance-and-costs/">Insurance &amp; Costs</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="/resources/">Patient Resources</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="/donate/">Donate</a></li>
</ul>
</div>

<div>
<h5 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4" style={{}}>Organization</h5>
<ul className="space-y-3 text-sm text-gray-500" style={{}}>
<li><a className="hover:text-brand-600 transition-colors" href="/about-us/">About Us</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="/about-us/contact/">Contact Us</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="/careers/">Careers</a></li>
</ul>
</div>
</div>

<div className="border-t border-gray-100 pt-10 pb-10" style={{}}>
<div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
<img alt="Heart Assoc" className="h-16 w-auto" src="https://phealthcenter.org/wp-content/webp-express/webp-images/uploads/2025/08/Placeholder-Image-3.png.webp"/>
<img alt="HRSA" className="h-16 w-auto" src="https://phealthcenter.org/wp-content/webp-express/webp-images/uploads/2025/08/76dee59eb5c24e621e8c0c96163dc484e9721e64.jpg.webp"/>
<img alt="Quality Leader" className="h-16 w-auto" src="https://phealthcenter.org/wp-content/webp-express/webp-images/uploads/2025/08/9b93f533432ce0b0a6730fd1086352d0e84ddcb8-300x297.png.webp"/>
<img alt="High Value" className="h-16 w-auto" src="https://phealthcenter.org/wp-content/webp-express/webp-images/uploads/2025/08/70208a07b448d2e503967c88cc124d6a94ea5da8-300x300.png.webp"/>
<img alt="Advancing HIT" className="h-16 w-auto" src="https://phealthcenter.org/wp-content/webp-express/webp-images/uploads/2025/08/a029f5d9a8ce9451fd238589edd4056b86437c0b-300x297.png.webp"/>
</div>
</div>

<div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4" style={{}}>
<p>© 2025 Petaluma Health Center. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-gray-600" href="#" style={{}}>Privacy Policy</a>
<a className="hover:text-gray-600" href="#" style={{}}>Terms of Service</a>
<a className="hover:text-gray-600" href="#" style={{}}>Cookies Settings</a>
</div>
</div>
<div className="mt-4 text-[10px] text-gray-400 text-center md:text-left max-w-4xl" style={{}}>
                Petaluma Health Center sites are Federal Tort Claims Act (FTCA) deemed facilities. Petaluma Health Center is a 501 (c)3 non-profit community-based Federally Qualified Health Center (FQHC) offering comprehensive medical, dental, mental health, and specialty healthcare services.
            </div>
</div>
</footer>


    </>
  );
}
