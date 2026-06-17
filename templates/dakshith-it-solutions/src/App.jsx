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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



                        document.getElementById("enquiryForm").addEventListener("submit", function(e) {
                            e.preventDefault(); // Prevents default form submission

                            var name = document.getElementById("name").value;
                            var phone = document.getElementById("phone").value;
                            var course = document.getElementById("course").value;
                            var message = document.getElementById("message").value;

                            // Format the message for WhatsApp
                            var whatsappMessage = 
                            "New Enquiry - Dakshith I T Solutions\n\n" +
                            "Name: " + name + "\n" +
                            "Phone: " + phone + "\n" +
                            "Course: " + course + "\n" +
                            "Message: " + (message ? message : "N/A");

                            // Direct redirect to WhatsApp
                            var url = "https://wa.me/918978251632?text=" + encodeURIComponent(whatsappMessage);
                            window.location.href = url;
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
      

<header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
<div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
<a className="text-lg font-semibold tracking-tight text-slate-900 flex items-center gap-2" href="#">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white text-sm">
                    DITS
                </div>
                Dakshith I T Solutions
            </a>
<nav className="hidden md:flex gap-6 text-sm font-medium">
<a className="hover:text-slate-900 transition-colors" href="#about">About</a>
<a className="hover:text-slate-900 transition-colors" href="#courses">Courses</a>
<a className="hover:text-slate-900 transition-colors" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:flex text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors items-center gap-1.5" href="tel:8978251632">
<iconify-icon icon="solar:phone-outline" strokeWidth="1.5"></iconify-icon>
                    8978251632
                </a>
<a className="inline-flex h-9 items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950" href="#enquire">
                    Enquire Now
                </a>
</div>
</div>
</header>
<main className="flex-1">

<section className="relative overflow-hidden bg-white px-6 py-20 sm:py-28 lg:px-8 border-b border-slate-200">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.blue.50),white)] opacity-20"></div>
<div className="mx-auto max-w-4xl text-center">
<div className="mb-6 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
<span className="flex h-1.5 w-1.5 rounded-full bg-blue-600 mr-2"></span>
                    Admissions Open for New Batches
                </div>
<h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl mb-6">
                    Build Your IT Career with Practical Training
                </h1>
<p className="text-lg leading-8 text-slate-600 mb-10 max-w-2xl mx-auto">
                    Learn Programming, Tally GST &amp; Computer Skills from expert trainers in Ongole. We focus on real-time practice and career guidance.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
<a className="w-full sm:w-auto inline-flex h-11 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700" href="#enquire">
                        Explore Courses
                    </a>
<a className="w-full sm:w-auto inline-flex h-11 items-center justify-center rounded-md border border-slate-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-slate-50 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 gap-2" href="https://wa.me/918978251632" target="_blank">
<iconify-icon className="text-green-600" icon="solar:chat-round-line-outline" strokeWidth="1.5"></iconify-icon>
                        WhatsApp Us
                    </a>
</div>

<div className="relative mx-auto max-w-5xl rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100">
<img alt="Students learning to code" className="w-full h-auto object-cover aspect-video sm:aspect-[2.5/1]" src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
</div>
</section>

<div className="bg-white border-b border-slate-200">
<div className="mx-auto max-w-6xl px-6 py-8">
<div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
<div>
<div className="text-2xl font-semibold tracking-tight text-slate-900">5.0</div>
<div className="text-xs font-medium text-slate-500 mt-1 uppercase tracking-widest">Student Rating</div>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight text-slate-900">100%</div>
<div className="text-xs font-medium text-slate-500 mt-1 uppercase tracking-widest">Practical Training</div>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight text-slate-900">Small</div>
<div className="text-xs font-medium text-slate-500 mt-1 uppercase tracking-widest">Batch Sizes</div>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight text-slate-900">Expert</div>
<div className="text-xs font-medium text-slate-500 mt-1 uppercase tracking-widest">Career Guidance</div>
</div>
</div>
</div>
</div>

<section className="py-20 px-6 bg-slate-50" id="about">
<div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">About Dakshith I T Solutions</h2>
<p className="text-base text-slate-600 mb-4">
                        Dakshith I T Solutions is a premier professional computer training institute located in Ongole. Our mission is to bridge the gap between academic education and industry requirements by offering highly job-oriented computer and programming courses.
                    </p>
<p className="text-base text-slate-600 mb-8">
                        We believe in a hands-on, practical learning approach. With small batch sizes, every student receives individual attention to ensure they grasp concepts thoroughly, from beginner basics to advanced technical skills.
                    </p>
<ul className="space-y-3 text-sm text-slate-700">
<li className="flex items-center gap-3">
<iconify-icon className="text-blue-600 text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Offline Classroom Training
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-blue-600 text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Real-Time Practice Sessions
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-blue-600 text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Affordable Fee Structure
                        </li>
</ul>
</div>
<div className="bg-white p-2 rounded-2xl border border-slate-200 shadow-sm aspect-video flex items-center justify-center relative overflow-hidden group">
<img alt="Classroom Environment" className="absolute inset-0 w-full h-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1573164574472-797ce44cb952?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-y border-slate-200" id="courses">
<div className="mx-auto max-w-6xl">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Our Professional Courses</h2>
<p className="text-base text-slate-600">Master the skills employers are looking for with our comprehensive, hands-on training programs. Browse all our available courses below.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm transition-all hover:shadow-md hover:border-blue-200">
<div className="h-48 w-full bg-slate-100 overflow-hidden relative">
<img alt="Full Stack Java" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute top-4 left-4 inline-flex items-center rounded-full bg-white/90 backdrop-blur px-2.5 py-1 text-xs font-semibold text-blue-700 shadow-sm">Programming</div>
</div>
<div className="p-6 flex flex-col flex-1">
<h3 className="text-lg font-semibold text-slate-900 mb-2">Java / Full Stack Java</h3>
<p className="text-sm text-slate-600 mb-4 flex-1">Master core to advanced Java concepts, Spring Boot, and front-end technologies to build complete web applications.</p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors" href="#enquire" onclick="document.getElementById('course').value='Java / Full Stack Java'">
                                Enquire Course <iconify-icon icon="solar:arrow-right-outline"></iconify-icon>
</a>
</div>
</div>

<div className="group flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm transition-all hover:shadow-md hover:border-blue-200">
<div className="h-48 w-full bg-slate-100 overflow-hidden relative">
<img alt="C and C++ Programming" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1580894732444-8ecbef79bdce?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute top-4 left-4 inline-flex items-center rounded-full bg-white/90 backdrop-blur px-2.5 py-1 text-xs font-semibold text-blue-700 shadow-sm">Programming</div>
</div>
<div className="p-6 flex flex-col flex-1">
<h3 className="text-lg font-semibold text-slate-900 mb-2">C &amp; C++ Programming</h3>
<p className="text-sm text-slate-600 mb-4 flex-1">Build a strong foundation in logic and programming structures with hands-on practice in C and object-oriented C++.</p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors" href="#enquire" onclick="document.getElementById('course').value='C / C++ Programming'">
                                Enquire Course <iconify-icon icon="solar:arrow-right-outline"></iconify-icon>
</a>
</div>
</div>

<div className="group flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm transition-all hover:shadow-md hover:border-emerald-200">
<div className="h-48 w-full bg-slate-100 overflow-hidden relative">
<img alt="Tally Software" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1573167243872-43c6433b9d40?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute top-4 left-4 inline-flex items-center rounded-full bg-white/90 backdrop-blur px-2.5 py-1 text-xs font-semibold text-emerald-700 shadow-sm">Accounting</div>
</div>
<div className="p-6 flex flex-col flex-1">
<h3 className="text-lg font-semibold text-slate-900 mb-2">Tally Prime &amp; ERP 9</h3>
<p className="text-sm text-slate-600 mb-4 flex-1">Complete practical training on industry-standard accounting software. Learn to manage accounts efficiently.</p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors" href="#enquire" onclick="document.getElementById('course').value='Tally Prime &amp; ERP 9'">
                                Enquire Course <iconify-icon icon="solar:arrow-right-outline"></iconify-icon>
</a>
</div>
</div>

<div className="group flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm transition-all hover:shadow-md hover:border-emerald-200">
<div className="h-48 w-full bg-slate-100 overflow-hidden relative">
<img alt="GST and Taxation" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute top-4 left-4 inline-flex items-center rounded-full bg-white/90 backdrop-blur px-2.5 py-1 text-xs font-semibold text-emerald-700 shadow-sm">Accounting</div>
</div>
<div className="p-6 flex flex-col flex-1">
<h3 className="text-lg font-semibold text-slate-900 mb-2">Practical GST Implementation</h3>
<p className="text-sm text-slate-600 mb-4 flex-1">Learn real-world GST calculations, tax brackets, invoice generation, and returns filing using accounting software.</p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors" href="#enquire" onclick="document.getElementById('course').value='Practical GST Implementation'">
                                Enquire Course <iconify-icon icon="solar:arrow-right-outline"></iconify-icon>
</a>
</div>
</div>

<div className="group flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm transition-all hover:shadow-md hover:border-indigo-200">
<div className="h-48 w-full bg-slate-100 overflow-hidden relative">
<img alt="Advanced Excel" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute top-4 left-4 inline-flex items-center rounded-full bg-white/90 backdrop-blur px-2.5 py-1 text-xs font-semibold text-indigo-700 shadow-sm">Basic Computers</div>
</div>
<div className="p-6 flex flex-col flex-1">
<h3 className="text-lg font-semibold text-slate-900 mb-2">Advanced MS Excel</h3>
<p className="text-sm text-slate-600 mb-4 flex-1">Master VLOOKUP, Pivot Tables, Macros, and advanced formulas to handle data like a professional.</p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors" href="#enquire" onclick="document.getElementById('course').value='Advanced MS Excel'">
                                Enquire Course <iconify-icon icon="solar:arrow-right-outline"></iconify-icon>
</a>
</div>
</div>

<div className="group flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm transition-all hover:shadow-md hover:border-indigo-200">
<div className="h-48 w-full bg-slate-100 overflow-hidden relative">
<img alt="Basic Computer Training" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute top-4 left-4 inline-flex items-center rounded-full bg-white/90 backdrop-blur px-2.5 py-1 text-xs font-semibold text-indigo-700 shadow-sm">Basic Computers</div>
</div>
<div className="p-6 flex flex-col flex-1">
<h3 className="text-lg font-semibold text-slate-900 mb-2">Computer Fundamentals</h3>
<p className="text-sm text-slate-600 mb-4 flex-1">Start from zero. Learn operating systems, MS Word, PowerPoint, internet basics, and daily computing tasks.</p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors" href="#enquire" onclick="document.getElementById('course').value='Computer Fundamentals'">
                                Enquire Course <iconify-icon icon="solar:arrow-right-outline"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-900 text-slate-300 relative overflow-hidden" id="enquire">

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiMzMzQxNTUiLz48L3N2Zz4=')] opacity-20"></div>
<div className="mx-auto max-w-5xl relative z-10 grid md:grid-cols-5 gap-12 items-center">
<div className="md:col-span-2">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Start Your Journey Today</h2>
<p className="text-sm mb-8 text-slate-400">Fill out the form to get details about course fees, batch timings, and syllabus. You will be redirected instantly to our WhatsApp to connect with a counselor.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-white">
<iconify-icon icon="solar:map-point-outline" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-white">Visit Us</h4>
<p className="text-xs text-slate-400 mt-1">Anjaiah Road, Beside Ongole Children Hospital, Ongole</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-white">
<iconify-icon icon="solar:clock-circle-outline" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-white">Working Hours</h4>
<p className="text-xs text-slate-400 mt-1">Open Daily — Until 9:00 PM</p>
</div>
</div>
</div>
</div>
<div className="md:col-span-3">
<div className="bg-white rounded-2xl p-8 shadow-xl">
<h3 className="text-xl font-semibold text-slate-900 mb-6 tracking-tight">Student Enquiry Form</h3>

<form className="space-y-4" id="enquiryForm">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700" htmlFor="name">Full Name</label>
<input className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors" id="name" name="Name" placeholder="John Doe" required="" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700" htmlFor="phone">Mobile Number</label>
<input className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors" id="phone" name="Phone" placeholder="8978251632" required="" type="tel"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700" htmlFor="course">Course Interested</label>
<div className="relative">
<select className="w-full appearance-none rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors" id="course" name="Course" required="">
<option disabled="" selected="" value="">Select a course</option>
<option value="Java / Full Stack Java">Java / Full Stack Java</option>
<option value="C / C++ Programming">C / C++ Programming</option>
<option value="Tally Prime &amp; ERP 9">Tally Prime &amp; ERP 9</option>
<option value="Practical GST Implementation">Practical GST Implementation</option>
<option value="Advanced MS Excel">Advanced MS Excel</option>
<option value="Computer Fundamentals">Computer Fundamentals</option>
<option value="Other / Not Sure">Other / Not Sure</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
<iconify-icon icon="solar:alt-arrow-down-outline"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700" htmlFor="message">Message (Optional)</label>
<textarea className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors resize-none" id="message" name="Message" placeholder="Any specific requirements or questions?" rows="3"></textarea>
</div>
<button className="w-full mt-2 inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2" type="submit">
                                Send via WhatsApp
                            </button>
</form>


</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-200 py-12 px-6" id="contact">
<div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-8 items-center">
<div>
<a className="text-lg font-semibold tracking-tight text-slate-900 flex items-center gap-2 mb-4" href="#">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white text-sm">
                        DITS
                    </div>
                    Dakshith I T Solutions
                </a>
<p className="text-sm text-slate-500 max-w-sm mb-6">
                    Professional computer training institute in Ongole offering practical, job-oriented courses to build your IT career.
                </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="tel:8978251632">
<span className="sr-only">Phone</span>
<iconify-icon className="text-xl" icon="solar:phone-outline"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-green-600 transition-colors" href="https://wa.me/918978251632" target="_blank">
<span className="sr-only">WhatsApp</span>
<iconify-icon className="text-xl" icon="solar:chat-round-line-outline"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-blue-600 transition-colors" href="https://maps.google.com/?q=Anjaiah+Road,+Beside+Ongole+Children+Hospital,+Ongole" target="_blank">
<span className="sr-only">Location</span>
<iconify-icon className="text-xl" icon="solar:map-point-outline"></iconify-icon>
</a>
</div>
</div>
<div className="md:text-right text-sm text-slate-500 flex flex-col md:items-end justify-center">
<p>© 2024 Dakshith I T Solutions.</p>
<p className="mt-1">All rights reserved.</p>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2" href="https://wa.me/918978251632" target="_blank">
<iconify-icon className="text-3xl" icon="solar:chat-round-line-outline"></iconify-icon>
<span className="sr-only">WhatsApp Us</span>
</a>

<a className="md:hidden fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2" href="tel:8978251632">
<iconify-icon className="text-2xl" icon="solar:phone-calling-outline"></iconify-icon>
<span className="sr-only">Call Us</span>
</a>

    </>
  );
}
