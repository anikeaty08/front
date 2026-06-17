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
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center">
<a className="text-xl font-semibold tracking-tighter text-slate-900" href="#home">
                        OXFORD
                    </a>
</div>

<div className="hidden md:flex space-x-8">
<a className="text-sm font-medium text-slate-900 hover:text-amber-500 transition-colors" href="#home">Home</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#about">About Us</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#admissions">Admissions</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#contact">Contact</a>
</div>

<div className="md:hidden flex items-center">
<button className="text-slate-500 hover:text-slate-900 focus:outline-none">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<main>

<section className="relative bg-slate-900 overflow-hidden" id="home">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&amp;w=2940&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-20 mix-blend-luminosity"></div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-48 lg:py-56 text-center">
<span className="inline-flex items-center rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-500 ring-1 ring-inset ring-amber-500/20 mb-8 tracking-wide uppercase">
                    Admissions Open 2024-2025
                </span>
<h1 className="mx-auto max-w-4xl text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6">
                    Welcome to Oxford School – Excellence in Education
                </h1>
<p className="mx-auto max-w-2xl text-lg sm:text-xl text-slate-400 mb-10 font-normal">
                    Shaping Future Leaders Through Quality Education. We provide a holistic approach to learning that nurtures intellectual curiosity and personal growth.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="inline-flex justify-center items-center px-6 py-3 rounded-md bg-amber-500 text-sm font-medium text-slate-950 hover:bg-amber-400 transition-colors w-full sm:w-auto" href="#admissions">
                        Enroll Now
                    </a>
<a className="inline-flex justify-center items-center px-6 py-3 rounded-md bg-white/5 text-sm font-medium text-white border border-white/10 hover:bg-white/10 transition-colors w-full sm:w-auto" href="#contact">
                        Book a Campus Visit
                    </a>
</div>
</div>
</section>

<section className="py-24 bg-white relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16 max-w-2xl mx-auto">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">A Foundation for the Future</h2>
<p className="text-base text-slate-500">Our comprehensive educational framework is designed to empower students with knowledge, character, and the skills needed to thrive in a dynamic world.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors group">
<div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon height="24" icon="solar:book-bookmark-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">Academic Excellence</h3>
<p className="text-sm text-slate-500 leading-relaxed">Rigorous curriculum designed to challenge students and foster a lifelong love for learning.</p>
</div>

<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors group">
<div className="h-10 w-10 rounded-lg bg-amber-50 flex items-center justify-center mb-6 text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-colors">
<iconify-icon height="24" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">Experienced Teachers</h3>
<p className="text-sm text-slate-500 leading-relaxed">Dedicated faculty members who are experts in their fields and passionate about mentoring.</p>
</div>

<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors group">
<div className="h-10 w-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-6 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
<iconify-icon height="24" icon="solar:buildings-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">Modern Facilities</h3>
<p className="text-sm text-slate-500 leading-relaxed">State-of-the-art infrastructure enabling interactive and practical learning experiences.</p>
</div>

<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors group">
<div className="h-10 w-10 rounded-lg bg-purple-50 flex items-center justify-center mb-6 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
<iconify-icon height="24" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">Safe Environment</h3>
<p className="text-sm text-slate-500 leading-relaxed">A secure, inclusive, and supportive campus where every student feels valued and protected.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">World-Class Facilities</h2>
<p className="text-base text-slate-500">Creating the perfect ecosystem for academic and extracurricular brilliance.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="relative rounded-2xl overflow-hidden aspect-[16/9] group">
<div className="absolute inset-0 bg-slate-200"></div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<h3 className="text-xl font-medium text-white mb-1">Smart Classrooms</h3>
<p className="text-sm text-slate-300">Technology-integrated learning spaces.</p>
</div>
</div>
<div className="relative rounded-2xl overflow-hidden aspect-[16/9] group">
<div className="absolute inset-0 bg-slate-300"></div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<h3 className="text-xl font-medium text-white mb-1">Central Library</h3>
<p className="text-sm text-slate-300">Over 50,000 resources and digital archives.</p>
</div>
</div>
<div className="relative rounded-2xl overflow-hidden aspect-[16/9] group">
<div className="absolute inset-0 bg-slate-400"></div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<h3 className="text-xl font-medium text-white mb-1">Science Labs</h3>
<p className="text-sm text-slate-300">Fully equipped physics, chemistry, and biology labs.</p>
</div>
</div>
<div className="relative rounded-2xl overflow-hidden aspect-[16/9] group">
<div className="absolute inset-0 bg-slate-200"></div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<h3 className="text-xl font-medium text-white mb-1">Sports Complex</h3>
<p className="text-sm text-slate-300">Indoor arenas and outdoor Olympic-size fields.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 text-center mb-16">Voices of Our Community</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col h-full">
<div className="flex gap-1 text-amber-500 mb-6">
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
</div>
<blockquote className="flex-grow text-sm text-slate-600 mb-8 leading-relaxed">
                            "The academic rigor paired with such a supportive faculty is truly exceptional. We've seen our daughter grow into a confident, inquisitive young adult since joining Oxford."
                        </blockquote>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-200 flex-shrink-0"></div>
<div>
<div className="text-sm font-medium text-slate-900">Sarah Jenkins</div>
<div className="text-xs text-slate-500">Parent, Grade 10 Student</div>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col h-full">
<div className="flex gap-1 text-amber-500 mb-6">
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
</div>
<blockquote className="flex-grow text-sm text-slate-600 mb-8 leading-relaxed">
                            "The opportunities here extend far beyond the classroom. The science labs and research initiatives allowed me to discover my passion for biotechnology early on."
                        </blockquote>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-200 flex-shrink-0"></div>
<div>
<div className="text-sm font-medium text-slate-900">David Chen</div>
<div className="text-xs text-slate-500">Alumni, Class of 2023</div>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col h-full">
<div className="flex gap-1 text-amber-500 mb-6">
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
</div>
<blockquote className="flex-grow text-sm text-slate-600 mb-8 leading-relaxed">
                            "Transferring to Oxford was the best decision for our son. The welcoming environment and focus on holistic development made the transition seamless and rewarding."
                        </blockquote>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-200 flex-shrink-0"></div>
<div>
<div className="text-sm font-medium text-slate-900">Michael &amp; Emma T.</div>
<div className="text-xs text-slate-500">Parents, Grade 8 Student</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Latest Updates</h2>
<a className="text-sm font-medium text-blue-600 hover:text-blue-700 hidden sm:block" href="#">View All News →</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<a className="group block" href="#">
<div className="aspect-[3/2] w-full rounded-xl bg-slate-200 mb-4 overflow-hidden">

</div>
<div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
<iconify-icon height="16" icon="solar:calendar-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span>Oct 15, 2023</span>
</div>
<h3 className="text-base font-medium text-slate-900 group-hover:text-blue-600 transition-colors mb-2">Annual Science Exhibition Highlights</h3>
<p className="text-sm text-slate-500 line-clamp-2">Students from grades 6 through 12 showcased innovative projects focusing on sustainable energy solutions.</p>
</a>
<a className="group block" href="#">
<div className="aspect-[3/2] w-full rounded-xl bg-slate-200 mb-4 overflow-hidden"></div>
<div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
<iconify-icon height="16" icon="solar:calendar-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span>Oct 08, 2023</span>
</div>
<h3 className="text-base font-medium text-slate-900 group-hover:text-blue-600 transition-colors mb-2">Regional Sports Meet Victory</h3>
<p className="text-sm text-slate-500 line-clamp-2">Our athletics team secured the first position in the inter-school regional championship held last weekend.</p>
</a>
<a className="group block" href="#">
<div className="aspect-[3/2] w-full rounded-xl bg-slate-200 mb-4 overflow-hidden"></div>
<div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
<iconify-icon height="16" icon="solar:calendar-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span>Sep 28, 2023</span>
</div>
<h3 className="text-base font-medium text-slate-900 group-hover:text-blue-600 transition-colors mb-2">Guest Lecture: Exploring Space</h3>
<p className="text-sm text-slate-500 line-clamp-2">Renowned astrophysicist Dr. Alan Carter addressed senior students on the future of space exploration.</p>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="mb-16">
<h2 className="text-xs font-semibold text-amber-500 uppercase tracking-widest mb-2">About Us</h2>
<h3 className="text-3xl font-semibold tracking-tight text-slate-900">A Legacy of Learning</h3>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
<div>
<p className="text-base text-slate-600 leading-relaxed mb-6">
                            Founded in 1985, Oxford School has established itself as a premier institution dedicated to academic brilliance and character formation. Our history is built on a foundation of traditional values integrated with progressive pedagogical approaches.
                        </p>
<p className="text-base text-slate-600 leading-relaxed">
                            Over the decades, we have evolved from a small community school to a comprehensive educational campus, continually upgrading our infrastructure and methodologies to meet global standards while remaining rooted in our core ethos.
                        </p>
</div>
<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
<div className="mb-8">
<h4 className="text-lg font-medium text-slate-900 mb-3 tracking-tight flex items-center gap-2">
<iconify-icon className="text-blue-600" height="20" icon="solar:eye-linear" width="20"></iconify-icon> Vision
                            </h4>
<p className="text-sm text-slate-600 leading-relaxed">To be a globally recognized institution that fosters intellectual curiosity, ethical leadership, and a passion for lifelong learning in every student.</p>
</div>
<div>
<h4 className="text-lg font-medium text-slate-900 mb-3 tracking-tight flex items-center gap-2">
<iconify-icon className="text-amber-500" height="20" icon="solar:target-linear" width="20"></iconify-icon> Mission
                            </h4>
<p className="text-sm text-slate-600 leading-relaxed">To provide a dynamic, inclusive, and challenging environment that equips students with the knowledge, skills, and values required to excel in a rapidly changing world.</p>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-24 bg-slate-900 rounded-3xl p-8 sm:p-12 overflow-hidden relative">
<div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
<div className="md:col-span-4 lg:col-span-3">
<div className="aspect-square rounded-2xl bg-slate-800 border border-slate-700"></div>
</div>
<div className="md:col-span-8 lg:col-span-9 relative z-10">
<iconify-icon className="text-slate-700 mb-4" height="48" icon="solar:quote-left-linear" width="48"></iconify-icon>
<p className="text-lg sm:text-xl text-slate-300 font-medium leading-relaxed mb-6">
                            "Education is not merely the accumulation of facts, but the preparation of life itself. At Oxford, we strive to ignite a spark in every mind, guiding them to discover their unique potential and shaping them into compassionate global citizens."
                        </p>
<div>
<h4 className="text-base font-semibold text-white">Dr. Eleanor Sterling</h4>
<p className="text-sm text-slate-400">Principal, Oxford School</p>
</div>
</div>
</div>

<div className="mb-24">
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-8">Leadership Team</h3>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">

<div className="text-center">
<div className="w-24 h-24 mx-auto rounded-full bg-slate-200 mb-4"></div>
<h4 className="text-sm font-medium text-slate-900">James Harrison</h4>
<p className="text-xs text-slate-500">Head of Academics</p>
</div>
<div className="text-center">
<div className="w-24 h-24 mx-auto rounded-full bg-slate-200 mb-4"></div>
<h4 className="text-sm font-medium text-slate-900">Maria Gonzalez</h4>
<p className="text-xs text-slate-500">Director of Admissions</p>
</div>
<div className="text-center">
<div className="w-24 h-24 mx-auto rounded-full bg-slate-200 mb-4"></div>
<h4 className="text-sm font-medium text-slate-900">Robert Vance</h4>
<p className="text-xs text-slate-500">Dean of Students</p>
</div>
<div className="text-center">
<div className="w-24 h-24 mx-auto rounded-full bg-slate-200 mb-4"></div>
<h4 className="text-sm font-medium text-slate-900">Dr. Amina El-Sayed</h4>
<p className="text-xs text-slate-500">Head of Sciences</p>
</div>
</div>
</div>

<div className="border-t border-slate-100 pt-16">
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-8 text-center">Recent Accolades</h3>
<div className="flex flex-wrap justify-center gap-4 sm:gap-8 opacity-70 grayscale">
<div className="text-sm font-medium flex items-center gap-2"><iconify-icon icon="solar:cup-star-linear" width="20"></iconify-icon> Excellence in STEM 2023</div>
<div className="text-sm font-medium flex items-center gap-2"><iconify-icon icon="solar:medal-star-circle-linear" width="20"></iconify-icon> Top 10 Regional Schools</div>
<div className="text-sm font-medium flex items-center gap-2"><iconify-icon icon="solar:diploma-verified-linear" width="20"></iconify-icon> Green Campus Award</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="admissions">

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
<div className="bg-blue-600 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
<div className="absolute top-0 right-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djIwaC0ydi0yMEgzNnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
<div className="relative z-10">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">Admissions Open 2024-2025</h2>
<p className="text-blue-100 mb-8 max-w-2xl mx-auto text-base">Join a community dedicated to excellence. Applications are now being accepted for all grades.</p>
<a className="inline-flex justify-center items-center px-8 py-3 rounded-md bg-white text-sm font-medium text-blue-600 hover:bg-slate-50 transition-colors" href="#contact">
                            Apply Now
                        </a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

<div className="lg:col-span-7">
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-8">Admission Process</h3>

<div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-200 text-slate-500 font-medium text-sm shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                    1
                                </div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-100 bg-white shadow-sm">
<h4 className="font-medium text-slate-900 mb-1">Online Application</h4>
<p className="text-sm text-slate-500">Fill out the registration form available on our portal and pay the initial application fee.</p>
</div>
</div>
<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-200 text-slate-500 font-medium text-sm shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                    2
                                </div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-100 bg-white shadow-sm">
<h4 className="font-medium text-slate-900 mb-1">Interaction / Assessment</h4>
<p className="text-sm text-slate-500">Applicants will be invited for a brief interaction or written assessment depending on the grade applied for.</p>
</div>
</div>
<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-200 text-slate-500 font-medium text-sm shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                    3
                                </div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-100 bg-white shadow-sm">
<h4 className="font-medium text-slate-900 mb-1">Document Verification</h4>
<p className="text-sm text-slate-500">Submission and verification of all required academic and personal documents.</p>
</div>
</div>
<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-200 text-slate-500 font-medium text-sm shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                    4
                                </div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-100 bg-white shadow-sm">
<h4 className="font-medium text-slate-900 mb-1">Enrollment &amp; Fees</h4>
<p className="text-sm text-slate-500">Finalize admission by paying the term fees and securing your child's seat.</p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 space-y-6">

<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
<h4 className="text-lg font-medium text-slate-900 mb-4 tracking-tight">Required Documents</h4>
<ul className="space-y-3 text-sm text-slate-600">
<li className="flex items-start gap-2">
<iconify-icon className="text-emerald-500 mt-0.5 shrink-0" icon="solar:check-circle-linear" width="18"></iconify-icon>
                                    Copy of Birth Certificate
                                </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-emerald-500 mt-0.5 shrink-0" icon="solar:check-circle-linear" width="18"></iconify-icon>
                                    Previous 2 years academic transcripts
                                </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-emerald-500 mt-0.5 shrink-0" icon="solar:check-circle-linear" width="18"></iconify-icon>
                                    Transfer Certificate (if applicable)
                                </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-emerald-500 mt-0.5 shrink-0" icon="solar:check-circle-linear" width="18"></iconify-icon>
                                    Passport size photographs (4)
                                </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-emerald-500 mt-0.5 shrink-0" icon="solar:check-circle-linear" width="18"></iconify-icon>
                                    Proof of residence
                                </li>
</ul>
<div className="mt-6 pt-6 border-t border-slate-100">
<a className="flex items-center justify-between w-full text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors group" href="#">
                                    Download Admission Form (PDF)
                                    <iconify-icon className="text-slate-400 group-hover:text-blue-600" icon="solar:download-square-linear" width="20"></iconify-icon>
</a>
</div>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
<h4 className="text-lg font-medium text-slate-900 mb-4 tracking-tight">Eligibility &amp; Fees</h4>
<div className="space-y-4 text-sm">
<div>
<span className="block text-slate-900 font-medium mb-1">Age Criteria:</span>
<span className="text-slate-500">Varies by grade. E.g., Grade 1 requires the child to be 6 years old by September 1st.</span>
</div>
<div className="pt-4 border-t border-slate-100">
<span className="block text-slate-900 font-medium mb-1">Fee Structure (Indicative):</span>
<div className="flex justify-between text-slate-500 mb-1">
<span>Primary (Grades 1-5)</span>
<span className="font-medium text-slate-900">Contact Admin</span>
</div>
<div className="flex justify-between text-slate-500">
<span>Secondary (Grades 6-10)</span>
<span className="font-medium text-slate-900">Contact Admin</span>
</div>
<p className="text-xs text-slate-400 mt-2">*Fees are subject to annual review. Detailed structure provided during counseling.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-amber-500 py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-950 mb-2">Ready to shape your child's future?</h2>
<p className="text-amber-950/80 text-sm">Schedule a campus tour and meet our admissions team today.</p>
</div>
<div className="flex-shrink-0">
<a className="inline-flex items-center px-6 py-3 rounded-md bg-slate-950 text-sm font-medium text-white hover:bg-slate-800 transition-colors" href="#contact">
                        Contact Us
                    </a>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-200" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-16 text-center max-w-2xl mx-auto">
<h2 className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-2">Get in Touch</h2>
<h3 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">We'd love to hear from you</h3>
<p className="text-base text-slate-500">Whether you have questions about admissions, our curriculum, or want to schedule a visit, our team is ready to help.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
<form action="#" className="space-y-6" method="POST">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="first-name">First name</label>
<input className="block w-full rounded-md border-0 py-2.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 bg-white outline-none" id="first-name" name="first-name" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="last-name">Last name</label>
<input className="block w-full rounded-md border-0 py-2.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 bg-white outline-none" id="last-name" name="last-name" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="email">Email</label>
<input className="block w-full rounded-md border-0 py-2.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 bg-white outline-none" id="email" name="email" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="phone">Phone number</label>
<input className="block w-full rounded-md border-0 py-2.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 bg-white outline-none" id="phone" name="phone" type="tel"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="subject">Subject</label>
<select className="custom-select block w-full rounded-md border-0 py-2.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 bg-white outline-none cursor-pointer" id="subject" name="subject">
<option>General Inquiry</option>
<option>Admissions</option>
<option>Schedule a Tour</option>
<option>Careers</option>
</select>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="message">Message</label>
<textarea className="block w-full rounded-md border-0 py-2.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 bg-white outline-none resize-none" id="message" name="message" rows="4"></textarea>
</div>

<div className="flex items-start">
<div className="flex h-6 items-center">
<input className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600 cursor-pointer" id="consent" name="consent" type="checkbox"/>
</div>
<div className="ml-3 text-xs leading-6">
<label className="text-slate-500 cursor-pointer" htmlFor="consent">I agree to the privacy policy and consent to being contacted regarding my inquiry.</label>
</div>
</div>
<div>
<button className="block w-full rounded-md bg-slate-900 px-3.5 py-2.5 text-center text-sm font-medium text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 transition-colors" type="submit">Send Message</button>
</div>
</form>
</div>

<div className="flex flex-col justify-between">
<div className="space-y-8 mb-12">
<div className="flex gap-4">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
<iconify-icon height="24" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 mb-1">Our Campus</h4>
<p className="text-sm text-slate-500">123 Education Boulevard<br/>Academic District<br/>Cityville, State 12345</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
<iconify-icon height="24" icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 mb-1">Contact</h4>
<p className="text-sm text-slate-500">Phone: +1 (555) 123-4567<br/>Email: admissions@oxfordschool.edu</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
<iconify-icon height="24" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 mb-1">Office Hours</h4>
<p className="text-sm text-slate-500">Monday - Friday: 8:00 AM - 4:00 PM<br/>Saturday: 9:00 AM - 1:00 PM (By Appt.)</p>
</div>
</div>
</div>

<div className="w-full h-64 bg-slate-100 rounded-2xl border border-slate-200 overflow-hidden relative flex items-center justify-center group">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0ibm9uZSIvPgo8cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIi8+CjxwYXRoIGQ9Ik0wIDIwaDQwTTEwIDBoMTAiIHN0cm9rZT0iI2U1ZTdlYiIgc3Ryb2tlLXdpZHRoPSIxIi8+Cjwvc3ZnPg==')] opacity-50"></div>
<div className="relative z-10 flex flex-col items-center text-slate-400 group-hover:text-slate-600 transition-colors">
<iconify-icon className="mb-2" height="32" icon="solar:map-bold" width="32"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-wider">Interactive Map Placeholder</span>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">

<div className="col-span-1 md:col-span-1">
<span className="text-xl font-semibold tracking-tighter text-white mb-6 block">OXFORD</span>
<p className="text-sm text-slate-500 leading-relaxed mb-6">
                        Excellence in education, shaping future leaders for a dynamic global society.
                    </p>
<div className="flex space-x-4">
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<iconify-icon height="24" icon="solar:link-circle-linear" width="24"></iconify-icon>
</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<iconify-icon height="24" icon="solar:camera-linear" width="24"></iconify-icon>
</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<iconify-icon height="24" icon="solar:letter-linear" width="24"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="text-sm font-medium text-white mb-4 tracking-tight">Quick Links</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#admissions">Admissions</a></li>
<li><a className="hover:text-white transition-colors" href="#">Academics</a></li>
<li><a className="hover:text-white transition-colors" href="#">Campus Life</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-medium text-white mb-4 tracking-tight">Resources</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Parent Portal</a></li>
<li><a className="hover:text-white transition-colors" href="#">Student Portal</a></li>
<li><a className="hover:text-white transition-colors" href="#">School Calendar</a></li>
<li><a className="hover:text-white transition-colors" href="#">Fee Payment</a></li>
<li><a className="hover:text-white transition-colors" href="#">News &amp; Events</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-medium text-white mb-4 tracking-tight">Contact Us</h4>
<ul className="space-y-3 text-sm">
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 shrink-0" icon="solar:map-point-linear" width="16"></iconify-icon>
<span>123 Education Blvd, Cityville</span>
</li>
<li className="flex items-center gap-2">
<iconify-icon className="shrink-0" icon="solar:phone-linear" width="16"></iconify-icon>
<span>+1 (555) 123-4567</span>
</li>
<li className="flex items-center gap-2">
<iconify-icon className="shrink-0" icon="solar:letter-linear" width="16"></iconify-icon>
<span>info@oxfordschool.edu</span>
</li>
</ul>
</div>
</div>

<div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
<p>© 2024 Oxford School. All rights reserved.</p>
<div className="flex space-x-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
