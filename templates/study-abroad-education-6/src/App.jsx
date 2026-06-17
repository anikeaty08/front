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



        const modal = document.getElementById('managerModal');
        const modalContent = document.getElementById('modalContent');
        const modalName = document.getElementById('modalName');
        const modalRole = document.getElementById('modalRole');
        const modalBio = document.getElementById('modalBio');
        const modalAvatar = document.getElementById('modalAvatar');
        const modalBtnName = document.getElementById('modalBtnName');

        function openManagerModal(name, role, bio, colorClass) {
            // Populate Data
            modalName.innerText = name;
            modalRole.innerText = role;
            modalBio.innerText = bio;
            modalBtnName.innerText = name;
            
            // Set Avatar Style
            modalAvatar.className = `w-24 h-24 mx-auto rounded-full border-4 border-white shadow-md flex items-center justify-center text-3xl font-bold mb-4 ${colorClass}`;
            modalAvatar.innerText = name.charAt(0);

            // Show Modal
            modal.classList.remove('modal-closed', 'pointer-events-none');
            modal.classList.add('modal-open', 'pointer-events-auto');
            
            // Animation timing for content
            setTimeout(() => {
                modalContent.classList.remove('modal-content-closed');
                modalContent.classList.add('modal-content-open');
            }, 10);
        }

        function closeManagerModal() {
            modalContent.classList.remove('modal-content-open');
            modalContent.classList.add('modal-content-closed');
            
            modal.classList.remove('modal-open');
            modal.classList.add('modal-closed');
            
            setTimeout(() => {
                modal.classList.add('pointer-events-none');
            }, 300);
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
      

<nav className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">

<span className="group-hover:text-blue-700 transition-colors text-lg font-semibold text-slate-900 tracking-tighter" style={{}}>Education <span className="font-normal text-blue-600">Bridge</span></span>
</div>
<div className="flex items-center gap-4">
<a className="inline-flex items-center justify-center transition-all hover:bg-blue-800 hover:shadow-lg hover:shadow-blue-900/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 text-sm font-medium text-white bg-blue-900 rounded-full pt-2 pr-5 pb-2 pl-5" href="#">
                    Get Started
                </a>
</div>
</div>
</nav>

<header className="lg:pt-48 lg:pb-32 overflow-hidden pt-32 pb-20 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-40">
<div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
<div className="absolute top-20 right-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row gap-16 gap-x-16 gap-y-16 items-center">

<div className="w-full lg:w-1/2 text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-800 text-xs font-medium mb-6 animate-fade-in-up">
<span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
                        Accepting Applications for Fall 2024
                    </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                        Bridge the gap to your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500">future degree.</span>
</h1>
<p className="lg:text-xl lg:mx-0 leading-relaxed text-lg font-light text-slate-500 max-w-lg mr-auto mb-8 ml-auto" style={{}}>Seamlessly apply to top European universities. One profile, endless opportunities. We simplify the journey from application to acceptance.</p>
<div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
<button className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-6 font-medium text-white transition-all duration-200 bg-blue-700 rounded-full hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-700/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700">
                            Find Programs
                            <svg aria-hidden="true" className="iconify ml-2 iconify--lucide" data-icon="lucide:arrow-right" data-width="18" height="18" role="img" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-6 font-medium text-slate-700 transition-all duration-200 bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-200">
<svg aria-hidden="true" className="iconify mr-2 text-blue-600 iconify--lucide" data-icon="lucide:play-circle" data-width="18" height="18" role="img" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
                            How it works
                        </button>
</div>
<div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-500">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-cyan-500 iconify--lucide" data-icon="lucide:check-circle-2" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span>Free Evaluation</span>
</div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-cyan-500 iconify--lucide" data-icon="lucide:check-circle-2" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span>Visa Support</span>
</div>
</div>
</div>

<div className="lg:w-1/2 lg:h-[600px] flex w-full h-[500px] relative items-center justify-center">

<div className="absolute w-64 h-80 bg-white rounded-2xl shadow-2xl shadow-blue-900/10 border border-slate-100 flex flex-col overflow-hidden animate-float-slow z-20">
<div className="h-32 bg-gradient-to-br from-blue-50 to-cyan-50 p-4 flex justify-center items-end">
<div className="w-20 h-20 bg-white rounded-full border-4 border-white shadow-sm mb-[-40px] flex items-center justify-center text-slate-300">
<svg aria-hidden="true" className="iconify iconify--lucide w-[32px] h-[32px]" data-icon="lucide:user" data-icon-replaced="true" data-width="32" height="32" role="img" strokeWidth="2" style={{color: 'rgb(203, 213, 225)', width: '32px', height: '32px'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle className="" cx="12" cy="7" r="4"></circle></g></svg>
</div>
</div>
<div className="pt-12 px-6 pb-6 text-center">
<div className="h-4 w-32 bg-slate-100 rounded-full mx-auto mb-3"></div>
<div className="h-3 w-20 bg-slate-50 rounded-full mx-auto mb-6"></div>
<div className="flex justify-center gap-2">
<div className="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:award" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m15.477 12.89l1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></g></svg>
</div>
<div className="h-8 w-8 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>
</div>

<div className="absolute top-20 right-10 lg:right-0 bg-white p-4 rounded-xl shadow-xl shadow-blue-900/5 border border-slate-100 animate-float-medium z-30 max-w-[200px]">
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded bg-cyan-100 text-cyan-700 flex items-center justify-center flex-shrink-0">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:mail-check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"></path><path d="m22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7m14 12l2 2l4-4"></path></g></svg>
</div>
<div>
<p className="text-xs font-semibold text-slate-900">Admission Letter</p>
<p className="text-[10px] text-slate-500 mt-1 leading-tight">University of Berlin approved your application.</p>
</div>
</div>
</div>

<div className="absolute bottom-32 left-0 lg:-left-4 bg-white p-4 rounded-xl shadow-xl shadow-blue-900/5 border border-slate-100 animate-float-fast z-30 max-w-[220px]">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded bg-blue-100 text-blue-700 flex items-center justify-center">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:plane" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8L4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1l3 2l2 3l1-1v-3l3-2l3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-xs font-semibold text-slate-900">Visa Processing</p>
</div>
<div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
<div className="bg-blue-600 h-1.5 rounded-full" style={{width: '75%'}}></div>
</div>
<div className="flex justify-between mt-1 text-[10px] text-slate-400">
<span>In Progress</span>
<span>75%</span>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-blue-50 rounded-full opacity-50"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-blue-100 rounded-full opacity-50"></div>
</div>
</div>
</div>
</header>

<section className="border-y bg-slate-50/50 border-slate-100 pt-12 pb-12">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm font-medium text-slate-400 mb-8 uppercase tracking-widest">Trusted by 100+ Universities across Europe</p>
<div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-xl font-bold text-slate-700 tracking-tight">BSA</span>
<span className="text-xl font-bold text-slate-700 tracking-tight font-serif" style={{}}>RNU</span>
<span className="text-xl font-mono font-bold tracking-tight text-slate-700">VBC</span>
<span className="text-xl font-bold tracking-tight text-slate-700 italic"><span className="not-italic font-normal"></span></span>
<span className="text-xl font-bold tracking-tight text-slate-700">RMK</span>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Everything you need to study abroad</h2>
<p className="text-lg text-slate-500 font-light">From selecting the right course to settling in a new country, our platform unifies the entire process into one simple dashboard.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group relative bg-white rounded-2xl p-8 border border-slate-200 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 hover:border-blue-200 overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
<svg aria-hidden="true" className="iconify text-blue-600 iconify--lucide" data-icon="lucide:search" data-width="100" height="100" role="img" viewbox="0 0 24 24" width="100" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21 21l-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></g></svg>
</div>
<div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center mb-6 group-hover:bg-blue-700 group-hover:text-white transition-colors duration-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:search" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21 21l-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></g></svg>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Smart Search</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Filter through 15,000+ accredited programs based on your grades, budget, and career goals using our AI-driven engine.
                    </p>
</div>

<div className="group relative bg-white rounded-2xl p-8 border border-slate-200 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-900/5 hover:-translate-y-1 hover:border-cyan-200 overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
<svg aria-hidden="true" className="iconify text-cyan-600 iconify--lucide" data-icon="lucide:file-check" data-width="100" height="100" role="img" viewbox="0 0 24 24" width="100" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5M9 15l2 2l4-4"></path></g></svg>
</div>
<div className="w-12 h-12 rounded-lg bg-cyan-50 text-cyan-700 flex items-center justify-center mb-6 group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:file-check" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5M9 15l2 2l4-4"></path></g></svg>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Unified Application</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Fill your profile once and apply to multiple universities with a single click. We handle the document formatting and submission.
                    </p>
</div>

<div className="group relative bg-white rounded-2xl p-8 border border-slate-200 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-900/5 hover:-translate-y-1 hover:border-indigo-200 overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
<svg aria-hidden="true" className="iconify text-indigo-600 iconify--lucide" data-icon="lucide:users" data-width="100" height="100" role="img" viewbox="0 0 24 24" width="100" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
</div>
<div className="w-12 h-12 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center mb-6 group-hover:bg-indigo-700 group-hover:text-white transition-colors duration-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:users" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Expert Mentorship</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Connect with alumni and counselors who guide you through visa interviews, accommodation, and cultural adaptation.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-900 text-white overflow-hidden relative">
<div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
<div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-700 rounded-full blur-[100px]"></div>
<div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-700 rounded-full blur-[100px]"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-800/50">
<div className="p-4">
<div className="text-4xl lg:text-5xl font-semibold tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-200">98%</div>
<div className="text-sm text-slate-400 font-medium">Acceptance Rate</div>
</div>
<div className="p-4">
<div className="text-4xl lg:text-5xl font-semibold tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-200">10k+</div>
<div className="text-sm text-slate-400 font-medium">Students Placed</div>
</div>
<div className="p-4">
<div className="text-4xl lg:text-5xl font-semibold tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-200">500+</div>
<div className="text-sm text-slate-400 font-medium">Partner Universities</div>
</div>
<div className="p-4">
<div className="text-4xl lg:text-5xl font-semibold tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-200">€0</div>
<div className="text-sm text-slate-400 font-medium">Hidden Fees</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="w-full lg:w-1/2">
<div className="relative bg-white rounded-2xl shadow-xl border border-slate-100 p-2 overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500">
<div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-slate-200"></div>
<div>
<div className="h-2 w-24 bg-slate-200 rounded mb-2"></div>
<div className="h-2 w-16 bg-slate-200 rounded"></div>
</div>
</div>
<div className="h-8 w-20 bg-blue-100 rounded-md"></div>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between p-4 bg-white rounded-lg border border-slate-100 shadow-sm">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-cyan-100 flex items-center justify-center text-cyan-700">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-sm text-slate-600 font-medium">Passport Upload</span>
</div>
<span className="text-xs text-cyan-700 font-medium bg-cyan-50 px-2 py-1 rounded">Verified</span>
</div>
<div className="flex items-center justify-between p-4 bg-white rounded-lg border border-slate-100 shadow-sm">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-cyan-100 flex items-center justify-center text-cyan-700">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-sm text-slate-600 font-medium">Transcripts</span>
</div>
<span className="text-xs text-cyan-700 font-medium bg-cyan-50 px-2 py-1 rounded">Verified</span>
</div>
<div className="flex items-center justify-between p-4 bg-white rounded-lg border border-blue-100 shadow-sm ring-2 ring-blue-50">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-blue-100 flex items-center justify-center text-blue-700 animate-pulse">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:loader" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v4m4.2 1.8l2.9-2.9M18 12h4m-5.8 4.2l2.9 2.9M12 18v4m-7.1-2.9l2.9-2.9M2 12h4M4.9 4.9l2.9 2.9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-sm text-slate-900 font-medium">Motivation Letter</span>
</div>
<span className="text-xs text-blue-700 font-medium bg-blue-50 px-2 py-1 rounded">Reviewing</span>
</div>
</div>
</div>
</div>
</div>
<div className="w-full lg:w-1/2">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">Track applications in real-time.</h2>
<p className="text-lg text-slate-500 font-light mb-8 leading-relaxed">
                        No more guessing games. Our dashboard provides real-time updates on your application status directly from university admissions offices. 
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-slate-600">
<svg aria-hidden="true" className="iconify text-blue-600 iconify--lucide" data-icon="lucide:check" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>Direct integration with university portals</span>
</li>
<li className="flex items-center gap-3 text-slate-600">
<svg aria-hidden="true" className="iconify text-blue-600 iconify--lucide" data-icon="lucide:check" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>Automated document validation</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-slate-600 text-xs font-medium mb-4">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    Premium Guidance
                </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Meet your personal admission manager</h2>
<p className="text-lg text-slate-500 font-light max-w-2xl mx-auto">
                    Get matched with a dedicated expert who specializes in your field of study. Click on a profile to connect.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="group relative bg-white p-2 rounded-2xl cursor-pointer hover:-translate-y-2 transition-all duration-300" onclick="openManagerModal('Diana', 'Senior Admissions Strategist', 'Specialist in STEM &amp; Medicine', 'bg-violet-100 text-violet-600')">
<div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white rounded-2xl -z-10 group-hover:shadow-xl group-hover:shadow-violet-900/5 transition-shadow"></div>
<div className="p-6 text-center border border-slate-100 rounded-xl bg-white group-hover:border-violet-100 transition-colors">
<div className="w-20 h-20 mx-auto rounded-full bg-violet-100 text-violet-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<span className="text-2xl font-bold tracking-tight">D</span>
</div>
<h3 className="text-lg font-semibold text-slate-900">Diana</h3>
<p className="text-xs font-medium text-violet-600 uppercase tracking-wider mb-2">Senior Strategist</p>
<p className="text-sm text-slate-500 mb-4">Expert in German &amp; French university systems.</p>
<button className="w-full py-2 text-sm font-medium text-slate-600 bg-slate-50 rounded-lg group-hover:bg-violet-600 group-hover:text-white transition-colors">
                            View Profile
                        </button>
</div>
</div>

<div className="group relative bg-white p-2 rounded-2xl cursor-pointer hover:-translate-y-2 transition-all duration-300" onclick="openManagerModal('Winshow', 'Visa &amp; Compliance Expert', '99.8% Visa Success Rate', 'bg-blue-100 text-blue-600')">
<div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white rounded-2xl -z-10 group-hover:shadow-xl group-hover:shadow-blue-900/5 transition-shadow"></div>
<div className="p-6 text-center border border-slate-100 rounded-xl bg-white group-hover:border-blue-100 transition-colors">
<div className="w-20 h-20 mx-auto rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<span className="text-2xl font-bold tracking-tight">W</span>
</div>
<h3 className="text-lg font-semibold text-slate-900">Winshow</h3>
<p className="text-xs font-medium text-blue-600 uppercase tracking-wider mb-2">Compliance Lead</p>
<p className="text-sm text-slate-500 mb-4">Specialized in non-EU applicant documentation.</p>
<button className="w-full py-2 text-sm font-medium text-slate-600 bg-slate-50 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            View Profile
                        </button>
</div>
</div>

<div className="group relative bg-white p-2 rounded-2xl cursor-pointer hover:-translate-y-2 transition-all duration-300" onclick="openManagerModal('Marianna', 'Student Success Manager', 'Housing &amp; Integration Support', 'bg-teal-100 text-teal-600')">
<div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white rounded-2xl -z-10 group-hover:shadow-xl group-hover:shadow-teal-900/5 transition-shadow"></div>
<div className="p-6 text-center border border-slate-100 rounded-xl bg-white group-hover:border-teal-100 transition-colors">
<div className="w-20 h-20 mx-auto rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<span className="text-2xl font-bold tracking-tight">M</span>
</div>
<h3 className="text-lg font-semibold text-slate-900">Marianna</h3>
<p className="text-xs font-medium text-teal-600 uppercase tracking-wider mb-2">Student Success</p>
<p className="text-sm text-slate-500 mb-4">Helps you settle in after acceptance.</p>
<button className="w-full py-2 text-sm font-medium text-slate-600 bg-slate-50 rounded-lg group-hover:bg-teal-600 group-hover:text-white transition-colors">
                            View Profile
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden">
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">Ready to start your journey?</h2>
<p className="text-xl text-slate-500 font-light mb-10">
                Join thousands of students building their future in Europe. Create your free account today.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="px-8 py-4 rounded-full bg-blue-900 text-white font-medium hover:bg-blue-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
                    Apply Now
                </button>
<button className="px-8 py-4 rounded-full bg-white text-slate-700 border border-slate-200 font-medium hover:bg-slate-50 transition-all hover:border-slate-300">
                    Contact Support
                </button>
</div>
</div>
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
</section>

<footer className="bg-white border-t border-slate-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
<div className="col-span-2 md:col-span-2">
<div className="flex items-center gap-2 mb-4">
<h4 className="font-medium text-slate-900 mb-4 text-sm">Connect</h4>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:twitter" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:linkedin" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
</a>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2025 Educatio Bridge. All rights reserved.</p>
<div className="flex gap-2">
<span className="w-2 h-2 rounded-full bg-cyan-500"></span>
<span className="text-xs text-slate-400">All systems operational</span>
</div>
</div>
</div></div></div></footer>

<div className="fixed inset-0 z-50 flex items-center justify-center modal-closed transition-opacity duration-300" id="managerModal">

<div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onclick="closeManagerModal()"></div>

<div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-sm m-4 p-0 overflow-hidden modal-content-closed transition-transform duration-300" id="modalContent">

<div className="h-24 bg-gradient-to-r from-slate-100 to-slate-200 w-full relative">
<button className="absolute top-4 right-4 p-2 rounded-full bg-white/50 hover:bg-white text-slate-600 transition-all" onclick="closeManagerModal()">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:x" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<div className="px-6 pb-6 -mt-12 text-center relative z-10">

<div className="w-24 h-24 mx-auto rounded-full border-4 border-white shadow-md flex items-center justify-center text-3xl font-bold mb-4 bg-slate-100" id="modalAvatar">

</div>
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight" id="modalName">Name</h3>
<p className="text-sm font-medium text-blue-600 mb-2" id="modalRole">Role</p>
<p className="text-sm text-slate-500 mb-6 leading-relaxed" id="modalBio">Description</p>
<div className="space-y-3">
<button className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:message-circle" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        Chat with <span id="modalBtnName">Manager</span>
</button>
<button className="w-full py-3 px-4 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl font-medium transition-colors flex items-center justify-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:calendar" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M8 2v4m8-4v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></g></svg>
                        Schedule a Call
                    </button>
</div>
<div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-2 text-xs text-slate-400">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Available for new students
                </div>
</div>
</div>
</div>




&gt;
    </>
  );
}
