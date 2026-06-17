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



        lucide.createIcons();
    
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
      

<nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded bg-[#b54bfb] text-white">
<span className="font-serif font-bold">B</span>
</div>
<span className="font-serif text-lg font-medium tracking-tight text-gray-900">TBWWIOC</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-gray-600 hover:text-[#b54bfb]" href="#">Academics</a>
<a className="text-sm font-medium text-gray-600 hover:text-[#b54bfb]" href="#">Admissions</a>
<a className="text-sm font-medium text-gray-600 hover:text-[#b54bfb]" href="#">About</a>
<a className="bg-[#b54bfb] px-4 py-2 text-sm font-medium text-white rounded transition hover:opacity-90" href="#">Apply Now</a>
</div>
</div>
</nav>

<section className="relative overflow-hidden bg-gray-50 pt-24 pb-32 lg:pt-32 lg:pb-40">
<div className="absolute inset-0 opacity-30">
<div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#ded2fd] blur-3xl"></div>
<div className="absolute -left-20 bottom-0 h-[300px] w-[300px] rounded-full bg-[#ded2fd] blur-3xl"></div>
</div>
<div className="relative mx-auto max-w-5xl px-6 text-center">
<h1 className="font-serif text-5xl font-medium uppercase tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
                The <span className="text-[#b54bfb]">B.L.A.C.K.W.O.O.D</span> Worldwide <br/>
                Institute of Change
            </h1>
<p className="mx-auto mt-8 max-w-2xl text-xl text-gray-600 sm:text-2xl">
                Educating, Empowering, and Transforming Under the Kingdom Agenda.
            </p>
<div className="mt-12 flex justify-center gap-4">
<button className="group inline-flex items-center gap-2 bg-[#b54bfb] px-8 py-4 text-lg font-medium text-white rounded shadow-lg shadow-purple-200 transition-all hover:-translate-y-1 hover:shadow-xl">
                    Our Academics
                    <i className="h-5 w-5 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
<div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">

<div>
<span className="text-sm font-semibold uppercase tracking-widest text-[#b54bfb]">Welcome to TBWWIOC</span>
<h2 className="mt-4 font-serif text-4xl font-medium tracking-tight text-gray-900 sm:text-5xl">
                    A Movement of Growth &amp; Transformation
                </h2>
<div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-600">
<p>
                        The Blackwood Worldwide Institute of Change (TBWWIOC) is the first educational institution built on the framework of the Kingdom Agenda, designed to transform lives spiritually, mentally, physically, intellectually, and economically.
                    </p>
<p>
                        Our mission is to educate and accredit global leaders through an accelerated framework of <span className="font-medium text-gray-900">Cramer Courses</span> — intensive, powerful programs that prepare learners to impact their communities, Africa, and the world at large.
                    </p>
</div>
<div className="mt-10">
<h3 className="font-serif text-xl font-medium text-gray-900">Rooted In:</h3>
<div className="mt-6 flex flex-wrap gap-3">
<span className="rounded-full bg-[#ded2fd] px-4 py-2 text-sm font-medium text-[#b54bfb]">Cultural Identity</span>
<span className="rounded-full bg-[#ded2fd] px-4 py-2 text-sm font-medium text-[#b54bfb]">Mental Health</span>
<span className="rounded-full bg-[#ded2fd] px-4 py-2 text-sm font-medium text-[#b54bfb]">Business</span>
<span className="rounded-full bg-[#ded2fd] px-4 py-2 text-sm font-medium text-[#b54bfb]">Ministry</span>
<span className="rounded-full bg-[#ded2fd] px-4 py-2 text-sm font-medium text-[#b54bfb]">Entertainment</span>
<span className="rounded-full bg-[#ded2fd] px-4 py-2 text-sm font-medium text-[#b54bfb]">Humanities</span>
<span className="rounded-full bg-[#ded2fd] px-4 py-2 text-sm font-medium text-[#b54bfb]">Holistic Wellness</span>
</div>
</div>
</div>

<div className="relative flex items-center justify-center rounded-2xl bg-gray-50 border border-gray-100 p-12 lg:h-full">
<div className="absolute inset-0 bg-[radial-gradient(#ded2fd_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
<div className="relative z-10 flex h-48 w-48 flex-col items-center justify-center rounded-full bg-white shadow-2xl ring-1 ring-gray-900/5">
<i className="h-16 w-16 text-[#b54bfb]" data-lucide="graduation-cap"></i>
<span className="mt-2 text-center font-serif text-sm font-bold tracking-tight text-gray-900">TBWWIOC</span>
</div>
</div>
</div>
</section>

<section className="bg-[#ded2fd]/30 py-24 sm:py-32">
<div className="mx-auto max-w-7xl px-6">
<div className="grid grid-cols-1 gap-12 lg:grid-cols-12">

<div className="lg:col-span-5">
<h2 className="font-serif text-3xl font-medium tracking-tight text-gray-900">Discover what TBWWIOC has to offer</h2>
<p className="mt-4 text-lg text-gray-600">Join a global community of learners committed to excellence.</p>
<div className="mt-12 grid grid-cols-2 gap-8">
<div>
<p className="font-serif text-5xl font-medium text-[#b54bfb]">2K+</p>
<p className="mt-2 text-base font-medium text-gray-700">Degree Programs</p>
</div>
<div>
<p className="font-serif text-5xl font-medium text-[#b54bfb]">120+</p>
<p className="mt-2 text-base font-medium text-gray-700">Qualified Staff</p>
</div>
<div>
<p className="font-serif text-5xl font-medium text-[#b54bfb]">80+</p>
<p className="mt-2 text-base font-medium text-gray-700">Courses Available</p>
</div>
<div>
<p className="font-serif text-5xl font-medium text-[#b54bfb]">1K+</p>
<p className="mt-2 text-base font-medium text-gray-700">Part-Time Students</p>
</div>
</div>
</div>

<div className="lg:col-span-7 lg:pl-12">
<div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-900/5 sm:p-10">
<h3 className="mb-6 font-serif text-2xl font-medium text-gray-900">Popular Programs</h3>
<ul className="space-y-4">
<li className="group flex items-center justify-between rounded-lg border border-gray-100 p-4 transition hover:border-[#b54bfb] hover:bg-gray-50">
<span className="text-lg font-medium text-gray-700 group-hover:text-[#b54bfb]">Business &amp; Entrepreneurship</span>
<i className="h-5 w-5 text-gray-400 group-hover:text-[#b54bfb]" data-lucide="arrow-up-right"></i>
</li>
<li className="group flex items-center justify-between rounded-lg border border-gray-100 p-4 transition hover:border-[#b54bfb] hover:bg-gray-50">
<span className="text-lg font-medium text-gray-700 group-hover:text-[#b54bfb]">Agriculture &amp; Food Security</span>
<i className="h-5 w-5 text-gray-400 group-hover:text-[#b54bfb]" data-lucide="arrow-up-right"></i>
</li>
<li className="group flex items-center justify-between rounded-lg border border-gray-100 p-4 transition hover:border-[#b54bfb] hover:bg-gray-50">
<span className="text-lg font-medium text-gray-700 group-hover:text-[#b54bfb]">Real Estate, Land &amp; Community Development</span>
<i className="h-5 w-5 text-gray-400 group-hover:text-[#b54bfb]" data-lucide="arrow-up-right"></i>
</li>
<li className="group flex items-center justify-between rounded-lg border border-gray-100 p-4 transition hover:border-[#b54bfb] hover:bg-gray-50">
<span className="text-lg font-medium text-gray-700 group-hover:text-[#b54bfb]">Leadership &amp; Governance</span>
<i className="h-5 w-5 text-gray-400 group-hover:text-[#b54bfb]" data-lucide="arrow-up-right"></i>
</li>
<li className="group flex items-center justify-between rounded-lg border border-gray-100 p-4 transition hover:border-[#b54bfb] hover:bg-gray-50">
<span className="text-lg font-medium text-gray-700 group-hover:text-[#b54bfb]">Precious Metals &amp; Wealth Stewardship</span>
<i className="h-5 w-5 text-gray-400 group-hover:text-[#b54bfb]" data-lucide="arrow-up-right"></i>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
<div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">

<div>
<span className="text-sm font-semibold uppercase tracking-widest text-[#b54bfb]">Authority &amp; Excellence</span>
<h2 className="mt-4 font-serif text-4xl font-medium tracking-tight text-gray-900">Accreditation</h2>
<p className="mt-6 text-lg text-gray-600">
                    TBWWIOC operates under multiple layers of accreditation and recognition, ensuring authority, excellence, and global credibility. These accreditations grant TBWWIOC the authority to educate, certify, and accredit other schools worldwide under the Kingdom Agenda.
                </p>
<ul className="mt-8 space-y-4">
<li className="flex items-start gap-3">
<i className="mt-1 h-6 w-6 shrink-0 text-[#b54bfb]" data-lucide="check-circle-2"></i>
<span className="text-lg text-gray-700">U.S. Department of Education (recognized internationally)</span>
</li>
<li className="flex items-start gap-3">
<i className="mt-1 h-6 w-6 shrink-0 text-[#b54bfb]" data-lucide="check-circle-2"></i>
<span className="text-lg text-gray-700">American School of Business Accreditation</span>
</li>
<li className="flex items-start gap-3">
<i className="mt-1 h-6 w-6 shrink-0 text-[#b54bfb]" data-lucide="check-circle-2"></i>
<span className="text-lg text-gray-700">School of Religious Studies Accreditation</span>
</li>
<li className="flex items-start gap-3">
<i className="mt-1 h-6 w-6 shrink-0 text-[#b54bfb]" data-lucide="check-circle-2"></i>
<span className="text-lg text-gray-700">School of Economics Accreditation</span>
</li>
<li className="flex items-start gap-3">
<i className="mt-1 h-6 w-6 shrink-0 text-[#b54bfb]" data-lucide="check-circle-2"></i>
<span className="text-lg text-gray-700">International Education &amp; Studies Accreditation (Africa, UK, and beyond)</span>
</li>
</ul>
</div>

<div className="relative h-full min-h-[400px] w-full overflow-hidden rounded-2xl bg-[#2a2a2a]">
<img alt="Students" className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-overlay" src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1740&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#b54bfb]/90 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 sm:p-12">
<i className="h-10 w-10 text-white/80" data-lucide="quote"></i>
<blockquote className="mt-4 font-serif text-3xl font-medium leading-tight text-white">
                        “Equipping Kingdom Leaders to Transform Nations — The TBWWIOC Way”
                    </blockquote>
</div>
</div>
</div>
</section>

<section className="bg-gray-50 px-6 py-24">
<div className="mx-auto max-w-7xl text-center">
<h2 className="font-serif text-3xl font-medium tracking-tight text-gray-900">Your Next Steps</h2>
<p className="mt-4 text-lg text-gray-600">Start your journey with us today.</p>
<div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

<a className="group relative flex flex-col items-start justify-between overflow-hidden rounded-xl border border-gray-200 bg-white p-8 transition hover:border-[#b54bfb] hover:shadow-lg" href="https://www.tbwwioc.com/academics/">
<div>
<div className="mb-4 inline-flex rounded-lg bg-[#ded2fd] p-3 text-[#b54bfb]">
<i className="h-6 w-6" data-lucide="book-open"></i>
</div>
<h3 className="font-serif text-xl font-medium text-gray-900">Finish My Degree</h3>
<p className="mt-2 text-base text-gray-500">Resume your education.</p>
</div>
<div className="mt-6 flex items-center text-sm font-medium text-[#b54bfb]">
                        View Academics <i className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</div>
</a>

<a className="group relative flex flex-col items-start justify-between overflow-hidden rounded-xl border border-gray-200 bg-white p-8 transition hover:border-[#b54bfb] hover:shadow-lg" href="#">
<div>
<div className="mb-4 inline-flex rounded-lg bg-[#ded2fd] p-3 text-[#b54bfb]">
<i className="h-6 w-6" data-lucide="pen-tool"></i>
</div>
<h3 className="font-serif text-xl font-medium text-gray-900">Apply Now</h3>
<p className="mt-2 text-base text-gray-500">Start your application.</p>
</div>
<div className="mt-6 flex items-center text-sm font-medium text-[#b54bfb]">
                        Go to Application <i className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</div>
</a>

<a className="group relative flex flex-col items-start justify-between overflow-hidden rounded-xl border border-gray-200 bg-white p-8 transition hover:border-[#b54bfb] hover:shadow-lg" href="https://www.tbwwioc.com/admissions/">
<div>
<div className="mb-4 inline-flex rounded-lg bg-[#ded2fd] p-3 text-[#b54bfb]">
<i className="h-6 w-6" data-lucide="info"></i>
</div>
<h3 className="font-serif text-xl font-medium text-gray-900">Admissions Info</h3>
<p className="mt-2 text-base text-gray-500">Learn requirements &amp; process.</p>
</div>
<div className="mt-6 flex items-center text-sm font-medium text-[#b54bfb]">
                        Learn More <i className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</div>
</a>

<a className="group relative flex flex-col items-start justify-between overflow-hidden rounded-xl border border-gray-200 bg-white p-8 transition hover:border-[#b54bfb] hover:shadow-lg" href="https://www.tbwwioc.com/about/">
<div>
<div className="mb-4 inline-flex rounded-lg bg-[#ded2fd] p-3 text-[#b54bfb]">
<i className="h-6 w-6" data-lucide="compass"></i>
</div>
<h3 className="font-serif text-xl font-medium text-gray-900">Explore TBWWIOC</h3>
<p className="mt-2 text-base text-gray-500">Discover our story.</p>
</div>
<div className="mt-6 flex items-center text-sm font-medium text-[#b54bfb]">
                        About Us <i className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</div>
</a>

<a className="group relative flex flex-col items-start justify-between overflow-hidden rounded-xl border border-gray-200 bg-white p-8 transition hover:border-[#b54bfb] hover:shadow-lg" href="https://www.tbwwioc.com/admissions/">
<div>
<div className="mb-4 inline-flex rounded-lg bg-[#ded2fd] p-3 text-[#b54bfb]">
<i className="h-6 w-6" data-lucide="award"></i>
</div>
<h3 className="font-serif text-xl font-medium text-gray-900">Scholarships</h3>
<p className="mt-2 text-base text-gray-500">Find funding opportunities.</p>
</div>
<div className="mt-6 flex items-center text-sm font-medium text-[#b54bfb]">
                        Find Out More <i className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</div>
</a>

<a className="group relative flex flex-col items-start justify-between overflow-hidden rounded-xl border border-gray-200 bg-white p-8 transition hover:border-[#b54bfb] hover:shadow-lg" href="https://www.tbwwioc.com/contact/">
<div>
<div className="mb-4 inline-flex rounded-lg bg-[#ded2fd] p-3 text-[#b54bfb]">
<i className="h-6 w-6" data-lucide="banknote"></i>
</div>
<h3 className="font-serif text-xl font-medium text-gray-900">Financial Aid</h3>
<p className="mt-2 text-base text-gray-500">Support for your education.</p>
</div>
<div className="mt-6 flex items-center text-sm font-medium text-[#b54bfb]">
                        Contact Us <i className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</div>
</a>
</div>
</div>
</section>

<footer className="bg-gray-900 py-16 text-white">
<div className="mx-auto max-w-7xl px-6">
<div className="grid grid-cols-1 gap-12 border-b border-gray-800 pb-12 md:grid-cols-3">

<div>
<h3 className="font-serif text-2xl font-medium text-white">B.L.A.C.K.W.O.O.D</h3>
<p className="mt-2 text-base text-gray-400">Worldwide Institute of Change</p>
<div className="mt-6 flex items-center gap-2 text-gray-400">
<i className="h-5 w-5 text-[#b54bfb]" data-lucide="map-pin"></i>
<span>Accra, Ghana</span>
</div>
</div>

<div>
<h4 className="mb-4 font-serif text-lg font-medium text-white">Main Office</h4>
<ul className="space-y-3 text-base text-gray-400">
<li className="flex items-center gap-3">
<i className="h-4 w-4" data-lucide="phone"></i>
                            +1 (404) 944-8544
                        </li>
<li className="flex items-center gap-3">
<i className="h-4 w-4" data-lucide="clock"></i>
                            8:00 a.m. – 4:00 p.m.
                        </li>
</ul>
</div>

<div>
<h4 className="mb-4 font-serif text-lg font-medium text-white">Attendance &amp; Admin</h4>
<ul className="space-y-3 text-base text-gray-400">
<li className="flex items-center gap-3">
<i className="h-4 w-4" data-lucide="phone"></i>
                            +1 (404) 944-8544
                        </li>
<li className="flex items-center gap-3">
<i className="h-4 w-4" data-lucide="mail"></i>
                            administrations@tbwwioc.com
                        </li>
</ul>
</div>
</div>
<div className="mt-8 flex flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">
<p>© 2023 The B.L.A.C.K.W.O.O.D Worldwide Institute of Change. All Rights Reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white" href="#">Privacy</a>
<a className="hover:text-white" href="#">Terms</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
