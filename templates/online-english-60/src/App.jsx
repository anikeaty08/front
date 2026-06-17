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
navy: {
DEFAULT: '#0B3D91',
50: '#F0F4FA',
100: '#E1E8F5',
800: '#082A66',
900: '#051D47',
},
coral: {
DEFAULT: '#E94E4E',
hover: '#D63D3D'
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
fontSize: {
'xs': '0.8rem',
'sm': '0.925rem',
'base': '1.05rem',
'lg': '1.175rem',
'xl': '1.35rem',
'2xl': '1.6rem',
'3xl': '2rem',
'4xl': '2.5rem',
'5xl': '3.25rem',
'6xl': '4rem',
}
}
}
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
      
<header className="fixed transition-all duration-300 bg-white/90 w-full z-50 border-slate-100 border-b backdrop-blur-md" id="navbar">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">
<div className="flex-shrink-0 flex items-center cursor-pointer" onclick="window.scrollTo(0,0)">
<div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center mr-3 text-white">
<svg className="lucide lucide-languages w-6 h-6" data-lucide="languages" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m5 8 6 6"></path><path d="m4 14 6-6 2-3"></path><path d="M2 5h12"></path><path d="M7 2h1"></path><path d="m22 22-5-10-5 10"></path><path d="M14 18h6"></path></svg>
</div>
<span className="text-xl font-semibold tracking-tight text-navy-900">LingOwl</span>
</div>
<nav className="hidden md:flex space-x-8">
<a className="text-base font-medium text-slate-600 hover:text-navy transition-colors" href="#benefits">Why Us</a>
<a className="text-base font-medium text-slate-600 hover:text-navy transition-colors" href="#courses">Courses</a>
<a className="text-base font-medium text-slate-600 hover:text-navy transition-colors" href="#pricing">Pricing</a>
<a className="text-base font-medium text-slate-600 hover:text-navy transition-colors" href="#faq">FAQ</a>
</nav>
<div className="hidden md:flex items-center space-x-4">
<a className="text-base font-medium text-navy hover:text-navy-800" href="#" onclick="alert('Login mockup')">Log in</a>
<button className="bg-coral hover:bg-coral-hover text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all shadow-lg shadow-coral/20" onclick="openEnrollModal()">
                        Get Started
                    </button>
</div>
<div className="md:hidden flex items-center">
<button aria-label="Toggle menu" className="text-slate-600 hover:text-navy focus:outline-none" id="mobile-menu-btn">
<svg className="lucide lucide-menu w-7 h-7" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</div>
<div className="hidden md:hidden bg-white border-b border-slate-100" id="mobile-menu">
<div className="px-4 pt-2 pb-6 space-y-2">
<a className="block px-3 py-3 text-lg font-medium text-slate-700 rounded-md hover:bg-slate-50" href="#benefits">Why Us</a>
<a className="block px-3 py-3 text-lg font-medium text-slate-700 rounded-md hover:bg-slate-50" href="#courses">Courses</a>
<a className="block px-3 py-3 text-lg font-medium text-slate-700 rounded-md hover:bg-slate-50" href="#pricing">Pricing</a>
<button className="w-full mt-4 bg-coral text-white px-5 py-3 rounded-lg text-lg font-medium text-center" onclick="openEnrollModal()">
                    Enroll Now
                </button>
</div>
</div>
</header>
<main className="">
<section className="relative pt-32 pb-40 lg:pt-48 lg:pb-48 overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Students talking" className="w-full h-full object-cover" loading="eager" src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-navy-900/80 mix-blend-multiply"></div>
<div className="bg-gradient-to-t from-navy-900 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-8">
<span className="flex h-2 w-2 rounded-full bg-coral"></span>
<span className="text-sm font-medium text-white tracking-wide uppercase">New term starting soon</span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-6 leading-[1.1]">
                    Speak English with <br className="hidden md:block"/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white">Confidence &amp; Clarity</span>
</h1>
<p className="mt-4 text-xl text-slate-200 max-w-2xl mx-auto mb-10 font-light">
                    Join LingOwl Online to unlock global opportunities. Interactive live classes, expert native tutors, and a curriculum tailored to your career goals.
                </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-coral hover:bg-coral-hover text-white px-8 py-4 rounded-xl text-lg font-medium transition-all shadow-xl shadow-coral/20 flex items-center justify-center gap-2" onclick="openEnrollModal()">
                        Start Learning Today
                        <svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<a className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-xl text-lg font-medium transition-all flex items-center justify-center" href="#courses">
                        Explore Courses
                    </a>
</div>
</div>
<div className="absolute bottom-0 w-full z-20 border-t border-white/10 bg-navy-900/40 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
<div>
<div className="text-3xl font-semibold tracking-tight">15k+</div>
<div className="text-sm text-slate-300 font-medium mt-1">Active Students</div>
</div>
<div className="">
<div className="text-3xl font-semibold tracking-tight" style={{}}>98%</div>
<div className="text-sm text-slate-300 font-medium mt-1">Satisfaction Rate</div>
</div>
<div className="">
<div className="text-3xl font-semibold tracking-tight">120+</div>
<div className="text-sm text-slate-300 font-medium mt-1">Native Tutors</div>
</div>
<div>
<div className="text-3xl font-semibold tracking-tight">24/7</div>
<div className="text-sm text-slate-300 font-medium mt-1">Platform Access</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 bg-white" id="benefits">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="text-coral font-medium tracking-wider uppercase text-sm">Why Choose Us</span>
<h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-navy-900">
                        A modern approach to language mastery
                    </h2>
</div>
<div className="grid md:grid-cols-3 gap-12">
<div className="group p-6 rounded-2xl bg-slate-50 hover:bg-navy-50 transition-colors duration-300 border border-slate-100">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-navy mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-video w-6 h-6" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg>
</div>
<h3 className="text-xl font-semibold text-navy-900 mb-3 tracking-tight">Live Interactive Classes</h3>
<p className="text-slate-600 leading-relaxed">
                            Connect via Zoom for real-time practice. Small groups ensure you get personal feedback from instructors every session.
                        </p>
</div>
<div className="group p-6 rounded-2xl bg-slate-50 hover:bg-navy-50 transition-colors duration-300 border border-slate-100">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-navy mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-clock w-6 h-6" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<h3 className="text-xl font-semibold text-navy-900 mb-3 tracking-tight">Flexible Scheduling</h3>
<p className="text-slate-600 leading-relaxed">
                            Book classes that fit your life. Morning, evening, or weekend slots available across multiple time zones.
                        </p>
</div>
<div className="group p-6 rounded-2xl bg-slate-50 hover:bg-navy-50 transition-colors duration-300 border border-slate-100">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-navy mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-award w-6 h-6" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
</div>
<h3 className="text-xl font-semibold text-navy-900 mb-3 tracking-tight">Certified Curriculum</h3>
<p className="text-slate-600 leading-relaxed">
                            Our courses align with CEFR standards. Earn certificates recognized by employers and universities worldwide.
                        </p>
</div>
</div>
</div>
</section>
<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
<div className="relative">
<div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
<img alt="Student learning on laptop" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl hidden md:block max-w-xs border border-slate-100">
<div className="flex items-center gap-4 mb-3">
<div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
<svg className="lucide lucide-check w-5 h-5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">Progress Tracking</p>
<p className="text-xs text-slate-500">Weekly reports included</p>
</div>
</div>
<div className="w-full bg-slate-100 rounded-full h-2 mb-1">
<div className="bg-green-500 h-2 rounded-full" style={{width: '85%'}}></div>
</div>
</div>
</div>
<div className="mt-12 lg:mt-0">
<span className="text-coral font-medium tracking-wider uppercase text-sm">Our Methodology</span>
<h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-navy-900 mb-6">
                            Structured learning for real-world results
                        </h2>
<p className="text-lg text-slate-600 mb-8">
                            We don't just teach grammar; we teach communication. Our immersion technique simulates real-life scenarios from day one.
                        </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-navy-100 text-navy flex items-center justify-center font-semibold text-sm">01</div>
<div>
<h4 className="text-lg font-semibold text-navy-900">Placement Test</h4>
<p className="text-base text-slate-500 mt-1">We assess your current level (A1-C2) to place you in the perfect group.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-navy-100 text-navy flex items-center justify-center font-semibold text-sm">02</div>
<div>
<h4 className="text-lg font-semibold text-navy-900">Interactive Modules</h4>
<p className="text-base text-slate-500 mt-1">Access 24/7 video lessons, quizzes, and vocabulary drills before class.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-navy-100 text-navy flex items-center justify-center font-semibold text-sm">03</div>
<div>
<h4 className="text-lg font-semibold text-navy-900">Live Practice</h4>
<p className="text-base text-slate-500 mt-1">Join 60-minute conversational sessions with native instructors.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 bg-white" id="courses">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<span className="text-coral font-medium tracking-wider uppercase text-sm">Our Courses</span>
<h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-navy-900">
                            Find the right path for you
                        </h2>
</div>
<a className="text-navy font-medium hover:text-navy-800 flex items-center gap-1 group" href="#">
                        View all courses <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="h-48 overflow-hidden relative">
<span className="absolute top-4 right-4 bg-white/90 backdrop-blur text-navy text-xs font-semibold px-2 py-1 rounded">Beginner</span>
<img alt="General English" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 flex-1 flex flex-col">
<h3 className="text-xl font-semibold text-navy-900 mb-2 tracking-tight">General English Foundations</h3>
<p className="text-slate-500 text-base mb-6 flex-1">Perfect for absolute beginners. Learn essential vocabulary for travel and daily life.</p>
<div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
<div className="flex items-center gap-1"><svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg> 8 Weeks</div>
<div className="flex items-center gap-1"><svg className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg> Group</div>
</div>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
<span className="text-2xl font-semibold text-navy-900">$199</span>
<button className="text-coral font-medium hover:text-coral-hover" onclick="openCourseModal('General English')">View Details</button>
</div>
</div>
</div>
<div className="flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="h-48 overflow-hidden relative">
<span className="absolute top-4 right-4 bg-navy text-white text-xs font-semibold px-2 py-1 rounded">Popular</span>
<img alt="Business English" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 flex-1 flex flex-col">
<h3 className="text-xl font-semibold text-navy-900 mb-2 tracking-tight">Business English Pro</h3>
<p className="text-slate-500 text-base mb-6 flex-1">Master presentations, negotiations, and professional email writing.</p>
<div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
<div className="flex items-center gap-1"><svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg> 12 Weeks</div>
<div className="flex items-center gap-1"><svg className="lucide lucide-briefcase w-4 h-4" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg> Career</div>
</div>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
<span className="text-2xl font-semibold text-navy-900">$349</span>
<button className="text-coral font-medium hover:text-coral-hover" onclick="openCourseModal('Business English Pro')">View Details</button>
</div>
</div>
</div>
<div className="flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="h-48 overflow-hidden relative">
<span className="absolute top-4 right-4 bg-white/90 backdrop-blur text-navy text-xs font-semibold px-2 py-1 rounded">Advanced</span>
<img alt="IELTS Prep" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 flex-1 flex flex-col">
<h3 className="text-xl font-semibold text-navy-900 mb-2 tracking-tight">IELTS &amp; TOEFL Prep</h3>
<p className="text-slate-500 text-base mb-6 flex-1">Intensive preparation strategies to maximize your exam score.</p>
<div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
<div className="flex items-center gap-1"><svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg> 6 Weeks</div>
<div className="flex items-center gap-1"><svg className="lucide lucide-book-open w-4 h-4" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg> Exam</div>
</div>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
<span className="text-2xl font-semibold text-navy-900">$299</span>
<button className="text-coral font-medium hover:text-coral-hover" onclick="openCourseModal('IELTS Prep')">View Details</button>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 bg-navy-900 text-white relative overflow-hidden">
<div className="absolute top-0 right-0 p-12 opacity-10">
<svg className="lucide lucide-quote w-64 h-64 text-white" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">What our students say</h2>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-navy-800 p-8 rounded-2xl border border-navy-700">
<div className="flex text-coral mb-4">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-lg text-slate-200 mb-6 italic">"The instructors are incredible. I needed English for my software engineering job, and within 3 months I was leading meetings confidently."</p>
<div className="flex items-center gap-4">
<img alt="User" className="w-12 h-12 rounded-full border-2 border-navy-700" src="https://randomuser.me/api/portraits/men/32.jpg"/>
<div>
<h4 className="font-medium text-white">Carlos M.</h4>
<span className="text-sm text-slate-400">Software Developer, Brazil</span>
</div>
</div>
</div>
<div className="bg-navy-800 p-8 rounded-2xl border border-navy-700">
<div className="flex text-coral mb-4">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.innerHTML.replace('LinguaPro','LingOwl')
.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-lg text-slate-200 mb-6 italic">"I was afraid of speaking, but the small group sessions made me feel safe. Now I'm traveling Europe without using a translator app!"</p>
<div className="flex items-center gap-4">
<img alt="User" className="w-12 h-12 rounded-full border-2 border-navy-700" src="https://randomuser.me/api/portraits/women/44.jpg"/>
<div>
<h4 className="font-medium text-white">Yuki T.</h4>
<span className="text-sm text-slate-400">Student, Japan</span>
</div>
</div>
</div>
<div className="bg-navy-800 p-8 rounded-2xl border border-navy-700">
<div className="flex text-coral mb-4">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div></div></div></section></main>
    </>
  );
}
