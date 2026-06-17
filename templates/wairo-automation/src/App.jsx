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



        // Navbar scroll effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('nav-scrolled');
            } else {
                navbar.classList.remove('nav-scrolled');
            }
        });

        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Fade in on scroll
        const fadeElements = document.querySelectorAll('.fade-in');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        fadeElements.forEach(el => observer.observe(el));

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    // Close mobile menu if open
                    mobileMenu.classList.add('hidden');
                }
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
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex flex-col" href="#">
<span className="text-2xl font-bold tracking-tight">WAIRO</span>
<span className="text-xs text-gray-600 -mt-1">Creative AI Studio</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium hover:text-[#778452] transition-colors" href="#solutions">Solutions</a>
<a className="text-sm font-medium hover:text-[#778452] transition-colors" href="#how-it-works">How It Works</a>
<a className="text-sm font-medium hover:text-[#778452] transition-colors" href="#results">Results</a>
<a className="text-sm font-medium hover:text-[#778452] transition-colors" href="#contact">Contact</a>
</div>
<a className="hidden md:inline-flex px-5 py-2.5 bg-[#D3FF6A] text-black text-sm font-semibold rounded-full hover:bg-[#c4f050] transition-all hover:shadow-lg" href="#contact">
                Book Free Consultation
            </a>
<button className="md:hidden p-2" id="mobile-menu-btn">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:menu" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>

<div className="hidden md:hidden bg-white border-t border-gray-100 px-6 py-4" id="mobile-menu">
<div className="flex flex-col gap-4">
<a className="text-sm font-medium py-2" href="#solutions">Solutions</a>
<a className="text-sm font-medium py-2" href="#how-it-works">How It Works</a>
<a className="text-sm font-medium py-2" href="#results">Results</a>
<a className="text-sm font-medium py-2" href="#contact">Contact</a>
<a className="px-5 py-3 bg-[#D3FF6A] text-black text-sm font-semibold rounded-full text-center" href="#contact">
                    Book Free Consultation
                </a>
</div>
</div>
</nav>
<main className="">

<section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="fade-in visible">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
                            Stop Doing Manual Work. Let AI Handle Your Lead Generation, Outreach &amp; Operations — 24/7
                        </h1>
<p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                            We build custom AI agents and automation systems that generate leads, nurture prospects, and run your business operations while you sleep. Join 100+ businesses already saving 20+ hours per week.
                        </p>
<div className="flex flex-col sm:flex-row gap-4 mb-8">
<a className="px-8 py-4 bg-[#D3FF6A] text-black text-base font-semibold rounded-full hover:bg-[#c4f050] transition-all hover:shadow-xl text-center" href="#contact">
                                Book Free Consultation
                            </a>
<a className="px-8 py-4 border-2 border-black text-black text-base font-semibold rounded-full hover:bg-black hover:text-white transition-all text-center flex items-center justify-center gap-2" href="#how-it-works">
                                See How It Works
                                <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-8">
<span className="flex items-center gap-1.5"><svg aria-hidden="true" className="iconify text-[#778452] iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" style={{strokeWidth: '2'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 50,000+ Leads Generated</span>
<span className="flex items-center gap-1.5"><svg aria-hidden="true" className="iconify text-[#778452] iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" style={{strokeWidth: '2'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 50+ Automations Built</span>
<span className="flex items-center gap-1.5">
<svg aria-hidden="true" className="iconify text-[#778452] iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" style={{strokeWidth: '2'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                Global Clients
                            </span>
</div>
<div className="inline-flex items-center gap-3 px-5 py-3 bg-[#D3FF6A] rounded-xl">
<span className="text-xl">🎉</span>
<span className="text-sm font-semibold">LIMITED: 50% OFF Your First AI Agent or Automation System</span>
</div>
</div>
<div className="fade-in relative">
<div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 lg:p-12">

<div className="relative h-80 lg:h-96">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[#D3FF6A] rounded-2xl flex items-center justify-center shadow-lg z-10">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:bot" data-width="32" height="32" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2m16 0h2m-7-1v2m-6-2v2"></path></g></svg>
</div>

<svg className="absolute inset-0 w-full h-full" style={{zIndex: '0'}}>
<line opacity="0.5" stroke="#778452" stroke-dasharray="5,5" strokeWidth="2" x1="50%" x2="20%" y1="50%" y2="20%"></line>
<line opacity="0.5" stroke="#778452" stroke-dasharray="5,5" strokeWidth="2" x1="50%" x2="80%" y1="50%" y2="20%"></line>
<line opacity="0.5" stroke="#778452" stroke-dasharray="5,5" strokeWidth="2" x1="50%" x2="20%" y1="50%" y2="80%"></line>
<line opacity="0.5" stroke="#778452" stroke-dasharray="5,5" strokeWidth="2" x1="50%" x2="80%" y1="50%" y2="80%"></line>
</svg>

<div className="absolute top-4 left-4 w-14 h-14 bg-white rounded-xl shadow-md flex items-center justify-center">
<svg aria-hidden="true" className="iconify text-[#0A66C2] iconify--lucide" data-icon="lucide:linkedin" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg>
</div>
<div className="absolute top-4 right-4 w-14 h-14 bg-white rounded-xl shadow-md flex items-center justify-center">
<svg aria-hidden="true" className="iconify text-[#EA4335] iconify--lucide" data-icon="lucide:mail" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
</div>
<div className="absolute bottom-4 left-4 w-14 h-14 bg-white rounded-xl shadow-md flex items-center justify-center">
<svg aria-hidden="true" className="iconify text-[#25D366] iconify--lucide" data-icon="lucide:message-circle" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="absolute bottom-4 right-4 w-14 h-14 bg-white rounded-xl shadow-md flex items-center justify-center">
<svg aria-hidden="true" className="iconify text-[#778452] iconify--lucide" data-icon="lucide:database" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14a9 3 0 0 0 18 0V5"></path><path d="M3 12a9 3 0 0 0 18 0"></path></g></svg>
</div>

<div className="absolute top-1/4 left-1/4 -translate-x-1/2 px-3 py-1.5 bg-white rounded-full shadow-sm text-xs font-medium">
                                    Outreach
                                </div>
<div className="absolute top-1/4 right-1/4 translate-x-1/2 px-3 py-1.5 bg-white rounded-full shadow-sm text-xs font-medium">
                                    Follow-ups
                                </div>
<div className="absolute bottom-1/4 left-1/4 -translate-x-1/2 px-3 py-1.5 bg-white rounded-full shadow-sm text-xs font-medium">
                                    Nurture
                                </div>
<div className="absolute bottom-1/4 right-1/4 translate-x-1/2 px-3 py-1.5 bg-white rounded-full shadow-sm text-xs font-medium">
                                    Sync
                                </div>
</div>
</div>

<div className="absolute -bottom-4 -right-4 bg-black text-white px-4 py-2 rounded-xl shadow-lg text-sm font-medium">
                            Runs 24/7 ⚡
                        </div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-[#778452]">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 fade-in">
<h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Still Spending Hours on Repetitive Tasks?
                    </h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 fade-in">
<div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:x" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-white/90 leading-relaxed">
                            Manually sending LinkedIn connection requests and follow-ups
                        </p>
</div>
<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 fade-in">
<div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:x" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-white/90 leading-relaxed">
                            Copy-pasting leads between spreadsheets and CRMs
                        </p>
</div>
<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 fade-in">
<div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:x" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-white/90 leading-relaxed">
                            Missing leads because you can't respond fast enough
                        </p>
</div>
<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 fade-in">
<div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:x" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-white/90 leading-relaxed">
                            Hiring VAs for tasks that should be automated
                        </p>
</div>
</div>
<p className="text-center text-white/80 text-lg max-w-3xl mx-auto fade-in">
                    Your competitors are automating. Every hour you spend on manual work is an hour you're not closing deals.
                </p>
</div>
</section>

<section className="py-20 md:py-32 bg-white" id="solutions">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 fade-in">
<h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                        Custom AI Agents &amp; Automations Built For Your Business
                    </h2>
<p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We don't sell generic software. We build tailored automation systems that integrate with your existing tools.
                    </p>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-white border-2 border-gray-100 rounded-3xl p-8 lg:p-10 hover:border-[#D3FF6A] transition-all hover:shadow-xl fade-in group">
<div className="w-14 h-14 bg-[#D3FF6A] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:zap" data-width="28" height="28" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-2xl font-bold mb-3">Wairo360: Complete Lead Generation &amp; Outreach</h3>
<p className="text-gray-600 mb-6">
                            End-to-end automation for LinkedIn, email sequences, and WhatsApp follow-ups.
                        </p>
<div className="space-y-3 mb-6">
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-[#778452] iconify--lucide" data-icon="lucide:check-circle" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg>
<span className="text-sm">LinkedIn outreach automation</span>
</div>
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-[#778452] iconify--lucide" data-icon="lucide:check-circle" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg>
<span className="text-sm">Multi-channel email sequences</span>
</div>
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-[#778452] iconify--lucide" data-icon="lucide:check-circle" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg>
<span className="text-sm">WhatsApp automation</span>
</div>
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-[#778452] iconify--lucide" data-icon="lucide:check-circle" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg>
<span className="text-sm">CRM integration</span>
</div>
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-[#778452] iconify--lucide" data-icon="lucide:check-circle" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg>
<span className="text-sm">Analytics dashboard</span>
</div>
</div>
<div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D3FF6A]/20 rounded-full">
<svg aria-hidden="true" className="iconify text-[#778452] iconify--lucide" data-icon="lucide:trending-up" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 7h6v6"></path><path d="m22 7l-8.5 8.5l-5-5L2 17"></path></g></svg>
<span className="text-sm font-semibold">500+ leads/month average</span>
</div>
</div>

<div className="bg-white border-2 border-gray-100 rounded-3xl p-8 lg:p-10 hover:border-[#D3FF6A] transition-all hover:shadow-xl fade-in group">
<div className="w-14 h-14 bg-[#D3FF6A] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:bot" data-width="28" height="28" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2m16 0h2m-7-1v2m-6-2v2"></path></g></svg>
</div>
<h3 className="text-2xl font-bold mb-3">Custom AI Agents</h3>
<p className="text-gray-600 mb-6">
                            Specialized AI agents for your industry — real estate, recruitment, e-commerce, agencies.
                        </p>
<div className="space-y-3 mb-6">
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-[#778452] iconify--lucide" data-icon="lucide:check-circle" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg>
<span className="text-sm">Auto-post property listings</span>
</div>
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-[#778452] iconify--lucide" data-icon="lucide:check-circle" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg>
<span className="text-sm">CV screening &amp; ranking</span>
</div>
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-[#778452] iconify--lucide" data-icon="lucide:check-circle" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg>
<span className="text-sm">Customer service bots</span>
</div>
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-[#778452] iconify--lucide" data-icon="lucide:check-circle" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg>
<span className="text-sm">Inventory sync automation</span>
</div>
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-[#778452] iconify--lucide" data-icon="lucide:check-circle" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg>
<span className="text-sm">Industry-specific workflows</span>
</div>
</div>
<div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D3FF6A]/20 rounded-full">
<svg aria-hidden="true" className="iconify text-[#778452] iconify--lucide" data-icon="lucide:clock" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
<span className="text-sm font-semibold">Save 20+ hours/week</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-gray-50" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 fade-in">
<h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                        From Idea to Running Automation in 7 Days
                    </h2>
</div>
<div className="grid md:grid-cols-3 gap-8 lg:gap-12">
<div className="relative fade-in">
<div className="w-16 h-16 bg-[#D3FF6A] rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                            1
                        </div>
<h3 className="text-xl font-bold mb-3">Free Strategy Call</h3>
<p className="text-gray-600 leading-relaxed">
                            We analyze your workflow and create a custom automation roadmap tailored to your business needs.
                        </p>
<p className="text-sm text-[#778452] font-medium mt-3">30 minutes</p>

<div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-[#D3FF6A]" style={{width: 'calc(100% - 4rem)'}}></div>
</div>
<div className="relative fade-in">
<div className="w-16 h-16 bg-[#D3FF6A] rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                            2
                        </div>
<h3 className="text-xl font-bold mb-3">We Build Your System</h3>
<p className="text-gray-600 leading-relaxed">
                            Custom automation built with n8n, Make, and AI tools — integrated with your existing stack.
                        </p>
<p className="text-sm text-[#778452] font-medium mt-3">5-7 days</p>

<div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-[#D3FF6A]" style={{width: 'calc(100% - 4rem)'}}></div>
</div>
<div className="fade-in">
<div className="w-16 h-16 bg-[#D3FF6A] rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                            3
                        </div>
<h3 className="text-xl font-bold mb-3">Launch &amp; Optimize</h3>
<p className="text-gray-600 leading-relaxed">
                            Go live with ongoing support and optimization. We ensure your automation runs smoothly.
                        </p>
<p className="text-sm text-[#778452] font-medium mt-3">Ongoing support</p>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-white" id="results">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 fade-in">
<h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                        Real Results From Real Businesses
                    </h2>
</div>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
<div className="text-center p-6 fade-in">
<div className="text-4xl md:text-5xl font-bold text-[#D3FF6A] mb-2" style={{textShadow: '0 0 20px rgba(211, 255, 106, 0.3)'}}>20,000+</div>
<p className="text-gray-600 font-medium">Leads Generated</p>
</div>
<div className="text-center p-6 fade-in">
<div className="text-4xl md:text-5xl font-bold text-[#D3FF6A] mb-2" style={{textShadow: '0 0 20px rgba(211, 255, 106, 0.3)'}}>100+</div>
<p className="text-gray-600 font-medium">Automations Deployed</p>
</div>
<div className="text-center p-6 fade-in">
<div className="text-4xl md:text-5xl font-bold text-[#D3FF6A] mb-2" style={{textShadow: '0 0 20px rgba(211, 255, 106, 0.3)'}}>20hrs+</div>
<p className="text-gray-600 font-medium">Weekly Time Saved</p>
</div>
<div className="text-center p-6 fade-in">
<div className="text-4xl md:text-5xl font-bold text-[#D3FF6A] mb-2" style={{textShadow: '0 0 20px rgba(211, 255, 106, 0.3)'}}>15+</div>
<p className="text-gray-600 font-medium">Countries Served</p>
</div>
</div>

<div className="grid md:grid-cols-3 gap-8">
<div className="bg-gray-50 rounded-2xl p-8 fade-in">
<div className="flex gap-1 mb-4">
<svg aria-hidden="true" className="iconify text-[#D3FF6A] iconify--lucide" data-icon="lucide:star" data-width="20" height="20" role="img" style={{fill: '#D3FF6A'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify text-[#D3FF6A] iconify--lucide" data-icon="lucide:star" data-width="20" height="20" role="img" style={{fill: '#D3FF6A'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify text-[#D3FF6A] iconify--lucide" data-icon="lucide:star" data-width="20" height="20" role="img" style={{fill: '#D3FF6A'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify text-[#D3FF6A] iconify--lucide" data-icon="lucide:star" data-width="20" height="20" role="img" style={{fill: '#D3FF6A'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify text-[#D3FF6A] iconify--lucide" data-icon="lucide:star" data-width="20" height="20" role="img" style={{fill: '#D3FF6A'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-gray-700 mb-6 leading-relaxed">
                            "Wairo built us a complete LinkedIn outreach system. We went from 10 leads per week to 50+. Game changer for our agency."
                        </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-[#778452] rounded-full flex items-center justify-center text-white font-semibold text-sm">MA</div>
<div>
<p className="font-semibold text-sm">Marketing Agency</p>
<p className="text-xs text-gray-500">United Kingdom</p>
</div>
</div>
</div>
<div className="bg-gray-50 rounded-2xl p-8 fade-in">
<div className="flex gap-1 mb-4">
<svg aria-hidden="true" className="iconify text-[#D3FF6A] iconify--lucide" data-icon="lucide:star" data-width="20" height="20" role="img" style={{fill: '#D3FF6A'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify text-[#D3FF6A] iconify--lucide" data-icon="lucide:star" data-width="20" height="20" role="img" style={{fill: '#D3FF6A'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify text-[#D3FF6A] iconify--lucide" data-icon="lucide:star" data-width="20" height="20" role="img" style={{fill: '#D3FF6A'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify text-[#D3FF6A] iconify--lucide" data-icon="lucide:star" data-width="20" height="20" role="img" style={{fill: '#D3FF6A'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify text-[#D3FF6A] iconify--lucide" data-icon="lucide:star" data-width="20" height="20" role="img" style={{fill: '#D3FF6A'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-gray-700 mb-6 leading-relaxed">
                            "The real estate AI agent changed our business. Listings go live automatically, inquiries get instant responses. We never miss a lead."
                        </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-[#778452] rounded-full flex items-center justify-center text-white font-semibold text-sm">RE</div>
<div>
<p className="font-semibold text-sm">Real Estate Agency</p>
<p className="text-xs text-gray-500">Malta</p>
</div>
</div>
</div>
<div className="bg-gray-50 rounded-2xl p-8 fade-in">
<div className="flex gap-1 mb-4">
<svg aria-hidden="true" className="iconify text-[#D3FF6A] iconify--lucide" data-icon="lucide:star" data-width="20" height="20" role="img" style={{fill: '#D3FF6A'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify text-[#D3FF6A] iconify--lucide" data-icon="lucide:star" data-width="20" height="20" role="img" style={{fill: '#D3FF6A'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify text-[#D3FF6A] iconify--lucide" data-icon="lucide:star" data-width="20" height="20" role="img" style={{fill: '#D3FF6A'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify text-[#D3FF6A] iconify--lucide" data-icon="lucide:star" data-width="20" height="20" role="img" style={{fill: '#D3FF6A'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify text-[#D3FF6A] iconify--lucide" data-icon="lucide:star" data-width="20" height="20" role="img" style={{fill: '#D3FF6A'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-gray-700 mb-6 leading-relaxed">
                            "My team now focuses on closing deals instead of data entry. The automation handles everything from sourcing to scheduling."
                        </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-[#778452] rounded-full flex items-center justify-center text-white font-semibold text-sm">RF</div>
<div>
<p className="font-semibold text-sm">Recruitment Firm</p>
<p className="text-xs text-gray-500">Germany</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-[#778452]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="fade-in">
<h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                            Introducing Wairo360: Your Lead Generation Command Center
                        </h2>
<div className="space-y-4 mb-8">
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-[#D3FF6A] iconify--lucide" data-icon="lucide:check" data-width="24" height="24" role="img" style={{strokeWidth: '2'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-white">Multi-channel campaigns (LinkedIn + Email + WhatsApp)</span>
</div>
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-[#D3FF6A] iconify--lucide" data-icon="lucide:check" data-width="24" height="24" role="img" style={{strokeWidth: '2'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-white">AI-powered personalization at scale</span>
</div>
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-[#D3FF6A] iconify--lucide" data-icon="lucide:check" data-width="24" height="24" role="img" style={{strokeWidth: '2'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-white">Smart lead scoring &amp; prioritization</span>
</div>
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-[#D3FF6A] iconify--lucide" data-icon="lucide:check" data-width="24" height="24" role="img" style={{strokeWidth: '2'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-white">Real-time analytics dashboard</span>
</div>
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-[#D3FF6A] iconify--lucide" data-icon="lucide:check" data-width="24" height="24" role="img" style={{strokeWidth: '2'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-white">CRM integrations (HubSpot, Salesforce, etc.)</span>
</div>
</div>
<a className="inline-flex px-8 py-4 bg-[#D3FF6A] text-black font-semibold rounded-full hover:bg-[#c4f050] transition-all hover:shadow-xl" href="#contact">
                            Get Early Access
                        </a>
</div>
<div className="fade-in">

<div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
<div className="bg-gray-100 px-4 py-3 flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-yellow-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
<span className="ml-4 text-xs text-gray-500">wairo360.app/dashboard</span>
</div>
<div className="p-6">
<div className="flex justify-between items-center mb-6">
<h4 className="font-semibold">Campaign Overview</h4>
<span className="text-xs text-gray-500">Last 7 days</span>
</div>
<div className="grid grid-cols-3 gap-4 mb-6">
<div className="bg-gray-50 rounded-xl p-4">
<p className="text-2xl font-bold text-[#778452]">847</p>
<p className="text-xs text-gray-500">Messages Sent</p>
</div>
<div className="bg-gray-50 rounded-xl p-4">
<p className="text-2xl font-bold text-[#778452]">234</p>
<p className="text-xs text-gray-500">Responses</p>
</div>
<div className="bg-gray-50 rounded-xl p-4">
<p className="text-2xl font-bold text-[#778452]">52</p>
<p className="text-xs text-gray-500">Meetings</p>
</div>
</div>

<div className="bg-gray-50 rounded-xl p-4 h-32 flex items-end justify-between gap-2">
<div className="w-full h-[40%] bg-[#D3FF6A] rounded-t"></div>
<div className="w-full h-[60%] bg-[#D3FF6A] rounded-t"></div>
<div className="w-full h-[45%] bg-[#D3FF6A] rounded-t"></div>
<div className="w-full h-[80%] bg-[#D3FF6A] rounded-t"></div>
<div className="w-full h-[70%] bg-[#D3FF6A] rounded-t"></div>
<div className="w-full h-[90%] bg-[#D3FF6A] rounded-t"></div>
<div className="w-full h-[100%] bg-[#778452] rounded-t"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 fade-in">
<h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                        Automation For Every Industry
                    </h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="border-2 border-gray-100 rounded-2xl p-6 hover:border-[#D3FF6A] transition-all cursor-pointer fade-in group">
<div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#D3FF6A] transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:home" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></g></svg>
</div>
<h3 className="text-lg font-bold mb-2">Real Estate</h3>
<p className="text-sm text-gray-600">Auto-post listings, database scraping, instant inquiry response</p>
</div>
<div className="border-2 border-gray-100 rounded-2xl p-6 hover:border-[#D3FF6A] transition-all cursor-pointer fade-in group">
<div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#D3FF6A] transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:users" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
</div>
<h3 className="text-lg font-bold mb-2">Recruitment</h3>
<p className="text-sm text-gray-600">LinkedIn sourcing, CV screening, interview scheduling</p>
</div>
<div className="border-2 border-gray-100 rounded-2xl p-6 hover:border-[#D3FF6A] transition-all cursor-pointer fade-in group">
<div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#D3FF6A] transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:megaphone" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path><path d="M6 14a12 12 0 0 0 2.4 7.2a2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14M8 6v8"></path></g></svg>
</div>
<h3 className="text-lg font-bold mb-2">Marketing Agencies</h3>
<p className="text-sm text-gray-600">Client reporting, social scheduling, lead gen automation</p>
</div>
<div className="border-2 border-gray-100 rounded-2xl p-6 hover:border-[#D3FF6A] transition-all cursor-pointer fade-in group">
<div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#D3FF6A] transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shopping-cart" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></g></svg>
</div>
<h3 className="text-lg font-bold mb-2">E-commerce</h3>
<p className="text-sm text-gray-600">Inventory sync, cart recovery, customer service bot</p>
</div>
<div className="border-2 border-gray-100 rounded-2xl p-6 hover:border-[#D3FF6A] transition-all cursor-pointer fade-in group">
<div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#D3FF6A] transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:briefcase" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></g></svg>
</div>
<h3 className="text-lg font-bold mb-2">Professional Services</h3>
<p className="text-sm text-gray-600">Booking automation, client onboarding, document generation</p>
</div>
<div className="border-2 border-gray-100 rounded-2xl p-6 hover:border-[#D3FF6A] transition-all cursor-pointer fade-in group">
<div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#D3FF6A] transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:cloud" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-bold mb-2">SaaS</h3>
<p className="text-sm text-gray-600">User onboarding, churn prevention, support routing</p>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-gray-50">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16 fade-in">
<h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                        Frequently Asked Questions
                    </h2>
</div>
<div className="space-y-4">
<details className="bg-white rounded-2xl border border-gray-100 fade-in group">
<summary className="p-6 cursor-pointer flex justify-between items-center">
<span className="font-semibold">How long does it take to build an automation?</span>
<svg aria-hidden="true" className="iconify faq-icon text-[#778452] iconify--lucide" data-icon="lucide:plus" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="px-6 pb-6 text-gray-600">
                            Most automations are built and deployed within 5-7 business days. Complex enterprise solutions may take 2-3 weeks depending on integrations required.
                        </div>
</details>
<details className="bg-white rounded-2xl border border-gray-100 fade-in group">
<summary className="p-6 cursor-pointer flex justify-between items-center">
<span className="font-semibold">Do I need technical knowledge?</span>
<svg aria-hidden="true" className="iconify faq-icon text-[#778452] iconify--lucide" data-icon="lucide:plus" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="px-6 pb-6 text-gray-600">
                            No technical knowledge required. We handle everything from design to deployment. You just tell us what you need, and we build it for you.
                        </div>
</details>
<details className="bg-white rounded-2xl border border-gray-100 fade-in group">
<summary className="p-6 cursor-pointer flex justify-between items-center">
<span className="font-semibold">What tools do you integrate with?</span>
<svg aria-hidden="true" className="iconify faq-icon text-[#778452] iconify--lucide" data-icon="lucide:plus" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="px-6 pb-6 text-gray-600">
                            We integrate with 200+ tools including LinkedIn, Gmail, WhatsApp Business, HubSpot, Salesforce, Airtable, Google Sheets, Slack, and many more.
                        </div>
</details>
<details className="bg-white rounded-2xl border border-gray-100 fade-in group">
<summary className="p-6 cursor-pointer flex justify-between items-center">
<span className="font-semibold">Is LinkedIn automation safe and compliant?</span>
<svg aria-hidden="true" className="iconify faq-icon text-[#778452] iconify--lucide" data-icon="lucide:plus" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="px-6 pb-6 text-gray-600">
                            Yes, we follow all platform guidelines and implement safe limits. Our automations mimic human behavior patterns to ensure account safety.
                        </div>
</details>
<details className="bg-white rounded-2xl border border-gray-100 fade-in group">
<summary className="p-6 cursor-pointer flex justify-between items-center">
<span className="font-semibold">Can I make changes after launch?</span>
<svg aria-hidden="true" className="iconify faq-icon text-[#778452] iconify--lucide" data-icon="lucide:plus" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="px-6 pb-6 text-gray-600">
                            Absolutely. All our packages include ongoing optimization and support. We continuously improve your automations based on performance data.
                        </div>
</details>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-[#D3FF6A]" id="contact">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight fade-in">
                    Ready to Automate Your Business?
                </h2>
<p className="text-xl mb-10 opacity-80 fade-in">
                    Book your free consultation and get 50% off your first project.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 fade-in">
<a className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-all hover:shadow-xl" href="https://calendly.com/wairo" target="_blank">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:calendar" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M8 2v4m8-4v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></g></svg>
                        Book Free Consultation
                    </a>
<a className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-black text-black font-semibold rounded-full hover:bg-black hover:text-white transition-all" href="https://wa.me/1234567890" target="_blank">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:message-circle" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        WhatsApp Us Now
                    </a>
</div>
<div className="flex flex-wrap justify-center gap-6 text-sm fade-in">
<span className="flex items-center gap-1.5">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" style={{strokeWidth: '2'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        No commitment
                    </span>
<span className="flex items-center gap-1.5">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" style={{strokeWidth: '2'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        30-min strategy session
                    </span>
<span className="flex items-center gap-1.5">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" style={{strokeWidth: '2'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        Custom roadmap included
                    </span>
</div>
</div>
</section>
</main>

<footer className="bg-black text-white py-16">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="md:col-span-2">
<div className="mb-4">
<span className="text-2xl font-bold">WAIRO</span>
<span className="block text-sm text-gray-400">Creative AI Studio</span>
</div>
<p className="text-gray-400 max-w-sm">
                        We build custom AI agents and automation systems that generate leads, nurture prospects, and run your business operations 24/7.
                    </p>
</div>
<div>
<h4 className="font-semibold mb-4">Quick Links</h4>
<ul className="space-y-2 text-gray-400">
<li><a className="hover:text-[#D3FF6A] transition-colors" href="#solutions">Solutions</a></li>
<li><a className="hover:text-[#D3FF6A] transition-colors" href="#how-it-works">How It Works</a></li>
<li><a className="hover:text-[#D3FF6A] transition-colors" href="#results">Results</a></li>
<li><a className="hover:text-[#D3FF6A] transition-colors" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-4">Contact</h4>
<ul className="space-y-2 text-gray-400">
<li className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:mail" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
                            hello@wairo.studio
                        </li>
<li className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:message-circle" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            WhatsApp
                        </li>
</ul>
<div className="flex gap-4 mt-6">
<a className="text-gray-400 hover:text-[#D3FF6A] transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:linkedin" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg>
</a>
<a className="text-gray-400 hover:text-[#D3FF6A] transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:twitter" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="text-gray-400 hover:text-[#D3FF6A] transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
</a>
</div>
</div>
</div>
<div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-gray-500 text-sm">© 2025 Wairo Creative AI Studio. All rights reserved.</p>
<div className="flex gap-6 text-sm text-gray-500">
<a className="hover:text-[#D3FF6A] transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-[#D3FF6A] transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
