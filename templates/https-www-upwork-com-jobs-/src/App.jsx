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
      

<nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200/80">
<div className="sm:px-6 lg:px-8 flex h-14 max-w-6xl mr-auto ml-auto pr-4 pl-4 items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-md">
<span className="text-sm font-semibold tracking-tighter uppercase font-manrope">JB.</span>
</div>
</div>
<div className="flex items-center gap-4">
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors font-medium font-manrope" href="#">Find Work</a>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors font-medium font-manrope" href="#">My Proposals</a>
<div className="w-px h-4 bg-slate-200"></div>
<div className="w-7 h-7 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center">
<iconify-icon className="text-slate-600 text-sm" icon="solar:user-linear"></iconify-icon>
</div>
</div>
</div>
</nav>

<main className="sm:px-6 lg:px-8 md:py-12 flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-6xl mr-auto ml-auto pt-8 pr-4 pb-8 pl-4 gap-x-8 gap-y-8 items-start">

<div className="w-full lg:flex-1 min-w-0">

<div className="mb-8">
<div className="text-xs font-medium text-slate-500 mb-3 flex items-center gap-2">
<a className="hover:text-slate-900 transition-colors font-manrope" href="#">Web Development</a>
<span className="font-manrope">•</span>
<span className="font-manrope">Posted 2 hours ago</span>
</div>
<h1 className="sm:text-3xl md:text-4xl leading-tight text-2xl font-medium text-black tracking-tight font-montserrat mb-6">
                    Next.js Website Design &amp; Development
                </h1>
<p className="text-sm md:text-base text-slate-600 leading-relaxed font-manrope">
                    We are seeking a professional or firm to design and develop a website using Next.js with SEO optimization. The ideal candidate will have experience in both design and development, ensuring a visually appealing and functional website. The project requires a strong understanding of Next.js and SEO best practices to enhance the website's visibility and performance.
                </p>
</div>
<hr className="border-slate-200/80 mb-8"/>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-2 text-black font-medium text-sm font-manrope">
<iconify-icon className="text-slate-400 text-base" icon="solar:wad-of-money-linear"></iconify-icon>
                        $2,000.00
                    </div>
<span className="text-xs text-slate-500 font-manrope">Fixed-price budget</span>
</div>
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-2 text-black font-medium text-sm font-manrope">
<iconify-icon className="text-slate-400 text-base" icon="solar:user-speak-linear"></iconify-icon>
                        Intermediate
                    </div>
<span className="text-xs text-slate-500 font-manrope">Experience &amp; value mix</span>
</div>
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-2 text-black font-medium text-sm font-manrope">
<iconify-icon className="text-slate-400 text-base" icon="solar:calendar-linear"></iconify-icon>
                        Ongoing project
                    </div>
<span className="text-xs text-slate-500 font-manrope">Project type</span>
</div>
</div>
<hr className="border-slate-200/80 mb-8"/>

<div className="mb-10">
<h2 className="text-lg font-medium tracking-tight text-black mb-4 flex items-center gap-2 font-manrope">
<iconify-icon className="text-slate-400 text-lg" icon="solar:clipboard-list-linear"></iconify-icon>
                    Screening Questions
                </h2>
<p className="text-sm text-slate-500 mb-4 font-manrope">You will be asked to answer the following questions when submitting a proposal:</p>
<div className="space-y-3">
<div className="bg-white border border-slate-200 rounded-lg p-4 text-sm text-slate-700 shadow-sm shadow-slate-100/50 font-manrope">
                        1. Describe your recent experience with similar projects
                    </div>
<div className="bg-white border border-slate-200 rounded-lg p-4 text-sm text-slate-700 shadow-sm shadow-slate-100/50 font-manrope">
                        2. Please list any certifications related to this project
                    </div>
<div className="bg-white border border-slate-200 rounded-lg p-4 text-sm text-slate-700 shadow-sm shadow-slate-100/50 font-manrope">
                        3. Include a link to your GitHub profile and/or website
                    </div>
<div className="bg-white border border-slate-200 rounded-lg p-4 text-sm text-slate-700 shadow-sm shadow-slate-100/50 font-manrope">
                        4. What frameworks have you worked with?
                    </div>
<div className="bg-white border border-slate-200 rounded-lg p-4 text-sm text-slate-700 shadow-sm shadow-slate-100/50 font-manrope">
                        5. Describe your approach to testing and improving QA
                    </div>
</div>
</div>

<div className="mb-8">
<h2 className="text-lg font-medium tracking-tight text-black mb-5 font-manrope">Skills and Expertise</h2>
<div className="mb-6">
<h3 className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-3 font-manrope">Mandatory Skills</h3>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800 border border-slate-200/60 hover:bg-slate-200/50 transition-colors cursor-default font-manrope">
                            Web Design
                        </span>
<span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800 border border-slate-200/60 hover:bg-slate-200/50 transition-colors cursor-default font-manrope">
                            Web Development
                        </span>
<span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800 border border-slate-200/60 hover:bg-slate-200/50 transition-colors cursor-default font-manrope">
                            Next.js
                        </span>
<span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800 border border-slate-200/60 hover:bg-slate-200/50 transition-colors cursor-default font-manrope">
                            SEO
                        </span>
</div>
</div>
<div>
<h3 className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-3 font-manrope">Nice-to-have Skills</h3>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-white text-slate-600 border border-slate-200 hover:border-slate-300 transition-colors cursor-default font-manrope">
                            HTML5
                        </span>
<span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-white text-slate-600 border border-slate-200 hover:border-slate-300 transition-colors cursor-default font-manrope">
                            PHP
                        </span>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-80 flex-shrink-0 flex flex-col gap-6">

<div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm shadow-slate-100/50">
<button className="w-full bg-black text-white text-sm font-medium py-2.5 px-4 rounded-lg hover:bg-slate-800 transition-all active:scale-[0.98] flex items-center justify-center gap-2 mb-3 font-manrope">
                    Submit a Proposal
                </button>
<button className="w-full bg-white text-slate-700 border border-slate-200 text-sm font-medium py-2.5 px-4 rounded-lg hover:bg-slate-50 transition-all active:scale-[0.98] flex items-center justify-center gap-2 group font-manrope">
<iconify-icon className="text-lg text-slate-400 group-hover:text-slate-600 transition-colors" icon="solar:heart-linear"></iconify-icon>
                    Save Job
                </button>
</div>

<div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm shadow-slate-100/50">
<h3 className="text-sm font-medium tracking-tight text-black mb-4 font-manrope">Preferred Qualifications</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-400 text-lg shrink-0 mt-0.5" icon="solar:chat-round-line-linear"></iconify-icon>
<div>
<p className="text-sm text-black font-medium font-manrope">English Level</p>
<p className="text-xs text-slate-500 mt-0.5 font-manrope">Conversational</p>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-400 text-lg shrink-0 mt-0.5" icon="solar:map-point-linear"></iconify-icon>
<div>
<p className="text-sm text-black font-medium font-manrope">Location</p>
<p className="text-xs text-slate-500 mt-0.5 font-manrope">India</p>
</div>
</li>
</ul>
</div>

<div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm shadow-slate-100/50">
<h3 className="text-sm font-medium tracking-tight text-black mb-4 font-manrope">Activity on this job</h3>
<ul className="space-y-3 text-sm">
<li className="flex justify-between items-center">
<span className="text-slate-500 flex items-center gap-2 font-manrope">
<iconify-icon className="text-slate-400" icon="solar:documents-linear"></iconify-icon>
                            Proposals
                        </span>
<span className="font-medium text-black font-manrope">15 to 20</span>
</li>
<li className="flex justify-between items-center">
<span className="text-slate-500 flex items-center gap-2 font-manrope">
<iconify-icon className="text-slate-400" icon="solar:eye-linear"></iconify-icon>
                            Last viewed
                        </span>
<span className="font-medium text-black font-manrope">1 hour ago</span>
</li>
</ul>
</div>
</div>
</main>

    </>
  );
}
