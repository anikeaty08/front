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



        function showPage(pageId) {
            // Hide all pages
            document.querySelectorAll('.page-section').forEach(section => {
                section.classList.add('hidden');
            });
            
            // Show selected page
            document.getElementById(pageId).classList.remove('hidden');
            
            // Update Active State on Nav
            document.querySelectorAll('.nav-link').forEach(link => {
                if(link.dataset.target === pageId) {
                    link.classList.remove('text-slate-500');
                    link.classList.add('text-slate-900');
                } else {
                    link.classList.add('text-slate-500');
                    link.classList.remove('text-slate-900');
                }
            });

            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function toggleMobile() {
            document.getElementById('mobile-menu').classList.toggle('hidden');
        }

        // Initialize Home
        showPage('home');
    
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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="text-slate-900 font-semibold text-lg tracking-tighter flex items-center gap-2 group" href="#" onclick="showPage('home')">
<div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center border border-slate-200 group-hover:border-slate-300 transition-colors">
<span className="iconify text-slate-900" data-icon="lucide:graduation-cap" data-strokeWidth="1.5" data-width="18"></span>
</div>
                Rishi<span className="text-slate-400 font-normal">Consultants</span>
</a>

<div className="hidden md:flex items-center gap-8">
<button className="nav-link text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" data-target="home" onclick="showPage('home')">Home</button>
<button className="nav-link text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" data-target="services" onclick="showPage('services')">Services</button>
<button className="nav-link text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" data-target="contact" onclick="showPage('contact')">Contact</button>
</div>

<div className="hidden md:flex">
<button className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium py-2 px-4 rounded-full transition-all shadow-sm hover:shadow flex items-center gap-2" onclick="showPage('contact')">
                    Book Consultation
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</button>
</div>

<button className="md:hidden text-slate-900" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>

<div className="hidden md:hidden bg-white border-b border-slate-100 p-4 absolute w-full" id="mobile-menu">
<div className="flex flex-col gap-4">
<button className="text-left text-sm font-medium text-slate-600" onclick="showPage('home'); toggleMobile()">Home</button>
<button className="text-left text-sm font-medium text-slate-600" onclick="showPage('services'); toggleMobile()">Services</button>
<button className="text-left text-sm font-medium text-slate-600" onclick="showPage('contact'); toggleMobile()">Contact</button>
</div>
</div>
</nav>

<main className="pt-24 min-h-screen flex flex-col justify-between">

<div className="page-section fade-in" id="home">

<section className="max-w-6xl mx-auto px-6 mb-24">
<div className="flex flex-col items-center text-center max-w-3xl mx-auto mt-12 md:mt-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-medium mb-6">
<span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                        Accepting Applications for Fall 2024
                    </div>
<h1 className="text-4xl md:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-6">
                        Navigate your future <br/>
<span className="text-slate-400">beyond borders.</span>
</h1>
<p className="text-lg text-slate-500 mb-8 max-w-xl leading-relaxed">
                        Expert guidance for students aspiring to study abroad. From university selection to visa approval, we simplify your journey to global education.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<button className="bg-slate-900 text-white hover:bg-slate-800 px-6 py-3 rounded-lg text-sm font-medium transition-all shadow-lg shadow-slate-200 flex items-center justify-center gap-2" onclick="showPage('contact')">
                            Start Application
                            <span className="iconify" data-icon="lucide:chevron-right" data-width="16"></span>
</button>
<button className="bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 px-6 py-3 rounded-lg text-sm font-medium transition-all flex items-center justify-center" onclick="showPage('services')">
                            Explore Services
                        </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24">

<div className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 group">
<div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center mb-4 text-indigo-600 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:compass" data-width="20"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">Personalized Counseling</h3>
<p className="text-sm text-slate-500 leading-relaxed">Tailored academic and career advice to help you choose the right path aligned with your aspirations.</p>
</div>

<div className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 group">
<div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center mb-4 text-emerald-600 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:file-check-2" data-width="20"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">Visa Assistance</h3>
<p className="text-sm text-slate-500 leading-relaxed">Comprehensive support for visa documentation, mock interviews, and financial planning.</p>
</div>

<div className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 group">
<div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center mb-4 text-amber-600 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:globe-2" data-width="20"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">Global Network</h3>
<p className="text-sm text-slate-500 leading-relaxed">Partnerships with 500+ top-tier universities across UK, USA, Canada, and Australia.</p>
</div>
</div>
</section>

<section className="border-y border-slate-200 bg-white py-16">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div>
<div className="text-3xl font-semibold text-slate-900 tracking-tight mb-1">12+</div>
<div className="text-xs text-slate-500 uppercase tracking-wide font-medium">Years Experience</div>
</div>
<div>
<div className="text-3xl font-semibold text-slate-900 tracking-tight mb-1">5k+</div>
<div className="text-xs text-slate-500 uppercase tracking-wide font-medium">Students Placed</div>
</div>
<div>
<div className="text-3xl font-semibold text-slate-900 tracking-tight mb-1">98%</div>
<div className="text-xs text-slate-500 uppercase tracking-wide font-medium">Visa Success</div>
</div>
<div>
<div className="text-3xl font-semibold text-slate-900 tracking-tight mb-1">20+</div>
<div className="text-xs text-slate-500 uppercase tracking-wide font-medium">Countries</div>
</div>
</div>
</div>
</section>
</div>

<div className="page-section hidden fade-in" id="services">
<section className="max-w-6xl mx-auto px-6 mb-20">
<div className="mb-12 md:mt-10">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Comprehensive Services</h2>
<p className="text-slate-500 max-w-2xl">We support you at every step of the study abroad lifecycle, ensuring a stress-free experience from application to arrival.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-slate-300 transition-colors">
<div className="flex items-center gap-3 mb-4">
<span className="iconify text-slate-700" data-icon="lucide:graduation-cap" data-width="24"></span>
<h3 className="font-semibold text-slate-900 text-lg tracking-tight">Admission Guidance</h3>
</div>
<p className="text-sm text-slate-500 mb-4 leading-relaxed">Profile evaluation, university shortlisting, and application review to maximize acceptance chances.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-slate-600">
<span className="iconify text-indigo-500" data-icon="lucide:check" data-width="14"></span> SOP/LOR Writing Support
                            </li>
<li className="flex items-center gap-2 text-xs text-slate-600">
<span className="iconify text-indigo-500" data-icon="lucide:check" data-width="14"></span> Application Tracking
                            </li>
</ul>
</div>

<div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-slate-300 transition-colors">
<div className="flex items-center gap-3 mb-4">
<span className="iconify text-slate-700" data-icon="lucide:banknote" data-width="24"></span>
<h3 className="font-semibold text-slate-900 text-lg tracking-tight">Financial Aid</h3>
</div>
<p className="text-sm text-slate-500 mb-4 leading-relaxed">Navigating scholarships, education loans, and financial documentation required for enrollment.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-slate-600">
<span className="iconify text-indigo-500" data-icon="lucide:check" data-width="14"></span> Scholarship Search
                            </li>
<li className="flex items-center gap-2 text-xs text-slate-600">
<span className="iconify text-indigo-500" data-icon="lucide:check" data-width="14"></span> Loan Assistance
                            </li>
</ul>
</div>

<div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-slate-300 transition-colors">
<div className="flex items-center gap-3 mb-4">
<span className="iconify text-slate-700" data-icon="lucide:plane" data-width="24"></span>
<h3 className="font-semibold text-slate-900 text-lg tracking-tight">Visa &amp; Travel</h3>
</div>
<p className="text-sm text-slate-500 mb-4 leading-relaxed">Detailed assistance with visa forms, interview preparation, and pre-departure briefings.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-slate-600">
<span className="iconify text-indigo-500" data-icon="lucide:check" data-width="14"></span> Mock Interviews
                            </li>
<li className="flex items-center gap-2 text-xs text-slate-600">
<span className="iconify text-indigo-500" data-icon="lucide:check" data-width="14"></span> Accommodation Help
                            </li>
</ul>
</div>
</div>
</section>

<section className="border-t border-slate-200 bg-white py-16">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-8">Popular Destinations</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="group cursor-pointer">
<div className="h-32 bg-slate-50 rounded-lg border border-slate-100 flex flex-col items-center justify-center gap-3 group-hover:border-slate-300 transition-all">
<span className="iconify text-slate-400 group-hover:text-indigo-600 transition-colors" data-icon="lucide:landmark" data-width="28"></span>
<span className="text-sm font-medium text-slate-700">United Kingdom</span>
</div>
</div>
<div className="group cursor-pointer">
<div className="h-32 bg-slate-50 rounded-lg border border-slate-100 flex flex-col items-center justify-center gap-3 group-hover:border-slate-300 transition-all">
<span className="iconify text-slate-400 group-hover:text-indigo-600 transition-colors" data-icon="lucide:flag" data-width="28"></span>
<span className="text-sm font-medium text-slate-700">USA</span>
</div>
</div>
<div className="group cursor-pointer">
<div className="h-32 bg-slate-50 rounded-lg border border-slate-100 flex flex-col items-center justify-center gap-3 group-hover:border-slate-300 transition-all">
<span className="iconify text-slate-400 group-hover:text-indigo-600 transition-colors" data-icon="lucide:mountain-snow" data-width="28"></span>
<span className="text-sm font-medium text-slate-700">Canada</span>
</div>
</div>
<div className="group cursor-pointer">
<div className="h-32 bg-slate-50 rounded-lg border border-slate-100 flex flex-col items-center justify-center gap-3 group-hover:border-slate-300 transition-all">
<span className="iconify text-slate-400 group-hover:text-indigo-600 transition-colors" data-icon="lucide:sun" data-width="28"></span>
<span className="text-sm font-medium text-slate-700">Australia</span>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="page-section hidden fade-in" id="contact">
<section className="max-w-6xl mx-auto px-6 mb-20 md:mt-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Start your journey today.</h2>
<p className="text-slate-500 mb-8 leading-relaxed">Fill out the form to schedule a free profile evaluation with our senior consultants. We typically respond within 24 hours.</p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
<span className="iconify text-slate-600" data-icon="lucide:map-pin" data-width="18"></span>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900">Head Office</h4>
<p className="text-sm text-slate-500 mt-1">1204 Tech Park, Sector 5<br/>Bangalore, Karnataka 560001</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
<span className="iconify text-slate-600" data-icon="lucide:mail" data-width="18"></span>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900">Email Us</h4>
<p className="text-sm text-slate-500 mt-1">admissions@rishiconsultants.com</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
<span className="iconify text-slate-600" data-icon="lucide:phone" data-width="18"></span>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900">Call Us</h4>
<p className="text-sm text-slate-500 mt-1">+91 98765 43210</p>
</div>
</div>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 shadow-sm">
<form onsubmit="event.preventDefault(); alert('Request sent! We will contact you shortly.');">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">First Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder-slate-400" placeholder="Jane" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Last Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder-slate-400" placeholder="Doe" required="" type="text"/>
</div>
</div>
<div className="mb-4">
<label className="block text-xs font-medium text-slate-700 mb-1.5">Email Address</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder-slate-400" placeholder="jane@example.com" required="" type="email"/>
</div>
<div className="mb-4">
<label className="block text-xs font-medium text-slate-700 mb-1.5">Study Destination Interest</label>
<div className="relative">
<select className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all cursor-pointer">
<option>United Kingdom</option>
<option>United States</option>
<option>Canada</option>
<option>Australia</option>
<option>Europe</option>
<option>Undecided</option>
</select>
<span className="iconify absolute right-3 top-3 text-slate-400 pointer-events-none" data-icon="lucide:chevron-down" data-width="16"></span>
</div>
</div>
<div className="mb-6">
<label className="block text-xs font-medium text-slate-700 mb-1.5">Message (Optional)</label>
<textarea className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder-slate-400" placeholder="Tell us about your academic background..." rows="3"></textarea>
</div>
<button className="w-full bg-slate-900 text-white font-medium text-sm py-2.5 rounded-lg hover:bg-slate-800 transition-all shadow-sm flex justify-center items-center gap-2" type="submit">
                                Send Request
                                <span className="iconify" data-icon="lucide:send" data-width="14"></span>
</button>
</form>
</div>
</div>
</section>
</div>

<footer className="bg-white border-t border-slate-200 pt-12 pb-8">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
<div>
<a className="text-slate-900 font-semibold text-lg tracking-tighter flex items-center gap-2" href="#">
                            Rishi<span className="text-slate-400 font-normal">Consultants</span>
</a>
<p className="text-xs text-slate-500 mt-2 max-w-xs">Empowering students to achieve their global academic dreams through integrity and excellence.</p>
</div>
<div className="flex gap-6">
<a className="text-slate-400 hover:text-slate-600 transition-colors" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="20"></span>
</a>
<a className="text-slate-400 hover:text-slate-600 transition-colors" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-width="20"></span>
</a>
<a className="text-slate-400 hover:text-slate-600 transition-colors" href="#">
<span className="iconify" data-icon="lucide:instagram" data-width="20"></span>
</a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center border-t border-slate-100 pt-8 text-xs text-slate-400">
<p>© 2024 Rishi Consultants. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-slate-600" href="#">Privacy Policy</a>
<a className="hover:text-slate-600" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>
</main>



    </>
  );
}
