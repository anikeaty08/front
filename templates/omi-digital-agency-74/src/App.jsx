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
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
background: '#0a0a0a',
surface: '#121212',
border: 'rgba(255, 255, 255, 0.08)',
primary: '#eeeeee',
secondary: '#888888',
olive: {
400: '#a8b56a',
800: '#3d4a2c'
},
teal: {
500: '#14b8a6',
900: '#134e4a'
},
accent: '#14b8a6'
},
boxShadow: {
'glow': '0 0 40px -10px rgba(255, 255, 255, 0.05)',
'inner-light': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
}
}
}
}



      // Page Navigation
      const navLinks = document.querySelectorAll('.nav-link');
      const pages = document.querySelectorAll('.page');

      navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetPage = link.getAttribute('data-page');
          
          // Hide all pages
          pages.forEach(page => {
            page.classList.remove('active');
          });
          
          // Show target page
          document.getElementById(targetPage).classList.add('active');
          
          // Update nav active state
          navLinks.forEach(l => {
            l.classList.remove('text-white');
            l.classList.add('text-secondary');
          });
          link.classList.add('text-white');
          link.classList.remove('text-secondary');
          
          // Scroll to top
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
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
      

<nav className="sticky top-0 z-50 bg-black/30 backdrop-blur-xl border-b border-border">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:atom-bold" width="18"></iconify-icon>
</div>
<span className="text-white font-semibold text-base">Omi</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="nav-link text-white hover:text-teal-400 transition-colors" data-page="home" href="#">Home</a>
<a className="nav-link hover:text-white transition-colors" data-page="services" href="#">Services</a>
<a className="nav-link hover:text-white transition-colors" data-page="about" href="#">About</a>
<a className="nav-link hover:text-white transition-colors" data-page="portfolio" href="#">Portfolio</a>
<a className="nav-link hover:text-white transition-colors" data-page="contact" href="#">Contact</a>
</div>
<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<div className="flex-1 relative z-10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="page active" id="home">
<section className="text-center mb-32">
<header className="py-20 text-center px-4">
<h1 className="text-5xl md:text-6xl font-serif mb-4 opacity-0 animate-fade-up tracking-tight text-white">
                We Build Systems That
                <br/>
<span className="text-teal-400">Turn Clicks Into Clients</span>
</h1>
<p className="max-w-2xl mx-auto text-lg md:text-xl text-secondary opacity-0 animate-fade-up animation-delay-200">
                From your website to social media to email — we design the digital
                infrastructure that attracts, nurtures, and converts your ideal
                customers.
              </p>
<div className="mt-8 flex gap-4 justify-center opacity-0 animate-fade-up animation-delay-400">
<button className="nav-link bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium px-6 py-3 rounded-lg hover:opacity-90 transition-opacity" data-page="contact">
                  Get Started
                </button>
<button className="nav-link border border-border text-white font-medium px-6 py-3 rounded-lg hover:bg-white/5 transition-colors" data-page="services">
                  Learn More
                </button>
</div>
</header>
</section>
<section className="grid md:grid-cols-3 gap-8 mb-32">
<div className="rounded-2xl border border-border bg-surface/50 backdrop-blur p-8 hover:bg-surface/70 transition-all">
<iconify-icon className="text-teal-400 mb-4" icon="solar:Widget-2-linear" width="32"></iconify-icon>
<h3 className="text-xl font-semibold text-white mb-3">Website Design</h3>
<p className="text-secondary">Beautiful, conversion-optimized websites that turn visitors into customers.</p>
</div>
<div className="rounded-2xl border border-border bg-surface/50 backdrop-blur p-8 hover:bg-surface/70 transition-all">
<iconify-icon className="text-teal-400 mb-4" icon="solar:chart-2-linear" width="32"></iconify-icon>
<h3 className="text-xl font-semibold text-white mb-3">Marketing Automation</h3>
<p className="text-secondary">Smart systems that nurture leads and drive sales on autopilot.</p>
</div>
<div className="rounded-2xl border border-border bg-surface/50 backdrop-blur p-8 hover:bg-surface/70 transition-all">
<iconify-icon className="text-teal-400 mb-4" icon="solar:stars-linear" width="32"></iconify-icon>
<h3 className="text-xl font-semibold text-white mb-3">Brand Strategy</h3>
<p className="text-secondary">Cohesive branding that makes your business unforgettable.</p>
</div>
</section>
</div>

<div className="page py-20" id="services">
<h1 className="text-5xl md:text-6xl font-serif mb-6 tracking-tight text-white">Our Services</h1>
<p className="text-xl text-secondary mb-16 max-w-3xl">We offer comprehensive digital solutions to help your business thrive online.</p>
<div className="space-y-12">
<div className="rounded-2xl border border-border bg-surface/50 backdrop-blur p-10">
<div className="flex items-start gap-6">
<div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-white" icon="solar:monitor-linear" width="32"></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-semibold text-white mb-3">Web Design &amp; Development</h3>
<p className="text-secondary mb-4">Custom websites built with modern technology, optimized for performance and conversions. Mobile-responsive, SEO-friendly, and designed to grow with your business.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-secondary">
<iconify-icon className="text-teal-400" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Responsive Design</span>
</li>
<li className="flex items-center gap-2 text-secondary">
<iconify-icon className="text-teal-400" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>E-commerce Solutions</span>
</li>
<li className="flex items-center gap-2 text-secondary">
<iconify-icon className="text-teal-400" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Content Management Systems</span>
</li>
</ul>
</div>
</div>
</div>
<div className="rounded-2xl border border-border bg-surface/50 backdrop-blur p-10">
<div className="flex items-start gap-6">
<div className="w-16 h-16 rounded-xl bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-white" icon="solar:chart-2-linear" width="32"></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-semibold text-white mb-3">Digital Marketing</h3>
<p className="text-secondary mb-4">Strategic campaigns that reach your target audience, build brand awareness, and drive measurable results across all digital channels.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-secondary">
<iconify-icon className="text-teal-400" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Social Media Marketing</span>
</li>
<li className="flex items-center gap-2 text-secondary">
<iconify-icon className="text-teal-400" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Email Marketing Campaigns</span>
</li>
<li className="flex items-center gap-2 text-secondary">
<iconify-icon className="text-teal-400" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>SEO Optimization</span>
</li>
</ul>
</div>
</div>
</div>
<div className="rounded-2xl border border-border bg-surface/50 backdrop-blur p-10">
<div className="flex items-start gap-6">
<div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-white" icon="solar:pallete-2-linear" width="32"></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-semibold text-white mb-3">Brand Strategy &amp; Design</h3>
<p className="text-secondary mb-4">Comprehensive brand identity that tells your story and connects with your audience. From logo to voice, we craft memorable brand experiences.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-secondary">
<iconify-icon className="text-teal-400" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Logo &amp; Identity Design</span>
</li>
<li className="flex items-center gap-2 text-secondary">
<iconify-icon className="text-teal-400" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Brand Guidelines</span>
</li>
<li className="flex items-center gap-2 text-secondary">
<iconify-icon className="text-teal-400" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Marketing Collateral</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>

<div className="page py-20" id="about">
<h1 className="text-5xl md:text-6xl font-serif mb-6 tracking-tight text-white">About Us</h1>
<p className="text-xl text-secondary mb-16 max-w-3xl">We're a team of designers, developers, and strategists passionate about helping businesses grow.</p>
<div className="grid md:grid-cols-2 gap-12 mb-20">
<div>
<h2 className="text-3xl font-serif text-white mb-4 tracking-tight">Our Mission</h2>
<p className="text-secondary mb-4">We believe every business deserves a strong digital presence. Our mission is to make world-class design and marketing accessible to companies of all sizes.</p>
<p className="text-secondary">Through thoughtful strategy, beautiful design, and smart technology, we help our clients stand out in crowded markets and build lasting relationships with their customers.</p>
</div>
<div>
<h2 className="text-3xl font-serif text-white mb-4 tracking-tight">Our Approach</h2>
<p className="text-secondary mb-4">We don't believe in one-size-fits-all solutions. Every project starts with understanding your unique goals, challenges, and audience.</p>
<p className="text-secondary">From there, we craft custom strategies and designs that align with your vision and drive real business results. We're with you every step of the way, from concept to launch and beyond.</p>
</div>
</div>
<div className="rounded-2xl border border-border bg-surface/50 backdrop-blur p-10">
<h2 className="text-3xl font-serif text-white mb-8 tracking-tight text-center">Our Values</h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="text-center">
<iconify-icon className="text-teal-400 mb-4" icon="solar:star-linear" width="40"></iconify-icon>
<h3 className="text-lg font-semibold text-white mb-2">Excellence</h3>
<p className="text-secondary text-sm">We're committed to delivering exceptional quality in everything we create.</p>
</div>
<div className="text-center">
<iconify-icon className="text-teal-400 mb-4" icon="solar:heart-linear" width="40"></iconify-icon>
<h3 className="text-lg font-semibold text-white mb-2">Partnership</h3>
<p className="text-secondary text-sm">Your success is our success. We work as an extension of your team.</p>
</div>
<div className="text-center">
<iconify-icon className="text-teal-400 mb-4" icon="solar:lightbulb-linear" width="40"></iconify-icon>
<h3 className="text-lg font-semibold text-white mb-2">Innovation</h3>
<p className="text-secondary text-sm">We stay ahead of trends to give you a competitive edge.</p>
</div>
</div>
</div>
</div>

<div className="page py-20" id="portfolio">
<h1 className="text-5xl md:text-6xl font-serif mb-6 tracking-tight text-white">Our Work</h1>
<p className="text-xl text-secondary mb-16 max-w-3xl">See how we've helped businesses transform their digital presence and achieve their goals.</p>
<div className="grid md:grid-cols-2 gap-8">
<div className="rounded-2xl border border-border bg-surface/50 backdrop-blur overflow-hidden group cursor-pointer hover:border-teal-400/50 transition-all">
<div className="h-64 bg-gradient-to-br from-purple-900/50 to-pink-900/50 flex items-center justify-center">
<span className="text-6xl font-serif text-white/20">Project 1</span>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold text-white mb-2">E-commerce Redesign</h3>
<p className="text-secondary mb-4">Complete website overhaul resulting in 150% increase in online sales.</p>
<div className="flex gap-2">
<span className="text-xs px-3 py-1 rounded-full bg-teal-400/10 text-teal-400 border border-teal-400/20">Web Design</span>
<span className="text-xs px-3 py-1 rounded-full bg-teal-400/10 text-teal-400 border border-teal-400/20">E-commerce</span>
</div>
</div>
</div>
<div className="rounded-2xl border border-border bg-surface/50 backdrop-blur overflow-hidden group cursor-pointer hover:border-teal-400/50 transition-all">
<div className="h-64 bg-gradient-to-br from-teal-900/50 to-blue-900/50 flex items-center justify-center">
<span className="text-6xl font-serif text-white/20">Project 2</span>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold text-white mb-2">Brand Identity System</h3>
<p className="text-secondary mb-4">Full rebrand for a tech startup, from logo to digital presence.</p>
<div className="flex gap-2">
<span className="text-xs px-3 py-1 rounded-full bg-teal-400/10 text-teal-400 border border-teal-400/20">Branding</span>
<span className="text-xs px-3 py-1 rounded-full bg-teal-400/10 text-teal-400 border border-teal-400/20">Design</span>
</div>
</div>
</div>
<div className="rounded-2xl border border-border bg-surface/50 backdrop-blur overflow-hidden group cursor-pointer hover:border-teal-400/50 transition-all">
<div className="h-64 bg-gradient-to-br from-orange-900/50 to-red-900/50 flex items-center justify-center">
<span className="text-6xl font-serif text-white/20">Project 3</span>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold text-white mb-2">Marketing Automation</h3>
<p className="text-secondary mb-4">Implemented automated email sequences generating 50+ leads per month.</p>
<div className="flex gap-2">
<span className="text-xs px-3 py-1 rounded-full bg-teal-400/10 text-teal-400 border border-teal-400/20">Marketing</span>
<span className="text-xs px-3 py-1 rounded-full bg-teal-400/10 text-teal-400 border border-teal-400/20">Automation</span>
</div>
</div>
</div>
<div className="rounded-2xl border border-border bg-surface/50 backdrop-blur overflow-hidden group cursor-pointer hover:border-teal-400/50 transition-all">
<div className="h-64 bg-gradient-to-br from-green-900/50 to-teal-900/50 flex items-center justify-center">
<span className="text-6xl font-serif text-white/20">Project 4</span>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold text-white mb-2">Social Media Strategy</h3>
<p className="text-secondary mb-4">6-month campaign growing audience by 300% and engagement by 450%.</p>
<div className="flex gap-2">
<span className="text-xs px-3 py-1 rounded-full bg-teal-400/10 text-teal-400 border border-teal-400/20">Social Media</span>
<span className="text-xs px-3 py-1 rounded-full bg-teal-400/10 text-teal-400 border border-teal-400/20">Strategy</span>
</div>
</div>
</div>
</div>
</div>

<div className="page py-20" id="contact">
<div className="max-w-4xl mx-auto">
<h1 className="text-5xl md:text-6xl font-serif mb-6 tracking-tight text-white text-center">Let's Work Together</h1>
<p className="text-xl text-secondary mb-16 text-center max-w-2xl mx-auto">Ready to transform your digital presence? Get in touch and let's discuss how we can help you grow.</p>
<div className="grid md:grid-cols-2 gap-12">
<div>
<div className="rounded-2xl border border-border bg-surface/50 backdrop-blur p-8 mb-8">
<h3 className="text-xl font-semibold text-white mb-6">Get in Touch</h3>
<div className="space-y-4">
<div className="flex items-start gap-4">
<iconify-icon className="text-teal-400 mt-1" icon="solar:letter-linear" width="24"></iconify-icon>
<div>
<p className="text-white font-medium mb-1">Email</p>
<a className="text-secondary hover:text-teal-400 transition-colors" href="mailto:hello@omi.com">hello@omi.com</a>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-teal-400 mt-1" icon="solar:phone-linear" width="24"></iconify-icon>
<div>
<p className="text-white font-medium mb-1">Phone</p>
<a className="text-secondary hover:text-teal-400 transition-colors" href="tel:+15551234567">+1 (555) 123-4567</a>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-teal-400 mt-1" icon="solar:map-point-linear" width="24"></iconify-icon>
<div>
<p className="text-white font-medium mb-1">Location</p>
<p className="text-secondary">San Francisco, CA</p>
</div>
</div>
</div>
</div>
<div className="flex gap-4">
<a className="w-12 h-12 rounded-lg border border-border bg-surface/50 flex items-center justify-center hover:bg-surface transition-colors" href="#">
<iconify-icon className="text-secondary" icon="solar:twitter-linear" width="20"></iconify-icon>
</a>
<a className="w-12 h-12 rounded-lg border border-border bg-surface/50 flex items-center justify-center hover:bg-surface transition-colors" href="#">
<iconify-icon className="text-secondary" icon="solar:linkedin-linear" width="20"></iconify-icon>
</a>
<a className="w-12 h-12 rounded-lg border border-border bg-surface/50 flex items-center justify-center hover:bg-surface transition-colors" href="#">
<iconify-icon className="text-secondary" icon="solar:instagram-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="rounded-2xl border border-border bg-surface/50 backdrop-blur p-8">
<form className="space-y-4">
<div>
<label className="text-sm text-white mb-2 block">Name</label>
<input className="w-full px-4 py-3 rounded-lg bg-background border border-border text-white placeholder-secondary focus:outline-none focus:border-teal-500 transition-colors" placeholder="Your Name" type="text"/>
</div>
<div>
<label className="text-sm text-white mb-2 block">Email</label>
<input className="w-full px-4 py-3 rounded-lg bg-background border border-border text-white placeholder-secondary focus:outline-none focus:border-teal-500 transition-colors" placeholder="your@email.com" type="email"/>
</div>
<div>
<label className="text-sm text-white mb-2 block">Message</label>
<textarea className="w-full px-4 py-3 rounded-lg bg-background border border-border text-white placeholder-secondary focus:outline-none focus:border-teal-500 transition-colors resize-none" placeholder="Tell us about your project..." rows="4"></textarea>
</div>
<button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium px-6 py-3 rounded-lg hover:opacity-90 transition-opacity" type="submit">
                    Send Message
                  </button>
</form>
</div>
</div>
</div>
</div>
</div>
</div>

<footer className="border-t border-border pt-16 pb-8 relative z-10 mt-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div>
<h4 className="text-white font-semibold mb-4">Product</h4>
<ul className="space-y-2 text-sm text-secondary">
<li>
<a className="hover:text-white transition-colors" href="#">
                  Features
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Pricing
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Integrations
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Roadmap
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Company</h4>
<ul className="space-y-2 text-sm text-secondary">
<li>
<a className="nav-link hover:text-white transition-colors" data-page="about" href="#">
                  About
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Blog
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Careers
                </a>
</li>
<li>
<a className="nav-link hover:text-white transition-colors" data-page="contact" href="#">
                  Contact
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Resources</h4>
<ul className="space-y-2 text-sm text-secondary">
<li>
<a className="hover:text-white transition-colors" href="#">
                  Documentation
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Help Center
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Community
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">API</a>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-secondary">
<li>
<a className="hover:text-white transition-colors" href="#">
                  Privacy
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Terms
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Security
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Cookies
                </a>
</li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border gap-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:atom-bold" width="16"></iconify-icon>
</div>
<span className="text-white font-semibold">Omi</span>
</div>
<p className="text-sm text-secondary">
            © 2024 Omi. All rights reserved.
          </p>
<div className="flex items-center gap-4">
<a className="text-secondary hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:twitter-linear" width="20"></iconify-icon>
</a>
<a className="text-secondary hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:github-linear" width="20"></iconify-icon>
</a>
<a className="text-secondary hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:linkedin-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

<div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] overflow-hidden">
<div className="absolute -top-48 left-1/3 w-96 h-96 bg-olive-400 opacity-30 rounded-full blur-3xl"></div>
<div className="absolute bottom-10 right-1/4 w-72 h-72 bg-teal-500 opacity-25 rounded-full blur-2xl"></div>
</div>


    </>
  );
}
