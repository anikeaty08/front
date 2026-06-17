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



        lucide.createIcons({
            attrs: {
                class: "stroke-[1.5]" 
            }
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
      

<nav className="w-full py-6 px-6 border-b border-slate-100/50">
<div className="max-w-7xl mx-auto flex justify-between items-center">
<div className="flex items-center">
<button className="p-2 hover:bg-slate-50 rounded-full transition-colors">
<i className="w-6 h-6 text-slate-900" data-lucide="menu"></i>
</button>
</div>
<div className="text-xl font-semibold tracking-tight text-slate-900">JobForge</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-slate-900 hover:text-slate-600" href="#">Login</a>
<div className="relative">
<i className="w-5 h-5 text-slate-900" data-lucide="user"></i>
<span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
</div>
</div>
</div>
</nav>

<section className="pt-16 pb-12 px-6">
<div className="max-w-4xl mx-auto text-center">
<h1 className="text-5xl md:text-7xl font-semibold text-slate-900 tracking-tight leading-tight mb-6">
                Employee Monitoring Infrastructure
                <span className="inline-flex items-center align-middle ml-2">
<img alt="User" className="w-10 h-10 md:w-14 md:h-14 rounded-full border-2 border-white object-cover -mr-3 relative z-10" src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
<img alt="User" className="w-10 h-10 md:w-14 md:h-14 rounded-full border-2 border-white object-cover -mr-3 relative z-20" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
<img alt="User" className="w-10 h-10 md:w-14 md:h-14 rounded-full border-2 border-white object-cover -mr-3 relative z-30" src="https://i.pravatar.cc/150?u=a048581f4e29026704d"/>
<div className="w-10 h-10 md:w-14 md:h-14 rounded-full border-2 border-white bg-slate-900 flex items-center justify-center relative z-40">
<i className="text-white w-5 h-5" data-lucide="arrow-up-right"></i>
</div>
</span>
</h1>
<p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
                Creating an effective employee monitoring infrastructure is pivotal in fostering productivity, accountability, and compliance within organizations.
            </p>
<div className="flex flex-wrap justify-center items-center gap-4 mb-12">
<button className="bg-slate-900 text-white px-6 py-3 rounded-full font-medium hover:bg-slate-800 transition text-sm">Our Case Studies</button>
<button className="bg-white text-slate-900 border border-slate-200 px-6 py-3 rounded-full font-medium hover:bg-slate-50 transition text-sm">Contact Us</button>
<div className="flex items-center gap-3 pl-4 border-l border-slate-200 ml-2 text-xs text-slate-400">
<span>Integrated with the<br/>tools you love</span>
<div className="flex gap-1">
<span className="w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center hover:border-slate-400 transition"><i className="w-3 h-3" data-lucide="dribbble"></i></span>
<span className="w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center hover:border-slate-400 transition"><i className="w-3 h-3" data-lucide="twitter"></i></span>
<span className="w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center hover:border-slate-400 transition"><i className="w-3 h-3" data-lucide="linkedin"></i></span>
</div>
</div>
</div>
</div>

<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">

<div className="col-span-1 md:col-span-4 bg-[#FFEED9] rounded-3xl p-8 flex flex-col justify-between h-64 relative overflow-hidden group">
<div>
<h3 className="text-4xl font-semibold text-slate-900 tracking-tight mb-1">5.3M+</h3>
<p className="text-xs font-medium text-slate-600 mb-4 uppercase tracking-wide">Active Owners and Employers</p>
<p className="text-sm font-medium text-slate-800 leading-snug">"Find Your Next Opportunity with confidence."</p>
</div>
<div className="absolute bottom-6 right-6 bg-white p-3 rounded-full shadow-sm">
<i className="w-5 h-5 text-slate-900" data-lucide="arrow-up-right"></i>
</div>
</div>

<div className="col-span-1 md:col-span-4 bg-[#FDE2F3] rounded-3xl p-8 h-64 relative">
<div className="flex justify-between items-start mb-4">
<span className="font-semibold text-slate-900">Saas</span>
<i className="w-5 h-5 text-slate-500 bg-white/50 p-1 rounded-full" data-lucide="settings-2"></i>
</div>
<div className="text-center mt-2">
<h3 className="text-4xl font-semibold text-slate-900 tracking-tight">50K+</h3>
<p className="text-sm text-slate-600">People got hired</p>
</div>
<div className="absolute bottom-6 left-0 right-0 px-12 flex justify-between items-end h-20">
<div className="w-3 bg-pink-300 rounded-full h-8"></div>
<div className="w-3 bg-pink-400 rounded-full h-12"></div>
<div className="w-3 bg-pink-500 rounded-full h-6"></div>
<div className="w-3 bg-pink-400 rounded-full h-16"></div>
<div className="w-3 bg-pink-300 rounded-full h-10"></div>
<div className="w-3 bg-pink-400 rounded-full h-14"></div>
</div>
</div>

<div className="col-span-1 md:col-span-4 bg-[#E0F0FF] rounded-3xl p-6 h-64 relative overflow-hidden">

<div className="absolute top-6 left-6 bg-white/60 border border-white/50 px-3 py-1 rounded-full text-xs backdrop-blur-sm">
<span className="font-semibold text-slate-900">85.5+</span> Million Users
                </div>
<div className="absolute top-16 right-4 bg-white/60 border border-white/50 px-3 py-1 rounded-full text-xs backdrop-blur-sm">
<span className="font-semibold text-slate-900">9.2B+</span> Job Posted
                </div>
<div className="absolute bottom-20 left-10 bg-white/80 border border-white/50 px-4 py-2 rounded-full text-sm backdrop-blur-sm shadow-sm z-10">
<span className="font-semibold text-slate-900">150.1B</span> Proposal Sent
                </div>
<div className="absolute bottom-6 right-12 bg-white/60 border border-white/50 px-3 py-1 rounded-full text-xs backdrop-blur-sm">
<span className="font-semibold text-slate-900">1280</span> Job Applied
                </div>

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-200/50 rounded-full blur-2xl"></div>
</div>
</div>

<div className="max-w-5xl mx-auto mt-16 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-40 grayscale">
<div className="flex items-center gap-2 font-bold text-xl"><i className="w-6 h-6" data-lucide="shopping-bag"></i> amazon</div>
<div className="flex items-center gap-2 font-bold text-xl"><i className="w-6 h-6" data-lucide="cloud"></i> airbnb</div>
<div className="flex items-center gap-2 font-bold text-xl"><i className="w-6 h-6" data-lucide="hash"></i> slack</div>
<div className="flex items-center gap-2 font-bold text-xl"><i className="w-6 h-6" data-lucide="music"></i> Spotify</div>
<div className="flex items-center gap-2 font-bold text-xl"><i className="w-6 h-6" data-lucide="figma"></i> Figma</div>
</div>
</section>

<section className="py-20 px-6">
<div className="max-w-4xl mx-auto text-center mb-12">
<h2 className="text-4xl font-semibold text-slate-900 tracking-tight mb-4">Recommended Jobs</h2>
<p className="text-lg text-slate-500">Effective job management is essential for organizations to streamline operations and maximize productivity.</p>
</div>
<div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">

<div className="w-8 md:w-16 bg-slate-50 rounded-lg"></div> 
<button className="bg-slate-900 text-white px-6 py-3 rounded-lg font-medium text-sm">3d illustrator</button>
<button className="bg-white border border-slate-200 text-slate-600 px-6 py-3 rounded-lg font-medium hover:border-slate-400 transition text-sm">Product Manager</button>
<div className="w-8 md:w-16 bg-slate-50 rounded-lg"></div>

<button className="bg-white border border-slate-200 text-slate-600 px-8 py-3 rounded-lg font-medium hover:border-slate-400 transition text-sm">Back-End</button>
<button className="bg-white border border-slate-200 text-slate-600 px-8 py-3 rounded-lg font-medium hover:border-slate-400 transition text-sm">Marketing</button>
<button className="bg-white border border-slate-200 text-slate-600 px-8 py-3 rounded-lg font-medium hover:border-slate-400 transition text-sm">UX Designer</button>

<div className="w-8 md:w-12 bg-slate-50 rounded-lg"></div>
<button className="bg-white border border-slate-200 text-slate-600 px-6 py-3 rounded-lg font-medium hover:border-slate-400 transition text-sm">Graphic Designer</button>
<button className="bg-slate-900 text-white px-8 py-3 rounded-lg font-medium text-sm">UI Designer</button>
<div className="w-8 md:w-24 bg-slate-50 rounded-lg"></div>
</div>
</section>

<section className="py-20 px-6 bg-slate-50/50 overflow-hidden">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<h2 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight max-w-md leading-tight">
                    Explore a Thousand Of New Job Everyday
                </h2>
<div className="relative mt-6 md:mt-0">
<i className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" data-lucide="search"></i>
<input className="pl-12 pr-6 py-3 rounded-full border border-slate-200 bg-white w-full md:w-80 text-sm outline-none focus:border-slate-400" placeholder="Search name or company name.." type="text"/>
</div>
</div>

<div className="flex justify-center md:justify-start gap-4 md:-ml-12 pt-10 pb-20 overflow-x-auto no-scrollbar pl-6">

<div className="flex-shrink-0 w-72 bg-pink-100 rounded-3xl p-6 transform rotate-[-6deg] translate-y-8 hover:rotate-0 hover:translate-y-0 transition duration-300 shadow-lg border border-pink-200/50">
<div className="flex justify-between items-start mb-8">
<div className="bg-white p-2 rounded-full"><i className="w-5 h-5" data-lucide="figma"></i></div>
</div>
<h3 className="text-2xl font-semibold text-slate-900 leading-tight mb-6">Senior UI/UX<br/>Designer</h3>
<div className="flex flex-wrap gap-2 mb-6">
<span className="bg-white px-3 py-1 rounded-full text-[10px] font-medium uppercase">Full Time</span>
<span className="bg-white px-3 py-1 rounded-full text-[10px] font-medium uppercase">Entry Level</span>
<span className="bg-white px-3 py-1 rounded-full text-[10px] font-medium uppercase">Distant</span>
</div>
<div className="flex justify-between items-end">
<p className="text-xs text-slate-500">Find the right career opportunity</p>
</div>
</div>

<div className="flex-shrink-0 w-72 bg-blue-100 rounded-3xl p-6 transform rotate-[-3deg] hover:rotate-0 transition duration-300 shadow-lg border border-blue-200/50 z-10">
<div className="flex justify-between items-start mb-8">
<div className="bg-white p-2 rounded-full"><i className="w-5 h-5" data-lucide="layers"></i></div>
<div className="bg-white p-1 rounded-md"><i className="w-4 h-4 text-slate-400" data-lucide="bookmark"></i></div>
</div>
<h3 className="text-2xl font-semibold text-slate-900 leading-tight mb-6">Junior UI/UX<br/>Designer</h3>
<div className="flex flex-wrap gap-2 mb-6">
<span className="bg-white px-3 py-1 rounded-full text-[10px] font-medium uppercase">Full Time</span>
<span className="bg-white px-3 py-1 rounded-full text-[10px] font-medium uppercase">Entry Level</span>
<span className="bg-white px-3 py-1 rounded-full text-[10px] font-medium uppercase">Distant</span>
</div>
<div className="flex justify-between items-center mt-8 border-t border-blue-200 pt-4">
<div>
<p className="text-xs text-slate-500">Find the right career</p>
<p className="font-semibold text-slate-900">$150/hr</p>
</div>
<div className="flex items-center gap-1 text-xs">
<i className="w-3 h-3" data-lucide="map-pin"></i> New York, NY
                         </div>
</div>
</div>

<div className="flex-shrink-0 w-72 bg-[#FFEED9] rounded-3xl p-6 transform rotate-[3deg] hover:rotate-0 transition duration-300 shadow-lg border border-orange-200/50 z-20">
<div className="flex justify-between items-start mb-8">
<div className="bg-white p-2 rounded-full"><i className="w-5 h-5" data-lucide="video"></i></div>
<div className="bg-white p-1 rounded-md"><i className="w-4 h-4 text-slate-400" data-lucide="bookmark"></i></div>
</div>
<h3 className="text-2xl font-semibold text-slate-900 leading-tight mb-6">Senior Motion<br/>Designer</h3>
<div className="flex flex-wrap gap-2 mb-6">
<span className="bg-white px-3 py-1 rounded-full text-[10px] font-medium uppercase">Full Time</span>
<span className="bg-white px-3 py-1 rounded-full text-[10px] font-medium uppercase">Entry Level</span>
</div>
<div className="flex justify-between items-center mt-8 border-t border-orange-200 pt-4">
<p className="font-semibold text-slate-900">$260/hr</p>
<div className="bg-slate-900 text-white rounded-full p-2">
<i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>

<div className="flex-shrink-0 w-72 bg-[#D4EFA8] rounded-3xl p-6 transform rotate-[6deg] translate-y-6 hover:rotate-0 hover:translate-y-0 transition duration-300 shadow-lg border border-green-200/50">
<div className="flex justify-between items-start mb-8">
<div className="bg-white p-2 rounded-full"><i className="w-5 h-5" data-lucide="pen-tool"></i></div>
<div className="bg-white p-1 rounded-md"><i className="w-4 h-4 text-slate-400" data-lucide="bookmark"></i></div>
</div>
<h3 className="text-2xl font-semibold text-slate-900 leading-tight mb-6">Senior Graphic<br/>Designer</h3>
<div className="flex flex-wrap gap-2 mb-6">
<span className="bg-white px-3 py-1 rounded-full text-[10px] font-medium uppercase">Full Time</span>
<span className="bg-white px-3 py-1 rounded-full text-[10px] font-medium uppercase">Entry Level</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 max-w-7xl mx-auto">
<h2 className="text-4xl font-semibold text-slate-900 tracking-tight mb-12">There Are Postings Here<br/>For you!</h2>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">

<div className="bg-[#D4EFA8] rounded-3xl p-8 flex flex-col justify-between min-h-[300px]">
<h3 className="text-2xl font-semibold text-slate-900 leading-snug">Oversee,<br/>Develop, and<br/>Nurture<br/>Employee<br/>Success!</h3>
<div className="flex items-center gap-4 mt-6">
<button className="bg-white text-slate-900 px-6 py-2 rounded-full text-sm font-medium">Read More</button>
<div className="bg-white rounded-full p-2">
<i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>

<div className="h-full rounded-3xl overflow-hidden relative min-h-[300px]">
<img alt="Team" className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>

<div className="flex flex-col gap-6">
<div className="bg-slate-50 rounded-3xl p-6 flex items-center justify-center h-48">

<svg className="opacity-40" fill="none" height="100" viewbox="0 0 200 100" width="200" xmlns="http://www.w3.org/2000/svg">
<pattern height="10" id="dots" patternunits="userSpaceOnUse" width="10" x="0" y="0">
<circle cx="2" cy="2" fill="#94a3b8" r="1.5"></circle>
</pattern>
<path d="M10,40 Q50,10 90,40 T170,40" fill="url(#dots)" stroke="none"></path>
<circle className="animate-pulse" cx="60" cy="35" fill="#6366f1" r="4"></circle>
</svg>
</div>
<div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">An improved version of a typical job seeker, excelling in every aspect</h3>
<p className="text-xs text-slate-400 leading-relaxed">In the realm of job seeking, being regular is a commendable trait, yet striving for continuous improvement in every aspect sets one apart.</p>
</div>
</div>
</div>

<div className="border-t border-slate-200">
<div className="flex flex-col md:flex-row items-center py-6 border-b border-slate-100 hover:bg-slate-50 transition px-4">
<span className="text-sm font-semibold text-slate-900 w-12">01</span>
<span className="text-lg font-semibold text-slate-900 w-64">Social Assistant</span>
<span className="text-sm text-slate-500 flex-1 text-right md:text-left mt-2 md:mt-0">Effective job management is essential for organizations to streamline operations and maximize productivity.</span>
</div>
<div className="flex flex-col md:flex-row items-center py-6 border-b border-slate-100 hover:bg-slate-50 transition px-4">
<span className="text-sm font-semibold text-slate-900 w-12">02</span>
<span className="text-lg font-semibold text-slate-900 w-64">Office Assistant</span>
<span className="text-sm text-slate-500 flex-1 text-right md:text-left mt-2 md:mt-0">Social Assistants offer emotional and psychological support, fostering resilience and empowering individuals to overcome obstacles.</span>
</div>
<div className="flex flex-col md:flex-row items-center py-6 border-b border-slate-100 hover:bg-slate-50 transition px-4">
<span className="text-sm font-semibold text-slate-900 w-12">03</span>
<span className="text-lg font-semibold text-slate-900 w-64">Media Assistant</span>
<span className="text-sm text-slate-500 flex-1 text-right md:text-left mt-2 md:mt-0">Social Assistants advocate for social justice and equality, striving to create inclusive environments where everyone has access.</span>
</div>
</div>
</section>

<section className="py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="bg-slate-50 rounded-3xl p-8">
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight mb-2">Average Salary for UI/UX<br/>Designers in the United<br/>States</h3>
<p className="text-xs text-slate-500 mb-1">Payment Verifies $</p>
<p className="text-xs font-semibold text-slate-900 mb-8">10.000+ Spent - 2h Ago</p>
<div className="flex items-end justify-between h-40 gap-2 md:gap-4 px-4 mb-6">
<div className="w-full bg-violet-200 rounded-t-md h-[30%]"></div>
<div className="w-full bg-violet-200 rounded-t-md h-[40%]"></div>
<div className="w-full bg-violet-300 rounded-t-md h-[50%]"></div>
<div className="w-full bg-violet-200 rounded-t-md h-[35%]"></div>
<div className="w-full bg-violet-400 rounded-t-md h-[70%]"></div>
<div className="w-full bg-violet-200 rounded-t-md h-[60%]"></div>
<div className="w-full bg-violet-200 rounded-t-md h-[45%]"></div>
<div className="w-full bg-violet-500 rounded-t-md h-[90%]"></div>
</div>
<div className="flex justify-center gap-2">
<span className="text-[10px] bg-white border border-slate-200 px-3 py-1 rounded-full">Application</span>
<span className="text-[10px] bg-white border border-slate-200 px-3 py-1 rounded-full">Job Type</span>
<span className="text-[10px] bg-white border border-slate-200 px-3 py-1 rounded-full">Salary</span>
</div>
</div>

<div className="flex flex-col justify-center">
<h2 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-6">Let's Discover Your Job Opportunity</h2>
<p className="text-sm text-slate-500 mb-8 leading-relaxed">Start by checking about discovering opportunities that align with your passions, resilience and empowering individuals to overcome obstacles.</p>
<button className="bg-slate-900 text-white px-8 py-3 rounded-lg font-medium text-sm w-fit mb-12">Customize &amp; Apply</button>
<div className="grid grid-cols-3 gap-8">
<div>
<h4 className="text-3xl font-semibold text-slate-900 tracking-tight">2.5M</h4>
<p className="text-xs text-slate-500 mt-1">Users Satisfaction</p>
</div>
<div>
<h4 className="text-3xl font-semibold text-slate-900 tracking-tight">15k</h4>
<p className="text-xs text-slate-500 mt-1">Official Subscribers</p>
</div>
<div>
<h4 className="text-3xl font-semibold text-slate-900 tracking-tight">3k+</h4>
<p className="text-xs text-slate-500 mt-1">Viewers</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-slate-50/50">
<div className="max-w-4xl mx-auto text-center bg-slate-50 rounded-3xl p-12 shadow-sm border border-slate-100">
<h2 className="text-4xl font-semibold text-slate-900 tracking-tight mb-2">Register your Account</h2>
<p className="text-xs text-slate-500 mb-10">Begin your journey towards seamless access by registering your account</p>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
<div className="bg-pink-100 text-slate-900 text-sm font-medium py-3 px-4 rounded-lg">First Name</div>
<div className="bg-blue-100 text-slate-900 text-sm font-medium py-3 px-4 rounded-lg">Last Name</div>
<div className="bg-[#FFEED9] text-slate-900 text-sm font-medium py-3 px-4 rounded-lg">Your Email</div>
<div className="bg-[#D4EFA8] text-slate-900 text-sm font-medium py-3 px-4 rounded-lg">Password</div>
</div>
<button className="bg-slate-900 text-white px-10 py-3 rounded-lg font-medium text-sm">Submit Now</button>
</div>
</section>

<section className="py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-12 text-center lg:text-left">Reviews from Successful<br/>Employee</h2>
<div className="flex gap-1 text-yellow-400 mb-6 justify-center lg:justify-start">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-sm text-slate-500 leading-loose mb-8 text-center lg:text-left">
                They provide a holistic perspective on performance, highlighting achievements and recognizing contributions while also offering constructive criticism to spur development. Embracing feedback from successful employees fosters a culture of continuous learning and improvement within organizations.
            </p>
<div className="mb-8 text-center lg:text-left">
<h4 className="text-lg font-semibold text-slate-900">Madantha Danase</h4>
<p className="text-xs text-slate-500">UI/UX Designer</p>
</div>
<div className="flex gap-4 justify-center lg:justify-start">
<button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition text-slate-400"><i className="w-5 h-5" data-lucide="arrow-left"></i></button>
<button className="w-12 h-12 rounded-full border border-slate-900 flex items-center justify-center hover:bg-slate-800 transition text-slate-900"><i className="w-5 h-5" data-lucide="arrow-right"></i></button>
</div>
</div>
<div className="relative flex justify-center">
<div className="absolute inset-0 bg-pink-100 rounded-full transform scale-90 translate-y-4 blur-2xl opacity-50"></div>
<div className="bg-pink-100 rounded-t-[10rem] pt-10 px-10 pb-0 overflow-hidden relative max-w-md">
<img alt="Employee" className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>
</section>

<footer className="bg-black text-white pt-20 pb-8 px-6 overflow-hidden relative">

<div className="max-w-7xl mx-auto relative h-40 mb-10 hidden md:block">
<div className="absolute left-0 top-0 transform -rotate-6">
<span className="bg-pink-100 text-slate-900 px-6 py-3 rounded-lg font-semibold text-sm shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">3d illustrator</span>
</div>
<div className="absolute left-[40%] top-8">
<span className="text-xl font-bold italic tracking-tight">JobForge</span>
</div>
<div className="absolute right-0 top-4 transform rotate-6">
<span className="bg-[#D4EFA8] text-slate-900 px-6 py-3 rounded-lg font-semibold text-sm shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">UI Designer</span>
</div>
</div>
<div className="max-w-5xl mx-auto text-center relative z-10 mb-20">
<h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-2">LET'S DISCOVER</h2>
<h2 className="text-5xl md:text-8xl font-bold tracking-tighter">YOUR JOB</h2>
</div>

<div className="flex flex-wrap justify-center gap-4 mb-20 md:absolute md:bottom-32 md:w-full md:left-0 md:justify-around pointer-events-none">
<div className="transform md:-rotate-3 md:translate-y-10">
<span className="bg-[#FFEED9] text-slate-900 px-6 py-3 rounded-lg font-semibold text-sm shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] block w-max">Graphic Designer</span>
</div>
<div className="transform md:rotate-2 md:translate-y-4">
<span className="bg-blue-100 text-slate-900 px-6 py-3 rounded-lg font-semibold text-sm shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] block w-max">Marketing</span>
</div>
<div className="transform md:-rotate-2 md:translate-y-8">
<span className="bg-[#FFEED9] text-slate-900 px-6 py-3 rounded-lg font-semibold text-sm shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] block w-max">UX Designer</span>
</div>
</div>
<div className="max-w-7xl mx-auto border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
<p>Copyright © 2024 JobForge | design By Sahil Dobariya</p>
<div className="flex gap-2">
<a className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center hover:bg-slate-800" href="#"><i className="w-3 h-3" data-lucide="dribbble"></i></a>
<a className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center hover:bg-slate-800" href="#"><i className="w-3 h-3" data-lucide="twitter"></i></a>
<a className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center hover:bg-slate-800" href="#"><i className="w-3 h-3" data-lucide="github"></i></a>
<a className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center hover:bg-slate-800" href="#"><i className="w-3 h-3" data-lucide="linkedin"></i></a>
<a className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center hover:bg-slate-800" href="#"><i className="w-3 h-3" data-lucide="globe"></i></a>
</div>
</div>
</footer>


    </>
  );
}
