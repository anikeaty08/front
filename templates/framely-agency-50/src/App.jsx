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



        // Initialize Lucide Icons
        lucide.createIcons();

        // Mobile Menu Toggle
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');
        const menuIcon = btn.querySelector('i');

        function toggleMenu() {
            menu.classList.toggle('hidden');
            if (menu.classList.contains('hidden')) {
                menuIcon.setAttribute('data-lucide', 'menu');
            } else {
                menuIcon.setAttribute('data-lucide', 'x');
            }
            lucide.createIcons();
        }

        btn.addEventListener('click', toggleMenu);

        // Close mobile menu when clicking a link
        mobileLinks.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });

        // Navbar scroll effect
        const navbar = document.querySelector('nav');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                navbar.classList.add('shadow-lg');
                navbar.classList.replace('bg-[#161616]/80', 'bg-[#161616]/95');
            } else {
                navbar.classList.remove('shadow-lg');
                navbar.classList.replace('bg-[#161616]/95', 'bg-[#161616]/80');
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
      

<nav className="fixed top-0 w-full z-50 bg-[#161616]/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-20">

<a className="flex items-center gap-2 group" href="#home">
<span className="text-2xl font-semibold tracking-tight text-[#00df82] group-hover:text-white transition-colors duration-300">FrameLy</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-lg font-medium text-gray-300 hover:text-white transition-colors" href="#home">Home</a>
<a className="text-lg font-medium text-gray-300 hover:text-white transition-colors" href="#about">About</a>
<a className="text-lg font-medium text-gray-300 hover:text-white transition-colors" href="#problems">Problems</a>
<a className="text-lg font-medium text-gray-300 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-lg font-medium text-gray-300 hover:text-white transition-colors" href="#references">References</a>
<a className="text-lg font-medium text-[#00df82] hover:text-[#00df82]/80 transition-colors" href="#contact">Contact</a>
</div>

<div className="md:hidden flex items-center">
<button className="text-gray-300 hover:text-white focus:outline-none p-2" id="mobile-menu-btn">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden bg-[#161616] border-b border-white/5 absolute w-full left-0 top-20 shadow-2xl" id="mobile-menu">
<div className="px-6 pt-4 pb-8 flex flex-col gap-6">
<a className="mobile-link text-xl font-medium text-gray-300 hover:text-[#00df82]" href="#home">Home</a>
<a className="mobile-link text-xl font-medium text-gray-300 hover:text-[#00df82]" href="#about">About</a>
<a className="mobile-link text-xl font-medium text-gray-300 hover:text-[#00df82]" href="#problems">Problems</a>
<a className="mobile-link text-xl font-medium text-gray-300 hover:text-[#00df82]" href="#services">Services</a>
<a className="mobile-link text-xl font-medium text-gray-300 hover:text-[#00df82]" href="#references">References</a>
<a className="mobile-link text-xl font-medium text-[#00df82]" href="#contact">Contact</a>
</div>
</div>
</nav>
<main>

<section className="relative pt-40 pb-24 md:pt-52 md:pb-32 overflow-hidden flex items-center min-h-screen" id="home">

<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-[#00df82] opacity-[0.05] blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium mb-8">
<span className="w-2 h-2 rounded-full bg-[#00df82] animate-pulse"></span>
                    Digital Design &amp; UX Agency
                </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-8 leading-[1.1]">
                    Make your website stand out with innovation and creativity.
                </h1>
<p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-normal leading-relaxed">
                    We design digital experiences that feel human, look differentiating, and are aligned with your business goals — so people trust you faster and reach out more.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#00df82] text-[#161616] font-semibold px-8 py-4 rounded-full hover:bg-[#00df82]/90 transition-all duration-200 transform hover:scale-[1.02] text-lg" href="https://wa.me/XXXXXXXXXXX" rel="noopener noreferrer" target="_blank">
<i className="w-5 h-5" data-lucide="message-circle" strokeWidth="1.5"></i>
                        Chat on WhatsApp
                    </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/5 border border-white/10 text-white font-medium px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-200 text-lg" href="#references">
                        See References
                    </a>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#0b2027]/40 border-y border-white/5" id="about">
<div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
<i className="w-12 h-12 text-[#0b7a75] mx-auto mb-8 opacity-50" data-lucide="quote" strokeWidth="1.5"></i>
<p className="text-2xl md:text-4xl font-medium tracking-tight leading-relaxed text-gray-200">
<span className="text-white">Every business has a unique story.</span><br className="hidden md:block"/>
                    Our job is to build an online presence that connects with your audience and supports your business goals.<br className="hidden md:block"/>
<span className="text-[#00df82]">Because today, standing out isn't optional — it's part of growth.</span>
</p>
</div>
</section>

<section className="py-24 md:py-32 relative" id="problems">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
                        What problems do we solve for you and your business?
                    </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

<div className="bg-white/[0.02] border border-white/10 p-8 md:p-10 rounded-3xl hover:bg-white/[0.04] transition-colors duration-300 group">
<div className="w-12 h-12 rounded-2xl bg-[#0b2027] border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#00df82]/50 transition-colors">
<i className="w-6 h-6 text-[#00df82]" data-lucide="shield-alert" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl md:text-2xl font-medium tracking-tight text-white mb-4">
                            "I feel like my brand doesn't build trust online."
                        </h3>
<p className="text-lg text-gray-400 mb-8 leading-relaxed">
                            We design a website with clear messaging and a consistent visual identity that communicates credibility from the first second.
                        </p>
<div className="inline-flex items-center gap-2 text-[#00df82] font-medium text-lg">
<i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
                            Result: stronger first impression and more real inquiries.
                        </div>
</div>

<div className="bg-white/[0.02] border border-white/10 p-8 md:p-10 rounded-3xl hover:bg-white/[0.04] transition-colors duration-300 group">
<div className="w-12 h-12 rounded-2xl bg-[#0b2027] border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#00df82]/50 transition-colors">
<i className="w-6 h-6 text-[#00df82]" data-lucide="trending-up" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl md:text-2xl font-medium tracking-tight text-white mb-4">
                            "I have social media… but it doesn't convert into sales."
                        </h3>
<p className="text-lg text-gray-400 mb-8 leading-relaxed">
                            We turn visits into actions with conversion-focused structure, strategic CTAs, optimized WhatsApp/forms, and sections that answer real objections.
                        </p>
<div className="inline-flex items-center gap-2 text-[#00df82] font-medium text-lg">
<i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
                            Result: fewer likes, more customers.
                        </div>
</div>

<div className="bg-white/[0.02] border border-white/10 p-8 md:p-10 rounded-3xl hover:bg-white/[0.04] transition-colors duration-300 group">
<div className="w-12 h-12 rounded-2xl bg-[#0b2027] border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#00df82]/50 transition-colors">
<i className="w-6 h-6 text-[#00df82]" data-lucide="smartphone" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl md:text-2xl font-medium tracking-tight text-white mb-4">
                            "My website is slow / looks bad on mobile."
                        </h3>
<p className="text-lg text-gray-400 mb-8 leading-relaxed">
                            We optimize performance, mobile experience, and loading times to reduce bounce and improve conversions.
                        </p>
<div className="inline-flex items-center gap-2 text-[#00df82] font-medium text-lg">
<i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
                            Result: if it loads fast and feels easy, it sells more.
                        </div>
</div>

<div className="bg-white/[0.02] border border-white/10 p-8 md:p-10 rounded-3xl hover:bg-white/[0.04] transition-colors duration-300 group">
<div className="w-12 h-12 rounded-2xl bg-[#0b2027] border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#00df82]/50 transition-colors">
<i className="w-6 h-6 text-[#00df82]" data-lucide="compass" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl md:text-2xl font-medium tracking-tight text-white mb-4">
                            "I don't know where to start, but I know I need a website."
                        </h3>
<p className="text-lg text-gray-400 mb-8 leading-relaxed">
                            We guide you with a clear plan: priorities, content, structure, and next steps.
                        </p>
<div className="inline-flex items-center gap-2 text-[#00df82] font-medium text-lg">
<i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
                            Result: we organize your idea and deliver a website ready to grow.
                        </div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#0b2027]/20 border-t border-white/5" id="services">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16 md:mb-24">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">Our Services</h2>
<p className="text-lg text-gray-400 max-w-2xl mx-auto">Focused solutions tailored to elevate your brand's digital presence.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

<div className="relative p-10 md:p-12 rounded-[2.5rem] bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 overflow-hidden group hover:border-white/20 transition-all duration-500">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
<i className="w-32 h-32 text-white" data-lucide="layout-template" strokeWidth="1"></i>
</div>
<div className="relative z-10">
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-2">Landing Page</h3>
<p className="text-lg text-gray-400 mb-8">High-converting single page designed to capture leads or sell a specific offer.</p>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-lg text-gray-300">
<i className="w-6 h-6 text-[#00df82] shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i>
<span>Strategy + structure</span>
</li>
<li className="flex items-start gap-3 text-lg text-gray-300">
<i className="w-6 h-6 text-[#00df82] shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i>
<span>UX/UI design</span>
</li>
<li className="flex items-start gap-3 text-lg text-gray-300">
<i className="w-6 h-6 text-[#00df82] shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i>
<span>Copy guidance</span>
</li>
<li className="flex items-start gap-3 text-lg text-gray-300">
<i className="w-6 h-6 text-[#00df82] shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i>
<span>Responsive build</span>
</li>
<li className="flex items-start gap-3 text-lg text-gray-300">
<i className="w-6 h-6 text-[#00df82] shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i>
<span>Basic SEO + performance</span>
</li>
</ul>
</div>
</div>

<div className="relative p-10 md:p-12 rounded-[2.5rem] bg-gradient-to-b from-[#0b7a75]/10 to-transparent border border-white/10 overflow-hidden group hover:border-[#00df82]/30 transition-all duration-500">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
<i className="w-32 h-32 text-[#00df82]" data-lucide="briefcase" strokeWidth="1"></i>
</div>
<div className="relative z-10">
<div className="inline-block px-3 py-1 rounded-full bg-[#00df82]/10 text-[#00df82] text-sm font-medium mb-4">Most Popular</div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-2">Corporate Website</h3>
<p className="text-lg text-gray-400 mb-8">Comprehensive multi-page platform to establish authority and showcase your full value.</p>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-lg text-gray-300">
<i className="w-6 h-6 text-[#00df82] shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i>
<span>Complete site architecture</span>
</li>
<li className="flex items-start gap-3 text-lg text-gray-300">
<i className="w-6 h-6 text-[#00df82] shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i>
<span>Custom UI/UX per page</span>
</li>
<li className="flex items-start gap-3 text-lg text-gray-300">
<i className="w-6 h-6 text-[#00df82] shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i>
<span>CMS Integration (Optional)</span>
</li>
<li className="flex items-start gap-3 text-lg text-gray-300">
<i className="w-6 h-6 text-[#00df82] shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i>
<span>Advanced Animations</span>
</li>
<li className="flex items-start gap-3 text-lg text-gray-300">
<i className="w-6 h-6 text-[#00df82] shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i>
<span>Technical SEO Setup</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative" id="references">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
<div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">References and Past Clients</h2>
<p className="text-lg text-gray-400">A glimpse into the digital experiences we've crafted.</p>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-lg font-medium text-[#00df82] hover:text-white transition-colors group" href="https://wa.me/XXXXXXXXXXX">
                        Start your project 
                        <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">

<div className="group rounded-3xl bg-[#0b2027]/50 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_40px_-15px_rgba(0,223,130,0.15)]">

<div className="h-56 md:h-64 w-full bg-[#111] relative overflow-hidden flex items-center justify-center border-b border-white/5">
<div className="absolute inset-0 bg-gradient-to-tr from-[#0b7a75]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="w-24 h-24 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500"></div>
</div>
<div className="p-8">
<p className="text-sm font-medium text-[#00df82] uppercase tracking-wider mb-3">Fintech Startup</p>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-2">Nexus Pay Platform</h3>
<p className="text-lg text-gray-400">Corporate website redesign focused on user acquisition.</p>
</div>
</div>

<div className="group rounded-3xl bg-[#0b2027]/50 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_40px_-15px_rgba(0,223,130,0.15)]">

<div className="h-56 md:h-64 w-full bg-[#111] relative overflow-hidden flex items-center justify-center border-b border-white/5">
<div className="absolute inset-0 bg-gradient-to-tr from-[#0b7a75]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="w-24 h-24 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rotate-45 group-hover:rotate-90 transition-transform duration-700"></div>
</div>
<div className="p-8">
<p className="text-sm font-medium text-[#00df82] uppercase tracking-wider mb-3">E-Commerce</p>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-2">Aura Botanicals</h3>
<p className="text-lg text-gray-400">High-converting landing page for a new product launch.</p>
</div>
</div>

<div className="group rounded-3xl bg-[#0b2027]/50 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_40px_-15px_rgba(0,223,130,0.15)] sm:col-span-2 md:col-span-1">

<div className="h-56 md:h-64 w-full bg-[#111] relative overflow-hidden flex items-center justify-center border-b border-white/5">
<div className="absolute inset-0 bg-gradient-to-tr from-[#0b7a75]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="w-0 h-0 border-l-[40px] border-l-transparent border-b-[69.3px] border-b-white/10 border-r-[40px] border-r-transparent group-hover:-translate-y-2 transition-transform duration-500"></div>
</div>
<div className="p-8">
<p className="text-sm font-medium text-[#00df82] uppercase tracking-wider mb-3">Architecture Firm</p>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-2">Studio Vanguard</h3>
<p className="text-lg text-gray-400">Minimalist portfolio to showcase high-end real estate projects.</p>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-[#111] border-t border-white/10 pt-20 pb-10" id="contact">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="lg:col-span-2">
<a className="inline-block mb-6" href="#home">
<span className="text-3xl font-semibold tracking-tight text-[#00df82]">FrameLy</span>
</a>
<p className="text-lg text-gray-400 max-w-sm mb-8">
                        Designing digital experiences that connect, convert, and grow your business.
                    </p>
</div>

<div>
<h4 className="text-lg font-medium text-white mb-6">Get in touch</h4>
<ul className="space-y-4">
<li>
<a className="text-lg text-gray-400 hover:text-[#00df82] transition-colors inline-flex items-center gap-2" href="https://wa.me/XXXXXXXXXXX">
<i className="w-5 h-5" data-lucide="message-circle" strokeWidth="1.5"></i>
                                WhatsApp
                            </a>
</li>
<li>
<a className="text-lg text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2" href="mailto:hello@framely.com">
<i className="w-5 h-5" data-lucide="mail" strokeWidth="1.5"></i>
                                hello@framely.com
                            </a>
</li>
</ul>
</div>

<div>
<h4 className="text-lg font-medium text-white mb-6">Follow us</h4>
<ul className="space-y-4">
<li><a className="text-lg text-gray-400 hover:text-white transition-colors" href="#">Instagram</a></li>
<li><a className="text-lg text-gray-400 hover:text-white transition-colors" href="#">Behance</a></li>
<li><a className="text-lg text-gray-400 hover:text-white transition-colors" href="#">LinkedIn</a></li>
</ul>
</div>
</div>

<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-gray-500 text-sm">
                    © 2024 FrameLy Agency. All rights reserved.
                </p>
<div className="flex gap-6 text-sm text-gray-500">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
