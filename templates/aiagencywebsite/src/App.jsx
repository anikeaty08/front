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

        // Audio Visualizer Animation (Pure CSS/JS simulation)
        const vizContainer = document.getElementById('audio-viz');
        for(let i=0; i<20; i++) {
            const bar = document.createElement('div');
            bar.className = 'w-1.5 bg-purple-500 rounded-full transition-all duration-300';
            bar.style.height = Math.max(10, Math.random() * 100) + '%';
            bar.style.opacity = '0.7';
            vizContainer.appendChild(bar);
        }
        
        setInterval(() => {
            const bars = vizContainer.children;
            for(let bar of bars) {
                bar.style.height = Math.max(20, Math.random() * 100) + '%';
            }
        }, 200);

        // SPA Navigation Logic
        function showPage(pageName) {
            // Hide all pages
            document.querySelectorAll('.page-section').forEach(el => {
                el.classList.add('hidden');
            });
            
            // Remove active state from nav
            document.querySelectorAll('.nav-link').forEach(el => {
                el.classList.remove('text-white');
                el.classList.add('text-slate-400');
            });

            // Show selected page
            const selectedPage = document.getElementById('page-' + pageName);
            if(selectedPage) {
                selectedPage.classList.remove('hidden');
                // Trigger animation reset
                selectedPage.classList.remove('fade-in');
                void selectedPage.offsetWidth; // trigger reflow
                selectedPage.classList.add('fade-in');
                window.scrollTo(0, 0);
            }

            // Set active nav state
            const activeNav = document.getElementById('nav-' + pageName);
            if(activeNav) {
                activeNav.classList.remove('text-slate-400');
                activeNav.classList.add('text-white');
            }
        }

        // Default Load
        // showPage('home') is default by HTML structure
    
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
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px]"></div>
<div className="absolute inset-0 grid-bg"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#020410]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white font-semibold text-lg tracking-tight flex items-center gap-2 group" href="#" onclick="showPage('home')">
<div className="w-8 h-8 rounded bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="bot"></i>
</div>
<span className="tracking-tighter">NEXUS<span className="text-slate-500">AI</span></span>
</a>
<div className="hidden md:flex items-center gap-8">
<button className="text-sm font-medium hover:text-white transition-colors nav-link text-white" id="nav-home" onclick="showPage('home')">Overview</button>
<button className="text-sm font-medium hover:text-white transition-colors nav-link" id="nav-voice" onclick="showPage('voice')">Voice Agents</button>
<button className="text-sm font-medium hover:text-white transition-colors nav-link" id="nav-web" onclick="showPage('web')">Web Agents</button>
</div>
<a className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white text-xs font-medium border border-white/10 transition-all" href="#contact">
                Book Discovery Call
                <i className="w-3 h-3" data-lucide="arrow-right"></i>
</a>

<button className="md:hidden text-white"><i className="w-6 h-6" data-lucide="menu"></i></button>
</div>
</nav>

<main className="pt-24 pb-20">

<div className="page-section px-6" id="page-home">

<section className="max-w-7xl mx-auto text-center py-20 lg:py-32 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                    AI Agency for Modern Business
                </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white mb-8">
                    The workforce that <br/>
<span className="text-gradient">never sleeps.</span>
</h1>
<p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Deploy intelligent Voice and Web Agents that handle inquiries, book appointments, and close deals 24/7. Cut costs, not quality.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="px-8 py-4 rounded-full bg-white text-black font-semibold text-sm hover:bg-slate-200 transition-colors w-full sm:w-auto" href="#contact">
                        Book Discovery Call
                    </a>
<button className="px-8 py-4 rounded-full glass text-white font-medium text-sm hover:bg-white/10 transition-colors w-full sm:w-auto flex items-center justify-center gap-2" onclick="showPage('voice')">
                        Explore Agents <i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
</div>
</section>

<section className="max-w-5xl mx-auto mb-32">
<div className="grid md:grid-cols-2 gap-8">

<div className="glass p-8 rounded-2xl border-l-4 border-red-500/50 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<i className="w-24 h-24" data-lucide="user-x"></i>
</div>
<h3 className="text-xl text-white font-medium tracking-tight mb-6">Traditional Receptionist</h3>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm">
<i className="text-red-500 w-4 h-4" data-lucide="x"></i>
                                Average Salary: <span className="text-slate-200">£30,000 / year</span>
</li>
<li className="flex items-center gap-3 text-sm">
<i className="text-red-500 w-4 h-4" data-lucide="clock"></i>
                                Availability: 9 AM - 5 PM (Mon-Fri)
                            </li>
<li className="flex items-center gap-3 text-sm">
<i className="text-red-500 w-4 h-4" data-lucide="battery-warning"></i>
                                Sick days &amp; Holidays
                            </li>
<li className="flex items-center gap-3 text-sm">
<i className="text-red-500 w-4 h-4" data-lucide="phone-missed"></i>
                                Missed calls during busy hours
                            </li>
</ul>
</div>

<div className="glass p-8 rounded-2xl border-l-4 border-indigo-500 relative overflow-hidden bg-indigo-500/5 group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<i className="w-24 h-24 text-indigo-400" data-lucide="zap"></i>
</div>
<h3 className="text-xl text-white font-medium tracking-tight mb-6">Nexus AI Agent</h3>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm">
<div className="bg-green-500/20 p-1 rounded-full"><i className="text-green-500 w-3 h-3" data-lucide="check"></i></div>
                                Cost: <span className="text-white font-medium">Fraction of a salary</span>
</li>
<li className="flex items-center gap-3 text-sm">
<div className="bg-green-500/20 p-1 rounded-full"><i className="text-green-500 w-3 h-3" data-lucide="check"></i></div>
                                Availability: <span className="text-white font-medium">24/7/365</span>
</li>
<li className="flex items-center gap-3 text-sm">
<div className="bg-green-500/20 p-1 rounded-full"><i className="text-green-500 w-3 h-3" data-lucide="check"></i></div>
                                Zero downtime, Instant scaling
                            </li>
<li className="flex items-center gap-3 text-sm">
<div className="bg-green-500/20 p-1 rounded-full"><i className="text-green-500 w-3 h-3" data-lucide="check"></i></div>
                                Handles 100+ concurrent calls
                            </li>
</ul>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto mb-32">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Complete Automation Ecosystem</h2>
<p className="text-slate-400">Choose the right agent for your channel.</p>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="cursor-pointer glass glass-card p-10 rounded-3xl transition-all duration-300 group" onclick="showPage('voice')">
<div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="mic"></i>
</div>
<h3 className="text-2xl text-white font-medium tracking-tight mb-2">Voice Agents</h3>
<p className="text-slate-400 text-sm mb-6 leading-relaxed">
                            Hyper-realistic AI that speaks naturally. Perfect for inbound customer support, outbound lead qualification, and appointment setting.
                        </p>
<span className="text-purple-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">Learn more <i className="w-4 h-4" data-lucide="arrow-right"></i></span>
</div>

<div className="cursor-pointer glass glass-card p-10 rounded-3xl transition-all duration-300 group" onclick="showPage('web')">
<div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="message-square"></i>
</div>
<h3 className="text-2xl text-white font-medium tracking-tight mb-2">Web Agents</h3>
<p className="text-slate-400 text-sm mb-6 leading-relaxed">
                            Intelligent chatbots embedded on your site. They don't just answer FAQs—they capture leads, recommend products, and book services.
                        </p>
<span className="text-blue-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">Learn more <i className="w-4 h-4" data-lucide="arrow-right"></i></span>
</div>
</div>
</section>
</div>

<div className="page-section hidden px-6 fade-in" id="page-voice">
<section className="max-w-7xl mx-auto py-12">
<div className="mb-12">
<button className="text-sm text-slate-500 hover:text-white flex items-center gap-2 mb-8 transition-colors" onclick="showPage('home')">
<i className="w-4 h-4" data-lucide="arrow-left"></i> Back to Home
                    </button>
<div className="flex flex-col lg:flex-row gap-12 items-center">
<div className="lg:w-1/2">
<h1 className="text-4xl md:text-6xl font-medium tracking-tighter text-white mb-6">
                                Human-like <span className="text-purple-400">Voice Agents</span>
</h1>
<p className="text-lg text-slate-400 mb-8 leading-relaxed">
                                Our Voice Agents are indistinguishable from humans. They breathe, pause, and understand context. Implementation takes days, not months.
                            </p>
<div className="flex gap-4">
<div className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-lg text-purple-300 text-xs font-mono">Lat: &lt;500ms</div>
<div className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-lg text-purple-300 text-xs font-mono">Uptime: 99.9%</div>
</div>
</div>
<div className="lg:w-1/2 w-full">

<div className="glass p-8 rounded-2xl relative overflow-hidden bg-gradient-to-b from-white/5 to-transparent">
<div className="flex justify-center items-end gap-1 h-32 mb-6" id="audio-viz">

</div>
<div className="flex items-center justify-center gap-4">
<div className="h-12 w-12 rounded-full bg-white text-black flex items-center justify-center">
<i className="w-5 h-5 ml-1" data-lucide="play"></i>
</div>
<div className="text-sm">
<div className="text-white font-medium">Real Estate Booking Demo</div>
<div className="text-slate-500">00:45 / 02:30</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid md:grid-cols-3 gap-6 mb-20">
<div className="glass p-6 rounded-xl border-t border-white/10">
<div className="mb-4 text-purple-400"><i className="w-8 h-8" data-lucide="home"></i></div>
<h3 className="text-lg text-white font-medium mb-2">Real Estate</h3>
<p className="text-sm text-slate-400">Agents qualify leads instantly, check calendar availability for viewings, and sync directly to your CRM.</p>
</div>
<div className="glass p-6 rounded-xl border-t border-white/10">
<div className="mb-4 text-purple-400"><i className="w-8 h-8" data-lucide="wrench"></i></div>
<h3 className="text-lg text-white font-medium mb-2">Plumbers &amp; Trades</h3>
<p className="text-sm text-slate-400">Never miss an emergency job. The agent dispatches urgent requests and books standard maintenance while you work.</p>
</div>
<div className="glass p-6 rounded-xl border-t border-white/10">
<div className="mb-4 text-purple-400"><i className="w-8 h-8" data-lucide="utensils"></i></div>
<h3 className="text-lg text-white font-medium mb-2">Restaurants</h3>
<p className="text-sm text-slate-400">Handle reservation surges on Friday nights without distracting staff. Manages large party inquiries seamlessly.</p>
</div>
</div>
</section>
</div>

<div className="page-section hidden px-6 fade-in" id="page-web">
<section className="max-w-7xl mx-auto py-12">
<div className="mb-12">
<button className="text-sm text-slate-500 hover:text-white flex items-center gap-2 mb-8 transition-colors" onclick="showPage('home')">
<i className="w-4 h-4" data-lucide="arrow-left"></i> Back to Home
                    </button>
<div className="flex flex-col lg:flex-row gap-12 items-center">
<div className="lg:w-1/2">
<h1 className="text-4xl md:text-6xl font-medium tracking-tighter text-white mb-6">
                                Intelligent <span className="text-blue-400">Web Agents</span>
</h1>
<p className="text-lg text-slate-400 mb-8 leading-relaxed">
                                Turn your website traffic into revenue. Our Web Agents don't just chat; they browse your inventory, answer complex queries, and execute actions.
                            </p>
<ul className="space-y-2 text-sm text-slate-300">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-blue-500" data-lucide="check-circle"></i> Easy embed (1 line of code)</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-blue-500" data-lucide="check-circle"></i> Trained on your specific data</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-blue-500" data-lucide="check-circle"></i> Multilingual support instantly</li>
</ul>
</div>
<div className="lg:w-1/2 w-full">

<div className="glass rounded-2xl overflow-hidden border border-white/10 max-w-md mx-auto">
<div className="bg-white/5 p-4 flex items-center gap-3 border-b border-white/5">
<div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">AI</div>
<div className="text-sm font-medium text-white">Support Agent</div>
</div>
<div className="p-6 space-y-4 h-64 overflow-hidden relative">
<div className="flex gap-3">
<div className="bg-white/10 p-3 rounded-lg rounded-tl-none text-xs text-slate-200 max-w-[80%]">
                                            Hello! How can I help you with your property search today?
                                        </div>
</div>
<div className="flex gap-3 justify-end">
<div className="bg-blue-600 p-3 rounded-lg rounded-tr-none text-xs text-white max-w-[80%]">
                                            I'm looking for a 2-bed apartment in downtown.
                                        </div>
</div>
<div className="flex gap-3">
<div className="bg-white/10 p-3 rounded-lg rounded-tl-none text-xs text-slate-200 max-w-[80%]">
                                            I have 3 listings available. Would you like to schedule a viewing for this Thursday?
                                        </div>
</div>

<div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0b1021] to-transparent"></div>
</div>
<div className="p-4 border-t border-white/5">
<div className="h-10 bg-white/5 rounded-full w-full"></div>
</div>
</div>
</div>
</div>
</div>

<div className="grid md:grid-cols-3 gap-6 mb-20">
<div className="glass p-6 rounded-xl border-t border-white/10">
<div className="mb-4 text-blue-400"><i className="w-8 h-8" data-lucide="shopping-bag"></i></div>
<h3 className="text-lg text-white font-medium mb-2">E-Commerce</h3>
<p className="text-sm text-slate-400">Reduce cart abandonment by answering shipping questions instantly and offering personalized discounts.</p>
</div>
<div className="glass p-6 rounded-xl border-t border-white/10">
<div className="mb-4 text-blue-400"><i className="w-8 h-8" data-lucide="calendar"></i></div>
<h3 className="text-lg text-white font-medium mb-2">Service Booking</h3>
<p className="text-sm text-slate-400">Direct integration with your calendar (Calendly, Cal.com) to book appointments without human intervention.</p>
</div>
<div className="glass p-6 rounded-xl border-t border-white/10">
<div className="mb-4 text-blue-400"><i className="w-8 h-8" data-lucide="help-circle"></i></div>
<h3 className="text-lg text-white font-medium mb-2">SaaS Support</h3>
<p className="text-sm text-slate-400">Troubleshoot technical issues by referencing documentation, reducing ticket volume by up to 70%.</p>
</div>
</div>
</section>
</div>

<section className="px-6 py-20 relative" id="contact">
<div className="max-w-4xl mx-auto glass rounded-3xl p-10 md:p-16 text-center border-t border-white/10 overflow-hidden relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-indigo-500/10 to-transparent -z-10"></div>
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tighter mb-6">Ready to scale your business?</h2>
<p className="text-slate-400 mb-8 max-w-lg mx-auto">
                    Stop losing leads to missed calls and slow responses. Implement Nexus AI agents today for a fraction of the cost of a receptionist.
                </p>
<form className="max-w-md mx-auto space-y-4" onsubmit="event.preventDefault(); alert('Thank you! We will contact you shortly.');">
<div className="grid grid-cols-2 gap-4">
<input className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Name" type="text"/>
<input className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Email" type="email"/>
</div>
<select className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-slate-400 focus:outline-none focus:border-indigo-500 transition-colors appearance-none">
<option>Interested in Voice Agents</option>
<option>Interested in Web Agents</option>
<option>Both</option>
</select>
<button className="w-full bg-white text-black font-semibold rounded-lg px-4 py-3 text-sm hover:bg-slate-200 transition-colors" type="submit">
                        Book Discovery Call
                    </button>
</form>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-[#020410] pt-12 pb-8 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white">
<i className="w-4 h-4" data-lucide="bot"></i>
</div>
<span className="text-white font-semibold tracking-tighter">NEXUS AI</span>
</div>
<div className="flex gap-8 text-sm text-slate-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
<div className="text-xs text-slate-600">
                © 2023 Nexus AI Agency. All rights reserved.
            </div>
</div>
</footer>


    </>
  );
}
