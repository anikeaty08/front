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
      

<div className="spline-container fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><iframe frameborder="0" height="100%" id="aura-spline" src="https://layout-must-look-4.aura.build" width="100%"></iframe></div>

<div className="bg-slate-900 text-white py-1.5 px-4 text-xs font-medium border-b border-slate-700">
<div className="max-w-7xl mx-auto flex justify-between items-center">
<div className="flex gap-4">
<span className="flex items-center gap-1 text-sky-400">
<svg className="iconify iconify--lucide" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3l-8 3v7c0 6 8 10 8 10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
                    AI Shield Active
                </span>
<span className="hidden md:inline text-slate-400">Last Updated: <span className="text-white">Just Now</span></span>
</div>
<div className="flex gap-4 items-center">
<a className="hover:text-sky-300 flex items-center gap-1" href="#">
<svg className="iconify iconify--lucide" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" x2="20" y1="8" y2="14"></line><line x1="23" x2="17" y1="11" y2="11"></line></svg>
                    Register
                </a>
<a className="hover:text-sky-300 flex items-center gap-1" href="#">
<svg className="iconify iconify--lucide" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5l-5-5M15 12H3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
                    Login
                </a>
</div>
</div>
</div>

<header className="bg-sky-600 text-white text-center py-5 border-b-4 border-slate-800 shadow-sm relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
<svg className="h-full w-full" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0 100 C 20 0 50 0 100 100 Z" fill="white"></path>
</svg>
</div>
<div className="max-w-7xl mx-auto px-4 relative z-10">
<h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter drop-shadow-md flex justify-center items-center gap-2">
                ANIKZZZ<span className="text-yellow-300 text-6xl">.COM</span>
</h1>
<p className="text-sm md:text-base font-medium mt-1 text-sky-100 tracking-wide uppercase">India's Fastest Job Portal &amp; Social News Network</p>

<div className="max-w-xl mx-auto mt-4 relative">
<input className="w-full py-2 px-4 pr-10 rounded-full text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-lg" placeholder="Ask AI: 'Show me SSC CGL Syllabus' or 'Latest UP Jobs'..." type="text"/>
<button className="absolute right-2 top-1/2 -translate-y-1/2 text-sky-600">
<svg className="iconify iconify--lucide" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" fill="none" r="8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></circle><path d="m21 21l-4.3-4.3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</button>
</div>
</div>
</header>

<nav className="bg-slate-900 text-white border-b border-slate-700 sticky top-0 z-50 shadow-md">
<div className="max-w-7xl mx-auto px-2">
<div className="flex items-center justify-between md:justify-center overflow-x-auto no-scrollbar">
<div className="flex text-xs md:text-sm font-bold whitespace-nowrap">
<a className="px-3 py-2.5 hover:bg-sky-500 hover:text-white transition-colors uppercase flex gap-1 items-center" href="#">
<svg className="iconify iconify--lucide" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m3 9l9-7l9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><polyline fill="none" points="9 22 9 12 15 12 15 22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></polyline></svg> Home
                    </a>
<a className="px-3 py-2.5 hover:bg-sky-500 hover:text-white transition-colors uppercase" href="#">Latest Jobs</a>
<a className="px-3 py-2.5 hover:bg-sky-500 hover:text-white transition-colors uppercase" href="#">Results</a>
<a className="px-3 py-2.5 hover:bg-sky-500 hover:text-white transition-colors uppercase" href="#">Admit Card</a>
<a className="px-3 py-2.5 hover:bg-sky-500 hover:text-white transition-colors uppercase" href="#">Answer Key</a>
<a className="px-3 py-2.5 hover:bg-sky-500 hover:text-white transition-colors uppercase" href="#">Syllabus</a>
<a className="px-3 py-2.5 hover:bg-sky-500 hover:text-white transition-colors uppercase text-yellow-400" href="#">User Posts</a>
</div>
</div>
</div>
</nav>

<div className="bg-yellow-50 border-b border-slate-300 py-2 overflow-hidden shadow-inner">
<div className="marquee-container max-w-7xl mx-auto">
<div className="marquee-content text-sm font-bold text-slate-800 flex gap-12 items-center">
<span className="flex items-center gap-2 text-rose-600">
<span className="bg-rose-600 text-white text-[10px] px-1 rounded uppercase">Live</span>
                    SSC CGL 2024 Notification Out Apply Online
                </span>
<span className="flex items-center gap-2 text-sky-700">
<span className="bg-sky-600 text-white text-[10px] px-1 rounded uppercase">Update</span>
                    UP Police Constable Result Declared Check Now
                </span>
<span className="flex items-center gap-2 text-green-700">
<span className="bg-green-600 text-white text-[10px] px-1 rounded uppercase">New</span>
                    Railway Group D Fee Refund Link Active
                </span>
<span className="flex items-center gap-2 text-slate-900">
<span className="bg-slate-800 text-white text-[10px] px-1 rounded uppercase">AI Alert</span>
                    Market Trending: Tech Jobs up by 15% this week
                </span>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-4 mt-4">
<div className="bg-white border-2 border-dashed border-sky-300 p-3 rounded-lg flex flex-wrap gap-4 items-center justify-between shadow-sm">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-slate-800 text-white flex items-center justify-center font-bold text-lg rounded-full">G</div>
<div>
<h3 className="font-bold text-sm uppercase text-slate-700">Guest User</h3>
<p className="text-xs text-slate-500">Earn money by posting news &amp; ads</p>
</div>
</div>
<div className="flex gap-2">
<button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-1.5 text-xs font-bold uppercase rounded shadow flex items-center gap-1 transition-all">
<svg className="iconify iconify--lucide" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14m-7-7h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Post News
                </button>
<button className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-1.5 text-xs font-bold uppercase rounded shadow flex items-center gap-1 transition-all">
<svg className="iconify iconify--lucide" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" fill="none" r="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle><path d="M12 6v6l4 2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Post Job
                </button>
<button className="bg-slate-700 hover:bg-slate-800 text-white px-4 py-1.5 text-xs font-bold uppercase rounded shadow flex items-center gap-1 transition-all">
<svg className="iconify iconify--lucide" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" fill="none" r="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle><path d="M8 12h8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Place Ad
                </button>
</div>
</div>
</div>

<main className="max-w-7xl mx-auto px-4 py-6">

<div className="text-center mb-8 bg-sky-50 border border-sky-200 p-4 rounded-lg">
<h2 className="text-2xl md:text-4xl font-black text-rose-600 uppercase underline decoration-4 decoration-slate-900 underline-offset-4 tracking-tight cursor-pointer hover:text-rose-700">
                SSC CGL 2024 Online Form (Apply Now)
            </h2>
<div className="flex justify-center flex-wrap gap-4 mt-3 text-sm font-bold">
<a className="text-sky-700 hover:text-rose-600 hover:underline" href="#">Download Notification</a>
<span className="text-slate-300">|</span>
<a className="text-sky-700 hover:text-rose-600 hover:underline" href="#">Syllabus PDF</a>
<span className="text-slate-300">|</span>
<a className="text-sky-700 hover:text-rose-600 hover:underline" href="#">Check Eligibility</a>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-5">

<div className="sarkari-box shadow-sm">
<h3 className="sarkari-header bg-sky-700">Result</h3>
<ul className="link-list px-1 py-2">
<li><div className="bullet"></div><a href="#">UPSC CSE Mains 2023 Result Declared</a></li>
<li><div className="bullet"></div><a href="#">Bihar STET 2024 Phase I Result</a></li>
<li><div className="bullet"></div><a href="#">SSC CGL 2023 Final Result with Marks</a></li>
<li><div className="bullet"></div><a href="#">MP Police Constable Final Selection List</a></li>
<li><div className="bullet"></div><a href="#">RRB NTPC Level 5, 3, 2 Final Result</a></li>
<li><div className="bullet"></div><a href="#">IGNOU June 2024 TEE Result Updated</a></li>
<li><div className="bullet"></div><a href="#">India Post GDS 3rd Merit List 2024</a></li>
<li><div className="bullet"></div><a href="#">NTA NEET UG 2024 Re-Exam Result</a></li>
<li className="justify-center pt-3 pb-1"><a className="bg-slate-100 text-slate-800 text-xs font-bold uppercase border border-slate-300 px-4 py-1 hover:bg-slate-200 rounded" href="#">View More Results</a></li>
</ul>
</div>

<div className="sarkari-box shadow-sm">
<h3 className="sarkari-header bg-rose-600">Admit Card</h3>
<ul className="link-list px-1 py-2">
<li><div className="bullet"></div><a href="#">SSC CHSL Tier 1 Admit Card 2024</a></li>
<li><div className="bullet"></div><a href="#">IBPS Clerk XIV Prelims Admit Card</a></li>
<li><div className="bullet"></div><a href="#">RPF Constable / SI Exam Date City</a></li>
<li><div className="bullet"></div><a href="#">CTET July 2024 Pre Admit Card / City</a></li>
<li><div className="bullet"></div><a href="#">UP Polytechnic JEECUP Admit Card</a></li>
<li><div className="bullet"></div><a href="#">Bihar Vidhan Parishad Sachivalaya Admit Card</a></li>
<li><div className="bullet"></div><a href="#">Rajasthan PTET 2024 Hall Ticket</a></li>
<li><div className="bullet"></div><a href="#">UPSC CAPF AC 2024 Admit Card</a></li>
<li className="justify-center pt-3 pb-1"><a className="bg-slate-100 text-slate-800 text-xs font-bold uppercase border border-slate-300 px-4 py-1 hover:bg-slate-200 rounded" href="#">View More Admit Cards</a></li>
</ul>
</div>

<div className="sarkari-box shadow-sm">
<h3 className="sarkari-header bg-slate-800">Latest Jobs</h3>
<ul className="link-list px-1 py-2">
<li><div className="bullet bg-green-600"></div><a href="#">SSC CGL 2024 Online Form <span className="text-rose-600 font-bold text-[10px] blink ml-1">NEW</span></a></li>
<li><div className="bullet"></div><a href="#">Navy SSR / MR 02/2024 Batch Online Form</a></li>
<li><div className="bullet"></div><a href="#">Airforce Agniveer Vayu 01/2025 Apply</a></li>
<li><div className="bullet"></div><a href="#">Bihar Health Dept Senior Resident Apply</a></li>
<li><div className="bullet"></div><a href="#">Uttarakhand UKPSC Lecturer Online Form</a></li>
<li><div className="bullet"></div><a href="#">IDBI Bank Executive Online Form 2024</a></li>
<li><div className="bullet"></div><a href="#">UP Panchayat Sahayak Recruitment 2024</a></li>
<li><div className="bullet"></div><a href="#">IOCL Apprentice Non-Executive Apply</a></li>
<li className="justify-center pt-3 pb-1"><a className="bg-slate-100 text-slate-800 text-xs font-bold uppercase border border-slate-300 px-4 py-1 hover:bg-slate-200 rounded" href="#">View More Jobs</a></li>
</ul>
</div>
</div>

<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">

<div className="sarkari-box">
<h3 className="sarkari-header bg-orange-600">Answer Key</h3>
<ul className="link-list px-2 py-2">
<li><div className="bullet"></div><a href="#">NTA NEET UG 2024 Official Answer Key</a></li>
<li><div className="bullet"></div><a href="#">SSC Selection Post Phase XII Answer Key</a></li>
<li><div className="bullet"></div><a href="#">UPPSC RO / ARO 2023 Answer Key</a></li>
<li><div className="bullet"></div><a href="#">UPSC Prelims 2024 GS Paper Answer Key</a></li>
</ul>
</div>

<div className="sarkari-box">
<h3 className="sarkari-header bg-emerald-700">Syllabus</h3>
<ul className="link-list px-2 py-2">
<li><div className="bullet"></div><a href="#">SSC CGL 2024 Syllabus &amp; Exam Pattern</a></li>
<li><div className="bullet"></div><a href="#">UP Police Constable Syllabus 2024</a></li>
<li><div className="bullet"></div><a href="#">Railway RPF SI Syllabus &amp; Physical Details</a></li>
<li><div className="bullet"></div><a href="#">UGC NET June 2024 Syllabus Subject Wise</a></li>
</ul>
</div>
</div>

<h3 className="font-oswald text-lg font-bold uppercase mt-8 mb-4 border-l-4 border-sky-600 pl-3 text-slate-800">Important Certificates &amp; Links</h3>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 dense-grid">
<a href="#">UP Scholarship</a>
<a href="#">Aadhar Card</a>
<a href="#">Pan Card</a>
<a href="#">Ration Card</a>
<a href="#">CCC Online</a>
<a href="#">O Level</a>
<a href="#">Ayushman Card</a>
<a href="#">Police Verification</a>
<a href="#">Income Cert</a>
<a href="#">Caste Cert</a>
<a href="#">Domicile Cert</a>
<a href="#">Voter ID</a>
</div>
</main>

<section className="bg-slate-100 border-t border-slate-300 mt-8 py-10">
<div className="max-w-7xl mx-auto px-4">
<div className="flex justify-between items-center mb-6">
<h2 className="font-oswald text-2xl font-bold uppercase text-slate-800 flex items-center gap-2">
<svg className="iconify text-sky-600 iconify--lucide" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                    Anikzzz Community Feed
                </h2>
<div className="flex gap-2">
<span className="text-[10px] font-bold uppercase text-slate-400 self-center hidden md:block">Filter by:</span>
<a className="text-xs font-bold uppercase bg-white border border-slate-300 px-3 py-1 text-sky-700 hover:bg-sky-600 hover:text-white rounded transition-colors" href="#">Trending</a>
<a className="text-xs font-bold uppercase bg-white border border-slate-300 px-3 py-1 text-sky-700 hover:bg-sky-600 hover:text-white rounded transition-colors" href="#">Local News</a>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">

<div className="md:col-span-3 space-y-5">

<div className="bg-white border border-slate-200 rounded p-4 shadow-sm relative group hover:border-sky-300 transition-colors">
<div className="flex items-center justify-between mb-2 pb-2 border-b border-slate-50">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs font-bold border border-sky-200">RK</div>
<div>
<div className="text-xs font-bold text-slate-700 flex items-center gap-1">Ravi Kumar <svg className="text-blue-500" height="10" viewbox="0 0 24 24" width="10"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z" fill="currentColor"></path></svg></div>
<div className="text-[10px] text-slate-400">Verified Educator • 2h ago</div>
</div>
</div>
<span className="bg-sky-50 text-sky-700 text-[10px] px-2 py-0.5 font-bold uppercase rounded border border-sky-100">Study Material</span>
</div>
<h4 className="font-bold text-lg text-slate-800 leading-snug group-hover:text-sky-600 cursor-pointer">
                            Complete Formula Sheet for SSC CGL Maths (Free PDF)
                        </h4>
<p className="text-sm text-slate-500 mt-2 line-clamp-2">
                            Compiled all geometry and algebra formulas for CGL Mains 2024. Direct download link in the comments below.
                        </p>
<div className="flex items-center gap-6 mt-3 pt-3 border-t border-slate-50">
<button className="flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-rose-600"><svg className="iconify iconify--lucide" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M7 10v12m8-16.12L14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 245 Likes</button>
<button className="flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-sky-600"><svg className="iconify iconify--lucide" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 42 Comments</button>
<span className="ml-auto text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded flex items-center gap-1"><svg className="iconify iconify--lucide" height="10" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="m21 12l-4-4l-4 4M21 12H9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> AI Checked</span>
</div>
</div>

<div className="bg-white border border-slate-200 rounded p-4 shadow-sm relative group">
<div className="flex items-center justify-between mb-2 pb-2 border-b border-slate-50">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-rose-600 text-white rounded-full flex items-center justify-center text-xs font-bold">AZ</div>
<div>
<div className="text-xs font-bold text-slate-700">Anikzzz Bot</div>
<div className="text-[10px] text-slate-400">Automated News • 10m ago</div>
</div>
</div>
<span className="bg-rose-50 text-rose-700 text-[10px] px-2 py-0.5 font-bold uppercase rounded border border-rose-100">Breaking News</span>
</div>
<h4 className="font-bold text-lg text-slate-800 leading-snug group-hover:text-rose-600 cursor-pointer">
                            Weather Alert: Heavy Rainfall warning in 4 districts of UP
                        </h4>
<div className="flex items-center gap-6 mt-3 pt-3 border-t border-slate-50">
<button className="flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-rose-600"><svg className="iconify iconify--lucide" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M7 10v12m8-16.12L14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 1.2K Likes</button>
<button className="flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-sky-600"><svg className="iconify iconify--lucide" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m19 21l-7-4l-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Save</button>
</div>
</div>
</div>

<div className="md:col-span-1 space-y-4">

<div className="bg-white border border-slate-300 h-60 flex flex-col items-center justify-center text-center p-4 rounded shadow-sm relative overflow-hidden">
<div className="absolute top-0 right-0 bg-yellow-400 text-[9px] px-1 font-bold text-slate-900">SPONSORED</div>
<div className="w-12 h-12 bg-sky-100 rounded-full mb-2 flex items-center justify-center text-sky-600"><svg className="iconify iconify--lucide" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><line x1="3" x2="21" y1="6" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
<h4 className="font-bold text-slate-700 text-sm">Best Test Series 2024</h4>
<p className="text-xs text-slate-500 mb-3 mt-1">90% off on all Govt Exam Mock Tests.</p>
<button className="bg-sky-600 hover:bg-sky-700 text-white text-xs px-4 py-1.5 font-bold rounded">Buy Now</button>
</div>

<div className="border border-slate-300 bg-white rounded overflow-hidden">
<h3 className="bg-slate-800 text-white text-xs font-bold uppercase p-2 text-center">Trending Topics</h3>
<div className="flex flex-col text-xs font-medium">
<a className="p-2 border-b hover:bg-slate-50 flex justify-between" href="#">Govt Jobs <span className="text-slate-400">120+</span></a>
<a className="p-2 border-b hover:bg-slate-50 flex justify-between" href="#">Private Jobs <span className="text-slate-400">45</span></a>
<a className="p-2 border-b hover:bg-slate-50 flex justify-between" href="#">Tech News <span className="text-slate-400">88</span></a>
<a className="p-2 hover:bg-slate-50 flex justify-between" href="#">Local Updates <span className="text-slate-400">204</span></a>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-white border-t-4 border-sky-600 mt-8 py-10 text-center">
<div className="max-w-7xl mx-auto px-4">
<h2 className="font-oswald text-3xl font-bold mb-4 tracking-tight">ANIKZZZ<span className="text-sky-500">.COM</span></h2>
<div className="flex flex-wrap justify-center gap-6 text-xs font-medium text-slate-400 mb-8 uppercase">
<a className="hover:text-white transition-colors" href="#">About</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Disclaimer</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Advertise with Us</a>
</div>
<p className="text-[10px] text-slate-500 max-w-2xl mx-auto leading-relaxed">
                Copyright © 2024 Anikzzz Inc. All Rights Reserved. <br/>
                Disclaimer: The Examination Results / Marks published in this Website is only for the immediate Information to the Examinees and does not to be a constitute to be a Legal Document.
            </p>
</div>
</footer>

<div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 flex justify-around py-2 z-50 text-[10px] font-bold uppercase text-slate-500 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
<a className="flex flex-col items-center text-sky-600" href="#">
<svg className="iconify iconify--lucide" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m3 9l9-7l9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><polyline fill="none" points="9 22 9 12 15 12 15 22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></polyline></svg>
            Home
        </a>
<a className="flex flex-col items-center hover:text-sky-600" href="#">
<svg className="iconify iconify--lucide" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" height="14" rx="2" ry="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="20" x="2" y="7"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
            Jobs
        </a>
<a className="flex flex-col items-center hover:text-sky-600 relative" href="#">
<div className="bg-sky-600 text-white rounded-full p-2.5 -mt-6 border-4 border-white shadow-lg">
<svg className="iconify iconify--lucide" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14m-7-7h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="mt-1">Post</span>
</a>
<a className="flex flex-col items-center hover:text-sky-600" href="#">
<svg className="iconify iconify--lucide" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M14 2v4a2 2 0 0 0 2 2h4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
            Result
        </a>
<a className="flex flex-col items-center hover:text-sky-600" href="#">
<svg className="iconify iconify--lucide" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><circle cx="12" cy="7" fill="none" r="4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></circle></svg>
            Profile
        </a>
</div>

    </>
  );
}
