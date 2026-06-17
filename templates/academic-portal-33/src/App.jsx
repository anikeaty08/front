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



        // Navigation Logic
        function navigateTo(pageId) {
            // Hide all sections
            document.querySelectorAll('.page-section').forEach(section => {
                section.classList.remove('active');
            });
            
            // Show target section
            document.getElementById(pageId).classList.add('active');
            
            // Close mobile menu if open
            const mobileMenu = document.getElementById('mobile-menu');
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });

            // Update Active State on Desktop Nav
            document.querySelectorAll('.nav-link').forEach(link => {
                if(link.dataset.target === pageId) {
                    link.classList.add('text-indigo-600', 'bg-slate-50');
                    link.classList.remove('text-slate-600');
                } else {
                    link.classList.remove('text-indigo-600', 'bg-slate-50');
                    link.classList.add('text-slate-600');
                }
            });
        }

        // Mobile Menu Toggle
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        }

        // Initialize active state
        navigateTo('home');
    
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
      

<nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between h-16">

<div className="flex items-center gap-3 cursor-pointer" onclick="navigateTo('home')">
<div className="bg-indigo-600 text-white p-1.5 rounded-lg">
<iconify-icon icon="solar:hat-graduation-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-slate-900 font-semibold text-lg tracking-tight leading-none">ACADEMIA</span>
<span className="text-xs text-slate-500 font-medium tracking-wide uppercase mt-0.5">BCA Portal 2026</span>
</div>
</div>

<div className="hidden md:flex items-center space-x-1">
<button className="nav-link px-4 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-indigo-600 hover:bg-slate-50 transition-colors" data-target="home" onclick="navigateTo('home')">Home</button>
<button className="nav-link px-4 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-indigo-600 hover:bg-slate-50 transition-colors" data-target="subjects" onclick="navigateTo('subjects')">Subjects</button>
<button className="nav-link px-4 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-indigo-600 hover:bg-slate-50 transition-colors" data-target="notes" onclick="navigateTo('notes')">Notes</button>
<button className="nav-link px-4 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-indigo-600 hover:bg-slate-50 transition-colors" data-target="contact" onclick="navigateTo('contact')">Contact</button>
<div className="h-4 w-px bg-slate-200 mx-2"></div>
<button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-all shadow-sm shadow-indigo-200" onclick="navigateTo('upload')">
<iconify-icon icon="solar:upload-minimalistic-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span>Upload</span>
</button>
</div>

<div className="flex items-center md:hidden">
<button className="text-slate-500 hover:text-indigo-600 p-2" onclick="toggleMobileMenu()">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg" id="mobile-menu">
<div className="px-4 pt-2 pb-4 space-y-1">
<button className="block w-full text-left px-3 py-3 rounded-md text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-indigo-600" onclick="navigateTo('home')">Home</button>
<button className="block w-full text-left px-3 py-3 rounded-md text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-indigo-600" onclick="navigateTo('subjects')">Subjects</button>
<button className="block w-full text-left px-3 py-3 rounded-md text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-indigo-600" onclick="navigateTo('notes')">Notes</button>
<button className="block w-full text-left px-3 py-3 rounded-md text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-indigo-600" onclick="navigateTo('contact')">Contact</button>
<button className="block w-full text-left px-3 py-3 rounded-md text-base font-medium text-indigo-600 bg-indigo-50 mt-2" onclick="navigateTo('upload')">Upload Notes</button>
</div>
</div>
</nav>

<main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">

<section className="page-section active" id="home">

<div className="relative overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm p-8 md:p-16 mb-12">
<div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-indigo-50 blur-3xl opacity-50"></div>
<div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-cyan-50 blur-3xl opacity-50"></div>
<div className="relative max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                        Academic Session 2026-27 Live
                    </div>
<h1 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-6">
                        Online Notes Sharing for <br/> <span className="text-indigo-600">BCA Students</span>
</h1>
<p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-xl">
                        Smart access to subject-wise academic notes, previous papers, and assignments. A centralized digital campus for the Department of Computer Applications.
                    </p>
<div className="flex flex-wrap gap-4">
<button className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-sm shadow-indigo-200" onclick="navigateTo('notes')">
<span>Browse Repository</span>
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="2" width="16"></iconify-icon>
</button>
<button className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-slate-200 text-sm font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 transition-colors" onclick="navigateTo('upload')">
<span>Teacher Upload</span>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">

<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
<iconify-icon icon="solar:folder-with-files-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Subject-wise Notes</h3>
<p className="text-sm text-slate-500 leading-relaxed">Organized content structure strictly following the 2026 BCA syllabus.</p>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
<iconify-icon icon="solar:cloud-download-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Easy Downloads</h3>
<p className="text-sm text-slate-500 leading-relaxed">Direct access to PDF and DOC files without redirects or waiting time.</p>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
<iconify-icon icon="solar:devices-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Centralized Platform</h3>
<p className="text-sm text-slate-500 leading-relaxed">Unified portal for all semesters, labs, and theoretical resources.</p>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center mb-4">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Time Saving</h3>
<p className="text-sm text-slate-500 leading-relaxed">Verified content uploaded by faculty to ensure exam relevance.</p>
</div>
</div>

<div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center gap-8 shadow-xl shadow-slate-200">
<div className="flex-1">
<h2 className="text-2xl font-semibold text-white mb-4 tracking-tight">About the Digital Initiative</h2>
<p className="text-slate-300 leading-relaxed mb-6">
                        This platform serves as the official digital repository for the Bachelor of Computer Applications program. It is designed to bridge the gap between classroom lectures and digital self-study, ensuring every student has equal access to high-quality learning materials endorsed by the department.
                    </p>
<div className="flex items-center gap-4 text-xs text-slate-400 font-medium uppercase tracking-wider">
<span className="flex items-center gap-1"><iconify-icon icon="solar:check-circle-linear"></iconify-icon> Faculty Verified</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:shield-check-linear"></iconify-icon> Secure Access</span>
</div>
</div>
<div className="hidden md:block w-px h-32 bg-slate-800"></div>
<div className="flex-shrink-0 text-center">
<div className="text-4xl font-semibold text-indigo-400 mb-1">2,500+</div>
<div className="text-sm text-slate-400">Resources Uploaded</div>
</div>
</div>
</section>

<section className="page-section" id="notes">
<div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
<div>
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight">Academic Resources</h2>
<p className="text-sm text-slate-500 mt-1">Browse and download course materials.</p>
</div>
<div className="w-full md:w-64">
<label className="sr-only">Filter by Subject</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
<iconify-icon icon="solar:filter-linear" width="16"></iconify-icon>
</div>
<select className="block w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none appearance-none cursor-pointer">
<option>All Subjects</option>
<option>Programming in C</option>
<option>Data Structures</option>
<option>DBMS</option>
<option>Operating Systems</option>
<option>Web Technologies</option>
</select>
<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white rounded-xl border border-slate-200 p-5 hover:border-indigo-300 hover:shadow-md transition-all duration-200">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-2">
<div className="p-2 bg-red-50 text-red-500 rounded-lg">
<iconify-icon icon="solar:file-text-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">PDF</span>
</div>
<span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full font-medium">Programming in C</span>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">Pointers and Memory Management</h3>
<div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
<iconify-icon icon="solar:calendar-linear" width="14"></iconify-icon>
<span>Oct 12, 2025</span>
</div>
<button className="w-full flex items-center justify-center gap-2 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:download-minimalistic-linear" width="16"></iconify-icon>
                        Download
                    </button>
</div>

<div className="group bg-white rounded-xl border border-slate-200 p-5 hover:border-indigo-300 hover:shadow-md transition-all duration-200">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-2">
<div className="p-2 bg-blue-50 text-blue-500 rounded-lg">
<iconify-icon icon="solar:document-text-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">DOC</span>
</div>
<span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full font-medium">DBMS</span>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">SQL Normalization Forms (1NF-BCNF)</h3>
<div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
<iconify-icon icon="solar:calendar-linear" width="14"></iconify-icon>
<span>Oct 15, 2025</span>
</div>
<button className="w-full flex items-center justify-center gap-2 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:download-minimalistic-linear" width="16"></iconify-icon>
                        Download
                    </button>
</div>

<div className="group bg-white rounded-xl border border-slate-200 p-5 hover:border-indigo-300 hover:shadow-md transition-all duration-200">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-2">
<div className="p-2 bg-red-50 text-red-500 rounded-lg">
<iconify-icon icon="solar:file-text-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">PDF</span>
</div>
<span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full font-medium">Web Tech</span>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">ReactJS Component Lifecycle</h3>
<div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
<iconify-icon icon="solar:calendar-linear" width="14"></iconify-icon>
<span>Nov 02, 2025</span>
</div>
<button className="w-full flex items-center justify-center gap-2 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:download-minimalistic-linear" width="16"></iconify-icon>
                        Download
                    </button>
</div>

<div className="group bg-white rounded-xl border border-slate-200 p-5 hover:border-indigo-300 hover:shadow-md transition-all duration-200">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-2">
<div className="p-2 bg-red-50 text-red-500 rounded-lg">
<iconify-icon icon="solar:file-text-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">PDF</span>
</div>
<span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full font-medium">Data Structures</span>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">Binary Trees &amp; Graphs</h3>
<div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
<iconify-icon icon="solar:calendar-linear" width="14"></iconify-icon>
<span>Sep 28, 2025</span>
</div>
<button className="w-full flex items-center justify-center gap-2 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:download-minimalistic-linear" width="16"></iconify-icon>
                        Download
                    </button>
</div>
</div>
</section>

<section className="page-section" id="subjects">
<div className="mb-8">
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight">Curriculum Subjects</h2>
<p className="text-sm text-slate-500 mt-1">Select a subject to view specific modules.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white rounded-xl border border-slate-200 p-6 hover:border-indigo-400 hover:shadow-lg transition-all duration-300 group cursor-pointer" onclick="navigateTo('notes')">
<div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:code-square-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-1">Programming in C</h3>
<p className="text-xs text-slate-500 mb-4 line-clamp-2">Fundamentals of algorithms, syntax, pointers, and memory handling.</p>
<div className="text-indigo-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        View Notes <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 p-6 hover:border-indigo-400 hover:shadow-lg transition-all duration-300 group cursor-pointer" onclick="navigateTo('notes')">
<div className="w-12 h-12 bg-cyan-50 text-cyan-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:structure-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-1">Data Structures</h3>
<p className="text-xs text-slate-500 mb-4 line-clamp-2">Arrays, stacks, queues, linked lists, trees, and hashing techniques.</p>
<div className="text-cyan-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        View Notes <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 p-6 hover:border-indigo-400 hover:shadow-lg transition-all duration-300 group cursor-pointer" onclick="navigateTo('notes')">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:database-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-1">DBMS</h3>
<p className="text-xs text-slate-500 mb-4 line-clamp-2">Relational databases, SQL queries, normalization, and transaction control.</p>
<div className="text-blue-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        View Notes <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 p-6 hover:border-indigo-400 hover:shadow-lg transition-all duration-300 group cursor-pointer" onclick="navigateTo('notes')">
<div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:laptop-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-1">Operating Systems</h3>
<p className="text-xs text-slate-500 mb-4 line-clamp-2">Process management, memory management, scheduling, and file systems.</p>
<div className="text-purple-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        View Notes <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 p-6 hover:border-indigo-400 hover:shadow-lg transition-all duration-300 group cursor-pointer" onclick="navigateTo('notes')">
<div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:globe-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-1">Web Technologies</h3>
<p className="text-xs text-slate-500 mb-4 line-clamp-2">HTML5, CSS3, JavaScript, React basics, and server-side scripting.</p>
<div className="text-orange-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        View Notes <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="page-section" id="upload">
<div className="max-w-2xl mx-auto">
<div className="text-center mb-8">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 mb-4">
<iconify-icon icon="solar:cloud-upload-linear" width="24"></iconify-icon>
</div>
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight">Upload Materials</h2>
<p className="text-sm text-slate-500 mt-2">Contribute to the departmental knowledge base.</p>
</div>

<div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6 flex items-start gap-3">
<iconify-icon className="text-blue-600 mt-0.5" icon="solar:info-circle-linear" width="20"></iconify-icon>
<div>
<h4 className="text-sm font-medium text-blue-800">Authorization Required</h4>
<p className="text-xs text-blue-600 mt-1">Only authorized teachers and faculty members can upload notes to this portal. Student submissions require moderation.</p>
</div>
</div>
<div className="bg-white rounded-xl border border-slate-200 p-6 md:p-8 shadow-sm">
<form className="space-y-5" onsubmit="event.preventDefault(); alert('Upload functionality is disabled in this demo.');">
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Select Subject</label>
<div className="relative">
<select className="block w-full pl-3 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none appearance-none">
<option>Programming in C</option>
<option>Data Structures</option>
<option>DBMS</option>
<option>Operating Systems</option>
<option>Web Technologies</option>
</select>
<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="14"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Resource Title</label>
<input className="block w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none" placeholder="e.g. Unit 3 - Sorting Algorithms" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Upload File (PDF/DOC)</label>
<label className="flex justify-center w-full h-32 px-4 transition bg-slate-50 border-2 border-slate-200 border-dashed rounded-lg appearance-none cursor-pointer hover:border-indigo-300 hover:bg-white focus:outline-none">
<span className="flex items-center space-x-2">
<iconify-icon className="text-slate-400" icon="solar:upload-linear" width="24"></iconify-icon>
<span className="font-medium text-slate-500 text-sm">Drop files to Attach, or <span className="text-indigo-600 underline">browse</span></span>
</span>
<input className="hidden" name="file_upload" type="file"/>
</label>
</div>
<button className="w-full bg-indigo-600 text-white font-medium py-2.5 rounded-lg hover:bg-indigo-700 transition-colors shadow-sm shadow-indigo-200" type="submit">
                            Upload Securely
                        </button>
</form>
</div>
</div>
</section>

<section className="page-section" id="contact">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">

<div>
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-4">Contact Administration</h2>
<p className="text-slate-500 mb-8 leading-relaxed">
                        For technical issues regarding the portal or to report missing content, please reach out to the department administrator.
                    </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Department of Computer Applications</h4>
<p className="text-sm text-slate-500 mt-1">Block C, 3rd Floor, Tech Campus<br/>Academic City, 500001</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Email Support</h4>
<p className="text-sm text-slate-500 mt-1">support@bcanotes.edu</p>
<p className="text-sm text-slate-500">admin.dept@bcanotes.edu</p>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 p-6 md:p-8 shadow-sm">
<form className="space-y-4" onsubmit="event.preventDefault(); alert('Message sent to administration.');">
<div>
<label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Full Name</label>
<input className="block w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm text-slate-900 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 outline-none" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Student Email</label>
<input className="block w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm text-slate-900 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 outline-none" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Message</label>
<textarea className="block w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm text-slate-900 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 outline-none resize-none" required="" rows="4"></textarea>
</div>
<button className="w-full bg-slate-900 text-white font-medium py-2.5 rounded-lg hover:bg-slate-800 transition-colors" type="submit">
                            Send Message
                        </button>
</form>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-200 py-8 mt-auto">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-center md:text-left">
<span className="text-sm font-semibold text-slate-900">Demo College of Science &amp; Technology</span>
<p className="text-xs text-slate-500 mt-1">Copyright © 2026. All rights reserved.</p>
</div>
<div className="flex items-center gap-6">
<a className="text-xs text-slate-500 hover:text-indigo-600 transition-colors" href="#">Privacy Policy</a>
<a className="text-xs text-slate-500 hover:text-indigo-600 transition-colors" href="#">Terms of Usage</a>
<a className="text-xs text-slate-500 hover:text-indigo-600 transition-colors" href="mailto:support@bcanotes.edu">Support</a>
</div>
</div>
</footer>


    </>
  );
}
