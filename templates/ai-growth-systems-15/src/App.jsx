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



        // --- 1. Mobile Menu Logic ---
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        function toggleMenu() {
            if (mobileMenu.classList.contains('hidden-menu')) {
                // Open
                mobileMenu.classList.remove('hidden-menu');
                mobileMenu.classList.add('visible-menu');
            } else {
                // Close
                mobileMenu.classList.remove('visible-menu');
                mobileMenu.classList.add('hidden-menu');
            }
        }

        menuBtn.addEventListener('click', toggleMenu);


        // --- 2. Form Submission (GHL/Sheets Connection) ---
        function submitForm(e) {
            e.preventDefault();
            
            // 1. Get the data
            const email = document.getElementById('email').value;
            const website = document.getElementById('website').value;
            
            const data = {
                email: email,
                website: website,
                timestamp: new Date().toISOString()
            };

            // 2. Send to CRM via Webhook (Zapier/Make)
            // Replace 'YOUR_WEBHOOK_URL_HERE' with your actual Zapier/Make webhook URL
            
            /* 
            fetch('YOUR_WEBHOOK_URL_HERE', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
            .then(response => {
                alert("Audit requested successfully.");
            })
            .catch(error => {
                console.error('Error:', error);
            });
            */
            
            // Simulating success for now:
            console.log("Form Data to send to GHL:", data);
            alert("Thanks! We have received your request. (This is a demo submit)");
            
            // Reset form
            document.getElementById('auditForm').reset();
        }


        // --- 3. Scroll Reveal Animation ---
        document.addEventListener('DOMContentLoaded', () => {
            const reveals = document.querySelectorAll('.reveal');

            const revealOnScroll = () => {
                const windowHeight = window.innerHeight;
                const elementVisible = 100;

                reveals.forEach((reveal) => {
                    const elementTop = reveal.getBoundingClientRect().top;
                    if (elementTop < windowHeight - elementVisible) {
                        reveal.classList.add('active');
                    }
                });
            };

            window.addEventListener('scroll', revealOnScroll);
            revealOnScroll(); // Trigger once on load
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/[0.06] bg-[#020617]/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-3 group z-50 relative" href="#">
<div className="h-8 w-8 bg-white flex items-center justify-center rounded-sm">
<span className="iconify text-[#020617]" data-height="20" data-icon="lucide:combine" data-strokeWidth="2" data-width="20"></span>
</div>
<span className="text-sm font-semibold tracking-tight text-white uppercase">Davies Kikai Group</span>
</a>

<div className="hidden md:flex items-center gap-8 text-xs font-medium text-slate-400">
<a className="hover:text-white transition-colors duration-300" href="#problem">The Problem</a>
<a className="hover:text-white transition-colors duration-300" href="#systems">Systems</a>
<a className="hover:text-white transition-colors duration-300" href="#process">Process</a>
<a className="hover:text-white transition-colors duration-300" href="#offers">Engagement Models</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-[#020617] bg-white rounded-sm hover:bg-slate-200 transition-all duration-300" href="#audit">
                    Book Systems Audit
                </a>

<button className="md:hidden z-50 p-2 text-white focus:outline-none" id="menu-btn">
<span className="iconify" data-height="24" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</div>

<div className="hidden-menu absolute top-0 left-0 w-full bg-[#020617] border-b border-white/[0.06] pt-24 pb-10 px-6 md:hidden shadow-2xl" id="mobile-menu">
<div className="flex flex-col space-y-6 text-center">
<a className="text-sm font-medium text-slate-300 hover:text-white py-2 border-b border-white/5" href="#problem" onclick="toggleMenu()">The Problem</a>
<a className="text-sm font-medium text-slate-300 hover:text-white py-2 border-b border-white/5" href="#systems" onclick="toggleMenu()">Systems</a>
<a className="text-sm font-medium text-slate-300 hover:text-white py-2 border-b border-white/5" href="#process" onclick="toggleMenu()">Process</a>
<a className="text-sm font-medium text-slate-300 hover:text-white py-2 border-b border-white/5" href="#offers" onclick="toggleMenu()">Engagement Models</a>
<a className="inline-flex items-center justify-center px-4 py-3 text-xs font-semibold text-[#020617] bg-white rounded-sm mt-4" href="#audit" onclick="toggleMenu()">
                    Book Systems Audit
                </a>
</div>
</div>
</nav>

<header className="relative pt-40 pb-24 md:pt-52 md:pb-32 overflow-hidden border-b border-white/[0.06]">
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<div className="reveal inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-[10px] font-semibold tracking-wider text-blue-200 uppercase mb-8">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                Systems-First Growth Partner
            </div>
<h1 className="reveal delay-100 text-5xl md:text-7xl font-semibold tracking-tighter text-white mb-8 leading-[1.05]">
                Your business is <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-slate-200 to-slate-500">leaking revenue.</span>
</h1>
<p className="reveal delay-200 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                We install AI Growth Systems that capture more leads, reactivate past customers, and eliminate wasted operational spend — <span className="text-slate-200 font-medium">without increasing headcount.</span>
</p>
<div className="reveal delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-sm transition-all shadow-[0_0_30px_-10px_rgba(37,99,235,0.3)]" href="#audit">
                    Book a Systems Audit
                </a>
<a className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/10 hover:border-white/20 text-white text-xs font-medium rounded-sm transition-all flex items-center justify-center gap-2" href="#systems">
                    See How It Works
                    <span className="iconify" data-height="14" data-icon="lucide:arrow-down" data-width="14"></span>
</a>
</div>
</div>
</header>

<section className="py-24 border-b border-white/[0.06] bg-[#050a1f]" id="problem">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="reveal">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-6">If this sounds familiar, pay attention.</h2>
<p className="text-slate-400 mb-8 leading-relaxed">
                        Most businesses aren't failing because of demand. They are failing because of inefficiency. These small leaks quietly cost businesses hundreds of thousands per year.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<span className="iconify text-red-400 mt-1 flex-shrink-0" data-height="18" data-icon="lucide:x-circle" data-width="18"></span>
<span className="text-sm text-slate-300">Leads message you and never get a response.</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-red-400 mt-1 flex-shrink-0" data-height="18" data-icon="lucide:x-circle" data-width="18"></span>
<span className="text-sm text-slate-300">Phone calls go unanswered or get mishandled by busy staff.</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-red-400 mt-1 flex-shrink-0" data-height="18" data-icon="lucide:x-circle" data-width="18"></span>
<span className="text-sm text-slate-300">Reviews are inconsistent, unmanaged, and hurt your ranking.</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-red-400 mt-1 flex-shrink-0" data-height="18" data-icon="lucide:x-circle" data-width="18"></span>
<span className="text-sm text-slate-300">Past customers disappear and never hear from you again.</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-red-400 mt-1 flex-shrink-0" data-height="18" data-icon="lucide:x-circle" data-width="18"></span>
<span className="text-sm text-slate-300">Staff waste hours on repetitive admin instead of revenue work.</span>
</li>
</ul>
</div>
<div className="reveal delay-200 relative">
<div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full"></div>
<div className="relative bg-[#020617] border border-white/10 rounded-lg p-8 md:p-10">
<h3 className="text-xl font-semibold text-white mb-4">The Truth</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-6">
                            AI doesn't grow businesses. <strong className="text-white">Systems do.</strong>
</p>
<p className="text-slate-400 text-sm leading-relaxed mb-6">
                            Random tools, chatbots, and dashboards won't fix anything unless they are installed into a coherent revenue system. That is what we build.
                        </p>
<div className="h-px w-full bg-white/10 my-6"></div>
<div className="flex items-center gap-4">
<div className="flex-1">
<div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Efficiency Loss</div>
<div className="text-2xl font-semibold text-white">~32%</div>
</div>
<div className="w-px h-10 bg-white/10"></div>
<div className="flex-1">
<div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Missed Revenue</div>
<div className="text-2xl font-semibold text-white">£150k+</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative" id="systems">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20 reveal">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">Integrated AI Growth Systems</h2>
<p className="text-slate-400 max-w-2xl text-lg font-light">We don’t sell isolated tools. We install systems that work together to grow revenue and reduce cost.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="reveal delay-100 group p-8 rounded-lg bg-white/[0.02] border border-white/10 hover:border-blue-500/30 transition-all duration-300">
<div className="h-10 w-10 rounded bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400">
<span className="iconify" data-height="20" data-icon="lucide:star" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Automated Reputation Management</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-4">
                        We install systems that consistently generate real customer reviews across Google and key platforms.
                    </p>
<ul className="text-xs text-slate-500 space-y-1">
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span>Higher trust &amp; conversion</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span>Improved local SEO</li>
</ul>
</div>

<div className="reveal delay-200 group p-8 rounded-lg bg-white/[0.02] border border-white/10 hover:border-blue-500/30 transition-all duration-300">
<div className="h-10 w-10 rounded bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400">
<span className="iconify" data-height="20" data-icon="lucide:bot" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-lg font-semibold text-white mb-2">AI Lead Capture Agents</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-4">
                        Intelligent agents embedded into your website and social channels that engage, qualify, and route leads automatically.
                    </p>
<ul className="text-xs text-slate-500 space-y-1">
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span>Zero missed enquiries</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span>Instant response times</li>
</ul>
</div>

<div className="reveal delay-300 group p-8 rounded-lg bg-white/[0.02] border border-white/10 hover:border-blue-500/30 transition-all duration-300">
<div className="h-10 w-10 rounded bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400">
<span className="iconify" data-height="20" data-icon="lucide:mail-check" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Direct Marketing &amp; Reactivation</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-4">
                        Automated email and SMS systems that re-engage past customers and increase lifetime value without ad spend.
                    </p>
<ul className="text-xs text-slate-500 space-y-1">
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span>Revenue from dormant data</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span>Higher LTV</li>
</ul>
</div>

<div className="reveal delay-300 group p-8 rounded-lg bg-white/[0.02] border border-white/10 hover:border-blue-500/30 transition-all duration-300">
<div className="h-10 w-10 rounded bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400">
<span className="iconify" data-height="20" data-icon="lucide:phone-call" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-lg font-semibold text-white mb-2">AI Voice Receptionist</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-4">
                        A 24/7 AI voice assistant that answers calls, books appointments, handles FAQs, and qualifies leads.
                    </p>
<ul className="text-xs text-slate-500 space-y-1">
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span>Reduced admin overhead</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span>Increased booking rates</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/[0.06] bg-[#050a1f]" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="reveal delay-100">
<span className="text-5xl font-bold text-white/5 mb-4 block">01</span>
<h3 className="text-white font-semibold mb-2">Systems Audit</h3>
<p className="text-sm text-slate-400">We identify where revenue is leaking and where automation creates immediate ROI.</p>
</div>
<div className="reveal delay-200">
<span className="text-5xl font-bold text-white/5 mb-4 block">02</span>
<h3 className="text-white font-semibold mb-2">System Design</h3>
<p className="text-sm text-slate-400">We architect a custom AI Growth System tailored specifically to your business model.</p>
</div>
<div className="reveal delay-300">
<span className="text-5xl font-bold text-white/5 mb-4 block">03</span>
<h3 className="text-white font-semibold mb-2">Implementation</h3>
<p className="text-sm text-slate-400">We deploy, integrate, and test everything end-to-end. No experiments.</p>
</div>
<div className="reveal delay-300">
<span className="text-5xl font-bold text-white/5 mb-4 block">04</span>
<h3 className="text-white font-semibold mb-2">Optimisation</h3>
<p className="text-sm text-slate-400">Ongoing refinement based on real performance data to maximize efficiency.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/[0.06] bg-[#020617]">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 reveal text-center">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Results, not theory.</h2>
<p className="text-slate-400">We measure success in recovered time and generated revenue.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="reveal delay-100 p-8 rounded-lg bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col h-full">
<div className="flex items-center gap-1 text-blue-500 mb-6">
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-sm text-slate-300 leading-relaxed mb-8 flex-grow">
                        "We were missing about 15 calls a week because our front desk was overwhelmed. The AI voice assistant Davies Kikai installed now handles overflow instantly. It paid for itself in week one by booking three high-value consultations we would have otherwise lost."
                    </p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center text-xs font-semibold text-white border border-white/10">JT</div>
<div>
<div className="text-sm font-medium text-white">James Thompson</div>
<div className="text-xs text-slate-500">Director, Nexus Property</div>
</div>
</div>
</div>

<div className="reveal delay-200 p-8 rounded-lg bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col h-full">
<div className="flex items-center gap-1 text-blue-500 mb-6">
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-sm text-slate-300 leading-relaxed mb-8 flex-grow">
                        "I was skeptical about the 'reactivation' claims, but we ran the system on our old lead list from 2024. We recovered £12k in sales from leads we thought were dead within 48 hours. The automation is seamless and feels completely personal."
                    </p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center text-xs font-semibold text-white border border-white/10">SL</div>
<div>
<div className="text-sm font-medium text-white">Sarah Lawson</div>
<div className="text-xs text-slate-500">Founder, Glow Aesthetics</div>
</div>
</div>
</div>

<div className="reveal delay-300 p-8 rounded-lg bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col h-full">
<div className="flex items-center gap-1 text-blue-500 mb-6">
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-sm text-slate-300 leading-relaxed mb-8 flex-grow">
                        "The audit was an eye-opener. They identified exactly where our intake process was leaking cash. The implementation replaced our chaotic manual spreadsheet system with a fully automated flow. It has saved my admin team at least 20 hours a week."
                    </p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center text-xs font-semibold text-white border border-white/10">MR</div>
<div>
<div className="text-sm font-medium text-white">Michael Ross</div>
<div className="text-xs text-slate-500">MD, Skyline Logistics</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32" id="offers">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 reveal text-center">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Engagement Models</h2>
<p className="text-slate-400">We operate with transparency. No hidden costs. No vague deliverables.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="reveal delay-100 flex flex-col bg-[#050a1f] border border-white/10 rounded-lg p-8">
<div className="mb-6">
<h3 className="text-base font-semibold text-white uppercase tracking-wider mb-2">Systems Audit</h3>
<div className="text-2xl font-semibold text-white">£750 – £2,500</div>
<div className="text-xs text-slate-500 mt-1">One-off • Flexes by size</div>
</div>
<p className="text-sm text-slate-400 mb-8 flex-grow">
                        Diagnose revenue leaks and identify automation opportunities with clear ROI. If the audit doesn't make implementation obvious, we don't proceed.
                    </p>
<ul className="space-y-3 mb-8 text-sm text-slate-300">
<li className="flex gap-3"><span className="iconify text-blue-500" data-icon="lucide:check" data-width="16"></span> Lead capture breakdown</li>
<li className="flex gap-3"><span className="iconify text-blue-500" data-icon="lucide:check" data-width="16"></span> Reputation analysis</li>
<li className="flex gap-3"><span className="iconify text-blue-500" data-icon="lucide:check" data-width="16"></span> Admin inefficiency report</li>
<li className="flex gap-3"><span className="iconify text-blue-500" data-icon="lucide:check" data-width="16"></span> Prioritised roadmap</li>
</ul>
<a className="block w-full py-3 border border-white/20 hover:bg-white hover:text-black text-white text-center text-xs font-semibold rounded-sm transition-colors" href="#audit">
                        Book Audit
                    </a>
</div>

<div className="reveal delay-200 flex flex-col bg-[#020617] border border-blue-500/30 rounded-lg p-8 relative shadow-[0_0_30px_-15px_rgba(37,99,235,0.2)]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full">Core Service</div>
<div className="mb-6">
<h3 className="text-base font-semibold text-white uppercase tracking-wider mb-2">Implementation</h3>
<div className="text-2xl font-semibold text-white">£2,000 – £20,000</div>
<div className="text-xs text-slate-500 mt-1">One-off • Scoped per client</div>
</div>
<p className="text-sm text-slate-400 mb-8 flex-grow">
                        We install the systems identified in the audit. Modular and scoped to your needs. Systems go live, working, and measurable.
                    </p>
<ul className="space-y-3 mb-8 text-sm text-slate-300">
<li className="flex gap-3"><span className="iconify text-blue-500" data-icon="lucide:check" data-width="16"></span> AI lead agents (Site+Social)</li>
<li className="flex gap-3"><span className="iconify text-blue-500" data-icon="lucide:check" data-width="16"></span> Review automation</li>
<li className="flex gap-3"><span className="iconify text-blue-500" data-icon="lucide:check" data-width="16"></span> Reactivation campaigns</li>
<li className="flex gap-3"><span className="iconify text-blue-500" data-icon="lucide:check" data-width="16"></span> CRM integrations</li>
</ul>
<a className="block w-full py-3 bg-blue-600 hover:bg-blue-500 text-white text-center text-xs font-semibold rounded-sm transition-colors" href="#audit">
                        Enquire for Install
                    </a>
</div>

<div className="reveal delay-300 flex flex-col bg-[#050a1f] border border-white/10 rounded-lg p-8">
<div className="mb-6">
<h3 className="text-base font-semibold text-white uppercase tracking-wider mb-2">Systems Management</h3>
<div className="text-2xl font-semibold text-white">£1,500 – £5,000</div>
<div className="text-xs text-slate-500 mt-1">Per month • Retainer</div>
</div>
<p className="text-sm text-slate-400 mb-8 flex-grow">
                        We maintain, optimise, and improve performance over time. We become infrastructure, not just a vendor.
                    </p>
<ul className="space-y-3 mb-8 text-sm text-slate-300">
<li className="flex gap-3"><span className="iconify text-blue-500" data-icon="lucide:check" data-width="16"></span> Monitoring &amp; optimisation</li>
<li className="flex gap-3"><span className="iconify text-blue-500" data-icon="lucide:check" data-width="16"></span> Campaign refinements</li>
<li className="flex gap-3"><span className="iconify text-blue-500" data-icon="lucide:check" data-width="16"></span> System updates</li>
<li className="flex gap-3"><span className="iconify text-blue-500" data-icon="lucide:check" data-width="16"></span> Priority support</li>
</ul>
<a className="block w-full py-3 border border-white/20 hover:bg-white hover:text-black text-white text-center text-xs font-semibold rounded-sm transition-colors" href="#audit">
                        Discuss Partnership
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/[0.06] bg-[#050a1f]" id="audit">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="reveal text-3xl md:text-4xl font-semibold text-white tracking-tight mb-8">Who This Is For</h2>
<div className="reveal delay-100 flex flex-wrap justify-center gap-4 mb-12">
<span className="px-4 py-2 rounded bg-white/[0.03] border border-white/10 text-sm text-slate-300">Local Businesses £100k–£5m</span>
<span className="px-4 py-2 rounded bg-white/[0.03] border border-white/10 text-sm text-slate-300">Professional Service Providers</span>
<span className="px-4 py-2 rounded bg-white/[0.03] border border-white/10 text-sm text-slate-300">Efficiency-Focused Owners</span>
</div>
<div className="reveal delay-200 bg-[#020617] p-10 rounded-xl border border-white/10 shadow-2xl">
<h3 className="text-2xl font-semibold text-white mb-4">Book Your AI Growth Systems Audit</h3>
<p className="text-slate-400 mb-8 max-w-lg mx-auto">
                    If your business already works but feels inefficient, this audit will show you exactly why. Limited capacity. We only onboard businesses where the ROI is obvious.
                </p>
<form className="text-left space-y-4 max-w-md mx-auto" id="auditForm" onsubmit="submitForm(event)">
<div>
<label className="block text-[10px] uppercase font-bold text-slate-500 mb-1">Business Email</label>
<input className="w-full bg-[#050a1f] border border-white/10 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500/50 transition-colors" id="email" name="email" placeholder="name@company.com" required="" type="email"/>
</div>
<div>
<label className="block text-[10px] uppercase font-bold text-slate-500 mb-1">Company Website</label>
<input className="w-full bg-[#050a1f] border border-white/10 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500/50 transition-colors" id="website" name="website" placeholder="company.com" required="" type="text"/>
</div>
<button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 rounded-sm transition-all mt-4" type="submit">
                        Request Audit
                    </button>
<p className="text-center text-[10px] text-slate-600 pt-2">No commitment required. Selective onboarding.</p>
</form>
</div>
</div>
</section>

<footer className="bg-[#020617] border-t border-white/[0.06] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div>
<div className="flex items-center gap-2 mb-4">
<span className="iconify text-white" data-height="20" data-icon="lucide:combine" data-width="20"></span>
<span className="text-sm font-semibold text-white">Davies Kikai Group Ltd</span>
</div>
<p className="text-xs text-slate-500 max-w-xs">
                    Operators, not theorists. We install systems that increase cash flow and reduce operational waste.
                </p>
</div>
<div className="flex gap-8 text-xs text-slate-500">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/[0.06] text-center md:text-left">
<p className="text-[10px] text-slate-600">© 2026 Davies Kikai Group Ltd. All rights reserved.</p>
</div>
</footer>


    </>
  );
}
