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



        document.addEventListener('DOMContentLoaded', () => {
            // Initialize Icons
            lucide.createIcons({ strokeWidth: 1.5 });

            // Multi-page routing logic
            const links = document.querySelectorAll('[data-page]');
            const pages = document.querySelectorAll('.page-section');
            const navLinks = document.querySelectorAll('.nav-link');

            function navigate(pageId) {
                // Hide all pages
                pages.forEach(page => {
                    page.classList.remove('block');
                    page.classList.add('hidden');
                });

                // Show target page
                const targetPage = document.getElementById(`page-${pageId}`);
                if (targetPage) {
                    targetPage.classList.remove('hidden');
                    targetPage.classList.add('block');
                }

                // Update active state in desktop nav
                navLinks.forEach(link => {
                    if (link.dataset.page === pageId) {
                        link.classList.remove('text-slate-500');
                        link.classList.add('text-slate-900', 'font-medium');
                    } else {
                        link.classList.add('text-slate-500');
                        link.classList.remove('text-slate-900', 'font-medium');
                    }
                });

                // Scroll to top
                window.scrollTo({ top: 0, behavior: 'instant' });
            }

            // Attach click listeners
            links.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const pageId = link.getAttribute('data-page');
                    navigate(pageId);
                });
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
      

<div className="fixed inset-0 pointer-events-none z-[-1] opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGV4dCB4PSIxMCIgeT0iMjAiIGZvbnQtZmFtaWx5PSJtb25vc3BhY2UiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMwMDAiPjAgMSAwPC90ZXh0Pjx0ZXh0IHg9IjMwIiB5PSI0MCIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzAwMCI+MSAwIDE8L3RleHQ+PC9zdmc+')]"></div>

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200/60">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" data-page="home" href="#">
<div className="relative w-10 h-10 flex items-center justify-center">

<svg className="w-full h-full" viewbox="0 0 100 100">
<path className="fill-blue-600 group-hover:fill-blue-700 transition-colors" d="M10,20 L40,20 L25,50 Z"></path>
<path className="fill-cyan-400 group-hover:fill-cyan-500 transition-colors" d="M45,20 L75,20 L40,80 L25,80 Z"></path>
</svg>
</div>
<span className="text-2xl font-semibold tracking-tight text-slate-900 uppercase">Vertexias</span>
</a>

<div className="hidden md:flex items-center gap-8">
<button className="nav-link text-slate-900 font-medium hover:text-cyan-600 transition-colors text-base" data-page="home">Home</button>
<button className="nav-link text-slate-500 hover:text-cyan-600 transition-colors text-base" data-page="about">About</button>
<button className="nav-link text-slate-500 hover:text-cyan-600 transition-colors text-base" data-page="services">Services</button>
<button className="nav-link text-slate-500 hover:text-cyan-600 transition-colors text-base" data-page="projects">Projects</button>
<button className="nav-link text-slate-500 hover:text-cyan-600 transition-colors text-base" data-page="tech">Technologies</button>
</div>

<div className="hidden md:flex">
<button className="px-5 py-2.5 rounded-full bg-slate-900 text-white text-base font-medium hover:bg-slate-800 transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] border border-transparent" data-page="contact">
                    Contact Us
                </button>
</div>

<button className="md:hidden text-slate-600">
<i data-lucide="menu"></i>
</button>
</div>
</nav>

<div className="flex-grow pt-20">

<main className="page-section block" id="page-home">

<section className="relative pt-32 pb-24 overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-400/20 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-700 text-sm font-medium mb-8">
<span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
                        Next-Generation Enterprise Software
                    </div>
<h1 className="text-6xl md:text-7xl font-semibold tracking-tight text-slate-900 max-w-4xl mx-auto leading-tight mb-8">
                        Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Intelligent</span> Software Solutions for the Future
                    </h1>
<p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
                        Vertexias partners with industry leaders to build scalable, high-performance web and mobile applications, SaaS platforms, and enterprise AI systems.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-[0_4px_14px_0_rgba(6,182,212,0.39)] hover:shadow-[0_6px_20px_rgba(6,182,212,0.23)] hover:scale-[1.02] transition-all" data-page="projects">
                            Explore Our Work
                        </button>
<button className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-slate-700 font-medium border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all" data-page="services">
                            View Services
                        </button>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-200/50">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:flex justify-between items-end">
<div className="max-w-2xl">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Comprehensive Technology Solutions</h2>
<p className="text-slate-600">From concept to deployment, we architect digital products that drive business growth and operational efficiency.</p>
</div>
<button className="mt-6 md:mt-0 flex items-center gap-2 text-cyan-600 font-medium hover:text-cyan-700 transition-colors" data-page="services">
                            All services <i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl bg-slate-50/50 border border-slate-100 hover:border-cyan-200 hover:bg-white hover:shadow-lg hover:shadow-cyan-100/50 transition-all group cursor-pointer">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="text-blue-600" data-lucide="layout-template"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">SaaS Development</h3>
<p className="text-slate-600 text-base">End-to-end architecture and development of scalable cloud-based software products.</p>
</div>

<div className="p-8 rounded-2xl bg-slate-50/50 border border-slate-100 hover:border-cyan-200 hover:bg-white hover:shadow-lg hover:shadow-cyan-100/50 transition-all group cursor-pointer">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="text-cyan-500" data-lucide="database"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Enterprise Systems</h3>
<p className="text-slate-600 text-base">Custom ERP, CRM, and internal tools designed to streamline complex business workflows.</p>
</div>

<div className="p-8 rounded-2xl bg-slate-50/50 border border-slate-100 hover:border-cyan-200 hover:bg-white hover:shadow-lg hover:shadow-cyan-100/50 transition-all group cursor-pointer">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="text-blue-600" data-lucide="cpu"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">AI Integration</h3>
<p className="text-slate-600 text-base">Implement machine learning models and automated workflows to future-proof your operations.</p>
</div>
</div>
</div>
</section>

<section className="py-20 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 text-center mb-10">
<p className="text-sm font-medium text-slate-500 uppercase tracking-widest">Powered by modern technologies</p>
</div>
<div className="flex gap-12 justify-center items-center opacity-60 flex-wrap px-6">
<div className="flex items-center gap-2 text-xl font-semibold tracking-tight text-slate-800"><i className="w-8 h-8" data-lucide="atom"></i> React</div>
<div className="flex items-center gap-2 text-xl font-semibold tracking-tight text-slate-800"><i className="w-8 h-8" data-lucide="triangle"></i> Next.js</div>
<div className="flex items-center gap-2 text-xl font-semibold tracking-tight text-slate-800"><i className="w-8 h-8" data-lucide="hexagon"></i> Node.js</div>
<div className="flex items-center gap-2 text-xl font-semibold tracking-tight text-slate-800"><i className="w-8 h-8" data-lucide="box"></i> Docker</div>
<div className="flex items-center gap-2 text-xl font-semibold tracking-tight text-slate-800"><i className="w-8 h-8" data-lucide="cloud"></i> AWS</div>
</div>
</section>

<section className="py-24">
<div className="max-w-5xl mx-auto px-6">
<div className="rounded-3xl bg-slate-900 p-12 md:p-16 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-400/10"></div>
<div className="relative z-10">
<h2 className="text-4xl font-semibold tracking-tight text-white mb-6">Ready to build the future?</h2>
<p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">Let's discuss how Vertexias can help transform your ideas into robust, scalable software solutions.</p>
<button className="px-8 py-4 rounded-full bg-cyan-400 text-slate-900 font-medium hover:bg-cyan-300 transition-colors shadow-[0_0_20px_rgba(34,211,238,0.4)]" data-page="contact">
                                Start a Conversation
                            </button>
</div>
</div>
</div>
</section>
</main>

<main className="page-section hidden" id="page-about">
<section className="pt-20 pb-16 bg-white border-b border-slate-200/60">
<div className="max-w-7xl mx-auto px-6">
<h1 className="text-5xl font-semibold tracking-tight text-slate-900 mb-6">About Vertexias</h1>
<p className="text-2xl text-slate-500 max-w-3xl">We are a collective of engineers, designers, and strategists dedicated to pushing the boundaries of what software can achieve.</p>
</div>
</section>
<section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">Our Story &amp; Mission</h2>
<div className="space-y-6 text-slate-600">
<p>Founded on the principle that complex problems deserve elegant solutions, Vertexias System Solutions was created to bridge the gap between ambitious business goals and technical execution.</p>
<p>Our mission is simple: to engineer intelligent, scalable, and secure software that empowers organizations to thrive in a digital-first world. We don't just write code; we architect systems designed for long-term success and adaptability.</p>
<p>From early-stage startups needing a rapid MVP to global enterprises requiring infrastructure modernization, our approach remains rooted in engineering excellence.</p>
</div>
</div>
<div className="relative h-[500px] rounded-3xl bg-slate-100 overflow-hidden border border-slate-200">

<div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-blue-50/50 flex items-center justify-center">
<svg className="w-32 h-32 text-blue-200 opacity-50" viewbox="0 0 100 100">
<path d="M20,50 Q50,10 80,50 T20,50" fill="none" stroke="currentColor" strokeWidth="2"></path>
<path d="M20,60 Q50,20 80,60 T20,60" fill="none" stroke="currentColor" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 bg-white border-y border-slate-200/50">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-center text-slate-900 mb-16">Core Values</h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="p-6 border border-slate-100 rounded-2xl">
<i className="w-8 h-8 text-cyan-500 mb-4" data-lucide="lightbulb"></i>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">Innovation</h3>
<p className="text-slate-600 text-base">Constantly exploring new technologies to provide a competitive edge.</p>
</div>
<div className="p-6 border border-slate-100 rounded-2xl">
<i className="w-8 h-8 text-blue-600 mb-4" data-lucide="shield-check"></i>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">Quality</h3>
<p className="text-slate-600 text-base">Rigorous testing and peer reviews ensure robust, reliable software.</p>
</div>
<div className="p-6 border border-slate-100 rounded-2xl">
<i className="w-8 h-8 text-cyan-500 mb-4" data-lucide="users"></i>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">Partnership</h3>
<p className="text-slate-600 text-base">We work collaboratively as an extension of your internal team.</p>
</div>
<div className="p-6 border border-slate-100 rounded-2xl">
<i className="w-8 h-8 text-blue-600 mb-4" data-lucide="zap"></i>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">Agility</h3>
<p className="text-slate-600 text-base">Adapting quickly to changing requirements and market conditions.</p>
</div>
</div>
</div>
</section>
</main>

<main className="page-section hidden" id="page-services">
<section className="pt-20 pb-16 bg-white border-b border-slate-200/60">
<div className="max-w-7xl mx-auto px-6">
<h1 className="text-5xl font-semibold tracking-tight text-slate-900 mb-6">Capabilities &amp; Services</h1>
<p className="text-2xl text-slate-500 max-w-3xl">Comprehensive engineering services covering the entire software development lifecycle.</p>
</div>
</section>
<section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center mb-6 group-hover:bg-cyan-500 transition-colors">
<i className="w-7 h-7 text-cyan-600 group-hover:text-white transition-colors" data-lucide="code-2"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">Custom Software Development</h3>
<p className="text-slate-600 text-base mb-6">Tailor-made solutions engineered from scratch to address your specific business challenges and workflow requirements.</p>
<ul className="space-y-2 text-sm text-slate-500 font-medium">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-cyan-500" data-lucide="check"></i> Architecture Design</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-cyan-500" data-lucide="check"></i> Full-Stack Implementation</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-cyan-500" data-lucide="check"></i> Legacy Modernization</li>
</ul>
</div>

<div className="group bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
<i className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" data-lucide="box"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">SaaS Product Development</h3>
<p className="text-slate-600 text-base mb-6">Building multi-tenant, secure, and highly scalable Software-as-a-Service platforms ready for market launch.</p>
<ul className="space-y-2 text-sm text-slate-500 font-medium">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-blue-500" data-lucide="check"></i> MVP Development</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-blue-500" data-lucide="check"></i> Subscription Management</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-blue-500" data-lucide="check"></i> Multi-tenant Architecture</li>
</ul>
</div>

<div className="group bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center mb-6 group-hover:bg-cyan-500 transition-colors">
<i className="w-7 h-7 text-cyan-600 group-hover:text-white transition-colors" data-lucide="globe"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">Web Applications</h3>
<p className="text-slate-600 text-base mb-6">Responsive, fast, and accessible web apps delivering native-like experiences in the browser.</p>
<ul className="space-y-2 text-sm text-slate-500 font-medium">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-cyan-500" data-lucide="check"></i> Single Page Apps (SPA)</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-cyan-500" data-lucide="check"></i> Progressive Web Apps (PWA)</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-cyan-500" data-lucide="check"></i> E-commerce Platforms</li>
</ul>
</div>

<div className="group bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
<i className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" data-lucide="smartphone"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">Mobile Applications</h3>
<p className="text-slate-600 text-base mb-6">Native and cross-platform mobile experiences designed for performance and user engagement.</p>
<ul className="space-y-2 text-sm text-slate-500 font-medium">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-blue-500" data-lucide="check"></i> iOS &amp; Android</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-blue-500" data-lucide="check"></i> React Native / Flutter</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-blue-500" data-lucide="check"></i> API Integration</li>
</ul>
</div>

<div className="group bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center mb-6 group-hover:bg-cyan-500 transition-colors">
<i className="w-7 h-7 text-cyan-600 group-hover:text-white transition-colors" data-lucide="cloud-cog"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">Cloud Infrastructure</h3>
<p className="text-slate-600 text-base mb-6">Designing and managing resilient, secure cloud environments optimized for cost and performance.</p>
<ul className="space-y-2 text-sm text-slate-500 font-medium">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-cyan-500" data-lucide="check"></i> AWS / Azure / GCP</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-cyan-500" data-lucide="check"></i> Serverless Architecture</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-cyan-500" data-lucide="check"></i> DevOps &amp; CI/CD</li>
</ul>
</div>

<div className="group bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
<i className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" data-lucide="brain-circuit"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">AI &amp; Automation</h3>
<p className="text-slate-600 text-base mb-6">Integrating intelligent algorithms and automation to unlock data insights and streamline tasks.</p>
<ul className="space-y-2 text-sm text-slate-500 font-medium">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-blue-500" data-lucide="check"></i> LLM Integration</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-blue-500" data-lucide="check"></i> Predictive Analytics</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-blue-500" data-lucide="check"></i> Process Automation</li>
</ul>
</div>
</div>
</div>
</section>
</main>

<main className="page-section hidden" id="page-projects">
<section className="pt-20 pb-16 bg-white border-b border-slate-200/60">
<div className="max-w-7xl mx-auto px-6">
<h1 className="text-5xl font-semibold tracking-tight text-slate-900 mb-6">Featured Work</h1>
<p className="text-2xl text-slate-500 max-w-3xl">A selection of impactful products we've engineered for our partners.</p>
</div>
</section>
<section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

<div className="group cursor-pointer">
<div className="relative w-full aspect-[4/3] rounded-3xl bg-slate-100 border border-slate-200 overflow-hidden mb-6">

<div className="absolute inset-0 bg-gradient-to-tr from-slate-200 to-slate-100 group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">
<div className="w-3/4 h-3/4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/40 shadow-sm flex items-center justify-center">
<i className="w-16 h-16 text-slate-400" data-lucide="bar-chart-3"></i>
</div>
</div>
</div>
<div className="flex items-center gap-3 mb-3">
<span className="px-2.5 py-1 rounded-md bg-cyan-50 text-cyan-700 text-xs font-medium border border-cyan-100">SaaS Platform</span>
<span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-medium border border-slate-200">Fintech</span>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">Nova Financial Dashboard</h3>
<p className="text-slate-600 text-base">A comprehensive analytics dashboard for wealth managers, processing millions of transactions in real-time.</p>
</div>

<div className="group cursor-pointer">
<div className="relative w-full aspect-[4/3] rounded-3xl bg-slate-100 border border-slate-200 overflow-hidden mb-6">

<div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-cyan-50 group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">
<div className="w-1/2 h-3/4 bg-white/80 backdrop-blur-sm rounded-3xl border border-white/60 shadow-sm flex flex-col items-center pt-8">
<div className="w-1/2 h-2 bg-slate-200 rounded-full mb-8"></div>
<i className="w-12 h-12 text-blue-400" data-lucide="shopping-bag"></i>
</div>
</div>
</div>
<div className="flex items-center gap-3 mb-3">
<span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-medium border border-blue-100">Mobile App</span>
<span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-medium border border-slate-200">E-Commerce</span>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Aura Marketplace</h3>
<p className="text-slate-600 text-base">Cross-platform mobile application utilizing React Native for a seamless shopping experience.</p>
</div>

<div className="group cursor-pointer">
<div className="relative w-full aspect-[4/3] rounded-3xl bg-slate-100 border border-slate-200 overflow-hidden mb-6">
<div className="absolute inset-0 bg-slate-800 group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">
<div className="w-full h-full p-8 opacity-20 font-mono text-xs text-green-400 break-words overflow-hidden">
                                        function initSystem(){const nodes=fetchNodes();if(nodes.length&gt;0){connect(nodes);return true;}return false;}
                                    </div>
<i className="absolute w-20 h-20 text-cyan-400" data-lucide="network"></i>
</div>
</div>
<div className="flex items-center gap-3 mb-3">
<span className="px-2.5 py-1 rounded-md bg-slate-800 text-cyan-300 text-xs font-medium border border-slate-700">Enterprise System</span>
<span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-medium border border-slate-200">Logistics</span>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">Nexus ERP Integration</h3>
<p className="text-slate-600 text-base">Custom ERP solution bridging legacy inventory systems with modern cloud infrastructure.</p>
</div>

<div className="group cursor-pointer">
<div className="relative w-full aspect-[4/3] rounded-3xl bg-slate-100 border border-slate-200 overflow-hidden mb-6">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">
<div className="w-3/4 h-2/3 bg-white border border-slate-200 rounded-lg shadow-sm grid grid-cols-3 gap-2 p-4">
<div className="bg-slate-100 rounded"></div><div className="bg-slate-100 rounded col-span-2"></div>
<div className="bg-slate-100 rounded col-span-3 h-20"></div>
</div>
</div>
</div>
<div className="flex items-center gap-3 mb-3">
<span className="px-2.5 py-1 rounded-md bg-purple-50 text-purple-700 text-xs font-medium border border-purple-100">Web App / MVP</span>
<span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-medium border border-slate-200">Startup</span>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">SyncHR Prototype</h3>
<p className="text-slate-600 text-base">Rapid MVP development for a modern human resources management startup.</p>
</div>
</div>
</div>
</section>
</main>

<main className="page-section hidden" id="page-tech">
<section className="pt-20 pb-16 bg-white border-b border-slate-200/60">
<div className="max-w-7xl mx-auto px-6 text-center">
<h1 className="text-5xl font-semibold tracking-tight text-slate-900 mb-6">Technology Stack</h1>
<p className="text-2xl text-slate-500 max-w-3xl mx-auto">We leverage modern, proven technologies to build secure, scalable, and maintainable software.</p>
</div>
</section>
<section className="py-24">
<div className="max-w-5xl mx-auto px-6 space-y-24">

<div>
<div className="flex items-center gap-4 mb-10 border-b border-slate-200 pb-4">
<i className="w-8 h-8 text-cyan-500" data-lucide="layout"></i>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Frontend</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="flex flex-col items-center justify-center p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
<i className="w-12 h-12 text-cyan-400 mb-4 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" data-lucide="atom"></i>
<span className="font-medium text-slate-900">React</span>
</div>
<div className="flex flex-col items-center justify-center p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
<i className="w-12 h-12 text-slate-900 mb-4" data-lucide="triangle"></i>
<span className="font-medium text-slate-900">Next.js</span>
</div>
<div className="flex flex-col items-center justify-center p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
<i className="w-12 h-12 text-cyan-500 mb-4" data-lucide="wind"></i>
<span className="font-medium text-slate-900">Tailwind CSS</span>
</div>
<div className="flex flex-col items-center justify-center p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
<i className="w-12 h-12 text-blue-500 mb-4" data-lucide="smartphone"></i>
<span className="font-medium text-slate-900">React Native</span>
</div>
</div>
</div>

<div>
<div className="flex items-center gap-4 mb-10 border-b border-slate-200 pb-4">
<i className="w-8 h-8 text-blue-600" data-lucide="server"></i>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Backend</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="flex flex-col items-center justify-center p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
<i className="w-12 h-12 text-green-500 mb-4 drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]" data-lucide="hexagon"></i>
<span className="font-medium text-slate-900">Node.js</span>
</div>
<div className="flex flex-col items-center justify-center p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
<i className="w-12 h-12 text-red-500 mb-4" data-lucide="coffee"></i>
<span className="font-medium text-slate-900">Java / Spring</span>
</div>
<div className="flex flex-col items-center justify-center p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
<i className="w-12 h-12 text-blue-500 mb-4" data-lucide="terminal-square"></i>
<span className="font-medium text-slate-900">Python</span>
</div>
<div className="flex flex-col items-center justify-center p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
<i className="w-12 h-12 text-slate-700 mb-4" data-lucide="braces"></i>
<span className="font-medium text-slate-900">GraphQL</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-16">
<div>
<div className="flex items-center gap-4 mb-8 border-b border-slate-200 pb-4">
<i className="w-6 h-6 text-slate-700" data-lucide="database"></i>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Database</h2>
</div>
<div className="space-y-4">
<div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200">
<div className="w-10 h-10 rounded bg-blue-50 flex items-center justify-center text-blue-600"><i data-lucide="database"></i></div>
<span className="font-medium text-slate-900">PostgreSQL</span>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200">
<div className="w-10 h-10 rounded bg-green-50 flex items-center justify-center text-green-600"><i data-lucide="leaf"></i></div>
<span className="font-medium text-slate-900">MongoDB</span>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200">
<div className="w-10 h-10 rounded bg-red-50 flex items-center justify-center text-red-600"><i data-lucide="layers"></i></div>
<span className="font-medium text-slate-900">Redis</span>
</div>
</div>
</div>
<div>
<div className="flex items-center gap-4 mb-8 border-b border-slate-200 pb-4">
<i className="w-6 h-6 text-slate-700" data-lucide="cloud-cog"></i>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">DevOps</h2>
</div>
<div className="space-y-4">
<div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200">
<div className="w-10 h-10 rounded bg-blue-50 flex items-center justify-center text-blue-500"><i data-lucide="box"></i></div>
<span className="font-medium text-slate-900">Docker &amp; K8s</span>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200">
<div className="w-10 h-10 rounded bg-orange-50 flex items-center justify-center text-orange-500"><i data-lucide="cloud"></i></div>
<span className="font-medium text-slate-900">AWS / Cloud</span>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200">
<div className="w-10 h-10 rounded bg-slate-100 flex items-center justify-center text-slate-700"><i data-lucide="git-merge"></i></div>
<span className="font-medium text-slate-900">CI/CD Pipelines</span>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<main className="page-section hidden" id="page-contact">
<section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

<div>
<h1 className="text-5xl font-semibold tracking-tight text-slate-900 mb-6">Let's build together.</h1>
<p className="text-xl text-slate-600 mb-12">Whether you need a full development team, a technical consultation, or a custom build, our engineers are ready to help.</p>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-cyan-50 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-cyan-600" data-lucide="mail"></i>
</div>
<div>
<h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-1">Business Inquiries</h3>
<a className="text-xl font-medium text-slate-900 hover:text-cyan-600 transition-colors" href="mailto:hello@vertexias.com">hello@vertexias.com</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-blue-600" data-lucide="map-pin"></i>
</div>
<div>
<h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-1">Headquarters</h3>
<p className="text-xl font-medium text-slate-900">Innovation District<br/>Tech Hub, CA 94107</p>
</div>
</div>
</div>
<div className="mt-16 pt-8 border-t border-slate-200">
<h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-6">Connect</h3>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-cyan-600 hover:border-cyan-200 transition-all shadow-sm" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
<a className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-cyan-600 hover:border-cyan-200 transition-all shadow-sm" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-cyan-600 hover:border-cyan-200 transition-all shadow-sm" href="#"><i className="w-5 h-5" data-lucide="github"></i></a>
</div>
</div>
</div>

<div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-8">Send us a message</h2>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700 block">First Name</label>
<input className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all text-base" placeholder="John" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700 block">Last Name</label>
<input className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all text-base" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700 block">Work Email</label>
<input className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all text-base" placeholder="john@company.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700 block">Project Details</label>
<textarea className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all text-base resize-none" placeholder="Tell us about your requirements..." rows="4"></textarea>
</div>

<label className="flex items-start gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center w-5 h-5 mt-0.5 rounded border border-slate-300 bg-white group-hover:border-cyan-400 transition-colors">
<input className="peer absolute opacity-0 w-full h-full cursor-pointer" type="checkbox"/>
<i className="w-3.5 h-3.5 text-white peer-checked:text-cyan-600 opacity-0 peer-checked:opacity-100 transition-opacity" data-lucide="check"></i>
</div>
<span className="text-sm text-slate-600">I agree to the <a className="text-cyan-600 hover:underline" href="#">Privacy Policy</a> and consent to being contacted regarding this inquiry.</span>
</label>
<button className="w-full py-4 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition-all flex items-center justify-center gap-2" type="button">
                                    Submit Inquiry <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</form>
</div>
</div>
</div>
</section>
</main>
</div>

<footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800 mt-auto">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<svg className="w-8 h-8" viewbox="0 0 100 100">
<path className="fill-blue-500" d="M10,20 L40,20 L25,50 Z"></path>
<path className="fill-cyan-400" d="M45,20 L75,20 L40,80 L25,80 Z"></path>
</svg>
<span className="text-xl font-semibold tracking-tight text-white uppercase">Vertexias</span>
</div>
<p className="text-sm max-w-sm">Engineering intelligent software solutions for the modern enterprise. We build scalable, reliable, and secure technology.</p>
</div>
<div>
<h4 className="text-white font-medium mb-4">Company</h4>
<ul className="space-y-2 text-sm">
<li><button className="hover:text-cyan-400 transition-colors" data-page="about">About Us</button></li>
<li><button className="hover:text-cyan-400 transition-colors" data-page="services">Services</button></li>
<li><button className="hover:text-cyan-400 transition-colors" data-page="projects">Projects</button></li>
<li><button className="hover:text-cyan-400 transition-colors" data-page="tech">Technology</button></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Legal</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-cyan-400 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Terms of Service</a></li>
<li><button className="hover:text-cyan-400 transition-colors" data-page="contact">Contact</button></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
<p>© 2024 Vertexias System Solutions. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="github"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
</div>
</div>
</div>
</footer>



    </>
  );
}
