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
colors: {
primary: '#1f3868',
secondary: '#2C3E2D',
neutral: '#000000',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
}
}
}
}



        // SPA Routing Logic
        function showPage(pageId) {
            // Hide all pages
            const pages = document.querySelectorAll('.page-section');
            pages.forEach(page => {
                page.classList.add('hidden');
            });

            // Show selected page
            const selectedPage = document.getElementById(pageId);
            if (selectedPage) {
                selectedPage.classList.remove('hidden');
                // Scroll to top
                window.scrollTo(0, 0);
            }
        }

        // Verification Mock Logic
        function verifyStudent() {
            const name = document.getElementById('verify-name').value;
            const id = document.getElementById('verify-id').value;
            const resultDiv = document.getElementById('verify-result');

            // Simulate loading
            resultDiv.classList.remove('hidden');
            resultDiv.innerHTML = `<div class="flex items-center justify-center gap-2 text-slate-500"><iconify-icon icon="line-md:loading-loop" width="24"></iconify-icon> Searching Database...</div>`;

            setTimeout(() => {
                // Hardcoded Logic for demo: If ID contains "2023", success. Else fail.
                if (id.includes('2023')) {
                    resultDiv.innerHTML = `
                        <div class="bg-green-50 border border-green-200 rounded-lg p-4 animate-fade-in">
                            <div class="flex items-start gap-3">
                                <div class="bg-green-100 p-2 rounded-full text-green-600">
                                    <iconify-icon icon="solar:verified-check-bold"></iconify-icon>
                                </div>
                                <div>
                                    <h4 class="text-green-800 font-semibold">Verified Student</h4>
                                    <p class="text-sm text-green-700 mt-1"><strong>${name}</strong> is a valid student/alumni of IASS.</p>
                                    <div class="text-xs text-green-600 mt-2">ID: ${id} • Status: Active</div>
                                </div>
                            </div>
                        </div>
                    `;
                } else {
                    resultDiv.innerHTML = `
                        <div class="bg-red-50 border border-red-200 rounded-lg p-4 animate-fade-in">
                            <div class="flex items-start gap-3">
                                <div class="bg-red-100 p-2 rounded-full text-red-600">
                                    <iconify-icon icon="solar:close-circle-bold"></iconify-icon>
                                </div>
                                <div>
                                    <h4 class="text-red-800 font-semibold">Record Not Found</h4>
                                    <p class="text-sm text-red-700 mt-1">We could not find a record matching ID: <strong>${id}</strong>.</p>
                                    <p class="text-xs text-red-600 mt-2">Please check the ID and try again or contact administration.</p>
                                </div>
                            </div>
                        </div>
                    `;
                }
            }, 1500);
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            showPage('home');
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
      

<nav className="fixed top-0 w-full z-50 glass-nav">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#" onclick="showPage('home')">
<div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xl font-bold tracking-tighter text-primary group-hover:opacity-80 transition-opacity">IASS</span>
</a>

<div className="hidden md:flex items-center gap-8">
<button className="text-sm font-medium text-slate-600 hover:text-primary transition-colors" onclick="showPage('home')">Home</button>
<div className="relative group h-20 flex items-center">
<button className="text-sm font-medium text-slate-600 group-hover:text-primary transition-colors flex items-center gap-1">
                        Courses <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>

<div className="absolute top-16 left-0 w-64 bg-white border border-slate-100 shadow-xl rounded-xl p-2 hidden group-hover:block transition-all opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-200">
<button className="w-full text-left px-4 py-3 rounded-lg hover:bg-slate-50 flex items-center gap-3 group/item" onclick="showPage('asp')">
<div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover/item:bg-primary group-hover/item:text-white transition-colors">
<iconify-icon icon="solar:diploma-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-800">ASP Certification</div>
<div className="text-xs text-slate-400">Associate Safety Professional</div>
</div>
</button>
<button className="w-full text-left px-4 py-3 rounded-lg hover:bg-slate-50 flex items-center gap-3 group/item mt-1" onclick="showPage('csp')">
<div className="w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center group-hover/item:bg-secondary group-hover/item:text-white transition-colors">
<iconify-icon icon="solar:medal-star-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-800">CSP Certification</div>
<div className="text-xs text-slate-400">Certified Safety Professional</div>
</div>
</button>
</div>
</div>
<button className="text-sm font-medium text-slate-600 hover:text-primary transition-colors" onclick="showPage('about')">About Us</button>
<button className="text-sm font-medium text-slate-600 hover:text-primary transition-colors" onclick="showPage('sessions')">Upcoming Sessions</button>
<button className="text-sm font-medium text-slate-600 hover:text-primary transition-colors flex items-center gap-1" onclick="showPage('verify')">
<iconify-icon className="text-secondary" icon="solar:verified-check-linear"></iconify-icon> Verify
                </button>
</div>

<button className="md:hidden text-slate-600">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<main className="pt-20 min-h-screen" id="main-content">

<div className="page-section fade-in" id="home">

<section className="relative overflow-hidden bg-slate-50 border-b border-slate-200">
<div className="absolute top-0 left-0 w-full h-full opacity-30 bg-[radial-gradient(#1f3868_1px,transparent_1px)] [background-size:20px_20px]"></div>
<div className="max-w-7xl mx-auto px-6 py-20 md:py-32 relative z-10 grid md:grid-cols-2 gap-12 items-center">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-medium tracking-wide uppercase">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            Global Safety Standards
                        </div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
                            Advance Your Career in <span className="text-primary">Occupational Safety</span>
</h1>
<p className="text-lg text-slate-500 max-w-lg leading-relaxed">
                            IASS provides world-class preparation for ASP &amp; CSP certifications. Empowering professionals with knowledge, integrity, and recognized qualifications.
                        </p>
<div className="flex flex-wrap items-center gap-4 pt-2">
<button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg text-sm font-medium transition-all shadow-lg shadow-primary/20 flex items-center gap-2" onclick="showPage('sessions')">
                                Find a Session <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-6 py-3 rounded-lg text-sm font-medium transition-all" onclick="showPage('about')">
                                Discover IASS
                            </button>
</div>
<div className="pt-6 flex items-center gap-6 text-sm text-slate-400">
<div className="flex items-center gap-2">
<iconify-icon className="text-secondary" icon="solar:users-group-rounded-linear"></iconify-icon> 5000+ Alumni
                            </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-secondary" icon="solar:globe-linear"></iconify-icon> Global Recognition
                            </div>
</div>
</div>
<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-2xl opacity-40"></div>
<img alt="Safety Professional" className="relative rounded-2xl shadow-2xl border border-white/50 w-full object-cover h-[500px]" src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-8 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-4 animate-bounce" style={{animationDuration: '3s'}}>
<div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600">
<iconify-icon icon="solar:verified-check-bold" width="24"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-slate-900">Certified Institute</div>
<div className="text-xs text-slate-500">ISO 9001:2015</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-b border-slate-100 bg-white">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-sm text-slate-400 font-medium mb-8">Trusted by professionals from world-leading organizations</p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
<span className="text-xl font-bold tracking-tighter text-slate-800">ARAMCO</span>
<span className="text-xl font-bold tracking-tighter text-slate-800">SABIC</span>
<span className="text-xl font-bold tracking-tighter text-slate-800 italic">ADNOC</span>
<span className="text-xl font-bold tracking-tighter text-slate-800">SCHLUMBERGER</span>
<span className="text-xl font-bold tracking-tighter text-slate-800">PETROFAC</span>
<span className="text-xl font-bold tracking-tighter text-slate-800">SIEMENS</span>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Elite Safety Certifications</h2>
<p className="text-slate-500">Comprehensive preparation courses designed for ambitious safety professionals aiming for global recognition.</p>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="group relative bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 hover:border-primary/30">
<div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
<iconify-icon icon="solar:diploma-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-primary mb-2">ASP Certification</h3>
<p className="text-sm font-medium text-slate-400 mb-4 tracking-wide uppercase">Associate Safety Professional</p>
<p className="text-slate-500 mb-8 leading-relaxed">
                                The starting point for a professional safety career. Gain foundational knowledge in safety, health, and environmental management systems.
                            </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-secondary" icon="solar:check-circle-linear"></iconify-icon> Comprehensive Syllabus Coverage
                                </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-secondary" icon="solar:check-circle-linear"></iconify-icon> Mock Exams &amp; Study Material
                                </li>
</ul>
<button className="w-full py-3 rounded-lg border border-slate-200 text-slate-700 font-medium hover:bg-primary hover:text-white hover:border-primary transition-all" onclick="showPage('asp')">
                                View Course Details
                            </button>
</div>

<div className="group relative bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-2xl hover:shadow-secondary/5 transition-all duration-300 hover:border-secondary/30">
<div className="w-14 h-14 bg-secondary/5 rounded-xl flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
<iconify-icon icon="solar:medal-star-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-secondary mb-2">CSP Certification</h3>
<p className="text-sm font-medium text-slate-400 mb-4 tracking-wide uppercase">Certified Safety Professional</p>
<p className="text-slate-500 mb-8 leading-relaxed">
                                The gold standard in safety certification. Advance your expertise to a strategic level and lead safety initiatives globally.
                            </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-primary" icon="solar:check-circle-linear"></iconify-icon> Advanced Management Strategies
                                </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-primary" icon="solar:check-circle-linear"></iconify-icon> Strategic Leadership Modules
                                </li>
</ul>
<button className="w-full py-3 rounded-lg border border-slate-200 text-slate-700 font-medium hover:bg-secondary hover:text-white hover:border-secondary transition-all" onclick="showPage('csp')">
                                View Course Details
                            </button>
</div>
</div>
</div>
</section>

<section className="py-20 bg-primary text-white relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid md:grid-cols-4 gap-12 text-center md:text-left">
<div>
<div className="text-5xl font-bold tracking-tight mb-2">98%</div>
<div className="text-primary-100 text-sm font-medium opacity-80 uppercase tracking-wide">Exam Pass Rate</div>
</div>
<div>
<div className="text-5xl font-bold tracking-tight mb-2">50+</div>
<div className="text-primary-100 text-sm font-medium opacity-80 uppercase tracking-wide">Countries Reached</div>
</div>
<div>
<div className="text-5xl font-bold tracking-tight mb-2">12k</div>
<div className="text-primary-100 text-sm font-medium opacity-80 uppercase tracking-wide">Contact Hours</div>
</div>
<div>
<div className="text-5xl font-bold tracking-tight mb-2">24/7</div>
<div className="text-primary-100 text-sm font-medium opacity-80 uppercase tracking-wide">Mentor Support</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Your Journey to Certification</h2>
<p className="text-slate-500">A structured path designed to take you from enrollment to certified professional.</p>
</div>
<div className="grid md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-slate-200 via-primary/20 to-slate-200 -z-10"></div>
<div className="bg-white p-6 pt-0 text-center group">
<div className="w-24 h-24 mx-auto bg-white border-4 border-slate-50 rounded-full flex items-center justify-center mb-6 group-hover:border-primary/20 transition-colors">
<div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-slate-600 group-hover:bg-primary group-hover:text-white transition-colors">
<iconify-icon icon="solar:user-plus-linear" width="32"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">1. Enroll</h3>
<p className="text-sm text-slate-500">Select your course and schedule. Get instant access to preliminary materials.</p>
</div>
<div className="bg-white p-6 pt-0 text-center group">
<div className="w-24 h-24 mx-auto bg-white border-4 border-slate-50 rounded-full flex items-center justify-center mb-6 group-hover:border-primary/20 transition-colors">
<div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-slate-600 group-hover:bg-primary group-hover:text-white transition-colors">
<iconify-icon icon="solar:book-bookmark-linear" width="32"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">2. Prepare</h3>
<p className="text-sm text-slate-500">Attend live sessions, solve workshops, and master the domain knowledge.</p>
</div>
<div className="bg-white p-6 pt-0 text-center group">
<div className="w-24 h-24 mx-auto bg-white border-4 border-slate-50 rounded-full flex items-center justify-center mb-6 group-hover:border-primary/20 transition-colors">
<div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-slate-600 group-hover:bg-primary group-hover:text-white transition-colors">
<iconify-icon icon="solar:test-tube-linear" width="32"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">3. Mock Exams</h3>
<p className="text-sm text-slate-500">Test your readiness with our proprietary exam simulator until you score 90%.</p>
</div>
<div className="bg-white p-6 pt-0 text-center group">
<div className="w-24 h-24 mx-auto bg-white border-4 border-slate-50 rounded-full flex items-center justify-center mb-6 group-hover:border-primary/20 transition-colors">
<div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-slate-600 group-hover:bg-primary group-hover:text-white transition-colors">
<iconify-icon icon="solar:medal-ribbon-linear" width="32"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">4. Certified</h3>
<p className="text-sm text-slate-500">Sit for the actual exam with confidence and achieve your designation.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Learn from Industry Leaders</h2>
<p className="text-slate-500 max-w-xl">Our instructors aren't just teachers; they are practicing professionals, auditors, and consultants with decades of field experience.</p>
</div>
<button className="text-primary font-medium hover:underline flex items-center gap-2">
                            Meet the whole team <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow">
<div className="flex items-center gap-4 mb-4">
<img alt="Instructor" className="w-16 h-16 rounded-full object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<h4 className="font-semibold text-slate-900">Dr. Robert Chen</h4>
<div className="text-xs font-bold text-primary bg-primary/5 px-2 py-0.5 rounded inline-block mt-1">CSP, CIT, PhD</div>
</div>
</div>
<p className="text-sm text-slate-600 leading-relaxed">
                                "Safety isn't just about compliance; it's about culture." Dr. Chen has over 20 years of experience in Petrochemicals and has trained over 2,000 aspirants.
                            </p>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow">
<div className="flex items-center gap-4 mb-4">
<img alt="Instructor" className="w-16 h-16 rounded-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<h4 className="font-semibold text-slate-900">Sarah Williams</h4>
<div className="text-xs font-bold text-secondary bg-secondary/5 px-2 py-0.5 rounded inline-block mt-1">CSP, CMIOSH</div>
</div>
</div>
<p className="text-sm text-slate-600 leading-relaxed">
                                Specializes in Risk Management and Emergency Response. Sarah brings practical insights from her time leading safety at major construction mega-projects.
                            </p>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow">
<div className="flex items-center gap-4 mb-4">
<img alt="Instructor" className="w-16 h-16 rounded-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<h4 className="font-semibold text-slate-900">James Miller</h4>
<div className="text-xs font-bold text-primary bg-primary/5 px-2 py-0.5 rounded inline-block mt-1">ASP, CSP, CIH</div>
</div>
</div>
<p className="text-sm text-slate-600 leading-relaxed">
                                An expert in Industrial Hygiene and Ergonomics. James helps students break down complex math problems into simple, solvable steps.
                            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-center text-slate-900 mb-16">Success Stories</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="p-8 bg-slate-50 rounded-2xl relative">
<iconify-icon className="text-primary/10 text-5xl absolute top-6 right-6" icon="solar:quote-up-bold"></iconify-icon>
<div className="flex text-yellow-400 gap-1 mb-4 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 font-medium">"I failed the ASP exam twice before joining IASS. Their structured approach and mock exams were exactly what I needed. Passed on my first try with them!"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
<iconify-icon icon="solar:user-bold"></iconify-icon>
</div>
<div>
<div className="text-sm font-bold text-slate-900">Ahmed Al-Sayed</div>
<div className="text-xs text-slate-500">Safety Engineer, Qatar</div>
</div>
</div>
</div>

<div className="p-8 bg-slate-50 rounded-2xl relative">
<iconify-icon className="text-primary/10 text-5xl absolute top-6 right-6" icon="solar:quote-up-bold"></iconify-icon>
<div className="flex text-yellow-400 gap-1 mb-4 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 font-medium">"The CSP course is intense, but the instructors at IASS make it digestible. The support team was available even on weekends to answer my queries."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
<iconify-icon icon="solar:user-bold"></iconify-icon>
</div>
<div>
<div className="text-sm font-bold text-slate-900">Emily Johnson</div>
<div className="text-xs text-slate-500">HSE Manager, USA</div>
</div>
</div>
</div>

<div className="p-8 bg-slate-50 rounded-2xl relative">
<iconify-icon className="text-primary/10 text-5xl absolute top-6 right-6" icon="solar:quote-up-bold"></iconify-icon>
<div className="flex text-yellow-400 gap-1 mb-4 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 font-medium">"Verification was smooth, and the certificate is recognized by my employer. Highly recommend IASS for anyone serious about safety."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
<iconify-icon icon="solar:user-bold"></iconify-icon>
</div>
<div>
<div className="text-sm font-bold text-slate-900">Rahul Mehta</div>
<div className="text-xs text-slate-500">Site Supervisor, India</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-3 gap-12">
<div className="lg:col-span-1">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">Why Professionals Choose IASS</h2>
<p className="text-slate-500 mb-8">We combine academic rigor with practical industry insights to ensure you don't just pass the exam, but excel in your career.</p>
<a className="text-primary font-medium hover:underline flex items-center gap-2" href="#" onclick="showPage('about')">Learn more about our mission <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
<div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
<iconify-icon className="text-primary text-3xl mb-4" icon="solar:user-hand-up-linear"></iconify-icon>
<h4 className="text-lg font-medium text-slate-900 mb-2">Expert Instructors</h4>
<p className="text-sm text-slate-500">Learn from industry veterans with decades of field experience.</p>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
<iconify-icon className="text-secondary text-3xl mb-4" icon="solar:laptop-minimalistic-linear"></iconify-icon>
<h4 className="text-lg font-medium text-slate-900 mb-2">Flexible Learning</h4>
<p className="text-sm text-slate-500">Live online sessions and on-site workshops tailored to your schedule.</p>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
<iconify-icon className="text-primary text-3xl mb-4" icon="solar:document-text-linear"></iconify-icon>
<h4 className="text-lg font-medium text-slate-900 mb-2">Curated Material</h4>
<p className="text-sm text-slate-500">Proprietary study guides focused on exam success.</p>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
<iconify-icon className="text-secondary text-3xl mb-4" icon="solar:chat-round-call-linear"></iconify-icon>
<h4 className="text-lg font-medium text-slate-900 mb-2">Mentorship Support</h4>
<p className="text-sm text-slate-500">One-on-one guidance until certification is achieved.</p>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="page-section hidden fade-in" id="asp">
<div className="bg-primary pt-24 pb-16">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-8 items-end justify-between">
<div>
<div className="text-primary-foreground/80 text-white/70 font-medium mb-2 tracking-wide text-sm">COURSE CODE: IASS-01</div>
<h1 className="text-4xl font-semibold text-white tracking-tight mb-4">Associate Safety Professional (ASP)</h1>
<p className="text-white/80 max-w-2xl text-lg">A foundational certification that validates your ability to identify hazards and implement control measures.</p>
</div>
<button className="bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-slate-100 transition-colors" onclick="showPage('sessions')">
                            Check Schedules
                        </button>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-12">
<div className="lg:col-span-2 space-y-12">
<section>
<h3 className="text-2xl font-semibold text-slate-900 mb-6">Course Overview</h3>
<p className="text-slate-600 leading-relaxed mb-6">
                            The ASP certification denotes that an individual has met academic requirements and passed the Safety Fundamentals Examination. It is the first step towards the CSP certification. Our course structure is designed to break down complex mathematical and scientific safety principles into understandable modules.
                        </p>
<div className="grid sm:grid-cols-2 gap-4">
<div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
<iconify-icon className="text-primary text-xl mt-1" icon="solar:book-bookmark-linear"></iconify-icon>
<div>
<h4 className="font-medium text-slate-900">Comprehensive Material</h4>
<p className="text-xs text-slate-500 mt-1">Full access to study guides and question banks.</p>
</div>
</div>
<div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
<iconify-icon className="text-primary text-xl mt-1" icon="solar:monitor-camera-linear"></iconify-icon>
<div>
<h4 className="font-medium text-slate-900">Interactive Sessions</h4>
<p className="text-xs text-slate-500 mt-1">Real-time problem solving with instructors.</p>
</div>
</div>
</div>
</section>
<section>
<h3 className="text-2xl font-semibold text-slate-900 mb-6">Key Learning Outcomes</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-secondary text-xl mt-0.5 flex-shrink-0" icon="solar:check-square-linear"></iconify-icon>
<span className="text-slate-600">Advanced Mathematics and Science for Safety Professionals.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-secondary text-xl mt-0.5 flex-shrink-0" icon="solar:check-square-linear"></iconify-icon>
<span className="text-slate-600">Safety Management Systems and Business Principles.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-secondary text-xl mt-0.5 flex-shrink-0" icon="solar:check-square-linear"></iconify-icon>
<span className="text-slate-600">Ergonomics, Fire Prevention, and Occupational Health.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-secondary text-xl mt-0.5 flex-shrink-0" icon="solar:check-square-linear"></iconify-icon>
<span className="text-slate-600">Environmental Management and Regulations.</span>
</li>
</ul>
</section>
</div>
<div className="lg:col-span-1">
<div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm sticky top-24">
<h4 className="font-semibold text-slate-900 mb-6 flex items-center gap-2">
<iconify-icon className="text-primary" icon="solar:info-circle-linear"></iconify-icon> Eligibility
                        </h4>
<ul className="space-y-6 relative border-l border-slate-200 ml-2 pl-6 pb-2">
<li className="relative">
<span className="absolute -left-[31px] top-1 w-2.5 h-2.5 rounded-full bg-slate-300 ring-4 ring-white"></span>
<div className="text-sm font-medium text-slate-900">Bachelor's Degree</div>
<div className="text-xs text-slate-500 mt-1">In any field from an accredited university.</div>
</li>
<li className="relative">
<span className="absolute -left-[31px] top-1 w-2.5 h-2.5 rounded-full bg-slate-300 ring-4 ring-white"></span>
<div className="text-sm font-medium text-slate-900">Experience</div>
<div className="text-xs text-slate-500 mt-1">One year of safety experience where safety is at least 50% of the role.</div>
</li>
</ul>
<div className="mt-8 pt-6 border-t border-slate-100">
<div className="bg-secondary/5 rounded-lg p-4 mb-4">
<p className="text-xs text-secondary font-medium text-center">Contact us to check your specific eligibility status.</p>
</div>
<button className="w-full bg-slate-900 text-white py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors" onclick="document.getElementById('whatsapp-float').click()">
                                Consult Advisor
                            </button>
</div>
</div>
</div>
</div>
</div>

<div className="page-section hidden fade-in" id="csp">
<div className="bg-secondary pt-24 pb-16">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-8 items-end justify-between">
<div>
<div className="text-white/70 font-medium mb-2 tracking-wide text-sm">COURSE CODE: IASS-02</div>
<h1 className="text-4xl font-semibold text-white tracking-tight mb-4">Certified Safety Professional (CSP)</h1>
<p className="text-white/80 max-w-2xl text-lg">The premier certification in the safety profession, focusing on advanced management and strategy.</p>
</div>
<button className="bg-white text-secondary px-6 py-3 rounded-lg font-medium hover:bg-slate-100 transition-colors" onclick="showPage('sessions')">
                            Check Schedules
                        </button>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-12">
<div className="lg:col-span-2 space-y-12">
<section>
<h3 className="text-2xl font-semibold text-slate-900 mb-6">Course Overview</h3>
<p className="text-slate-600 leading-relaxed mb-6">
                            The CSP certification is awarded to individuals who work in a full-time professional position where at least 50% of professional level duties are safety tasks. Our CSP prep course focuses on high-level strategy, risk management, and the business case for safety.
                        </p>
<img className="w-full h-64 object-cover rounded-xl mb-6 grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</section>
<section>
<h3 className="text-2xl font-semibold text-slate-900 mb-6">Curriculum Highlights</h3>
<div className="grid sm:grid-cols-2 gap-6">
<div className="border border-slate-200 p-5 rounded-xl hover:border-secondary/30 transition-colors">
<h4 className="font-medium text-slate-900 mb-2">Advanced Risk Management</h4>
<p className="text-sm text-slate-500">Risk assessment matrices, iso-risk contours, and mitigation hierarchy.</p>
</div>
<div className="border border-slate-200 p-5 rounded-xl hover:border-secondary/30 transition-colors">
<h4 className="font-medium text-slate-900 mb-2">Emergency Response</h4>
<p className="text-sm text-slate-500">Crisis management, business continuity planning, and incident command.</p>
</div>
<div className="border border-slate-200 p-5 rounded-xl hover:border-secondary/30 transition-colors">
<h4 className="font-medium text-slate-900 mb-2">Management Systems</h4>
<p className="text-sm text-slate-500">ISO 45001 implementation, auditing, and continuous improvement.</p>
</div>
<div className="border border-slate-200 p-5 rounded-xl hover:border-secondary/30 transition-colors">
<h4 className="font-medium text-slate-900 mb-2">Legal &amp; Ethics</h4>
<p className="text-sm text-slate-500">Liability, professional conduct, and regulatory compliance.</p>
</div>
</div>
</section>
</div>
<div className="lg:col-span-1">
<div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm sticky top-24">
<h4 className="font-semibold text-slate-900 mb-6 flex items-center gap-2">
<iconify-icon className="text-secondary" icon="solar:info-circle-linear"></iconify-icon> Prerequisites
                        </h4>
<ul className="space-y-6 relative border-l border-slate-200 ml-2 pl-6 pb-2">
<li className="relative">
<span className="absolute -left-[31px] top-1 w-2.5 h-2.5 rounded-full bg-slate-300 ring-4 ring-white"></span>
<div className="text-sm font-medium text-slate-900">Current ASP or GSP</div>
<div className="text-xs text-slate-500 mt-1">Must hold the Associate Safety Professional designation or GSP.</div>
</li>
<li className="relative">
<span className="absolute -left-[31px] top-1 w-2.5 h-2.5 rounded-full bg-slate-300 ring-4 ring-white"></span>
<div className="text-sm font-medium text-slate-900">Bachelor's Degree</div>
<div className="text-xs text-slate-500 mt-1">Academic requirement is mandatory.</div>
</li>
<li className="relative">
<span className="absolute -left-[31px] top-1 w-2.5 h-2.5 rounded-full bg-slate-300 ring-4 ring-white"></span>
<div className="text-sm font-medium text-slate-900">4 Years Experience</div>
<div className="text-xs text-slate-500 mt-1">Professional safety experience.</div>
</li>
</ul>
<div className="mt-8 pt-6 border-t border-slate-100">
<button className="w-full bg-secondary text-white py-3 rounded-lg font-medium hover:bg-secondary/90 transition-colors" onclick="document.getElementById('whatsapp-float').click()">
                                Check Eligibility
                            </button>
</div>
</div>
</div>
</div>
</div>

<div className="page-section hidden fade-in" id="about">
<div className="max-w-7xl mx-auto px-6 py-24">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<h1 className="text-4xl font-semibold tracking-tight text-slate-900 mb-6">Empowering Safety Leaders Globally</h1>
<p className="text-lg text-slate-500 leading-relaxed mb-6">
                            IASS (International Academy of Safety Standards) was founded with a singular vision: to bridge the gap between academic safety knowledge and practical industrial application. We are more than an institute; we are a community of safety professionals dedicated to saving lives through education.
                        </p>
<p className="text-lg text-slate-500 leading-relaxed">
                            Our curriculum is constantly updated to reflect the latest international standards, ensuring our students are prepared not just for exams, but for the evolving challenges of the modern workplace.
                        </p>
</div>
<div className="grid grid-cols-2 gap-4">
<img className="rounded-2xl w-full h-48 object-cover translate-y-8 shadow-lg" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<img className="rounded-2xl w-full h-48 object-cover shadow-lg" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&amp;w=2084&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="mt-24">
<div className="grid md:grid-cols-2 gap-8">
<div className="bg-primary/5 p-8 rounded-2xl">
<iconify-icon className="text-primary text-4xl mb-4" icon="solar:target-linear"></iconify-icon>
<h3 className="text-2xl font-semibold text-primary mb-3">Our Mission</h3>
<p className="text-slate-600">To provide accessible, high-quality safety education that equips professionals with the competence and confidence to create safer work environments worldwide.</p>
</div>
<div className="bg-secondary/5 p-8 rounded-2xl">
<iconify-icon className="text-secondary text-4xl mb-4" icon="solar:eye-linear"></iconify-icon>
<h3 className="text-2xl font-semibold text-secondary mb-3">Our Vision</h3>
<p className="text-slate-600">To be the globally recognized benchmark for safety professional development and certification preparation.</p>
</div>
</div>
</div>
</div>
</div>

<div className="page-section hidden fade-in" id="verify">
<div className="bg-slate-50 min-h-[calc(100vh-80px)] flex items-center justify-center py-12 px-6">
<div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
<div className="bg-[#1f3868] p-6 text-center">
<iconify-icon className="text-white text-4xl mb-2" icon="solar:shield-check-bold"></iconify-icon>
<h2 className="text-xl font-semibold text-white">Certificate Verification</h2>
<p className="text-white/60 text-sm mt-1">Validate student credentials instantly</p>
</div>
<div className="p-8">
<form className="space-y-6" onsubmit="event.preventDefault(); verifyStudent();">
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Student Name</label>
<input className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" id="verify-name" placeholder="e.g. John Doe" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Unique ID / Certificate No.</label>
<input className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" id="verify-id" placeholder="e.g. IASS-2023-001" required="" type="text"/>
</div>
<button className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 rounded-lg transition-all flex justify-center items-center gap-2" type="submit">
                                Verify Now <iconify-icon icon="solar:magnifer-linear"></iconify-icon>
</button>
</form>

<div className="mt-6 hidden" id="verify-result">

</div>
</div>
</div>
</div>
</div>

<div className="page-section hidden fade-in" id="sessions">
<div className="max-w-7xl mx-auto px-6 py-24">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Upcoming Sessions</h2>
<p className="text-slate-500">Secure your spot in our upcoming batches. We offer both online live interactive sessions and physical on-site training.</p>
</div>
<div className="space-y-4">

<div className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-lg transition-all">
<div className="flex items-center gap-6 w-full md:w-auto">
<div className="w-16 h-16 bg-primary/10 rounded-lg flex flex-col items-center justify-center text-primary font-bold">
<span className="text-xl">15</span>
<span className="text-xs uppercase">NOV</span>
</div>
<div>
<div className="inline-flex items-center gap-2 px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-blue-100 text-blue-700 mb-2">Online</div>
<h3 className="text-lg font-semibold text-slate-900">ASP - Weekend Batch</h3>
<p className="text-sm text-slate-500">Duration: 8 Weeks • Sat &amp; Sun</p>
</div>
</div>
<div className="flex items-center gap-4 w-full md:w-auto">
<span className="text-sm text-green-600 font-medium bg-green-50 px-3 py-1 rounded-full">Open for Registration</span>
<button className="flex-1 md:flex-none bg-primary text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-primary/90">Enroll</button>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-lg transition-all">
<div className="flex items-center gap-6 w-full md:w-auto">
<div className="w-16 h-16 bg-secondary/10 rounded-lg flex flex-col items-center justify-center text-secondary font-bold">
<span className="text-xl">22</span>
<span className="text-xs uppercase">NOV</span>
</div>
<div>
<div className="inline-flex items-center gap-2 px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-orange-100 text-orange-700 mb-2">On-Site (Dubai)</div>
<h3 className="text-lg font-semibold text-slate-900">CSP - Intensive Workshop</h3>
<p className="text-sm text-slate-500">Duration: 5 Days • Mon - Fri</p>
</div>
</div>
<div className="flex items-center gap-4 w-full md:w-auto">
<span className="text-sm text-orange-600 font-medium bg-orange-50 px-3 py-1 rounded-full">Few Seats Left</span>
<button className="flex-1 md:flex-none bg-secondary text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-secondary/90">Enroll</button>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-lg transition-all opacity-70">
<div className="flex items-center gap-6 w-full md:w-auto">
<div className="w-16 h-16 bg-slate-100 rounded-lg flex flex-col items-center justify-center text-slate-500 font-bold">
<span className="text-xl">01</span>
<span className="text-xs uppercase">DEC</span>
</div>
<div>
<div className="inline-flex items-center gap-2 px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-blue-100 text-blue-700 mb-2">Online</div>
<h3 className="text-lg font-semibold text-slate-900">ASP - Evening Batch</h3>
<p className="text-sm text-slate-500">Duration: 6 Weeks • Mon, Wed, Fri</p>
</div>
</div>
<div className="flex items-center gap-4 w-full md:w-auto">
<span className="text-sm text-slate-500 font-medium bg-slate-100 px-3 py-1 rounded-full">Opening Soon</span>
<button className="flex-1 md:flex-none border border-slate-300 text-slate-500 px-6 py-2 rounded-lg text-sm font-medium hover:bg-slate-50">Notify Me</button>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center text-white">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<span className="text-lg font-bold text-white tracking-tighter">IASS</span>
</div>
<p className="text-sm leading-relaxed mb-6">Raising the standard of safety professionals globally through quality education and integrity.</p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors" href="#"><iconify-icon icon="solar:facebook-linear"></iconify-icon></a>
<a className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors" href="#"><iconify-icon icon="brandico:linkedin-rect"></iconify-icon></a>
<a className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors" href="#"><iconify-icon icon="solar:instagram-linear"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-4">Courses</h4>
<ul className="space-y-3 text-sm">
<li><button className="hover:text-white transition-colors" onclick="showPage('asp')">ASP Certification</button></li>
<li><button className="hover:text-white transition-colors" onclick="showPage('csp')">CSP Certification</button></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Institute</h4>
<ul className="space-y-3 text-sm">
<li><button className="hover:text-white transition-colors" onclick="showPage('about')">About IASS</button></li>
<li><button className="hover:text-white transition-colors" onclick="showPage('sessions')">Upcoming Sessions</button></li>
<li><button className="hover:text-white transition-colors" onclick="showPage('verify')">Verify Certificate</button></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Contact</h4>
<ul className="space-y-3 text-sm">
<li className="flex items-center gap-2"><iconify-icon icon="solar:letter-linear"></iconify-icon> admissions@iassedu.com</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:phone-linear"></iconify-icon> +1 (555) 123-4567</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:map-point-linear"></iconify-icon> Dubai Knowledge Park</li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-800 text-xs text-center">
            © 2023 IASS - International Academy of Safety Standards. All rights reserved.
        </div>
</footer>

<a className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center" href="#" id="whatsapp-float">
<iconify-icon icon="logos:whatsapp-icon" width="28"></iconify-icon>
</a>



    </>
  );
}
