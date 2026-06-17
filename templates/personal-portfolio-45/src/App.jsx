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
                class: "stroke-current",
                "stroke-width": 1.5
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
      

<div className="fixed inset-0 pointer-events-none noise-bg z-50 opacity-[0.03]"></div>
<div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none -z-10" style={{}}></div>
<main className="md:py-32 max-w-2xl mr-auto ml-auto pt-20 pr-6 pb-20 pl-6">

<section className="mb-24">
<div className="flex flex-col gap-6">

<div className="space-y-2">
<h1 className="text-4xl md:text-5xl font-medium text-gray-100 tracking-tight" style={{}}>Ferdous</h1>
<h2 className="text-lg md:text-xl text-gray-300 font-normal" style={{}}>Full Stack Engineer &amp; Interface Designer</h2>
</div>

<div className="flex items-center gap-2 text-sm text-gray-500" style={{}}>
<svg className="lucide lucide-map-pin w-4 h-4 stroke-current" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span>San Francisco, CA</span>
</div>

<p className="text-base text-gray-400 leading-relaxed max-w-lg" style={{}}>
                    I craft digital experiences that merge technical efficiency with modern design principles. Specializing in scalable web applications and intuitive user interfaces.
                </p>

<div className="flex flex-wrap items-center gap-6 mt-2">
<div className="flex items-center gap-4">
<a className="text-gray-400 hover:text-white transition-colors" href="#" style={{}}>
<svg className="lucide lucide-github w-5 h-5 stroke-current" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
<a className="text-gray-400 hover:text-white transition-colors" href="#" style={{}}>
<svg className="lucide lucide-linkedin w-5 h-5 stroke-current" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="text-gray-400 hover:text-white transition-colors" href="#" style={{}}>
<svg className="lucide lucide-twitter w-5 h-5 stroke-current" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="text-gray-400 hover:text-white transition-colors" href="#" style={{}}>
<svg className="lucide lucide-mail w-5 h-5 stroke-current" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</a>
</div>
<div className="h-4 w-px bg-gray-800 hidden sm:block" style={{}}></div>
<a className="group flex items-center gap-2 hover:bg-gray-800 transition-all text-sm font-medium text-gray-100 bg-gray-900 border-gray-800 border rounded-md pt-2 pr-4 pb-2 pl-4" href="/resume.pdf" style={{}}>
<svg className="lucide lucide-download w-4 h-4 text-orange-400 group-hover:text-white transition-colors stroke-current" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
    Download Resume
</a>
</div>
</div>
</section>

<section className="mb-20">
<h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-8 flex items-center gap-2" style={{}}>
<svg className="lucide lucide-briefcase w-4 h-4 stroke-current" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg> Work Experience
            </h3>
<div className="space-y-12">

<div className="relative group">
<div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
<h4 className="text-base font-medium text-gray-100" style={{}}>Senior Frontend Engineer</h4>
<span className="text-xs font-mono text-gray-500 mt-1 sm:mt-0" style={{}}>2023 — Present</span>
</div>
<div className="mb-3">
<a className="text-sm font-medium gradient-link inline-flex items-center gap-1" href="#">
                            Tech Solutions Inc. <svg className="lucide lucide-arrow-up-right w-3 h-3 stroke-current" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
<p className="text-sm text-gray-400 leading-relaxed" style={{}}>
                        Leading the frontend migration to Next.js, improving site performance by 40%. Mentoring junior developers and establishing UI component libraries for internal tools using Tailwind CSS and TypeScript.
                    </p>
</div>

<div className="relative group">
<div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
<h4 className="text-base font-medium text-gray-100" style={{}}>Full Stack Developer</h4>
<span className="text-xs font-mono text-gray-500 mt-1 sm:mt-0" style={{}}>2021 — 2023</span>
</div>
<div className="mb-3">
<a className="text-sm font-medium gradient-link inline-flex items-center gap-1" href="#">
                            Creative Digital <svg className="lucide lucide-arrow-up-right w-3 h-3 stroke-current" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
<p className="text-sm text-gray-400 leading-relaxed" style={{}}>
                        Developed and deployed 15+ client websites using the MERN stack. Collaborated directly with designers to implement pixel-perfect responsive layouts and integrated Stripe payments for e-commerce clients.
                    </p>
</div>

<div className="relative group">
<div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
<h4 className="text-base font-medium text-gray-100" style={{}}>Junior Web Developer</h4>
<span className="text-xs font-mono text-gray-500 mt-1 sm:mt-0" style={{}}>2020 — 2021</span>
</div>
<div className="mb-3">
<a className="text-sm font-medium gradient-link inline-flex items-center gap-1" href="#">
                            StartUp Flow <svg className="lucide lucide-arrow-up-right w-3 h-3 stroke-current" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
<p className="text-sm text-gray-400 leading-relaxed" style={{}}>
                        Assisted in building custom WordPress themes and React landing pages. Optimized database queries and managed content updates for high-traffic blogs.
                    </p>
</div>
</div>
</section>

<section className="mb-20">
<h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-6 flex items-center gap-2" style={{}}>
<svg className="lucide lucide-cpu w-4 h-4 stroke-current" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg> Expertise
            </h3>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-gray-900 border border-gray-800 rounded text-xs text-gray-300" style={{}}>JavaScript (ES6+)</span>
<span className="px-3 py-1 bg-gray-900 border border-gray-800 rounded text-xs text-gray-300" style={{}}>React.js</span>
<span className="px-3 py-1 bg-gray-900 border border-gray-800 rounded text-xs text-gray-300" style={{}}>Next.js</span>
<span className="px-3 py-1 bg-gray-900 border border-gray-800 rounded text-xs text-gray-300" style={{}}>TypeScript</span>
<span className="px-3 py-1 bg-gray-900 border border-gray-800 rounded text-xs text-gray-300" style={{}}>Node.js</span>
<span className="px-3 py-1 bg-gray-900 border border-gray-800 rounded text-xs text-gray-300" style={{}}>Tailwind CSS</span>
<span className="px-3 py-1 bg-gray-900 border border-gray-800 rounded text-xs text-gray-300" style={{}}>PostgreSQL</span>
<span className="px-3 py-1 bg-gray-900 border border-gray-800 rounded text-xs text-gray-300" style={{}}>GraphQL</span>
<span className="px-3 py-1 bg-gray-900 border border-gray-800 rounded text-xs text-gray-300" style={{}}>AWS</span>
<span className="px-3 py-1 bg-gray-900 border border-gray-800 rounded text-xs text-gray-300" style={{}}>Figma</span>
</div>
</section>

<section className="mb-20">
<h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-8 flex items-center gap-2" style={{}}>
<svg className="lucide lucide-graduation-cap w-4 h-4 stroke-current" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg> Education &amp; Courses
            </h3>
<div className="space-y-10">
<div className="group">
<div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
<h4 className="text-base font-medium text-gray-100" style={{}}>B.S. Computer Science</h4>
<span className="text-xs font-mono text-gray-500 mt-1 sm:mt-0" style={{}}>2016 — 2020</span>
</div>
<div className="text-sm text-gray-500 mb-2" style={{}}>University of Technology</div>
<p className="text-sm text-gray-400 leading-relaxed" style={{}}>
                        Specialized in Software Engineering and Data Structures. Graduated with Honors. Capstone project focused on distributed systems.
                    </p>
</div>
<div className="group">
<div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
<h4 className="text-base font-medium text-gray-100" style={{}}>Advanced React Patterns</h4>
<span className="text-xs font-mono text-gray-500 mt-1 sm:mt-0" style={{}}>2022</span>
</div>
<div className="text-sm text-gray-500 mb-2" style={{}}>Frontend Masters</div>
<p className="text-sm text-gray-400 leading-relaxed" style={{}}>
                        Deep dive into compound components, prop getters, and state reducer patterns to build reusable and flexible UI libraries.
                    </p>
</div>
<div className="group">
<div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
<h4 className="text-base font-medium text-gray-100" style={{}}>AWS Certified Developer</h4>
<span className="text-xs font-mono text-gray-500 mt-1 sm:mt-0" style={{}}>2021</span>
</div>
<div className="text-sm text-gray-500 mb-2" style={{}}>Amazon Web Services</div>
<p className="text-sm text-gray-400 leading-relaxed" style={{}}>
                        Associate level certification focusing on developing and maintaining applications on the AWS platform.
                    </p>
</div>
</div>
</section>

<section className="">
<h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-8 flex items-center gap-2" style={{}}>
<svg className="lucide lucide-folder-git-2 w-4 h-4 stroke-current" data-lucide="folder-git-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 19a5 5 0 0 1-5-5v8"></path><path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5"></path><circle cx="13" cy="12" r="2"></circle><circle cx="20" cy="19" r="2"></circle></svg> Selected Projects
            </h3>
<div className="grid grid-cols-1 gap-6">

<div className="group p-6 rounded-xl border border-gray-800 bg-gray-900/30 hover:border-gray-700 transition-colors" style={{}}>
<div className="flex justify-between items-start mb-3">
<h4 className="text-base font-medium text-gray-100" style={{}}>Ecommerce Dashboard</h4>
<a className="text-xs gradient-link flex items-center gap-1" href="#">
                            dashboard.io <svg className="lucide lucide-external-link w-3 h-3 stroke-current" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</a>
</div>
<p className="text-sm text-gray-400 leading-relaxed" style={{}}>
                        A real-time analytics dashboard for online retailers. Features include inventory management, sales visualization using D3.js, and automated reporting. Built with Next.js and Supabase.
                    </p>
</div>

<div className="group p-6 rounded-xl border border-gray-800 bg-gray-900/30 hover:border-gray-700 transition-colors" style={{}}>
<div className="flex justify-between items-start mb-3">
<h4 className="text-base font-medium text-gray-100" style={{}}>TaskFlow SaaS</h4>
<a className="text-xs gradient-link flex items-center gap-1" href="#">
                            taskflow.app <svg className="lucide lucide-external-link w-3 h-3 stroke-current" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</a>
</div>
<p className="text-sm text-gray-400 leading-relaxed" style={{}}>
                        Collaborative project management tool designed for remote teams. Implements WebSockets for real-time updates and optimistic UI for instant feedback.
                    </p>
</div>

<div className="group p-6 rounded-xl border border-gray-800 bg-gray-900/30 hover:border-gray-700 transition-colors" style={{}}>
<div className="flex justify-between items-start mb-3">
<h4 className="text-base font-medium text-gray-100" style={{}}>Finance API</h4>
<a className="text-xs gradient-link flex items-center gap-1" href="#">
                            github.com <svg className="lucide lucide-github w-3 h-3 stroke-current" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
</div>
<p className="text-sm text-gray-400 leading-relaxed" style={{}}>
                        A secure REST API for tracking personal finances. Handles currency conversion, categorizes transactions via ML, and generates monthly PDF reports.
                    </p>
</div>
</div>
</section>

<footer className="mt-24 pt-10 border-t border-gray-900 text-center text-xs text-gray-600 pb-10" style={{}}>
            © 2024 Ferdous. Built with Tailwind CSS.
        </footer>
</main>


    </>
  );
}
