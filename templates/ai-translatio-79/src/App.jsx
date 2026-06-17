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
      

<header className="bg-[#0B1F3B] w-full sticky top-0 z-50 shadow-lg">
<div className="max-w-[1200px] mx-auto px-6 md:px-20 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 text-white group" href="#">
<div className="bg-[#3B82F6] p-1.5 rounded-md group-hover:bg-[#7C3AED] transition-colors duration-300">
<i className="w-5 h-5 text-white stroke-[1.5]" data-lucide="languages"></i>
</div>
<span className="text-xl font-medium tracking-tight">SRS</span>
</a>

<nav className="hidden md:flex items-center gap-8 text-sm font-normal text-gray-300">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#use-cases">Use Cases</a>
<a className="hover:text-white transition-colors" href="#team">Team</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all shadow-md hover:shadow-lg items-center gap-2" href="#">
                    Request demo
                    <i className="w-4 h-4 stroke-[1.5]" data-lucide="arrow-right"></i>
</a>

<button className="md:hidden text-white">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="menu"></i>
</button>
</div>
</div>
</header>

<section className="relative pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden">
<div className="max-w-[1200px] mx-auto px-6 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="flex flex-col gap-6 z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0E7FF] border border-[#C7D2FE] w-fit">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3B82F6] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#3B82F6]"></span>
</span>
<span className="text-xs font-medium text-[#0B1F3B] uppercase tracking-wide">Now compatible with Copilot</span>
</div>
<h1 className="text-4xl md:text-6xl font-semibold text-[#0B1F3B] leading-[1.15] tracking-tight">
                    Translations in Microsoft Teams.<br/>
<span className="text-[#3B82F6]">Instantly. Intelligent.</span>
</h1>
<p className="text-lg md:text-xl text-[#4B5563] font-light leading-relaxed max-w-lg">
                    Seamlessly bridge language barriers in your B2B communications. Real-time translation powered by secure AI, directly within your existing workflow.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="flex justify-center items-center bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-6 py-3 rounded-lg text-base font-medium transition-all shadow-sm hover:shadow-md" href="#">
                        Start Free Trial
                    </a>
<a className="flex justify-center items-center bg-white border border-[#3B82F6] text-[#0B1F3B] hover:bg-[#F0F9FF] px-6 py-3 rounded-lg text-base font-medium transition-all shadow-sm" href="#">
                        View Documentation
                    </a>
</div>
<div className="pt-6 flex items-center gap-4 text-sm text-[#6B7280]">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-[10px] font-bold text-gray-600">S</div>
<div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-[10px] font-bold text-gray-600">R</div>
<div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white flex items-center justify-center text-[10px] font-bold text-gray-600">S</div>
</div>
<p>Trusted by forward-thinking teams.</p>
</div>
</div>

<div className="relative z-10 lg:translate-x-10">

<div className="absolute -top-10 -right-10 w-72 h-72 bg-[#14B8A6] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
<div className="absolute -bottom-10 -left-10 w-72 h-72 bg-[#3B82F6] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

<div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden relative">

<div className="bg-[#464775] h-10 w-full flex items-center px-4 justify-between">
<div className="flex items-center gap-3">
<div className="w-full text-white text-xs opacity-80">Microsoft Teams</div>
</div>
<div className="flex gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
</div>
</div>
<div className="flex h-[380px]">

<div className="w-16 bg-[#F0F0F0] flex flex-col items-center py-4 gap-4 border-r border-gray-200 hidden sm:flex">
<div className="w-8 h-8 rounded bg-white shadow-sm flex items-center justify-center">
<i className="w-4 h-4 text-[#464775] stroke-[1.5]" data-lucide="bell"></i>
</div>
<div className="w-8 h-8 rounded bg-white shadow-sm flex items-center justify-center">
<i className="w-4 h-4 text-[#464775] stroke-[1.5]" data-lucide="message-square"></i>
</div>
<div className="w-8 h-8 rounded bg-white shadow-sm flex items-center justify-center">
<i className="w-4 h-4 text-[#464775] stroke-[1.5]" data-lucide="calendar"></i>
</div>
</div>

<div className="w-48 bg-white border-r border-gray-200 hidden sm:block">
<div className="p-3 border-b border-gray-100">
<div className="text-xs font-semibold text-gray-500 uppercase">Recent</div>
</div>
<div className="p-2 space-y-1">
<div className="flex items-center gap-2 p-2 bg-[#F3F2F1] rounded">
<div className="w-6 h-6 rounded-full bg-[#14B8A6] flex items-center justify-center text-[10px] text-white font-bold">IT</div>
<div className="text-sm font-medium text-gray-800">Global IT Support</div>
</div>
<div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded">
<div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center text-[10px] text-white font-bold">MK</div>
<div className="text-sm font-medium text-gray-600">Marketing</div>
</div>
</div>
</div>

<div className="flex-1 bg-white flex flex-col relative">

<div className="h-12 border-b border-gray-200 flex items-center px-4 justify-between bg-white">
<div className="font-semibold text-gray-800 text-sm">Global IT Support</div>
<div className="flex items-center gap-1 text-[#7C3AED] bg-[#F3E8FF] px-2 py-1 rounded text-xs font-medium">
<i className="w-3 h-3 stroke-[1.5]" data-lucide="sparkles"></i>
                                    Copilot Active
                                </div>
</div>

<div className="flex-1 p-4 space-y-4 overflow-y-auto bg-[#F5F7FA]">

<div className="flex flex-col items-start max-w-[85%]">
<div className="flex items-center gap-2 mb-1">
<span className="text-xs font-medium text-gray-500">Hans (Berlin)</span>
<span className="text-[10px] text-gray-400">10:42 AM</span>
</div>
<div className="bg-white p-3 rounded-tr-lg rounded-br-lg rounded-bl-lg shadow-sm border border-gray-100 text-sm text-gray-800">
                                        Das System meldet einen kritischen Fehler im Servercluster 4.
                                    </div>

<div className="mt-2 ml-1 flex gap-2">
<div className="bg-white border border-[#E5E7EB] p-2 rounded-lg shadow-sm flex items-start gap-2">
<i className="w-4 h-4 text-[#7C3AED] mt-0.5 stroke-[1.5]" data-lucide="languages"></i>
<div className="flex flex-col">
<span className="text-xs font-medium text-[#0B1F3B]">The system is reporting a critical error in server cluster 4.</span>
<span className="text-[10px] text-gray-400 mt-0.5">Translated by Copilot • Verified</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col items-end self-end max-w-[85%]">
<div className="flex items-center gap-2 mb-1">
<span className="text-[10px] text-gray-400">10:43 AM</span>
<span className="text-xs font-medium text-gray-500">You</span>
</div>
<div className="bg-[#E0E7FF] p-3 rounded-tl-lg rounded-bl-lg rounded-br-lg text-sm text-[#0B1F3B]">
                                        Understood. Initiating diagnostics protocol now.
                                    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-gray-200 bg-white py-10">
<div className="max-w-[1200px] mx-auto px-6 md:px-20 text-center">
<p className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-8">Integrated with the ecosystem you trust</p>
<div className="flex flex-wrap justify-center gap-10 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 text-lg font-semibold text-gray-600">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="box"></i> Microsoft 365
               </div>
<div className="flex items-center gap-2 text-lg font-semibold text-gray-600">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="shield-check"></i> Azure AD
                </div>
<div className="flex items-center gap-2 text-lg font-semibold text-gray-600">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="cpu"></i> Copilot
                </div>
<div className="flex items-center gap-2 text-lg font-semibold text-gray-600">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="globe"></i> Teams
                </div>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-[#F5F7FA]" id="features">
<div className="max-w-[1200px] mx-auto px-6 md:px-20">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-[#0B1F3B] mb-4 tracking-tight">Technical excellence built for enterprise</h2>
<p className="text-[#4B5563] text-lg font-light">
                    Designed for speed, security, and seamless integration. No context switching required.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 group">
<div className="w-12 h-12 bg-[#EFF6FF] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#3B82F6] transition-colors duration-300">
<i className="w-6 h-6 text-[#3B82F6] group-hover:text-white stroke-[1.5]" data-lucide="zap"></i>
</div>
<h3 className="text-xl font-medium text-[#0B1F3B] mb-3">Real-time Latency</h3>
<p className="text-[#4B5563] leading-relaxed text-sm">
                        Instantaneous message translation with sub-200ms processing time using edge computing nodes.
                    </p>
</div>

<div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 group">
<div className="w-12 h-12 bg-[#F5F3FF] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#7C3AED] transition-colors duration-300">
<i className="w-6 h-6 text-[#7C3AED] group-hover:text-white stroke-[1.5]" data-lucide="bot"></i>
</div>
<h3 className="text-xl font-medium text-[#0B1F3B] mb-3">Copilot Native</h3>
<p className="text-[#4B5563] leading-relaxed text-sm">
                        Deep integration with Microsoft Copilot for context-aware translations that understand technical jargon.
                    </p>
</div>

<div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 group">
<div className="w-12 h-12 bg-[#CCFBF1] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#14B8A6] transition-colors duration-300">
<i className="w-6 h-6 text-[#14B8A6] group-hover:text-white stroke-[1.5]" data-lucide="lock"></i>
</div>
<h3 className="text-xl font-medium text-[#0B1F3B] mb-3">Enterprise Grade</h3>
<p className="text-[#4B5563] leading-relaxed text-sm">
                        GDPR compliant, end-to-end encrypted, and SOC2 ready. Your data never trains public models.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="use-cases">
<div className="max-w-[1200px] mx-auto px-6 md:px-20">
<div className="bg-[#0B1F3B] rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row text-white">
<div className="p-10 lg:p-16 flex flex-col justify-center lg:w-1/2">
<h2 className="text-3xl font-semibold mb-6 tracking-tight">Global Support Teams</h2>
<p className="text-gray-300 text-lg mb-8 font-light">
                        Enable your German engineering team to resolve incidents with Japanese clients instantly. No support tickets lost in translation.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-[#14B8A6] stroke-[1.5]" data-lucide="check-circle-2"></i>
<span className="text-gray-200">Preserves formatting and code snippets</span>
</li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-[#14B8A6] stroke-[1.5]" data-lucide="check-circle-2"></i>
<span className="text-gray-200">Detects 100+ languages automatically</span>
</li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-[#14B8A6] stroke-[1.5]" data-lucide="check-circle-2"></i>
<span className="text-gray-200">Tone-adjustment for B2B professionalism</span>
</li>
</ul>
<button className="w-fit bg-white text-[#0B1F3B] hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors">
                        Explore Use Cases
                    </button>
</div>
<div className="lg:w-1/2 bg-gradient-to-br from-[#1e3a8a] to-[#0B1F3B] relative min-h-[300px] lg:min-h-full flex items-center justify-center p-10">

<div className="relative w-full max-w-sm aspect-square">
<div className="absolute inset-0 bg-[#3B82F6]/20 rounded-full animate-pulse"></div>
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center">
<i className="w-24 h-24 text-[#3B82F6] stroke-[1]" data-lucide="globe-2"></i>
</div>

<div className="absolute top-10 left-10 w-12 h-12 bg-[#14B8A6] rounded-full flex items-center justify-center shadow-lg">
<span className="text-xs font-bold">DE</span>
</div>
<div className="absolute bottom-10 right-10 w-12 h-12 bg-[#7C3AED] rounded-full flex items-center justify-center shadow-lg">
<span className="text-xs font-bold">JP</span>
</div>
<div className="absolute top-1/2 right-0 w-10 h-10 bg-white text-[#0B1F3B] rounded-full flex items-center justify-center shadow-lg">
<span className="text-xs font-bold">EN</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-[#F5F7FA]" id="team">
<div className="max-w-[1200px] mx-auto px-6 md:px-20">
<div className="text-center mb-16">
<span className="text-[#3B82F6] font-medium tracking-wide uppercase text-xs mb-2 block">Built by Engineers</span>
<h2 className="text-3xl md:text-4xl font-semibold text-[#0B1F3B] tracking-tight">Meet the founding team</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:border-[#3B82F6] transition-colors group">
<div className="w-20 h-20 mx-auto bg-[#E0E7FF] rounded-full flex items-center justify-center mb-4 text-2xl font-semibold text-[#3B82F6] group-hover:scale-105 transition-transform">
                        S
                    </div>
<h3 className="text-lg font-semibold text-[#0B1F3B]">Selin</h3>
<p className="text-[#3B82F6] text-sm mb-4">Co-Founder &amp; Product</p>
<p className="text-[#4B5563] text-sm leading-relaxed">
                        Expert in Natural Language Processing and enterprise workflows.
                    </p>
</div>

<div className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:border-[#3B82F6] transition-colors group">
<div className="w-20 h-20 mx-auto bg-[#F3E8FF] rounded-full flex items-center justify-center mb-4 text-2xl font-semibold text-[#7C3AED] group-hover:scale-105 transition-transform">
                        R
                    </div>
<h3 className="text-lg font-semibold text-[#0B1F3B]">Roman</h3>
<p className="text-[#7C3AED] text-sm mb-4">Co-Founder &amp; Tech</p>
<p className="text-[#4B5563] text-sm leading-relaxed">
                        Specialist in low-latency distributed systems and Microsoft Graph API.
                    </p>
</div>

<div className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:border-[#3B82F6] transition-colors group">
<div className="w-20 h-20 mx-auto bg-[#CCFBF1] rounded-full flex items-center justify-center mb-4 text-2xl font-semibold text-[#14B8A6] group-hover:scale-105 transition-transform">
                        S
                    </div>
<h3 className="text-lg font-semibold text-[#0B1F3B]">Sascha</h3>
<p className="text-[#14B8A6] text-sm mb-4">Co-Founder &amp; Operations</p>
<p className="text-[#4B5563] text-sm leading-relaxed">
                        Ensuring secure, compliant integrations for Fortune 500 partners.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-[1200px] mx-auto px-6 md:px-20 text-center">
<h2 className="text-3xl md:text-4xl font-semibold text-[#0B1F3B] mb-6 tracking-tight">Ready to break language barriers?</h2>
<p className="text-[#4B5563] text-lg font-light mb-10 max-w-xl mx-auto">
                Install directly from the Microsoft Teams App Source or book a personalized demo with our team.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-[#0B1F3B] hover:bg-[#1f3a60] text-white px-8 py-4 rounded-lg text-base font-medium transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="calendar-days"></i>
                    Book a Demo
                </button>
<button className="bg-white border border-gray-200 text-[#0B1F3B] hover:border-[#3B82F6] px-8 py-4 rounded-lg text-base font-medium transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2">
                    Contact Sales
                </button>
</div>
</div>
</section>

<footer className="bg-[#0B1F3B] text-gray-300 py-12 border-t border-gray-800">
<div className="max-w-[1200px] mx-auto px-6 md:px-20">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<a className="flex items-center gap-2 text-white mb-6" href="#">
<div className="bg-[#3B82F6] p-1 rounded-md">
<i className="w-4 h-4 text-white stroke-[1.5]" data-lucide="languages"></i>
</div>
<span className="text-lg font-medium tracking-tight">SRS Translate</span>
</a>
<p className="text-sm text-gray-400">
                        Real-time AI translation for the modern enterprise workplace.
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-4">Product</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Features</a></li>
<li><a className="hover:text-white transition-colors" href="#">Security</a></li>
<li><a className="hover:text-white transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Company</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Legal</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-white transition-colors" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>
<div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
<p>© 2023 SRS Translate. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<i className="w-4 h-4 hover:text-white cursor-pointer transition-colors stroke-[1.5]" data-lucide="twitter"></i>
<i className="w-4 h-4 hover:text-white cursor-pointer transition-colors stroke-[1.5]" data-lucide="linkedin"></i>
<i className="w-4 h-4 hover:text-white cursor-pointer transition-colors stroke-[1.5]" data-lucide="github"></i>
</div>
</div>
</div>
</footer>


    </>
  );
}
