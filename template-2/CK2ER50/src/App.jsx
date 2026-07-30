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
      
<div className="spline-bg pointer-events-none">
<iframe frameborder="0" height="100%" src="https://my.spline.design/binarymaterialcopy-uzQoq9YUCPK8Sqz8n9uP5qMO/" width="100%"></iframe>
</div>
<div className="overlay"></div>
<div className="relative z-10 w-full min-h-screen flex items-center justify-center px-2 py-6">
<div className="mx-auto w-full max-w-5xl bg-black/80 shadow-2xl rounded-3xl border border-white/10 backdrop-blur-lg overflow-hidden flex flex-col md:flex-row">

<aside className="w-full md:w-1/3 lg:w-1/4 bg-black/60 border-r border-white/10 flex flex-col">
<div className="p-7 flex flex-col items-center text-center border-b border-white/10">
<div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-gray-400">
<img alt="Profile" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&auto=format&fit=facearea&w=256&h=256&q=80" />
</div>
<h1 className="text-2xl font-semibold mb-2 tracking-tight">Emily Rivera</h1>
<p className="text-gray-200 mb-3 text-base">Full Stack Developer</p>
<div className="flex space-x-3 mb-4">
<a className="text-gray-400 hover:text-white transition-colors" href="#">
<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
</a>
<a className="text-gray-400 hover:text-white transition-colors" href="#">
<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
</a>
<a className="text-gray-400 hover:text-white transition-colors" href="#">
<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.035 10.035 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path></svg>
</a>
</div>
<div className="text-sm text-gray-400 space-y-2 w-full">
<div className="flex items-center justify-center">
<svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>emily.rivera@example.com</span>
</div>
<div className="flex items-center justify-center">
<svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>+1 (555) 123-4567</span>
</div>
<div className="flex items-center justify-center">
<svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>San Francisco, CA</span>
</div>
</div>
</div>
<div className="mt-auto p-7 border-t border-white/10">
<h2 className="text-xs uppercase font-semibold tracking-widest text-gray-500 mb-3">Links</h2>
<ul className="text-sm space-y-2">
<li><a className="text-gray-400 hover:text-gray-200 transition" href="#summary">Summary</a></li>
<li><a className="text-gray-400 hover:text-gray-200 transition" href="#skills">Skills</a></li>
<li><a className="text-gray-400 hover:text-gray-200 transition" href="#experience">Experience</a></li>
<li><a className="text-gray-400 hover:text-gray-200 transition" href="#education">Education</a></li>
<li><a className="text-gray-400 hover:text-gray-200 transition" href="#projects">Projects</a></li>
</ul>
</div>
</aside>

<main className="w-full md:w-2/3 lg:w-3/4 p-7 overflow-y-auto max-h-[90vh]">

<section className="resume-section mb-10" id="summary">
<h2 className="text-xl font-semibold mb-3 text-gray-100 tracking-wide">Professional Summary</h2>
<p className="text-gray-300 text-base">
            Innovative, solutions-driven Full Stack Developer with 6+ years of experience designing and building scalable web applications. Adept at collaborating across teams and translating business requirements into technical solutions. Passionate about clean, maintainable code and exceptional user experiences.
          </p>
</section>

<section className="resume-section mb-10" id="skills">
<h2 className="text-xl font-semibold mb-3 text-gray-100 tracking-wide">Skills</h2>
<ul className="flex flex-wrap gap-3 text-sm">
<li className="bg-gray-600/30 text-gray-200 px-3 py-1 rounded">JavaScript</li>
<li className="bg-gray-600/30 text-gray-200 px-3 py-1 rounded">TypeScript</li>
<li className="bg-gray-600/30 text-gray-200 px-3 py-1 rounded">React</li>
<li className="bg-gray-600/30 text-gray-200 px-3 py-1 rounded">Vue.js</li>
<li className="bg-gray-600/30 text-gray-200 px-3 py-1 rounded">Node.js</li>
<li className="bg-gray-600/30 text-gray-200 px-3 py-1 rounded">Python</li>
<li className="bg-gray-600/30 text-gray-200 px-3 py-1 rounded">SQL</li>
<li className="bg-gray-600/30 text-gray-200 px-3 py-1 rounded">GraphQL</li>
<li className="bg-gray-600/30 text-gray-200 px-3 py-1 rounded">Docker</li>
<li className="bg-gray-600/30 text-gray-200 px-3 py-1 rounded">AWS</li>
<li className="bg-gray-600/30 text-gray-200 px-3 py-1 rounded">CI/CD</li>
<li className="bg-gray-600/30 text-gray-200 px-3 py-1 rounded">Figma</li>
</ul>
</section>

<section className="resume-section mb-10" id="experience">
<h2 className="text-xl font-semibold mb-3 text-gray-100 tracking-wide">Experience</h2>
<div className="mb-5">
<h3 className="font-semibold text-lg text-white">Lead Software Engineer</h3>
<div className="flex flex-wrap items-center text-gray-400 text-sm mb-1">
<span>FinSight Analytics</span>
<span className="mx-2">|</span>
<span>San Francisco, CA</span>
<span className="mx-2">|</span>
<span>2021 – Present</span>
</div>
<ul className="list-disc list-inside text-gray-300 text-sm ml-2 mt-2 space-y-1">
<li>Architected and developed a real-time analytics platform for financial data with 100K+ active users.</li>
<li>Led a team of 6 developers, implementing agile best practices and improving delivery speed by 25%.</li>
<li>Integrated AI modules for predictive analytics using Python and TensorFlow.</li>
</ul>
</div>
<div className="mb-5">
<h3 className="font-semibold text-lg text-white">Full Stack Developer</h3>
<div className="flex flex-wrap items-center text-gray-400 text-sm mb-1">
<span>NovaTech Solutions</span>
<span className="mx-2">|</span>
<span>Remote</span>
<span className="mx-2">|</span>
<span>2018 – 2021</span>
</div>
<ul className="list-disc list-inside text-gray-300 text-sm ml-2 mt-2 space-y-1">
<li>Built scalable web applications using React, Node.js, and PostgreSQL.</li>
<li>Collaborated with designers to deliver pixel-perfect UIs using Figma and CSS-in-JS.</li>
<li>Automated CI/CD pipelines with Docker and GitHub Actions.</li>
</ul>
</div>
<div>
<h3 className="font-semibold text-lg text-white">Web Developer</h3>
<div className="flex flex-wrap items-center text-gray-400 text-sm mb-1">
<span>Bright Web Agency</span>
<span className="mx-2">|</span>
<span>San Francisco, CA</span>
<span className="mx-2">|</span>
<span>2016 – 2018</span>
</div>
<ul className="list-disc list-inside text-gray-300 text-sm ml-2 mt-2 space-y-1">
<li>Developed custom websites and e-commerce solutions for local businesses.</li>
<li>Improved SEO and page performance, increasing client web traffic by up to 40%.</li>
</ul>
</div>
</section>

<section className="resume-section mb-10" id="education">
<h2 className="text-xl font-semibold mb-3 text-gray-100 tracking-wide">Education</h2>
<div>
<h3 className="font-semibold text-lg text-white">B.Sc. Computer Science</h3>
<div className="flex flex-wrap items-center text-gray-400 text-sm mb-1">
<span>University of California, Berkeley</span>
<span className="mx-2">|</span>
<span>2012 – 2016</span>
</div>
<ul className="list-disc list-inside text-gray-300 text-sm ml-2 mt-2 space-y-1">
<li>Graduated with Honors, GPA: 3.8/4.0</li>
<li>Relevant Coursework: Algorithms, Machine Learning, Web Development</li>
</ul>
</div>
</section>

<section className="resume-section mb-4" id="projects">
<h2 className="text-xl font-semibold mb-3 text-gray-100 tracking-wide">Projects</h2>
<div className="space-y-5">
<div>
<h3 className="font-semibold text-base text-white">Neural Finance Dashboard</h3>
<div className="flex flex-wrap gap-2 text-xs mb-1 mt-1">
<span className="bg-gray-500/20 text-gray-200 px-2 py-0.5 rounded">React</span>
<span className="bg-gray-500/20 text-gray-200 px-2 py-0.5 rounded">TypeScript</span>
<span className="bg-gray-500/20 text-gray-200 px-2 py-0.5 rounded">Node.js</span>
</div>
<p className="text-sm text-gray-300 mb-1">
                Real-time financial analytics platform with AI-driven insights and predictive modeling for investment teams.
              </p>
<a className="text-gray-200 text-xs hover:underline" href="#">View Project</a>
</div>
<div>
<h3 className="font-semibold text-base text-white">Quantum Chat App</h3>
<div className="flex flex-wrap gap-2 text-xs mb-1 mt-1">
<span className="bg-gray-500/20 text-gray-200 px-2 py-0.5 rounded">Vue.js</span>
<span className="bg-gray-500/20 text-gray-200 px-2 py-0.5 rounded">Firebase</span>
<span className="bg-gray-500/20 text-gray-200 px-2 py-0.5 rounded">WebRTC</span>
</div>
<p className="text-sm text-gray-300 mb-1">
                End-to-end encrypted messaging app featuring real-time translation and AI-assisted responses.
              </p>
<a className="text-gray-200 text-xs hover:underline" href="#">View Project</a>
</div>
</div>
</section>
</main>
</div>
</div>

    </>
  );
}
