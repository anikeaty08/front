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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons
        lucide.createIcons();

        // 1. Mobile Filter Toggle
        function toggleMobileFilters() {
            const sidebar = document.getElementById('filters-sidebar');
            const overlay = document.getElementById('mobile-filter-overlay');
            
            if (sidebar.classList.contains('hidden')) {
                sidebar.classList.remove('hidden');
                sidebar.classList.add('block');
                overlay.classList.remove('hidden');
                document.body.style.overflow = 'hidden'; // prevent background scrolling
            } else {
                sidebar.classList.add('hidden');
                sidebar.classList.remove('block');
                overlay.classList.add('hidden');
                document.body.style.overflow = '';
            }
        }

        // 2. Save Job to LocalStorage Toggle
        function toggleSaveJob(btnElement, jobId) {
            const icon = btnElement.querySelector('.save-icon');
            let savedJobs = JSON.parse(localStorage.getItem('savedJobs')) || [];
            
            if (savedJobs.includes(jobId)) {
                // Remove job
                savedJobs = savedJobs.filter(id => id !== jobId);
                icon.setAttribute('fill', 'none');
                icon.classList.remove('text-blue-600');
                btnElement.classList.remove('border-blue-600', 'bg-blue-50');
            } else {
                // Save job
                savedJobs.push(jobId);
                icon.setAttribute('fill', 'currentColor');
                icon.classList.add('text-blue-600');
                btnElement.classList.add('border-blue-600', 'bg-blue-50');
            }
            
            localStorage.setItem('savedJobs', JSON.stringify(savedJobs));
        }

        // Initialize saved state on load
        document.addEventListener('DOMContentLoaded', () => {
            let savedJobs = JSON.parse(localStorage.getItem('savedJobs')) || [];
            // Demo implementation logic mapping buttons manually
            const jobBtns = {
                'job-1': document.querySelectorAll('.save-icon')[0],
                'job-2': document.querySelectorAll('.save-icon')[1],
                'job-3': document.querySelectorAll('.save-icon')[2]
            };
            
            savedJobs.forEach(id => {
                if(jobBtns[id]) {
                    const icon = jobBtns[id];
                    const btnElement = icon.closest('button');
                    icon.setAttribute('fill', 'currentColor');
                    icon.classList.add('text-blue-600');
                    btnElement.classList.add('border-blue-600', 'bg-blue-50');
                }
            });
        });

        // 3. Fake Search Trigger
        function triggerSearch() {
            const btn = document.querySelector('#hero-search button');
            const originalText = btn.innerHTML;
            btn.innerHTML = `<i data-lucide="loader-2" class="w-5 h-5 animate-spin"></i> Searching...`;
            lucide.createIcons();
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                document.querySelector('.job-card').scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 800);
        }

        // 4. Load More Simulation
        function loadMoreJobs() {
            const btn = document.getElementById('load-more-btn');
            const originalContent = btn.innerHTML;
            btn.innerHTML = `<i data-lucide="loader-2" class="w-5 h-5 animate-spin"></i> Loading...`;
            lucide.createIcons();
            
            setTimeout(() => {
                btn.innerHTML = originalContent;
                // Add a dummy job to showcase appending
                const container = document.querySelector('main');
                const newJob = document.querySelector('.job-card').cloneNode(true);
                // Reset save icon state for clone
                const saveIcon = newJob.querySelector('.save-icon');
                saveIcon.setAttribute('fill', 'none');
                saveIcon.classList.remove('text-blue-600');
                saveIcon.closest('button').classList.remove('border-blue-600', 'bg-blue-50');
                saveIcon.closest('button').setAttribute('onclick', "toggleSaveJob(this, 'job-new')");
                
                container.insertBefore(newJob, btn.parentNode);
            }, 1000);
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
      

<nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
<div className="max-w-7xl mx-auto px-4 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
<i data-lucide="graduation-cap" strokeWidth="1.5"></i>
</div>
<span className="text-xl font-semibold tracking-tight text-slate-900">EduCareer</span>
</div>
<div className="hidden md:flex items-center gap-6 text-base font-medium text-slate-600">
<a className="hover:text-blue-600 transition-colors" href="#">Colleges</a>
<a className="hover:text-blue-600 transition-colors" href="#">Courses</a>
<a className="text-blue-600" href="#">Jobs &amp; Internships</a>
<a className="hover:text-blue-600 transition-colors" href="#">Exams</a>
</div>
<button className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium text-base hover:bg-blue-700 transition-colors shadow-sm hidden md:block">
                Login / Register
            </button>
<button className="md:hidden p-2 text-slate-600">
<i data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</nav>

<section className="bg-white pt-16 pb-20 border-b border-gray-200 relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 lg:px-8 text-center relative z-10">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">
                Find Jobs &amp; Internships for Your Career
            </h1>
<p className="mt-5 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
                Explore verified opportunities for students &amp; freshers. Build your career with top companies.
            </p>

<form className="mt-10 max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-sm p-2 flex flex-col md:flex-row items-center gap-2 relative z-20" id="hero-search">

<div className="flex-1 flex items-center px-4 w-full border-b md:border-b-0 md:border-r border-gray-100 py-2 md:py-0">
<i className="w-5 h-5 text-slate-400 shrink-0" data-lucide="search" strokeWidth="1.5"></i>
<input className="w-full px-3 py-2 text-base text-slate-900 focus:outline-none bg-transparent placeholder:text-slate-400" placeholder="Job Title or Skill" type="text"/>
</div>

<div className="flex-1 flex items-center px-4 w-full border-b md:border-b-0 md:border-r border-gray-100 py-2 md:py-0">
<i className="w-5 h-5 text-slate-400 shrink-0" data-lucide="map-pin" strokeWidth="1.5"></i>
<input className="w-full px-3 py-2 text-base text-slate-900 focus:outline-none bg-transparent placeholder:text-slate-400" placeholder="Any Location" type="text"/>
</div>

<div className="flex-1 flex items-center px-4 w-full py-2 md:py-0 relative">
<i className="w-5 h-5 text-slate-400 shrink-0" data-lucide="briefcase" strokeWidth="1.5"></i>
<select className="w-full px-3 py-2 text-base text-slate-900 focus:outline-none bg-transparent appearance-none cursor-pointer">
<option value="">Job Type</option>
<option value="internship">Internship</option>
<option value="fulltime">Full Time</option>
<option value="parttime">Part Time</option>
</select>
<i className="w-4 h-4 text-slate-400 absolute right-4 pointer-events-none" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>

<button className="w-full md:w-auto bg-blue-600 text-white px-8 py-3.5 rounded-xl font-medium text-base hover:bg-blue-700 transition-all active:scale-[0.98] flex shrink-0 items-center justify-center gap-2 shadow-sm" onclick="triggerSearch()" type="button">
                    Search Opportunities
                </button>
</form>

<div className="mt-8 flex flex-wrap justify-center items-center gap-3">
<span className="text-base text-slate-500 font-medium">Trending:</span>
<button className="px-5 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium hover:bg-blue-100 transition-colors border border-blue-100">Internship</button>
<button className="px-5 py-2 rounded-full bg-slate-50 text-slate-700 text-sm font-medium hover:bg-slate-100 transition-colors border border-gray-200">Full Time</button>
<button className="px-5 py-2 rounded-full bg-slate-50 text-slate-700 text-sm font-medium hover:bg-slate-100 transition-colors border border-gray-200">Remote</button>
<button className="px-5 py-2 rounded-full bg-slate-50 text-slate-700 text-sm font-medium hover:bg-slate-100 transition-colors border border-gray-200">Fresher</button>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
<div className="flex items-center justify-between mb-8">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">Explore Career Paths</h2>
<p className="text-base text-slate-600 mt-2">Find roles based on your interests and skills.</p>
</div>
<a className="hidden md:flex items-center gap-1 text-blue-600 font-medium hover:text-blue-700 transition-colors" href="#">
                All Categories <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">

<div className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:border-blue-500 hover:shadow-md transition-all cursor-pointer group">
<div className="w-14 h-14 mx-auto bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="w-7 h-7" data-lucide="monitor" strokeWidth="1.5"></i>
</div>
<h3 className="font-medium text-slate-900 text-base">IT &amp; Software</h3>
<p className="text-xs text-slate-500 mt-1">10,000+ Jobs</p>
</div>
<div className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:border-blue-500 hover:shadow-md transition-all cursor-pointer group">
<div className="w-14 h-14 mx-auto bg-red-50 text-red-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="w-7 h-7" data-lucide="pie-chart" strokeWidth="1.5"></i>
</div>
<h3 className="font-medium text-slate-900 text-base">Marketing</h3>
<p className="text-xs text-slate-500 mt-1">4,500+ Jobs</p>
</div>
<div className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:border-blue-500 hover:shadow-md transition-all cursor-pointer group">
<div className="w-14 h-14 mx-auto bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="w-7 h-7" data-lucide="pen-tool" strokeWidth="1.5"></i>
</div>
<h3 className="font-medium text-slate-900 text-base">Design</h3>
<p className="text-xs text-slate-500 mt-1">2,300+ Jobs</p>
</div>
<div className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:border-blue-500 hover:shadow-md transition-all cursor-pointer group">
<div className="w-14 h-14 mx-auto bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="w-7 h-7" data-lucide="calculator" strokeWidth="1.5"></i>
</div>
<h3 className="font-medium text-slate-900 text-base">Finance</h3>
<p className="text-xs text-slate-500 mt-1">3,100+ Jobs</p>
</div>
<div className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:border-blue-500 hover:shadow-md transition-all cursor-pointer group">
<div className="w-14 h-14 mx-auto bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="w-7 h-7" data-lucide="users" strokeWidth="1.5"></i>
</div>
<h3 className="font-medium text-slate-900 text-base">Human Res.</h3>
<p className="text-xs text-slate-500 mt-1">1,800+ Jobs</p>
</div>
<div className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:border-blue-500 hover:shadow-md transition-all cursor-pointer group">
<div className="w-14 h-14 mx-auto bg-cyan-50 text-cyan-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="w-7 h-7" data-lucide="settings" strokeWidth="1.5"></i>
</div>
<h3 className="font-medium text-slate-900 text-base">Engineering</h3>
<p className="text-xs text-slate-500 mt-1">5,400+ Jobs</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 lg:px-8 mb-16">
<div className="bg-[#F0FDF4] border border-green-200 rounded-3xl p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm relative overflow-hidden">

<div className="absolute -right-20 -top-20 w-64 h-64 bg-green-200 rounded-full blur-3xl opacity-40"></div>
<div className="max-w-xl relative z-10">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">Not Sure What to Study or Do? Let Us Guide You.</h2>
<div className="mt-6 space-y-4">
<div className="flex items-start gap-3">
<i className="w-6 h-6 text-green-600 shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<p className="text-base text-slate-700">Take our 5-minute AI career assessment test.</p>
</div>
<div className="flex items-start gap-3">
<i className="w-6 h-6 text-green-600 shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<p className="text-base text-slate-700">Get personalized job and skill recommendations.</p>
</div>
<div className="flex items-start gap-3">
<i className="w-6 h-6 text-green-600 shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<p className="text-base text-slate-700">Connect with expert counselors for free guidance.</p>
</div>
</div>
<button className="mt-8 bg-green-600 text-white px-6 py-3.5 rounded-xl font-medium text-base hover:bg-green-700 transition-colors shadow-sm flex items-center gap-2">
                    Take Career Test <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
<div className="w-full md:w-1/3 bg-white/60 backdrop-blur-sm border border-green-100 rounded-2xl p-8 flex items-center justify-center min-h-[250px] relative z-10 shadow-sm">
<div className="text-center">
<i className="w-16 h-16 text-green-600 mx-auto opacity-80" data-lucide="bot" strokeWidth="1.5"></i>
<p className="mt-4 text-base font-medium text-slate-400">AI Illustration Placeholder</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 lg:px-8 pb-24">

<div className="lg:hidden flex items-center justify-between mb-6">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">All Jobs</h2>
<button className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg shadow-sm text-slate-700 font-medium" onclick="toggleMobileFilters()">
<i className="w-5 h-5" data-lucide="sliders-horizontal" strokeWidth="1.5"></i> Filters
            </button>
</div>
<div className="flex flex-col lg:flex-row gap-8 items-start relative">

<aside className="w-full lg:w-1/4 bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hidden lg:block lg:sticky lg:top-24 z-30 fixed inset-0 overflow-y-auto lg:overflow-visible" id="filters-sidebar">
<div className="flex items-center justify-between mb-6 lg:hidden">
<h3 className="text-xl font-semibold tracking-tight text-slate-900">Filters</h3>
<button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg" onclick="toggleMobileFilters()">
<i className="w-6 h-6" data-lucide="x" strokeWidth="1.5"></i>
</button>
</div>
<div className="space-y-8">

<div>
<h4 className="text-base font-semibold text-slate-900 mb-4">Job Type</h4>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center">
<input checked="" className="peer appearance-none w-5 h-5 border border-gray-300 rounded bg-white checked:bg-blue-600 checked:border-blue-600 transition-colors cursor-pointer" type="checkbox"/>
<i className="w-3.5 h-3.5 text-white absolute pointer-events-none hidden peer-checked:block" data-lucide="check" strokeWidth="3"></i>
</div>
<span className="text-base text-slate-700 group-hover:text-slate-900">Full Time</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center">
<input checked="" className="peer appearance-none w-5 h-5 border border-gray-300 rounded bg-white checked:bg-blue-600 checked:border-blue-600 transition-colors cursor-pointer" type="checkbox"/>
<i className="w-3.5 h-3.5 text-white absolute pointer-events-none hidden peer-checked:block" data-lucide="check" strokeWidth="3"></i>
</div>
<span className="text-base text-slate-700 group-hover:text-slate-900">Internship</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center">
<input className="peer appearance-none w-5 h-5 border border-gray-300 rounded bg-white checked:bg-blue-600 checked:border-blue-600 transition-colors cursor-pointer" type="checkbox"/>
<i className="w-3.5 h-3.5 text-white absolute pointer-events-none hidden peer-checked:block" data-lucide="check" strokeWidth="3"></i>
</div>
<span className="text-base text-slate-700 group-hover:text-slate-900">Part Time</span>
</label>
</div>
</div>
<hr className="border-gray-100"/>

<div>
<h4 className="text-base font-semibold text-slate-900 mb-4">Work Mode</h4>
<div className="space-y-3">
<label className="flex items-center justify-between cursor-pointer group">
<span className="text-base text-slate-700 group-hover:text-slate-900">Remote Only</span>
<div className="relative">
<input className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 transition-colors"></div>
</div>
</label>
</div>
</div>
<hr className="border-gray-100"/>

<div>
<h4 className="text-base font-semibold text-slate-900 mb-4 flex justify-between">
                            Salary Range <span className="text-base text-blue-600 font-medium" id="salary-val">₹0 - ₹10L+</span>
</h4>
<input className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600 focus:outline-none" max="10" min="0" oninput="document.getElementById('salary-val').innerText = '₹0 - ₹' + this.value + 'L+'" step="1" type="range"/>
</div>
<hr className="border-gray-100"/>

<div>
<h4 className="text-base font-semibold text-slate-900 mb-4">Experience</h4>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center">
<input checked="" className="peer appearance-none w-5 h-5 border border-gray-300 rounded bg-white checked:bg-blue-600 checked:border-blue-600 transition-colors cursor-pointer" type="checkbox"/>
<i className="w-3.5 h-3.5 text-white absolute pointer-events-none hidden peer-checked:block" data-lucide="check" strokeWidth="3"></i>
</div>
<span className="text-base text-slate-700 group-hover:text-slate-900">Fresher (0 Years)</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center">
<input className="peer appearance-none w-5 h-5 border border-gray-300 rounded bg-white checked:bg-blue-600 checked:border-blue-600 transition-colors cursor-pointer" type="checkbox"/>
<i className="w-3.5 h-3.5 text-white absolute pointer-events-none hidden peer-checked:block" data-lucide="check" strokeWidth="3"></i>
</div>
<span className="text-base text-slate-700 group-hover:text-slate-900">1-3 Years</span>
</label>
</div>
</div>

<div className="flex gap-3 pt-4">
<button className="flex-1 bg-blue-600 text-white py-2.5 rounded-lg font-medium text-base hover:bg-blue-700 transition-colors">Apply</button>
<button className="flex-1 bg-white border border-gray-300 text-slate-700 py-2.5 rounded-lg font-medium text-base hover:bg-slate-50 transition-colors">Clear</button>
</div>
</div>
</aside>

<div className="fixed inset-0 bg-slate-900/50 z-20 hidden lg:hidden" id="mobile-filter-overlay" onclick="toggleMobileFilters()"></div>

<main className="w-full lg:w-3/4 flex flex-col gap-6">
<div className="hidden lg:flex items-center justify-between mb-2">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Recommended Jobs</h2>
<span className="text-base text-slate-500">Showing 242 jobs</span>
</div>

<div className="job-card bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-blue-300 transition-all">
<div className="flex flex-col sm:flex-row gap-5 items-start">

<div className="w-16 h-16 rounded-xl border border-gray-100 flex items-center justify-center shrink-0 p-2 bg-slate-50">
<i className="w-8 h-8 text-blue-600" data-lucide="briefcase" strokeWidth="1.5"></i>
</div>

<div className="flex-1 w-full">
<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
<div>
<div className="flex flex-wrap items-center gap-2 mb-1.5">
<h3 className="text-xl font-semibold tracking-tight text-slate-900">Frontend Developer</h3>
<span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-medium flex items-center gap-1 border border-green-200">
<i className="w-3.5 h-3.5" data-lucide="check-circle-2" strokeWidth="2"></i> Verified
                                        </span>
<span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded text-xs font-medium flex items-center gap-1 border border-blue-100">
<i className="w-3.5 h-3.5" data-lucide="zap" strokeWidth="2"></i> Easy Apply
                                        </span>
</div>
<p className="text-base font-medium text-blue-600 mb-4">TechCorp Solutions Inc.</p>

<div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-4">
<div className="flex items-center gap-2 text-base text-slate-600">
<i className="w-4 h-4 text-slate-400" data-lucide="map-pin" strokeWidth="1.5"></i> Bangalore, India
                                        </div>
<div className="flex items-center gap-2 text-base text-slate-600">
<i className="w-4 h-4 text-slate-400" data-lucide="indian-rupee" strokeWidth="1.5"></i> 6L - 10L / yr
                                        </div>
<div className="flex items-center gap-2 text-base text-slate-600">
<i className="w-4 h-4 text-slate-400" data-lucide="clock" strokeWidth="1.5"></i> 2 days ago
                                        </div>
</div>

<div className="flex flex-wrap items-center gap-2 mb-6">
<span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-md text-xs font-medium">Full Time</span>
<span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-md text-xs font-medium">Remote</span>
<span className="border border-gray-200 text-slate-600 px-3 py-1 rounded-md text-xs font-medium">React.js</span>
<span className="border border-gray-200 text-slate-600 px-3 py-1 rounded-md text-xs font-medium">Tailwind</span>
</div>
</div>

<div className="flex sm:flex-col gap-3 w-full sm:w-auto shrink-0">
<button className="flex-1 sm:flex-none bg-blue-600 text-white px-6 py-2.5 rounded-xl font-medium text-base hover:bg-blue-700 transition-colors shadow-sm text-center">
                                        Apply Now
                                    </button>
<button className="flex-none bg-white border border-gray-300 text-slate-600 p-2.5 rounded-xl hover:bg-slate-50 transition-colors flex items-center justify-center shadow-sm group" onclick="toggleSaveJob(this, 'job-1')">
<i className="w-5 h-5 group-hover:text-blue-600 transition-colors save-icon" data-lucide="bookmark" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="job-card bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-blue-300 transition-all relative overflow-hidden">

<div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-medium px-4 py-1 rounded-bl-xl shadow-sm">
                        Top Internship
                    </div>
<div className="flex flex-col sm:flex-row gap-5 items-start mt-2 sm:mt-0">
<div className="w-16 h-16 rounded-xl border border-gray-100 flex items-center justify-center shrink-0 p-2 bg-slate-50">
<i className="w-8 h-8 text-indigo-600" data-lucide="layout-template" strokeWidth="1.5"></i>
</div>
<div className="flex-1 w-full">
<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
<div>
<div className="flex flex-wrap items-center gap-2 mb-1.5">
<h3 className="text-xl font-semibold tracking-tight text-slate-900">UI/UX Design Intern</h3>
<span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-medium flex items-center gap-1 border border-green-200">
<i className="w-3.5 h-3.5" data-lucide="check-circle-2" strokeWidth="2"></i> Verified
                                        </span>
</div>
<p className="text-base font-medium text-blue-600 mb-4">Creative Minds Studio</p>
<div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-4">
<div className="flex items-center gap-2 text-base text-slate-600">
<i className="w-4 h-4 text-slate-400" data-lucide="map-pin" strokeWidth="1.5"></i> Mumbai, India
                                        </div>
<div className="flex items-center gap-2 text-base text-slate-600">
<i className="w-4 h-4 text-slate-400" data-lucide="indian-rupee" strokeWidth="1.5"></i> 15K - 20K / mo
                                        </div>
<div className="flex items-center gap-2 text-base text-slate-600">
<i className="w-4 h-4 text-slate-400" data-lucide="clock" strokeWidth="1.5"></i> 5 hrs ago
                                        </div>
</div>
<div className="flex flex-wrap items-center gap-2 mb-6">
<span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-md text-xs font-medium border border-blue-100">Internship</span>
<span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-md text-xs font-medium">On-site</span>
<span className="border border-gray-200 text-slate-600 px-3 py-1 rounded-md text-xs font-medium">Figma</span>
</div>
</div>
<div className="flex sm:flex-col gap-3 w-full sm:w-auto shrink-0">
<button className="flex-1 sm:flex-none bg-blue-600 text-white px-6 py-2.5 rounded-xl font-medium text-base hover:bg-blue-700 transition-colors shadow-sm text-center">
                                        Apply Now
                                    </button>
<button className="flex-none bg-white border border-gray-300 text-slate-600 p-2.5 rounded-xl hover:bg-slate-50 transition-colors flex items-center justify-center shadow-sm group" onclick="toggleSaveJob(this, 'job-2')">
<i className="w-5 h-5 group-hover:text-blue-600 transition-colors save-icon" data-lucide="bookmark" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="job-card bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-blue-300 transition-all">
<div className="flex flex-col sm:flex-row gap-5 items-start">
<div className="w-16 h-16 rounded-xl border border-gray-100 flex items-center justify-center shrink-0 p-2 bg-slate-50">
<i className="w-8 h-8 text-emerald-600" data-lucide="database" strokeWidth="1.5"></i>
</div>
<div className="flex-1 w-full">
<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
<div>
<div className="flex flex-wrap items-center gap-2 mb-1.5">
<h3 className="text-xl font-semibold tracking-tight text-slate-900">Data Analyst Fresher</h3>
<span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded text-xs font-medium flex items-center gap-1 border border-blue-100">
<i className="w-3.5 h-3.5" data-lucide="zap" strokeWidth="2"></i> Easy Apply
                                        </span>
</div>
<p className="text-base font-medium text-blue-600 mb-4">FinTech Global</p>
<div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-4">
<div className="flex items-center gap-2 text-base text-slate-600">
<i className="w-4 h-4 text-slate-400" data-lucide="map-pin" strokeWidth="1.5"></i> Delhi NCR, India
                                        </div>
<div className="flex items-center gap-2 text-base text-slate-600">
<i className="w-4 h-4 text-slate-400" data-lucide="indian-rupee" strokeWidth="1.5"></i> 4L - 6L / yr
                                        </div>
<div className="flex items-center gap-2 text-base text-slate-600">
<i className="w-4 h-4 text-slate-400" data-lucide="clock" strokeWidth="1.5"></i> 1 day ago
                                        </div>
</div>
<div className="flex flex-wrap items-center gap-2 mb-6">
<span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-md text-xs font-medium">Full Time</span>
<span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-md text-xs font-medium">Hybrid</span>
<span className="border border-gray-200 text-slate-600 px-3 py-1 rounded-md text-xs font-medium">SQL</span>
<span className="border border-gray-200 text-slate-600 px-3 py-1 rounded-md text-xs font-medium">Python</span>
</div>
</div>
<div className="flex sm:flex-col gap-3 w-full sm:w-auto shrink-0">
<button className="flex-1 sm:flex-none bg-blue-600 text-white px-6 py-2.5 rounded-xl font-medium text-base hover:bg-blue-700 transition-colors shadow-sm text-center">
                                        Apply Now
                                    </button>
<button className="flex-none bg-white border border-gray-300 text-slate-600 p-2.5 rounded-xl hover:bg-slate-50 transition-colors flex items-center justify-center shadow-sm group" onclick="toggleSaveJob(this, 'job-3')">
<i className="w-5 h-5 group-hover:text-blue-600 transition-colors save-icon" data-lucide="bookmark" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="text-center mt-4">
<button className="bg-white border border-gray-300 text-slate-700 px-8 py-3 rounded-xl font-medium text-base hover:bg-slate-50 hover:text-blue-600 transition-colors shadow-sm inline-flex items-center gap-2" id="load-more-btn" onclick="loadMoreJobs()">
                        Load More Jobs <i className="w-5 h-5" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
</div>
</main>
</div>
</section>

<section className="mt-auto bg-gradient-to-r from-indigo-600 to-blue-600 border-t border-indigo-700">
<div className="max-w-5xl mx-auto px-4 py-16 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Fast-track your career today</h2>
<p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">Take our free AI assessment to discover your ideal career path, or chat with our experts for immediate guidance.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-white text-blue-600 px-8 py-3.5 rounded-xl font-semibold text-base hover:bg-blue-50 transition-colors shadow-lg flex items-center justify-center gap-2">
<i className="w-5 h-5 text-blue-600" data-lucide="sparkles" strokeWidth="1.5"></i> Take AI Test
                </button>
<button className="w-full sm:w-auto bg-[#25D366] text-white px-8 py-3.5 rounded-xl font-semibold text-base hover:bg-[#20bd5a] transition-colors shadow-lg flex items-center justify-center gap-2">
<i className="w-5 h-5" data-lucide="message-circle" strokeWidth="1.5"></i> WhatsApp Us
                </button>
</div>
</div>
</section>



    </>
  );
}
