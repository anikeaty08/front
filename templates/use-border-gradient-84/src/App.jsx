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



        // Initialize Icons
        lucide.createIcons();

        // Intersection Observer for Fade In Animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));

        // Modal Logic
        function toggleModal() {
            const modal = document.getElementById('contactModal');
            modal.classList.toggle('active');
            if(modal.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        }

        // Custom Dropdown Logic
        function setupDropdown(id) {
            const wrapper = document.getElementById(id);
            const trigger = wrapper.querySelector('.custom-select__trigger');
            const options = wrapper.querySelectorAll('.custom-option');
            const span = trigger.querySelector('span');

            trigger.addEventListener('click', () => {
                wrapper.classList.toggle('open');
            });

            options.forEach(option => {
                option.addEventListener('click', () => {
                    wrapper.querySelector('.selected')?.classList.remove('selected');
                    option.classList.add('selected');
                    span.textContent = option.textContent;
                    span.classList.add('text-white');
                    wrapper.classList.remove('open');
                });
            });

            // Close when clicking outside
            document.addEventListener('click', (e) => {
                if (!wrapper.contains(e.target)) {
                    wrapper.classList.remove('open');
                }
            });
        }

        setupDropdown('companyTypeSelect');
        setupDropdown('serviceSelect');

    
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
      

<div className="fixed inset-0 w-full max-w-7xl mx-auto pointer-events-none z-0 px-6 flex justify-between opacity-10">
<div className="w-px h-full bg-white"></div>
<div className="w-px h-full bg-white hidden md:block"></div>
<div className="w-px h-full bg-white hidden md:block"></div>
<div className="w-px h-full bg-white"></div>
</div>

<nav className="fixed top-0 left-0 right-0 z-40 border-b border-white/5 bg-black/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<span className="text-lg font-medium tracking-tight text-white group-hover:opacity-90 transition-opacity">Spark25</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#blog">Blog</a>
<button className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" onclick="toggleModal()">Contact Us</button>
</div>
<button className="md:hidden text-white" onclick="toggleModal()">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>

<section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 pointer-events-none z-0">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] opacity-40"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">

<div className="max-w-2xl">
<h1 className="text-5xl lg:text-7xl font-medium tracking-tight leading-[1.1] mb-8 text-white fade-in-up visible">
                        We fuel brands with digital solutions that <span className="text-purple-500">spark growth</span>.
                    </h1>
<p className="text-lg lg:text-xl text-neutral-400 mb-10 max-w-lg leading-relaxed fade-in-up delay-100 visible">
                        Spark25 is your go-to full-stack marketing partner. From high-impact campaigns to technical SEO, we help you achieve sustainable growth.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 fade-in-up delay-200 visible">
<button className="btn-gradient px-8 py-3.5 rounded-full font-medium flex items-center justify-center gap-2 text-sm tracking-tight" onclick="toggleModal()">
                            Get Started Today <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>

<div className="mt-16 pt-8 border-t border-white/5 fade-in-up delay-300 visible">
<p className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-6">Trusted by</p>
<div className="flex flex-wrap gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 font-semibold text-lg text-white"><svg className="lucide lucide-hexagon w-5 h-5" data-lucide="hexagon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg> Acme</div>
<div className="flex items-center gap-2 font-semibold text-lg text-white"><svg className="lucide lucide-triangle w-5 h-5" data-lucide="triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path></svg> Vortex</div>
<div className="flex items-center gap-2 font-semibold text-lg text-white"><svg className="lucide lucide-circle w-5 h-5" data-lucide="circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle></svg> Sphere</div>
<div className="flex items-center gap-2 font-semibold text-lg text-white"><svg className="lucide lucide-square w-5 h-5" data-lucide="square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect></svg> Block</div>
</div>
</div>
</div>

<div className="relative w-full aspect-square lg:aspect-[4/3] fade-in-up delay-200 flex items-center justify-center visible">

<div className="absolute top-10 right-4 lg:-right-4 glass px-4 py-3 rounded-lg flex items-center gap-3 animate-float-delayed shadow-xl">
<div className="w-8 h-8 rounded bg-blue-500/10 flex items-center justify-center text-blue-400">
<svg className="lucide lucide-search w-4 h-4" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<div>
<p className="text-xs text-neutral-400">SEO Rank</p>
<p className="text-sm text-white font-medium">#1 Result</p>
</div>
</div>

<div className="absolute bottom-16 -left-4 glass px-4 py-3 rounded-lg flex items-center gap-3 animate-float shadow-xl" style={{animationDelay: '-2s'}}>
<div className="w-8 h-8 rounded bg-purple-500/10 flex items-center justify-center text-purple-400">
<svg className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<div>
<p className="text-xs text-neutral-400">New Leads</p>
<p className="text-sm text-white font-medium">+1,240</p>
</div>
</div>

<div className="absolute -bottom-4 right-10 glass px-3 py-2 rounded-lg flex items-center gap-2 animate-float-delayed shadow-xl" style={{animationDelay: '-1s'}}>
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<p className="text-xs text-white font-medium">Campaign Active</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/20 border-t border-white/5 relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-white mb-4 fade-in-up">Services</h2>
<p className="text-neutral-400 max-w-2xl fade-in-up delay-100">Comprehensive solutions tailored to your business needs.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="card-gradient p-8 rounded-2xl fade-in-up">
<div className="w-12 h-12 bg-neutral-900 rounded-lg flex items-center justify-center text-purple-500 mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-megaphone w-6 h-6" data-lucide="megaphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path><path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path><path d="M8 6v8"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Brand Awareness</h3>
<p className="text-sm text-neutral-400 mb-6 leading-relaxed">Are you building a new business or want to raise awareness about your offering?</p>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-xs text-neutral-400"><svg className="lucide lucide-check w-3.5 h-3.5 text-purple-500 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Content marketing (blog and video)</li>
<li className="flex items-start gap-3 text-xs text-neutral-400"><svg className="lucide lucide-check w-3.5 h-3.5 text-purple-500 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> SEO</li>
<li className="flex items-start gap-3 text-xs text-neutral-400"><svg className="lucide lucide-check w-3.5 h-3.5 text-purple-500 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Social media (organic and paid)</li>
<li className="flex items-start gap-3 text-xs text-neutral-400"><svg className="lucide lucide-check w-3.5 h-3.5 text-purple-500 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Influencer marketing</li>
</ul>
</div>

<div className="card-gradient p-8 rounded-2xl fade-in-up delay-100">
<div className="w-12 h-12 bg-neutral-900 rounded-lg flex items-center justify-center text-purple-500 mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-magnet w-6 h-6" data-lucide="magnet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 15 4 4"></path><path d="M2.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.029-6.029a1 1 0 1 1 3 3l-6.029 6.029a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.365-6.367A1 1 0 0 0 8.716 4.282z"></path><path d="m5 8 4 4"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Lead Generation</h3>
<p className="text-sm text-neutral-400 mb-6 leading-relaxed">Do you want to drive more client meetings, RSVP's, sign ups, or new users?</p>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-xs text-neutral-400"><svg className="lucide lucide-check w-3.5 h-3.5 text-purple-500 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Paid ads (search and social)</li>
<li className="flex items-start gap-3 text-xs text-neutral-400"><svg className="lucide lucide-check w-3.5 h-3.5 text-purple-500 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Email/SMS marketing</li>
<li className="flex items-start gap-3 text-xs text-neutral-400"><svg className="lucide lucide-check w-3.5 h-3.5 text-purple-500 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Webinars &amp; Direct mail</li>
<li className="flex items-start gap-3 text-xs text-neutral-400"><svg className="lucide lucide-check w-3.5 h-3.5 text-purple-500 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Referrals and affiliate marketing</li>
</ul>
</div>

<div className="card-gradient p-8 rounded-2xl fade-in-up delay-200">
<div className="w-12 h-12 bg-neutral-900 rounded-lg flex items-center justify-center text-purple-500 mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-heart-handshake w-6 h-6" data-lucide="heart-handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Customer Success</h3>
<p className="text-sm text-neutral-400 mb-6 leading-relaxed">Do you want your customer to keep coming back and buying from you?</p>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-xs text-neutral-400"><svg className="lucide lucide-check w-3.5 h-3.5 text-purple-500 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Client success &amp; onboarding</li>
<li className="flex items-start gap-3 text-xs text-neutral-400"><svg className="lucide lucide-check w-3.5 h-3.5 text-purple-500 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Educational content</li>
<li className="flex items-start gap-3 text-xs text-neutral-400"><svg className="lucide lucide-check w-3.5 h-3.5 text-purple-500 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Upsell and cross-sell campaigns</li>
<li className="flex items-start gap-3 text-xs text-neutral-400"><svg className="lucide lucide-check w-3.5 h-3.5 text-purple-500 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Referral programs &amp; Reviews</li>
</ul>
</div>

<div className="card-gradient p-8 rounded-2xl fade-in-up">
<div className="w-12 h-12 bg-neutral-900 rounded-lg flex items-center justify-center text-purple-500 mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-briefcase w-6 h-6" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
</div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">B2B Enterprise Consulting</h3>
<p className="text-sm text-neutral-400 mb-6 leading-relaxed">Are you a B2B company and need assistance with making processes more efficient?</p>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-xs text-neutral-400"><svg className="lucide lucide-check w-3.5 h-3.5 text-purple-500 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Cross-functional processes</li>
<li className="flex items-start gap-3 text-xs text-neutral-400"><svg className="lucide lucide-check w-3.5 h-3.5 text-purple-500 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Budget forecasting</li>
<li className="flex items-start gap-3 text-xs text-neutral-400"><svg className="lucide lucide-check w-3.5 h-3.5 text-purple-500 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Analytics dashboards</li>
<li className="flex items-start gap-3 text-xs text-neutral-400"><svg className="lucide lucide-check w-3.5 h-3.5 text-purple-500 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Campaign design and execution</li>
</ul>
</div>

<div className="card-gradient p-8 rounded-2xl fade-in-up delay-100">
<div className="w-12 h-12 bg-neutral-900 rounded-lg flex items-center justify-center text-purple-500 mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-code-2 w-6 h-6" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Web &amp; App Development</h3>
<p className="text-sm text-neutral-400 mb-6 leading-relaxed">Ready to build your website or optimize your app? We’d love to partner and help you.</p>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-xs text-neutral-400"><svg className="lucide lucide-check w-3.5 h-3.5 text-purple-500 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Design new website for conversion</li>
<li className="flex items-start gap-3 text-xs text-neutral-400"><svg className="lucide lucide-check w-3.5 h-3.5 text-purple-500 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Develop website or app</li>
<li className="flex items-start gap-3 text-xs text-neutral-400"><svg className="lucide lucide-check w-3.5 h-3.5 text-purple-500 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> SEO Optimization</li>
<li className="flex items-start gap-3 text-xs text-neutral-400"><svg className="lucide lucide-check w-3.5 h-3.5 text-purple-500 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Design collateral</li>
</ul>
</div>

<div className="card-gradient p-8 rounded-2xl fade-in-up delay-200">
<div className="w-12 h-12 bg-neutral-900 rounded-lg flex items-center justify-center text-purple-500 mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-bar-chart-big w-6 h-6" data-lucide="bar-chart-big" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><rect height="12" rx="1" width="4" x="15" y="5"></rect><rect height="9" rx="1" width="4" x="7" y="8"></rect></svg>
</div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Analytics &amp; Dashboards</h3>
<p className="text-sm text-neutral-400 mb-6 leading-relaxed">Working on bringing all your data in one beautiful dashboard? We're here to help.</p>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-xs text-neutral-400"><svg className="lucide lucide-check w-3.5 h-3.5 text-purple-500 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Identify "north star" metric</li>
<li className="flex items-start gap-3 text-xs text-neutral-400"><svg className="lucide lucide-check w-3.5 h-3.5 text-purple-500 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Build "one-stop" dashboards</li>
<li className="flex items-start gap-3 text-xs text-neutral-400"><svg className="lucide lucide-check w-3.5 h-3.5 text-purple-500 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Consolidate data sources</li>
<li className="flex items-start gap-3 text-xs text-neutral-400"><svg className="lucide lucide-check w-3.5 h-3.5 text-purple-500 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Optimize analytics solutions</li>
</ul>
</div>
</div>
<div className="mt-16 text-center">
<button className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors" onclick="toggleModal()">
                    Get Free Executive Feedback <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</section>

<section className="py-24 relative border-t border-white/5 bg-neutral-950/30">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-start">
<div className="fade-in-up">
<span className="text-purple-500 font-medium text-xs tracking-widest uppercase mb-4 block">About Spark25</span>
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-white mb-6">
                        Spark25 is your go-to full-stack marketing partner.
                    </h2>
<p className="text-neutral-400 text-lg leading-relaxed mb-6">
                        We've worked with the Meta's and Google's of the world, as well as small growing startups and ad agencies. We excel in executing campaigns across organic social, paid ads, SEO, email, webinars, and more.
                    </p>
<p className="text-neutral-400 text-lg leading-relaxed">
                        From high-impact go-to-market campaigns to technical search engine optimization, our combined 50+ years of marketing expertise will help you achieve sustainable growth.
                    </p>
</div>
<div className="grid sm:grid-cols-2 gap-4 fade-in-up delay-100">
<div className="p-6 card-gradient-sm rounded-xl">
<svg className="lucide lucide-fingerprint w-6 h-6 text-purple-500 mb-4" data-lucide="fingerprint" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"></path><path d="M14 13.12c0 2.38 0 6.38-1 8.88"></path><path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"></path><path d="M2 12a10 10 0 0 1 18-6"></path><path d="M2 16h.01"></path><path d="M21.8 16c.2-2 .131-5.354 0-6"></path><path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"></path><path d="M8.65 22c.21-.66.45-1.32.57-2"></path><path d="M9 6.8a6 6 0 0 1 9 5.2v2"></path></svg>
<h4 className="text-white font-medium mb-1 text-sm">Stay authentic, be You</h4>
<p className="text-xs text-neutral-500">Value 1</p>
</div>
<div className="p-6 card-gradient-sm rounded-xl">
<svg className="lucide lucide-zap w-6 h-6 text-purple-500 mb-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<h4 className="text-white font-medium mb-1 text-sm">Spark creativity with data</h4>
<p className="text-xs text-neutral-500">Value 2</p>
</div>
<div className="p-6 card-gradient-sm rounded-xl">
<svg className="lucide lucide-focus w-6 h-6 text-purple-500 mb-4" data-lucide="focus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3"></circle><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path></svg>
<h4 className="text-white font-medium mb-1 text-sm">Solution-focused mindset</h4>
<p className="text-xs text-neutral-500">Value 3</p>
</div>
<div className="p-6 card-gradient-sm rounded-xl">
<svg className="lucide lucide-refresh-cw w-6 h-6 text-purple-500 mb-4" data-lucide="refresh-cw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>
<h4 className="text-white font-medium mb-1 text-sm">Pivot and adapt as needed</h4>
<p className="text-xs text-neutral-500">Value 4</p>
</div>
<div className="p-6 card-gradient-sm rounded-xl">
<svg className="lucide lucide-trending-up w-6 h-6 text-purple-500 mb-4" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<h4 className="text-white font-medium mb-1 text-sm">Grow from wins &amp; mistakes</h4>
<p className="text-xs text-neutral-500">Value 5</p>
</div>
<div className="p-6 card-gradient-sm rounded-xl">
<svg className="lucide lucide-shield w-6 h-6 text-purple-500 mb-4" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
<h4 className="text-white font-medium mb-1 text-sm">Be a superhero for team</h4>
<p className="text-xs text-neutral-500">Value 6</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5" id="blog">
<div className="max-w-7xl mx-auto px-6">
<span className="text-purple-500 font-medium text-xs tracking-widest uppercase mb-4 block fade-in-up">Latest Insights</span>
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-white mb-12 fade-in-up">Blog</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="group cursor-pointer fade-in-up">
<div className="aspect-video bg-neutral-900 rounded-xl card-gradient mb-6 overflow-hidden relative">
<div className="absolute inset-0 bg-purple-900/10 group-hover:bg-purple-900/20 transition-colors"></div>
</div>
<h3 className="text-lg font-medium text-white mb-3 group-hover:text-purple-400 transition-colors">The Rise of Augmented Reality in Marketing: What You Need to Know</h3>
<p className="text-neutral-400 text-sm mb-4 leading-relaxed">As technology continues to evolve, augmented reality is becoming a powerful tool for brands...</p>
<span className="text-purple-500 text-sm font-medium flex items-center gap-1">Read More <svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></span>
</div>

<div className="group cursor-pointer fade-in-up delay-100">
<div className="aspect-video bg-neutral-900 rounded-xl card-gradient mb-6 overflow-hidden relative">
<div className="absolute inset-0 bg-purple-900/10 group-hover:bg-purple-900/20 transition-colors"></div>
</div>
<h3 className="text-lg font-medium text-white mb-3 group-hover:text-purple-400 transition-colors">AI-Powered Chatbots: Revolutionizing Customer Service</h3>
<p className="text-neutral-400 text-sm mb-4 leading-relaxed">Additionally, chatbots can handle multiple queries simultaneously, reducing wait times...</p>
<span className="text-purple-500 text-sm font-medium flex items-center gap-1">Read More <svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></span>
</div>

<div className="group cursor-pointer fade-in-up delay-200">
<div className="aspect-video bg-neutral-900 rounded-xl card-gradient mb-6 overflow-hidden relative">
<div className="absolute inset-0 bg-purple-900/10 group-hover:bg-purple-900/20 transition-colors"></div>
</div>
<h3 className="text-lg font-medium text-white mb-3 group-hover:text-purple-400 transition-colors">The Importance of Brand Consistency Across Channels</h3>
<p className="text-neutral-400 text-sm mb-4 leading-relaxed">This blog will explore why consistency is key to building trust and recognition...</p>
<span className="text-purple-500 text-sm font-medium flex items-center gap-1">Read More <svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></span>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden bg-gradient-to-b from-black to-neutral-900 border-t border-white/5">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10 fade-in-up">
<h2 className="text-4xl lg:text-6xl font-medium tracking-tight text-white mb-6">It's time to<span className="text-purple-500">Accelerate Your Growth!</span></h2>
<p className="text-neutral-400 text-lg mb-10">We look forward to hearing from you.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-8">
<div className="flex items-center gap-4 text-left">
<div className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center overflow-hidden border border-neutral-700">
<svg className="lucide lucide-user w-6 h-6 text-neutral-400" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
<div>
<p className="text-white font-medium text-sm">Lesya Pishchevskaya</p>
<p className="text-neutral-500 text-xs">lesya@spark25.com</p>
</div>
</div>
<button className="btn-gradient px-8 py-3.5 rounded-full font-medium shadow-[0_0_20px_rgba(255,255,255,0.2)]" onclick="toggleModal()">
                    Get Started Today
                </button>
</div>
</div>
</section>

<footer className="bg-black border-t border-white/5 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-neutral-500 text-xs">
                © 2024 SPARK25. All Rights Reserved
            </div>
<div className="flex gap-6 text-xs font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">Email Us</a>
</div>
</div>
</footer>

<div className="modal-backdrop fixed inset-0 z-50 flex items-center justify-center px-4" id="contactModal">
<div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onclick="toggleModal()"></div>
<div className="modal-content relative w-full max-w-lg bg-[#0a0a0a] border border-neutral-800 rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden">

<div className="flex justify-between items-center p-6 border-b border-neutral-800">
<div>
<h3 className="text-xl font-medium text-white tracking-tight">Let's Talk</h3>
<p className="text-xs text-neutral-400 mt-1">We'll get back to you in the next 1-2 business days.</p>
</div>
<button className="text-neutral-500 hover:text-white transition-colors" onclick="toggleModal()">
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>

<div className="p-6 overflow-y-auto">
<div className="mb-6">
<p className="text-xs text-neutral-500 uppercase font-medium mb-2">Email us</p>
<a className="text-purple-400 hover:text-purple-300 text-sm" href="mailto:lesya@spark25.com">lesya@spark25.com</a>
</div>
<form className="space-y-4">
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-400">Name</label>
<input className="w-full bg-[#171717] border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="Your name" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-400">Email</label>
<input className="w-full bg-[#171717] border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="Your email" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-400">Company Type</label>
<div className="custom-select-wrapper">
<div className="custom-select" id="companyTypeSelect">
<div className="custom-select__trigger">
<span>Select company type</span>
<svg className="lucide lucide-chevron-down w-4 h-4 text-neutral-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
<div className="custom-options">
<span className="custom-option" data-value="startup">Startup</span>
<span className="custom-option" data-value="agency">Agency</span>
<span className="custom-option" data-value="enterprise">Enterprise</span>
<span className="custom-option" data-value="other">Other</span>
</div>
</div>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-400">What service are you looking for?</label>
<div className="custom-select-wrapper">
<div className="custom-select" id="serviceSelect">
<div className="custom-select__trigger">
<span>Select a service</span>
<svg className="lucide lucide-chevron-down w-4 h-4 text-neutral-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
<div className="custom-options">
<span className="custom-option" data-value="brand">Brand Awareness</span>
<span className="custom-option" data-value="lead">Lead Generation</span>
<span className="custom-option" data-value="success">Customer Success</span>
<span className="custom-option" data-value="b2b">B2B Consulting</span>
<span className="custom-option" data-value="dev">Web &amp; App Dev</span>
<span className="custom-option" data-value="analytics">Analytics</span>
</div>
</div>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-400">Project Details</label>
<textarea className="w-full bg-[#171717] border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors h-24 resize-none" placeholder="Tell us about your project..."></textarea>
</div>
<button className="w-full btn-gradient py-3 rounded-lg font-medium text-sm mt-2" type="button">
                        Submit
                    </button>
</form>
</div>
</div>
</div>


    </>
  );
}
