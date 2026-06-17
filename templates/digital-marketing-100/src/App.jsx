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



tailwind.config = {
theme: {
extend: {
colors: {
ivory: '#f6f7eb',
terracotta: '#e94f37',
gunmetal: '#393e41',
},
fontFamily: {
sans: ['"Plus Jakarta Sans"', 'sans-serif'],
},
}
}
}


document.write(new Date().getFullYear())


        // Mobile Menu Toggle
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        const links = document.querySelectorAll('.mobile-link');

        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        links.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
            });
        });

        // Sticky Header & Back to Top Logic
        const header = document.getElementById('header');
        const backToTop = document.getElementById('back-to-top');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('glass-nav');
                header.classList.add('shadow-sm');
            } else {
                header.classList.remove('glass-nav');
                header.classList.remove('shadow-sm');
            }

            if (window.scrollY > 400) {
                backToTop.classList.remove('hidden');
                setTimeout(() => {
                    backToTop.classList.remove('opacity-0', 'translate-y-4');
                }, 10);
            } else {
                backToTop.classList.add('opacity-0', 'translate-y-4');
                setTimeout(() => {
                    backToTop.classList.add('hidden');
                }, 300);
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
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
      

<header className="fixed top-0 w-full z-50 transition-all duration-300" id="header">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<a className="flex items-center gap-2 group" href="#home">
<div className="bg-gunmetal text-ivory w-10 h-10 flex items-center justify-center rounded-lg font-bold tracking-tighter text-lg group-hover:bg-terracotta transition-colors duration-300">
                        HT
                    </div>
<span className="font-semibold tracking-tight text-lg text-gunmetal">Digital Hub</span>
</a>

<nav className="hidden lg:flex items-center gap-6">
<a className="text-sm font-medium hover:text-terracotta transition-colors" href="#home">Home</a>
<a className="text-sm font-medium hover:text-terracotta transition-colors" href="#about">About</a>
<a className="text-sm font-medium hover:text-terracotta transition-colors" href="#services">Services</a>
<a className="text-sm font-medium hover:text-terracotta transition-colors" href="#pricing">Pricing</a>
<a className="text-sm font-medium hover:text-terracotta transition-colors" href="#portfolio">Portfolio</a>
<a className="text-sm font-medium hover:text-terracotta transition-colors" href="#team">Team</a>
<a className="text-sm font-medium hover:text-terracotta transition-colors" href="#clients">Trusted</a>
<a className="text-sm font-medium hover:text-terracotta transition-colors" href="#blog">Blog</a>
<a className="px-5 py-2.5 rounded-full bg-terracotta text-white text-sm font-medium hover:opacity-90 transition-opacity" href="#contact">Contact</a>
</nav>

<button className="lg:hidden text-gunmetal hover:text-terracotta" id="mobile-menu-btn">
<iconify-icon height="24" icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="hidden absolute top-20 left-0 w-full bg-ivory border-b border-gray-200 shadow-lg lg:hidden" id="mobile-menu">
<div className="flex flex-col p-4 space-y-4">
<a className="mobile-link text-sm font-medium hover:text-terracotta" href="#home">Home</a>
<a className="mobile-link text-sm font-medium hover:text-terracotta" href="#about">About</a>
<a className="mobile-link text-sm font-medium hover:text-terracotta" href="#services">Services</a>
<a className="mobile-link text-sm font-medium hover:text-terracotta" href="#pricing">Pricing</a>
<a className="mobile-link text-sm font-medium hover:text-terracotta" href="#portfolio">Portfolio</a>
<a className="mobile-link text-sm font-medium hover:text-terracotta" href="#team">Team</a>
<a className="mobile-link text-sm font-medium hover:text-terracotta" href="#blog">Blog</a>
<a className="mobile-link text-sm font-medium text-terracotta" href="#contact">Contact Us</a>
</div>
</div>
</header>
<main>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-grid overflow-hidden" id="home">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
<div className="lg:w-1/2 text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-terracotta/10 text-terracotta text-xs font-semibold mb-6 tracking-wide uppercase">
<span className="w-2 h-2 rounded-full bg-terracotta animate-pulse"></span>
                            Accepting New Clients
                        </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-gunmetal mb-6 text-balance leading-[1.1]">
                            Transforming Data into <span className="text-terracotta">Revenue.</span>
</h1>
<p className="text-lg text-gunmetal/70 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            HT Digital Hub is your strategic partner for lead generation and digital growth. We build trust, optimize workflows, and drive measurable conversions.
                        </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
<a className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-terracotta text-white font-medium hover:opacity-90 transition-all shadow-lg shadow-terracotta/20" href="#contact">
                                Start Growing
                                <iconify-icon className="ml-2" icon="lucide:arrow-right" width="18"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg border border-gunmetal/20 text-gunmetal font-medium hover:bg-gunmetal/5 transition-all" href="#services">
                                Explore Services
                            </a>
</div>

<div className="mt-12 pt-8 border-t border-gunmetal/10 flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-ivory"></div>
<div className="w-10 h-10 rounded-full bg-gray-400 border-2 border-ivory"></div>
<div className="w-10 h-10 rounded-full bg-gray-500 border-2 border-ivory"></div>
<div className="w-10 h-10 rounded-full bg-gunmetal text-ivory flex items-center justify-center text-xs font-bold border-2 border-ivory">+2k</div>
</div>
<div className="text-sm text-gunmetal/80">
<span className="font-semibold text-gunmetal">Trusted by 50+</span> companies worldwide.
                            </div>
</div>
</div>
<div className="lg:w-1/2 w-full">
<div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-gunmetal/10 aspect-[4/3] group">

<div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
<div className="w-3/4 h-3/4 border border-gray-200 rounded-xl bg-white shadow-sm p-6 relative">
<div className="flex gap-2 mb-4">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-yellow-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
</div>
<div className="h-4 bg-gray-100 rounded w-1/3 mb-6"></div>
<div className="space-y-3">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded bg-terracotta/10 flex items-center justify-center text-terracotta">
<iconify-icon icon="lucide:trending-up" width="20"></iconify-icon>
</div>
<div className="flex-1">
<div className="h-2 bg-gray-100 rounded w-full mb-1"></div>
<div className="h-2 bg-gray-100 rounded w-2/3"></div>
</div>
<div className="text-terracotta font-semibold text-sm">+124%</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded bg-blue-50 flex items-center justify-center text-blue-600">
<iconify-icon icon="lucide:users" width="20"></iconify-icon>
</div>
<div className="flex-1">
<div className="h-2 bg-gray-100 rounded w-full mb-1"></div>
<div className="h-2 bg-gray-100 rounded w-2/3"></div>
</div>
<div className="text-blue-600 font-semibold text-sm">+850</div>
</div>
</div>

<div className="absolute -bottom-4 -right-4 bg-gunmetal text-ivory p-4 rounded-lg shadow-xl animate-bounce" style={{animationDuration: '3s'}}>
<div className="text-xs opacity-70">Conversion Rate</div>
<div className="text-xl font-bold">4.8%</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="aspect-square rounded-2xl bg-gray-100 overflow-hidden relative">

<div className="absolute inset-0 flex items-center justify-center bg-gunmetal/5 text-gunmetal/20">
<iconify-icon icon="lucide:building-2" width="64"></iconify-icon>
</div>
</div>
<div className="absolute -bottom-6 -right-6 bg-ivory p-6 rounded-xl border border-gunmetal/10 shadow-lg max-w-xs">
<p className="text-gunmetal font-medium text-lg">"We don't just market; we build sustainable digital ecosystems."</p>
<p className="mt-2 text-terracotta text-sm font-semibold">— Muhammad Hasnain</p>
</div>
</div>
<div>
<h2 className="text-sm font-semibold text-terracotta uppercase tracking-wider mb-2">About HT Digital Hub</h2>
<h3 className="text-3xl lg:text-4xl font-semibold text-gunmetal mb-6 tracking-tight">Bridging the gap between potential and performance.</h3>
<div className="space-y-6 text-gunmetal/70">
<p>
                                Founded with a vision to empower businesses in the digital age, HT Digital Hub has evolved into a full-service agency. We specialize in cutting through the noise to deliver qualified leads and operational efficiency.
                            </p>
<p>
                                Our mission is simple: To provide data-driven digital solutions that foster trust and accelerate growth for our partners globally.
                            </p>
</div>
<div className="grid grid-cols-2 gap-6 mt-10">
<div>
<h4 className="text-2xl font-bold text-gunmetal">3+</h4>
<p className="text-sm text-gunmetal/60">Years Experience</p>
</div>
<div>
<h4 className="text-2xl font-bold text-gunmetal">100%</h4>
<p className="text-sm text-gunmetal/60">Client Satisfaction</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-ivory" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-sm font-semibold text-terracotta uppercase tracking-wider mb-2">Our Expertise</h2>
<h3 className="text-3xl lg:text-4xl font-semibold text-gunmetal tracking-tight mb-4">Comprehensive Digital Solutions</h3>
<p className="text-gunmetal/60">Everything you need to scale your business, from backend data management to frontend customer acquisition.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl border border-gunmetal/5 shadow-sm hover:shadow-md hover:border-terracotta/30 transition-all group">
<div className="w-12 h-12 bg-terracotta/10 text-terracotta rounded-lg flex items-center justify-center mb-6 group-hover:bg-terracotta group-hover:text-white transition-colors">
<iconify-icon icon="lucide:target" width="24"></iconify-icon>
</div>
<h4 className="text-xl font-semibold text-gunmetal mb-3">Lead Generation</h4>
<p className="text-sm text-gunmetal/60 mb-4">High-quality B2B and B2C leads that actually convert.</p>
<ul className="space-y-2">
<li className="flex items-center text-xs text-gunmetal/80"><iconify-icon className="text-terracotta mr-2" icon="lucide:check"></iconify-icon>Targeted Lists</li>
<li className="flex items-center text-xs text-gunmetal/80"><iconify-icon className="text-terracotta mr-2" icon="lucide:check"></iconify-icon>Linkedin Scraping</li>
</ul>
</div>

<div className="bg-white p-8 rounded-2xl border border-gunmetal/5 shadow-sm hover:shadow-md hover:border-terracotta/30 transition-all group">
<div className="w-12 h-12 bg-terracotta/10 text-terracotta rounded-lg flex items-center justify-center mb-6 group-hover:bg-terracotta group-hover:text-white transition-colors">
<iconify-icon icon="lucide:search" width="24"></iconify-icon>
</div>
<h4 className="text-xl font-semibold text-gunmetal mb-3">SEO Optimization</h4>
<p className="text-sm text-gunmetal/60 mb-4">Rank higher on Google and drive organic traffic sustainably.</p>
<ul className="space-y-2">
<li className="flex items-center text-xs text-gunmetal/80"><iconify-icon className="text-terracotta mr-2" icon="lucide:check"></iconify-icon>On-Page &amp; Off-Page</li>
<li className="flex items-center text-xs text-gunmetal/80"><iconify-icon className="text-terracotta mr-2" icon="lucide:check"></iconify-icon>Technical Audit</li>
</ul>
</div>

<div className="bg-white p-8 rounded-2xl border border-gunmetal/5 shadow-sm hover:shadow-md hover:border-terracotta/30 transition-all group">
<div className="w-12 h-12 bg-terracotta/10 text-terracotta rounded-lg flex items-center justify-center mb-6 group-hover:bg-terracotta group-hover:text-white transition-colors">
<iconify-icon icon="lucide:code-2" width="24"></iconify-icon>
</div>
<h4 className="text-xl font-semibold text-gunmetal mb-3">Web Development</h4>
<p className="text-sm text-gunmetal/60 mb-4">Fast, responsive, and secure websites built for performance.</p>
<ul className="space-y-2">
<li className="flex items-center text-xs text-gunmetal/80"><iconify-icon className="text-terracotta mr-2" icon="lucide:check"></iconify-icon>Custom Design</li>
<li className="flex items-center text-xs text-gunmetal/80"><iconify-icon className="text-terracotta mr-2" icon="lucide:check"></iconify-icon>CMS Integration</li>
</ul>
</div>

<div className="bg-white p-8 rounded-2xl border border-gunmetal/5 shadow-sm hover:shadow-md hover:border-terracotta/30 transition-all group">
<div className="w-12 h-12 bg-terracotta/10 text-terracotta rounded-lg flex items-center justify-center mb-6 group-hover:bg-terracotta group-hover:text-white transition-colors">
<iconify-icon icon="lucide:database" width="24"></iconify-icon>
</div>
<h4 className="text-xl font-semibold text-gunmetal mb-3">Data Entry</h4>
<p className="text-sm text-gunmetal/60 mb-4">Accurate data management to keep your business organized.</p>
<ul className="space-y-2">
<li className="flex items-center text-xs text-gunmetal/80"><iconify-icon className="text-terracotta mr-2" icon="lucide:check"></iconify-icon>CRM Cleaning</li>
<li className="flex items-center text-xs text-gunmetal/80"><iconify-icon className="text-terracotta mr-2" icon="lucide:check"></iconify-icon>Spreadsheet Mgmt</li>
</ul>
</div>

<div className="bg-white p-8 rounded-2xl border border-gunmetal/5 shadow-sm hover:shadow-md hover:border-terracotta/30 transition-all group">
<div className="w-12 h-12 bg-terracotta/10 text-terracotta rounded-lg flex items-center justify-center mb-6 group-hover:bg-terracotta group-hover:text-white transition-colors">
<iconify-icon icon="lucide:mail" width="24"></iconify-icon>
</div>
<h4 className="text-xl font-semibold text-gunmetal mb-3">Email Marketing</h4>
<p className="text-sm text-gunmetal/60 mb-4">Cold outreach and newsletters that land in the primary inbox.</p>
<ul className="space-y-2">
<li className="flex items-center text-xs text-gunmetal/80"><iconify-icon className="text-terracotta mr-2" icon="lucide:check"></iconify-icon>Copywriting</li>
<li className="flex items-center text-xs text-gunmetal/80"><iconify-icon className="text-terracotta mr-2" icon="lucide:check"></iconify-icon>Automation Flows</li>
</ul>
</div>

<div className="bg-white p-8 rounded-2xl border border-gunmetal/5 shadow-sm hover:shadow-md hover:border-terracotta/30 transition-all group">
<div className="w-12 h-12 bg-terracotta/10 text-terracotta rounded-lg flex items-center justify-center mb-6 group-hover:bg-terracotta group-hover:text-white transition-colors">
<iconify-icon icon="lucide:share-2" width="24"></iconify-icon>
</div>
<h4 className="text-xl font-semibold text-gunmetal mb-3">Social Media</h4>
<p className="text-sm text-gunmetal/60 mb-4">Management and marketing across IG, LinkedIn, and Facebook.</p>
<ul className="space-y-2">
<li className="flex items-center text-xs text-gunmetal/80"><iconify-icon className="text-terracotta mr-2" icon="lucide:check"></iconify-icon>Content Creation</li>
<li className="flex items-center text-xs text-gunmetal/80"><iconify-icon className="text-terracotta mr-2" icon="lucide:check"></iconify-icon>Community Mgmt</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-y border-gunmetal/5" id="pricing">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-gunmetal tracking-tight">Simple, Transparent Pricing</h2>
<p className="mt-4 text-gunmetal/60">Choose the plan that fits your growth stage.</p>
</div>
<div className="grid lg:grid-cols-3 gap-8 items-start">

<div className="p-8 rounded-2xl border border-gunmetal/10 bg-ivory/30">
<h3 className="text-lg font-medium text-gunmetal">Starter</h3>
<div className="mt-4 flex items-baseline">
<span className="text-4xl font-bold tracking-tight text-gunmetal">$499</span>
<span className="ml-1 text-sm text-gunmetal/60">/month</span>
</div>
<p className="mt-4 text-sm text-gunmetal/60">Perfect for small businesses starting their digital journey.</p>
<a className="mt-6 block w-full py-2.5 rounded-lg border border-gunmetal/20 text-center text-sm font-semibold text-gunmetal hover:bg-gunmetal hover:text-white transition-colors" href="#contact">Get Started</a>
<ul className="mt-8 space-y-3">
<li className="flex items-center text-sm text-gunmetal/80"><iconify-icon className="text-terracotta mr-2" icon="lucide:check"></iconify-icon>Social Media (2 Platforms)</li>
<li className="flex items-center text-sm text-gunmetal/80"><iconify-icon className="text-terracotta mr-2" icon="lucide:check"></iconify-icon>Basic SEO Setup</li>
<li className="flex items-center text-sm text-gunmetal/80"><iconify-icon className="text-terracotta mr-2" icon="lucide:check"></iconify-icon>Monthly Reporting</li>
</ul>
</div>

<div className="p-8 rounded-2xl border-2 border-terracotta bg-white shadow-xl relative scale-105 z-10">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-terracotta text-white px-3 py-1 rounded-full text-xs font-medium">Most Popular</div>
<h3 className="text-lg font-medium text-gunmetal">Growth</h3>
<div className="mt-4 flex items-baseline">
<span className="text-4xl font-bold tracking-tight text-gunmetal">$999</span>
<span className="ml-1 text-sm text-gunmetal/60">/month</span>
</div>
<p className="mt-4 text-sm text-gunmetal/60">Accelerate your lead generation and sales.</p>
<a className="mt-6 block w-full py-2.5 rounded-lg bg-terracotta text-center text-sm font-semibold text-white hover:opacity-90 transition-opacity" href="#contact">Get Started</a>
<ul className="mt-8 space-y-3">
<li className="flex items-center text-sm text-gunmetal/80"><iconify-icon className="text-terracotta mr-2" icon="lucide:check"></iconify-icon>Full SEO &amp; Content Strategy</li>
<li className="flex items-center text-sm text-gunmetal/80"><iconify-icon className="text-terracotta mr-2" icon="lucide:check"></iconify-icon>Lead Generation (500 Leads)</li>
<li className="flex items-center text-sm text-gunmetal/80"><iconify-icon className="text-terracotta mr-2" icon="lucide:check"></iconify-icon>Email Marketing Campaigns</li>
<li className="flex items-center text-sm text-gunmetal/80"><iconify-icon className="text-terracotta mr-2" icon="lucide:check"></iconify-icon>Weekly Strategy Calls</li>
</ul>
</div>

<div className="p-8 rounded-2xl border border-gunmetal/10 bg-ivory/30">
<h3 className="text-lg font-medium text-gunmetal">Enterprise</h3>
<div className="mt-4 flex items-baseline">
<span className="text-4xl font-bold tracking-tight text-gunmetal">Custom</span>
</div>
<p className="mt-4 text-sm text-gunmetal/60">Tailored solutions for large scale operations.</p>
<a className="mt-6 block w-full py-2.5 rounded-lg border border-gunmetal/20 text-center text-sm font-semibold text-gunmetal hover:bg-gunmetal hover:text-white transition-colors" href="#contact">Contact Sales</a>
<ul className="mt-8 space-y-3">
<li className="flex items-center text-sm text-gunmetal/80"><iconify-icon className="text-terracotta mr-2" icon="lucide:check"></iconify-icon>Dedicated Account Manager</li>
<li className="flex items-center text-sm text-gunmetal/80"><iconify-icon className="text-terracotta mr-2" icon="lucide:check"></iconify-icon>Custom Web Development</li>
<li className="flex items-center text-sm text-gunmetal/80"><iconify-icon className="text-terracotta mr-2" icon="lucide:check"></iconify-icon>Full Funnel Automation</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-20 bg-ivory" id="portfolio">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<h2 className="text-sm font-semibold text-terracotta uppercase tracking-wider mb-2">Our Work</h2>
<h3 className="text-3xl font-semibold text-gunmetal tracking-tight">Recent Projects</h3>
</div>
<a className="hidden md:inline-flex items-center text-sm font-medium text-terracotta hover:underline mt-4 md:mt-0" href="#contact">
                        View all projects <iconify-icon className="ml-1" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="group relative overflow-hidden rounded-2xl">
<div className="aspect-video bg-gray-200 flex items-center justify-center text-gunmetal/20">

<iconify-icon icon="lucide:image" width="48"></iconify-icon>
</div>
<div className="absolute inset-0 bg-gunmetal/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<div className="text-center p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<h4 className="text-xl font-semibold text-white">E-Commerce Redesign</h4>
<p className="text-ivory/80 text-sm mt-2">Web Development &amp; SEO</p>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl">
<div className="aspect-video bg-gray-300 flex items-center justify-center text-gunmetal/20">
<iconify-icon icon="lucide:bar-chart" width="48"></iconify-icon>
</div>
<div className="absolute inset-0 bg-gunmetal/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<div className="text-center p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<h4 className="text-xl font-semibold text-white">SaaS Lead Gen Campaign</h4>
<p className="text-ivory/80 text-sm mt-2">Email Marketing &amp; Data Entry</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="clients">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-center text-2xl font-semibold text-gunmetal mb-12 tracking-tight">Client Success Stories</h2>
<div className="grid md:grid-cols-2 gap-8">
<div className="p-8 rounded-2xl bg-ivory border border-gunmetal/5">
<div className="flex gap-1 text-terracotta mb-4">
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-gunmetal/80 italic mb-6">"HT Digital Hub transformed our outreach. The lead quality is exceptional, and the team's professionalism is unmatched."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gray-300"></div>
<div>
<h5 className="text-sm font-semibold text-gunmetal">Sarah Jenkins</h5>
<p className="text-xs text-gunmetal/50">CEO, TechStart Inc.</p>
</div>
</div>
</div>
<div className="p-8 rounded-2xl bg-ivory border border-gunmetal/5">
<div className="flex gap-1 text-terracotta mb-4">
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-gunmetal/80 italic mb-6">"Our organic traffic doubled within 4 months thanks to their SEO strategy. Highly recommended."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gray-300"></div>
<div>
<h5 className="text-sm font-semibold text-gunmetal">David Chen</h5>
<p className="text-xs text-gunmetal/50">Marketing Director, RetailPlus</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-ivory" id="team">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-gunmetal tracking-tight">Meet The Experts</h2>
</div>
<div className="flex justify-center">

<div className="w-full max-w-sm bg-white rounded-2xl overflow-hidden shadow-sm border border-gunmetal/5 hover:-translate-y-1 transition-transform">
<div className="aspect-square bg-gray-200 flex items-center justify-center text-gunmetal/20">
<iconify-icon icon="lucide:user" width="64"></iconify-icon>
</div>
<div className="p-6 text-center">
<h4 className="text-lg font-bold text-gunmetal">Muhammad Hasnain</h4>
<p className="text-terracotta text-sm font-medium mb-4">Founder &amp; Lead Strategist</p>
<p className="text-gunmetal/60 text-sm mb-4">Expert in Digital Marketing and Lead Generation strategies.</p>
<div className="flex justify-center gap-4">
<a className="text-gunmetal/60 hover:text-terracotta" href="#"><iconify-icon icon="lucide:linkedin" width="18"></iconify-icon></a>
<a className="text-gunmetal/60 hover:text-terracotta" href="#"><iconify-icon icon="lucide:twitter" width="18"></iconify-icon></a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="blog">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold text-gunmetal tracking-tight mb-12">Latest Insights</h2>
<div className="grid md:grid-cols-3 gap-8">
<article className="group cursor-pointer">
<div className="aspect-video rounded-xl bg-gray-100 mb-4 overflow-hidden">
<div className="w-full h-full bg-gray-200 group-hover:scale-105 transition-transform duration-500"></div>
</div>
<span className="text-xs font-semibold text-terracotta uppercase">SEO</span>
<h3 className="text-lg font-semibold text-gunmetal mt-2 group-hover:text-terracotta transition-colors">5 SEO Trends to Watch in 2024</h3>
<p className="text-sm text-gunmetal/60 mt-2 line-clamp-2">Discover how AI and voice search are changing the landscape of search engine optimization.</p>
</article>
<article className="group cursor-pointer">
<div className="aspect-video rounded-xl bg-gray-100 mb-4 overflow-hidden">
<div className="w-full h-full bg-gray-200 group-hover:scale-105 transition-transform duration-500"></div>
</div>
<span className="text-xs font-semibold text-terracotta uppercase">Marketing</span>
<h3 className="text-lg font-semibold text-gunmetal mt-2 group-hover:text-terracotta transition-colors">The Power of Email Automation</h3>
<p className="text-sm text-gunmetal/60 mt-2 line-clamp-2">How to set up drip campaigns that nurture leads while you sleep.</p>
</article>
<article className="group cursor-pointer">
<div className="aspect-video rounded-xl bg-gray-100 mb-4 overflow-hidden">
<div className="w-full h-full bg-gray-200 group-hover:scale-105 transition-transform duration-500"></div>
</div>
<span className="text-xs font-semibold text-terracotta uppercase">Business</span>
<h3 className="text-lg font-semibold text-gunmetal mt-2 group-hover:text-terracotta transition-colors">Outsourcing Data Entry</h3>
<p className="text-sm text-gunmetal/60 mt-2 line-clamp-2">Why successful agencies delegate administrative tasks to virtual assistants.</p>
</article>
</div>
</div>
</section>

<section className="py-20 bg-ivory" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16">
<div>
<h2 className="text-3xl font-semibold text-gunmetal tracking-tight mb-6">Let's Discuss Your Project</h2>
<p className="text-gunmetal/70 mb-8">Ready to scale? Fill out the form or reach out directly. We typically respond within 24 hours.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-terracotta/10 text-terracotta flex items-center justify-center flex-shrink-0">
<iconify-icon icon="lucide:map-pin" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-gunmetal">Visit Us</h4>
<p className="text-sm text-gunmetal/60">Bahawalpur, PB, Pakistan 63100</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-terracotta/10 text-terracotta flex items-center justify-center flex-shrink-0">
<iconify-icon icon="lucide:mail" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-gunmetal">Email Us</h4>
<p className="text-sm text-gunmetal/60">iamhasnainalisabri@gmail.com</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-terracotta/10 text-terracotta flex items-center justify-center flex-shrink-0">
<iconify-icon icon="lucide:phone" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-gunmetal">Call / WhatsApp</h4>
<p className="text-sm text-gunmetal/60">+92 304 5760822</p>
</div>
</div>
</div>

<div className="mt-8 h-48 bg-gray-200 rounded-xl w-full flex items-center justify-center text-gunmetal/40 border border-gunmetal/10">
<div className="flex flex-col items-center">
<iconify-icon className="mb-2" icon="lucide:map" width="32"></iconify-icon>
<span className="text-sm">Map of Bahawalpur, Pakistan</span>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-2xl border border-gunmetal/5 shadow-lg">
<form action="mailto:iamhasnainalisabri@gmail.com" className="space-y-6" enctype="text/plain" method="post">
<div>
<label className="block text-sm font-medium text-gunmetal mb-2" htmlFor="name">Full Name</label>
<input className="w-full px-4 py-3 rounded-lg bg-ivory border border-gray-200 focus:border-terracotta focus:ring-1 focus:ring-terracotta outline-none transition-all" id="name" name="name" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gunmetal mb-2" htmlFor="email">Email Address</label>
<input className="w-full px-4 py-3 rounded-lg bg-ivory border border-gray-200 focus:border-terracotta focus:ring-1 focus:ring-terracotta outline-none transition-all" id="email" name="email" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-gunmetal mb-2" htmlFor="subject">Subject</label>
<input className="w-full px-4 py-3 rounded-lg bg-ivory border border-gray-200 focus:border-terracotta focus:ring-1 focus:ring-terracotta outline-none transition-all" id="subject" name="subject" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gunmetal mb-2" htmlFor="message">Message</label>
<textarea className="w-full px-4 py-3 rounded-lg bg-ivory border border-gray-200 focus:border-terracotta focus:ring-1 focus:ring-terracotta outline-none transition-all" id="message" name="message" required="" rows="4"></textarea>
</div>
<button className="w-full py-3.5 rounded-lg bg-terracotta text-white font-semibold hover:opacity-90 transition-opacity" type="submit">
                                Send Message
                            </button>
</form>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-gunmetal text-ivory pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-4 gap-12 border-b border-white/10 pb-12">
<div className="md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="bg-ivory text-gunmetal w-8 h-8 flex items-center justify-center rounded font-bold tracking-tighter text-sm">HT</div>
<span className="font-semibold tracking-tight text-ivory">Digital Hub</span>
</div>
<p className="text-sm text-ivory/60 leading-relaxed">
                        Your trusted partner for digital growth. We combine data, creativity, and technology to scale your business.
                    </p>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">Quick Links</h4>
<ul className="space-y-3">
<li><a className="text-sm text-ivory/60 hover:text-terracotta transition-colors" href="#home">Home</a></li>
<li><a className="text-sm text-ivory/60 hover:text-terracotta transition-colors" href="#about">About Us</a></li>
<li><a className="text-sm text-ivory/60 hover:text-terracotta transition-colors" href="#services">Services</a></li>
<li><a className="text-sm text-ivory/60 hover:text-terracotta transition-colors" href="#portfolio">Portfolio</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">Legal</h4>
<ul className="space-y-3">
<li><a className="text-sm text-ivory/60 hover:text-terracotta transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-sm text-ivory/60 hover:text-terracotta transition-colors" href="#">Terms &amp; Conditions</a></li>
<li><a className="text-sm text-ivory/60 hover:text-terracotta transition-colors" href="#contact">Contact Support</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">Follow Us</h4>
<div className="flex space-x-4">
<a className="text-ivory/60 hover:text-terracotta transition-colors" href="#"><iconify-icon icon="lucide:facebook" width="20"></iconify-icon></a>
<a className="text-ivory/60 hover:text-terracotta transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="20"></iconify-icon></a>
<a className="text-ivory/60 hover:text-terracotta transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="20"></iconify-icon></a>
<a className="text-ivory/60 hover:text-terracotta transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="20"></iconify-icon></a>
</div>
</div>
</div>
<div className="pt-8 text-center text-sm text-ivory/40">
                ©  All rights reserved by Muhammad Hasnain.
            </div>
</div>
</footer>

<a className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center" href="https://wa.me/923045760822" target="_blank">
<iconify-icon height="24" icon="lucide:message-circle" width="24"></iconify-icon>
</a>
<button className="fixed bottom-24 right-6 z-40 bg-gunmetal text-ivory p-3 rounded-full shadow-lg hover:bg-terracotta transition-colors hidden opacity-0 translate-y-4 duration-300" id="back-to-top">
<iconify-icon height="20" icon="lucide:arrow-up" width="20"></iconify-icon>
</button>



    </>
  );
}
