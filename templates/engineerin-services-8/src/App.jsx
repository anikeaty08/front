import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



function toggleMobileMenu() {
const sidebar = document.querySelector('.sidebar');
sidebar.classList.toggle('mobile-open');
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
const sidebar = document.querySelector('.sidebar');
const menuButton = event.target.closest('button[aria-label="Toggle menu"]');
if (!sidebar.contains(event.target) && !menuButton && sidebar.classList.contains('mobile-open')) {
sidebar.classList.remove('mobile-open');
}
});

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-neutral-800 text-white py-2 px-6 fixed top-0 left-0 right-0 z-50">
<div className="max-w-screen-2xl mx-auto flex items-center justify-between">
<div className="flex items-center gap-6">
<div className="text-xs font-medium tracking-wide">BRANDON ENGINEERING, INC.</div>
</div>
<div className="flex items-center gap-6">
<div className="hidden md:flex items-center gap-4">
<a aria-label="LinkedIn" className="text-neutral-300 hover:text-white transition-colors" href="#">
<span className="iconify" data-height="18" data-icon="lucide:linkedin" data-width="18"></span>
</a>
<a aria-label="Facebook" className="text-neutral-300 hover:text-white transition-colors" href="#">
<span className="iconify" data-height="18" data-icon="lucide:facebook" data-width="18"></span>
</a>
<a aria-label="Twitter" className="text-neutral-300 hover:text-white transition-colors" href="#">
<span className="iconify" data-height="18" data-icon="lucide:twitter" data-width="18"></span>
</a>
</div>
<a className="text-xs font-medium text-neutral-300 hover:text-white transition-colors hidden md:block" href="#contact">CONTACT</a>
<div className="relative hidden lg:block">
<input aria-label="Search" className="bg-neutral-700 text-white text-xs px-3 py-1.5 pr-8 rounded-md w-48 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Search..." type="text"/>
<span className="iconify absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400" data-height="14" data-icon="lucide:search" data-width="14"></span>
</div>
<button aria-label="Toggle menu" className="md:hidden text-white" onclick="toggleMobileMenu()">
<span className="iconify" data-height="24" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</div>
</div>

<div className="flex pt-12">

<aside className="sidebar fixed left-0 top-12 bottom-0 w-64 bg-white border-r border-neutral-200 z-40 md:translate-x-0">
<nav className="p-6 space-y-2">
<a className="nav-link flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-blue-600 bg-blue-50" href="#home">
<span className="iconify" data-height="18" data-icon="lucide:home" data-width="18" style={{strokeWidth: '1.5'}}></span>
Home
</a>
<a className="nav-link flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-neutral-700 hover:bg-neutral-50" href="#services">
<span className="iconify" data-height="18" data-icon="lucide:briefcase" data-width="18" style={{strokeWidth: '1.5'}}></span>
Services
</a>
<a className="nav-link flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-neutral-700 hover:bg-neutral-50" href="#history">
<span className="iconify" data-height="18" data-icon="lucide:clock" data-width="18" style={{strokeWidth: '1.5'}}></span>
History
</a>
<a className="nav-link flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-neutral-700 hover:bg-neutral-50" href="#contact">
<span className="iconify" data-height="18" data-icon="lucide:mail" data-width="18" style={{strokeWidth: '1.5'}}></span>
Contact
</a>
<div className="pt-4 mt-4 border-t border-neutral-200">
<a className="nav-link flex items-center gap-3 px-4 py-3 rounded-lg text-xs font-medium text-neutral-500 hover:bg-neutral-50" href="#privacy">
<span className="iconify" data-height="16" data-icon="lucide:shield" data-width="16" style={{strokeWidth: '1.5'}}></span>
Privacy Policy
</a>
</div>
</nav>
</aside>

<main className="flex-1 md:ml-64">

<section className="relative h-[600px] bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 overflow-hidden">
<div className="absolute inset-0 opacity-10">
<div className="absolute inset-0" style={{backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px), repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)'}}></div>
</div>
<div className="relative h-full flex items-center px-8 md:px-16 lg:px-24">
<div className="max-w-4xl">
<div className="inline-block px-4 py-1.5 bg-blue-600/20 border border-blue-500/30 rounded-full text-xs font-medium text-blue-300 mb-6 tracking-wide">
ENERGY &amp; DESIGN ENGINEERING
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
Engineering Excellence<br className="hidden md:block"/> in Energy Solutions
</h1>
<p className="text-lg md:text-xl text-neutral-300 mb-8 max-w-2xl leading-relaxed">
Brandon Engineering, Inc. delivers innovative energy and design engineering solutions across Colorado and beyond.
</p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors" href="#services">
Explore Services
<span className="iconify" data-height="20" data-icon="lucide:arrow-right" data-width="20" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-lg font-medium transition-colors" href="#contact">
Get in Touch
</a>
</div>
</div>
</div>
</section>

<section className="py-20 px-8 md:px-16 lg:px-24 bg-white">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<div className="inline-block text-xs font-semibold text-blue-600 tracking-widest uppercase mb-4">
Our Expertise
</div>
<h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
Core Engineering Capabilities
</h2>
<p className="text-lg text-neutral-600 max-w-2xl mx-auto">
Comprehensive engineering solutions tailored to meet your energy and design requirements.
</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white border border-neutral-200 rounded-xl p-8 hover:shadow-xl hover:border-blue-200 transition-all">
<div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
<span className="iconify text-blue-600" data-height="28" data-icon="lucide:zap" data-width="28" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-3">
Energy Engineering
</h3>
<p className="text-neutral-600 leading-relaxed mb-4">
Comprehensive energy analysis, efficiency optimization, and sustainable power system design for commercial and industrial applications.
</p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700" href="#services">
Learn More
<span className="iconify" data-height="16" data-icon="lucide:arrow-right" data-width="16" style={{strokeWidth: '1.5'}}></span>
</a>
</div>

<div className="bg-white border border-neutral-200 rounded-xl p-8 hover:shadow-xl hover:border-blue-200 transition-all">
<div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
<span className="iconify text-blue-600" data-height="28" data-icon="lucide:layout" data-width="28" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-3">
Design Engineering
</h3>
<p className="text-neutral-600 leading-relaxed mb-4">
Strategic design solutions that integrate functionality, efficiency, and innovation for complex engineering challenges.
</p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700" href="#services">
Learn More
<span className="iconify" data-height="16" data-icon="lucide:arrow-right" data-width="16" style={{strokeWidth: '1.5'}}></span>
</a>
</div>

<div className="bg-white border border-neutral-200 rounded-xl p-8 hover:shadow-xl hover:border-blue-200 transition-all">
<div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
<span className="iconify text-blue-600" data-height="28" data-icon="lucide:line-chart" data-width="28" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-3">
Consulting Services
</h3>
<p className="text-neutral-600 leading-relaxed mb-4">
Expert guidance on energy policy, system optimization, and engineering best practices to drive project success.
</p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700" href="#services">
Learn More
<span className="iconify" data-height="16" data-icon="lucide:arrow-right" data-width="16" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>
</div>
</section>

<section className="py-20 px-8 md:px-16 lg:px-24 bg-neutral-50">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-block text-xs font-semibold text-blue-600 tracking-widest uppercase mb-4">
Why Brandon Engineering
</div>
<h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-6">
Trusted Engineering Partner in Colorado
</h2>
<p className="text-lg text-neutral-600 mb-8 leading-relaxed">
As a Colorado-based S-Corporation, we combine local expertise with industry-leading engineering standards to deliver exceptional results.
</p>
<div className="space-y-5">
<div className="flex items-start gap-4">
<div className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center shrink-0 mt-1">
<span className="iconify text-blue-600" data-height="14" data-icon="lucide:check" data-width="14" style={{strokeWidth: '2'}}></span>
</div>
<div>
<h4 className="font-semibold text-neutral-900 mb-1">Licensed &amp; Certified</h4>
<p className="text-sm text-neutral-600">Fully licensed professional engineers with extensive industry certifications and compliance expertise.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center shrink-0 mt-1">
<span className="iconify text-blue-600" data-height="14" data-icon="lucide:check" data-width="14" style={{strokeWidth: '2'}}></span>
</div>
<div>
<h4 className="font-semibold text-neutral-900 mb-1">Proven Track Record</h4>
<p className="text-sm text-neutral-600">Decades of combined experience delivering successful projects across multiple sectors.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center shrink-0 mt-1">
<span className="iconify text-blue-600" data-height="14" data-icon="lucide:check" data-width="14" style={{strokeWidth: '2'}}></span>
</div>
<div>
<h4 className="font-semibold text-neutral-900 mb-1">Client-Focused Approach</h4>
<p className="text-sm text-neutral-600">Collaborative partnerships that prioritize your goals, timelines, and budget requirements.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-transparent rounded-2xl opacity-50"></div>
<div className="relative bg-white border border-neutral-200 rounded-2xl p-8 shadow-xl">
<div className="grid grid-cols-2 gap-8">
<div className="text-center">
<div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
<div className="text-sm text-neutral-600 font-medium">Years Combined Experience</div>
</div>
<div className="text-center">
<div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
<div className="text-sm text-neutral-600 font-medium">Projects Completed</div>
</div>
<div className="text-center">
<div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
<div className="text-sm text-neutral-600 font-medium">Satisfied Clients</div>
</div>
<div className="text-center">
<div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
<div className="text-sm text-neutral-600 font-medium">Support Available</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-8 md:px-16 lg:px-24 bg-gradient-to-br from-blue-600 to-blue-700">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
Ready to Start Your Project?
</h2>
<p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
Let's discuss how Brandon Engineering can bring your vision to life with expert engineering solutions.
</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-50 text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors" href="#contact">
Contact Us Today
<span className="iconify" data-height="20" data-icon="lucide:arrow-right" data-width="20" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="inline-flex items-center justify-center gap-2 bg-blue-700/50 backdrop-blur-sm hover:bg-blue-700/70 text-white border border-white/20 px-8 py-4 rounded-lg font-semibold transition-colors" href="#services">
View All Services
</a>
</div>
</div>
</section>

<footer className="bg-neutral-900 text-neutral-300 py-12 px-8 md:px-16 lg:px-24">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-3 gap-12 mb-8">
<div>
<div className="text-xl font-bold text-white mb-4 tracking-tight">BRANDON ENGINEERING</div>
<p className="text-sm text-neutral-400 leading-relaxed">
Professional energy and design engineering services for Colorado and beyond.
</p>
</div>
<div>
<h4 className="font-semibold text-white mb-4 text-sm">Quick Links</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-white transition-colors" href="#home">Home</a></li>
<li><a className="hover:text-white transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-white transition-colors" href="#history">History</a></li>
<li><a className="hover:text-white transition-colors" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-white mb-4 text-sm">Contact Information</h4>
<ul className="space-y-2 text-sm">
<li className="flex items-start gap-2">
<span className="iconify text-neutral-500 mt-0.5" data-height="16" data-icon="lucide:map-pin" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span>Colorado, United States</span>
</li>
<li className="flex items-start gap-2">
<span className="iconify text-neutral-500 mt-0.5" data-height="16" data-icon="lucide:mail" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span>info@brandonengineering.com</span>
</li>
<li className="flex items-start gap-2">
<span className="iconify text-neutral-500 mt-0.5" data-height="16" data-icon="lucide:phone" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span>(555) 123-4567</span>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-neutral-500">
© 2024 Brandon Engineering, Inc. All rights reserved.
</p>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#privacy">Privacy Policy</a>
</div>
</div>
</footer>
</main>
</div>


    </>
  );
}
