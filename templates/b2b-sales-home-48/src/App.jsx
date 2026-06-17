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
      

<nav className="sticky top-0 z-50 bg-[#fafafa]/80 backdrop-blur-md border-b border-neutral-200">
<div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">

<a className="font-medium tracking-tight text-xl text-black" href="#">
                    salesngon
                </a>

<div className="hidden md:flex items-center gap-6">
<a className="text-base font-normal text-neutral-500 hover:text-black transition" href="#blog">Blog</a>
<a className="text-base font-normal text-neutral-500 hover:text-black transition" href="#tools">Tools</a>
<a className="text-base font-normal text-neutral-500 hover:text-black transition" href="#courses">Courses</a>
<a className="text-base font-normal text-neutral-500 hover:text-black transition" href="#about">About</a>
</div>
</div>
<div className="flex items-center gap-6">
<a className="hidden sm:inline-block text-base font-normal text-neutral-600 hover:text-black transition" href="#">Log in</a>
<a className="bg-black text-white px-4 py-2 rounded-md text-base font-medium hover:bg-neutral-800 transition" href="#">Sign up</a>
</div>
</div>
</nav>

<header className="pt-32 pb-24 px-6 flex flex-col items-center text-center">
<div className="max-w-[1000px] mx-auto flex flex-col items-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 bg-white text-xs font-medium text-neutral-600 mb-8 shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                B2B Sales Knowledge Platform · Vietnam
            </div>

<h1 className="text-5xl sm:text-6xl md:text-[5rem] font-medium tracking-tight text-black mb-8 leading-[1.1]">
                Bán hàng ngon <br className="hidden sm:block"/> cần có khoa học.
            </h1>

<p className="text-lg sm:text-xl text-neutral-500 font-normal max-w-2xl mb-10 leading-relaxed">
                Practical frameworks, deep insights, and localized tools to help Vietnamese teams navigate complex procurement and close enterprise deals.
            </p>

<div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
<a className="w-full sm:w-auto bg-black text-white px-6 py-3 rounded-md text-base font-medium hover:bg-neutral-800 transition shadow-md" href="#blog">
                    Read Blog
                </a>
<a className="w-full sm:w-auto bg-white text-black px-6 py-3 rounded-md text-base font-medium border border-neutral-200 hover:bg-neutral-50 transition shadow-sm" href="#ebook">
                    Download Free Ebook
                </a>
</div>

<div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 pt-8 border-t border-neutral-200 w-full max-w-3xl">
<div className="flex flex-col items-center">
<span className="text-2xl font-medium tracking-tight text-black">50+</span>
<span className="text-sm font-normal text-neutral-500">Articles</span>
</div>
<div className="hidden sm:block w-px h-8 bg-neutral-200"></div>
<div className="flex flex-col items-center">
<span className="text-2xl font-medium tracking-tight text-black">3</span>
<span className="text-sm font-normal text-neutral-500">Tools</span>
</div>
<div className="hidden sm:block w-px h-8 bg-neutral-200"></div>
<div className="flex flex-col items-center">
<span className="text-2xl font-medium tracking-tight text-black">12+</span>
<span className="text-sm font-normal text-neutral-500">Years Exp.</span>
</div>
<div className="hidden sm:block w-px h-8 bg-neutral-200"></div>
<div className="flex flex-col items-center">
<span className="text-2xl font-medium tracking-tight text-black">1k+</span>
<span className="text-sm font-normal text-neutral-500">Followers</span>
</div>
</div>
</div>
</header>

<section className="py-24 bg-white border-t border-neutral-200" id="blog">
<div className="max-w-[1200px] mx-auto px-6">
<div className="flex items-end justify-between mb-12">
<h2 className="text-3xl font-medium tracking-tight text-black">Featured Articles</h2>
<a className="text-base font-medium text-neutral-500 hover:text-black transition flex items-center gap-1" href="#">
                    View all <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 bg-neutral-200 gap-px border border-neutral-200 rounded-xl overflow-hidden shadow-sm">

<article className="md:col-span-2 bg-white flex flex-col md:flex-row group cursor-pointer">
<div className="w-full md:w-1/2 p-10 lg:p-16 flex flex-col justify-center border-b md:border-b-0 md:border-r border-neutral-200">
<div className="flex items-center gap-3 mb-6 text-sm font-normal text-neutral-500">
<span className="uppercase tracking-tight text-xs font-medium bg-neutral-100 px-2 py-1 rounded">Strategy</span>
<span>5 min read</span>
</div>
<h3 className="text-3xl lg:text-4xl font-medium tracking-tight text-black mb-4 group-hover:text-blue-600 transition">
                            Mapping the Economic Buyer in Vietnamese Enterprises
                        </h3>
<p className="text-lg text-neutral-500 font-normal leading-relaxed">
                            Stop wasting time with non-decision makers. A tactical guide to identifying and securing meetings with the true budget holders in local conglomerates.
                        </p>
</div>

<div className="w-full md:w-1/2 bg-[#fafafa] relative min-h-[300px] flex items-center justify-center p-8 overflow-hidden">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:24px_24px]"></div>

<div className="w-full max-w-sm bg-white border border-neutral-200 rounded-lg shadow-sm p-6 relative z-10 flex flex-col gap-4">
<div className="flex items-center gap-4 border border-neutral-200 p-3 rounded-md bg-neutral-50">
<div className="w-8 h-8 rounded-full bg-neutral-200"></div>
<div className="w-32 h-2 bg-neutral-300 rounded"></div>
</div>
<div className="flex items-center gap-4 border border-blue-200 p-3 rounded-md bg-blue-50/50 ml-8 relative">
<div className="absolute -left-8 top-1/2 w-8 h-px bg-neutral-200"></div>
<div className="absolute -left-8 top-1/2 -mt-4 w-px h-4 bg-neutral-200"></div>
<div className="w-8 h-8 rounded-full border-2 border-blue-500 bg-white flex items-center justify-center"><i className="w-4 h-4 text-blue-500" data-lucide="target" strokeWidth="2"></i></div>
<div className="w-24 h-2 bg-blue-300 rounded"></div>
</div>
</div>
</div>
</article>

<article className="bg-white p-10 flex flex-col justify-between group cursor-pointer">
<div>
<div className="flex items-center gap-3 mb-4 text-sm font-normal text-neutral-500">
<span className="uppercase tracking-tight text-xs font-medium bg-neutral-100 px-2 py-1 rounded">Outbound</span>
</div>
<h4 className="text-2xl font-medium tracking-tight text-black mb-3 group-hover:text-blue-600 transition">Cold Email Frameworks that Actually Work</h4>
<p className="text-base text-neutral-500 font-normal">Why translating western templates fails, and how to structure sequences for the local market.</p>
</div>
<div className="mt-8 pt-6 border-t border-neutral-100">
<span className="text-base font-medium text-black flex items-center gap-1 group-hover:gap-2 transition-all">Read more <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i></span>
</div>
</article>

<article className="bg-white p-10 flex flex-col justify-between group cursor-pointer">
<div>
<div className="flex items-center gap-3 mb-4 text-sm font-normal text-neutral-500">
<span className="uppercase tracking-tight text-xs font-medium bg-neutral-100 px-2 py-1 rounded">Discovery</span>
</div>
<h4 className="text-2xl font-medium tracking-tight text-black mb-3 group-hover:text-blue-600 transition">The Art of the First Meeting</h4>
<p className="text-base text-neutral-500 font-normal">Structuring discovery calls to uncover true pain points without sounding like an interrogator.</p>
</div>
<div className="mt-8 pt-6 border-t border-neutral-100">
<span className="text-base font-medium text-black flex items-center gap-1 group-hover:gap-2 transition-all">Read more <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i></span>
</div>
</article>
</div>
</div>
</section>

<section className="pt-24 pb-0 bg-[#fafafa]" id="tools">
<div className="max-w-[1200px] mx-auto px-6 mb-12 text-center">
<h2 className="text-3xl font-medium tracking-tight text-black">Useful Sales Tools</h2>
<p className="text-lg text-neutral-500 font-normal mt-2">Calculators and utilities built for everyday deals.</p>
</div>

<div className="border-y border-neutral-200 bg-neutral-200">
<div className="grid grid-cols-1 md:grid-cols-3 gap-px max-w-[1400px] mx-auto overflow-hidden">

<a className="bg-white pt-12 px-8 sm:px-12 flex flex-col h-[400px] group relative hover:bg-neutral-50 transition duration-500" href="#">
<h3 className="text-2xl font-medium tracking-tight text-black mb-2">Personal Income Tax</h3>
<p className="text-base text-neutral-600 font-normal mb-8 leading-relaxed">Quickly calculate net income, deductions, and tax brackets for salary negotiations.</p>
<div className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center bg-white shadow-sm group-hover:border-black group-hover:text-white group-hover:bg-black transition z-10">
<i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>

<div className="mt-auto border border-neutral-200 border-b-0 rounded-t-xl bg-white w-full h-32 flex p-4 relative shadow-[0_-10px_40px_rgba(0,0,0,0.03)] overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-neutral-100 flex gap-1 px-2 pt-1">
<div className="w-1.5 h-1.5 rounded-full bg-red-400"></div><div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div><div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
</div>
<div className="w-full mt-4 flex flex-col gap-2">
<div className="w-1/3 h-2 bg-neutral-200 rounded"></div>
<div className="w-full h-8 border border-neutral-200 rounded bg-[#fafafa]"></div>
</div>
</div>
</a>

<a className="bg-white pt-12 px-8 sm:px-12 flex flex-col h-[400px] group relative hover:bg-neutral-50 transition duration-500" href="#">
<h3 className="text-2xl font-medium tracking-tight text-black mb-2">Tax Code Lookup</h3>
<p className="text-base text-neutral-600 font-normal mb-8 leading-relaxed">Verify company legal names, operating status, and essential details instantly.</p>
<div className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center bg-white shadow-sm group-hover:border-black group-hover:text-white group-hover:bg-black transition z-10">
<i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>

<div className="mt-auto border border-neutral-200 border-b-0 rounded-t-xl bg-white w-full h-32 flex p-4 relative shadow-[0_-10px_40px_rgba(0,0,0,0.03)] overflow-hidden justify-center items-end pb-0">
<div className="w-3/4 h-24 border border-neutral-200 border-b-0 rounded-t-lg bg-[#fafafa] flex flex-col items-center justify-center gap-3">
<i className="w-6 h-6 text-neutral-300" data-lucide="search" strokeWidth="1.5"></i>
<div className="w-1/2 h-2 bg-neutral-200 rounded"></div>
</div>
</div>
</a>

<a className="bg-white pt-12 px-8 sm:px-12 flex flex-col h-[400px] group relative hover:bg-neutral-50 transition duration-500" href="#">
<h3 className="text-2xl font-medium tracking-tight text-black mb-2">ROI Calculator</h3>
<p className="text-base text-neutral-600 font-normal mb-8 leading-relaxed">Build business cases and calculate financial impact for enterprise software deals.</p>
<div className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center bg-white shadow-sm group-hover:border-black group-hover:text-white group-hover:bg-black transition z-10">
<i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>

<div className="mt-auto border border-neutral-200 border-b-0 rounded-t-xl bg-white w-full h-32 flex p-4 relative shadow-[0_-10px_40px_rgba(0,0,0,0.03)] overflow-hidden items-end pb-0">
<div className="w-full flex items-end gap-2 h-full pt-4">
<div className="w-1/4 bg-neutral-200 rounded-t-sm h-1/3"></div>
<div className="w-1/4 bg-neutral-300 rounded-t-sm h-1/2"></div>
<div className="w-1/4 bg-neutral-400 rounded-t-sm h-3/4"></div>
<div className="w-1/4 bg-emerald-400 rounded-t-sm h-full"></div>
</div>
</div>
</a>
</div>
</div>
</section>

<section className="bg-[#fafafa]" id="about">

<div className="border-b border-neutral-200 bg-neutral-200">
<div className="grid grid-cols-1 md:grid-cols-12 gap-px max-w-[1400px] mx-auto">

<div className="md:col-span-5 bg-white p-12 min-h-[400px] flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>

<div className="relative z-10 flex items-center gap-6">

<div className="w-20 h-20 rounded-full bg-black shadow-xl flex items-center justify-center z-20">
<i className="w-8 h-8 text-white" data-lucide="user" strokeWidth="1.5"></i>
</div>

<div className="flex flex-col gap-4 relative">

<svg className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-32 text-neutral-300" fill="none" viewbox="0 0 50 100">
<path d="M0,50 C25,50 25,10 50,10" stroke="currentColor" strokeWidth="1.5"></path>
<path d="M0,50 C25,50 25,50 50,50" stroke="currentColor" strokeWidth="1.5"></path>
<path d="M0,50 C25,50 25,90 50,90" stroke="currentColor" strokeWidth="1.5"></path>
</svg>
<div className="w-10 h-10 bg-white border border-neutral-200 rounded-md shadow-sm flex items-center justify-center relative z-10"><i className="w-4 h-4 text-neutral-500" data-lucide="briefcase" strokeWidth="1.5"></i></div>
<div className="w-10 h-10 bg-white border border-neutral-200 rounded-md shadow-sm flex items-center justify-center relative z-10"><i className="w-4 h-4 text-neutral-500" data-lucide="book-open" strokeWidth="1.5"></i></div>
<div className="w-10 h-10 bg-white border border-neutral-200 rounded-md shadow-sm flex items-center justify-center relative z-10"><i className="w-4 h-4 text-neutral-500" data-lucide="pen-tool" strokeWidth="1.5"></i></div>
</div>
</div>
</div>

<div className="md:col-span-7 bg-white p-12 lg:p-20 flex flex-col justify-center">
<div className="flex items-center gap-2 text-sm font-medium text-neutral-600 mb-6">
<i className="w-4 h-4" data-lucide="award" strokeWidth="1.5"></i> 12+ Years Experience
                    </div>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-black mb-6 leading-tight">
                        Built by practitioners, <br className="hidden xl:block"/> for practitioners.
                    </h2>
<p className="text-lg lg:text-xl text-neutral-500 font-normal leading-relaxed mb-10 max-w-2xl">
                        Hi, I'm the author behind salesngon. After spending over a decade closing complex enterprise software deals across Vietnam and Southeast Asia, I built this platform to share the exact playbooks, templates, and frameworks that generate predictable revenue.
                    </p>
<div>
<a className="inline-flex items-center gap-2 text-base font-medium text-black hover:text-neutral-600 transition" href="#">
                            Learn more about the author <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-[#fafafa]" id="ebook">
<div className="max-w-[800px] mx-auto">

<div className="bg-white border border-neutral-200 rounded-2xl p-10 md:p-16 text-center shadow-[0_8px_40px_rgb(0,0,0,0.04)] relative overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_top_right,#f3f4f6_0%,transparent_60%)]"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-[radial-gradient(circle_at_bottom_left,#f3f4f6_0%,transparent_60%)]"></div>
<div className="relative z-10">
<div className="w-16 h-16 bg-black rounded-2xl mx-auto flex items-center justify-center mb-8 rotate-3 shadow-lg">
<i className="w-8 h-8 text-white" data-lucide="book" strokeWidth="1.5"></i>
</div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-black mb-4">
                        The Enterprise Sales Playbook
                    </h2>
<p className="text-lg text-neutral-500 font-normal mb-10 max-w-xl mx-auto">
                        Download our comprehensive guide to mastering B2B sales in Vietnam. Includes cold outreach templates, discovery frameworks, and closing strategies.
                    </p>

<form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-4">
<input className="flex-1 bg-white border border-neutral-300 rounded-md px-4 py-3 text-base text-black font-normal focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition placeholder:text-neutral-400" placeholder="Name" required="" type="text"/>
<input className="flex-1 bg-white border border-neutral-300 rounded-md px-4 py-3 text-base text-black font-normal focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition placeholder:text-neutral-400" placeholder="Work Email" required="" type="email"/>
<button className="bg-black text-white px-6 py-3 rounded-md text-base font-medium hover:bg-neutral-800 transition whitespace-nowrap" type="submit">
                            Get the Ebook
                        </button>
</form>
<p className="text-sm font-normal text-neutral-400">
                        No spam. Unsubscribe anytime.
                    </p>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-neutral-200 pt-16 pb-8 px-6">
<div className="max-w-[1200px] mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">

<div>
<h4 className="font-medium text-black text-sm mb-4">Blog</h4>
<ul className="space-y-3 text-base text-neutral-500 font-normal">
<li><a className="hover:text-black transition" href="#">Latest Articles</a></li>
<li><a className="hover:text-black transition" href="#">Strategy Guides</a></li>
<li><a className="hover:text-black transition" href="#">Case Studies</a></li>
</ul>
</div>

<div>
<h4 className="font-medium text-black text-sm mb-4">Tools</h4>
<ul className="space-y-3 text-base text-neutral-500 font-normal">
<li><a className="hover:text-black transition" href="#">Income Tax Calculator</a></li>
<li><a className="hover:text-black transition" href="#">Tax Code Lookup</a></li>
<li><a className="hover:text-black transition" href="#">ROI Modeler</a></li>
</ul>
</div>

<div>
<h4 className="font-medium text-black text-sm mb-4">Courses</h4>
<ul className="space-y-3 text-base text-neutral-500 font-normal">
<li><a className="hover:text-black transition" href="#">Enterprise Playbook</a></li>
<li><a className="hover:text-black transition" href="#">Outbound Mastery</a></li>
<li><a className="hover:text-black transition" href="#">Corporate Training</a></li>
</ul>
</div>

<div>
<h4 className="font-medium text-black text-sm mb-4">About</h4>
<ul className="space-y-3 text-base text-neutral-500 font-normal">
<li><a className="hover:text-black transition" href="#">Our Story</a></li>
<li><a className="hover:text-black transition" href="#">Contact</a></li>
<li><a className="hover:text-black transition" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-neutral-200 flex flex-col sm:flex-row justify-between items-center gap-4">
<a className="font-medium tracking-tight text-lg text-black" href="#">
                    salesngon
                </a>
<p className="text-sm font-normal text-neutral-500">
                    © 2024 salesngon. All rights reserved.
                </p>
<div className="flex items-center gap-4 text-neutral-400">
<a className="hover:text-black transition" href="#"><i className="w-4 h-4" data-lucide="twitter" strokeWidth="1.5"></i></a>
<a className="hover:text-black transition" href="#"><i className="w-4 h-4" data-lucide="linkedin" strokeWidth="1.5"></i></a>
<a className="hover:text-black transition" href="#"><i className="w-4 h-4" data-lucide="github" strokeWidth="1.5"></i></a>
</div>
</div>
</div>
</footer>




    </>
  );
}
