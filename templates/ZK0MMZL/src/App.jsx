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



        // Initialize Lucide icons
        lucide.createIcons();
        
        // Card navigation system
        const cardsContainer = document.querySelector('.cards-section');
        const cards = document.querySelectorAll('.feature-card');
        const navButtons = document.querySelectorAll('[id^="nav-"]');
        let activeFeature = 1;
        
        // Touch/drag handling
        cards.forEach((card, index) => {
            let startX, isDragging = false;
            
            card.addEventListener('mousedown', e => initDrag(e, index + 1));
            card.addEventListener('touchstart', e => {
                e.preventDefault();
                initDrag(e.touches[0], index + 1);
            });
            
            function initDrag(e, featureId) {
                if (featureId !== activeFeature) return;
                isDragging = true;
                startX = e.clientX;
                
                document.addEventListener('mousemove', handleDrag);
                document.addEventListener('touchmove', e => handleDrag(e.touches[0]));
                document.addEventListener('mouseup', endDrag);
                document.addEventListener('touchend', endDrag);
            }
            
            function handleDrag(e) {
                if (!isDragging) return;
                const diff = e.clientX - startX;
                
                if (diff > 20) {
                    card.classList.add('dragging-right');
                    card.classList.remove('dragging-left');
                } else if (diff < -20) {
                    card.classList.add('dragging-left');
                    card.classList.remove('dragging-right');
                } else {
                    card.classList.remove('dragging-left', 'dragging-right');
                }
            }
            
            function endDrag() {
                if (!isDragging) return;
                isDragging = false;
                
                if (card.classList.contains('dragging-right')) {
                    switchToFeature(activeFeature === 1 ? 4 : activeFeature - 1);
                } else if (card.classList.contains('dragging-left')) {
                    switchToFeature(activeFeature === 4 ? 1 : activeFeature + 1);
                }
                
                card.classList.remove('dragging-left', 'dragging-right');
                document.removeEventListener('mousemove', handleDrag);
                document.removeEventListener('touchmove', handleDrag);
                document.removeEventListener('mouseup', endDrag);
                document.removeEventListener('touchend', endDrag);
            }
        });
        
        // Navigation button handling
        navButtons.forEach(button => {
            button.addEventListener('click', () => {
                const featureId = parseInt(button.id.split('-')[1]);
                switchToFeature(featureId);
            });
        });
        
        function switchToFeature(featureId) {
            activeFeature = featureId;
            cardsContainer.className = `cards-section feature-${featureId}-active`;
            
            // Update navigation buttons
            navButtons.forEach((button, index) => {
                if (index + 1 === featureId) {
                    button.className = 'w-3 h-3 rounded-full bg-white transition-all scale-125';
                } else {
                    button.className = 'w-3 h-3 rounded-full bg-gray-500 hover:bg-gray-300 transition-all';
                }
            });
        }
        
        // Auto-advance cards every 5 seconds
        setInterval(() => {
            const nextFeature = activeFeature === 4 ? 1 : activeFeature + 1;
            switchToFeature(nextFeature);
        }, 5000);
    
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
      <iframe className="fixed top-0 w-full h-screen" frameborder="0" height="100%" src="https://my.spline.design/binarymaterialcopy-uzQoq9YUCPK8Sqz8n9uP5qMO" width="100%"></iframe>

<header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 backdrop-blur-md bg-slate-900/80">
<div className="max-w-7xl mx-auto px-6 py-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-xl font-semibold tracking-tight font-sans">FlowSpace</span>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-gray-300 hover:text-white transition-colors font-sans" href="#">Features</a>
<a className="text-sm font-medium text-gray-300 hover:text-white transition-colors font-sans" href="#">Pricing</a>
<a className="text-sm font-medium text-gray-300 hover:text-white transition-colors font-sans" href="#">About</a>
<button className="bg-white text-slate-900 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors font-sans">
                        Get Started
                    </button>
</nav>
</div>
</div>
</header>

<section className="hero-gradient min-h-screen flex items-center pt-20">
<div className="max-w-7xl mx-auto px-6 py-12 z-10 relative">
<div className="grid lg:grid-cols-2 gap-12 items-center">

<div className="space-y-8">
<div className="space-y-2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
<span className="text-xs font-medium text-gray-300 uppercase tracking-wide font-sans">Platform Overview</span>
</div>
<h1 className="lg:text-7xl gradient-text text-5xl tracking-tighter font-manrope" style={{}}>
                            Transform Your
                            <span className="block tracking-tighter font-manrope" style={{}}>Workflow</span>
</h1>
<p className="max-w-lg text-3xl font-light text-gray-300">
                            Powerful tools that adapt to your team's unique needs. Drag through our features to discover what makes FlowSpace different.
                        </p>
</div>

<div className="flex items-center gap-3">
<button className="w-3 h-3 rounded-full bg-white transition-all scale-125" id="nav-1"></button>
<button className="w-3 h-3 rounded-full bg-gray-500 hover:bg-gray-300 transition-all" id="nav-2"></button>
<button className="w-3 h-3 rounded-full bg-gray-500 hover:bg-gray-300 transition-all" id="nav-3"></button>
<button className="w-3 h-3 rounded-full bg-gray-500 hover:bg-gray-300 transition-all" id="nav-4"></button>
</div>

<div className="space-y-4" id="feature-details">
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-blue-400 rounded-full"></div>
<span className="text-gray-300 font-sans">Smart collaboration tools</span>
</div>
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-purple-400 rounded-full"></div>
<span className="text-gray-300 font-sans">AI-powered insights</span>
</div>
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-green-400 rounded-full"></div>
<span className="text-gray-300 font-sans">Seamless integrations</span>
</div>
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
<span className="text-gray-300 font-sans">Advanced analytics</span>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-4" style={{position: 'relative'}}>
<button className="button font-sans relative font-medium px-6 py-3 text-base font-normal text-[#f4f0ff] rounded-lg cursor-pointer select-none" style={{padding: '1rem 2rem', fontWeight: '400', fontSize: '1rem', color: '#f4f0ff', border: 'none', textAlign: 'center', borderRadius: '0.5rem', position: 'relative', cursor: 'pointer'}}>
        Start Free Trial
        <span className="button-border" style={{position: 'absolute', top: '0', left: '0', height: '100%', width: '100%', borderRadius: '0.5rem', zIndex: '-1', pointerEvents: 'none'}}>
<span style={{content: '\'\'', position: 'absolute', borderRadius: '0.5rem', padding: '1px', inset: '0', background: 'linear-gradient(180deg, rgba(184, 238, 255, 0.24) 0%, rgba(184, 238, 255, 0) 100%), linear-gradient(0deg, rgba(184, 238, 255, 0.32), rgba(184, 238, 255, 0.32))', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor'}}></span>
</span>
<style>
            #aura-emcna3j5o button.button::before {
                content: "";
                display: block;
                position: absolute;
                left: 0;
                top: 0;
                height: 100%;
                width: 100%;
                border-radius: 0.5rem;
                background: linear-gradient(180deg, rgba(8, 77, 126, 0) 0%, rgba(8, 77, 126, 0.42) 100%), rgba(47, 255, 255, 0.24);
                box-shadow: inset 0 0 12px rgba(151, 200, 255, 0.44);
                z-index: -1;
            }
            #aura-emcna3j5o button.button::after {
                content: "";
                display: block;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(180deg, rgba(8, 77, 126, 0) 0%, rgba(8, 77, 126, 0.42) 100%), rgba(47, 255, 255, 0.24);
                box-shadow: inset 0 0 12px rgba(151, 200, 255, 0.44);
                border-radius: 0.5rem;
                opacity: 0;
                z-index: -1;
                transition: all 0.3s ease-in;
            }
            #aura-emcna3j5o button.button:hover::after {
                opacity: 1;
            }
        </style>
</button>
<button className="button font-sans relative font-medium px-6 py-3 text-base font-normal text-[#0f172a] bg-white rounded-lg cursor-pointer select-none border border-transparent transition-colors hover:bg-gray-100" style={{padding: '1rem 2rem', fontWeight: '400', fontSize: '1rem', color: '#0f172a', borderRadius: '0.5rem', position: 'relative', cursor: 'pointer', border: '1px solid transparent'}}>
        Watch Demo
        <span className="button-border" style={{position: 'absolute', top: '0', left: '0', height: '100%', width: '100%', borderRadius: '0.5rem', zIndex: '-1', pointerEvents: 'none'}}>
<span style={{content: '\'\'', position: 'absolute', borderRadius: '0.5rem', padding: '1px', inset: '0', background: 'linear-gradient(180deg, rgba(184, 238, 255, 0.24) 0%, rgba(184, 238, 255, 0) 100%), linear-gradient(0deg, rgba(184, 238, 255, 0.32), rgba(184, 238, 255, 0.32))', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor'}}></span>
</span>
<style>
            #aura-emcna3j5o button.button::before {
                content: "";
                display: block;
                position: absolute;
                left: 0;
                top: 0;
                height: 100%;
                width: 100%;
                border-radius: 0.5rem;
                background: linear-gradient(180deg, rgba(8, 77, 126, 0) 0%, rgba(8, 77, 126, 0.42) 100%), rgba(47, 255, 255, 0.24);
                box-shadow: inset 0 0 12px rgba(151, 200, 255, 0.44);
                z-index: -1;
            }
            #aura-emcna3j5o button.button::after {
                content: "";
                display: block;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(180deg, rgba(8, 77, 126, 0) 0%, rgba(8, 77, 126, 0.42) 100%), rgba(47, 255, 255, 0.24);
                box-shadow: inset 0 0 12px rgba(151, 200, 255, 0.44);
                border-radius: 0.5rem;
                opacity: 0;
                z-index: -1;
                transition: all 0.3s ease-in;
            }
            #aura-emcna3j5o button.button:hover::after {
                opacity: 1;
            }
        </style>
</button>
</div>
</div>

<div className="flex lg:justify-end justify-center" style={{height: '36rem'}}>
<div className="cards-section feature-1-active" style={{height: '36rem'}}>

<div className="feature-card glass-card rounded-2xl p-8 float-animation" style={{height: '36rem'}}>
<div className="flex flex-col h-full">
<div className="flex items-center gap-3 mb-6">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
<svg className="lucide lucide-users w-6 h-6 text-white" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<div className="">
<span className="text-xs uppercase tracking-wide text-gray-300 font-medium font-sans">Collaboration</span>
<h3 className="text-2xl font-manrope tracking-tighter">Team Sync</h3>
</div>
</div>
<p className="flex-1 text-2xl text-gray-300 mb-6">
                    Real-time collaboration that keeps everyone aligned. Share ideas, track progress, and make decisions together.
                </p>
<div className="space-y-3 mb-6">
<div className="flex items-center justify-between text-sm">
<span className="text-gray-400 font-sans">Active Users</span>
<span className="text-white font-medium font-sans">24/7</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-gray-400 font-sans">Response Time</span>
<span className="text-white font-medium font-sans">&lt;100ms</span>
</div>
</div>
<div className="mb-6 text-gray-400 text-sm font-sans space-y-2">
<p></p>
<ul className="list-disc list-inside">
<li className="">Instant messaging and video calls</li>
<li>Shared task boards and calendars</li>
<li className="">Document collaboration in real-time</li>
</ul>
</div>
<button className="w-full py-3 px-4 bg-white/10 hover:bg-white/20 rounded-lg font-medium transition-colors font-sans">
                    Boost team productivity 3x
                </button>
</div>
</div>

<div className="feature-card glass-card rounded-2xl p-8" style={{height: '36rem'}}>
<div className="flex flex-col h-full">
<div className="flex items-center gap-3 mb-6">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
<svg className="lucide lucide-bar-chart-3 w-6 h-6 text-white" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
<div>
<span className="text-xs uppercase tracking-wide text-gray-300 font-medium font-sans">Analytics</span>
<h3 className="text-2xl font-manrope tracking-tighter">Smart Insights</h3>
</div>
</div>
<p className="flex-1 text-gray-300 mb-6 text-2xl">
                    AI-powered analytics that reveal patterns, predict trends, and help you make data-driven decisions.
                </p>
<div className="space-y-3 mb-6">
<div className="flex items-center justify-between text-sm">
<span className="text-gray-400 font-sans">Accuracy Rate</span>
<span className="text-white font-medium font-sans">99.2%</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-gray-400 font-sans">Data Processing</span>
<span className="text-white font-medium font-sans">Real-time</span>
</div>
</div>
<div className="mb-6 text-gray-400 text-sm font-sans space-y-2">
<p></p>
<ul className="list-disc list-inside">
<li>Customizable dashboards</li>
<li>Predictive trend analysis</li>
<li>Exportable reports and alerts</li>
</ul>
</div>
<button className="w-full py-3 px-4 bg-white/10 hover:bg-white/20 rounded-lg font-medium transition-colors font-sans">
                    Get deeper insights
                </button>
</div>
</div>

<div className="feature-card glass-card rounded-2xl p-8" style={{height: '36rem'}}>
<div className="flex flex-col h-full">
<div className="flex items-center gap-3 mb-6">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
<svg className="lucide lucide-bot w-6 h-6 text-white" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<div className="">
<span className="text-xs uppercase tracking-wide text-gray-300 font-medium font-sans">Automation</span>
<h3 className="text-2xl font-manrope tracking-tighter">Smart Workflows</h3>
</div>
</div>
<p className="text-gray-300 mb-6 flex-1 font-sans text-2xl">
                    Intelligent automation that learns from your patterns and handles repetitive tasks automatically.
                </p>
<div className="space-y-3 mb-6">
<div className="flex items-center justify-between text-sm">
<span className="text-gray-400 font-sans">Time Saved</span>
<span className="text-white font-medium font-sans">40 hrs/week</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-gray-400 font-sans">Error Reduction</span>
<span className="text-white font-medium font-sans">95%</span>
</div>
</div>
<div className="mb-6 text-gray-400 text-sm font-sans space-y-2">
<p></p>
<ul className="list-disc list-inside">
<li>Automated task assignment</li>
<li>Rule-based notifications</li>
<li>Integration with calendar and email</li>
</ul>
</div>
<button className="w-full py-3 px-4 bg-white/10 hover:bg-white/20 rounded-lg font-medium transition-colors font-sans">
                    Automate workflows
                </button>
</div>
</div>

<div className="feature-card glass-card rounded-2xl p-8" style={{height: '36rem'}}>
<div className="flex flex-col h-full">
<div className="flex items-center gap-3 mb-6">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
<svg className="lucide lucide-puzzle w-6 h-6 text-white" data-lucide="puzzle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z"></path></svg>
</div>
<div className="">
<span className="text-xs uppercase tracking-wide text-gray-300 font-medium font-sans">Integration</span>
<h3 className="text-2xl font-manrope tracking-tighter">Connect Everything</h3>
</div>
</div>
<p className="text-gray-300 mb-6 flex-1 font-sans text-2xl">
                    Seamlessly connect with 500+ tools and platforms. Create a unified workspace that works the way you do.
                </p>
<div className="space-y-3 mb-6">
<div className="flex items-center justify-between text-sm">
<span className="text-gray-400 font-sans">Supported Apps</span>
<span className="text-white font-medium font-sans">500+</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-gray-400 font-sans">Setup Time</span>
<span className="text-white font-medium font-sans">2 minutes</span>
</div>
</div>
<div className="mb-6 text-gray-400 text-sm font-sans space-y-2">
<p></p>
<ul className="list-disc list-inside">
<li>APIs for custom workflows</li>
<li>Single sign-on support</li>
<li>Cross-platform sync</li>
</ul>
</div>
<button className="w-full py-3 px-4 bg-white/10 hover:bg-white/20 rounded-lg font-medium transition-colors font-sans">
                    Connect your tools
                </button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>


    </>
  );
}
