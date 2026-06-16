import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Mobile Menu Toggle
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');

        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        // Mock Form Submissions
        document.getElementById('contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = this.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = 'Sending...';
            btn.disabled = true;
            
            setTimeout(() => {
                btn.innerText = originalText;
                btn.disabled = false;
                document.getElementById('contact-success').classList.remove('hidden');
                this.reset();
                setTimeout(() => {
                    document.getElementById('contact-success').classList.add('hidden');
                }, 5000);
            }, 1000);
        });

        document.getElementById('service-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = this.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = 'Submitting...';
            btn.disabled = true;
            
            setTimeout(() => {
                btn.innerText = originalText;
                btn.disabled = false;
                document.getElementById('service-success').classList.remove('hidden');
                this.reset();
                setTimeout(() => {
                    document.getElementById('service-success').classList.add('hidden');
                }, 5000);
            }, 1000);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center gap-3 cursor-pointer" onclick="window.scrollTo(0,0)">
<div className="bg-blue-900 text-white p-1.5 rounded-md flex items-center justify-center">
<iconify-icon height="20" icon="lucide:droplets" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="font-semibold text-slate-900 tracking-tight leading-none text-sm uppercase">Los Angeles County</span>
<span className="font-medium text-slate-500 tracking-tight text-xs uppercase">Sanitation District</span>
</div>
</div>

<nav className="hidden md:flex space-x-8 items-center">
<a className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors" href="#news">News</a>
<a className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors" href="#contact">Contact</a>
<a className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors" href="#faq">FAQ</a>
<a className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-xs font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" href="#request-service">
                        Request Service
                    </a>
</nav>

<div className="md:hidden flex items-center">
<button className="text-slate-500 hover:text-slate-700 focus:outline-none" id="mobile-menu-btn">
<iconify-icon height="24" icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden bg-white border-b border-slate-200" id="mobile-menu">
<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
<a className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-700 hover:bg-slate-50" href="#services">Services</a>
<a className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-700 hover:bg-slate-50" href="#about">About</a>
<a className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-700 hover:bg-slate-50" href="#news">News</a>
<a className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-700 hover:bg-slate-50" href="#contact">Contact</a>
<a className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-700 hover:bg-slate-50" href="#faq">FAQ</a>
<a className="block px-3 py-2 rounded-md text-base font-medium text-blue-700 font-semibold hover:bg-blue-50" href="#request-service">Request Service</a>
</div>
</div>
</header>

<section className="relative bg-slate-900 text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">

<div className="absolute inset-0 opacity-10">
<svg className="h-full w-full" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0 100 C 20 0 50 0 100 100 Z" fill="white"></path>
</svg>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-800/50 border border-blue-700/50 text-blue-200 text-xs font-medium mb-6">
<iconify-icon height="14" icon="lucide:map-pin" width="14"></iconify-icon>
                    Cerritos, CA
                    <span className="mx-1 text-blue-500">•</span>
                    (562) 924-4314
                </div>
<h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-4 leading-tight">
                    Public Works Department
                    <span className="block text-slate-400 text-2xl lg:text-3xl font-normal mt-2">Los Angeles County Sanitation District</span>
</h1>
<p className="text-lg lg:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
                    Protecting Public Health &amp; Environment Through Professional Sanitation Services.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-sm font-medium rounded-lg text-slate-900 bg-white hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-white transition-colors" href="#contact">
                        Contact Us
                    </a>
<a className="inline-flex justify-center items-center px-6 py-3 border border-slate-600 text-sm font-medium rounded-lg text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-slate-500 transition-colors" href="#request-service">
                        Request Service
                        <iconify-icon className="ml-2" height="16" icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<div className="bg-white border-b border-slate-200 shadow-sm relative z-20 -mt-8 mx-4 sm:mx-6 lg:mx-auto max-w-7xl rounded-xl">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 lg:p-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">

<div className="flex items-start gap-4 pt-4 md:pt-0">
<div className="p-2 bg-blue-50 text-blue-700 rounded-lg">
<iconify-icon height="24" icon="lucide:map" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900">Visit Us</h3>
<p className="text-sm text-slate-500 mt-1">16515 Piuma Ave, Cerritos, CA 90703</p>
<p className="text-xs text-slate-400 mt-0.5">Cerritos Iron-Wood Nine Golf Course</p>
</div>
</div>

<div className="flex items-start gap-4 pt-4 md:pt-0 md:pl-6">
<div className="p-2 bg-blue-50 text-blue-700 rounded-lg">
<iconify-icon height="24" icon="lucide:phone" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900">Contact Info</h3>
<p className="text-sm text-slate-500 mt-1"><a className="hover:text-blue-700" href="tel:5629244314">(562) 924-4314</a></p>
<p className="text-sm text-slate-500 mt-0.5"><a className="hover:text-blue-700" href="mailto:info@lacsd.org">info@lacsd.org</a></p>
</div>
</div>

<div className="flex items-start gap-4 pt-4 md:pt-0 md:pl-6">
<div className="p-2 bg-blue-50 text-blue-700 rounded-lg">
<iconify-icon height="24" icon="lucide:clock" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900">Office Hours</h3>
<p className="text-sm text-slate-500 mt-1">Mon – Fri: 8:00 AM – 5:00 PM</p>
<p className="text-xs text-slate-400 mt-0.5">Closed on State Holidays</p>
</div>
</div>
</div>
</div>

<section className="py-20 bg-slate-50" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">About Los Angeles County Sanitation District</h2>
<div className="prose prose-slate prose-sm text-slate-600">
<p className="mb-4">
                            The Los Angeles County Sanitation District is a dedicated public works department committed to protecting public health and the environment through comprehensive wastewater management and sanitation services. We serve the community with professional expertise in water quality management, environmental compliance, and public infrastructure maintenance.
                        </p>
<h3 className="text-lg font-medium text-slate-900 mt-6 mb-2">Our Mission</h3>
<p>
                            Our mission is to provide reliable, cost-effective, and environmentally responsible wastewater management services to protect public health and preserve water quality for current and future generations.
                        </p>
</div>
</div>
<div className="relative">
<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative z-10">
<div className="flex items-center gap-4 mb-6">
<div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700">
<iconify-icon height="24" icon="lucide:shield-check" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-slate-900">Commitment to Service</h4>
<p className="text-sm text-slate-500">Excellence in Public Works</p>
</div>
</div>
<div className="bg-slate-50 rounded-lg p-6 border border-slate-100 text-center">
<span className="block text-4xl font-semibold text-blue-700 tracking-tight mb-2">70+</span>
<span className="text-sm font-medium text-slate-900 uppercase tracking-wide">Years of Service</span>
<p className="text-xs text-slate-500 mt-2">Serving the community with dedication since establishment.</p>
</div>
</div>

<div className="absolute -top-4 -right-4 w-full h-full bg-slate-200 rounded-2xl -z-0"></div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-y border-slate-200" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="text-blue-600 font-semibold tracking-wide uppercase text-xs">What We Do</span>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mt-2 mb-4">Our Services</h2>
<p className="text-slate-500 text-lg">Comprehensive sanitation and public works solutions for residential, commercial, and industrial needs.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-700 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon height="24" icon="lucide:waves" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Wastewater Treatment</h3>
<p className="text-sm text-slate-500 leading-relaxed">State-of-the-art wastewater treatment facilities ensuring clean water returns to the environment.</p>
</div>

<div className="group p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-700 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon height="24" icon="lucide:wrench" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Sewer Maintenance</h3>
<p className="text-sm text-slate-500 leading-relaxed">Regular inspection, cleaning, and repair of sewer lines to prevent blockages and overflows.</p>
</div>

<div className="group p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-700 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon height="24" icon="lucide:file-check" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Environmental Compliance</h3>
<p className="text-sm text-slate-500 leading-relaxed">Ensuring all operations meet or exceed federal and state environmental regulations.</p>
</div>

<div className="group p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-700 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon height="24" icon="lucide:megaphone" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Education &amp; Outreach</h3>
<p className="text-sm text-slate-500 leading-relaxed">Community programs promoting water conservation and proper waste disposal practices.</p>
</div>

<div className="group p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-700 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon height="24" icon="lucide:factory" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Industrial Waste</h3>
<p className="text-sm text-slate-500 leading-relaxed">Specialized services for commercial and industrial wastewater treatment needs.</p>
</div>

<div className="group p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-700 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon height="24" icon="lucide:siren" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Emergency Response</h3>
<p className="text-sm text-slate-500 leading-relaxed">24/7 emergency services for sewer system issues and environmental incidents.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50" id="news">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-10">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">News &amp; Announcements</h2>
<p className="text-slate-500 mt-2">Latest updates from the Sanitation District.</p>
</div>
<a className="hidden md:inline-flex items-center text-sm font-medium text-blue-700 hover:text-blue-800" href="#">
                    View Archive
                    <iconify-icon className="ml-1" height="16" icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<article className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
<div className="p-6">
<time className="text-xs font-semibold text-blue-600 uppercase tracking-wide">March 15, 2025</time>
<h3 className="mt-2 text-lg font-medium text-slate-900">Infrastructure Improvement Project Completed</h3>
<p className="mt-3 text-sm text-slate-500">Major sewer line upgrade completed ahead of schedule, enhancing service reliability for residents.</p>
</div>
<div className="px-6 pb-6 pt-0">
<span className="text-xs font-medium text-slate-400">Category: Infrastructure</span>
</div>
</article>

<article className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
<div className="p-6">
<time className="text-xs font-semibold text-blue-600 uppercase tracking-wide">February 28, 2025</time>
<h3 className="mt-2 text-lg font-medium text-slate-900">Water Quality Excellence Award</h3>
<p className="mt-3 text-sm text-slate-500">District recognized for outstanding environmental stewardship and water quality management.</p>
</div>
<div className="px-6 pb-6 pt-0">
<span className="text-xs font-medium text-slate-400">Category: Awards</span>
</div>
</article>

<article className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
<div className="p-6">
<time className="text-xs font-semibold text-blue-600 uppercase tracking-wide">February 10, 2025</time>
<h3 className="mt-2 text-lg font-medium text-slate-900">Community Education Workshop</h3>
<p className="mt-3 text-sm text-slate-500">Free workshop on water conservation and proper waste disposal practices scheduled for April.</p>
</div>
<div className="px-6 pb-6 pt-0">
<span className="text-xs font-medium text-slate-400">Category: Events</span>
</div>
</article>
</div>
</div>
</section>

<section className="py-20 bg-white border-t border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
<div className="col-span-1">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-6">Location &amp; Directions</h2>
<div className="space-y-6">
<div className="flex items-start gap-3">
<iconify-icon className="text-blue-600 mt-1" height="20" icon="lucide:map-pin" width="20"></iconify-icon>
<div>
<h4 className="text-sm font-medium text-slate-900">District Office</h4>
<p className="text-sm text-slate-500 mt-1">16515 Piuma Ave<br/>Cerritos, CA 90703</p>
<p className="text-xs text-slate-400 mt-2">Located in: Cerritos Iron-Wood Nine Golf Course</p>
</div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-blue-600 mt-1" height="20" icon="lucide:navigation" width="20"></iconify-icon>
<div>
<h4 className="text-sm font-medium text-slate-900">Plus Code</h4>
<p className="text-sm text-slate-500 mt-1">VVJW+25 Cerritos, California</p>
</div>
</div>
<a className="inline-flex items-center text-sm font-medium text-blue-700 hover:text-blue-800" href="https://maps.google.com" target="_blank">
                            Get Directions on Google Maps
                            <iconify-icon className="ml-1" height="14" icon="lucide:external-link" width="14"></iconify-icon>
</a>
</div>
</div>
<div className="col-span-1 lg:col-span-2">
<div className="bg-slate-100 rounded-xl overflow-hidden h-80 lg:h-96 border border-slate-200 relative">
<iframe allowfullscreen="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.5381894458397!2d-118.06821892330756!3d33.88921863073003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd2d1066746813%3A0xe549553f1f7281c7!2s16515%20Piuma%20Ave%2C%20Cerritos%2C%20CA%2090703!5e0!3m2!1sen!2sus!4v1709400000000!5m2!1sen!2sus" style={{border: '0'}} width="100%">
</iframe>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

<div className="bg-white rounded-xl border border-slate-200 p-6 lg:p-8 shadow-sm" id="contact">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-2">Contact Us</h2>
<p className="text-sm text-slate-500 mb-6">Have a general question? Send us a message.</p>
<form className="space-y-4" id="contact-form">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="c-name">Full Name</label>
<input className="block w-full rounded-md border-slate-200 bg-slate-50 py-2 px-3 text-sm focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-slate-400" id="c-name" placeholder="Jane Doe" required="" type="text"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="c-email">Email Address</label>
<input className="block w-full rounded-md border-slate-200 bg-slate-50 py-2 px-3 text-sm focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-slate-400" id="c-email" placeholder="jane@example.com" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="c-phone">Phone Number</label>
<input className="block w-full rounded-md border-slate-200 bg-slate-50 py-2 px-3 text-sm focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-slate-400" id="c-phone" placeholder="(555) 123-4567" type="tel"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="c-message">Message</label>
<textarea className="block w-full rounded-md border-slate-200 bg-slate-50 py-2 px-3 text-sm focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-slate-400" id="c-message" placeholder="How can we help you?" required="" rows="4"></textarea>
</div>
<button className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-colors" type="submit">
                            Send Message
                        </button>
</form>
<div className="hidden mt-4 p-3 bg-green-50 text-green-700 text-sm rounded-md border border-green-200 flex items-center gap-2" id="contact-success">
<iconify-icon height="16" icon="lucide:check-circle" width="16"></iconify-icon>
                        Message sent successfully.
                    </div>
</div>

<div className="bg-white rounded-xl border border-slate-200 p-6 lg:p-8 shadow-sm relative overflow-hidden" id="request-service">
<div className="absolute top-0 left-0 w-full h-1.5 bg-blue-600"></div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-2">Request Service</h2>
<p className="text-sm text-slate-500 mb-6">Need assistance at your property? Submit a request.</p>
<form className="space-y-4" id="service-form">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="s-name">Full Name</label>
<input className="block w-full rounded-md border-slate-200 bg-slate-50 py-2 px-3 text-sm focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-slate-400" id="s-name" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="s-address">Service Address</label>
<input className="block w-full rounded-md border-slate-200 bg-slate-50 py-2 px-3 text-sm focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-slate-400" id="s-address" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="s-phone">Phone Number</label>
<input className="block w-full rounded-md border-slate-200 bg-slate-50 py-2 px-3 text-sm focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-slate-400" id="s-phone" required="" type="tel"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="s-type">Service Type</label>
<div className="relative">
<select className="block w-full rounded-md border-slate-200 bg-slate-50 py-2 px-3 text-sm focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none text-slate-600" id="s-type">
<option>Sewer Blockage</option>
<option>Odor Complaint</option>
<option>Maintenance Request</option>
<option>Inspection Request</option>
<option>Other</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
<iconify-icon height="16" icon="lucide:chevron-down" width="16"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="s-desc">Description</label>
<textarea className="block w-full rounded-md border-slate-200 bg-slate-50 py-2 px-3 text-sm focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-slate-400" id="s-desc" required="" rows="3"></textarea>
</div>
<button className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors" type="submit">
                            Submit Request
                        </button>
</form>
<div className="hidden mt-4 p-3 bg-blue-50 text-blue-700 text-sm rounded-md border border-blue-200 flex items-center gap-2" id="service-success">
<iconify-icon height="16" icon="lucide:check-circle" width="16"></iconify-icon>
                        Request submitted. We will contact you shortly.
                    </div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="faq">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 text-center mb-10">Frequently Asked Questions</h2>
<div className="space-y-4">

<details className="group bg-slate-50 rounded-lg border border-slate-200 open:ring-1 open:ring-blue-500/20 transition-all">
<summary className="flex justify-between items-center cursor-pointer p-4 font-medium text-slate-900 select-none">
                        What services does the Los Angeles County Sanitation District provide?
                        <span className="transition-transform group-open:rotate-180 text-slate-400">
<iconify-icon height="20" icon="lucide:chevron-down" width="20"></iconify-icon>
</span>
</summary>
<div className="px-4 pb-4 text-sm text-slate-600 leading-relaxed border-t border-slate-200/50 pt-2">
                        We provide comprehensive wastewater treatment, sewer system maintenance, industrial waste management, and environmental compliance services. We also offer public education programs regarding water conservation.
                    </div>
</details>

<details className="group bg-slate-50 rounded-lg border border-slate-200 open:ring-1 open:ring-blue-500/20 transition-all">
<summary className="flex justify-between items-center cursor-pointer p-4 font-medium text-slate-900 select-none">
                        How do I report a sewer emergency or problem?
                        <span className="transition-transform group-open:rotate-180 text-slate-400">
<iconify-icon height="20" icon="lucide:chevron-down" width="20"></iconify-icon>
</span>
</summary>
<div className="px-4 pb-4 text-sm text-slate-600 leading-relaxed border-t border-slate-200/50 pt-2">
                        For emergencies, please call our 24/7 hotline at (562) 924-4314 immediately. For non-emergency issues, you can use the "Request Service" form on this website.
                    </div>
</details>

<details className="group bg-slate-50 rounded-lg border border-slate-200 open:ring-1 open:ring-blue-500/20 transition-all">
<summary className="flex justify-between items-center cursor-pointer p-4 font-medium text-slate-900 select-none">
                        What areas does the district serve?
                        <span className="transition-transform group-open:rotate-180 text-slate-400">
<iconify-icon height="20" icon="lucide:chevron-down" width="20"></iconify-icon>
</span>
</summary>
<div className="px-4 pb-4 text-sm text-slate-600 leading-relaxed border-t border-slate-200/50 pt-2">
                        We primarily serve the greater Los Angeles County area, specifically focusing on the sanitation needs of Cerritos and surrounding communities.
                    </div>
</details>

<details className="group bg-slate-50 rounded-lg border border-slate-200 open:ring-1 open:ring-blue-500/20 transition-all">
<summary className="flex justify-between items-center cursor-pointer p-4 font-medium text-slate-900 select-none">
                        How can I request sanitation services for my property?
                        <span className="transition-transform group-open:rotate-180 text-slate-400">
<iconify-icon height="20" icon="lucide:chevron-down" width="20"></iconify-icon>
</span>
</summary>
<div className="px-4 pb-4 text-sm text-slate-600 leading-relaxed border-t border-slate-200/50 pt-2">
                        You can request services by filling out the form in the "Request Service" section above, or by contacting our office directly during business hours.
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 lg:col-span-1">
<div className="flex items-center gap-2 mb-4 text-white">
<iconify-icon height="24" icon="lucide:droplets" width="24"></iconify-icon>
<span className="font-semibold text-lg tracking-tight">LACSD</span>
</div>
<p className="text-sm text-slate-400 leading-relaxed mb-4">
                        Los Angeles County Sanitation District – Public Works Department in Cerritos, CA. Wastewater treatment, sewer maintenance, environmental services.
                    </p>
<a className="text-blue-400 hover:text-blue-300 text-sm font-medium" href="tel:5629244314">Call (562) 924-4314</a>
</div>
<div className="col-span-1">
<h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Quick Links</h3>
<ul className="space-y-3">
<li><a className="text-sm hover:text-white transition-colors" href="#services">Services</a></li>
<li><a className="text-sm hover:text-white transition-colors" href="#about">About Us</a></li>
<li><a className="text-sm hover:text-white transition-colors" href="#news">News &amp; Updates</a></li>
<li><a className="text-sm hover:text-white transition-colors" href="#faq">FAQ</a></li>
<li><a className="text-sm hover:text-white transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
<div className="col-span-1">
<h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Contact</h3>
<ul className="space-y-3">
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 text-slate-500" height="16" icon="lucide:phone" width="16"></iconify-icon>
<span className="text-sm">(562) 924-4314</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 text-slate-500" height="16" icon="lucide:mail" width="16"></iconify-icon>
<span className="text-sm">info@lacsd.org</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 text-slate-500" height="16" icon="lucide:map-pin" width="16"></iconify-icon>
<span className="text-sm">16515 Piuma Ave,<br/>Cerritos, CA 90703</span>
</li>
</ul>
</div>
<div className="col-span-1">
<h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Hours</h3>
<div className="flex justify-between text-sm mb-2 border-b border-slate-800 pb-2">
<span>Mon - Fri</span>
<span className="text-white">8:00 AM - 5:00 PM</span>
</div>
<div className="flex justify-between text-sm mb-2 text-slate-500">
<span>Sat - Sun</span>
<span>Closed</span>
</div>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-500">© 2026 Los Angeles County Sanitation District. All rights reserved.</p>
<div className="flex items-center gap-1 text-xs text-slate-600">
                    Made with <span className="font-medium text-slate-500">Emergent</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
