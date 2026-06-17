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
primary: '#0050FF',
secondary: '#00B4A2',
accent: '#FFC247',
bg: '#F9FAFB',
surface: '#FFFFFF',
text: '#111827',
muted: '#6B7280',
divider: '#E5E7EB',
danger: '#E02424',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Poppins', 'sans-serif'],
},
borderRadius: {
DEFAULT: '12px',
},
boxShadow: {
card: '0 8px 24px rgba(9,30,66,0.06)',
hover: '0 12px 34px rgba(9,30,66,0.10)',
},
maxWidth: {
'content': '1280px',
}
}
}
}



{
"@context": "https://schema.org",
"@type": "CollegeOrUniversity",
"name": "ANE College",
"url": "https://www.ane.edu.au",
"logo": "https://www.ane.edu.au/assets/logo.png",
"sameAs": ["https://www.facebook.com/ane","https://www.linkedin.com/company/ane"],
"contactPoint": [{ "@type":"ContactPoint","telephone":"+[COUNTRYCODE][NUMBER]","contactType":"Admissions"}],
"address": { "@type":"PostalAddress","addressLocality":"Kathmandu","addressCountry":"NP" }
}

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
      

<noscript><iframe height="0" src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX" style={{display: 'none', visibility: 'hidden'}} width="0"></iframe></noscript>

<div className="bg-surface border-b border-divider h-9 flex items-center justify-center relative z-50 hidden md:flex">
<div className="w-full max-w-content px-6 flex justify-between items-center text-xs font-medium text-muted">
<span>Open: Mon–Fri 9am–5pm</span>
<div className="flex items-center gap-6">
<a className="hover:text-primary transition-colors flex items-center gap-1.5" href="tel:+1234567890">
<span className="iconify" data-icon="lucide:phone" data-width="14"></span>
<span>+61 2 1234 5678</span>
</a>
<a className="hover:text-primary transition-colors" href="#">Agent Portal</a>
</div>
</div>
</div>

<header :className="{ 'h-16': scrolled, 'h-[84px]': !scrolled, 'top-0': scrolled }" className="fixed top-0 md:top-9 w-full z-40 bg-surface/80 backdrop-blur-md border-b border-divider transition-all duration-300">
<div className="w-full max-w-content mx-auto px-4 md:px-8 h-full flex items-center justify-between">

<a className="flex-shrink-0 group" href="/">

<svg :className="scrolled ? 'h-[30px] w-auto' : 'h-[40px] w-auto'" className="transition-all duration-300 text-primary" fill="none" viewbox="0 0 160 40" xmlns="http://www.w3.org/2000/svg">
<rect fill="currentColor" height="40" rx="8" width="40"></rect>
<path d="M20 12L12 28H28L20 12Z" fill="white"></path>
<text className="tracking-tight" fill="#111827" fontFamily="Poppins" fontSize="22" font-weight="700" x="50" y="28">ANE College</text>
</svg>
</a>

<nav className="hidden lg:flex items-center gap-8" role="navigation">
<a className="text-sm font-medium text-text hover:text-primary transition-colors" href="#">Home</a>
<a className="text-sm font-medium text-muted hover:text-primary transition-colors" href="#">Courses</a>
<a className="text-sm font-medium text-muted hover:text-primary transition-colors" href="#">Admissions</a>
<a className="text-sm font-medium text-muted hover:text-primary transition-colors" href="#">What’s On</a>
<a className="text-sm font-medium text-muted hover:text-primary transition-colors" href="#">Contact</a>
</nav>

<div className="hidden lg:flex items-center gap-4">
<a aria-label="Call us" className="flex items-center justify-center w-10 h-10 rounded-full bg-bg text-primary hover:bg-primary/10 transition-colors" href="tel:+61212345678">
<span className="iconify" data-icon="lucide:phone" data-inline="false" data-width="20" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="bg-primary text-white text-sm font-semibold px-5 py-3 rounded-[10px] shadow-sm hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200" href="/apply">
                    Apply Now
                </a>
</div>

<button :aria-expanded="mobileMenuOpen" @click="mobileMenuOpen = !mobileMenuOpen" aria-label="Toggle menu" className="lg:hidden p-2 text-text hover:text-primary transition-colors">
<span :data-icon="mobileMenuOpen ? 'lucide:x' : 'lucide:menu'" className="iconify" data-width="24" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</header>

<div className="fixed inset-0 z-50 bg-surface flex flex-col pt-24 px-6 lg:hidden" style={{display: 'none'}} x-show="mobileMenuOpen" x-transition:enter="transition ease-out duration-200" x-transition:enter-end="opacity-100 translate-x-0" x-transition:enter-start="opacity-0 translate-x-full" x-transition:leave="transition ease-in duration-150" x-transition:leave-end="opacity-0 translate-x-full" x-transition:leave-start="opacity-100 translate-x-0">
<nav className="flex flex-col gap-6 text-lg font-medium">
<a className="text-primary" href="#">Home</a>
<a className="text-text hover:text-primary" href="#">Courses</a>
<a className="text-text hover:text-primary" href="#">Admissions</a>
<a className="text-text hover:text-primary" href="#">What’s On</a>
<a className="text-text hover:text-primary" href="#">Contact</a>
</nav>
<div className="mt-auto mb-8 w-full border-t border-divider pt-6">
<a className="flex items-center justify-center w-full bg-primary text-white font-semibold py-4 rounded-xl shadow-lg" href="/apply">
                Apply Now
            </a>
<div className="mt-6 flex justify-center gap-6 text-muted">
<a href="#">Agent Portal</a>
<span>RTO 12345</span>
</div>
</div>
</div>
<main className="pt-[84px] md:pt-[120px]">

<section aria-label="Hero" className="relative w-full overflow-hidden pb-14 md:pb-[88px]">
<div className="w-full max-w-content mx-auto px-4 md:px-8">
<div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">

<div className="w-full lg:w-[55%] relative group">
<div className="relative aspect-[3/2] overflow-hidden rounded-2xl shadow-card">

<video autoplay="" className="w-full h-full object-cover" loop="" muted="" playsinline="" poster="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&amp;fit=crop&amp;w=1600&amp;q=80">
<source src="#" type="video/mp4"/>
<img alt="Students collaborating in a modern classroom environment" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</video>
<div className="absolute inset-0 bg-primary/5 mix-blend-multiply"></div>
</div>

<div className="absolute -bottom-6 right-6 lg:-right-6 bg-surface p-4 rounded-xl shadow-lg border border-divider flex items-center gap-4 hidden md:flex animate-fade-in-up">
<div className="flex flex-col">
<span className="text-xs font-semibold text-muted uppercase tracking-wider">Accredited</span>
<span className="text-sm font-bold text-text">Nationally Recognised</span>
</div>
<div className="h-8 w-[1px] bg-divider"></div>
<span className="text-xs font-mono text-muted">RTO 12345</span>
</div>
</div>

<div className="w-full lg:w-[45%] flex flex-col items-start pt-8 lg:pt-0">
<h1 className="font-display font-bold text-3xl lg:text-5xl leading-[1.08] tracking-tight text-text mb-5">
                            Get job-ready skills. <br className="hidden lg:block"/>Start your career with <span className="text-primary">ANE.</span>
</h1>
<h2 className="font-sans font-normal text-base lg:text-lg text-muted mb-8 leading-relaxed max-w-lg">
                            Flexible study options, practical placements, and personalised support designed to get you hired.
                        </h2>
<div className="flex flex-wrap items-center gap-4 w-full">
<button @click="document.getElementById('course-finder').scrollIntoView({behavior: 'smooth'})" aria-label="Find courses — hero" className="bg-primary text-white font-semibold text-base px-6 py-3.5 rounded-[10px] shadow-card hover:-translate-y-1 hover:shadow-hover transition-all duration-200 min-w-[160px]">
                                Find Courses
                            </button>
<a className="text-text font-semibold text-base px-4 hover:text-primary transition-colors flex items-center gap-2 group" download="" href="/assets/ANE-Course-Guide.pdf">
<span>Download Guide</span>
<span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-down" data-width="18" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
<div className="mt-10 flex flex-wrap items-center gap-6">
<div className="flex items-center gap-2 bg-blue-50 text-primary px-3 py-1 rounded-full border border-blue-100">
<span className="iconify" data-icon="lucide:check-circle" data-width="14" style={{strokeWidth: '2'}}></span>
<span className="text-xs font-semibold tracking-wide">Industry-aligned curriculum</span>
</div>
<div className="flex items-center gap-3 opacity-60 grayscale hover:grayscale-0 transition-all">

<svg fill="none" height="24" viewbox="0 0 80 24" width="80" xmlns="http://www.w3.org/2000/svg">
<rect fill="#E5E7EB" height="24" rx="4" width="80"></rect>
</svg>
<span className="text-xs text-muted font-medium">AQF Accredited</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="sticky z-30 top-16 md:top-[84px] bg-surface/95 backdrop-blur shadow-sm border-y border-divider py-4 transition-all" id="course-finder">
<div className="w-full max-w-content mx-auto px-4 md:px-8">
<form @submit.prevent="alert('Fetching courses...')" className="flex flex-col lg:flex-row items-center gap-4">

<div className="hidden lg:flex items-center gap-3 flex-1 w-full">

<div className="relative group">
<select className="appearance-none bg-bg border border-divider text-sm font-medium text-text rounded-lg py-2.5 pl-4 pr-10 hover:border-primary focus:ring-2 focus:ring-primary/20 outline-none cursor-pointer min-w-[180px]">
<option value="">All Areas of Study</option>
<option value="health">Health &amp; Care</option>
<option value="business">Business</option>
<option value="early-childhood">Early Childhood</option>
</select>
<span className="iconify absolute right-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none" data-icon="lucide:chevron-down" data-width="16"></span>
</div>

<div className="flex bg-bg p-1 rounded-lg border border-divider">
<button className="px-3 py-1.5 text-xs font-semibold rounded-md bg-white shadow-sm text-primary" type="button">On-campus</button>
<button className="px-3 py-1.5 text-xs font-medium text-muted hover:text-text" type="button">Online</button>
</div>

<div className="relative flex-1">
<span className="iconify absolute left-3 top-1/2 -translate-y-1/2 text-muted" data-icon="lucide:search" data-width="16"></span>
<input className="w-full bg-bg border border-divider rounded-lg py-2.5 pl-9 pr-4 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none placeholder:text-muted/70" placeholder="Search course name, code or skill..." type="text"/>
</div>
<button className="bg-primary text-white text-sm font-semibold px-6 py-2.5 rounded-lg hover:bg-primary/90 transition-colors shadow-sm" type="submit">
                            Show Courses
                        </button>
</div>

<div className="lg:hidden w-full flex gap-3">
<div className="relative flex-1">
<span className="iconify absolute left-3 top-1/2 -translate-y-1/2 text-muted" data-icon="lucide:search" data-width="16"></span>
<input className="w-full bg-bg border border-divider rounded-lg py-3 pl-10 pr-4 text-sm focus:border-primary outline-none" placeholder="Search courses..." type="text"/>
</div>
<button className="bg-surface border border-divider p-3 rounded-lg text-text shadow-sm" type="button">
<span className="iconify" data-icon="lucide:sliders-horizontal" data-width="20"></span>
</button>
</div>
</form>
</div>
</section>

<section className="py-16 md:py-24 bg-bg">
<div className="w-full max-w-content mx-auto px-4 md:px-8">
<div className="flex justify-between items-end mb-10">
<div>
<h2 className="font-display font-bold text-2xl md:text-3xl text-text tracking-tight mb-2">Featured Programs</h2>
<p className="text-muted text-sm md:text-base">Explore our most popular qualifications.</p>
</div>
<a className="hidden md:flex items-center text-primary font-semibold text-sm hover:translate-x-1 transition-transform" href="#">
                        View all courses <span className="iconify ml-1" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

<article className="group bg-surface rounded-xl border border-divider overflow-hidden hover:shadow-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full relative">
<div className="h-[180px] overflow-hidden relative">
<img alt="Aged Care student assisting patient" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 left-4 bg-surface/90 backdrop-blur px-2.5 py-1 rounded text-xs font-semibold text-text border border-divider shadow-sm">
                                CHC33021
                            </div>
</div>
<div className="p-6 flex-1 flex flex-col">
<div className="flex items-center gap-2 mb-3">
<span className="text-xs font-semibold text-secondary bg-secondary/10 px-2 py-0.5 rounded">Health</span>
</div>
<h3 className="font-display font-semibold text-lg leading-tight text-text mb-2 group-hover:text-primary transition-colors">Certificate III in Individual Support (Aged Care)</h3>
<p className="text-sm text-muted mb-6 line-clamp-2">Prepare for compassionate Aged Care roles with hands-on practical placements.</p>
<div className="mt-auto pt-4 border-t border-divider flex flex-wrap gap-y-2 gap-x-4 text-xs font-medium text-muted">
<div className="flex items-center gap-1.5">
<span className="iconify" data-icon="lucide:clock" data-width="14"></span>
                                    6 Months
                                </div>
<div className="flex items-center gap-1.5">
<span className="iconify" data-icon="lucide:map-pin" data-width="14"></span>
                                    On-campus
                                </div>
<div className="flex items-center gap-1.5 text-primary">
<span className="iconify" data-icon="lucide:briefcase" data-width="14"></span>
                                    Placement
                                </div>
</div>
</div>
</article>

<article className="group bg-surface rounded-xl border border-divider overflow-hidden hover:shadow-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full relative">
<div className="h-[180px] overflow-hidden relative">
<img alt="Business meeting leadership" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 left-4 bg-surface/90 backdrop-blur px-2.5 py-1 rounded text-xs font-semibold text-text border border-divider shadow-sm">
                                BSB42015
                            </div>
</div>
<div className="p-6 flex-1 flex flex-col">
<div className="flex items-center gap-2 mb-3">
<span className="text-xs font-semibold text-accent/90 bg-accent/10 px-2 py-0.5 rounded text-yellow-800">Business</span>
</div>
<h3 className="font-display font-semibold text-lg leading-tight text-text mb-2 group-hover:text-primary transition-colors">Certificate IV in Leadership and Management</h3>
<p className="text-sm text-muted mb-6 line-clamp-2">Lead high-performing teams with practical leadership and operational skills.</p>
<div className="mt-auto pt-4 border-t border-divider flex flex-wrap gap-y-2 gap-x-4 text-xs font-medium text-muted">
<div className="flex items-center gap-1.5">
<span className="iconify" data-icon="lucide:clock" data-width="14"></span>
                                    6 Months
                                </div>
<div className="flex items-center gap-1.5">
<span className="iconify" data-icon="lucide:wifi" data-width="14"></span>
                                    Online
                                </div>
</div>
</div>
</article>

<article className="group bg-surface rounded-xl border border-divider overflow-hidden hover:shadow-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full relative">
<div className="h-[180px] overflow-hidden relative">
<img alt="Early childhood education" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 left-4 bg-surface/90 backdrop-blur px-2.5 py-1 rounded text-xs font-semibold text-text border border-divider shadow-sm">
                                CHC50121
                            </div>
</div>
<div className="p-6 flex-1 flex flex-col">
<div className="flex items-center gap-2 mb-3">
<span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded">Education</span>
</div>
<h3 className="font-display font-semibold text-lg leading-tight text-text mb-2 group-hover:text-primary transition-colors">Diploma of Early Childhood Education</h3>
<p className="text-sm text-muted mb-6 line-clamp-2">Design and implement curriculum in early childhood education settings.</p>
<div className="mt-auto pt-4 border-t border-divider flex flex-wrap gap-y-2 gap-x-4 text-xs font-medium text-muted">
<div className="flex items-center gap-1.5">
<span className="iconify" data-icon="lucide:clock" data-width="14"></span>
                                    12 Months
                                </div>
<div className="flex items-center gap-1.5">
<span className="iconify" data-icon="lucide:layers" data-width="14"></span>
                                    Hybrid
                                </div>
<div className="flex items-center gap-1.5 text-primary">
<span className="iconify" data-icon="lucide:briefcase" data-width="14"></span>
                                    Placement
                                </div>
</div>
</div>
</article>
</div>
<div className="mt-8 text-center md:hidden">
<a className="inline-flex items-center text-primary font-semibold text-sm border border-divider bg-surface px-6 py-3 rounded-lg shadow-sm" href="#">
                        View all courses <span className="iconify ml-1" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
</div>
</section>

<section className="py-16 bg-surface border-y border-divider">
<div className="w-full max-w-content mx-auto px-4 md:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-10">

<div className="flex flex-col items-start">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-5">
<span className="iconify" data-icon="lucide:users" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="font-display font-bold text-2xl text-text mb-2">120+ Industry Partners</h3>
<p className="text-muted leading-relaxed">Gain access to practical placements with top local employers to fast-track your employment.</p>
</div>

<div className="flex flex-col items-start">
<div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-secondary mb-5">
<span className="iconify" data-icon="lucide:calendar-days" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="font-display font-bold text-2xl text-text mb-2">Monthly Intakes</h3>
<p className="text-muted leading-relaxed">Don't wait to start. Flexible start dates throughout the year mean you can learn on your schedule.</p>
</div>

<div className="flex flex-col items-start">
<div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center text-accent/90 mb-5">
<span className="iconify" data-icon="lucide:heart-handshake" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="font-display font-bold text-2xl text-text mb-2">Student Support</h3>
<p className="text-muted leading-relaxed">Dedicated academic advisors and language support to help you succeed from day one.</p>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-bg">
<div className="w-full max-w-content mx-auto px-4 md:px-8">
<div className="text-center max-w-2xl mx-auto mb-12">
<h2 className="font-display font-bold text-2xl md:text-3xl text-text tracking-tight mb-3">Meet our Trainers</h2>
<p className="text-muted">Learn from industry experts with real-world experience.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-surface p-6 rounded-2xl border border-divider shadow-sm hover:shadow-card transition-shadow flex flex-col items-center text-center">
<img alt="Sarah Jenkins" className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-white shadow-md" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
<h4 className="font-display font-semibold text-lg text-text">Sarah Jenkins</h4>
<p className="text-xs font-semibold text-secondary uppercase tracking-wider mb-3">Aged Care Specialist</p>
<p className="text-sm text-muted leading-relaxed mb-4">"I focus on empathy and practical skills, ensuring my students are ready for any care environment."</p>
<button className="text-primary text-sm font-semibold hover:underline mt-auto">View Profile</button>
</div>

<div className="bg-surface p-6 rounded-2xl border border-divider shadow-sm hover:shadow-card transition-shadow flex flex-col items-center text-center">
<img alt="David Chen" className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-white shadow-md" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
<h4 className="font-display font-semibold text-lg text-text">David Chen</h4>
<p className="text-xs font-semibold text-secondary uppercase tracking-wider mb-3">Management Lead</p>
<p className="text-sm text-muted leading-relaxed mb-4">"Leadership is about people. I bring 15 years of corporate management into the classroom."</p>
<button className="text-primary text-sm font-semibold hover:underline mt-auto">View Profile</button>
</div>

<div className="bg-surface p-6 rounded-2xl border border-divider shadow-sm hover:shadow-card transition-shadow flex flex-col items-center text-center">
<img alt="Priya Patel" className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-white shadow-md" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
<h4 className="font-display font-semibold text-lg text-text">Priya Patel</h4>
<p className="text-xs font-semibold text-secondary uppercase tracking-wider mb-3">Early Childhood</p>
<p className="text-sm text-muted leading-relaxed mb-4">"My goal is to inspire the next generation of educators to nurture curious minds."</p>
<button className="text-primary text-sm font-semibold hover:underline mt-auto">View Profile</button>
</div>
</div>
</div>
</section>

<section className="py-12 bg-white border-y border-divider">
<div className="w-full max-w-content mx-auto px-4 md:px-8">
<div className="flex flex-col md:flex-row items-center justify-between gap-8">
<div className="flex-1 w-full">
<h2 className="font-display font-bold text-xl md:text-2xl text-text mb-6">Start your journey today</h2>
<div className="flex items-center w-full relative">

<div className="absolute left-0 top-4 w-full h-0.5 bg-gray-100 -z-10 hidden md:block"></div>
<div className="grid grid-cols-3 w-full gap-4">
<div className="flex flex-col md:items-center gap-2">
<div className="w-8 h-8 rounded-full bg-blue-100 text-primary flex items-center justify-center font-bold text-sm ring-4 ring-white">1</div>
<span className="text-sm font-semibold text-text">Enquire</span>
</div>
<div className="flex flex-col md:items-center gap-2">
<div className="w-8 h-8 rounded-full bg-gray-100 text-muted flex items-center justify-center font-bold text-sm ring-4 ring-white">2</div>
<span className="text-sm font-medium text-muted">Apply</span>
</div>
<div className="flex flex-col md:items-center gap-2">
<div className="w-8 h-8 rounded-full bg-gray-100 text-muted flex items-center justify-center font-bold text-sm ring-4 ring-white">3</div>
<span className="text-sm font-medium text-muted">Start</span>
</div>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
<button @click="modalOpen = true" className="bg-surface border border-divider text-text font-semibold px-6 py-3 rounded-[10px] shadow-sm hover:border-primary hover:text-primary transition-colors text-center">
                            Enquire Now
                        </button>
<a className="bg-primary text-white font-semibold px-8 py-3 rounded-[10px] shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all text-center" href="/apply">
                            Start Application
                        </a>
</div>
</div>
</div>
</section>

<section className="py-16 bg-bg">
<div className="w-full max-w-content mx-auto px-4 md:px-8">
<div className="flex justify-between items-center mb-8">
<h2 className="font-display font-bold text-2xl text-text tracking-tight">What’s On</h2>
<a className="text-sm font-semibold text-primary hover:underline" href="#">View Calendar</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-surface p-5 rounded-xl border border-divider flex gap-5 items-start hover:border-primary/30 transition-colors group">
<div className="flex-shrink-0 flex flex-col items-center bg-bg rounded-lg p-2.5 min-w-[70px] border border-divider">
<span className="text-xs font-bold text-primary uppercase tracking-wider">Oct</span>
<span className="text-xl font-bold text-text">24</span>
</div>
<div>
<h3 className="font-semibold text-text group-hover:text-primary transition-colors mb-1">Open Day 2023</h3>
<p className="text-sm text-muted mb-3">Tour the campus, meet trainers and explore facilities.</p>
<span className="text-xs font-medium text-primary flex items-center gap-1">
                                Register Now <span className="iconify" data-icon="lucide:arrow-right" data-width="12"></span>
</span>
</div>
</div>

<div className="bg-surface p-5 rounded-xl border border-divider flex gap-5 items-start hover:border-primary/30 transition-colors group">
<div className="flex-shrink-0 flex flex-col items-center bg-bg rounded-lg p-2.5 min-w-[70px] border border-divider">
<span className="text-xs font-bold text-primary uppercase tracking-wider">Nov</span>
<span className="text-xl font-bold text-text">02</span>
</div>
<div>
<h3 className="font-semibold text-text group-hover:text-primary transition-colors mb-1">Nursing Workshop</h3>
<p className="text-sm text-muted mb-3">A free introductory workshop for aspiring nurses.</p>
<span className="text-xs font-medium text-primary flex items-center gap-1">
                                Register Now <span className="iconify" data-icon="lucide:arrow-right" data-width="12"></span>
</span>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-divider pt-16 pb-8">
<div className="w-full max-w-content mx-auto px-4 md:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div>
<div className="mb-4">
<span className="font-display font-bold text-xl tracking-tight">ANE College</span>
</div>
<p className="text-sm text-muted leading-relaxed mb-6">
                        Empowering students with practical skills and industry connections for a brighter future.
                    </p>
<div className="flex gap-4">
<a className="text-muted hover:text-primary transition-colors" href="#"><span className="iconify" data-icon="lucide:facebook" data-width="20"></span></a>
<a className="text-muted hover:text-primary transition-colors" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="20"></span></a>
<a className="text-muted hover:text-primary transition-colors" href="#"><span className="iconify" data-icon="lucide:youtube" data-width="20"></span></a>
</div>
</div>

<div>
<h4 className="font-semibold text-text mb-4">Popular Courses</h4>
<ul className="space-y-3 text-sm text-muted">
<li><a className="hover:text-primary transition-colors" href="#">Aged Care</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Early Childhood</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Leadership &amp; Management</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Hospitality</a></li>
<li><a className="hover:text-primary transition-colors" href="#">IT Support</a></li>
</ul>
</div>

<div>
<h4 className="font-semibold text-text mb-4">Admissions</h4>
<ul className="space-y-3 text-sm text-muted">
<li><a className="hover:text-primary transition-colors" href="#">How to Apply</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Intake Dates</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Fees &amp; Funding</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Student Handbook</a></li>
<li><a className="hover:text-primary transition-colors" href="#">International Students</a></li>
</ul>
</div>

<div>
<h4 className="font-semibold text-text mb-4">Contact</h4>
<ul className="space-y-3 text-sm text-muted">
<li className="flex items-start gap-2">
<span className="iconify mt-0.5" data-icon="lucide:map-pin" data-width="16"></span>
                            123 Education Way, Sydney NSW 2000
                        </li>
<li className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:phone" data-width="16"></span>
<a className="hover:text-primary" href="tel:+61212345678">+61 2 1234 5678</a>
</li>
<li className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:mail" data-width="16"></span>
<a className="hover:text-primary" href="mailto:admissions@ane.edu">admissions@ane.edu</a>
</li>
<li className="mt-4">
<a className="inline-flex items-center gap-2 text-primary font-semibold hover:underline" href="/assets/ANE-Course-Guide.pdf">
<span className="iconify" data-icon="lucide:download" data-width="16"></span>
                                Course Guide
                            </a>
</li>
</ul>
</div>
</div>
<div className="border-t border-divider pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted">
<p>© 2023 ANE College. RTO 12345. CRICOS 01234A.</p>
<div className="flex gap-6">
<a className="hover:text-text" href="#">Privacy Policy</a>
<a className="hover:text-text" href="#">Terms of Use</a>
<a className="hover:text-text" href="#">Sitemap</a>
</div>
</div>
</div>
</footer>

<div aria-modal="true" className="fixed inset-0 z-[60] overflow-y-auto" role="dialog" style={{display: 'none'}} x-show="modalOpen" x-trap="modalOpen">

<div @click="modalOpen = false" className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity" x-show="modalOpen" x-transition:enter="ease-out duration-300" x-transition:enter-end="opacity-100" x-transition:enter-start="opacity-0" x-transition:leave="ease-in duration-200" x-transition:leave-end="opacity-0" x-transition:leave-start="opacity-100"></div>

<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
<div className="relative transform overflow-hidden rounded-xl bg-surface text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg border border-divider" x-show="modalOpen" x-transition:enter="ease-out duration-300" x-transition:enter-end="opacity-100 translate-y-0 sm:scale-100" x-transition:enter-start="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" x-transition:leave="ease-in duration-200" x-transition:leave-end="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" x-transition:leave-start="opacity-100 translate-y-0 sm:scale-100">
<div className="px-6 py-6 sm:p-8">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-xl font-bold leading-6 text-text font-display">Enquire Now</h3>
<p className="mt-2 text-sm text-muted">Leave your details and an advisor will contact you.</p>
</div>
<button @click="modalOpen = false" className="text-muted hover:text-text transition-colors">
<span className="iconify" data-icon="lucide:x" data-width="24"></span>
</button>
</div>
<form action="https://hooks.example.com/ane-enquiries" className="space-y-4" method="POST">

<input name="utm_source" type="hidden" value=""/>
<input name="page_url" type="hidden" value="https://www.ane.edu.au"/>
<input autocomplete="off" className="hidden" name="website" type="text"/> 
<div>
<label className="block text-sm font-medium text-text mb-1.5" htmlFor="fullName">Full Name</label>
<input className="block w-full rounded-lg border border-divider px-3 py-2.5 text-text shadow-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none sm:text-sm" id="fullName" name="fullName" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-text mb-1.5" htmlFor="contact">Email or Phone</label>
<input className="block w-full rounded-lg border border-divider px-3 py-2.5 text-text shadow-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none sm:text-sm" id="contact" name="emailOrPhone" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-text mb-1.5" htmlFor="interest">Interested Course</label>
<select className="block w-full rounded-lg border border-divider px-3 py-2.5 text-text shadow-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none sm:text-sm" id="interest" name="programInterest">
<option value="">Please select...</option>
<option value="Aged Care">Cert III Individual Support</option>
<option value="Leadership">Cert IV Leadership</option>
<option value="Early Childhood">Diploma Early Childhood</option>
</select>
</div>
<div className="pt-2">
<div className="flex items-start">
<div className="flex h-5 items-center">
<input className="h-4 w-4 rounded border-divider text-primary focus:ring-primary" id="consent" name="consent" required="" type="checkbox"/>
</div>
<div className="ml-3 text-sm">
<label className="text-muted" htmlFor="consent">I agree to be contacted by ANE College regarding my enquiry. <a className="font-medium text-primary hover:underline" href="#">Privacy Policy</a>.</label>
</div>
</div>
</div>
<div className="mt-6">
<button className="inline-flex w-full justify-center rounded-lg bg-primary px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all" type="submit">
                                Submit Enquiry
                            </button>
</div>
</form>
</div>
</div>
</div>
</div>

    </>
  );
}
