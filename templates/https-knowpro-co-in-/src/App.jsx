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
      
<header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/80 border-b border-zinc-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-xl font-semibold tracking-tight text-zinc-900 flex items-center gap-2" href="#" onclick="navigate('home')">
<div className="w-6 h-6 bg-zinc-900 rounded-md flex items-center justify-center text-white text-xs">KP</div>
                    KNOWPRO
                </a>
<nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-600">
<a className="hover:text-zinc-900 transition-colors" href="#" onclick="navigate('certifications')">Certifications</a>
<a className="hover:text-zinc-900 transition-colors" href="#" onclick="navigate('bootcamps')">Bootcamps</a>
<a className="hover:text-zinc-900 transition-colors" href="#" onclick="navigate('universities')">Universities</a>
<a className="hover:text-zinc-900 transition-colors" href="#" onclick="navigate('corporate')">Corporate</a>
<a className="hover:text-zinc-900 transition-colors" href="#" onclick="navigate('blog')">Insights</a>
</nav>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-zinc-600 hover:text-zinc-900" href="#" onclick="navigate('contact')">Contact</a>
<button className="bg-zinc-900 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-zinc-800 transition-colors shadow-sm" onclick="navigate('contact')">
                    Book Consultation
                </button>
</div>
</div>
</header>
<main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
<section className="view fade-in" id="view-home">
<div className="text-center max-w-3xl mx-auto mb-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-medium text-zinc-600 mb-6">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
                    Part of Knowledge Pro Private Limited
                </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-zinc-900 mb-6 leading-tight">
                    Become Globally Certified with Industry-Recognized Technology Programs.
                </h1>
<p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                    Certification bootcamps designed for students, universities, and professionals. Gain the industry-ready skills needed for career growth.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-zinc-900 text-white text-base font-medium px-6 py-3 rounded-md hover:bg-zinc-800 transition-colors shadow-sm" onclick="navigate('certifications')">
                        Explore Certifications
                    </button>
<button className="w-full sm:w-auto bg-white border border-zinc-200 text-zinc-900 text-base font-medium px-6 py-3 rounded-md hover:bg-zinc-50 transition-colors shadow-sm" onclick="navigate('universities')">
                        Partner With Us
                    </button>
</div>
</div>
<div className="mb-24 text-center">
<p className="text-sm font-medium text-zinc-500 mb-8 uppercase tracking-widest">Trusted by Engineering Colleges &amp; Corporate Partners</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">
<div className="text-xl font-semibold tracking-tight">TECHUNIV</div>
<div className="text-xl font-semibold tracking-tight">GLOBAL ENG</div>
<div className="text-xl font-semibold tracking-tight">CORP TRAIN</div>
<div className="text-xl font-semibold tracking-tight">INNOVATE INST</div>
</div>
</div>
<div className="mb-24">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
<div className="w-10 h-10 bg-zinc-50 rounded-lg border border-zinc-100 flex items-center justify-center mb-4">
<iconify-icon className="text-xl text-zinc-700" icon="solar:global-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight mb-2">Global Certification Prep</h3>
<p className="text-sm text-zinc-600">Structured pathways to clear globally recognized technology exams.</p>
</div>
<div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
<div className="w-10 h-10 bg-zinc-50 rounded-lg border border-zinc-100 flex items-center justify-center mb-4">
<iconify-icon className="text-xl text-zinc-700" icon="solar:laptop-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight mb-2">Industry-Ready Skills</h3>
<p className="text-sm text-zinc-600">Curriculum aligned with current market demands and technology trends.</p>
</div>
<div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
<div className="w-10 h-10 bg-zinc-50 rounded-lg border border-zinc-100 flex items-center justify-center mb-4">
<iconify-icon className="text-xl text-zinc-700" icon="solar:code-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight mb-2">Hands-on Projects</h3>
<p className="text-sm text-zinc-600">Build real-world solutions through intensive capstone projects.</p>
</div>
<div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
<div className="w-10 h-10 bg-zinc-50 rounded-lg border border-zinc-100 flex items-center justify-center mb-4">
<iconify-icon className="text-xl text-zinc-700" icon="solar:rocket-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight mb-2">Placement Readiness</h3>
<p className="text-sm text-zinc-600">Enhance your resume with verified credentials and practical experience.</p>
</div>
</div>
</div>
<div className="mb-24">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-8">Focus Areas</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="group cursor-pointer bg-white p-8 rounded-2xl border border-zinc-200 hover:border-zinc-300 transition-all shadow-sm flex flex-col justify-between" onclick="navigate('certifications')">
<div>
<iconify-icon className="text-3xl text-zinc-900 mb-4" icon="solar:cloud-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-xl font-semibold tracking-tight mb-2">Cloud Computing</h3>
<p className="text-sm text-zinc-600 mb-6">Master core cloud concepts and Azure services to build scalable solutions.</p>
</div>
<div className="text-sm font-medium text-zinc-900 flex items-center gap-1">Explore Azure <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon></div>
</div>
<div className="group cursor-pointer bg-white p-8 rounded-2xl border border-zinc-200 hover:border-zinc-300 transition-all shadow-sm flex flex-col justify-between" onclick="navigate('certifications')">
<div>
<iconify-icon className="text-3xl text-zinc-900 mb-4" icon="solar:cpu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-xl font-semibold tracking-tight mb-2">Artificial Intelligence</h3>
<p className="text-sm text-zinc-600 mb-6">Learn AI workloads, machine learning principles, and cognitive services.</p>
</div>
<div className="text-sm font-medium text-zinc-900 flex items-center gap-1">Explore AI <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon></div>
</div>
<div className="group cursor-pointer bg-white p-8 rounded-2xl border border-zinc-200 hover:border-zinc-300 transition-all shadow-sm flex flex-col justify-between" onclick="navigate('certifications')">
<div>
<iconify-icon className="text-3xl text-zinc-900 mb-4" icon="solar:database-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-xl font-semibold tracking-tight mb-2">Data Engineering</h3>
<p className="text-sm text-zinc-600 mb-6">Understand data concepts, relational/non-relational data, and analytics workloads.</p>
</div>
<div className="text-sm font-medium text-zinc-900 flex items-center gap-1">Explore Data <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon></div>
</div>
<div className="group cursor-pointer bg-white p-8 rounded-2xl border border-zinc-200 hover:border-zinc-300 transition-all shadow-sm flex flex-col justify-between" onclick="navigate('certifications')">
<div>
<iconify-icon className="text-3xl text-zinc-900 mb-4" icon="solar:bolt-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-xl font-semibold tracking-tight mb-2">Power Platform</h3>
<p className="text-sm text-zinc-600 mb-6">Build apps, automate workflows, and analyze data with low-code solutions.</p>
</div>
<div className="text-sm font-medium text-zinc-900 flex items-center gap-1">Explore Power Platform <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon></div>
</div>
</div>
</div>
<div className="mb-24 bg-zinc-900 text-white p-8 md:p-12 rounded-3xl relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-zinc-800 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>
<h2 className="text-3xl font-semibold tracking-tight mb-8 relative z-10">Certification Roadmap</h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
<div className="border-l-2 md:border-l-0 md:border-t-2 border-zinc-700 pl-6 md:pl-0 md:pt-6 py-4 md:py-0">
<div className="text-xs font-medium text-zinc-400 mb-1">1st Year</div>
<h4 className="text-base font-medium mb-2">Digital Skills</h4>
<p className="text-sm text-zinc-400">Microsoft Office Specialist &amp; Computing Fundamentals.</p>
</div>
<div className="border-l-2 md:border-l-0 md:border-t-2 border-zinc-700 pl-6 md:pl-0 md:pt-6 py-4 md:py-0">
<div className="text-xs font-medium text-zinc-400 mb-1">2nd Year</div>
<h4 className="text-base font-medium mb-2">Azure Fundamentals</h4>
<p className="text-sm text-zinc-400">Core cloud concepts and architecture foundations.</p>
</div>
<div className="border-l-2 md:border-l-0 md:border-t-2 border-zinc-700 pl-6 md:pl-0 md:pt-6 py-4 md:py-0">
<div className="text-xs font-medium text-zinc-400 mb-1">3rd Year</div>
<h4 className="text-base font-medium mb-2">AI Fundamentals</h4>
<p className="text-sm text-zinc-400">Machine learning basics and cognitive services integration.</p>
</div>
<div className="border-l-2 md:border-l-0 md:border-t-2 border-zinc-700 pl-6 md:pl-0 md:pt-6 py-4 md:py-0 border-transparent md:border-zinc-700">
<div className="text-xs font-medium text-zinc-400 mb-1">4th Year</div>
<h4 className="text-base font-medium mb-2">Specialization</h4>
<p className="text-sm text-zinc-400">Data Engineering, Security, or Developer Associate paths.</p>
</div>
</div>
</div>
<div className="text-center py-12 border-t border-zinc-200">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900 mb-4">Start Your Global Certification Journey</h2>
<button className="bg-zinc-900 text-white text-base font-medium px-6 py-3 rounded-md hover:bg-zinc-800 transition-colors shadow-sm" onclick="navigate('contact')">
                    Book Free Consultation
                </button>
</div>
</section>
<section className="view hidden fade-in" id="view-certifications">
<div className="max-w-3xl mb-12">
<h1 className="text-4xl font-semibold tracking-tight text-zinc-900 mb-4">Certification Programs</h1>
<p className="text-lg text-zinc-600">Comprehensive training pathways for globally recognized technology credentials.</p>
</div>
<div className="space-y-8">
<div className="bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-sm">
<div className="p-6 md:p-8 border-b border-zinc-100 flex justify-between items-start flex-col md:flex-row gap-4">
<div>
<div className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full mb-3">AZ-900</div>
<h2 className="text-2xl font-semibold tracking-tight mb-2">Azure Fundamentals</h2>
<p className="text-sm text-zinc-600">Validate foundational knowledge of cloud services and how those services are provided with Microsoft Azure.</p>
</div>
<button className="whitespace-nowrap bg-white border border-zinc-200 text-zinc-900 text-sm font-medium px-4 py-2 rounded-md hover:bg-zinc-50" onclick="navigate('contact')">Enroll Now</button>
</div>
<div className="p-6 md:p-8 bg-zinc-50/50 grid grid-cols-1 md:grid-cols-3 gap-8">
<div>
<h4 className="text-sm font-semibold mb-3 flex items-center gap-2"><iconify-icon className="text-zinc-400" icon="solar:checklist-minimalistic-linear"></iconify-icon> Skills Covered</h4>
<ul className="text-sm text-zinc-600 space-y-2">
<li>• Describe cloud concepts</li>
<li>• Describe core Azure services</li>
<li>• Core solutions and management tools</li>
<li>• General security and network security</li>
<li>• Identity, governance, privacy</li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold mb-3 flex items-center gap-2"><iconify-icon className="text-zinc-400" icon="solar:users-group-rounded-linear"></iconify-icon> Target Audience</h4>
<p className="text-sm text-zinc-600">Engineering students, non-technical professionals evaluating cloud, and IT personnel beginning their cloud journey.</p>
</div>
<div>
<h4 className="text-sm font-semibold mb-3 flex items-center gap-2"><iconify-icon className="text-zinc-400" icon="solar:star-linear"></iconify-icon> Career Benefits</h4>
<p className="text-sm text-zinc-600">Gateway to role-based certifications. Enhances profile for Cloud Administrator and Developer roles.</p>
</div>
</div>
</div>
<div className="bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-sm">
<div className="p-6 md:p-8 border-b border-zinc-100 flex justify-between items-start flex-col md:flex-row gap-4">
<div>
<div className="inline-block px-2.5 py-1 bg-purple-50 text-purple-700 text-xs font-medium rounded-full mb-3">AI-900</div>
<h2 className="text-2xl font-semibold tracking-tight mb-2">AI Fundamentals</h2>
<p className="text-sm text-zinc-600">Demonstrate knowledge of common machine learning and artificial intelligence workloads and how to implement them on Azure.</p>
</div>
<button className="whitespace-nowrap bg-white border border-zinc-200 text-zinc-900 text-sm font-medium px-4 py-2 rounded-md hover:bg-zinc-50" onclick="navigate('contact')">Enroll Now</button>
</div>
<div className="p-6 md:p-8 bg-zinc-50/50 grid grid-cols-1 md:grid-cols-3 gap-8">
<div>
<h4 className="text-sm font-semibold mb-3 flex items-center gap-2"><iconify-icon className="text-zinc-400" icon="solar:checklist-minimalistic-linear"></iconify-icon> Skills Covered</h4>
<ul className="text-sm text-zinc-600 space-y-2">
<li>• Describe AI workloads and principles</li>
<li>• Describe machine learning on Azure</li>
<li>• Describe computer vision workloads</li>
<li>• Describe NLP workloads</li>
<li>• Conversational AI concepts</li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold mb-3 flex items-center gap-2"><iconify-icon className="text-zinc-400" icon="solar:users-group-rounded-linear"></iconify-icon> Target Audience</h4>
<p className="text-sm text-zinc-600">Students and professionals interested in AI. Programming experience is not required but helpful.</p>
</div>
<div>
<h4 className="text-sm font-semibold mb-3 flex items-center gap-2"><iconify-icon className="text-zinc-400" icon="solar:star-linear"></iconify-icon> Career Benefits</h4>
<p className="text-sm text-zinc-600">Prepares you for AI Engineer roles. Validates capability to participate in AI adoption strategies.</p>
</div>
</div>
</div>
<div className="bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-sm">
<div className="p-6 md:p-8 border-b border-zinc-100 flex justify-between items-start flex-col md:flex-row gap-4">
<div>
<div className="inline-block px-2.5 py-1 bg-teal-50 text-teal-700 text-xs font-medium rounded-full mb-3">DP-900</div>
<h2 className="text-2xl font-semibold tracking-tight mb-2">Data Fundamentals</h2>
<p className="text-sm text-zinc-600">Foundational knowledge of core data concepts and how they are implemented using Microsoft Azure data services.</p>
</div>
</div>
</div>
<div className="bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-sm">
<div className="p-6 md:p-8 border-b border-zinc-100 flex justify-between items-start flex-col md:flex-row gap-4">
<div>
<div className="inline-block px-2.5 py-1 bg-amber-50 text-amber-700 text-xs font-medium rounded-full mb-3">PL-900</div>
<h2 className="text-2xl font-semibold tracking-tight mb-2">Power Platform Fundamentals</h2>
<p className="text-sm text-zinc-600">Understand the business value and product capabilities of Power Platform to automate business processes.</p>
</div>
</div>
</div>
</div>
<div className="mt-16 text-center">
<h3 className="text-xl font-semibold tracking-tight mb-4">Ready to Become Globally Certified?</h3>
<button className="bg-zinc-900 text-white text-sm font-medium px-6 py-3 rounded-md hover:bg-zinc-800 transition-colors" onclick="navigate('contact')">Contact Us to Start</button>
</div>
</section>
<section className="view hidden fade-in" id="view-bootcamps">
<div className="max-w-3xl mb-12">
<h1 className="text-4xl font-semibold tracking-tight text-zinc-900 mb-4">30-Hour Certification Bootcamps</h1>
<p className="text-lg text-zinc-600">Intensive, instructor-led programs combining theory, hands-on labs, and real-world projects.</p>
</div>
<div className="bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm mb-16">
<div className="overflow-x-auto">
<table className="w-full text-left text-sm">
<thead className="bg-zinc-50 border-b border-zinc-200 text-zinc-600">
<tr>
<th className="px-6 py-4 font-medium">Module</th>
<th className="px-6 py-4 font-medium">Topic</th>
<th className="px-6 py-4 font-medium">Duration</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-100">
<tr>
<td className="px-6 py-4 font-medium text-zinc-900">Cloud Fundamentals</td>
<td className="px-6 py-4 text-zinc-600">Intro to cloud computing, deployment models, benefits.</td>
<td className="px-6 py-4 text-zinc-500 whitespace-nowrap">6 hours</td>
</tr>
<tr>
<td className="px-6 py-4 font-medium text-zinc-900">Azure Fundamentals</td>
<td className="px-6 py-4 text-zinc-600">Core Azure services, architecture, compute, networking.</td>
<td className="px-6 py-4 text-zinc-500 whitespace-nowrap">8 hours</td>
</tr>
<tr>
<td className="px-6 py-4 font-medium text-zinc-900">AI Fundamentals</td>
<td className="px-6 py-4 text-zinc-600">Machine learning, computer vision, NLP on Azure.</td>
<td className="px-6 py-4 text-zinc-500 whitespace-nowrap">8 hours</td>
</tr>
<tr>
<td className="px-6 py-4 font-medium text-zinc-900">Capstone Project</td>
<td className="px-6 py-4 text-zinc-600">Building a real-world integrated solution.</td>
<td className="px-6 py-4 text-zinc-500 whitespace-nowrap">6 hours</td>
</tr>
<tr>
<td className="px-6 py-4 font-medium text-zinc-900">Certification Prep</td>
<td className="px-6 py-4 text-zinc-600">Mock exams, doubt clearing, exam registration guidance.</td>
<td className="px-6 py-4 text-zinc-500 whitespace-nowrap">2 hours</td>
</tr>
</tbody>
</table>
</div>
</div>
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-8">Capstone Projects Showcase</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
<div className="bg-white p-6 border border-zinc-200 rounded-xl shadow-sm">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center mb-4">
<iconify-icon className="text-lg text-zinc-700" icon="solar:chat-round-line-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold mb-2">AI Chatbot System</h3>
<p className="text-sm text-zinc-600">Develop a customer service bot using Azure Bot Framework and Cognitive Language Services.</p>
</div>
<div className="bg-white p-6 border border-zinc-200 rounded-xl shadow-sm">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center mb-4">
<iconify-icon className="text-lg text-zinc-700" icon="solar:graph-up-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold mb-2">Retail Analytics Dashboard</h3>
<p className="text-sm text-zinc-600">Process sales data using Azure Data Factory and visualize trends with Power BI.</p>
</div>
<div className="bg-white p-6 border border-zinc-200 rounded-xl shadow-sm">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center mb-4">
<iconify-icon className="text-lg text-zinc-700" icon="solar:face-scan-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold mb-2">Sentiment Analysis</h3>
<p className="text-sm text-zinc-600">Analyze social media feeds in real-time using Azure AI to gauge public sentiment.</p>
</div>
</div>
</section>
<section className="view hidden fade-in" id="view-universities">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
<div>
<div className="inline-block px-3 py-1 bg-zinc-100 border border-zinc-200 rounded-full text-xs font-medium text-zinc-800 mb-6">For Higher Education</div>
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-6 leading-tight">
                        Launch Global Certification Programs for Your Students.
                    </h1>
<p className="text-lg text-zinc-600 mb-8">
                        Partner with KnowPro to integrate industry-aligned certification bootcamps into your curriculum. Improve placement readiness and institutional ranking.
                    </p>
<div className="space-y-6 mb-8">
<div className="flex gap-4">
<div className="mt-1"><iconify-icon className="text-xl text-zinc-900" icon="solar:check-circle-linear"></iconify-icon></div>
<div>
<h3 className="text-base font-semibold mb-1">Certification Readiness</h3>
<p className="text-sm text-zinc-600">End-to-end training targeting high pass rates for global exams.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1"><iconify-icon className="text-xl text-zinc-900" icon="solar:check-circle-linear"></iconify-icon></div>
<div>
<h3 className="text-base font-semibold mb-1">Faculty Development</h3>
<p className="text-sm text-zinc-600">Train-the-trainer programs to upskill your academic staff.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1"><iconify-icon className="text-xl text-zinc-900" icon="solar:check-circle-linear"></iconify-icon></div>
<div>
<h3 className="text-base font-semibold mb-1">Improved Placements</h3>
<p className="text-sm text-zinc-600">Equip students with verifiable credentials that top recruiters demand.</p>
</div>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-zinc-900"></div>
<h3 className="text-2xl font-semibold tracking-tight mb-2">Partner Inquiry</h3>
<p className="text-sm text-zinc-500 mb-6">Fill out the form below to discuss an academic partnership.</p>
<form className="space-y-4" id="college-form" onsubmit="handleFormSubmit(event, 'college-form')">
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1">College/University Name</label>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/20 focus:border-zinc-900 transition-shadow" required="" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1">Department</label>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/20 focus:border-zinc-900 transition-shadow" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1">Number of Students</label>
<select className="w-full bg-zinc-50 border border-zinc-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/20 focus:border-zinc-900 transition-shadow appearance-none">
<option>50 - 100</option>
<option>100 - 300</option>
<option>300 - 500</option>
<option>500+</option>
</select>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1">Contact Person Name</label>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/20 focus:border-zinc-900 transition-shadow" required="" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1">Email (Official)</label>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/20 focus:border-zinc-900 transition-shadow" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1">Phone Number</label>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/20 focus:border-zinc-900 transition-shadow" required="" type="tel"/>
</div>
</div>
<button className="w-full bg-zinc-900 text-white text-sm font-medium px-4 py-2.5 rounded-md hover:bg-zinc-800 transition-colors mt-2" type="submit">
                            Submit Inquiry
                        </button>
</form>
</div>
</div>
</section>
<section className="view hidden fade-in" id="view-corporate">
<div className="text-center max-w-3xl mx-auto mb-16">
<h1 className="text-4xl font-semibold tracking-tight text-zinc-900 mb-4">Corporate Training Solutions</h1>
<p className="text-lg text-zinc-600">Upskill your workforce with targeted technology training and certification bootcamps designed for enterprise teams.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
<div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm flex gap-6">
<div className="mt-1"><iconify-icon className="text-3xl text-zinc-900" icon="solar:server-square-linear"></iconify-icon></div>
<div>
<h3 className="text-xl font-semibold tracking-tight mb-2">Cloud Transformation</h3>
<p className="text-sm text-zinc-600 mb-4">Migrate legacy skills to the cloud. Training on Azure infrastructure, security, and cloud-native development for IT teams.</p>
<button className="text-sm font-medium text-zinc-900 hover:underline" onclick="navigate('contact')">Request Syllabus →</button>
</div>
</div>
<div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm flex gap-6">
<div className="mt-1"><iconify-icon className="text-3xl text-zinc-900" icon="solar:magic-stick-3-linear"></iconify-icon></div>
<div>
<h3 className="text-xl font-semibold tracking-tight mb-2">AI Adoption Workshops</h3>
<p className="text-sm text-zinc-600 mb-4">Empower developers to integrate AI capabilities into enterprise apps using Azure OpenAI and Cognitive Services.</p>
<button className="text-sm font-medium text-zinc-900 hover:underline" onclick="navigate('contact')">Request Syllabus →</button>
</div>
</div>
<div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm flex gap-6">
<div className="mt-1"><iconify-icon className="text-3xl text-zinc-900" icon="solar:chart-square-linear"></iconify-icon></div>
<div>
<h3 className="text-xl font-semibold tracking-tight mb-2">Data Analytics Training</h3>
<p className="text-sm text-zinc-600 mb-4">Train analysts and engineers on modern data warehousing, big data processing, and Power BI visualization.</p>
<button className="text-sm font-medium text-zinc-900 hover:underline" onclick="navigate('contact')">Request Syllabus →</button>
</div>
</div>
<div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm flex gap-6">
<div className="mt-1"><iconify-icon className="text-3xl text-zinc-900" icon="solar:settings-linear"></iconify-icon></div>
<div>
<h3 className="text-xl font-semibold tracking-tight mb-2">Power Platform Training</h3>
<p className="text-sm text-zinc-600 mb-4">Enable citizen developers to automate workflows and build custom business applications rapidly without code.</p>
<button className="text-sm font-medium text-zinc-900 hover:underline" onclick="navigate('contact')">Request Syllabus →</button>
</div>
</div>
</div>
</section>
<section className="view hidden fade-in" id="view-blog">
<h1 className="text-4xl font-semibold tracking-tight text-zinc-900 mb-12">Insights &amp; Articles</h1>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<article className="bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm flex flex-col group cursor-pointer">
<div className="h-48 bg-zinc-100 flex items-center justify-center border-b border-zinc-200">
<iconify-icon className="text-5xl text-zinc-300" icon="solar:document-text-linear"></iconify-icon>
</div>
<div className="p-6 flex-grow flex flex-col">
<div className="flex items-center gap-2 mb-3">
<span className="text-xs font-medium bg-zinc-100 px-2 py-0.5 rounded text-zinc-600">Career</span>
<span className="text-xs text-zinc-500">Oct 12, 2023</span>
</div>
</div></article></div></section></main>
    </>
  );
}
