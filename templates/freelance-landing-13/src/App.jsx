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



function showPage(pageId) {
// Hide all pages
document.querySelectorAll('.page-section').forEach(p => p.classList.remove('active'));
// Show requested page
document.getElementById(pageId).classList.add('active');
// Scroll to top
window.scrollTo(0, 0);
}
function handleContactOptions() {
// Get values
const name = document.getElementById('contact-name').value;
const email = document.getElementById('contact-email').value;
const message = document.getElementById('contact-message').value;
// Simple validation
if (!name || !email) {
alert("Please enter your name and email to continue.");
return;
}
// Construct message for pre-fill
const textBody = `Hi, my name is ${name}. Email: ${email}. ${message}`;
const encodedText = encodeURIComponent(textBody);
// Update Links
// WhatsApp (Adding 91 prefix for India code based on number format)
const waUrl = `https://wa.me/919112564446?text=${encodedText}`;
// Email
const mailUrl = `mailto:mihirsaxena99@gmail.com?subject=Project Inquiry from ${name}&body=${encodedText}`;
document.getElementById('link-whatsapp').href = waUrl;
document.getElementById('link-email').href = mailUrl;
// Toggle Buttons
document.getElementById('btn-initial').classList.add('hidden');
const optionsDiv = document.getElementById('btn-options');
optionsDiv.classList.remove('hidden');
optionsDiv.classList.add('flex');
}

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
      



<div className="page-section active" id="page-home">

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tighter text-slate-900 flex items-center gap-2" href="#" onclick="showPage('page-home')">
<div className="w-6 h-6 bg-slate-900 rounded-md flex items-center justify-center text-white text-xs font-bold">L</div>
                    LANDING<span className="text-slate-400">DEV</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="hover:text-slate-900 transition-colors" href="#work">Work</a>
<a className="hover:text-slate-900 transition-colors" href="#about">About</a>
</div>
<a className="hidden md:flex items-center gap-2 px-4 py-2 bg-slate-900 text-white text-xs font-medium rounded-full hover:bg-slate-800 transition-all hover:shadow-lg hover:shadow-slate-200" href="#contact">
                    Get Started
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<button className="md:hidden text-slate-900 text-2xl">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-50/50 via-white to-transparent -z-10 pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-medium text-slate-600 mb-8 animate-fade-in-up">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Accepting new projects for Oct
                </div>
<h1 className="text-5xl md:text-7xl font-semibold text-slate-900 tracking-tight mb-6 leading-[1.1]">
                    High-Converting <br className="hidden md:block"/> 1-Page Landing Pages
                </h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
                    Stop losing potential clients with confusing websites. I help coaches and startups turn visitors into leads with fast, mobile-first landing pages.
                </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<a className="w-full md:w-auto px-8 py-3.5 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-all hover:-translate-y-0.5 shadow-xl shadow-slate-200/50 flex items-center justify-center gap-2" href="#contact">
<iconify-icon className="text-lg" icon="solar:rocket-2-linear" strokeWidth="1.5"></iconify-icon>
                        Get Your Landing Page
                    </a>
<a className="w-full md:w-auto px-8 py-3.5 bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2" href="#work">
                        View Examples
                    </a>
</div>
<div className="mt-12 flex items-center justify-center gap-8 opacity-60 grayscale">
<span className="text-sm font-semibold tracking-widest text-slate-300">STRIPE</span>
<span className="text-sm font-semibold tracking-widest text-slate-300">ACME INC</span>
<span className="text-sm font-semibold tracking-widest text-slate-300">LINEAR</span>
<span className="text-sm font-semibold tracking-widest text-slate-300">VERCEL</span>
</div>
</div>
</section>

<section className="py-24 bg-slate-50/50 border-y border-slate-100">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-6">Most websites confuse visitors. <span className="text-slate-400">Yours should convert them.</span></h2>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500 shrink-0 border border-red-100">
<iconify-icon className="text-xl" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-slate-900 font-medium text-sm mb-1">The Problem</h3>
<p className="text-sm text-slate-500 leading-relaxed">Generic templates are cluttered, slow, and hard to navigate on mobile. Visitors leave before they understand what you offer.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0 border border-indigo-100">
<iconify-icon className="text-xl" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-slate-900 font-medium text-sm mb-1">My Solution</h3>
<p className="text-sm text-slate-500 leading-relaxed">A singular, focused 1-page site designed psychologically to guide the user to one action: booking a call with you.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-r from-slate-100 to-indigo-50 rounded-[2rem] -z-10 blur-xl opacity-50"></div>
<div className="bg-white border border-slate-200 rounded-xl shadow-sm p-2">
<div className="bg-slate-50 rounded-lg border border-slate-100 p-8 flex flex-col items-center justify-center min-h-[320px] text-center">
<div className="w-16 h-16 bg-white rounded-full shadow-sm mb-4 flex items-center justify-center text-indigo-600">
<iconify-icon className="text-3xl" icon="solar:chart-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-3xl font-semibold text-slate-900 tracking-tight mb-2">+40%</div>
<p className="text-sm text-slate-500">Average increase in leads with a dedicated landing page.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="services">
<div className="max-w-6xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Everything you need to launch</h2>
<p className="text-slate-500">I handle the design, code, and technical setup so you can focus on your business.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="group p-8 bg-white border border-slate-200 rounded-2xl hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-900 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:pallete-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2">Custom Conversion Design</h3>
<p className="text-sm text-slate-500 leading-relaxed">No generic templates. A design tailored to your brand identity that builds trust instantly.</p>
</div>
<div className="group p-8 bg-white border border-slate-200 rounded-2xl hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-900 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:smartphone-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2">Mobile-First Layout</h3>
<p className="text-sm text-slate-500 leading-relaxed">Over 60% of traffic is mobile. Your page will look and function perfectly on any device.</p>
</div>
<div className="group p-8 bg-white border border-slate-200 rounded-2xl hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-900 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2">Speed &amp; SEO Basics</h3>
<p className="text-sm text-slate-500 leading-relaxed">Blazing fast loading times and proper meta tags to help you rank on Google.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="work">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Recent Work</h2>
<p className="text-slate-500 max-w-md">Real landing pages delivering real results. Click to view full demo pages.</p>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group cursor-pointer" onclick="showPage('page-finance')">
<div className="aspect-[4/3] bg-white rounded-xl border border-slate-200 overflow-hidden mb-4 relative shadow-sm hover:shadow-md transition-shadow">
<div className="absolute inset-0 bg-slate-50 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
<div className="bg-white px-6 py-2 rounded shadow-sm flex flex-col items-center gap-2">
<iconify-icon className="text-2xl text-slate-400" icon="solar:wallet-money-linear"></iconify-icon>
<span className="text-xs font-semibold tracking-widest text-slate-400">FINTECH</span>
</div>
</div>
</div>
<h3 className="text-base font-medium text-slate-900 group-hover:text-indigo-600 transition-colors">FinanceCoach App</h3>
<p className="text-sm text-slate-500 mt-1">Lead gen for a financial consultant.</p>
</div>

<div className="group cursor-pointer" onclick="showPage('page-saas')">
<div className="aspect-[4/3] bg-white rounded-xl border border-slate-200 overflow-hidden mb-4 relative shadow-sm hover:shadow-md transition-shadow">
<div className="absolute inset-0 bg-slate-900 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
<div className="bg-white/10 backdrop-blur px-6 py-2 rounded border border-white/20 flex flex-col items-center gap-2">
<iconify-icon className="text-2xl text-indigo-300" icon="solar:code-circle-linear"></iconify-icon>
<span className="text-xs font-semibold tracking-widest text-indigo-200">SAAS</span>
</div>
</div>
</div>
<h3 className="text-base font-medium text-slate-900 group-hover:text-indigo-600 transition-colors">SaaS Waitlist Page</h3>
<p className="text-sm text-slate-500 mt-1">Early access page for AI startup.</p>
</div>

<div className="group cursor-pointer" onclick="showPage('page-yoga')">
<div className="aspect-[4/3] bg-white rounded-xl border border-slate-200 overflow-hidden mb-4 relative shadow-sm hover:shadow-md transition-shadow">
<div className="absolute inset-0 bg-[#F5F5F4] flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
<div className="bg-white px-6 py-2 rounded shadow-sm flex flex-col items-center gap-2">
<iconify-icon className="text-2xl text-emerald-600/60" icon="solar:leaf-linear"></iconify-icon>
<span className="text-xs font-semibold tracking-widest text-emerald-600/60">WELLNESS</span>
</div>
</div>
</div>
<h3 className="text-base font-medium text-slate-900 group-hover:text-indigo-600 transition-colors">Yoga Retreat</h3>
<p className="text-sm text-slate-500 mt-1">Booking landing page for instructor.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-4xl mx-auto">
<div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-center md:text-left relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
<div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
<div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-6">Why work with me?</h2>
<p className="text-slate-400 text-sm leading-relaxed mb-8">
                                Unlike agencies that overcharge and take weeks, I work directly with you to ship fast. My goal is to get your offer live and converting.
                            </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-indigo-400 text-lg" icon="solar:clock-circle-linear"></iconify-icon>
                                    Delivery in 3–5 days
                                </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-indigo-400 text-lg" icon="solar:chat-round-line-linear"></iconify-icon>
                                    Direct WhatsApp Communication
                                </li>
</ul>
</div>
<div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm" id="about">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-400">
<iconify-icon className="text-2xl" icon="solar:user-linear"></iconify-icon>
</div>
<div>
<h3 className="text-white font-medium text-sm">Alex Developer</h3>
<p className="text-slate-500 text-xs">Freelance Web Specialist</p>
</div>
</div>
<p className="text-slate-300 text-xs leading-relaxed italic">
                                "I build websites that pay for themselves. I've helped 20+ clients launch their offers online with simple, clean code."
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100" id="contact">
<div className="max-w-md mx-auto px-6">
<div className="text-center mb-10">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-3">Let's build your page</h2>
<p className="text-slate-500 text-sm">Fill out the form below or chat directly on WhatsApp.</p>
</div>
<form className="space-y-4" onsubmit="event.preventDefault();">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700 ml-1">Name</label>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all" id="contact-name" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700 ml-1">Email</label>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all" id="contact-email" placeholder="john@company.com" type="email"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700 ml-1">Message</label>
<textarea className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all resize-none" id="contact-message" placeholder="Tell me about your business..." rows="4"></textarea>
</div>

<button className="w-full py-3.5 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2 mt-4 shadow-lg shadow-slate-900/10" id="btn-initial" onclick="handleContactOptions()" type="button">
                        Book a Free Call
                    </button>

<div className="hidden flex-col sm:flex-row gap-3 mt-4 animate-fade-in-up" id="btn-options">
<a className="flex-1 py-3.5 bg-[#25D366] text-white text-sm font-medium rounded-lg hover:bg-[#22c55e] transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-900/10" href="#" id="link-whatsapp" target="_blank">
<iconify-icon className="text-lg" icon="solar:chat-round-line-linear"></iconify-icon>
                            WhatsApp
                        </a>
<a className="flex-1 py-3.5 bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2" href="#" id="link-email">
<iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon>
                            Email
                        </a>
</div>
</form>
</div>
</section>

<footer className="py-12 bg-white text-center border-t border-slate-100">
<div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-6">
<a className="text-sm font-semibold tracking-tighter text-slate-900 flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity" href="#" onclick="showPage('page-home')">
<div className="w-5 h-5 bg-slate-900 rounded-md flex items-center justify-center text-white text-[10px] font-bold">L</div>
                    LANDINGDEV
                </a>
<p className="text-xs text-slate-400">© 2023 LandingDev. Built for conversion.</p>
</div>
</footer>
</div>



<div className="page-section bg-slate-50 min-h-screen" id="page-finance">

<button className="fixed top-6 left-6 z-50 bg-white/90 backdrop-blur border border-slate-200 text-slate-600 px-4 py-2 rounded-full text-xs font-medium shadow-lg hover:bg-slate-50 flex items-center gap-2" onclick="showPage('page-home')">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Back to Portfolio
        </button>
<nav className="bg-white border-b border-slate-200 px-6 py-4">
<div className="max-w-5xl mx-auto flex justify-between items-center">
<span className="text-lg font-bold text-slate-800 tracking-tight flex items-center gap-2">
<iconify-icon className="text-blue-600" icon="solar:wallet-money-bold"></iconify-icon> Finance<span className="text-blue-600">Coach</span>
</span>
<button className="px-5 py-2 bg-blue-600 text-white text-xs font-semibold rounded hover:bg-blue-700 transition">Client Login</button>
</div>
</nav>
<header className="pt-20 pb-20 px-6 bg-white">
<div className="max-w-3xl mx-auto text-center">
<span className="text-blue-600 font-semibold text-xs tracking-widest uppercase mb-4 block">Personal Wealth Management</span>
<h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight mb-6">Stop wondering where your money goes.</h1>
<p className="text-lg text-slate-500 mb-8 leading-relaxed">
                    Gain control of your financial future with personalized coaching sessions. No confusing jargon, just actionable plans to grow your wealth.
                </p>
<div className="flex flex-col sm:flex-row gap-3 justify-center">
<button className="px-8 py-4 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all">Book Free Strategy Call</button>
<button className="px-8 py-4 bg-white border border-slate-200 text-slate-600 text-sm font-semibold rounded-lg hover:bg-slate-50 transition-all">Read Success Stories</button>
</div>
</div>
</header>
<section className="py-16 px-6">
<div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
<div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
<div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4"><iconify-icon className="text-xl" icon="solar:chart-square-linear"></iconify-icon></div>
<h3 className="text-slate-900 font-semibold mb-2">Audit</h3>
<p className="text-sm text-slate-500">Deep dive into your current spending habits and debts.</p>
</div>
<div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
<div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4"><iconify-icon className="text-xl" icon="solar:shield-check-linear"></iconify-icon></div>
<h3 className="text-slate-900 font-semibold mb-2">Plan</h3>
<p className="text-sm text-slate-500">Create a realistic budget that lets you enjoy life while saving.</p>
</div>
<div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
<div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4"><iconify-icon className="text-xl" icon="solar:graph-up-new-linear"></iconify-icon></div>
<h3 className="text-slate-900 font-semibold mb-2">Grow</h3>
<p className="text-sm text-slate-500">Investment strategies tailored to your risk tolerance.</p>
</div>
</div>
</section>
<footer className="bg-white border-t border-slate-200 py-8 text-center text-xs text-slate-400">
            © 2023 FinanceCoach Demo.
        </footer>
</div>



<div className="page-section bg-slate-950 text-slate-300 min-h-screen" id="page-saas">
<button className="fixed top-6 left-6 z-50 bg-slate-800/80 backdrop-blur border border-slate-700 text-slate-300 px-4 py-2 rounded-full text-xs font-medium hover:bg-slate-700 flex items-center gap-2" onclick="showPage('page-home')">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Back
        </button>
<div className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>
<div className="relative z-10 max-w-2xl text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-medium text-indigo-400 mb-8">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                    Private Beta Access
                </div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">
                    Automate your <br/> workflow with AI.
                </h1>
<p className="text-lg text-slate-400 mb-10 font-light max-w-lg mx-auto">
                    Stop writing boilerplate code. Our engine learns your style and completes your backend in seconds.
                </p>
<form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto w-full">
<input className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-600" placeholder="enter@email.com" type="email"/>
<button className="bg-white text-slate-950 px-6 py-3 rounded-lg text-sm font-semibold hover:bg-slate-200 transition-colors">
                        Join Waitlist
                    </button>
</form>
<div className="mt-12 flex items-center justify-center gap-6 text-xs text-slate-600">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon> No credit card
                    </div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon> 14-day free trial
                    </div>
</div>
</div>
</div>
</div>



<div className="page-section bg-[#F5F5F4] text-[#44403C] min-h-screen" id="page-yoga">
<button className="fixed top-6 left-6 z-50 bg-white/50 backdrop-blur border border-[#E7E5E4] text-[#57534E] px-4 py-2 rounded-full text-xs font-medium hover:bg-white flex items-center gap-2" onclick="showPage('page-home')">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Back
        </button>
<div className="max-w-6xl mx-auto px-6 py-12">
<nav className="flex justify-center mb-16">
<span className="font-serif text-2xl tracking-wide italic text-[#57534E]">Sanctuary.</span>
</nav>
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="order-2 md:order-1">
<span className="text-xs font-medium tracking-[0.2em] text-[#A8A29E] uppercase mb-4 block">October 14-20, Bali</span>
<h1 className="text-4xl md:text-5xl font-serif leading-tight mb-6 text-[#292524]">
                        Reconnect with nature,<br/> reconnect with yourself.
                    </h1>
<p className="text-[#78716C] mb-8 leading-relaxed font-light max-w-md">
                        A 7-day immersive experience in the heart of Ubud. Daily meditation, vinyasa flow, and plant-based nutrition designed to reset your nervous system.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="px-8 py-3 bg-[#57534E] text-[#F5F5F4] text-sm rounded-full hover:bg-[#292524] transition-colors">Reserve Your Spot</button>
<button className="px-8 py-3 border border-[#D6D3D1] text-[#57534E] text-sm rounded-full hover:bg-white transition-colors">Download Brochure</button>
</div>
<div className="mt-12 flex gap-8 border-t border-[#E7E5E4] pt-8">
<div>
<span className="block text-2xl font-serif text-[#292524]">07</span>
<span className="text-xs text-[#A8A29E] uppercase tracking-wider">Days</span>
</div>
<div>
<span className="block text-2xl font-serif text-[#292524]">12</span>
<span className="text-xs text-[#A8A29E] uppercase tracking-wider">Workshops</span>
</div>
<div>
<span className="block text-2xl font-serif text-[#292524]">15</span>
<span className="text-xs text-[#A8A29E] uppercase tracking-wider">Spots Left</span>
</div>
</div>
</div>
<div className="order-1 md:order-2 relative">
<div className="aspect-[3/4] rounded-[2rem] overflow-hidden bg-[#E7E5E4] relative">

<div className="absolute inset-0 bg-gradient-to-b from-[#D6D3D1] to-[#E7E5E4] flex items-center justify-center">
<iconify-icon className="text-6xl text-white opacity-50" icon="solar:leaf-linear"></iconify-icon>
</div>

<div className="absolute bottom-8 left-8 right-8 bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-white/50">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#F5F5F4] flex items-center justify-center text-[#57534E]">
<iconify-icon icon="solar:user-heart-linear"></iconify-icon>
</div>
<div>
<p className="text-xs font-semibold text-[#292524]">"Life changing experience."</p>
<p className="text-[10px] text-[#78716C]">Sarah M. — 2022 Attendee</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
