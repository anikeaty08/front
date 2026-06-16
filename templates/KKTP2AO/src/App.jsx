import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
      document.querySelectorAll('.service-tab').forEach(tab => {
        tab.addEventListener('click', function() {
          document.querySelectorAll('.service-tab').forEach(t => t.classList.remove('active', 'bg-blue-700', 'text-white'));
          this.classList.add('active', 'bg-blue-700', 'text-white');
          document.querySelectorAll('#service-content > div').forEach(c => c.classList.add('hidden'));
          document.querySelector(`#service-content > div[data-content="${this.dataset.tab}"]`).classList.remove('hidden');
        });
      });
    


      document.querySelectorAll('.portfolio-filter').forEach(btn => {
        btn.addEventListener('click', function() {
          document.querySelectorAll('.portfolio-filter').forEach(b => b.classList.remove('active', 'bg-blue-700', 'text-white'));
          this.classList.add('active', 'bg-blue-700', 'text-white');
          const filter = this.dataset.filter;
          document.querySelectorAll('.portfolio-card').forEach(card => {
            card.style.display = (filter === 'all' || card.dataset.type === filter) ? 'block' : 'none';
          });
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="bg-white/90 backdrop-blur sticky top-0 z-50 shadow">
<div className="container mx-auto flex justify-between items-center py-4 px-6">
<div className="flex items-center gap-3">
<img alt="Medico Construction Logo" className="w-10 h-10 rounded-full border-2 border-blue-600" src="https://i.ibb.co/9TL8h7n/medico-logo.png"/>
<span className="text-2xl font-bold text-blue-700">Medico Construction</span>
</div>
<nav className="hidden md:flex gap-8 text-lg">
<a className="hover:text-blue-600 transition" href="#about">About Us</a>
<a className="hover:text-blue-600 transition" href="#services">Services</a>
<a className="hover:text-blue-600 transition" href="#portfolio">Portfolio</a>
<a className="hover:text-blue-600 transition" href="#why">Why Choose Us</a>
<a className="hover:text-blue-600 transition" href="#testimonials">Testimonials</a>
<a className="hover:text-blue-600 transition" href="#contact">Contact</a>
<a className="hover:text-blue-600 transition" href="#blog">Blog</a>
</nav>
<a className="ml-4 px-4 py-2 bg-blue-700 text-white rounded-lg font-semibold shadow hover:bg-blue-800 transition hidden md:inline-block" href="#contact">Get Your Free Consultation</a>
<button className="md:hidden p-2 rounded hover:bg-blue-50" id="menuBtn"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
</div>
<div className="md:hidden hidden bg-white px-6 pb-4" id="mobileNav">
<a className="block py-2" href="#about">About Us</a>
<a className="block py-2" href="#services">Services</a>
<a className="block py-2" href="#portfolio">Portfolio</a>
<a className="block py-2" href="#why">Why Choose Us</a>
<a className="block py-2" href="#testimonials">Testimonials</a>
<a className="block py-2" href="#contact">Contact</a>
<a className="block py-2" href="#blog">Blog</a>
<a className="block py-2 font-semibold text-blue-700" href="#contact">Get Your Free Consultation</a>
</div>
</header>

<section className="parallax-bg relative h-[60vh] flex items-center justify-center text-center shadow-lg">
<div className="absolute inset-0 bg-blue-900/70"></div>
<div className="relative z-10 max-w-2xl mx-auto px-4">
<h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow mb-4">Building the Future of Healthcare Spaces</h1>
<p className="text-xl md:text-2xl text-blue-100 mb-8">Expert Construction for Medical Professionals in Surrey</p>
<a className="inline-block px-8 py-3 bg-green-500 hover:bg-green-600 text-white text-lg font-semibold rounded-full shadow-lg transition" href="#contact">Get Your Free Consultation</a>
</div>
</section>

<section className="container mx-auto -mt-12 relative z-20">
<div className="bg-white rounded-xl shadow-lg px-6 py-8 flex flex-col md:flex-row gap-6 justify-center items-center">
<div className="flex flex-col items-center text-center flex-1">
<svg className="w-10 h-10 text-blue-600 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M3 7v4h18V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2zm0 6v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4H3z"></path></svg>
<span className="font-semibold">Design &amp; Build</span>
</div>
<div className="flex flex-col items-center text-center flex-1">
<svg className="w-10 h-10 text-green-600 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M9 17v-2a4 4 0 0 1 4-4h6M9 17H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"></path></svg>
<span className="font-semibold">Project Management</span>
</div>
<div className="flex flex-col items-center text-center flex-1">
<svg className="w-10 h-10 text-yellow-600 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M19 14v-4a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v4M5 10V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3"></path></svg>
<span className="font-semibold">Renovations</span>
</div>
<div className="flex flex-col items-center text-center flex-1">
<svg className="w-10 h-10 text-blue-400 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M14.31 8l5.74 9.94-1.28 2.22a2 2 0 0 1-2.72.73l-2.85-1.65"></path><path d="M9.69 16L3.95 6.06l1.28-2.22a2 2 0 0 1 2.72-.73l2.85 1.65"></path></svg>
<span className="font-semibold">Medical Equipment Setup</span>
</div>
</div>
</section>

<section className="container mx-auto px-6 py-16" id="about">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl font-bold text-blue-800 mb-4">About Medico Construction</h2>
<p className="mb-4 text-lg text-gray-700">
          With over <span className="font-bold text-blue-700">15 years of experience</span>, Medico Construction is Surrey’s trusted specialist in medical space design and construction. Our mission is to deliver custom medical environments that enhance patient care and support healthcare professionals.
        </p>
<p className="mb-6">
          From initial consultation to the final handover, our dedicated team manages every aspect of your project. We are committed to innovation, compliance, and delivering spaces that meet the highest standards of quality, efficiency, and safety.
        </p>
<div className="flex gap-6 mt-6">
<img alt="Team member" className="w-14 h-14 rounded-full border-2 border-blue-600 shadow-lg" src="https://randomuser.me/api/portraits/men/32.jpg"/>
<img alt="Team member" className="w-14 h-14 rounded-full border-2 border-blue-600 shadow-lg" src="https://randomuser.me/api/portraits/women/44.jpg"/>
<img alt="Team member" className="w-14 h-14 rounded-full border-2 border-blue-600 shadow-lg" src="https://randomuser.me/api/portraits/men/65.jpg"/>
</div>
</div>
<div className="bg-blue-50 rounded-xl p-8 shadow flex flex-col items-center justify-center">
<svg className="w-12 h-12 text-green-600 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M12 20l9-5V9l-9-5-9 5v6l9 5z"></path></svg>
<blockquote className="text-xl italic text-blue-900 mb-4">
          “Medico Construction transformed our clinic with minimal disruption and unmatched professionalism. Their expertise in healthcare environments is outstanding.”
        </blockquote>
<figcaption className="text-blue-700 font-semibold">— Dr. Sarah Patel, GP Clinic Owner</figcaption>
</div>
</div>
</section>

<section className="bg-gray-50 py-16" id="services">
<div className="container mx-auto px-6">
<h2 className="text-3xl font-bold text-blue-800 mb-10 text-center">Our Services</h2>
<div className="max-w-3xl mx-auto">
<div className="flex flex-col md:flex-row gap-4 mb-8">
<button className="service-tab active flex-1 px-4 py-2 bg-blue-700 text-white rounded-lg font-semibold transition hover:bg-blue-800" data-tab="design">Design &amp; Build</button>
<button className="service-tab flex-1 px-4 py-2 bg-white text-blue-700 border border-blue-700 rounded-lg font-semibold transition hover:bg-blue-50" data-tab="management">Project Management</button>
<button className="service-tab flex-1 px-4 py-2 bg-white text-blue-700 border border-blue-700 rounded-lg font-semibold transition hover:bg-blue-50" data-tab="renovations">Renovations</button>
<button className="service-tab flex-1 px-4 py-2 bg-white text-blue-700 border border-blue-700 rounded-lg font-semibold transition hover:bg-blue-50" data-tab="equipment">Medical Equipment Setup</button>
</div>
<div className="bg-white rounded-lg shadow p-8 transition-all" id="service-content">
<div data-content="design">
<h3 className="text-2xl font-bold text-blue-700 mb-2">Design &amp; Build</h3>
<p className="mb-2">Custom architectural design and construction for medical offices, clinics, and healthcare facilities. We ensure your space is functional, compliant, and patient-friendly, from concept to completion.</p>
<ul className="list-disc ml-6 text-blue-800">
<li>Space planning &amp; interior design</li>
<li>Turnkey construction solutions</li>
<li>Healthcare regulations compliance</li>
</ul>
</div>
<div className="hidden" data-content="management">
<h3 className="text-2xl font-bold text-blue-700 mb-2">Project Management</h3>
<p className="mb-2">Comprehensive project oversight, ensuring timely delivery, budget adherence, and quality assurance throughout every stage of your medical construction project.</p>
<ul className="list-disc ml-6 text-blue-800">
<li>Dedicated project manager</li>
<li>Transparent communication</li>
<li>Vendor &amp; contractor coordination</li>
</ul>
</div>
<div className="hidden" data-content="renovations">
<h3 className="text-2xl font-bold text-blue-700 mb-2">Renovations &amp; Expansions</h3>
<p className="mb-2">Expert renovations and expansions for existing medical spaces. Upgrade functionality, aesthetics, and compliance with the latest healthcare standards.</p>
<ul className="list-disc ml-6 text-blue-800">
<li>Layout optimization</li>
<li>Minimal operational disruption</li>
<li>Safety and infection control upgrades</li>
</ul>
</div>
<div className="hidden" data-content="equipment">
<h3 className="text-2xl font-bold text-blue-700 mb-2">Medical Equipment Setup</h3>
<p className="mb-2">Professional installation and configuration of medical equipment in new or renovated spaces, ensuring safe, efficient operation and compliance with healthcare regulations.</p>
<ul className="list-disc ml-6 text-blue-800">
<li>Equipment sourcing &amp; installation</li>
<li>Integration with facility systems</li>
<li>Training and support</li>
</ul>
</div>
</div>
</div>
</div>

</section>

<section className="container mx-auto px-6 py-16" id="portfolio">
<h2 className="text-3xl font-bold text-blue-800 mb-10 text-center">Featured Projects</h2>
<div className="flex flex-wrap justify-center gap-4 mb-8">
<button className="portfolio-filter active px-4 py-2 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition" data-filter="all">All</button>
<button className="portfolio-filter px-4 py-2 bg-white text-blue-700 border border-blue-700 rounded-lg font-semibold hover:bg-blue-50 transition" data-filter="dental">Dental</button>
<button className="portfolio-filter px-4 py-2 bg-white text-blue-700 border border-blue-700 rounded-lg font-semibold hover:bg-blue-50 transition" data-filter="gp">GP Office</button>
<button className="portfolio-filter px-4 py-2 bg-white text-blue-700 border border-blue-700 rounded-lg font-semibold hover:bg-blue-50 transition" data-filter="clinic">Clinic</button>
</div>
<div className="grid md:grid-cols-3 gap-8" id="portfolio-grid">

<div className="portfolio-card bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden" data-type="dental">
<img alt="Dental Office" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="p-6">
<h4 className="font-bold text-blue-700 text-lg mb-2">SmileBright Dental Clinic</h4>
<p className="text-gray-700 mb-3">Full design &amp; build of a modern dental practice. Overcame tight urban space constraints and strict hygiene requirements.</p>
<span className="inline-block text-xs bg-blue-100 text-blue-700 rounded px-2 py-1 font-semibold">Dental</span>
</div>
</div>

<div className="portfolio-card bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden" data-type="gp">
<img alt="GP Office" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="p-6">
<h4 className="font-bold text-blue-700 text-lg mb-2">Surrey Family Practice</h4>
<p className="text-gray-700 mb-3">Renovation and expansion of a GP office. Completed with zero downtime for patients and staff.</p>
<span className="inline-block text-xs bg-green-100 text-green-700 rounded px-2 py-1 font-semibold">GP Office</span>
</div>
</div>

<div className="portfolio-card bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden" data-type="clinic">
<img alt="Clinic" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="p-6">
<h4 className="font-bold text-blue-700 text-lg mb-2">WellCare Medical Centre</h4>
<p className="text-gray-700 mb-3">Turnkey construction for a multidisciplinary clinic. Met all accessibility and infection control standards.</p>
<span className="inline-block text-xs bg-yellow-100 text-yellow-700 rounded px-2 py-1 font-semibold">Clinic</span>
</div>
</div>
</div>

</section>

<section className="bg-blue-50 py-16" id="why">
<div className="container mx-auto px-6">
<h2 className="text-3xl font-bold text-blue-800 mb-10 text-center">Why Choose Medico Construction?</h2>
<div className="grid md:grid-cols-4 gap-8">
<div className="text-center">
<svg className="mx-auto w-12 h-12 text-blue-700 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M12 20l9-5V9l-9-5-9 5v6l9 5z"></path></svg>
<h4 className="font-semibold text-lg mb-1">Medical Expertise</h4>
<p className="text-gray-700">Specialized in healthcare design &amp; construction, fully compliant with all medical standards.</p>
</div>
<div className="text-center">
<svg className="mx-auto w-12 h-12 text-green-600 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M9 17v-2a4 4 0 0 1 4-4h6M9 17H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"></path></svg>
<h4 className="font-semibold text-lg mb-1">End-to-End Solutions</h4>
<p className="text-gray-700">Complete project management, from concept to handover.</p>
</div>
<div className="text-center">
<svg className="mx-auto w-12 h-12 text-yellow-600 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7"></path></svg>
<h4 className="font-semibold text-lg mb-1">Client-Centered</h4>
<p className="text-gray-700">Custom solutions, transparent communication, and on-time delivery.</p>
</div>
<div className="text-center">
<svg className="mx-auto w-12 h-12 text-green-500 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a10 10 0 0 1 10 10c0 5.5-4.5 10-10 10S2 17.5 2 12A10 10 0 0 1 12 2z"></path></svg>
<h4 className="font-semibold text-lg mb-1">Sustainability</h4>
<p className="text-gray-700">Energy-efficient, eco-friendly construction practices.</p>
</div>
</div>
</div>
</section>

<section className="container mx-auto px-6 py-16" id="testimonials">
<h2 className="text-3xl font-bold text-blue-800 mb-10 text-center">What Our Clients Say</h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-white rounded-xl shadow p-6 flex flex-col items-center hover:scale-105 transition">
<img alt="Client" className="w-16 h-16 rounded-full border-2 border-green-600 mb-4" src="https://randomuser.me/api/portraits/men/45.jpg"/>
<p className="italic mb-2 text-gray-800">"The Medico team handled every detail of our clinic renovation with care and efficiency. Highly recommended!"</p>
<span className="text-blue-700 font-semibold">Dr. Andrew Lee</span>
<span className="text-gray-500 text-sm">Dental Surgeon</span>
</div>
<div className="bg-white rounded-xl shadow p-6 flex flex-col items-center hover:scale-105 transition">
<img alt="Client" className="w-16 h-16 rounded-full border-2 border-yellow-600 mb-4" src="https://randomuser.me/api/portraits/women/51.jpg"/>
<p className="italic mb-2 text-gray-800">"Impressed by the professionalism and communication. Our new office is both beautiful and functional."</p>
<span className="text-blue-700 font-semibold">Dr. Emily Carter</span>
<span className="text-gray-500 text-sm">Family Physician</span>
</div>
<div className="bg-white rounded-xl shadow p-6 flex flex-col items-center hover:scale-105 transition">
<img alt="Client" className="w-16 h-16 rounded-full border-2 border-blue-400 mb-4" src="https://randomuser.me/api/portraits/men/22.jpg"/>
<p className="italic mb-2 text-gray-800">"From start to finish, Medico Construction exceeded our expectations. They truly understand medical spaces."</p>
<span className="text-blue-700 font-semibold">Dr. Michael Singh</span>
<span className="text-gray-500 text-sm">Clinic Owner</span>
</div>
</div>
</section>

<section className="bg-blue-50 py-16" id="contact">
<div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl font-bold text-blue-800 mb-4">Contact Medico Construction</h2>
<p className="mb-6 text-lg">Ready to transform your medical space? Request a free consultation or reach out with your project details.</p>
<div className="mb-4">
<span className="block text-blue-700 font-semibold">Address:</span>
<span>123 Healthway Ave, Surrey, BC</span>
</div>
<div className="mb-4">
<span className="block text-blue-700 font-semibold">Phone:</span>
<a className="text-blue-700 hover:underline" href="tel:+16045551234">+1 (604) 555-1234</a>
</div>
<div className="mb-4">
<span className="block text-blue-700 font-semibold">Email:</span>
<a className="text-blue-700 hover:underline" href="mailto:info@medicoconstruction.ca">info@medicoconstruction.ca</a>
</div>
</div>
<form className="bg-white rounded-xl shadow p-8 flex flex-col gap-4">
<div>
<label className="block font-semibold mb-1" htmlFor="name">Name</label>
<input className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-700" id="name" name="name" required="" type="text"/>
</div>
<div>
<label className="block font-semibold mb-1" htmlFor="email">Email</label>
<input className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-700" id="email" name="email" required="" type="email"/>
</div>
<div>
<label className="block font-semibold mb-1" htmlFor="phone">Phone</label>
<input className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-700" id="phone" name="phone" type="tel"/>
</div>
<div>
<label className="block font-semibold mb-1" htmlFor="details">Project Details</label>
<textarea className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-700" id="details" name="details" required="" rows="3"></textarea>
</div>
<button className="mt-2 px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition" type="submit">Send Inquiry</button>
<div className="mt-4">
<span className="block font-semibold text-blue-700 mb-2">Book a Consultation:</span>
<iframe className="w-full h-32 rounded border-2 border-blue-100" src="https://calendly.com/your-calendly-link/30min" title="Book Consultation"></iframe>
</div>
</form>
</div>
</section>

<section className="container mx-auto px-6 py-16" id="blog">
<h2 className="text-3xl font-bold text-blue-800 mb-10 text-center">Insights &amp; Resources</h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
<h4 className="font-bold text-blue-700 text-lg mb-2">Healthcare Construction Trends 2024</h4>
<p className="text-gray-700 mb-3">Discover the latest innovations shaping modern medical spaces, from smart tech to patient-centric design.</p>
<a className="text-blue-600 hover:underline font-semibold" href="#">Read More</a>
</div>
<div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
<h4 className="font-bold text-blue-700 text-lg mb-2">Design Tips for Medical Offices</h4>
<p className="text-gray-700 mb-3">Practical advice for optimizing workflow, patient comfort, and regulatory compliance in your medical practice.</p>
<a className="text-blue-600 hover:underline font-semibold" href="#">Read More</a>
</div>
<div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
<h4 className="font-bold text-blue-700 text-lg mb-2">Navigating Healthcare Regulations</h4>
<p className="text-gray-700 mb-3">A quick guide to current building codes and standards for medical spaces in BC.</p>
<a className="text-blue-600 hover:underline font-semibold" href="#">Read More</a>
</div>
</div>
</section>

<footer className="bg-blue-900 text-white py-8 sticky bottom-0">
<div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
<div className="mb-4 md:mb-0">
<div className="flex items-center gap-2">
<img alt="Medico Construction Logo" className="w-8 h-8 rounded-full border-2 border-white" src="https://i.ibb.co/9TL8h7n/medico-logo.png"/>
<span className="font-bold text-lg">Medico Construction</span>
</div>
<div className="mt-2 text-sm">
          123 Healthway Ave, Surrey, BC<br/>
<a className="underline text-blue-200 hover:text-white" href="tel:+16045551234">+1 (604) 555-1234</a> · <a className="underline text-blue-200 hover:text-white" href="mailto:info@medicoconstruction.ca">info@medicoconstruction.ca</a>
</div>
</div>
<div className="flex gap-8 mb-4 md:mb-0">
<a className="hover:underline" href="#contact">Contact Us</a>
<a className="hover:underline" href="#about">About Us</a>
<a className="hover:underline" href="#services">Services</a>
<a className="hover:underline" href="#portfolio">Portfolio</a>
<a className="hover:underline" href="#blog">Blog</a>
</div>
<div className="flex gap-4">
<a aria-label="LinkedIn" href="https://www.linkedin.com" target="_blank"><svg className="w-6 h-6 text-blue-200 hover:text-white" fill="currentColor" viewbox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.804-1.75-1.732s.784-1.732 1.75-1.732 1.75.804 1.75 1.732-.784 1.732-1.75 1.732zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.965v5.702h-3v-10h2.882v1.367h.041c.401-.762 1.379-1.566 2.841-1.566 3.039 0 3.6 2.001 3.6 4.6v5.599z"></path></svg></a>
<a aria-label="Facebook" href="https://www.facebook.com" target="_blank"><svg className="w-6 h-6 text-blue-200 hover:text-white" fill="currentColor" viewbox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.326v21.348c0 .73.593 1.326 1.325 1.326h11.495v-9.294h-3.122v-3.622h3.122v-2.672c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.462.099 2.797.143v3.24h-1.918c-1.504 0-1.797.715-1.797 1.764v2.313h3.587l-.467 3.622h-3.12v9.293h6.104c.73 0 1.323-.596 1.323-1.326v-21.349c0-.733-.593-1.326-1.324-1.326z"></path></svg></a>
<a aria-label="Instagram" href="https://www.instagram.com" target="_blank"><svg className="w-6 h-6 text-blue-200 hover:text-white" fill="currentColor" viewbox="0 0 24 24"></svg></a></div></div></footer>
    </>
  );
}
