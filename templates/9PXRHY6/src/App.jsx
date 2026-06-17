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



        document.addEventListener('DOMContentLoaded', () => {
            lucide.createIcons();

            // Year
            document.getElementById('year').textContent = new Date().getFullYear();

            // Accordion
            const accordionItems = document.querySelectorAll('[data-accordion-item]');
            accordionItems.forEach(item => {
                const trigger = item.querySelector('[data-accordion-trigger]');
                const content = trigger.nextElementSibling;
                const icon = trigger.querySelector('i');

                trigger.addEventListener('click', () => {
                    const isOpen = content.style.maxHeight !== '0px';

                    // Close all other items
                    accordionItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.querySelector('[data-accordion-trigger]').nextElementSibling.style.maxHeight = '0px';
                             otherItem.querySelector('[data-accordion-trigger] i').classList.remove('rotate-180');
                        }
                    });

                    // Toggle current item
                    content.style.maxHeight = isOpen ? '0px' : content.scrollHeight + 'px';
                    icon.classList.toggle('rotate-180', !isOpen);
                });
            });

            // Pricing Toggle
            const upsellSwitch = document.querySelector('[data-upsell-switch]');
            if (upsellSwitch) {
                const knob = upsellSwitch.querySelector('span:last-child');
                upsellSwitch.addEventListener('click', () => {
                    const isChecked = upsellSwitch.getAttribute('aria-checked') === 'true';
                    upsellSwitch.setAttribute('aria-checked', !isChecked);
                    knob.classList.toggle('translate-x-5', !isChecked);
                    upsellSwitch.classList.toggle('bg-blue-600', !isChecked);
                    upsellSwitch.classList.toggle('bg-neutral-700', isChecked);
                });
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
      

<div className="fixed inset-0 -z-10 h-full w-full">
<div className="absolute inset-0 -z-20 h-full w-full bg-neutral-950 bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:24px_24px]"></div>
<div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3b82f620,transparent)]"></div>
<div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_90%_80%,#4f46e520,transparent)]"></div>
</div>

<header className="fixed top-0 left-0 right-0 z-50 animate-fade-in" style={{animationDelay: '0s'}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mt-4 flex items-center justify-between rounded-full bg-neutral-900/50 backdrop-blur-lg border border-neutral-700/60 px-4 py-2 shadow-lg">
<a className="text-xl font-semibold tracking-tighter text-white" href="#">VIP</a>
<nav className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-300">
<a className="hover:text-white transition-colors" href="#work">Work</a>
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
</nav>
<a className="group inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-200" href="#contact">
<span>Start Project</span>
<i className="w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" style={{strokeWidth: '1.5px'}}></i>
</a>
</div>
</div>
</header>
<main className="pt-32">

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="animate-blur-in" style={{animationDelay: '0.2s'}}>
<h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-neutral-400">Marketing that Builds<br/>Financial Brands.</h1>
</div>
<div className="animate-slide-in-up" style={{animationDelay: '0.4s'}}>
<p className="mt-6 max-w-3xl mx-auto text-lg text-neutral-400 leading-relaxed">We don't just create visuals; we engineer customer acquisition engines for credit unions and ambitious finance companies. From AI-powered SEO to high-performance content, we build the marketing assets you need to grow your membership and bottom line.</p>
</div>
<div className="mt-8 animate-slide-in-up" style={{animationDelay: '0.6s'}}>
<a className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500" href="#work">
<span>See Our Impact</span>
<i className="w-5 h-5" data-lucide="bar-chart-3" style={{strokeWidth: '1.5px'}}></i>
</a>
</div>

<div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 max-w-5xl mx-auto">
<div className="p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 animate-slide-in-up" style={{animationDelay: '0.7s'}}>
<p className="text-3xl sm:text-4xl font-semibold text-white">75+</p>
<p className="mt-1 text-sm text-neutral-400">Financial Sector Projects</p>
</div>
<div className="p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 animate-slide-in-up" style={{animationDelay: '0.8s'}}>
<p className="text-3xl sm:text-4xl font-semibold text-white">40+</p>
<p className="mt-1 text-sm text-neutral-400">High-Value Clients</p>
</div>
<div className="p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 animate-slide-in-up" style={{animationDelay: '0.9s'}}>
<p className="text-3xl sm:text-4xl font-semibold text-white">5+</p>
<p className="mt-1 text-sm text-neutral-400">Years of Technical Expertise</p>
</div>
<div className="p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 animate-slide-in-up" style={{animationDelay: '1s'}}>
<p className="text-3xl sm:text-4xl font-semibold text-white">98%</p>
<p className="mt-1 text-sm text-neutral-400">Client Retention Rate</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 sm:mt-32" id="work">
<div className="flex items-center justify-between animate-fade-in" style={{animationDelay: '1.1s'}}>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Recent Engagements</h2>
<a className="group hidden sm:inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-neutral-800/50 px-4 py-2 text-sm font-medium text-neutral-300 transition hover:border-neutral-500 hover:text-white" href="#">
<span>View All Projects</span>
<i className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" data-lucide="arrow-up-right" style={{strokeWidth: '1.5px'}}></i>
</a>
</div>
<div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<article className="group relative overflow-hidden rounded-3xl bg-neutral-800/50 border border-neutral-700/60 p-4 animate-slide-in-up" style={{animationDelay: '1.2s'}}>
<div className="relative aspect-[16/10] overflow-hidden rounded-xl">
<img alt="Member Growth Campaign" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
</div>
<div className="mt-4">
<p className="text-sm font-medium text-blue-400">Member Growth Campaign</p>
<h3 className="mt-1 text-lg font-semibold text-white">Unity Credit Union Member Acquisition</h3>
<p className="mt-2 text-sm text-neutral-400">Multi-channel campaign driving a record number of new member sign-ups in Q3.</p>
</div>
</article>

<article className="group relative overflow-hidden rounded-3xl bg-neutral-800/50 border border-neutral-700/60 p-4 animate-slide-in-up" style={{animationDelay: '1.3s'}}>
<div className="relative aspect-[16/10] overflow-hidden rounded-xl">
<img alt="Digital Experience" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1665686306574-1ace09918530?q=80&amp;w=1920&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
</div>
<div className="mt-4">
<p className="text-sm font-medium text-blue-400">Digital Experience</p>
<h3 className="mt-1 text-lg font-semibold text-white">Apex Financial Digital Branch</h3>
<p className="mt-2 text-sm text-neutral-400">A complete UI/UX and website overhaul focused on user experience and loan application conversion.</p>
</div>
</article>

<article className="group relative overflow-hidden rounded-3xl bg-neutral-800/50 border border-neutral-700/60 p-4 animate-slide-in-up" style={{animationDelay: '1.4s'}}>
<div className="relative aspect-[16/10] overflow-hidden rounded-xl">
<img alt="SEO &amp; Content Strategy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
</div>
<div className="mt-4">
<p className="text-sm font-medium text-blue-400">SEO &amp; Content Strategy</p>
<h3 className="mt-1 text-lg font-semibold text-white">FinTech Launchpad Authority Engine</h3>
<p className="mt-2 text-sm text-neutral-400">AI-First SEO strategy that established topical authority and captured top search rankings.</p>
</div>
</article>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 sm:mt-32" id="about">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="animate-fade-in" style={{animationDelay: '1.5s'}}>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">Your Growth Partner in Finance.</h2>
<p className="mt-6 text-lg text-neutral-400 leading-relaxed">We are a boutique creative agency with a core focus on the financial sector. Our team is a unique hybrid of marketing strategists, content creators, and expert developers. We help credit unions and finance brands connect with their members and drive measurable growth through intentional strategy and high-performance digital experiences.</p>
<div className="mt-8">
<a className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-base font-semibold text-neutral-900 transition hover:bg-neutral-200" href="#">
<span>Meet The Team</span>
<i className="w-5 h-5" data-lucide="users" style={{strokeWidth: '1.5px'}}></i>
</a>
</div>
</div>
<div className="relative aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden animate-blur-in" style={{animationDelay: '1.6s'}}>
<img alt="Team collaborating" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&amp;w=1920&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent"></div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 sm:mt-32" id="services">
<div className="text-center animate-fade-in" style={{animationDelay: '1.7s'}}>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">Solutions Engineered for Growth.</h2>
</div>
<div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 bg-neutral-900/50 backdrop-blur-lg rounded-3xl border border-neutral-700/60 animate-slide-in-up" style={{animationDelay: '1.8s'}}>
<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400">
<i className="w-6 h-6" data-lucide="target" style={{strokeWidth: '1.5px'}}></i>
</div>
<h3 className="mt-6 text-xl font-semibold text-white">Strategy that Drives Results</h3>
<ul className="mt-4 space-y-3 text-neutral-400">
<li className="flex items-start gap-3"><i className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" data-lucide="check" style={{strokeWidth: '1.5px'}}></i><span>Brand Strategy &amp; Positioning</span></li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" data-lucide="check" style={{strokeWidth: '1.5px'}}></i><span>Member Acquisition Campaigns</span></li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" data-lucide="check" style={{strokeWidth: '1.5px'}}></i><span>Content &amp; AI-First SEO Strategy</span></li>
</ul>
</div>

<div className="p-8 bg-neutral-900/50 backdrop-blur-lg rounded-3xl border border-neutral-700/60 animate-slide-in-up" style={{animationDelay: '1.9s'}}>
<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400">
<i className="w-6 h-6" data-lucide="monitor-smartphone" style={{strokeWidth: '1.5px'}}></i>
</div>
<h3 className="mt-6 text-xl font-semibold text-white">Digital Platforms that Convert</h3>
<ul className="mt-4 space-y-3 text-neutral-400">
<li className="flex items-start gap-3"><i className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" data-lucide="check" style={{strokeWidth: '1.5px'}}></i><span>AI-Ready Website Development</span></li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" data-lucide="check" style={{strokeWidth: '1.5px'}}></i><span>UI/UX for Financial Apps</span></li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" data-lucide="check" style={{strokeWidth: '1.5px'}}></i><span>Landing Page &amp; Funnel Optimization</span></li>
</ul>
</div>

<div className="p-8 bg-neutral-900/50 backdrop-blur-lg rounded-3xl border border-neutral-700/60 animate-slide-in-up" style={{animationDelay: '2s'}}>
<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400">
<i className="w-6 h-6" data-lucide="sparkles" style={{strokeWidth: '1.5px'}}></i>
</div>
<h3 className="mt-6 text-xl font-semibold text-white">Creative that Captures Attention</h3>
<ul className="mt-4 space-y-3 text-neutral-400">
<li className="flex items-start gap-3"><i className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" data-lucide="check" style={{strokeWidth: '1.5px'}}></i><span>High-Performance Ad Creative</span></li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" data-lucide="check" style={{strokeWidth: '1.5px'}}></i><span>Short-Form Video &amp; Social Media</span></li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" data-lucide="check" style={{strokeWidth: '1.5px'}}></i><span>Email &amp; Newsletter Campaigns</span></li>
</ul>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 sm:mt-32" id="faq">
<div className="max-w-3xl mx-auto text-center animate-fade-in" style={{animationDelay: '2.1s'}}>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Your Questions, Answered.</h2>
</div>
<div className="mt-12 max-w-4xl mx-auto space-y-4">

<div className="bg-neutral-900/50 backdrop-blur-lg border border-neutral-700/60 rounded-2xl animate-fade-in" data-accordion-item="" style={{animationDelay: '2.2s'}}>
<button className="w-full flex justify-between items-center text-left p-5" data-accordion-trigger="">
<span className="text-lg font-medium text-white">How do you measure the ROI of your projects?</span>
<i className="w-5 h-5 text-neutral-400 transition-transform duration-300" data-lucide="chevron-down" style={{strokeWidth: '1.5px'}}></i>
</button>
<div className="overflow-hidden transition-all duration-300" style={{maxHeight: '0px'}}>
<div className="p-5 pt-0">
<p className="text-neutral-400 leading-relaxed">We start every project by defining key performance indicators (KPIs) with you—whether it's new member sign-ups, loan applications, or cost-per-acquisition. We integrate analytics into everything we build to track progress against these goals and provide clear, concise performance reports.</p>
</div>
</div>
</div>

<div className="bg-neutral-900/50 backdrop-blur-lg border border-neutral-700/60 rounded-2xl animate-fade-in" data-accordion-item="" style={{animationDelay: '2.3s'}}>
<button className="w-full flex justify-between items-center text-left p-5" data-accordion-trigger="">
<span className="text-lg font-medium text-white">Do you have experience with financial industry compliance?</span>
<i className="w-5 h-5 text-neutral-400 transition-transform duration-300" data-lucide="chevron-down" style={{strokeWidth: '1.5px'}}></i>
</button>
<div className="overflow-hidden transition-all duration-300" style={{maxHeight: '0px'}}>
<div className="p-5 pt-0">
<p className="text-neutral-400 leading-relaxed">Yes. While we are not a legal firm, we are experienced in working within the marketing compliance guidelines common in the financial sector and partner with your compliance team to ensure all creative meets the necessary standards.</p>
</div>
</div>
</div>

<div className="bg-neutral-900/50 backdrop-blur-lg border border-neutral-700/60 rounded-2xl animate-fade-in" data-accordion-item="" style={{animationDelay: '2.4s'}}>
<button className="w-full flex justify-between items-center text-left p-5" data-accordion-trigger="">
<span className="text-lg font-medium text-white">What makes your "AI-First SEO" different?</span>
<i className="w-5 h-5 text-neutral-400 transition-transform duration-300" data-lucide="chevron-down" style={{strokeWidth: '1.5px'}}></i>
</button>
<div className="overflow-hidden transition-all duration-300" style={{maxHeight: '0px'}}>
<div className="p-5 pt-0">
<p className="text-neutral-400 leading-relaxed">Traditional SEO focuses on keywords. Our AI-First approach structures your website's data so that AI search engines (like Google's new AI Overviews) can understand your expertise and recommend you directly. It's about future-proofing your organic growth.</p>
</div>
</div>
</div>

<div className="bg-neutral-900/50 backdrop-blur-lg border border-neutral-700/60 rounded-2xl animate-fade-in" data-accordion-item="" style={{animationDelay: '2.5s'}}>
<button className="w-full flex justify-between items-center text-left p-5" data-accordion-trigger="">
<span className="text-lg font-medium text-white">Can you integrate with our existing core banking software or CRM?</span>
<i className="w-5 h-5 text-neutral-400 transition-transform duration-300" data-lucide="chevron-down" style={{strokeWidth: '1.5px'}}></i>
</button>
<div className="overflow-hidden transition-all duration-300" style={{maxHeight: '0px'}}>
<div className="p-5 pt-0">
<p className="text-neutral-400 leading-relaxed">We have extensive experience integrating with third-party APIs and platforms. We can scope out integrations with most modern CRMs and financial software to ensure a seamless data flow for your marketing operations.</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 sm:mt-32" id="pricing">
<div className="text-center animate-fade-in" style={{animationDelay: '2.6s'}}>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">Transparent Pricing for Clear Results.</h2>
</div>
<div className="mt-12 max-w-5xl mx-auto grid lg:grid-cols-3 gap-8 items-start">
<div className="lg:col-span-2 p-8 bg-neutral-900/50 backdrop-blur-lg rounded-3xl border border-neutral-700/60 animate-slide-in-up" style={{animationDelay: '2.7s'}}>
<p className="text-sm font-medium text-blue-400">Fixed Project</p>
<h3 className="mt-2 text-2xl font-semibold text-white">Foundational Acquisition Website</h3>
<div className="mt-4 flex items-baseline gap-2">
<span className="text-5xl font-semibold tracking-tight text-white">$3,000</span>
<span className="text-neutral-400">/project</span>
</div>
<p className="mt-1 text-sm text-neutral-500">Timeline: 4–6 weeks</p>
<ul className="mt-6 space-y-3 text-neutral-300 border-t border-neutral-700/60 pt-6">
<li className="flex items-start gap-3"><i className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" data-lucide="check-circle-2" style={{strokeWidth: '1.5px'}}></i><span>Complete UI/UX &amp; Strategic Design</span></li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" data-lucide="check-circle-2" style={{strokeWidth: '1.5px'}}></i><span>AI-Ready Website Built on Next.js</span></li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" data-lucide="check-circle-2" style={{strokeWidth: '1.5px'}}></i><span>Full CMS for Team Management</span></li>
</ul>
<a className="mt-8 block w-full text-center rounded-full bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500" href="#contact">Start a Conversation</a>
</div>
<div className="p-8 bg-neutral-800/50 backdrop-blur-lg rounded-3xl border border-neutral-700/60 animate-slide-in-up" style={{animationDelay: '2.8s'}}>
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold text-white">Need ongoing growth?</h3>
<button aria-checked="false" className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-neutral-700 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-neutral-900" data-upsell-switch="" role="switch" type="button">
<span className="sr-only">Toggle Growth Retainer</span>
<span aria-hidden="true" className="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out translate-x-0"></span>
</button>
</div>
<p className="mt-4 text-sm text-neutral-400">Add our monthly Growth Retainer for ongoing SEO, content marketing, and performance analytics.</p>
<div className="mt-6 pt-6 border-t border-neutral-700/60">
<p className="text-sm font-medium text-neutral-300">Add-on Price</p>
<p className="mt-1 text-2xl font-semibold text-white">+ $2,500 <span className="text-base font-medium text-neutral-400">/month</span></p>
</div>
</div>
</div>
</section>

<footer className="mt-24 sm:mt-32" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="relative overflow-hidden rounded-t-3xl bg-neutral-900 p-8 sm:p-12 text-center animate-fade-in" style={{animationDelay: '2.9s'}}>
<div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0,rgba(60,80,224,0.3),transparent_40%)]"></div>
<h2 className="text-4xl sm:text-6xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-neutral-300">Ready to build your<br/>growth engine?</h2>
<p className="mt-4 max-w-xl mx-auto text-lg text-neutral-400">Let's build something unforgettable—together.</p>
<div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="group inline-flex items-center justify-center gap-2 rounded-full border border-neutral-700 bg-neutral-800/50 px-6 py-3 text-base font-semibold text-neutral-200 transition hover:border-neutral-500 hover:text-white w-full sm:w-auto" href="mailto:hello@vipcreative.studio">
<i className="w-5 h-5" data-lucide="mail" style={{strokeWidth: '1.5px'}}></i>
<span>hello@vipcreative.studio</span>
</a>
<a className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-neutral-900 transition hover:bg-neutral-200 w-full sm:w-auto" href="#">
<i className="w-5 h-5" data-lucide="calendar" style={{strokeWidth: '1.5px'}}></i>
<span>Schedule a Discovery Call</span>
</a>
</div>
</div>
</div>
<div className="bg-neutral-900 py-6">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-neutral-500">
<p>© <span id="year"></span> VIP Creative Studio. All rights reserved.</p>
</div>
</div>
</footer>
</main>


    </>
  );
}
