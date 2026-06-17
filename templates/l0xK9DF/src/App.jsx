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



    // Simple tab functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove active class from all buttons
        tabBtns.forEach(b => b.classList.remove('tab-active', 'text-white'));
        tabBtns.forEach(b => b.classList.add('text-gray-400'));
        
        // Add active class to clicked button
        btn.classList.add('tab-active', 'text-white');
        btn.classList.remove('text-gray-400');
        
        // Hide all tab contents
        tabContents.forEach(content => content.classList.add('hidden'));
        
        // Show the corresponding tab content
        const contentId = 'content-' + btn.id.split('-')[1];
        document.getElementById(contentId).classList.remove('hidden');
        
        // If returning to the tech leaders tab, ensure cards are visible
        if (btn.id === 'tab-tech-lead') {
          const techLeaderCards = document.querySelectorAll('#content-tech-lead .use-case-card');
          techLeaderCards.forEach(card => {
            card.classList.add('show');
          });
        }
      });
    });
    
    // Ensure cards are visible on initial load
    document.addEventListener('DOMContentLoaded', () => {
      const cards = document.querySelectorAll('.use-case-card');
      cards.forEach(card => {
        card.classList.add('show');
      });
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
      
<section className="py-20 px-4 max-w-7xl mx-auto">

<div className="text-center mb-16">
<span className="px-3 py-1 text-sm text-blue-300 bg-blue-900 bg-opacity-50 rounded-full font-medium">Who We Help</span>
<h2 className="mt-4 text-4xl font-bold text-white">Perfect <span className="text-transparent bg-clip-text gradient-bg">For Your Role</span></h2>
<p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
        Our AI consulting services are designed for specific roles and industries, with proven success stories to match your needs.
      </p>
</div>

<div className="mb-12">
<div className="flex flex-wrap justify-center space-x-2 md:space-x-6 mb-8">
<button className="tab-btn tab-active px-4 py-2 text-white font-medium hover:text-blue-400 transition" id="tab-tech-lead">
          Tech Leaders
        </button>
<button className="tab-btn px-4 py-2 text-gray-400 font-medium hover:text-blue-400 transition" id="tab-founder">
          Startup Founders
        </button>
<button className="tab-btn px-4 py-2 text-gray-400 font-medium hover:text-blue-400 transition" id="tab-enterprise">
          Enterprise Teams
        </button>
<button className="tab-btn px-4 py-2 text-gray-400 font-medium hover:text-blue-400 transition" id="tab-industry">
          Industry Specific
        </button>
</div>

<div className="tab-content" id="content-tech-lead">
<div className="grid md:grid-cols-3 gap-8">

<div className="card-hover use-case-card show bg-gray-800 bg-opacity-60 rounded-xl overflow-hidden">
<div className="h-48 bg-gradient-to-r from-blue-900 to-indigo-900 relative">
<div className="absolute inset-0 flex items-center justify-center">
<svg className="w-24 h-24 text-white opacity-20" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" fill-rule="evenodd"></path>
</svg>
</div>
<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-900">
<span className="px-2 py-1 text-xs text-blue-300 bg-blue-900 bg-opacity-50 rounded-full">CTO</span>
<h3 className="mt-2 text-xl font-semibold text-white">Tech Stack Modernization</h3>
</div>
</div>
<div className="p-6">
<p className="text-gray-300">Helped a fintech CTO reduce technical debt by 40% while implementing AI-powered fraud detection, resulting in $2.4M annual savings.</p>
<div className="mt-4 flex items-center text-sm text-gray-400">
<svg className="w-5 h-5 mr-1 text-green-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>40% reduction in technical debt</span>
</div>
<div className="mt-2 flex items-center text-sm text-gray-400">
<svg className="w-5 h-5 mr-1 text-green-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>$2.4M annual savings</span>
</div>
</div>
</div>

<div className="card-hover use-case-card show bg-gray-800 bg-opacity-60 rounded-xl overflow-hidden">
<div className="h-48 bg-gradient-to-r from-purple-900 to-indigo-900 relative">
<div className="absolute inset-0 flex items-center justify-center">
<svg className="w-24 h-24 text-white opacity-20" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" fill-rule="evenodd"></path>
</svg>
</div>
<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-900">
<span className="px-2 py-1 text-xs text-purple-300 bg-purple-900 bg-opacity-50 rounded-full">VP of Engineering</span>
<h3 className="mt-2 text-xl font-semibold text-white">Team Augmentation</h3>
</div>
</div>
<div className="p-6">
<p className="text-gray-300">Guided a SaaS VP of Engineering in implementing AI-powered development tools that increased team productivity by 35% without adding headcount.</p>
<div className="mt-4 flex items-center text-sm text-gray-400">
<svg className="w-5 h-5 mr-1 text-green-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>35% increased productivity</span>
</div>
<div className="mt-2 flex items-center text-sm text-gray-400">
<svg className="w-5 h-5 mr-1 text-green-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Reduced hiring needs by 4 FTEs</span>
</div>
</div>
</div>

<div className="card-hover use-case-card show bg-gray-800 bg-opacity-60 rounded-xl overflow-hidden">
<div className="h-48 bg-gradient-to-r from-blue-800 to-cyan-900 relative">
<div className="absolute inset-0 flex items-center justify-center">
<svg className="w-24 h-24 text-white opacity-20" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M3 3a1 1 0 000 2h10a1 1 0 100-2H3zm0 4a1 1 0 000 2h10a1 1 0 100-2H3zm0 4a1 1 0 100 2h10a1 1 0 100-2H3z" fill-rule="evenodd"></path>
</svg>
</div>
<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-900">
<span className="px-2 py-1 text-xs text-cyan-300 bg-cyan-900 bg-opacity-50 rounded-full">IT Director</span>
<h3 className="mt-2 text-xl font-semibold text-white">Legacy System Transformation</h3>
</div>
</div>
<div className="p-6">
<p className="text-gray-300">Helped an IT Director modernize legacy systems with AI-powered data integration, cutting operational costs by 28% and improving data accuracy.</p>
<div className="mt-4 flex items-center text-sm text-gray-400">
<svg className="w-5 h-5 mr-1 text-green-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>28% reduction in operational costs</span>
</div>
<div className="mt-2 flex items-center text-sm text-gray-400">
<svg className="w-5 h-5 mr-1 text-green-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>99.7% data accuracy (up from 92%)</span>
</div>
</div>
</div>
</div>
<div className="mt-12 p-6 bg-gray-800 bg-opacity-30 border border-gray-700 rounded-xl">
<div className="flex flex-col md:flex-row items-start md:items-center">
<div className="flex-shrink-0 mb-4 md:mb-0">
<img alt="Client" className="rounded-full border-2 border-blue-500" src="https://via.placeholder.com/80"/>
</div>
<div className="md:ml-6">
<p className="text-gray-300 italic">"Their AI expertise helped us navigate complex technical decisions that would have taken months to figure out on our own. We implemented the right solutions the first time, avoiding costly mistakes."</p>
<div className="mt-4 flex items-center">
<span className="font-medium text-white">Sarah Chen</span>
<span className="mx-2 text-gray-500">•</span>
<span className="text-gray-400">CTO at HealthTech Solutions</span>
</div>
</div>
</div>
</div>
</div>
<div className="tab-content hidden" id="content-founder">

<div className="grid md:grid-cols-3 gap-8">

<div className="card-hover bg-gray-800 bg-opacity-60 rounded-xl overflow-hidden">
<div className="h-48 bg-gradient-to-r from-green-800 to-emerald-900 relative">
<div className="absolute inset-0 flex items-center justify-center">
<svg className="w-24 h-24 text-white opacity-20" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" fill-rule="evenodd"></path>
</svg>
</div>
<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-900">
<span className="px-2 py-1 text-xs text-green-300 bg-green-900 bg-opacity-50 rounded-full">Seed Stage</span>
<h3 className="mt-2 text-xl font-semibold text-white">MVP Acceleration</h3>
</div>
</div>
<div className="p-6">
<p className="text-gray-300">Helped a pre-seed founder build an AI-powered MVP in 6 weeks instead of 6 months, securing $1.2M in funding with a working prototype.</p>
<div className="mt-4 flex items-center text-sm text-gray-400">
<svg className="w-5 h-5 mr-1 text-green-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>4x faster development</span>
</div>
<div className="mt-2 flex items-center text-sm text-gray-400">
<svg className="w-5 h-5 mr-1 text-green-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>$1.2M funding secured</span>
</div>
</div>
</div>
</div>
</div>
<div className="tab-content hidden" id="content-enterprise">

<div className="grid md:grid-cols-3 gap-8">

<div className="card-hover bg-gray-800 bg-opacity-60 rounded-xl overflow-hidden">
<div className="h-48 bg-gradient-to-r from-blue-900 to-indigo-900 relative">
<div className="absolute inset-0 flex items-center justify-center">
<svg className="w-24 h-24 text-white opacity-20" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z" fill-rule="evenodd"></path>
</svg>
</div>
<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-900">
<span className="px-2 py-1 text-xs text-blue-300 bg-blue-900 bg-opacity-50 rounded-full">Fortune 500</span>
<h3 className="mt-2 text-xl font-semibold text-white">Enterprise AI Transformation</h3>
</div>
</div>
<div className="p-6">
<p className="text-gray-300">Guided a Fortune 500 company through AI transformation that automated 40% of customer service interactions while improving satisfaction scores.</p>
<div className="mt-4 flex items-center text-sm text-gray-400">
<svg className="w-5 h-5 mr-1 text-green-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>40% automation achieved</span>
</div>
<div className="mt-2 flex items-center text-sm text-gray-400">
<svg className="w-5 h-5 mr-1 text-green-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>CSAT improved from 78% to 92%</span>
</div>
</div>
</div>
</div>
</div>
<div className="tab-content hidden" id="content-industry">

<div className="grid md:grid-cols-3 gap-8">

<div className="card-hover bg-gray-800 bg-opacity-60 rounded-xl overflow-hidden">
<div className="h-48 bg-gradient-to-r from-red-900 to-orange-900 relative">
<div className="absolute inset-0 flex items-center justify-center">
<svg className="w-24 h-24 text-white opacity-20" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" fill-rule="evenodd"></path>
</svg>
</div>
<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-900">
<span className="px-2 py-1 text-xs text-red-300 bg-red-900 bg-opacity-50 rounded-full">Healthcare</span>
<h3 className="mt-2 text-xl font-semibold text-white">Medical Diagnostics AI</h3>
</div>
</div>
<div className="p-6">
<p className="text-gray-300">Helped a healthcare provider implement AI diagnostics that improved early detection rates by 34% while reducing false positives by 28%.</p>
<div className="mt-4 flex items-center text-sm text-gray-400">
<svg className="w-5 h-5 mr-1 text-green-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>34% improved detection rate</span>
</div>
<div className="mt-2 flex items-center text-sm text-gray-400">
<svg className="w-5 h-5 mr-1 text-green-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>28% reduction in false positives</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-16 text-center">
<a className="inline-block px-8 py-4 text-white gradient-bg rounded-lg font-medium hover:opacity-90 transition shadow-lg" href="#">
        See If We're Right For Your Needs
      </a>
<p className="mt-4 text-gray-400">Book a free 30-minute consultation to discuss your specific challenges.</p>
</div>
</section>


    </>
  );
}
