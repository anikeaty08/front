import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="text-lg font-semibold tracking-tighter text-zinc-900 uppercase" href="#">
                Apollo<span className="text-zinc-400">Projects</span>
</a>

<div className="hidden md:flex items-center space-x-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#projects">Projects</a>
<a className="hover:text-zinc-900 transition-colors" href="#services">Services</a>
<a className="hover:text-zinc-900 transition-colors" href="#process">Process</a>
<a className="hover:text-zinc-900 transition-colors" href="#about">About</a>
<a className="bg-zinc-900 text-white px-4 py-2 rounded-full hover:bg-zinc-800 transition-colors" href="#contact">
                    Contact Us
                </a>
</div>

<div className="md:hidden flex items-center">
<label className="cursor-pointer text-zinc-600" htmlFor="mobile-menu-toggle">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</label>
</div>
</div>
</nav>

<input className="hidden" id="mobile-menu-toggle" type="checkbox"/>
<div className="hidden fixed inset-0 z-40 bg-white pt-20 px-6 pb-6" id="mobile-menu">
<div className="flex flex-col space-y-6 text-lg font-medium text-zinc-800">
<a href="#projects">Projects</a>
<a href="#services">Services</a>
<a href="#process">How It Works</a>
<a href="#about">About</a>
<a className="text-blue-600" href="#contact">Contact Now</a>
<label className="absolute top-5 right-6 text-zinc-500 cursor-pointer" htmlFor="mobile-menu-toggle">
<span className="iconify" data-icon="lucide:x" data-width="24"></span>
</label>
</div>
</div>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
<div className="max-w-3xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-xs font-medium text-zinc-600 mb-8">
<span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                Admissions Open for Final Year Batches
            </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-zinc-900 mb-6">
                Engineering Projects <br/>
<span className="text-zinc-400">Made Simple.</span>
</h1>
<p className="text-lg text-zinc-500 mb-10 max-w-xl mx-auto leading-relaxed">
                Premium Arduino, IoT, and Robotics projects for Diploma &amp; BE students in Kalaburagi. Full documentation, code, and support included.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3 bg-zinc-900 text-white text-sm font-medium rounded-lg hover:bg-zinc-800 transition-all flex items-center justify-center gap-2" href="https://wa.me/917411472661">
<span className="iconify" data-icon="lucide:message-circle" data-width="18"></span>
                    WhatsApp Now
                </a>
<a className="w-full sm:w-auto px-8 py-3 bg-white text-zinc-900 border border-zinc-200 text-sm font-medium rounded-lg hover:bg-zinc-50 transition-all flex items-center justify-center gap-2" href="tel:7411472661">
<span className="iconify" data-icon="lucide:phone" data-width="18"></span>
                    Call Now
                </a>
</div>
</div>

<div className="mt-20 pt-8 border-t border-zinc-100 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
<div>
<p className="text-2xl font-semibold tracking-tight text-zinc-900">100+</p>
<p className="text-xs text-zinc-500 uppercase tracking-wide mt-1">Projects Delivered</p>
</div>
<div>
<p className="text-2xl font-semibold tracking-tight text-zinc-900">100%</p>
<p className="text-xs text-zinc-500 uppercase tracking-wide mt-1">Working Code</p>
</div>
<div>
<p className="text-2xl font-semibold tracking-tight text-zinc-900">IEEE</p>
<p className="text-xs text-zinc-500 uppercase tracking-wide mt-1">Standard Papers</p>
</div>
<div>
<p className="text-2xl font-semibold tracking-tight text-zinc-900">24/7</p>
<p className="text-xs text-zinc-500 uppercase tracking-wide mt-1">Student Support</p>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 px-6" id="projects">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900">Featured Projects</h2>
<p className="text-zinc-500 mt-2">Browse our latest innovations in Electronics &amp; CS.</p>
</div>
<div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
<button className="px-4 py-2 bg-zinc-900 text-white text-xs font-medium rounded-md whitespace-nowrap">All</button>
<button className="px-4 py-2 bg-white border border-zinc-200 text-zinc-600 text-xs font-medium rounded-md hover:border-zinc-300 whitespace-nowrap transition-colors">Arduino</button>
<button className="px-4 py-2 bg-white border border-zinc-200 text-zinc-600 text-xs font-medium rounded-md hover:border-zinc-300 whitespace-nowrap transition-colors">IoT / ESP32</button>
<button className="px-4 py-2 bg-white border border-zinc-200 text-zinc-600 text-xs font-medium rounded-md hover:border-zinc-300 whitespace-nowrap transition-colors">Robotics</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white rounded-xl border border-zinc-200 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
<span className="iconify" data-icon="lucide:wifi" data-width="20"></span>
</div>
<span className="text-xs font-medium bg-zinc-100 text-zinc-600 px-2 py-1 rounded">IoT</span>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2">Smart Home Automation</h3>
<p className="text-sm text-zinc-500 mb-6">Control appliances from anywhere using ESP32 and mobile app. Includes circuit diagram and app source.</p>
<div className="flex items-center justify-between mt-auto">
<span className="text-xs text-zinc-400 font-mono">ID: AP-104</span>
<a className="text-sm font-medium text-zinc-900 flex items-center gap-1 group-hover:gap-2 transition-all" href="#contact">
                            Enquire <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
</div>

<div className="group bg-white rounded-xl border border-zinc-200 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center text-green-600">
<span className="iconify" data-icon="lucide:bot" data-width="20"></span>
</div>
<span className="text-xs font-medium bg-zinc-100 text-zinc-600 px-2 py-1 rounded">Robotics</span>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2">Obstacle Avoiding Robot</h3>
<p className="text-sm text-zinc-500 mb-6">Autonomous vehicle using ultrasonic sensors and Arduino UNO. Perfect for diploma mini projects.</p>
<div className="flex items-center justify-between mt-auto">
<span className="text-xs text-zinc-400 font-mono">ID: AP-201</span>
<a className="text-sm font-medium text-zinc-900 flex items-center gap-1 group-hover:gap-2 transition-all" href="#contact">
                            Enquire <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
</div>

<div className="group bg-white rounded-xl border border-zinc-200 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">
<span className="iconify" data-icon="lucide:cpu" data-width="20"></span>
</div>
<span className="text-xs font-medium bg-zinc-100 text-zinc-600 px-2 py-1 rounded">Embedded</span>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2">Fingerprint Biometric System</h3>
<p className="text-sm text-zinc-500 mb-6">Secure attendance or door lock system utilizing high-precision optical sensors and LCD display.</p>
<div className="flex items-center justify-between mt-auto">
<span className="text-xs text-zinc-400 font-mono">ID: AP-305</span>
<a className="text-sm font-medium text-zinc-900 flex items-center gap-1 group-hover:gap-2 transition-all" href="#contact">
                            Enquire <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
</div>

<div className="group bg-white rounded-xl border border-zinc-200 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600">
<span className="iconify" data-icon="lucide:printer" data-width="20"></span>
</div>
<span className="text-xs font-medium bg-zinc-100 text-zinc-600 px-2 py-1 rounded">3D Print</span>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2">Custom Chassis Design</h3>
<p className="text-sm text-zinc-500 mb-6">3D printed parts for rovers, robotic arms, and custom enclosures. PLA and ABS materials available.</p>
<div className="flex items-center justify-between mt-auto">
<span className="text-xs text-zinc-400 font-mono">ID: AP-3D1</span>
<a className="text-sm font-medium text-zinc-900 flex items-center gap-1 group-hover:gap-2 transition-all" href="#contact">
                            Enquire <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="https://wa.me/917411472661">
                    View complete catalog on WhatsApp <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white px-6 border-b border-zinc-100" id="services">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-4">Complete Technical Services</h2>
<p className="text-zinc-500">We don't just sell projects; we provide the entire ecosystem for your academic success.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-100">
<div className="w-10 h-10 bg-white border border-zinc-200 rounded-lg flex items-center justify-center mb-4">
<span className="iconify text-zinc-900" data-icon="lucide:code-2" data-width="20"></span>
</div>
<h3 className="text-base font-semibold text-zinc-900 mb-2">Code &amp; Hardware</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Clean, commented code for Arduino/ESP32 along with neatly assembled hardware kits ready for demo.</p>
</div>
<div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-100">
<div className="w-10 h-10 bg-white border border-zinc-200 rounded-lg flex items-center justify-center mb-4">
<span className="iconify text-zinc-900" data-icon="lucide:file-text" data-width="20"></span>
</div>
<h3 className="text-base font-semibold text-zinc-900 mb-2">Project Reports</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Professional documentation, IEEE paper references, flowcharts, and block diagrams tailored for college submission.</p>
</div>
<div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-100">
<div className="w-10 h-10 bg-white border border-zinc-200 rounded-lg flex items-center justify-center mb-4">
<span className="iconify text-zinc-900" data-icon="lucide:presentation" data-width="20"></span>
</div>
<h3 className="text-base font-semibold text-zinc-900 mb-2">Live Explanation</h3>
<p className="text-sm text-zinc-500 leading-relaxed">We explain every line of code and circuit connection so you can confidently answer viva questions.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white px-6" id="process">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-6">Workflow Designed for Students</h2>
<p className="text-zinc-500 mb-8">A seamless process from selection to submission. We ensure you understand your project inside out.</p>
<ul className="space-y-8">
<li className="flex gap-4">
<span className="flex-shrink-0 w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center text-xs font-medium">1</span>
<div>
<h4 className="text-base font-semibold text-zinc-900">Choose or Customize</h4>
<p className="text-sm text-zinc-500 mt-1">Select from our list or bring your own idea.</p>
</div>
</li>
<li className="flex gap-4">
<span className="flex-shrink-0 w-8 h-8 rounded-full bg-zinc-100 text-zinc-900 flex items-center justify-center text-xs font-medium border border-zinc-200">2</span>
<div>
<h4 className="text-base font-semibold text-zinc-900">Development Phase</h4>
<p className="text-sm text-zinc-500 mt-1">We build the hardware and write the code.</p>
</div>
</li>
<li className="flex gap-4">
<span className="flex-shrink-0 w-8 h-8 rounded-full bg-zinc-100 text-zinc-900 flex items-center justify-center text-xs font-medium border border-zinc-200">3</span>
<div>
<h4 className="text-base font-semibold text-zinc-900">Demo &amp; Training</h4>
<p className="text-sm text-zinc-500 mt-1">Full explanation via video call or in-person.</p>
</div>
</li>
</ul>
</div>
<div className="relative bg-zinc-50 rounded-2xl border border-zinc-100 p-8">
<div className="absolute -top-4 -right-4 bg-white border border-zinc-200 p-4 rounded-xl shadow-sm">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-xs font-medium text-zinc-600">On Time Delivery</span>
</div>
</div>

<div className="space-y-4 font-mono text-xs text-zinc-400">
<div className="flex gap-4">
<span className="text-blue-600">void</span> setup() {
                        </div>
<div className="pl-4">
                            Serial.begin(<span className="text-orange-600">115200</span>); <br/>
                            pinMode(LED_BUILTIN, OUTPUT); <br/>
<span className="text-zinc-300">// Apollo Projects Initialization</span>
</div>
<div>}</div>
</div>
<div className="mt-8 pt-8 border-t border-zinc-200">
<p className="text-sm font-medium text-zinc-900">"The explanation was crystal clear. I scored top marks in my viva."</p>
<p className="text-xs text-zinc-500 mt-2">— Sneha, E&amp;C Final Year</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-zinc-900 text-white px-6" id="about">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl font-semibold tracking-tight mb-6">About Apollo Projects KLB</h2>
<p className="text-zinc-400 text-lg leading-relaxed mb-8">
                Based in Kalaburagi, Karnataka, we are a team of engineers dedicated to bridging the gap between theoretical syllabus and practical application. Our mission is to empower Diploma and B.Tech students with hands-on technical skills through affordable, high-quality projects.
            </p>
<div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-zinc-300">
<span className="px-4 py-2 border border-zinc-700 rounded-full">Robotics Experts</span>
<span className="px-4 py-2 border border-zinc-700 rounded-full">IoT Specialists</span>
<span className="px-4 py-2 border border-zinc-700 rounded-full">Practical Learning</span>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="contact">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

<div>
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-2">Let's Discuss Your Project</h2>
<p className="text-zinc-500 mb-8">Fill the form or contact us directly. We reply instantly on WhatsApp.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center flex-shrink-0">
<span className="iconify text-zinc-900" data-icon="lucide:phone" data-width="18"></span>
</div>
<div>
<p className="text-sm font-medium text-zinc-900">Phone</p>
<a className="text-sm text-zinc-500 hover:text-zinc-900" href="tel:7411472661">7411472661</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center flex-shrink-0">
<span className="iconify text-zinc-900" data-icon="lucide:mail" data-width="18"></span>
</div>
<div>
<p className="text-sm font-medium text-zinc-900">Email</p>
<a className="text-sm text-zinc-500 hover:text-zinc-900" href="mailto:apolloprojects.klb@gmail.com">apolloprojects.klb@gmail.com</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center flex-shrink-0">
<span className="iconify text-zinc-900" data-icon="lucide:map-pin" data-width="18"></span>
</div>
<div>
<p className="text-sm font-medium text-zinc-900">Location</p>
<p className="text-sm text-zinc-500">Kalaburagi, Karnataka, India</p>
</div>
</div>
</div>

<div className="mt-8 w-full h-48 bg-zinc-100 rounded-xl overflow-hidden relative">
<iframe allowfullscreen="" className="opacity-75 hover:opacity-100 transition-opacity" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3810.745063077366!2d76.8183!3d17.3297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDE5JzQ2LjkiTiA3NsKwNDknMDUuOSJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" style={{border: '0'}} width="100%"></iframe>
</div>
</div>

<div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100">
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="col-span-2 md:col-span-1">
<label className="block text-xs font-medium text-zinc-700 mb-1">Name</label>
<input className="w-full px-3 py-2 bg-white border border-zinc-200 rounded-lg text-sm text-zinc-900 focus:outline-none focus:border-zinc-400 focus:ring-0 transition-colors" placeholder="John Doe" type="text"/>
</div>
<div className="col-span-2 md:col-span-1">
<label className="block text-xs font-medium text-zinc-700 mb-1">Phone Number</label>
<input className="w-full px-3 py-2 bg-white border border-zinc-200 rounded-lg text-sm text-zinc-900 focus:outline-none focus:border-zinc-400 focus:ring-0 transition-colors" placeholder="+91 0000000000" type="tel"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1">College / Institute</label>
<input className="w-full px-3 py-2 bg-white border border-zinc-200 rounded-lg text-sm text-zinc-900 focus:outline-none focus:border-zinc-400 focus:ring-0 transition-colors" placeholder="e.g. PDA College of Engg" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1">Project Category</label>
<div className="relative">
<select className="w-full px-3 py-2 bg-white border border-zinc-200 rounded-lg text-sm text-zinc-900 focus:outline-none focus:border-zinc-400 focus:ring-0 transition-colors appearance-none">
<option>Final Year Project</option>
<option>Mini Project</option>
<option>3D Printing Service</option>
<option>IoT / Arduino Inquiry</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-zinc-500">
<span className="iconify" data-icon="lucide:chevron-down" data-width="14"></span>
</div>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1">Message (Optional)</label>
<textarea className="w-full px-3 py-2 bg-white border border-zinc-200 rounded-lg text-sm text-zinc-900 focus:outline-none focus:border-zinc-400 focus:ring-0 transition-colors resize-none" placeholder="Tell us about your requirements..." rows="4"></textarea>
</div>
<button className="w-full bg-zinc-900 text-white font-medium py-3 rounded-lg text-sm hover:bg-zinc-800 transition-all flex items-center justify-center gap-2" type="button">
                            Send Enquiry
                            <span className="iconify" data-icon="lucide:send" data-width="14"></span>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-zinc-100 py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<span className="text-sm font-semibold tracking-tight text-zinc-900 uppercase block mb-1">Apollo Projects KLB</span>
<p className="text-xs text-zinc-400">© 2024. Engineering Excellence in Kalaburagi.</p>
</div>
<div className="flex gap-6">
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:instagram" data-width="20"></span>
</a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:facebook" data-width="20"></span>
</a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-width="20"></span>
</a>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:bg-[#1fb355] transition-all transform hover:scale-105 flex items-center gap-2 group" href="https://wa.me/917411472661" target="_blank">
<span className="iconify" data-icon="lucide:message-circle" data-width="24" strokeWidth="2"></span>
<span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap text-sm font-medium">Chat for Demo</span>
</a>

    </>
  );
}
