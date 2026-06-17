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
      

<header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
<a className="text-lg font-semibold tracking-tighter text-slate-900 flex items-center gap-2" href="#">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-medium text-sm">
            A
          </div>
          ABBBD School
        </a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#home">
            Home
          </a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#story">
            Our Story
          </a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#courses">
            Academics
          </a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#gallery">
            Campus
          </a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#chancellor">
            Chancellor
          </a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10 hover:shadow-slate-900/20" href="#admission">
            Apply Now
          </a>

<button className="md:hidden text-slate-900 flex items-center">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</header>

<section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden" id="home">

<div className="absolute inset-0 z-0">
<img alt="School Campus" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1629904853716-f004b377c814?q=80&amp;w=2074&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
</div>
<div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
<span className="flex h-2 w-2 rounded-full bg-emerald-400"></span>
<span className="text-xs font-medium text-white tracking-wide">
            Admissions Open 2026-27
          </span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight mb-6 leading-[1.1]">
          Nurturing Excellence,
          <br/>
          Building Future Leaders.
        </h1>
<p className="text-base md:text-lg text-slate-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          ABBBD School, Noida – Where traditional values meet modern education
          to shape the global citizens of tomorrow.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-6 py-3 bg-white text-slate-900 rounded-full text-sm font-medium hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
            Apply for Admission
            <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-6 py-3 bg-transparent border border-white/30 text-white rounded-full text-sm font-medium hover:bg-white/10 backdrop-blur-sm transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:play-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
            Virtual Tour
          </button>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="story">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="w-full lg:w-1/2 relative group">
<div className="absolute -inset-4 bg-gradient-to-r from-slate-100 to-slate-50 rounded-[2rem] -z-10 rotate-2 group-hover:rotate-1 transition-transform duration-500"></div>
<img alt="Students" className="w-full rounded-2xl shadow-sm border border-slate-100" src="https://images.unsplash.com/photo-1529390003868-6c01d73923f9?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-full lg:w-1/2">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-6">
              Our Story
            </h2>
<div className="space-y-6 text-slate-500 leading-relaxed text-base md:text-lg">
<p>
                ABBBD School stands as a beacon of discipline, integrity, and
                academic rigor. Located in the heart of Noida, we are dedicated
                to fostering an environment where curiosity thrives.
              </p>
<p>
                Rooted in deep Indian cultural values while embracing global
                pedagogical standards, we nurture students into responsible,
                confident, and empathetic leaders. Our campus is not just a
                place of learning, but a community of growth.
              </p>
</div>
<div className="mt-8 pt-8 border-t border-slate-100 grid grid-cols-3 gap-8">
<div>
<p className="text-3xl font-semibold text-slate-900 tracking-tight">
                  25+
                </p>
<p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">
                  Years of Excellence
                </p>
</div>
<div>
<p className="text-3xl font-semibold text-slate-900 tracking-tight">
                  1k
                </p>
<p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">
                  Students
                </p>
</div>
<div>
<p className="text-3xl font-semibold text-slate-900 tracking-tight">
                  100%
                </p>
<p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">
                  College Acceptance
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50 border-y border-slate-200" id="courses">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-4">
            Academic Programs
          </h2>
<p className="text-slate-500">
            A comprehensive curriculum designed to challenge and inspire
            students at every stage of development.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 group cursor-default">
<div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:sun-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Pre-Primary</h3>
<p className="text-sm text-slate-500 leading-relaxed">
              Play-based learning focusing on motor skills, social interaction,
              and foundational literacy.
            </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 group cursor-default">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:book-bookmark-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Primary</h3>
<p className="text-sm text-slate-500 leading-relaxed">
              Building core concepts in science, math, and languages through
              interactive methodologies.
            </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 group cursor-default">
<div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:atom-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">
              Middle School
            </h3>
<p className="text-sm text-slate-500 leading-relaxed">
              Encouraging critical thinking, analytical reasoning, and
              specialized subject exploration.
            </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 group cursor-default">
<div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:diploma-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">
              Senior Secondary
            </h3>
<p className="text-sm text-slate-500 leading-relaxed">
              Preparing students for higher education and competitive exams with
              focused streams.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="gallery">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col sm:flex-row justify-between items-end mb-12">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-2">
              Campus Life
            </h2>
<p className="text-slate-500">
              A glimpse into the vibrant daily life at ABBBD School.
            </p>
</div>
<button className="hidden sm:flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-slate-600 transition-colors mt-4 sm:mt-0">
            View Full Gallery
            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
<div className="md:col-span-2 row-span-2 rounded-2xl overflow-hidden group relative">
<img alt="Library" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1510531704581-5b2870972060?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<span className="text-white font-medium">
                State-of-the-art Library
              </span>
</div>
</div>
<div className="rounded-2xl overflow-hidden group relative">
<img alt="Sports" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="rounded-2xl overflow-hidden group relative">
<img alt="Classroom" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden" id="chancellor">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-800 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/3"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
<div className="w-full md:w-1/3">
<div className="relative">
<div className="absolute inset-0 border border-slate-700 rounded-2xl rotate-3"></div>
<img alt="Chancellor" className="relative rounded-2xl w-full grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl shadow-black/50" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="w-full md:w-2/3 text-center md:text-left">
<div className="inline-flex items-center gap-2 mb-6 text-slate-400">
<iconify-icon icon="solar:quote-up-square-linear" width="24"></iconify-icon>
<span className="text-xs uppercase tracking-widest font-medium">
                Chancellor's Desk
              </span>
</div>
<h2 className="text-2xl md:text-4xl font-light leading-snug tracking-tight mb-6">
              "We believe education is the foundation of a strong nation. At
              ABBBD School, we do not just teach; we ignite the spark of
              inquiry, focusing on holistic development, discipline, and
              excellence in both academics and moral values."
            </h2>
<div className="flex flex-col md:flex-row items-center gap-4">
<div>
<p className="text-lg font-medium text-white">Dr. Arvind Gupta</p>
<p className="text-sm text-slate-400">Chancellor, ABBBD Group</p>
</div>
<div className="hidden md:block h-px w-12 bg-slate-700"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50 border-b border-slate-200">
<div className="max-w-4xl mx-auto">
<h2 className="text-center text-3xl font-medium tracking-tight text-slate-900 mb-12">
          Voices of our Community
        </h2>
<div className="grid md:grid-cols-2 gap-6">
<div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm relative">
<iconify-icon className="text-yellow-400 mb-4" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon className="text-yellow-400 mb-4" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon className="text-yellow-400 mb-4" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon className="text-yellow-400 mb-4" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon className="text-yellow-400 mb-4" icon="solar:star-bold" width="20"></iconify-icon>
<p className="text-slate-600 mb-6 leading-relaxed">
              "ABBBD School transformed my child’s confidence. The focus on
              individual attention and values is what sets this institution
              apart."
            </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 font-medium text-xs">
                RJ
              </div>
<div>
<p className="text-sm font-medium text-slate-900">Rajesh J.</p>
<p className="text-xs text-slate-400">Parent, Class 8</p>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm relative">
<iconify-icon className="text-yellow-400 mb-4" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon className="text-yellow-400 mb-4" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon className="text-yellow-400 mb-4" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon className="text-yellow-400 mb-4" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon className="text-yellow-400 mb-4" icon="solar:star-bold" width="20"></iconify-icon>
<p className="text-slate-600 mb-6 leading-relaxed">
              "The teachers here are mentors for life. The sports facilities and
              labs helped me discover my true potential beyond books."
            </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 font-medium text-xs">
                AS
              </div>
<div>
<p className="text-sm font-medium text-slate-900">Ananya S.</p>
<p className="text-xs text-slate-400">Alumni, Batch 2023</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="admission">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24">

<div id="contact">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-6">
            Start Your Journey
          </h2>
<p className="text-slate-500 mb-10 leading-relaxed">
            Admissions are open for the upcoming academic year. Fill out the
            form to schedule a counseling session or visit our campus.
          </p>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 flex-shrink-0">
<iconify-icon className="text-slate-900" icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-900 mb-1">
                  Campus Location
                </p>
<p className="text-sm text-slate-500">
                  Sector 62, ABBBD Campus,
                  <br/>
                  Noida, Uttar Pradesh 201301
                </p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 flex-shrink-0">
<iconify-icon className="text-slate-900" icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-900 mb-1">
                  Contact Details
                </p>
<p className="text-sm text-slate-500">+91 98765 43210</p>
<p className="text-sm text-slate-500">admissions@abbbdschool.com</p>
</div>
</div>
</div>
<div className="mt-12 p-6 bg-slate-50 rounded-xl border border-slate-200/60">
<p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-4">
              Office Hours
            </p>
<div className="flex justify-between text-sm text-slate-600 border-b border-slate-200 pb-2 mb-2">
<span>Monday - Friday</span>
<span>8:00 AM - 4:00 PM</span>
</div>
<div className="flex justify-between text-sm text-slate-600">
<span>Saturday</span>
<span>9:00 AM - 1:00 PM</span>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xl shadow-slate-200/40">
<h3 className="text-xl font-medium text-slate-900 mb-6">
            Admission Inquiry
          </h3>
<form className="space-y-5">
<div className="grid grid-cols-2 gap-5">
<div className="col-span-2 sm:col-span-1 space-y-1">
<label className="text-xs font-medium text-slate-700 ml-1">
                  Student Name
                </label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-slate-900/5 focus:border-slate-400 transition-all placeholder:text-slate-400" placeholder="John Doe" type="text"/>
</div>
<div className="col-span-2 sm:col-span-1 space-y-1">
<label className="text-xs font-medium text-slate-700 ml-1">
                  Class Applying For
                </label>
<div className="relative">
<select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-slate-900/5 focus:border-slate-400 transition-all appearance-none text-slate-600">
<option>Select Grade</option>
<option>Pre-Primary</option>
<option>Grade 1-5</option>
<option>Grade 6-8</option>
<option>Grade 9-12</option>
</select>
<iconify-icon className="absolute right-3 top-3 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700 ml-1">
                Parent/Guardian Name
              </label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-slate-900/5 focus:border-slate-400 transition-all placeholder:text-slate-400" placeholder="Jane Doe" type="text"/>
</div>
<div className="grid grid-cols-2 gap-5">
<div className="col-span-2 sm:col-span-1 space-y-1">
<label className="text-xs font-medium text-slate-700 ml-1">
                  Phone Number
                </label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-slate-900/5 focus:border-slate-400 transition-all placeholder:text-slate-400" placeholder="+91" type="tel"/>
</div>
<div className="col-span-2 sm:col-span-1 space-y-1">
<label className="text-xs font-medium text-slate-700 ml-1">
                  Email Address
                </label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-slate-900/5 focus:border-slate-400 transition-all placeholder:text-slate-400" placeholder="you@example.com" type="email"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700 ml-1">
                Message (Optional)
              </label>
<textarea className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-slate-900/5 focus:border-slate-400 transition-all placeholder:text-slate-400 resize-none" placeholder="Any specific queries..." rows="3"></textarea>
</div>
<div className="flex items-center gap-2 pt-2">
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" value=""/>
<div className="w-9 h-5 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-slate-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-slate-900"></div>
</label>
<span className="text-xs text-slate-500">
                I agree to receive communications regarding admission.
              </span>
</div>
<button className="w-full bg-slate-900 text-white rounded-lg py-3 text-sm font-medium hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10 flex items-center justify-center gap-2 mt-4" type="button">
              Submit Application
              <iconify-icon icon="solar:plain-3-linear"></iconify-icon>
</button>
</form>
</div>
</div>
</section>

<footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8 px-6 text-center md:text-left">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-center mb-12">
<a className="text-xl font-semibold tracking-tighter text-white flex items-center gap-2 mb-4 md:mb-0" href="#">
<div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-slate-900 font-bold text-sm">
              A
            </div>
            ABBBD School
          </a>
<div className="flex gap-6">
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-facebook-linear" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-instagram-linear" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
<p>© 2026 ABBBD School, Noida. All Rights Reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-slate-300 transition-colors" href="#">
              Privacy Policy
            </a>
<a className="hover:text-slate-300 transition-colors" href="#">
              Terms of Service
            </a>
</div>
</div>
</div>
</footer>

    </>
  );
}
