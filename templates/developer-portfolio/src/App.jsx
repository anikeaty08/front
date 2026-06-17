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



        lucide.createIcons();
    
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
      

<div className="fixed top-0 right-0 w-3/4 h-screen bg-gradient-to-b from-orange-900/20 via-neutral-950 to-neutral-950 blur-[120px] -z-10 pointer-events-none opacity-40"></div>
<div className="fixed bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-red-900/10 to-transparent blur-[100px] -z-10 pointer-events-none"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="text-lg font-medium tracking-tight text-white flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                Priyanka Mehra
            </div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors duration-200" href="#experience">Experience</a>
<a className="hover:text-white transition-colors duration-200" href="#projects">Projects</a>
<a className="hover:text-white transition-colors duration-200" href="#skills">Skills</a>
<a className="hover:text-white transition-colors duration-200" href="#contact">Contact</a>
</div>
<a className="text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-neutral-200 transition-colors" href="mailto:priyanka.mehra@gmail.com">
                Get in touch
            </a>
</div>
</nav>
<main className="relative pt-32 pb-20">

<section className="max-w-7xl mx-auto px-6 min-h-[85vh] flex flex-col md:flex-row items-center">
<div className="w-full md:w-1/2 z-10 space-y-8">
<div className="flex items-center gap-2 text-orange-500 text-sm font-medium tracking-wide uppercase">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                    Available for hire
                </div>
<h1 className="text-6xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white leading-[1.1]">
                    Full Stack <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-500">Web Developer.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-lg leading-relaxed font-light">
                    Dedicated and efficient developer with 6+ years experience in application layers, presentation layers, and databases. Spearheading transitions to modern stacks.
                </p>
<div className="flex flex-wrap gap-4 pt-4">
<a className="flex items-center gap-2 px-6 py-3 bg-neutral-900 border border-neutral-800 rounded-full hover:border-neutral-600 hover:bg-neutral-800 transition group" href="https://github.com/timfak12" target="_blank">
<i className="w-5 h-5 text-neutral-400 group-hover:text-white transition" data-lucide="github"></i>
<span className="text-sm font-medium text-white">GitHub</span>
</a>
<a className="flex items-center gap-2 px-6 py-3 bg-neutral-900 border border-neutral-800 rounded-full hover:border-neutral-600 hover:bg-neutral-800 transition group" href="http://linkdeln.com/tim12fak" target="_blank">
<i className="w-5 h-5 text-neutral-400 group-hover:text-white transition" data-lucide="linkedin"></i>
<span className="text-sm font-medium text-white">LinkedIn</span>
</a>
<a className="flex items-center gap-2 px-6 py-3 bg-neutral-900 border border-neutral-800 rounded-full hover:border-neutral-600 hover:bg-neutral-800 transition group" href="https://instagram.com/tim12fak" target="_blank">
<i className="w-5 h-5 text-neutral-400 group-hover:text-white transition" data-lucide="instagram"></i>
<span className="text-sm font-medium text-white">Instagram</span>
</a>
</div>
</div>

<div className="w-full md:w-1/2 flex justify-center items-center mt-12 md:mt-0 relative">

<div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-to-tr from-orange-600 to-red-600 rounded-full blur-[80px] opacity-20"></div>

<div className="relative w-full max-w-md bg-neutral-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden group">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500"></div>
<div className="space-y-6">
<div className="flex justify-between items-center border-b border-white/5 pb-4">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/50"></div>
</div>
<span className="text-xs font-mono text-neutral-500">stack_migration.js</span>
</div>
<div className="space-y-3 font-mono text-sm text-neutral-400">
<p><span className="text-purple-400">const</span> <span className="text-blue-400">impact</span> = {</p>
<p className="pl-4">latency_reduction: <span className="text-orange-400">'40%'</span>,</p>
<p className="pl-4">db_admin_effectiveness: <span className="text-orange-400">'20%'</span>,</p>
<p className="pl-4">stack: [<span className="text-green-400">'MEAN'</span>, <span className="text-green-400">'LAMP'</span>]</p>
<p>};</p>
<p className="text-neutral-600">// Successfully spearheaded transition</p>
</div>
<div className="pt-4 flex items-center justify-between">
<div className="text-xs text-neutral-500 uppercase tracking-widest">Status</div>
<div className="text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded">Optimization Complete</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-12 border-y border-white/5 bg-white/[0.02]">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div>
<h3 className="text-3xl font-medium text-white tracking-tight">20+</h3>
<p className="text-sm text-neutral-500 mt-1">Projects in Market</p>
</div>
<div>
<h3 className="text-3xl font-medium text-white tracking-tight">6+</h3>
<p className="text-sm text-neutral-500 mt-1">Years Experience</p>
</div>
<div>
<h3 className="text-3xl font-medium text-white tracking-tight">40%</h3>
<p className="text-sm text-neutral-500 mt-1">Latency Reduced</p>
</div>
<div>
<h3 className="text-3xl font-medium text-white tracking-tight">5+</h3>
<p className="text-sm text-neutral-500 mt-1">Major Certifications</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24" id="experience">
<h2 className="text-3xl font-medium tracking-tight text-white mb-16">Work Experience</h2>
<div className="relative border-l border-neutral-800 ml-3 md:ml-6 space-y-16">

<div className="relative pl-8 md:pl-12 group">
<span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-neutral-800 border border-neutral-600 group-hover:bg-orange-500 group-hover:border-orange-500 transition-colors duration-300"></span>
<div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
<h3 className="text-xl font-medium text-white">Full Stack Developer</h3>
<span className="text-sm font-mono text-neutral-500">May 2016 – June 2019</span>
</div>
<p className="text-lg text-neutral-300 mb-4">General Gaming <span className="text-neutral-600 px-2">•</span> Boston, MA</p>
<ul className="space-y-3 mb-6 text-neutral-400 text-base leading-relaxed max-w-3xl">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-neutral-600 shrink-0 mt-1" data-lucide="check"></i>
<span>Spearheaded transition from LAMP stack to MEAN stack, reducing latency by 40% and increasing database admin effectiveness by 20%.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-neutral-600 shrink-0 mt-1" data-lucide="check"></i>
<span>Developed full-stack web applications which processed, analyzed, and rendered data visually.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-neutral-600 shrink-0 mt-1" data-lucide="check"></i>
<span>Managed time-sensitive updates, including content changes and database upgrades.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-neutral-600 shrink-0 mt-1" data-lucide="check"></i>
<span>Liaised with back end developers, front end developers, QA testers, and CTO.</span>
</li>
</ul>
</div>

<div className="relative pl-8 md:pl-12 group">
<span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-neutral-800 border border-neutral-600 group-hover:bg-orange-500 group-hover:border-orange-500 transition-colors duration-300"></span>
<div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
<h3 className="text-xl font-medium text-white">Junior Full Stack Developer</h3>
<span className="text-sm font-mono text-neutral-500">Dec 2012 – April 2016</span>
</div>
<p className="text-lg text-neutral-300 mb-4">Crazy Lazy Apps <span className="text-neutral-600 px-2">•</span> Los Angeles, CA</p>
<ul className="space-y-3 mb-6 text-neutral-400 text-base leading-relaxed max-w-3xl">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-neutral-600 shrink-0 mt-1" data-lucide="check"></i>
<span>Maximized applications’ efficiency, data quality, scope, operability, and flexibility.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-neutral-600 shrink-0 mt-1" data-lucide="check"></i>
<span>Utilized distributed computing, ML, and AI concepts to solve challenging dataset problems.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-neutral-600 shrink-0 mt-1" data-lucide="check"></i>
<span>Developed app integration with REST / SOAP APIs for Google Maps, social media logins, and payment processors.</span>
</li>
</ul>
<div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded-md text-yellow-500 text-sm">
<i className="w-3.5 h-3.5" data-lucide="trophy"></i>
                        Awarded Dev of the Quarter (Q3/2015)
                    </div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5" id="skills">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 space-y-6">
<div className="bg-neutral-900/30 border border-white/5 rounded-2xl p-8 h-full">
<h3 className="text-xl font-medium text-white mb-8 tracking-tight flex items-center gap-2">
<i className="w-5 h-5 text-orange-500" data-lucide="cpu"></i>
                            Technical Arsenal
                        </h3>
<div className="space-y-8">
<div>
<h4 className="text-sm font-medium text-neutral-500 uppercase tracking-widest mb-4">Core Stack</h4>
<div className="flex flex-wrap gap-2">
<span className="px-4 py-2 bg-neutral-800/50 border border-neutral-700 text-neutral-200 rounded-lg text-sm">HTML5 / CSS3</span>
<span className="px-4 py-2 bg-neutral-800/50 border border-neutral-700 text-neutral-200 rounded-lg text-sm">JavaScript (ES6+)</span>
<span className="px-4 py-2 bg-neutral-800/50 border border-neutral-700 text-neutral-200 rounded-lg text-sm">PHP</span>
<span className="px-4 py-2 bg-neutral-800/50 border border-neutral-700 text-neutral-200 rounded-lg text-sm">SQL</span>
<span className="px-4 py-2 bg-neutral-800/50 border border-neutral-700 text-neutral-200 rounded-lg text-sm">Angular JS</span>
<span className="px-4 py-2 bg-neutral-800/50 border border-neutral-700 text-neutral-200 rounded-lg text-sm">Bootstrap</span>
<span className="px-4 py-2 bg-neutral-800/50 border border-neutral-700 text-neutral-200 rounded-lg text-sm">jQuery</span>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-neutral-500 uppercase tracking-widest mb-4">Specialized</h4>
<div className="flex flex-wrap gap-2">
<span className="px-4 py-2 bg-neutral-800/50 border border-neutral-700 text-neutral-200 rounded-lg text-sm">Google Compute Engine</span>
<span className="px-4 py-2 bg-neutral-800/50 border border-neutral-700 text-neutral-200 rounded-lg text-sm">Android/iOS Dev</span>
<span className="px-4 py-2 bg-neutral-800/50 border border-neutral-700 text-neutral-200 rounded-lg text-sm">REST / SOAP</span>
<span className="px-4 py-2 bg-neutral-800/50 border border-neutral-700 text-neutral-200 rounded-lg text-sm">Linux/Unix</span>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-1 space-y-6">
<div className="bg-neutral-900/30 border border-white/5 rounded-2xl p-8">
<h3 className="text-xl font-medium text-white mb-6 tracking-tight flex items-center gap-2">
<i className="w-5 h-5 text-orange-500" data-lucide="graduation-cap"></i>
                            Education
                        </h3>
<div className="mb-4">
<h4 className="text-white text-lg">B.S. Software Development</h4>
<p className="text-neutral-400 text-base mt-1">Champlain College</p>
<p className="text-neutral-500 text-sm mt-1">Burlington, VT • 2011</p>
</div>
<p className="text-sm text-neutral-500 leading-relaxed">
                            Coursework: OS Architecture, C++ I &amp; II, Data Engineering, Relational Database Design.
                        </p>
</div>
<div className="bg-neutral-900/30 border border-white/5 rounded-2xl p-8">
<h3 className="text-xl font-medium text-white mb-6 tracking-tight flex items-center gap-2">
<i className="w-5 h-5 text-orange-500" data-lucide="award"></i>
                            Certifications
                        </h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-neutral-300">
<div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 shrink-0"></div>
                                AWS Certified DevOps Engineer — Professional
                            </li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<div className="w-1.5 h-1.5 bg-neutral-600 rounded-full mt-2 shrink-0"></div>
                                Full-Stack Web Development with React
                            </li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<div className="w-1.5 h-1.5 bg-neutral-600 rounded-full mt-2 shrink-0"></div>
                                Free Code Camp Full Stack Cert
                            </li>
</ul>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-12">
<div className="border-t border-b border-white/5 py-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
<h3 className="text-lg font-medium text-neutral-400">Professional Memberships</h3>
<div className="flex flex-col md:flex-row gap-6 text-neutral-300">
<span className="flex items-center gap-2">
<i className="w-4 h-4 text-orange-500" data-lucide="users"></i>
                        Association for Women in Computing (AWC)
                    </span>
<span className="flex items-center gap-2">
<i className="w-4 h-4 text-orange-500" data-lucide="users"></i>
                        Association of IT Professionals (AITP)
                    </span>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 text-center" id="contact">
<div className="relative z-10">
<h2 className="text-5xl md:text-6xl font-medium tracking-tighter text-white mb-6">Let's build the future.</h2>
<p className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto">
                    Currently seeking to further improve HTML5 and CSS3 skills as the future full stack developer at Atmospheric Solutions.
                </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
<a className="px-8 py-4 bg-white text-black text-lg font-medium rounded-full hover:bg-neutral-200 transition-colors w-full md:w-auto" href="mailto:priyanka.mehra@gmail.com">
                        priyanka.mehra@gmail.com
                    </a>
<a className="px-8 py-4 bg-neutral-900 border border-neutral-800 text-white text-lg font-medium rounded-full hover:bg-neutral-800 transition-colors w-full md:w-auto" href="tel:7182126466">
                        (718) 212-6466
                    </a>
</div>
<div className="flex justify-center gap-8 border-t border-white/5 pt-12">
<a className="text-neutral-500 hover:text-white transition-colors" href="https://linkedin.com/in/priyankamehra">LinkedIn</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="https://github.com/timfak12">GitHub</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="https://instagram.com/tim12fak">Instagram</a>
</div>
<p className="mt-8 text-neutral-600 text-sm">
                    © 2024 Priyanka Mehra. Native Proficiency in Hindi.
                </p>
</div>
</section>
</main>


    </>
  );
}
