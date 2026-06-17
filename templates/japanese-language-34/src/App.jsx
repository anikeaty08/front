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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.getElementById('mobile-menu-btn').addEventListener('click', function() {
            var menu = document.getElementById('mobile-menu');
            if (menu.classList.contains('hidden')) {
                menu.classList.remove('hidden');
            } else {
                menu.classList.add('hidden');
            }
        });

        // Close mobile menu on link click
        var mobileLinks = document.querySelectorAll('#mobile-menu a');
        mobileLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                document.getElementById('mobile-menu').classList.add('hidden');
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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<a className="flex items-center gap-2 group" href="#home">
<div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center text-white transition-transform group-hover:scale-105">
<iconify-icon className="text-lg" icon="solar:tea-cup-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="font-semibold tracking-tighter text-xl text-neutral-900">SJLI</span>
</a>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-neutral-500 hover:text-red-600 transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-neutral-500 hover:text-red-600 transition-colors" href="#courses">Courses</a>
<a className="text-sm font-medium text-neutral-500 hover:text-red-600 transition-colors" href="#why-us">Why Us</a>
<a className="text-sm font-medium bg-neutral-900 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors" href="#contact">Contact Us</a>
</div>

<div className="md:hidden flex items-center">
<button className="text-neutral-500 hover:text-neutral-900 focus:outline-none" id="mobile-menu-btn">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden bg-white border-b border-neutral-100 px-4 pt-2 pb-4 space-y-1" id="mobile-menu">
<a className="block px-3 py-2 text-base font-medium text-neutral-600 hover:text-red-600 hover:bg-neutral-50 rounded-md" href="#about">About</a>
<a className="block px-3 py-2 text-base font-medium text-neutral-600 hover:text-red-600 hover:bg-neutral-50 rounded-md" href="#courses">Courses</a>
<a className="block px-3 py-2 text-base font-medium text-neutral-600 hover:text-red-600 hover:bg-neutral-50 rounded-md" href="#why-us">Why Us</a>
<a className="block px-3 py-2 text-base font-medium text-red-600 hover:bg-red-50 rounded-md" href="#contact">Contact Us</a>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex items-center min-h-[90vh]" id="home">

<div className="absolute inset-0 z-0 bg-neutral-950">
<img alt="Japan Landscape" className="w-full h-full object-cover object-top opacity-20 mix-blend-luminosity" src="https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&amp;w=2092&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-transparent to-neutral-950"></div>

<div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/20 rounded-full blur-[120px] pointer-events-none"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm mb-8">
<span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
<span className="text-xs font-medium text-neutral-200 tracking-wide uppercase">Admissions Open 2024</span>
</div>
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white max-w-5xl mx-auto leading-tight">
                Samurai Japanese Language <br className="hidden md:block"/> Institute Bodhgaya
            </h1>
<p className="mt-6 text-lg md:text-xl font-normal text-neutral-400 max-w-2xl mx-auto tracking-tight">
                Learn Japanese <span className="text-neutral-600 mx-2">|</span> Build Your Future in Japan 🇯🇵
            </p>
<div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="w-full sm:w-auto px-8 py-3.5 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-xl transition-all shadow-lg shadow-red-600/20 flex items-center justify-center gap-2 group" href="#contact">
                    Join Now
                    <iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white/5 hover:bg-white/10 text-white border border-white/10 text-sm font-medium rounded-xl transition-all flex items-center justify-center backdrop-blur-sm" href="#courses">
                    Explore Courses
                </a>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">
<div className="aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-100 relative">
<img alt="Japanese Culture" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 border border-black/5 rounded-2xl"></div>
</div>

<div className="absolute -bottom-6 -right-6 w-32 h-32 bg-red-50 rounded-full blur-2xl -z-10"></div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-6">
                        Your Gateway to <span className="text-red-600">Japan</span>
</h2>
<div className="space-y-6 text-base font-normal text-neutral-500 leading-relaxed">
<p>
                            Welcome to Samurai Japanese Language Institute, Bodhgaya's premier destination for mastering the Japanese language. We are dedicated to bridging cultures and opening doors to global opportunities.
                        </p>
<p>
                            Our institute is more than just a language center; it is a launchpad for your career. Whether your goal is to pursue higher education, seek employment, or immerse yourself in the rich cultural heritage of Japan, our structured programs are designed to ensure your success.
                        </p>
</div>
<div className="mt-8 grid grid-cols-2 gap-6 pt-8 border-t border-neutral-100">
<div>
<div className="text-2xl font-semibold tracking-tight text-neutral-900">500+</div>
<div className="text-sm text-neutral-500 mt-1">Students Taught</div>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight text-neutral-900">100%</div>
<div className="text-sm text-neutral-500 mt-1">Visa Success Assistance</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50 border-y border-neutral-200/50" id="courses">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-4">Our Programs</h2>
<p className="text-base text-neutral-500">Comprehensive courses tailored to help you achieve fluency and prepare for a successful life in Japan.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group bg-white rounded-2xl p-8 border border-neutral-200 hover:border-red-200 hover:shadow-xl hover:shadow-red-600/5 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-neutral-50 group-hover:bg-red-50 text-neutral-600 group-hover:text-red-600 flex items-center justify-center mb-6 transition-colors border border-neutral-100 group-hover:border-red-100">
<iconify-icon className="text-2xl" icon="solar:book-bookmark-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-neutral-900 mb-3">JLPT N5 to N2</h3>
<p className="text-sm text-neutral-500 leading-relaxed mb-6">
                        Structured preparation for the Japanese Language Proficiency Test. Master vocabulary, kanji, grammar, and listening comprehension.
                    </p>
<ul className="space-y-2 mb-8">
<li className="flex items-center text-sm text-neutral-600 gap-2">
<iconify-icon className="text-red-500" icon="solar:check-circle-linear"></iconify-icon> Official Curriculum
                        </li>
<li className="flex items-center text-sm text-neutral-600 gap-2">
<iconify-icon className="text-red-500" icon="solar:check-circle-linear"></iconify-icon> Mock Tests
                        </li>
</ul>
</div>

<div className="group bg-white rounded-2xl p-8 border border-neutral-200 hover:border-red-200 hover:shadow-xl hover:shadow-red-600/5 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 px-3 py-1 bg-neutral-900 text-white text-xs font-medium rounded-bl-xl">Popular</div>
<div className="w-12 h-12 rounded-xl bg-neutral-50 group-hover:bg-red-50 text-neutral-600 group-hover:text-red-600 flex items-center justify-center mb-6 transition-colors border border-neutral-100 group-hover:border-red-100">
<iconify-icon className="text-2xl" icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-neutral-900 mb-3">Spoken Japanese</h3>
<p className="text-sm text-neutral-500 leading-relaxed mb-6">
                        Focus purely on conversational fluency. Perfect for those looking to communicate effectively in day-to-step life in Japan.
                    </p>
<ul className="space-y-2 mb-8">
<li className="flex items-center text-sm text-neutral-600 gap-2">
<iconify-icon className="text-red-500" icon="solar:check-circle-linear"></iconify-icon> Native Pronunciation
                        </li>
<li className="flex items-center text-sm text-neutral-600 gap-2">
<iconify-icon className="text-red-500" icon="solar:check-circle-linear"></iconify-icon> Role-play Sessions
                        </li>
</ul>
</div>

<div className="group bg-white rounded-2xl p-8 border border-neutral-200 hover:border-red-200 hover:shadow-xl hover:shadow-red-600/5 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-neutral-50 group-hover:bg-red-50 text-neutral-600 group-hover:text-red-600 flex items-center justify-center mb-6 transition-colors border border-neutral-100 group-hover:border-red-100">
<iconify-icon className="text-2xl" icon="solar:briefcase-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-neutral-900 mb-3">Study &amp; Job Guidance</h3>
<p className="text-sm text-neutral-500 leading-relaxed mb-6">
                        End-to-end consulting for moving to Japan. We assist with university admissions, student visas, and job placements.
                    </p>
<ul className="space-y-2 mb-8">
<li className="flex items-center text-sm text-neutral-600 gap-2">
<iconify-icon className="text-red-500" icon="solar:check-circle-linear"></iconify-icon> Visa Documentation
                        </li>
<li className="flex items-center text-sm text-neutral-600 gap-2">
<iconify-icon className="text-red-500" icon="solar:check-circle-linear"></iconify-icon> Interview Prep
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="why-us">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-4">Why Choose Us?</h2>
<p className="text-base text-neutral-500 mb-10 max-w-md">We provide an immersive learning environment that goes beyond textbooks, preparing you for real-world interactions.</p>
<div className="space-y-8">
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-600">
<iconify-icon className="text-xl" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-semibold tracking-tight text-neutral-900 mb-1">Experienced Teachers</h4>
<p className="text-sm text-neutral-500">Learn from highly qualified instructors with years of experience and deep cultural understanding.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-600">
<iconify-icon className="text-xl" icon="solar:laptop-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-semibold tracking-tight text-neutral-900 mb-1">Practical Learning</h4>
<p className="text-sm text-neutral-500">Modern teaching methodologies focusing on practical usage, media immersion, and interactive classes.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-600">
<iconify-icon className="text-xl" icon="solar:compass-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-semibold tracking-tight text-neutral-900 mb-1">Career Guidance</h4>
<p className="text-sm text-neutral-500">Dedicated support to help you navigate the Japanese job market or academic institutions.</p>
</div>
</div>
</div>
</div>

<div className="relative h-full min-h-[400px] rounded-2xl bg-neutral-900 overflow-hidden flex items-center justify-center p-8">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="relative z-10 text-center">
<div className="inline-flex w-20 h-20 rounded-full bg-red-600/20 border border-red-500/30 items-center justify-center mb-6">
<iconify-icon className="text-4xl text-red-500" icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-2">Excellence in Education</h3>
<p className="text-sm text-neutral-400">Join the ranks of successful students who have transformed their lives with SJLI.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50 border-t border-neutral-200/50" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-neutral-200 overflow-hidden">
<div className="grid grid-cols-1 md:grid-cols-5">

<div className="md:col-span-2 bg-neutral-900 p-10 text-white relative overflow-hidden flex flex-col justify-between">

<div className="absolute top-0 right-0 w-64 h-64 bg-red-600/20 rounded-full blur-[80px] -z-10"></div>
<div>
<h3 className="text-2xl font-semibold tracking-tight mb-2">Get in touch</h3>
<p className="text-sm text-neutral-400 mb-10">Have questions about our courses or admissions? Reach out to us.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<iconify-icon className="text-xl text-red-500 mt-0.5" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
<div>
<p className="text-xs text-neutral-400 font-medium uppercase tracking-wider mb-1">Phone</p>
<p className="text-base text-neutral-200">+91 5645455467</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-xl text-red-500 mt-0.5" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
<div>
<p className="text-xs text-neutral-400 font-medium uppercase tracking-wider mb-1">Location</p>
<p className="text-base text-neutral-200">Bodhgaya, Bihar, India</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-xl text-red-500 mt-0.5" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
<div>
<p className="text-xs text-neutral-400 font-medium uppercase tracking-wider mb-1">Email</p>
<p className="text-base text-neutral-200">info@sjlibodhgaya.com</p>
</div>
</div>
</div>
</div>
<div className="mt-12 flex gap-4">
<a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:global-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>

<div className="md:col-span-3 p-10">
<form className="space-y-6" onsubmit="event.preventDefault();">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-700">Full Name</label>
<input className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all placeholder:text-neutral-400" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-700">Phone Number</label>
<input className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all placeholder:text-neutral-400" placeholder="+91 00000 00000" type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-700">Course of Interest</label>
<div className="relative">
<select className="w-full appearance-none bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all text-neutral-700">
<option disabled="" selected="" value="">Select a course</option>
<option value="jlpt">JLPT N5-N2 Preparation</option>
<option value="spoken">Spoken Japanese</option>
<option value="guidance">Study &amp; Job Guidance</option>
</select>
<div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-neutral-400">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-700">Message</label>
<textarea className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all placeholder:text-neutral-400 resize-none" placeholder="How can we help you?" rows="4"></textarea>
</div>
<button className="w-full px-6 py-3.5 bg-neutral-900 hover:bg-red-600 text-white text-sm font-medium rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2" type="submit">
                                Send Message
                                <iconify-icon className="text-lg" icon="solar:plain-linear" strokeWidth="1.5"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-neutral-200 py-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2">
<span className="font-semibold tracking-tighter text-lg text-neutral-900">SJLI</span>
</div>
<p className="text-xs text-neutral-500">
                © 2024 Samurai Japanese Language Institute Bodhgaya. All rights reserved.
            </p>
</div>
</footer>



    </>
  );
}
