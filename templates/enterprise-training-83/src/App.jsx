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

        // Chat Toggle
        function toggleChat() {
            const chat = document.getElementById('ai-chat-window');
            chat.classList.toggle('hidden');
        }

        // Intersection Observer for Scroll Animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.fade-in-section').forEach((section) => {
            observer.observe(section);
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
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-white/5 bg-[#293647]/80 backdrop-blur-md transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between p-4">
<a className="flex items-center space-x-2 rtl:space-x-reverse group" href="#">
<div className="w-8 h-8 rounded bg-gradient-to-tr from-[#04a2eb] to-[#293647] flex items-center justify-center text-white font-bold tracking-tighter group-hover:rotate-12 transition-transform">
                    N
                </div>
<span className="self-center text-xl font-semibold whitespace-nowrap tracking-tight text-white">NEXUS</span>
</a>
<div className="flex md:order-2 space-x-3 md:space-x-4 rtl:space-x-reverse items-center">

<div className="hidden md:flex items-center space-x-1 bg-white/5 rounded-full p-1 border border-white/10">
<button className="px-3 py-1 text-xs font-medium rounded-full bg-[#04a2eb] text-white transition-all">EN</button>
<button className="px-3 py-1 text-xs font-medium rounded-full text-gray-400 hover:text-white transition-all">AR</button>
<button className="px-3 py-1 text-xs font-medium rounded-full text-gray-400 hover:text-white transition-all">FR</button>
</div>
<button className="text-white bg-[#04a2eb] hover:bg-[#04a2eb]/90 focus:ring-4 focus:outline-none focus:ring-[#04a2eb]/30 font-medium rounded-lg text-sm px-4 py-2 text-center transition-all shadow-[0_0_15px_rgba(4,162,235,0.4)]" type="button">
                    Get Started
                </button>
<button aria-controls="navbar-sticky" aria-expanded="false" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-white/10 focus:outline-none" data-collapse-toggle="navbar-sticky" type="button">
<span className="sr-only">Open main menu</span>
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-white/10 rounded-lg bg-white/5 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
<li>
<a aria-current="page" className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 hover:text-[#04a2eb] transition-colors" href="#courses">Courses</a>
</li>
<li>
<a className="block py-2 px-3 text-gray-300 rounded hover:bg-white/10 md:hover:bg-transparent md:hover:text-[#04a2eb] md:p-0 transition-colors" href="#enterprise">Enterprise</a>
</li>
<li>
<a className="block py-2 px-3 text-gray-300 rounded hover:bg-white/10 md:hover:bg-transparent md:hover:text-[#04a2eb] md:p-0 transition-colors" href="#ai-tech">AI Engine</a>
</li>
<li>
<a className="block py-2 px-3 text-gray-300 rounded hover:bg-white/10 md:hover:bg-transparent md:hover:text-[#04a2eb] md:p-0 transition-colors" href="#contact">Contact</a>
</li>
</ul>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">

<div className="absolute top-0 left-1/2 w-[800px] h-[500px] bg-[#04a2eb] rounded-full mix-blend-screen filter blur-[120px] opacity-10 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
<div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#04a2eb]/30 bg-[#04a2eb]/10 text-[#04a2eb] text-xs font-medium mb-8 animate-pulse">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#04a2eb] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#04a2eb]"></span>
</span>
                Now Available in Cairo, Dubai &amp; Riyadh
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6 leading-[1.1]">
                Empowering the <br/>
<span className="accent-gradient-text">Future Workforce</span>
</h1>
<p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto mb-10 font-light">
                Advanced corporate training powered by AI. Localized for the Middle East, optimized for global standards.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 text-sm font-medium text-white bg-[#04a2eb] rounded-lg hover:bg-[#04a2eb]/90 transition-all shadow-[0_0_20px_rgba(4,162,235,0.3)] flex items-center justify-center gap-2 group" href="#courses">
                    Explore Courses
                    <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 text-sm font-medium text-gray-300 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2" href="#enterprise">
<i className="w-4 h-4" data-lucide="building-2"></i>
                    Enterprise Solutions
                </a>
</div>

<div className="mt-20 pt-10 border-t border-white/5">
<p className="text-xs text-gray-500 uppercase tracking-widest mb-6">Trusted by leading companies in MENA</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2"><i className="w-6 h-6" data-lucide="box"></i><span className="font-semibold text-lg tracking-tight">ACME Corp</span></div>
<div className="flex items-center gap-2"><i className="w-6 h-6" data-lucide="hexagon"></i><span className="font-semibold text-lg tracking-tight">GlobalTech</span></div>
<div className="flex items-center gap-2"><i className="w-6 h-6" data-lucide="triangle"></i><span className="font-semibold text-lg tracking-tight">Pyramid AI</span></div>
<div className="flex items-center gap-2"><i className="w-6 h-6" data-lucide="circle"></i><span className="font-semibold text-lg tracking-tight">NileSoft</span></div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-[#243040]" id="ai-tech">
<div className="max-w-7xl mx-auto px-4">
<div className="grid md:grid-cols-2 gap-12 items-center fade-in-section">
<div>
<div className="inline-block p-2 rounded-lg bg-[#04a2eb]/10 mb-4">
<i className="w-6 h-6 text-[#04a2eb]" data-lucide="bot"></i>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">AEO &amp; GEO Optimized<br/><span className="text-gray-400">Knowledge Base</span></h2>
<p className="text-gray-400 mb-6 leading-relaxed">
                        Our platform isn't just a learning management system. It's an intelligent Answer Engine Optimized (AEO) hub. 
                        Our AI agents parse your query, understand regional context (Egypt, KSA, UAE), and deliver precise, localized training modules dynamically.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-[#04a2eb] mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-sm text-gray-300">Generative Engine Optimization for instant answers.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-[#04a2eb] mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-sm text-gray-300">Localized content adaptation (Language &amp; Culture).</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-[#04a2eb] mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-sm text-gray-300">Real-time data collection via AI Agents.</span>
</li>
</ul>
</div>
<div className="relative">
<div className="absolute inset-0 bg-[#04a2eb] blur-[80px] opacity-20 rounded-full"></div>
<div className="relative glass-panel rounded-2xl p-6 border border-white/10">

<div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
<span className="text-xs font-mono text-[#04a2eb]">AI_Agent_Response.js</span>
<div className="flex gap-1.5">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<div className="w-2 h-2 rounded-full bg-green-500"></div>
</div>
</div>
<div className="space-y-2 font-mono text-xs md:text-sm">
<div className="flex gap-2">
<span className="text-purple-400">const</span>
<span className="text-blue-300">userLocation</span>
<span className="text-white">=</span>
<span className="text-green-300">'Cairo, EG'</span>;
                            </div>
<div className="flex gap-2">
<span className="text-purple-400">await</span>
<span className="text-yellow-300">optimizeContent</span>({
                                <span className="text-blue-300">locale</span>: <span className="text-green-300">'ar-EG'</span>
                                });
                            </div>
<div className="pl-4 text-gray-500">// Fetching localized modules...</div>
<div className="flex gap-2 mt-4 p-3 bg-black/20 rounded border-l-2 border-[#04a2eb]">
<span className="text-gray-300">"Recommended Course: Advanced React Patterns (Arabic Dub)"</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 max-w-7xl mx-auto px-4" id="courses">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4 fade-in-section">
<div>
<h2 className="text-3xl font-semibold tracking-tight mb-2">Popular Courses</h2>
<p className="text-gray-400 text-sm">Upgrade your skills with industry-standard certifications.</p>
</div>
<div className="flex gap-2">

<button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 hover:text-white hover:border-[#04a2eb] transition-all">
<i className="w-4 h-4" data-lucide="sliders-horizontal"></i> Filter
                </button>
<button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 hover:text-white hover:border-[#04a2eb] transition-all">
<i className="w-4 h-4" data-lucide="arrow-down-wide-narrow"></i> Sort
                </button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative bg-[#243040] rounded-xl overflow-hidden border border-white/5 hover:border-[#04a2eb]/50 transition-all duration-300 hover:-translate-y-1 fade-in-section">
<div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-500"></div>
<div className="absolute top-3 right-3 bg-black/50 backdrop-blur text-xs font-semibold px-2 py-1 rounded border border-white/10 text-[#04a2eb]">
                        Bestseller
                     </div>
</div>
<div className="p-6">
<div className="flex items-center justify-between mb-3">
<span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Development</span>
<div className="flex text-yellow-500">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star-half"></i>
<span className="text-xs text-gray-400 ml-1">(4.8)</span>
</div>
</div>
<h3 className="text-lg font-semibold mb-2 group-hover:text-[#04a2eb] transition-colors">Full Stack Modern JS</h3>
<p className="text-sm text-gray-400 mb-4 line-clamp-2">Master React, Node, and Tailwind. Localization support for Arabic documentation included.</p>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
<div>
<span className="text-lg font-bold text-white">$49.99</span>
<span className="text-xs text-gray-500 line-through ml-1">$89.99</span>
</div>
<button className="p-2 rounded-full bg-white/5 hover:bg-[#04a2eb] text-white transition-colors group/btn relative overflow-hidden">
<i className="w-5 h-5 relative z-10" data-lucide="shopping-bag"></i>
</button>
</div>
</div>
</div>

<div className="group relative bg-[#243040] rounded-xl overflow-hidden border border-white/5 hover:border-[#04a2eb]/50 transition-all duration-300 hover:-translate-y-1 fade-in-section" style={{transitionDelay: '100ms'}}>
<div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-500"></div>
</div>
<div className="p-6">
<div className="flex items-center justify-between mb-3">
<span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Business</span>
<div className="flex text-yellow-500">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<span className="text-xs text-gray-400 ml-1">(5.0)</span>
</div>
</div>
<h3 className="text-lg font-semibold mb-2 group-hover:text-[#04a2eb] transition-colors">Enterprise Leadership ME</h3>
<p className="text-sm text-gray-400 mb-4 line-clamp-2">Strategic management tailored for Middle East markets. Downloadable case studies.</p>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
<div>
<span className="text-lg font-bold text-white">$120.00</span>
</div>
<button className="p-2 rounded-full bg-white/5 hover:bg-[#04a2eb] text-white transition-colors">
<i className="w-5 h-5" data-lucide="shopping-bag"></i>
</button>
</div>
</div>
</div>

<div className="group relative bg-[#243040] rounded-xl overflow-hidden border border-white/5 hover:border-[#04a2eb]/50 transition-all duration-300 hover:-translate-y-1 fade-in-section" style={{transitionDelay: '200ms'}}>
<div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-500"></div>
<div className="absolute top-3 right-3 bg-[#04a2eb] text-xs font-semibold px-2 py-1 rounded text-white">
                        New
                     </div>
</div>
<div className="p-6">
<div className="flex items-center justify-between mb-3">
<span className="text-xs font-medium text-gray-400 uppercase tracking-wider">AI &amp; Data</span>
<div className="flex text-yellow-500">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<span className="text-xs text-gray-400 ml-1">(4.2)</span>
</div>
</div>
<h3 className="text-lg font-semibold mb-2 group-hover:text-[#04a2eb] transition-colors">AI for Marketing</h3>
<p className="text-sm text-gray-400 mb-4 line-clamp-2">Leverage AI agents for campaign optimization. Includes GEO module.</p>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
<div>
<span className="text-lg font-bold text-white">$65.00</span>
</div>
<button className="p-2 rounded-full bg-white/5 hover:bg-[#04a2eb] text-white transition-colors">
<i className="w-5 h-5" data-lucide="shopping-bag"></i>
</button>
</div>
</div>
</div>
</div>
<div className="mt-12 text-center">
<button className="px-6 py-2 border border-white/10 rounded-full text-sm font-medium hover:bg-white/5 transition-all text-gray-300">
                View All Courses
            </button>
</div>
</section>

<section className="py-20 bg-[#243040] relative overflow-hidden" id="contact">
<div className="max-w-4xl mx-auto px-4 relative z-10">
<div className="glass-panel p-8 md:p-12 rounded-2xl border border-white/5 text-center fade-in-section">
<h2 className="text-3xl font-semibold tracking-tight mb-4">Join our Learning Community</h2>
<p className="text-gray-400 mb-8 max-w-xl mx-auto">Subscribe for exclusive discounts, new course alerts, and industry insights. Available in Arabic, English, and French.</p>
<form className="max-w-md mx-auto space-y-4">
<div className="relative">
<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
<i className="w-5 h-5 text-gray-500" data-lucide="mail"></i>
</div>
<input className="block w-full p-4 pl-10 text-sm text-white bg-[#293647] border border-white/10 rounded-lg focus:ring-[#04a2eb] focus:border-[#04a2eb] placeholder-gray-500 outline-none transition-all" placeholder="Enter your email address" required="" type="email"/>
</div>
<div className="flex items-center justify-center gap-4 text-xs text-gray-400 my-4">
<label className="flex items-center space-x-2 cursor-pointer">
<div className="relative">
<input className="sr-only peer" type="checkbox"/>
<div className="w-4 h-4 border border-white/20 rounded bg-[#293647] peer-checked:bg-[#04a2eb] peer-checked:border-[#04a2eb] transition-all flex items-center justify-center">
<i className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</div>
</div>
<span>I agree to receive training updates</span>
</label>
</div>
<button className="w-full px-5 py-3 text-sm font-medium text-center text-white bg-[#04a2eb] rounded-lg hover:bg-[#04a2eb]/90 focus:ring-4 focus:outline-none focus:ring-[#04a2eb]/30 transition-all" type="submit">
                        Subscribe Now
                    </button>
</form>
</div>

<div className="grid md:grid-cols-3 gap-6 mt-12">
<div className="p-6 rounded-xl bg-[#293647] border border-white/5 text-center hover:border-[#04a2eb]/30 transition-colors cursor-pointer group">
<div className="w-10 h-10 mx-auto bg-[#04a2eb]/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="w-5 h-5 text-[#04a2eb]" data-lucide="map-pin"></i>
</div>
<h4 className="font-medium text-white">Cairo HQ</h4>
<p className="text-xs text-gray-400 mt-1">New Cairo, 5th Settlement</p>
</div>
<div className="p-6 rounded-xl bg-[#293647] border border-white/5 text-center hover:border-[#04a2eb]/30 transition-colors cursor-pointer group">
<div className="w-10 h-10 mx-auto bg-[#04a2eb]/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="w-5 h-5 text-[#04a2eb]" data-lucide="phone"></i>
</div>
<h4 className="font-medium text-white">Support</h4>
<p className="text-xs text-gray-400 mt-1">+20 100 000 0000</p>
</div>
<div className="p-6 rounded-xl bg-[#293647] border border-white/5 text-center hover:border-[#04a2eb]/30 transition-colors cursor-pointer group">
<div className="w-10 h-10 mx-auto bg-[#04a2eb]/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="w-5 h-5 text-[#04a2eb]" data-lucide="message-square"></i>
</div>
<h4 className="font-medium text-white">Sales</h4>
<p className="text-xs text-gray-400 mt-1">sales@nexus-training.me</p>
</div>
</div>
</div>
</section>

<footer className="bg-[#293647] border-t border-white/5 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<span className="text-xl font-bold tracking-tight text-white mb-4 block">NEXUS</span>
<p className="text-sm text-gray-500">Premier enterprise training solutions for the modern workforce in the Middle East.</p>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Platform</h4>
<ul className="space-y-2 text-sm text-gray-500">
<li><a className="hover:text-[#04a2eb] transition-colors" href="#">Courses</a></li>
<li><a className="hover:text-[#04a2eb] transition-colors" href="#">Enterprise</a></li>
<li><a className="hover:text-[#04a2eb] transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Resources</h4>
<ul className="space-y-2 text-sm text-gray-500">
<li><a className="hover:text-[#04a2eb] transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-[#04a2eb] transition-colors" href="#">Case Studies</a></li>
<li><a className="hover:text-[#04a2eb] transition-colors" href="#">Help Center</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-gray-500">
<li><a className="hover:text-[#04a2eb] transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-[#04a2eb] transition-colors" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-gray-600">© 2023 Nexus Training Enterprise. All rights reserved.</p>
<div className="flex space-x-4">
<i className="w-4 h-4 text-gray-500 hover:text-white cursor-pointer transition-colors" data-lucide="facebook"></i>
<i className="w-4 h-4 text-gray-500 hover:text-white cursor-pointer transition-colors" data-lucide="twitter"></i>
<i className="w-4 h-4 text-gray-500 hover:text-white cursor-pointer transition-colors" data-lucide="linkedin"></i>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-50 group">
<div className="hidden absolute bottom-16 right-0 w-80 bg-[#243040] rounded-2xl border border-white/10 shadow-2xl overflow-hidden mb-2 origin-bottom-right transition-all" id="ai-chat-window">
<div className="bg-[#293647] p-4 border-b border-white/5 flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-xs font-semibold text-white">Nexus AI Agent</span>
</div>
<button className="text-gray-400 hover:text-white" onclick="toggleChat()"><i className="w-4 h-4" data-lucide="x"></i></button>
</div>
<div className="p-4 h-64 overflow-y-auto space-y-3 bg-[#243040]">
<div className="flex items-start gap-2">
<div className="w-6 h-6 rounded-full bg-[#04a2eb]/20 flex items-center justify-center text-[#04a2eb] text-[10px]">AI</div>
<div className="bg-white/5 rounded-lg rounded-tl-none p-2 text-xs text-gray-300 max-w-[85%]">
                        Hello! I see you are visiting from Egypt. How can I help you find training courses today?
                    </div>
</div>
</div>
<div className="p-3 border-t border-white/5 bg-[#293647]">
<div className="relative">
<input className="w-full bg-[#1a2330] text-xs text-white rounded-md pl-3 pr-8 py-2 focus:outline-none focus:ring-1 focus:ring-[#04a2eb]" placeholder="Ask anything..." type="text"/>
<button className="absolute right-2 top-1.5 text-[#04a2eb] hover:text-white"><i className="w-3 h-3" data-lucide="send"></i></button>
</div>
</div>
</div>
<button className="flex items-center justify-center w-14 h-14 bg-[#04a2eb] text-white rounded-full shadow-[0_0_20px_rgba(4,162,235,0.4)] hover:scale-110 transition-transform hover:rotate-90" onclick="toggleChat()">
<i className="w-6 h-6" data-lucide="sparkles"></i>
</button>
</div>


    </>
  );
}
