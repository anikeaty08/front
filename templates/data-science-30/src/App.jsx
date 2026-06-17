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
      

<div className="absolute inset-0 z-[-1] bg-grid mask-image:linear-gradient(to_bottom,white,transparent)"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[30rem] bg-zinc-800/20 blur-[8rem] rounded-full z-[-1] pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6 pt-32 pb-24">

<header className="mb-24 animate-fade-in">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-300 mb-8 font-medium">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-500"></span>
</span>
                Data Science Engineering Student
            </div>
<h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-zinc-100 mb-4">
                Turning Data into<br/>Meaningful Insights
            </h1>
<h2 className="text-xl font-medium tracking-tight text-zinc-400 mb-6">Mohammed Soha Sultana</h2>
<p className="text-base text-zinc-400 mb-10 leading-relaxed max-w-2xl">
                Data Science Engineering student with strong analytical skills and a data-driven approach to problem-solving. Passionate about visualizing and interpreting data to generate meaningful business insights, and adept at communicating technical findings effectively.
            </p>
<div className="flex flex-wrap items-center gap-4 mb-12">
<a className="px-5 py-2.5 bg-zinc-100 text-zinc-900 text-sm font-medium rounded-lg hover:bg-white transition-colors" href="#contact">Contact Me</a>
<a className="px-5 py-2.5 bg-white/5 text-zinc-100 text-sm font-medium rounded-lg border border-white/10 hover:bg-white/10 transition-colors" href="#projects">View Projects</a>
<a className="px-5 py-2.5 text-zinc-400 text-sm font-medium hover:text-zinc-100 transition-colors flex items-center gap-2" href="#">
<iconify-icon className="text-lg" icon="solar:document-linear"></iconify-icon>
                    Resume
                </a>
</div>
<div className="flex flex-wrap items-center gap-6 text-zinc-500 border-t border-white/5 pt-8">
<a className="hover:text-zinc-100 transition-colors flex items-center gap-2 text-sm" href="mailto:sohasultana0325@gmail.com">
<iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon>
<span>sohasultana0325@gmail.com</span>
</a>
<a className="hover:text-zinc-100 transition-colors flex items-center gap-2 text-sm" href="https://linkedin.com/in/mohammed-soha-sultana" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-xl" icon="solar:link-minimalistic-linear"></iconify-icon>
<span>LinkedIn</span>
</a>
<a className="hover:text-zinc-100 transition-colors flex items-center gap-2 text-sm" href="tel:+917013882712">
<iconify-icon className="text-xl" icon="solar:phone-linear"></iconify-icon>
<span>+91 7013882712</span>
</a>
<span className="flex items-center gap-2 text-sm">
<iconify-icon className="text-xl" icon="solar:map-point-linear"></iconify-icon>
<span>Hyderabad, India</span>
</span>
</div>
</header>

<section className="mb-24 animate-fade-in delay-100">
<h2 className="text-xl font-medium tracking-tight text-zinc-100 mb-8 flex items-center gap-3">
<iconify-icon className="text-zinc-500" icon="solar:case-linear"></iconify-icon>
                Experience
            </h2>
<div className="space-y-8 pl-1">
<div className="group relative border-l border-white/10 pl-6 pb-2">
<div className="absolute w-2 h-2 bg-zinc-700 rounded-full -left-[4px] top-1.5 group-hover:bg-zinc-300 transition-colors"></div>
<div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1.5">
<h3 className="text-base font-medium text-zinc-100">Data Analytics Virtual Internship</h3>
<span className="text-sm text-zinc-500 mt-1 sm:mt-0">Australia</span>
</div>
<p className="text-base text-zinc-400">Deloitte</p>
</div>
</div>
</section>

<section className="mb-24 animate-fade-in delay-200" id="projects">
<h2 className="text-xl font-medium tracking-tight text-zinc-100 mb-8 flex items-center gap-3">
<iconify-icon className="text-zinc-500" icon="solar:folder-with-files-linear"></iconify-icon>
                Projects
            </h2>
<div className="grid grid-cols-1 gap-6">

<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6 sm:p-8 hover:bg-zinc-900/60 hover:border-white/10 transition-all duration-300 group">
<div className="flex items-start justify-between mb-4">
<h3 className="text-lg font-medium tracking-tight text-zinc-100 group-hover:text-white transition-colors">Luxury Watches &amp; Accessories</h3>
<iconify-icon className="text-xl text-zinc-600 group-hover:text-zinc-300 transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<p className="text-sm font-medium text-zinc-500 mb-4">Web Application</p>
<ul className="space-y-2 text-base text-zinc-400 list-disc list-outside ml-4 marker:text-zinc-700 leading-relaxed">
<li>Developed a premium web application focused on showcasing luxury watches and accessories.</li>
<li>Designed to meet the needs of users interested in premium fashion and luxury products.</li>
<li>Emphasized user experience and elegant UI/UX suitable for high-end brands.</li>
</ul>
</div>

<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6 sm:p-8 hover:bg-zinc-900/60 hover:border-white/10 transition-all duration-300 group">
<div className="flex items-start justify-between mb-4">
<h3 className="text-lg font-medium tracking-tight text-zinc-100 group-hover:text-white transition-colors">Utsav</h3>
<iconify-icon className="text-xl text-zinc-600 group-hover:text-zinc-300 transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<p className="text-sm font-medium text-zinc-500 mb-4">Event Planning Application</p>
<ul className="space-y-2 text-base text-zinc-400 list-disc list-outside ml-4 marker:text-zinc-700 leading-relaxed">
<li>Built an affordable event planning platform aimed at middle-class families.</li>
<li>Implemented a budget planner feature to help clients visualize and manage expenses.</li>
<li>Provided quick-access planning services for setups within a few hours.</li>
<li>Focused on delivering premium experiences within user-defined budgets.</li>
</ul>
</div>
</div>
</section>

<section className="mb-24 animate-fade-in delay-300">
<h2 className="text-xl font-medium tracking-tight text-zinc-100 mb-8 flex items-center gap-3">
<iconify-icon className="text-zinc-500" icon="solar:code-square-linear"></iconify-icon>
                Technical Skills
            </h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-12">
<div>
<h3 className="text-sm font-medium text-zinc-100 mb-3 flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="solar:laptop-minimalistic-linear"></iconify-icon>
                        Programming
                    </h3>
<p className="text-base text-zinc-400 leading-relaxed">Python, Java, JavaScript, HTML, CSS, SQL</p>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-100 mb-3 flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="solar:layers-linear"></iconify-icon>
                        Frameworks &amp; Libraries
                    </h3>
<p className="text-base text-zinc-400 leading-relaxed">React.js, Angular, Node.js</p>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-100 mb-3 flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="solar:database-linear"></iconify-icon>
                        Databases
                    </h3>
<p className="text-base text-zinc-400 leading-relaxed">DBMS, SQL</p>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-100 mb-3 flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="solar:chart-square-linear"></iconify-icon>
                        Data &amp; Visualization Tools
                    </h3>
<p className="text-base text-zinc-400 leading-relaxed">Tableau, Power BI</p>
</div>
<div className="sm:col-span-2">
<h3 className="text-sm font-medium text-zinc-100 mb-3 flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="solar:cpu-linear"></iconify-icon>
                        Core Competencies
                    </h3>
<p className="text-base text-zinc-400 leading-relaxed">Data Analysis, Data Visualization, UI Design</p>
</div>
</div>
</section>

<section className="mb-24 animate-fade-in delay-300">
<h2 className="text-xl font-medium tracking-tight text-zinc-100 mb-8 flex items-center gap-3">
<iconify-icon className="text-zinc-500" icon="solar:diploma-linear"></iconify-icon>
                Education
            </h2>
<div className="space-y-8">
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2">
<div className="max-w-md">
<h3 className="text-base font-medium text-zinc-100">Malla Reddy University</h3>
<p className="text-base text-zinc-400 mt-1">B.Tech in Computer Science (Data Science)</p>
</div>
<div className="text-left sm:text-right mt-2 sm:mt-0 shrink-0">
<span className="text-sm text-zinc-500 block">Aug 2024 - June 2028</span>
<span className="text-sm text-zinc-600 block mt-0.5">Hyderabad</span>
</div>
</div>
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2">
<div className="max-w-md">
<h3 className="text-base font-medium text-zinc-100">Narayana Junior College</h3>
<p className="text-base text-zinc-400 mt-1">Intermediate (MPC)</p>
</div>
<div className="text-left sm:text-right mt-2 sm:mt-0 shrink-0">
<span className="text-sm text-zinc-500 block">June 2022 - May 2024</span>
<span className="text-sm text-zinc-600 block mt-0.5">Hyderabad</span>
</div>
</div>
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2">
<div className="max-w-md">
<h3 className="text-base font-medium text-zinc-100">Sri Chaitanya Techno School</h3>
<p className="text-base text-zinc-400 mt-1">Class 10</p>
</div>
<div className="text-left sm:text-right mt-2 sm:mt-0 shrink-0">
<span className="text-sm text-zinc-500 block">July 2021 - April 2022</span>
<span className="text-sm text-zinc-600 block mt-0.5">Hyderabad</span>
</div>
</div>
</div>
</section>

<section className="mb-24 animate-fade-in delay-300">
<h2 className="text-xl font-medium tracking-tight text-zinc-100 mb-8 flex items-center gap-3">
<iconify-icon className="text-zinc-500" icon="solar:users-group-two-rounded-linear"></iconify-icon>
                Leadership &amp; Activities
            </h2>
<div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 sm:p-8">
<div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-4">
<h3 className="text-base font-medium text-zinc-100">Fraternity</h3>
</div>
<ul className="space-y-3 text-base text-zinc-400 list-disc list-outside ml-4 marker:text-zinc-700 leading-relaxed">
<li>Cultural Club Organizer, orchestrating successful community events.</li>
<li>Lead Event Organizer for college-wide Hackathon.</li>
</ul>
</div>
</section>

<section className="mb-12 animate-fade-in delay-300" id="contact">
<h2 className="text-xl font-medium tracking-tight text-zinc-100 mb-8 flex items-center gap-3">
<iconify-icon className="text-zinc-500" icon="solar:letter-opened-linear"></iconify-icon>
                Get In Touch
            </h2>
<form className="space-y-4 max-w-xl">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<input className="w-full bg-zinc-900/50 border border-white/5 rounded-xl px-4 py-3.5 text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-colors" placeholder="Name" type="text"/>
<input className="w-full bg-zinc-900/50 border border-white/5 rounded-xl px-4 py-3.5 text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-colors" placeholder="Email" type="email"/>
</div>
<textarea className="w-full bg-zinc-900/50 border border-white/5 rounded-xl px-4 py-3.5 text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-colors resize-none" placeholder="Message" rows="5"></textarea>
<div className="pt-2">
<button className="w-full sm:w-auto px-6 py-3 bg-zinc-100 text-zinc-900 text-sm font-medium rounded-lg hover:bg-white transition-colors flex items-center justify-center gap-2" type="submit">
                        Send Message
                        <iconify-icon className="text-lg" icon="solar:plain-linear"></iconify-icon>
</button>
</div>
</form>
</section>
</div>

    </>
  );
}
