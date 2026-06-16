import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 bg-white border-b border-gray-200">

<div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between gap-8">
<div className="font-semibold text-xl tracking-tighter">EDUSEARCH</div>
<div className="flex-1 max-w-3xl relative hidden md:block">
<input className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-gray-400 focus:bg-white transition-colors" placeholder="Search for colleges, exams, courses or careers..." type="text"/>
<iconify-icon className="absolute left-3 top-2.5 text-gray-400 text-lg" icon="solar:magnifer-linear"></iconify-icon>
</div>
<div className="flex items-center gap-6 text-sm font-medium">
<button className="text-gray-600 hover:text-gray-900 hidden sm:block">Log In</button>
<button className="bg-gray-900 text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition-colors">Sign Up</button>
</div>
</div>

<nav className="max-w-[1440px] mx-auto px-6 h-12 flex items-center gap-8 text-sm font-medium text-gray-600 border-t border-gray-100 overflow-x-auto whitespace-nowrap" style={{MsOverflowStyle: 'none', scrollbarWidth: 'none'}}>
<button className="flex items-center gap-1.5 hover:text-gray-900">Colleges <iconify-icon className="text-xs" icon="solar:alt-arrow-down-linear"></iconify-icon></button>
<button className="flex items-center gap-1.5 hover:text-gray-900">Courses <iconify-icon className="text-xs" icon="solar:alt-arrow-down-linear"></iconify-icon></button>
<button className="flex items-center gap-1.5 hover:text-gray-900">Exams <iconify-icon className="text-xs" icon="solar:alt-arrow-down-linear"></iconify-icon></button>
<button className="flex items-center gap-1.5 hover:text-gray-900">Careers <iconify-icon className="text-xs" icon="solar:alt-arrow-down-linear"></iconify-icon></button>
<div className="w-px h-4 bg-gray-300 mx-2"></div>
<button className="flex items-center gap-1.5 text-gray-900">
<iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon> AI Career Test
            </button>
<button className="flex items-center gap-1.5 hover:text-gray-900">Internships / Jobs</button>
<button className="flex items-center gap-1.5 hover:text-gray-900">Study Abroad</button>
</nav>
</header>

<section className="pt-40 pb-20 px-6 bg-gray-50 border-b border-gray-200">
<div className="max-w-5xl mx-auto text-center">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 mb-6">
                Find the Right College &amp; Career After 12th
            </h1>
<p className="text-base text-gray-500 mb-12 max-w-2xl mx-auto">
                Discover over 10,000+ colleges, courses, and exams. Data-backed insights to help you make the most important decision of your life.
            </p>

<div className="bg-white border border-gray-200 rounded-2xl p-2 flex flex-col md:flex-row gap-2 shadow-sm mb-8 text-left">
<div className="flex-1 flex items-center gap-3 px-4 py-3 border-b md:border-b-0 md:border-r border-gray-100">
<iconify-icon className="text-gray-400 text-lg" icon="solar:book-bookmark-linear"></iconify-icon>
<div className="flex-1">
<span className="block text-xs text-gray-400 font-medium mb-0.5">Stream</span>
<input className="w-full text-sm outline-none text-gray-900 placeholder-gray-300" placeholder="e.g. Engineering, Medical" type="text"/>
</div>
</div>
<div className="flex-1 flex items-center gap-3 px-4 py-3 border-b md:border-b-0 md:border-r border-gray-100">
<iconify-icon className="text-gray-400 text-lg" icon="solar:diploma-linear"></iconify-icon>
<div className="flex-1">
<span className="block text-xs text-gray-400 font-medium mb-0.5">Course</span>
<input className="w-full text-sm outline-none text-gray-900 placeholder-gray-300" placeholder="e.g. B.Tech, MBBS, MBA" type="text"/>
</div>
</div>
<div className="flex-1 flex items-center gap-3 px-4 py-3 border-b md:border-b-0 md:border-r border-gray-100">
<iconify-icon className="text-gray-400 text-lg" icon="solar:map-point-linear"></iconify-icon>
<div className="flex-1">
<span className="block text-xs text-gray-400 font-medium mb-0.5">Location</span>
<input className="w-full text-sm outline-none text-gray-900 placeholder-gray-300" placeholder="City or State" type="text"/>
</div>
</div>
<button className="bg-gray-900 text-white px-8 py-4 rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
<iconify-icon className="text-base" icon="solar:magnifer-linear"></iconify-icon> Search
                </button>
</div>

<div className="flex flex-wrap items-center justify-center gap-3 text-sm text-gray-500">
<span className="font-medium text-xs text-gray-400 uppercase tracking-widest">Trending:</span>
<span className="px-4 py-1.5 bg-white border border-gray-200 rounded-full cursor-pointer hover:border-gray-400 transition-colors">B.Tech in Delhi</span>
<span className="px-4 py-1.5 bg-white border border-gray-200 rounded-full cursor-pointer hover:border-gray-400 transition-colors">MBBS in Maharashtra</span>
<span className="px-4 py-1.5 bg-white border border-gray-200 rounded-full cursor-pointer hover:border-gray-400 transition-colors">Top MBA Colleges</span>
<span className="px-4 py-1.5 bg-white border border-gray-200 rounded-full cursor-pointer hover:border-gray-400 transition-colors">JEE Main 2024</span>
</div>
</div>
</section>

<section className="py-12 border-b border-gray-200">
<div className="max-w-[1440px] mx-auto px-6">
<div className="flex gap-4 overflow-x-auto pb-4 snap-x" style={{MsOverflowStyle: 'none', scrollbarWidth: 'none'}}>

<div className="min-w-[240px] snap-start bg-gray-50 border border-gray-200 rounded-xl p-5 cursor-pointer hover:bg-gray-100 transition-colors">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center">
<iconify-icon className="text-gray-600" icon="solar:buildings-2-linear"></iconify-icon>
</div>
<h3 className="font-medium text-sm text-gray-900">Top Colleges</h3>
</div>
<p className="text-xs text-gray-500">Explore rankings by NIRF, State, and Streams.</p>
</div>
<div className="min-w-[240px] snap-start bg-gray-50 border border-gray-200 rounded-xl p-5 cursor-pointer hover:bg-gray-100 transition-colors">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center">
<iconify-icon className="text-gray-600" icon="solar:diploma-linear"></iconify-icon>
</div>
<h3 className="font-medium text-sm text-gray-900">Trending Courses</h3>
</div>
<p className="text-xs text-gray-500">Engineering, Management, Medical &amp; more.</p>
</div>
<div className="min-w-[240px] snap-start bg-gray-50 border border-gray-200 rounded-xl p-5 cursor-pointer hover:bg-gray-100 transition-colors">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center">
<iconify-icon className="text-gray-600" icon="solar:document-text-linear"></iconify-icon>
</div>
<h3 className="font-medium text-sm text-gray-900">Latest Exams</h3>
</div>
<p className="text-xs text-gray-500">Dates, syllabus, and application forms.</p>
</div>
<div className="min-w-[240px] snap-start bg-gray-50 border border-gray-200 rounded-xl p-5 cursor-pointer hover:bg-gray-100 transition-colors">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center">
<iconify-icon className="text-gray-600" icon="solar:map-point-linear"></iconify-icon>
</div>
<h3 className="font-medium text-sm text-gray-900">Study by City</h3>
</div>
<p className="text-xs text-gray-500">Delhi, Mumbai, Bangalore, Chennai, Pune.</p>
</div>
<div className="min-w-[240px] snap-start bg-gray-50 border border-gray-200 rounded-xl p-5 cursor-pointer hover:bg-gray-100 transition-colors">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center">
<iconify-icon className="text-gray-600" icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<h3 className="font-medium text-sm text-gray-900">Student Reviews</h3>
</div>
<p className="text-xs text-gray-500">Read verified alumni experiences.</p>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-[1440px] mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-2">Explore by Career Fields</h2>
<p className="text-sm text-gray-500">Discover courses and colleges categorized by major streams.</p>
</div>
<button className="text-sm font-medium text-gray-900 border-b border-gray-900 pb-0.5 self-start md:self-auto">View All Streams</button>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-12">

<div className="border border-gray-200 rounded-xl p-5 hover:border-gray-400 cursor-pointer group transition-colors">
<iconify-icon className="text-2xl text-gray-600 mb-3 block" icon="solar:laptop-linear"></iconify-icon>
<h3 className="font-medium text-sm text-gray-900 mb-1">Engineering</h3>
<p className="text-xs text-gray-500">6,500+ Colleges</p>
</div>
<div className="border border-gray-200 rounded-xl p-5 hover:border-gray-400 cursor-pointer group transition-colors">
<iconify-icon className="text-2xl text-gray-600 mb-3 block" icon="solar:stethoscope-linear"></iconify-icon>
<h3 className="font-medium text-sm text-gray-900 mb-1">Medical</h3>
<p className="text-xs text-gray-500">2,100+ Colleges</p>
</div>
<div className="border border-gray-200 rounded-xl p-5 hover:border-gray-400 cursor-pointer group transition-colors">
<iconify-icon className="text-2xl text-gray-600 mb-3 block" icon="solar:case-linear"></iconify-icon>
<h3 className="font-medium text-sm text-gray-900 mb-1">Management</h3>
<p className="text-xs text-gray-500">8,200+ Colleges</p>
</div>
<div className="border border-gray-200 rounded-xl p-5 hover:border-gray-400 cursor-pointer group transition-colors">
<iconify-icon className="text-2xl text-gray-600 mb-3 block" icon="solar:scale-linear"></iconify-icon>
<h3 className="font-medium text-sm text-gray-900 mb-1">Law</h3>
<p className="text-xs text-gray-500">1,400+ Colleges</p>
</div>
<div className="border border-gray-200 rounded-xl p-5 hover:border-gray-400 cursor-pointer group transition-colors">
<iconify-icon className="text-2xl text-gray-600 mb-3 block" icon="solar:pen-linear"></iconify-icon>
<h3 className="font-medium text-sm text-gray-900 mb-1">Design</h3>
<p className="text-xs text-gray-500">900+ Colleges</p>
</div>
<div className="border border-gray-200 rounded-xl p-5 hover:border-gray-400 cursor-pointer group transition-colors">
<iconify-icon className="text-2xl text-gray-600 mb-3 block" icon="solar:palette-linear"></iconify-icon>
<h3 className="font-medium text-sm text-gray-900 mb-1">Arts</h3>
<p className="text-xs text-gray-500">4,300+ Colleges</p>
</div>
<div className="border border-gray-200 rounded-xl p-5 hover:border-gray-400 cursor-pointer group transition-colors">
<iconify-icon className="text-2xl text-gray-600 mb-3 block" icon="solar:calculator-linear"></iconify-icon>
<h3 className="font-medium text-sm text-gray-900 mb-1">Commerce</h3>
<p className="text-xs text-gray-500">5,100+ Colleges</p>
</div>
<div className="border border-gray-200 rounded-xl p-5 hover:border-gray-400 cursor-pointer group transition-colors">
<iconify-icon className="text-2xl text-gray-600 mb-3 block" icon="solar:test-tube-linear"></iconify-icon>
<h3 className="font-medium text-sm text-gray-900 mb-1">Science</h3>
<p className="text-xs text-gray-500">5,800+ Colleges</p>
</div>
<div className="border border-gray-200 rounded-xl p-5 hover:border-gray-400 cursor-pointer group transition-colors">
<iconify-icon className="text-2xl text-gray-600 mb-3 block" icon="solar:monitor-smartphone-linear"></iconify-icon>
<h3 className="font-medium text-sm text-gray-900 mb-1">Information Tech</h3>
<p className="text-xs text-gray-500">3,200+ Colleges</p>
</div>
<div className="border border-gray-200 rounded-xl p-5 hover:border-gray-400 cursor-pointer group transition-colors">
<iconify-icon className="text-2xl text-gray-600 mb-3 block" icon="solar:pills-linear"></iconify-icon>
<h3 className="font-medium text-sm text-gray-900 mb-1">Pharmacy</h3>
<p className="text-xs text-gray-500">1,800+ Colleges</p>
</div>
</div>

<div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center">
<h4 className="text-sm font-medium text-gray-900 mb-4 tracking-tight uppercase">A-Z Course Directory</h4>
<div className="flex flex-wrap justify-center gap-x-2 gap-y-3 text-sm text-gray-600 font-medium">
<span className="hover:text-gray-900 cursor-pointer">A</span><span className="text-gray-300">|</span>
<span className="hover:text-gray-900 cursor-pointer">B</span><span className="text-gray-300">|</span>
<span className="hover:text-gray-900 cursor-pointer">C</span><span className="text-gray-300">|</span>
<span className="hover:text-gray-900 cursor-pointer text-gray-900 underline underline-offset-4 decoration-2">D</span><span className="text-gray-300">|</span>
<span className="hover:text-gray-900 cursor-pointer">E</span><span className="text-gray-300">|</span>
<span className="hover:text-gray-900 cursor-pointer">F</span><span className="text-gray-300">|</span>
<span className="hover:text-gray-900 cursor-pointer">G</span><span className="text-gray-300">|</span>
<span className="hover:text-gray-900 cursor-pointer">H</span><span className="text-gray-300">|</span>
<span className="hover:text-gray-900 cursor-pointer">I</span><span className="text-gray-300">|</span>
<span className="hover:text-gray-900 cursor-pointer">J</span><span className="text-gray-300">|</span>
<span className="hover:text-gray-900 cursor-pointer">K</span><span className="text-gray-300">|</span>
<span className="hover:text-gray-900 cursor-pointer">L</span><span className="text-gray-300">|</span>
<span className="hover:text-gray-900 cursor-pointer">M</span><span className="text-gray-300">|</span>
<span className="hover:text-gray-900 cursor-pointer">N</span><span className="text-gray-300">|</span>
<span className="hover:text-gray-900 cursor-pointer">O</span><span className="text-gray-300">|</span>
<span className="hover:text-gray-900 cursor-pointer">P</span><span className="text-gray-300">|</span>
<span className="hover:text-gray-900 cursor-pointer">Q</span><span className="text-gray-300">|</span>
<span className="hover:text-gray-900 cursor-pointer">R</span><span className="text-gray-300">|</span>
<span className="hover:text-gray-900 cursor-pointer">S</span><span className="text-gray-300">|</span>
<span className="hover:text-gray-900 cursor-pointer">T</span><span className="text-gray-300">|</span>
<span className="hover:text-gray-900 cursor-pointer">U</span><span className="text-gray-300">|</span>
<span className="hover:text-gray-900 cursor-pointer">V</span><span className="text-gray-300">|</span>
<span className="hover:text-gray-900 cursor-pointer">W</span><span className="text-gray-300">|</span>
<span className="hover:text-gray-900 cursor-pointer">X</span><span className="text-gray-300">|</span>
<span className="hover:text-gray-900 cursor-pointer">Y</span><span className="text-gray-300">|</span>
<span className="hover:text-gray-900 cursor-pointer">Z</span>
</div>

<div className="mt-6 pt-6 border-t border-gray-200 text-left grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-500">
<a className="hover:text-gray-900" href="#">Data Science</a>
<a className="hover:text-gray-900" href="#">Dental Surgery (BDS)</a>
<a className="hover:text-gray-900" href="#">Design (B.Des)</a>
<a className="hover:text-gray-900" href="#">Digital Marketing</a>
<a className="hover:text-gray-900" href="#">Diploma in Engineering</a>
<a className="hover:text-gray-900" href="#">Dermatology</a>
</div>
</div>
</section>

<section className="py-24 border-y border-gray-200 bg-gray-50">
<div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 text-xs font-medium text-gray-900 mb-6">
<iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon> AI Powered Guidance
                </div>
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">Confused about your career? Let AI analyze your potential.</h2>
<p className="text-base text-gray-500 mb-8">Take our scientifically designed psychometric test. We evaluate your aptitude, personality, and interests to recommend the perfect career path and associated courses.</p>
<ul className="space-y-4 mb-10">
<li className="flex items-start gap-3 text-sm text-gray-600">
<iconify-icon className="text-lg text-gray-900 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<div>
<span className="font-medium text-gray-900 block">Personalized Report</span>
<span className="text-xs">Detailed 20-page analysis of your strengths.</span>
</div>
</li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<iconify-icon className="text-lg text-gray-900 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<div>
<span className="font-medium text-gray-900 block">College Recommendations</span>
<span className="text-xs">Matched exactly to your personality profile.</span>
</div>
</li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<iconify-icon className="text-lg text-gray-900 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<div>
<span className="font-medium text-gray-900 block">Expert Counselling</span>
<span className="text-xs">Optional 1-on-1 session with career experts.</span>
</div>
</li>
</ul>
<button className="bg-gray-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">Start Free AI Career Test</button>
</div>
<div className="bg-white border border-gray-200 rounded-2xl aspect-[4/3] flex items-center justify-center p-8 relative overflow-hidden shadow-sm">

<div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
<div className="relative w-full h-full border border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center text-gray-400 bg-white z-10 p-6 text-center">
<iconify-icon className="text-5xl mb-4 text-gray-300" icon="solar:brain-linear"></iconify-icon>
<span className="text-sm font-medium">Interactive AI Dashboard Visualization</span>
<span className="text-xs mt-2">Charts, Graphs, and Skill matching interface</span>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-[1440px] mx-auto px-6">
<h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">Top Ranked Colleges in India</h2>

<div className="flex gap-2 overflow-x-auto mb-8 border-b border-gray-200 pb-px text-sm font-medium text-gray-500" style={{MsOverflowStyle: 'none', scrollbarWidth: 'none'}}>
<button className="px-4 py-2 text-gray-900 border-b-2 border-gray-900 whitespace-nowrap">Top Ranked</button>
<button className="px-4 py-2 hover:text-gray-900 whitespace-nowrap">By City</button>
<button className="px-4 py-2 hover:text-gray-900 whitespace-nowrap">By Stream</button>
<button className="px-4 py-2 hover:text-gray-900 whitespace-nowrap">Private</button>
<button className="px-4 py-2 hover:text-gray-900 whitespace-nowrap">Government</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

<div className="border border-gray-200 rounded-xl flex flex-col hover:border-gray-400 transition-colors bg-white">
<div className="h-40 border-b border-gray-100 flex items-center justify-center bg-gray-50 text-gray-400 text-xs relative">
<span className="absolute top-3 left-3 bg-white border border-gray-200 px-2 py-1 rounded text-[10px] font-medium text-gray-900">Ranked #1</span>
                    [ College Image / Campus View ]
                </div>
<div className="p-5 flex flex-col flex-1">
<div className="flex justify-between items-start mb-1 gap-2">
<h3 className="font-semibold text-base tracking-tight text-gray-900 leading-tight">Indian Institute of Technology, Madras</h3>
<iconify-icon className="text-gray-400 hover:text-gray-900 cursor-pointer" icon="solar:bookmark-linear"></iconify-icon>
</div>
<p className="text-xs text-gray-500 mb-4 flex items-center gap-1"><iconify-icon icon="solar:map-point-linear"></iconify-icon> Chennai, Tamil Nadu</p>
<div className="grid grid-cols-2 gap-4 mb-4 text-sm border-y border-gray-100 py-3">
<div>
<span className="block text-[11px] text-gray-400 mb-0.5 uppercase tracking-wider">NIRF Rating</span>
<span className="font-medium text-gray-900">4.9 / 5.0</span>
</div>
<div>
<span className="block text-[11px] text-gray-400 mb-0.5 uppercase tracking-wider">Avg. Fees</span>
<span className="font-medium text-gray-900">₹2.1L / yr</span>
</div>
</div>
<div className="mb-5">
<span className="block text-[11px] text-gray-400 mb-2 uppercase tracking-wider">Top Courses &amp; Exams</span>
<div className="flex gap-1.5 flex-wrap">
<span className="text-[11px] border border-gray-200 px-2 py-0.5 rounded text-gray-600">B.Tech</span>
<span className="text-[11px] border border-gray-200 px-2 py-0.5 rounded text-gray-600">M.Tech</span>
<span className="text-[11px] bg-gray-100 px-2 py-0.5 rounded text-gray-900 font-medium">JEE Adv.</span>
<span className="text-[11px] bg-gray-100 px-2 py-0.5 rounded text-gray-900 font-medium">GATE</span>
</div>
</div>
<div className="mt-auto flex gap-2">
<button className="flex-1 bg-white border border-gray-200 py-2 rounded-lg text-xs font-medium hover:bg-gray-50 transition-colors">Brochure</button>
<button className="flex-1 bg-gray-900 text-white py-2 rounded-lg text-xs font-medium hover:bg-gray-800 transition-colors">Apply Now</button>
</div>
</div>
</div>

<div className="border border-gray-200 rounded-xl flex flex-col hover:border-gray-400 transition-colors bg-white">
<div className="h-40 border-b border-gray-100 flex items-center justify-center bg-gray-50 text-gray-400 text-xs relative">
<span className="absolute top-3 left-3 bg-white border border-gray-200 px-2 py-1 rounded text-[10px] font-medium text-gray-900">Ranked #2</span>
                    [ College Image / Campus View ]
                </div>
<div className="p-5 flex flex-col flex-1">
<div className="flex justify-between items-start mb-1 gap-2">
<h3 className="font-semibold text-base tracking-tight text-gray-900 leading-tight">Indian Institute of Management</h3>
<iconify-icon className="text-gray-400 hover:text-gray-900 cursor-pointer" icon="solar:bookmark-linear"></iconify-icon>
</div>
<p className="text-xs text-gray-500 mb-4 flex items-center gap-1"><iconify-icon icon="solar:map-point-linear"></iconify-icon> Ahmedabad, Gujarat</p>
<div className="grid grid-cols-2 gap-4 mb-4 text-sm border-y border-gray-100 py-3">
<div>
<span className="block text-[11px] text-gray-400 mb-0.5 uppercase tracking-wider">NIRF Rating</span>
<span className="font-medium text-gray-900">4.8 / 5.0</span>
</div>
<div>
<span className="block text-[11px] text-gray-400 mb-0.5 uppercase tracking-wider">Avg. Fees</span>
<span className="font-medium text-gray-900">₹24L / pgp</span>
</div>
</div>
<div className="mb-5">
<span className="block text-[11px] text-gray-400 mb-2 uppercase tracking-wider">Top Courses &amp; Exams</span>
<div className="flex gap-1.5 flex-wrap">
<span className="text-[11px] border border-gray-200 px-2 py-0.5 rounded text-gray-600">MBA/PGDM</span>
<span className="text-[11px] border border-gray-200 px-2 py-0.5 rounded text-gray-600">Exec MBA</span>
<span className="text-[11px] bg-gray-100 px-2 py-0.5 rounded text-gray-900 font-medium">CAT</span>
</div>
</div>
<div className="mt-auto flex gap-2">
<button className="flex-1 bg-white border border-gray-200 py-2 rounded-lg text-xs font-medium hover:bg-gray-50 transition-colors">Brochure</button>
<button className="flex-1 bg-gray-900 text-white py-2 rounded-lg text-xs font-medium hover:bg-gray-800 transition-colors">Apply Now</button>
</div>
</div>
</div>

<div className="border border-gray-200 rounded-xl flex flex-col hover:border-gray-400 transition-colors bg-white">
<div className="h-40 border-b border-gray-100 flex items-center justify-center bg-gray-50 text-gray-400 text-xs relative">
<span className="absolute top-3 left-3 bg-white border border-gray-200 px-2 py-1 rounded text-[10px] font-medium text-gray-900">Ranked #1 (Med)</span>
                    [ College Image / Campus View ]
                </div>
<div className="p-5 flex flex-col flex-1">
<div className="flex justify-between items-start mb-1 gap-2">
<h3 className="font-semibold text-base tracking-tight text-gray-900 leading-tight">All India Institute of Medical Sciences</h3>
<iconify-icon className="text-gray-400 hover:text-gray-900 cursor-pointer" icon="solar:bookmark-linear"></iconify-icon>
</div>
<p className="text-xs text-gray-500 mb-4 flex items-center gap-1"><iconify-icon icon="solar:map-point-linear"></iconify-icon> New Delhi, Delhi</p>
<div className="grid grid-cols-2 gap-4 mb-4 text-sm border-y border-gray-100 py-3">
<div>
<span className="block text-[11px] text-gray-400 mb-0.5 uppercase tracking-wider">NIRF Rating</span>
<span className="font-medium text-gray-900">4.9 / 5.0</span>
</div>
<div>
<span className="block text-[11px] text-gray-400 mb-0.5 uppercase tracking-wider">Avg. Fees</span>
<span className="font-medium text-gray-900">₹6K / yr</span>
</div>
</div>
<div className="mb-5">
<span className="block text-[11px] text-gray-400 mb-2 uppercase tracking-wider">Top Courses &amp; Exams</span>
<div className="flex gap-1.5 flex-wrap">
<span className="text-[11px] border border-gray-200 px-2 py-0.5 rounded text-gray-600">MBBS</span>
<span className="text-[11px] border border-gray-200 px-2 py-0.5 rounded text-gray-600">MD</span>
<span className="text-[11px] bg-gray-100 px-2 py-0.5 rounded text-gray-900 font-medium">NEET</span>
</div>
</div>
<div className="mt-auto flex gap-2">
<button className="flex-1 bg-white border border-gray-200 py-2 rounded-lg text-xs font-medium hover:bg-gray-50 transition-colors">Brochure</button>
<button className="flex-1 bg-gray-900 text-white py-2 rounded-lg text-xs font-medium hover:bg-gray-800 transition-colors">Apply Now</button>
</div>
</div>
</div>

<div className="border border-gray-200 rounded-xl flex flex-col hover:border-gray-400 transition-colors bg-white">
<div className="h-40 border-b border-gray-100 flex items-center justify-center bg-gray-50 text-gray-400 text-xs relative">
<span className="absolute top-3 left-3 bg-white border border-gray-200 px-2 py-1 rounded text-[10px] font-medium text-gray-900">Ranked #4</span>
                    [ College Image / Campus View ]
                </div>
<div className="p-5 flex flex-col flex-1">
<div className="flex justify-between items-start mb-1 gap-2">
<h3 className="font-semibold text-base tracking-tight text-gray-900 leading-tight">Birla Institute of Technology</h3>
<iconify-icon className="text-gray-400 hover:text-gray-900 cursor-pointer" icon="solar:bookmark-linear"></iconify-icon>
</div>
<p className="text-xs text-gray-500 mb-4 flex items-center gap-1"><iconify-icon icon="solar:map-point-linear"></iconify-icon> Pilani, Rajasthan</p>
<div className="grid grid-cols-2 gap-4 mb-4 text-sm border-y border-gray-100 py-3">
<div>
<span className="block text-[11px] text-gray-400 mb-0.5 uppercase tracking-wider">Student Rating</span>
<span className="font-medium text-gray-900">4.7 / 5.0</span>
</div>
<div>
<span className="block text-[11px] text-gray-400 mb-0.5 uppercase tracking-wider">Avg. Fees</span>
<span className="font-medium text-gray-900">₹5.5L / yr</span>
</div>
</div>
<div className="mb-5">
<span className="block text-[11px] text-gray-400 mb-2 uppercase tracking-wider">Top Courses &amp; Exams</span>
<div className="flex gap-1.5 flex-wrap">
<span className="text-[11px] border border-gray-200 px-2 py-0.5 rounded text-gray-600">B.E.</span>
<span className="text-[11px] border border-gray-200 px-2 py-0.5 rounded text-gray-600">B.Pharm</span>
<span className="text-[11px] bg-gray-100 px-2 py-0.5 rounded text-gray-900 font-medium">BITSAT</span>
</div>
</div>
<div className="mt-auto flex gap-2">
<button className="flex-1 bg-white border border-gray-200 py-2 rounded-lg text-xs font-medium hover:bg-gray-50 transition-colors">Brochure</button>
<button className="flex-1 bg-gray-900 text-white py-2 rounded-lg text-xs font-medium hover:bg-gray-800 transition-colors">Apply Now</button>
</div>
</div>
</div>
</div>
<div className="mt-8 text-center">
<button className="text-sm font-medium text-gray-900 border border-gray-200 px-6 py-2 rounded-lg hover:bg-gray-50">View 10,000+ Colleges</button>
</div>
</section>

<section className="py-24 bg-gray-50 border-y border-gray-200">
<div className="max-w-[1440px] mx-auto px-6">
<h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-10">Popular Courses &amp; Specializations</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">

<div>
<h3 className="font-semibold text-sm text-gray-900 mb-4 pb-2 border-b border-gray-200 flex justify-between items-center">
                        Engineering 
                        <span className="text-xs font-normal text-gray-500">B.Tech / M.Tech</span>
</h3>
<ul className="space-y-3 text-sm text-gray-600">
<li><a className="hover:text-gray-900 flex justify-between" href="#">Computer Science <span className="text-xs text-gray-400">4.5k+ colleges</span></a></li>
<li><a className="hover:text-gray-900 flex justify-between" href="#">Mechanical Engg <span className="text-xs text-gray-400">3.8k+ colleges</span></a></li>
<li><a className="hover:text-gray-900 flex justify-between" href="#">Civil Engineering <span className="text-xs text-gray-400">3.5k+ colleges</span></a></li>
<li><a className="hover:text-gray-900 flex justify-between" href="#">Electronics &amp; Comm <span className="text-xs text-gray-400">3.2k+ colleges</span></a></li>
<li><a className="hover:text-gray-900 flex justify-between text-gray-900 font-medium" href="#">AI &amp; Machine Learning <span className="text-[10px] bg-gray-200 px-1.5 rounded">Trending</span></a></li>
<li><a className="hover:text-gray-900 flex justify-between" href="#">Data Science <span className="text-[10px] bg-gray-200 px-1.5 rounded">Trending</span></a></li>
</ul>
<a className="text-xs font-medium text-gray-900 mt-4 inline-block hover:underline" href="#">View all 60+ branches</a>
</div>

<div>
<h3 className="font-semibold text-sm text-gray-900 mb-4 pb-2 border-b border-gray-200 flex justify-between items-center">
                        Medical 
                        <span className="text-xs font-normal text-gray-500">MBBS / BDS</span>
</h3>
<ul className="space-y-3 text-sm text-gray-600">
<li><a className="hover:text-gray-900 flex justify-between" href="#">MBBS <span className="text-xs text-gray-400">600+ colleges</span></a></li>
<li><a className="hover:text-gray-900 flex justify-between" href="#">BDS (Dental) <span className="text-xs text-gray-400">350+ colleges</span></a></li>
<li><a className="hover:text-gray-900 flex justify-between" href="#">B.Sc Nursing <span className="text-xs text-gray-400">1.2k+ colleges</span></a></li>
<li><a className="hover:text-gray-900 flex justify-between" href="#">B.Pharm <span className="text-xs text-gray-400">1.8k+ colleges</span></a></li>
<li><a className="hover:text-gray-900 flex justify-between" href="#">BPT (Physiotherapy) <span className="text-xs text-gray-400">400+ colleges</span></a></li>
<li><a className="hover:text-gray-900 flex justify-between" href="#">BAMS (Ayurvedic) <span className="text-xs text-gray-400">300+ colleges</span></a></li>
</ul>
<a className="text-xs font-medium text-gray-900 mt-4 inline-block hover:underline" href="#">View all 40+ branches</a>
</div>

<div>
<h3 className="font-semibold text-sm text-gray-900 mb-4 pb-2 border-b border-gray-200 flex justify-between items-center">
                        Management 
                        <span className="text-xs font-normal text-gray-500">BBA / MBA</span>
</h3>
<ul className="space-y-3 text-sm text-gray-600">
<li><a className="hover:text-gray-900 flex justify-between" href="#">MBA General <span className="text-xs text-gray-400">6.5k+ colleges</span></a></li>
<li><a className="hover:text-gray-900 flex justify-between" href="#">Marketing <span className="text-xs text-gray-400">4.1k+ colleges</span></a></li>
<li><a className="hover:text-gray-900 flex justify-between" href="#">Finance <span className="text-xs text-gray-400">4.0k+ colleges</span></a></li>
<li><a className="hover:text-gray-900 flex justify-between" href="#">Human Resources <span className="text-xs text-gray-400">3.8k+ colleges</span></a></li>
<li><a className="hover:text-gray-900 flex justify-between" href="#">Business Analytics <span className="text-[10px] bg-gray-200 px-1.5 rounded">Trending</span></a></li>
<li><a className="hover:text-gray-900 flex justify-between" href="#">International Bus. <span className="text-xs text-gray-400">1.2k+ colleges</span></a></li>
</ul>
<a className="text-xs font-medium text-gray-900 mt-4 inline-block hover:underline" href="#">View all 35+ branches</a>
</div>

<div>
<h3 className="font-semibold text-sm text-gray-900 mb-4 pb-2 border-b border-gray-200 flex justify-between items-center">
                        Arts &amp; Science 
                        <span className="text-xs font-normal text-gray-500">BA / B.Sc</span>
</h3>
<ul className="space-y-3 text-sm text-gray-600">
<li><a className="hover:text-gray-900 flex justify-between" href="#">B.Sc Physics <span className="text-xs text-gray-400">2.5k+ colleges</span></a></li>
<li><a className="hover:text-gray-900 flex justify-between" href="#">B.Sc Chemistry <span className="text-xs text-gray-400">2.6k+ colleges</span></a></li>
<li><a className="hover:text-gray-900 flex justify-between" href="#">BA Economics <span className="text-xs text-gray-400">1.8k+ colleges</span></a></li>
<li><a className="hover:text-gray-900 flex justify-between" href="#">BA English <span className="text-xs text-gray-400">3.1k+ colleges</span></a></li>
<li><a className="hover:text-gray-900 flex justify-between" href="#">Psychology <span className="text-[10px] bg-gray-200 px-1.5 rounded">Trending</span></a></li>
<li><a className="hover:text-gray-900 flex justify-between" href="#">Biotechnology <span className="text-xs text-gray-400">1.5k+ colleges</span></a></li>
</ul>
<a className="text-xs font-medium text-gray-900 mt-4 inline-block hover:underline" href="#">View all 100+ branches</a>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-[1440px] mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-2">Top Entrance Exams</h2>
<p className="text-sm text-gray-500">Stay updated with important dates, syllabus, and participating colleges.</p>
</div>
<div className="flex gap-2">
<select className="text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:border-gray-400 text-gray-600">
<option>All Streams</option>
<option>Engineering</option>
<option>Medical</option>
<option>Management</option>
</select>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="border border-gray-200 rounded-xl p-5 hover:border-gray-400 transition-colors">
<div className="flex justify-between items-start mb-4">
<h3 className="font-semibold text-lg tracking-tight text-gray-900">JEE Main 2024</h3>
<span className="text-[10px] uppercase tracking-wider font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">Engineering</span>
</div>
<div className="space-y-3 mb-5 border-b border-gray-100 pb-5">
<div className="flex items-center gap-3 text-sm">
<iconify-icon className="text-gray-400 text-lg" icon="solar:calendar-linear"></iconify-icon>
<div>
<span className="block text-[11px] text-gray-400">Exam Date</span>
<span className="text-gray-900 font-medium">24 Jan - 1 Feb</span>
</div>
</div>
<div className="flex items-center gap-3 text-sm">
<iconify-icon className="text-gray-400 text-lg" icon="solar:users-group-rounded-linear"></iconify-icon>
<div>
<span className="block text-[11px] text-gray-400">Applicants</span>
<span className="text-gray-900 font-medium">~ 12 Lakhs</span>
</div>
</div>
<div className="flex items-center gap-3 text-sm">
<iconify-icon className="text-gray-400 text-lg" icon="solar:buildings-linear"></iconify-icon>
<div>
<span className="block text-[11px] text-gray-400">Participating Colleges</span>
<span className="text-gray-900 font-medium">1,200+ Colleges</span>
</div>
</div>
</div>
<div className="flex gap-2">
<a className="text-xs font-medium text-gray-600 hover:text-gray-900 flex-1 text-center py-1" href="#">Syllabus</a>
<span className="text-gray-200">|</span>
<a className="text-xs font-medium text-gray-600 hover:text-gray-900 flex-1 text-center py-1" href="#">Cutoffs</a>
<span className="text-gray-200">|</span>
<a className="text-xs font-medium text-gray-900 flex-1 text-center py-1 underline underline-offset-2" href="#">Colleges</a>
</div>
</div>

<div className="border border-gray-200 rounded-xl p-5 hover:border-gray-400 transition-colors">
<div className="flex justify-between items-start mb-4">
<h3 className="font-semibold text-lg tracking-tight text-gray-900">NEET UG 2024</h3>
<span className="text-[10px] uppercase tracking-wider font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">Medical</span>
</div>
<div className="space-y-3 mb-5 border-b border-gray-100 pb-5">
<div className="flex items-center gap-3 text-sm">
<iconify-icon className="text-gray-400 text-lg" icon="solar:calendar-linear"></iconify-icon>
<div>
<span className="block text-[11px] text-gray-400">Exam Date</span>
<span className="text-gray-900 font-medium">5 May 2024</span>
</div>
</div>
<div className="flex items-center gap-3 text-sm">
<iconify-icon className="text-gray-400 text-lg" icon="solar:users-group-rounded-linear"></iconify-icon>
<div>
<span className="block text-[11px] text-gray-400">Applicants</span>
<span className="text-gray-900 font-medium">~ 20 Lakhs</span>
</div>
</div>
<div className="flex items-center gap-3 text-sm">
<iconify-icon className="text-gray-400 text-lg" icon="solar:buildings-linear"></iconify-icon>
<div>
<span className="block text-[11px] text-gray-400">Participating Colleges</span>
<span className="text-gray-900 font-medium">600+ Colleges</span>
</div>
</div>
</div>
<div className="flex gap-2">
<a className="text-xs font-medium text-gray-600 hover:text-gray-900 flex-1 text-center py-1" href="#">Syllabus</a>
<span className="text-gray-200">|</span>
<a className="text-xs font-medium text-gray-600 hover:text-gray-900 flex-1 text-center py-1" href="#">Cutoffs</a>
<span className="text-gray-200">|</span>
<a className="text-xs font-medium text-gray-900 flex-1 text-center py-1 underline underline-offset-2" href="#">Colleges</a>
</div>
</div>

<div className="border border-gray-200 rounded-xl p-5 hover:border-gray-400 transition-colors">
<div className="flex justify-between items-start mb-4">
<h3 className="font-semibold text-lg tracking-tight text-gray-900">CAT 2024</h3>
<span className="text-[10px] uppercase tracking-wider font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">Management</span>
</div>
<div className="space-y-3 mb-5 border-b border-gray-100 pb-5">
<div className="flex items-center gap-3 text-sm">
<iconify-icon className="text-gray-400 text-lg" icon="solar:calendar-linear"></iconify-icon>
<div>
<span className="block text-[11px] text-gray-400">Exam Date</span>
<span className="text-gray-900 font-medium">24 Nov 2024</span>
</div>
</div>
<div className="flex items-center gap-3 text-sm">
<iconify-icon className="text-gray-400 text-lg" icon="solar:users-group-rounded-linear"></iconify-icon>
<div>
<span className="block text-[11px] text-gray-400">Applicants</span>
<span className="text-gray-900 font-medium">~ 3 Lakhs</span>
</div>
</div>
<div className="flex items-center gap-3 text-sm">
<iconify-icon className="text-gray-400 text-lg" icon="solar:buildings-linear"></iconify-icon>
<div>
<span className="block text-[11px] text-gray-400">Participating Colleges</span>
<span className="text-gray-900 font-medium">1,000+ Colleges</span>
</div>
</div>
</div>
<div className="flex gap-2">
<a className="text-xs font-medium text-gray-600 hover:text-gray-900 flex-1 text-center py-1" href="#">Syllabus</a>
<span className="text-gray-200">|</span>
<a className="text-xs font-medium text-gray-600 hover:text-gray-900 flex-1 text-center py-1" href="#">Cutoffs</a>
<span className="text-gray-200">|</span>
<a className="text-xs font-medium text-gray-900 flex-1 text-center py-1 underline underline-offset-2" href="#">Colleges</a>
</div>
</div>

<div className="border border-gray-200 rounded-xl p-5 hover:border-gray-400 transition-colors bg-gray-50 flex flex-col items-center justify-center text-center">
<iconify-icon className="text-4xl text-gray-300 mb-3" icon="solar:document-add-linear"></iconify-icon>
<h3 className="font-medium text-gray-900 mb-1">View All Exams</h3>
<p className="text-xs text-gray-500 mb-4">Browse 400+ entrance exams across India.</p>
<button className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-xs font-medium hover:border-gray-400 transition-colors">Explore Directory</button>
</div>
</div>
</section>

<section className="py-24 bg-gray-900 text-white">
<div className="max-w-[1440px] mx-auto px-6 text-center">
<h2 className="text-2xl font-semibold tracking-tight mb-16">Your Admission Journey Simplified</h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-gray-700 z-0"></div>
<div className="relative z-10 flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-gray-800 border border-gray-600 flex items-center justify-center text-lg font-medium mb-4">1</div>
<h3 className="font-medium text-base mb-2">Explore &amp; Decide</h3>
<p className="text-xs text-gray-400 max-w-[200px]">Use our AI tool or browse 10k+ colleges to find your fit.</p>
</div>
<div className="relative z-10 flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-gray-800 border border-gray-600 flex items-center justify-center text-lg font-medium mb-4">2</div>
<h3 className="font-medium text-base mb-2">Compare Stats</h3>
<p className="text-xs text-gray-400 max-w-[200px]">Compare fees, placement records, and NIRF rankings.</p>
</div>
<div className="relative z-10 flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-gray-800 border border-gray-600 flex items-center justify-center text-lg font-medium mb-4">3</div>
<h3 className="font-medium text-base mb-2">Shortlist</h3>
<p className="text-xs text-gray-400 max-w-[200px]">Save your favorite colleges and track application deadlines.</p>
</div>
<div className="relative z-10 flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-gray-800 border border-gray-600 flex items-center justify-center text-lg font-medium mb-4">4</div>
<h3 className="font-medium text-base mb-2">Apply Directly</h3>
<p className="text-xs text-gray-400 max-w-[200px]">Fill a single common application form for multiple institutes.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-gray-200">
<div className="max-w-[1440px] mx-auto px-6">

<div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200 text-center mb-24 border-y border-gray-200 py-12">
<div>
<div className="text-3xl font-semibold text-gray-900 tracking-tight mb-1">12,400+</div>
<div className="text-xs text-gray-500 uppercase tracking-wider font-medium">Colleges</div>
</div>
<div>
<div className="text-3xl font-semibold text-gray-900 tracking-tight mb-1">45,000+</div>
<div className="text-xs text-gray-500 uppercase tracking-wider font-medium">Courses</div>
</div>
<div>
<div className="text-3xl font-semibold text-gray-900 tracking-tight mb-1">400+</div>
<div className="text-xs text-gray-500 uppercase tracking-wider font-medium">Exams</div>
</div>
<div>
<div className="text-3xl font-semibold text-gray-900 tracking-tight mb-1">2.5M+</div>
<div className="text-xs text-gray-500 uppercase tracking-wider font-medium">Students Guided</div>
</div>
</div>

<div className="bg-gray-100 rounded-[2rem] p-12 md:p-20 text-center max-w-4xl mx-auto border border-gray-200">
<iconify-icon className="text-5xl text-gray-400 mb-6" icon="solar:compass-square-linear"></iconify-icon>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4">Still Confused About Your Future?</h2>
<p className="text-gray-500 mb-10 max-w-xl mx-auto">Don't rely on guesswork. Let data and our advanced AI engine map out the best possible career trajectory for your unique profile.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-gray-900 text-white px-8 py-4 rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors">Start AI Career Test</button>
<button className="bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors">Talk to a Counsellor</button>
</div>
</div>
</div>
</section>

<footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-200">
<div className="max-w-[1440px] mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">

<div className="col-span-2 lg:col-span-2">
<div className="font-semibold text-2xl tracking-tighter text-gray-900 mb-4">EDUSEARCH</div>
<p className="text-xs text-gray-500 mb-6 max-w-xs leading-relaxed">The most comprehensive education discovery platform. Helping students make informed decisions through data, insights, and AI guidance.</p>
<div className="flex gap-4">
<div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:text-gray-900 cursor-pointer"><iconify-icon icon="solar:link-linear"></iconify-icon></div>
<div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:text-gray-900 cursor-pointer"><iconify-icon icon="solar:link-linear"></iconify-icon></div>
<div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:text-gray-900 cursor-pointer"><iconify-icon icon="solar:link-linear"></iconify-icon></div>
</div>
</div>

<div>
<h4 className="font-semibold text-sm text-gray-900 mb-4">Top Colleges</h4>
<ul className="space-y-3 text-xs text-gray-500">
<li><a className="hover:text-gray-900" href="#">Engineering Colleges</a></li>
<li><a className="hover:text-gray-900" href="#">Medical Colleges</a></li>
<li><a className="hover:text-gray-900" href="#">Management Colleges</a></li>
<li><a className="hover:text-gray-900" href="#">Law Colleges</a></li>
<li><a className="hover:text-gray-900" href="#">Commerce Colleges</a></li>
<li><a className="hover:text-gray-900" href="#">Arts Colleges</a></li>
</ul>
</div>

<div>
<h4 className="font-semibold text-sm text-gray-900 mb-4">Top Exams</h4>
<ul className="space-y-3 text-xs text-gray-500">
<li><a className="hover:text-gray-900" href="#">JEE Main</a></li>
<li><a className="hover:text-gray-900" href="#">NEET</a></li>
<li><a className="hover:text-gray-900" href="#">CAT</a></li>
<li><a className="hover:text-gray-900" href="#">GATE</a></li>
<li><a className="hover:text-gray-900" href="#">CLAT</a></li>
<li><a className="hover:text-gray-900" href="#">CUET</a></li>
</ul>
</div>

<div>
<h4 className="font-semibold text-sm text-gray-900 mb-4">Study Destinations</h4>
<ul className="space-y-3 text-xs text-gray-500">
<li><a className="hover:text-gray-900" href="#">Colleges in Delhi</a></li>
<li><a className="hover:text-gray-900" href="#">Colleges in Mumbai</a></li>
<li><a className="hover:text-gray-900" href="#">Colleges in Bangalore</a></li>
<li><a className="hover:text-gray-900" href="#">Colleges in Pune</a></li>
<li><a className="hover:text-gray-900" href="#">Colleges in Chennai</a></li>
</ul>
</div>

<div>
<h4 className="font-semibold text-sm text-gray-900 mb-4">Resources</h4>
<ul className="space-y-3 text-xs text-gray-500">
<li><a className="hover:text-gray-900" href="#">AI Career Test</a></li>
<li><a className="hover:text-gray-900" href="#">College Compare Tool</a></li>
<li><a className="hover:text-gray-900" href="#">Rankings 2024</a></li>
<li><a className="hover:text-gray-900" href="#">Education News</a></li>
<li><a className="hover:text-gray-900" href="#">Write a Review</a></li>
</ul>
</div>
</div>

<div className="border-t border-gray-200 pt-8 mb-8">
<div className="flex flex-col md:flex-row gap-4 items-center justify-between text-xs text-gray-500">
<span className="font-medium text-gray-900 uppercase tracking-widest text-[10px]">Browse Directory</span>
<div className="flex flex-wrap justify-center gap-2">
<a className="hover:text-gray-900" href="#">A</a><span className="text-gray-300">|</span>
<a className="hover:text-gray-900" href="#">B</a><span className="text-gray-300">|</span>
<a className="hover:text-gray-900" href="#">C</a><span className="text-gray-300">|</span>
<a className="hover:text-gray-900" href="#">D</a><span className="text-gray-300">|</span>
<a className="hover:text-gray-900" href="#">E</a><span className="text-gray-300">|</span>
<a className="hover:text-gray-900" href="#">F</a><span className="text-gray-300">|</span>
<a className="hover:text-gray-900" href="#">G</a><span className="text-gray-300">|</span>
<a className="hover:text-gray-900" href="#">H</a><span className="text-gray-300">|</span>
<a className="hover:text-gray-900" href="#">I</a><span className="text-gray-300">|</span>
<a className="hover:text-gray-900" href="#">J</a><span className="text-gray-300">|</span>
<a className="hover:text-gray-900" href="#">K</a><span className="text-gray-300">|</span>
<a className="hover:text-gray-900" href="#">L</a><span className="text-gray-300">|</span>
<a className="hover:text-gray-900" href="#">M</a><span className="text-gray-300">|</span>
<a className="hover:text-gray-900" href="#">N</a><span className="text-gray-300">|</span>
<a className="hover:text-gray-900" href="#">O</a><span className="text-gray-300">|</span>
<a className="hover:text-gray-900" href="#">P</a><span className="text-gray-300">|</span>
<a className="hover:text-gray-900" href="#">Q</a><span className="text-gray-300">|</span>
<a className="hover:text-gray-900" href="#">R</a><span className="text-gray-300">|</span>
<a className="hover:text-gray-900" href="#">S</a><span className="text-gray-300">|</span>
<a className="hover:text-gray-900" href="#">T</a><span className="text-gray-300">|</span>
<a className="hover:text-gray-900" href="#">U</a><span className="text-gray-300">|</span>
<a className="hover:text-gray-900" href="#">V</a><span className="text-gray-300">|</span>
<a className="hover:text-gray-900" href="#">W</a><span className="text-gray-300">|</span>
<a className="hover:text-gray-900" href="#">X</a><span className="text-gray-300">|</span>
<a className="hover:text-gray-900" href="#">Y</a><span className="text-gray-300">|</span>
<a className="hover:text-gray-900" href="#">Z</a>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
<p>© 2024 EduSearch Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-gray-900" href="#">Privacy Policy</a>
<a className="hover:text-gray-900" href="#">Terms of Service</a>
<a className="hover:text-gray-900" href="#">Sitemap</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
