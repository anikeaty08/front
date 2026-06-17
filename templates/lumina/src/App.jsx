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



        !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
      


        (function() {
          const root = document.currentScript.closest('section[data-element-id="aura-emfzp9hq8"]');
          if (!root) return;

          const toggle = root.querySelector('#billingToggle');
          const thumb = root.querySelector('#toggleThumb');
          const buttons = toggle.querySelectorAll('button[data-plan]');
          const saveBadge = root.querySelector('#saveBadge');
          const priceEls = root.querySelectorAll('[data-price]');
          const termEls = root.querySelectorAll('[data-term]');
          const noteEls = root.querySelectorAll('[data-billing-note]');

          function setPlan(plan) {
            // Update pressed state and styles
            buttons.forEach(btn => {
              const active = btn.getAttribute('data-plan') === plan;
              btn.setAttribute('aria-pressed', active ? 'true' : 'false');
              btn.classList.toggle('text-slate-900', active);
              btn.classList.toggle('text-slate-300', !active);
            });

            // Move thumb
            if (plan === 'monthly') {
              thumb.style.left = 'calc(50% - 92px + 1px)'; // right segment
            } else {
              thumb.style.left = '4px'; // left segment
            }

            // Update prices and labels
            priceEls.forEach(el => {
              const monthly = el.getAttribute('data-monthly');
              const annual = el.getAttribute('data-annual');
              const value = plan === 'annual' ? annual : monthly;
              el.textContent = `$${value}`;
            });
            termEls.forEach(el => el.textContent = plan === 'annual' ? '/year' : '/month');
            noteEls.forEach(el => el.textContent = plan === 'annual' ? 'Billed annually' : 'Pay monthly');

            // Save badge visibility
            if (saveBadge) saveBadge.classList.toggle('hidden', plan !== 'annual');
          }

          // Initialize
          setPlan('monthly');

          // Handlers
          buttons.forEach(btn => {
            btn.addEventListener('click', () => setPlan(btn.getAttribute('data-plan')));
          });
        })();
      


      lucide.createIcons();

      // FAQ Toggle Function
      function toggleFAQ(id) {
          const content = document.getElementById(`content-${id}`);
          const icon = document.getElementById(`icon-${id}`);

          if (content.classList.contains('hidden')) {
              content.classList.remove('hidden');
              icon.style.transform = 'rotate(45deg)';
          } else {
              content.classList.add('hidden');
              icon.style.transform = 'rotate(0deg)';
          }
      }

      // Typing animation for chat
      (function() {
          const responses = [
              "Perfect! I'll create a modern project management dashboard with:",
              "Great choice! Building a comprehensive SaaS platform with:",
              "Excellent! Designing a professional dashboard featuring:",
              "Perfect fit! Creating an intuitive management interface with:"
          ];

          let currentResponseIndex = 0;
          const responseElement = document.getElementById('aiResponse');
          const statusElement = document.getElementById('typingStatus');

          function typeResponse(text, callback) {
              if (!responseElement) return;
              responseElement.innerHTML = '';
              let i = 0;

              function type() {
                  if (i < text.length) {
                      responseElement.innerHTML = text.substring(0, i + 1);
                      i++;
                      setTimeout(type, 40 + Math.random() * 30);
                  } else {
                      if (statusElement) {
                          setTimeout(() => {
                              statusElement.textContent = 'Generation complete';
                              setTimeout(callback, 2000);
                          }, 1000);
                      }
                  }
              }

              if (statusElement) statusElement.textContent = 'Generating your app...';
              setTimeout(type, 800);
          }

          function startNextResponse() {
              typeResponse(responses[currentResponseIndex], () => {
                  currentResponseIndex = (currentResponseIndex + 1) % responses.length;
                  setTimeout(startNextResponse, 1500);
              });
          }

          // Start the loop
          setTimeout(startNextResponse, 2000);
      })();
    
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10">
<div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="OMO2zbNkRGUqAVYhB4jD"></div>

</div>
<div className="relative isolate overflow-hidden">

<header className="max-w-7xl mr-auto ml-auto pt-6 pr-6 pl-6">
<div className="flex items-center justify-between">
<a className="text-xl font-semibold text-white tracking-tight" data-element-id="aura-emg03ade6" href="/home">
            Lumina
          </a>
<nav className="hidden md:flex gap-8 text-sm text-slate-200/80 gap-x-8 gap-y-8 items-center cursor-pointer" onclick="window.location.href='/features'" role="button">
<a className="hover:text-white transition" href="/features">Features</a>
<a className="hover:text-white transition" href="/pricing">Pricing</a>
<a className="hover:text-white transition" data-element-id="aura-emg013kgv" href="/documentation">
              Documentation
            </a>
<button className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-white/10 hover:bg-white/20 ring-1 ring-white/20 rounded-lg transition">
              Start Building
            </button>
</nav>
<button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 5h16"></path>
<path d="M4 12h16"></path>
<path d="M4 19h16"></path>
</svg>
</button>
</div>
</header>

<section className="lg:pt-32 lg:pb-32 max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
<div className="grid lg:grid-cols-12 gap-16 items-center">

<div className="lg:col-span-7">
<div className="opacity-0 blur-sm translate-y-8" style={{animation: 'fadeSlideIn 0.8s ease-out 0.2s forwards'}}>
<div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-teal-300 bg-teal-400/10 ring-1 ring-teal-400/20 rounded-full mb-6">
<svg className="lucide lucide-sparkles h-3 w-3" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
<path d="M20 2v4"></path>
<path d="M22 4h-4"></path>
<circle cx="4" cy="20" r="2"></circle>
</svg>
                AI-Powered Development
              </div>
<h1 className="text-4xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.05] mb-6">
                The AI Concierge That
                <br/>
<span className="text-teal-400">Never Sleeps</span>
</h1>
<p className="text-xl text-slate-300 leading-relaxed max-w-2xl mb-8">
                From concept to production in minutes. BuildAI generates
                complete, production-ready applications with intelligent
                architecture, beautiful interfaces, and scalable code.
              </p>
<div className="flex flex-col sm:flex-row gap-4 mb-12">
<button className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-slate-900 bg-teal-400 hover:bg-teal-300 rounded-lg transition shadow-lg">
                  Start Building Free
                  <svg className="lucide lucide-arrow-right ml-2 h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
<button className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 ring-1 ring-white/20 rounded-lg transition">
                  View Examples
                  <svg className="lucide lucide-play ml-2 h-4 w-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
</svg>
</button>
</div>

<div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
<div>
<div className="text-2xl font-semibold text-white">10k+</div>
<div className="text-sm text-slate-400">Apps Generated</div>
</div>
<div>
<div className="text-2xl font-semibold text-white">99.9%</div>
<div className="text-sm text-slate-400">Uptime</div>
</div>
<div className="">
<div className="text-2xl font-semibold text-white">2min</div>
<div className="text-sm text-slate-400">Avg. Build Time</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 opacity-0 blur-sm translate-x-8" style={{animation: 'fadeSlideIn 0.8s ease-out 0.6s forwards'}}>
<div className="relative">

<div className="bg-black/40 backdrop-blur-xl ring-1 ring-white/10 rounded-2xl overflow-hidden shadow-2xl">

<div className="flex items-center justify-between p-4 border-b border-white/10">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-teal-400/20 flex items-center justify-center">
<svg className="lucide lucide-bot h-4 w-4 text-teal-400" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8V4H8"></path>
<rect height="12" rx="2" width="16" x="4" y="8"></rect>
<path d="M2 14h2"></path>
<path d="M20 14h2"></path>
<path d="M15 13v2"></path>
<path d="M9 13v2"></path>
</svg>
</div>
<div>
<div className="text-sm font-medium text-white">BuildAI</div>
<div className="text-xs text-slate-400">Online</div>
</div>
</div>
<div className="flex items-center gap-1">
<div className="h-2 w-2 bg-green-400 rounded-full"></div>
<span className="text-xs text-slate-400">Active</span>
</div>
</div>

<div className="p-4 space-y-4 h-80">

<div className="flex justify-end">
<div className="bg-teal-400/20 ring-1 ring-teal-400/30 rounded-2xl rounded-br-md px-4 py-2 max-w-xs">
<p className="text-sm text-white">
                        Create a SaaS dashboard for project management
                      </p>
</div>
</div>

<div className="flex items-start gap-3">
<div className="h-6 w-6 rounded-full bg-teal-400/20 flex items-center justify-center flex-shrink-0 mt-1">
<svg className="lucide lucide-bot h-3 w-3 text-teal-400" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8V4H8"></path>
<rect height="12" rx="2" width="16" x="4" y="8"></rect>
<path d="M2 14h2"></path>
<path d="M20 14h2"></path>
<path d="M15 13v2"></path>
<path d="M9 13v2"></path>
</svg>
</div>
<div className="bg-white/5 ring-1 ring-white/10 rounded-2xl rounded-bl-md px-4 py-3 flex-1">
<div className="flex items-center gap-2 mb-2">
<div className="h-1 w-1 bg-teal-400 rounded-full animate-pulse"></div>
<span className="text-xs text-slate-400" id="typingStatus">
                          Generating your app...
                        </span>
</div>
<p className="text-sm text-white min-h-[60px]" id="aiResponse">
                        P
                      </p>

<div className="mt-3 space-y-2">
<div className="flex items-center gap-2 text-xs">
<div className="h-1 w-1 bg-teal-400 rounded-full"></div>
<span className="text-slate-300">
                            Frontend: React + TypeScript
                          </span>
</div>
<div className="flex items-center gap-2 text-xs">
<div className="h-1 w-1 bg-teal-400 rounded-full"></div>
<span className="text-slate-300">
                            Backend: Node.js + Express
                          </span>
</div>
<div className="flex items-center gap-2 text-xs">
<div className="h-1 w-1 bg-slate-400 rounded-full animate-pulse"></div>
<span className="text-slate-400">
                            Database: PostgreSQL
                          </span>
</div>
</div>
</div>
</div>
</div>

<div className="p-4 border-t border-white/10">
<div className="flex items-center gap-2 bg-white/5 ring-1 ring-white/10 rounded-xl p-3">
<input className="flex-1 bg-transparent text-sm text-white placeholder-slate-400 outline-none" placeholder="Describe your next idea..." type="text"/>
<button className="h-8 w-8 rounded-lg bg-teal-400 hover:bg-teal-300 flex items-center justify-center transition">
<svg className="lucide lucide-send h-4 w-4 text-slate-900" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
<path d="m21.854 2.147-10.94 10.939"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="absolute -top-4 -right-4 h-12 w-12 rounded-xl bg-teal-400/20 ring-1 ring-teal-400/30 flex items-center justify-center backdrop-blur-sm">
<svg className="lucide lucide-zap h-5 w-5 text-teal-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
</svg>
</div>
<div className="absolute -bottom-4 -left-4 h-10 w-10 rounded-lg bg-white/10 ring-1 ring-white/20 flex items-center justify-center backdrop-blur-sm">
<svg className="lucide lucide-code h-4 w-4 text-slate-300" data-lucide="code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m16 18 6-6-6-6"></path>
<path d="m8 6-6 6 6 6"></path>
</svg>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="max-w-7xl mx-auto px-6">
<div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>

<section className="max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
<div className="text-center mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-teal-300 bg-teal-400/10 ring-1 ring-teal-400/20 rounded-full mb-6">
<svg className="lucide lucide-sparkles h-3 w-3" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
<path d="M20 2v4"></path>
<path d="M22 4h-4"></path>
<circle cx="4" cy="20" r="2"></circle>
</svg>
          Powerful Features
        </div>
<h2 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight mb-6">
          Everything you need to
          <span className="text-teal-400">build faster</span>
</h2>
<p className="text-xl text-slate-300 max-w-2xl mx-auto">
          From idea to production-ready application in minutes, not months. Our
          AI handles the complexity so you can focus on what matters.
        </p>
</div>
<div className="grid lg:grid-cols-3 gap-8 gap-x-8 gap-y-8">

<div className="hover:ring-white/20 transition-all duration-300 bg-black/20 ring-white/10 ring-1 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden" style={{backgroundImage: 'radial-gradient(1200px 600px at 50% -10%, rgba(16,185,129,0.12), transparent 60%), radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '100% 100%, 22px 22px', backgroundPosition: 'center, center'}}>

<div className="absolute inset-0 pointer-events-none rounded-2xl" style={{boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.06), inset 0 0 80px rgba(16,185,129,0.06)'}}></div>

<div className="relative">
<h3 className="text-xl font-semibold text-white mb-4">
              Smart Code Generation
            </h3>
<p className="text-slate-300 leading-relaxed mb-6">
              AI that writes production-ready code with optimal architecture,
              security best practices, and modern design patterns built-in.
            </p>
</div>

<div className="relative">
<div className="w-full rounded-xl bg-black/40 ring-1 ring-white/10 backdrop-blur-sm overflow-hidden">
<div className="px-4 py-3 border-b border-white/10">
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-emerald-400"></div>
<span className="text-xs text-slate-300 font-medium">app.js</span>
</div>
</div>
<div className="p-4 space-y-2 text-xs font-mono">
<div className="text-emerald-300">
                  // Auto-generated with security &amp; performance
                </div>
<div className="text-slate-200">
                  const app =
                  <span className="text-teal-400">express</span>
                  ();
                </div>
<div className="text-slate-200">
                  app.
                  <span className="text-purple-400">use</span>
                  (
                  <span className="text-yellow-400">helmet</span>
                  ());
                </div>
<div className="text-slate-200">
                  app.
                  <span className="text-purple-400">use</span>
                  (
                  <span className="text-yellow-400">rateLimit</span>
                  ());
                </div>
</div>
</div>
</div>
</div>

<div className="hover:ring-white/20 transition-all duration-300 bg-black/20 ring-white/10 ring-1 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden" style={{backgroundImage: 'radial-gradient(1200px 600px at 50% -10%, rgba(192,132,252,0.12), transparent 60%), radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '100% 100%, 22px 22px', backgroundPosition: 'center, center'}}>

<div className="absolute inset-0 pointer-events-none rounded-2xl" style={{boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.06), inset 0 0 80px rgba(192,132,252,0.06)'}}></div>

<div className="relative">
<h3 className="text-xl font-semibold text-white mb-4">
              Beautiful UI Components
            </h3>
<p className="text-slate-300 leading-relaxed mb-6">
              Modern, responsive interfaces that look professional out of the
              box. Customizable themes and components that match your brand.
            </p>
</div>

<div className="relative">
<div className="space-y-3">
<div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 ring-1 ring-white/10">
<div className="h-8 w-8 rounded bg-gradient-to-r from-purple-400 to-pink-400"></div>
<div className="flex-1">
<div className="h-2 w-20 rounded bg-white/20 mb-1"></div>
<div className="h-1.5 w-16 rounded bg-white/10"></div>
</div>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 ring-1 ring-white/10">
<div className="h-8 w-8 rounded bg-gradient-to-r from-teal-400 to-blue-400"></div>
<div className="flex-1">
<div className="h-2 w-24 rounded bg-white/20 mb-1"></div>
<div className="h-1.5 w-20 rounded bg-white/10"></div>
</div>
</div>
</div>
</div>
</div>

<div className="hover:ring-white/20 transition-all duration-300 bg-black/20 ring-white/10 ring-1 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden" style={{backgroundImage: 'radial-gradient(1200px 600px at 50% -10%, rgba(244,114,182,0.12), transparent 60%), radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '100% 100%, 22px 22px', backgroundPosition: 'center, center'}}>

<div className="absolute inset-0 pointer-events-none rounded-2xl" style={{boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.06), inset 0 0 80px rgba(244,114,182,0.06)'}}></div>

<div className="relative">
<h3 className="text-xl font-semibold text-white mb-4">
              Real-time Analytics
            </h3>
<p className="text-slate-300 leading-relaxed mb-6">
              Built-in performance monitoring, user analytics, and business
              intelligence. Make data-driven decisions to grow your product.
            </p>
</div>

<div className="relative">
<div className="w-full rounded-xl bg-black/40 ring-1 ring-white/10 backdrop-blur-sm p-4">
<div className="flex items-center justify-between mb-4">
<span className="text-sm text-white font-medium">Performance</span>
<div className="flex items-center gap-1">
<div className="h-2 w-2 rounded-full bg-emerald-400"></div>
<span className="text-xs text-emerald-400">Live</span>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between">
<span className="text-xs text-slate-300">Response Time</span>
<span className="text-xs text-white font-medium">147ms</span>
</div>
<div className="w-full h-1 rounded-full bg-white/10">
<div className="h-1 rounded-full bg-gradient-to-r from-emerald-400 w-3/4"></div>
</div>
<div className="flex items-center justify-between">
<span className="text-xs text-slate-300">Active Users</span>
<span className="text-xs text-white font-medium">2,847</span>
</div>
<div className="w-full h-1 rounded-full bg-white/10">
<div className="h-1 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 w-5/6"></div>
</div>
</div>
</div>
</div>
</div>

<div className="hover:ring-white/20 transition-all duration-300 bg-black/20 ring-white/10 ring-1 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden" style={{backgroundImage: 'radial-gradient(1200px 600px at 50% -10%, rgba(52,211,153,0.12), transparent 60%), radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '100% 100%, 22px 22px', backgroundPosition: 'center, center'}}>

<div className="absolute inset-0 pointer-events-none rounded-2xl" style={{boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.06), inset 0 0 80px rgba(52,211,153,0.06)'}}></div>

<div className="relative">
<h3 className="text-xl font-semibold text-white mb-4">
              Enterprise Security
            </h3>
<p className="text-slate-300 leading-relaxed mb-6">
              Built-in authentication, authorization, and security best
              practices. GDPR compliant, SOC 2 certified infrastructure you can
              trust.
            </p>
</div>

<div className="relative">
<div className="w-full rounded-xl bg-black/40 ring-1 ring-white/10 backdrop-blur-sm p-4">
<div className="space-y-4">
<div className="flex items-center justify-between">
<span className="text-sm text-white font-medium">
                    Security Status
                  </span>
<div className="flex items-center gap-1">
<div className="h-2 w-2 rounded-full bg-emerald-400"></div>
<span className="text-xs text-emerald-400">Protected</span>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="text-xs text-slate-300">
                        SSL Certificate
                      </span>
</div>
<span className="text-xs text-emerald-400">Active</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="text-xs text-slate-300">
                        Two-Factor Auth
                      </span>
</div>
<span className="text-xs text-emerald-400">Enabled</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="text-xs text-slate-300">
                        Data Encryption
                      </span>
</div>
<span className="text-xs text-emerald-400">AES-256</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="hover:ring-white/20 transition-all duration-300 bg-black/20 ring-white/10 ring-1 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden" style={{backgroundImage: 'radial-gradient(1200px 600px at 50% -10%, rgba(96,165,250,0.12), transparent 60%), radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '100% 100%, 22px 22px', backgroundPosition: 'center, center'}}>

<div className="absolute inset-0 pointer-events-none rounded-2xl" style={{boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.06), inset 0 0 80px rgba(96,165,250,0.06)'}}></div>

<div className="relative">
<h3 className="text-xl font-semibold text-white mb-4">
              Version Control
            </h3>
<p className="text-slate-300 leading-relaxed mb-6">
              Automatic Git integration with branching, merging, and
              collaboration features. Track changes and work with your team
              seamlessly.
            </p>
</div>

<div className="relative">
<div className="w-full rounded-xl bg-black/40 ring-1 ring-white/10 backdrop-blur-sm p-4">
<div className="flex items-center justify-between mb-4">
<span className="text-sm text-white font-medium">
                  Git Repository
                </span>
<div className="flex items-center gap-1">
<div className="h-2 w-2 rounded-full bg-blue-400"></div>
<span className="text-xs text-blue-400">main</span>
</div>
</div>
<div className="space-y-3">
<div className="flex items-start gap-3">
<div className="h-2 w-2 rounded-full bg-blue-400 mt-1.5"></div>
<div className="flex-1">
<div className="text-xs text-white font-medium">
                      feat: Add user dashboard
                    </div>
<div className="text-xs text-slate-400">2 minutes ago</div>
</div>
</div>
<div className="flex items-start gap-3">
<div className="h-2 w-2 rounded-full bg-emerald-400 mt-1.5"></div>
<div className="flex-1">
<div className="text-xs text-white font-medium">
                      fix: Update API endpoints
                    </div>
<div className="text-xs text-slate-400">15 minutes ago</div>
</div>
</div>
<div className="flex items-start gap-3">
<div className="h-2 w-2 rounded-full bg-purple-400 mt-1.5"></div>
<div className="flex-1">
<div className="text-xs text-white font-medium">
                      docs: Update README
                    </div>
<div className="text-xs text-slate-400">1 hour ago</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="hover:ring-white/20 transition-all duration-300 bg-black/20 ring-white/10 ring-1 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden" style={{backgroundImage: 'radial-gradient(1200px 600px at 50% -10%, rgba(45,212,191,0.12), transparent 60%), radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '100% 100%, 22px 22px', backgroundPosition: 'center, center'}}>

<div className="absolute inset-0 pointer-events-none rounded-2xl" style={{boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.06), inset 0 0 80px rgba(45,212,191,0.06)'}}></div>

<div className="relative">
<h3 className="text-xl font-semibold text-white mb-4">
              One-Click Deploy
            </h3>
<p className="text-slate-300 leading-relaxed mb-6">
              Deploy to AWS, Vercel, or any cloud platform instantly. Automated
              CI/CD pipelines, SSL certificates, and CDN setup included.
            </p>
</div>

<div className="relative">
<div className="w-full rounded-xl bg-black/40 ring-1 ring-white/10 backdrop-blur-sm p-4">
<div className="flex items-center justify-between mb-4">
<span className="text-sm text-white font-medium">Deployment</span>
<div className="flex items-center gap-1">
<div className="h-2 w-2 rounded-full bg-teal-400 animate-pulse"></div>
<span className="text-xs text-teal-400">Live</span>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="text-teal-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="text-xs text-slate-300">Build Status</span>
</div>
<span className="text-xs text-teal-400">Complete</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="text-teal-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="text-xs text-slate-300">SSL Certificate</span>
</div>
<span className="text-xs text-teal-400">Active</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="text-teal-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="text-xs text-slate-300">CDN Distribution</span>
</div>
<span className="text-xs text-teal-400">Global</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="max-w-7xl mx-auto px-6">
<div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>


<div className="max-w-7xl mx-auto px-6">
<div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>

<section className="max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
<div className="grid lg:grid-cols-12 gap-20 items-center">

<div className="lg:col-span-5">
<div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-teal-300 bg-teal-400/10 ring-1 ring-teal-400/20 rounded-full mb-8">
<svg className="lucide lucide-workflow h-3 w-3" data-lucide="workflow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="8" rx="2" width="8" x="3" y="3"></rect>
<path d="M7 11v4a2 2 0 0 0 2 2h4"></path>
<rect height="8" rx="2" width="8" x="13" y="13"></rect>
</svg>
            How it works
          </div>
<h2 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight mb-6">
            From idea to production
            <span className="text-teal-400">in three steps</span>
</h2>
<p className="text-xl text-slate-300 leading-relaxed mb-12">
            A streamlined flow that mirrors how teams ship with BuildAI—fast,
            secure, and beautifully executed.
          </p>
<div className="space-y-8">

<div className="flex items-start gap-6">
<div className="relative flex-shrink-0">
<div className="h-12 w-12 rounded-xl bg-gradient-to-br from-teal-400/20 to-teal-400/5 ring-1 ring-teal-400/20 flex items-center justify-center shadow-lg">
<svg className="lucide lucide-zap h-5 w-5 text-teal-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
</svg>
</div>
<div className="-translate-x-0.5 w-px bg-gradient-to-b from-teal-400/60 to-teal-400/10 h-8 absolute top-12 left-1/2"></div>
</div>
<div className="pt-1 flex-1">
<div className="flex items-center gap-3 mb-3 justify-between">
<h3 className="text-lg font-semibold text-white tracking-tight">
                    Simple setup to get started
                  </h3>
<span className="inline-flex items-center px-2 py-0.5 text-xs font-medium text-teal-400 bg-teal-400/10 ring-1 ring-teal-400/20 rounded-full">
                    01
                  </span>
</div>
<p className="text-slate-300 leading-relaxed">
                  Describe your product and pick preferences. Our guided
                  onboarding prepares a tailored architecture in minutes.
                </p>
</div>
</div>

<div className="flex items-start gap-6">
<div className="relative flex-shrink-0">
<div className="h-12 w-12 rounded-xl bg-gradient-to-br from-white/10 to-white/5 ring-1 ring-white/20 flex items-center justify-center shadow-lg">
<svg className="lucide lucide-activity h-5 w-5 text-white" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
</svg>
</div>
<div className="absolute left-1/2 -translate-x-0.5 top-12 w-px h-8 bg-gradient-to-b from-white/40 to-white/10"></div>
</div>
<div className="pt-1 flex-1">
<div className="flex items-center gap-3 mb-3 justify-between">
<h3 className="text-lg font-semibold text-white tracking-tight">
                    Real‑time generation &amp; preview
                  </h3>
<span className="inline-flex items-center px-2 py-0.5 text-xs font-medium text-white bg-white/10 ring-1 ring-white/20 rounded-full">
                    02
                  </span>
</div>
<p className="text-slate-300 leading-relaxed">
                  Watch BuildAI generate backend, UI, and integrations in real
                  time—preview and refine before you commit.
                </p>
</div>
</div>

<div className="flex items-start gap-6">
<div className="relative flex-shrink-0">
<div className="h-12 w-12 rounded-xl bg-gradient-to-br from-emerald-400/20 to-emerald-400/5 ring-1 ring-emerald-400/20 flex items-center justify-center shadow-lg">
<svg className="lucide lucide-rocket h-5 w-5 text-emerald-400" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
<path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
<path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
<path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
</svg>
</div>
<div className="absolute left-1/2 -translate-x-0.5 top-12 w-px h-8 bg-gradient-to-b from-emerald-400/60 to-emerald-400/10"></div>
</div>
<div className="pt-1 flex-1">
<div className="flex items-center gap-3 mb-3 justify-between">
<h3 className="text-lg font-semibold text-white tracking-tight">
                    Deploy and grow with support
                  </h3>
<span className="inline-flex items-center px-2 py-0.5 text-xs font-medium text-emerald-400 bg-emerald-400/10 ring-1 ring-emerald-400/20 rounded-full">
                    03
                  </span>
</div>
<p className="text-slate-300 leading-relaxed">
                  One‑click deploy with CI/CD, security baked in, and ongoing
                  updates. Our team and community are here 24/7.
                </p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7">
<div className="relative">

<div className="absolute inset-0 -m-8 pointer-events-none rounded-3xl blur-sm" style={{background: 'radial-gradient(60% 50% at 70% 30%, rgba(45,212,191,0.12), transparent 60%)'}}></div>
<div className="bg-black/40 backdrop-blur-xl ring-1 ring-white/10 rounded-2xl overflow-hidden shadow-2xl relative">

<div className="flex items-center justify-between p-4 border-b border-white/10">
<div className="flex items-center gap-3">
<div className="h-3 w-3 rounded-full bg-teal-400"></div>
<span className="text-sm text-white font-medium">
                    BuildAI Console
                  </span>
</div>
<div className="flex items-center gap-2 text-slate-400">
<svg className="lucide lucide-settings h-4 w-4" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
<svg className="lucide lucide-sidebar h-4 w-4" data-lucide="sidebar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="3"></rect>
<path d="M9 3v18"></path>
</svg>
</div>
</div>

<div className="grid md:grid-cols-2 gap-4 p-6">
<button className="group w-full text-left bg-white/5 hover:bg-white/10 ring-1 ring-white/10 rounded-xl p-4 transition-all duration-200">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-teal-400/20 ring-1 ring-teal-400/30 flex items-center justify-center">
<svg className="lucide lucide-sparkles h-4 w-4 text-teal-400" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
<path d="M20 2v4"></path>
<path d="M22 4h-4"></path>
<circle cx="4" cy="20" r="2"></circle>
</svg>
</div>
<div className="">
<div className="text-sm font-medium text-white">
                          Create new app
                        </div>
<div className="text-xs text-slate-400">
                          Generate UI, backend, and DB
                        </div>
</div>
</div>
<svg className="lucide lucide-arrow-right h-4 w-4 text-slate-400 group-hover:text-white transition-colors" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
</button>
<div className="w-full bg-white/5 ring-1 ring-white/10 rounded-xl p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-white/10 ring-1 ring-white/10 flex items-center justify-center">
<svg className="lucide lucide-layout-dashboard h-4 w-4 text-slate-300" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="9" rx="1" width="7" x="3" y="3"></rect>
<rect height="5" rx="1" width="7" x="14" y="3"></rect>
<rect height="9" rx="1" width="7" x="14" y="12"></rect>
<rect height="5" rx="1" width="7" x="3" y="16"></rect>
</svg>
</div>
<div className="flex-1">
<div className="text-sm font-medium text-white">
                          Try a template
                        </div>
<div className="text-xs text-slate-400">
                          SaaS, e‑commerce, admin
                        </div>
</div>
</div>
<span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-slate-300 ring-1 ring-white/10">
                      Starter
                    </span>
</div>
</div>
</div>

<div className="px-6 py-4 border-t border-white/10">
<div className="flex items-center justify-between mb-6">
<span className="text-base font-medium text-white">
                    Analytics
                  </span>
<div className="flex items-center gap-2 text-xs text-slate-400">
<span>Last 7 days</span>
<span className="h-1 w-1 rounded-full bg-teal-400"></span>
</div>
</div>
<div className="grid md:grid-cols-3 gap-4 mb-6">
<div className="bg-white/5 ring-1 ring-white/10 rounded-lg p-4">
<div className="text-xs text-slate-400 mb-2">Views</div>
<div className="text-2xl font-semibold text-white mb-1">
                      403
                    </div>
<div className="text-xs text-emerald-400">+13.2%</div>
</div>
<div className="bg-white/5 ring-1 ring-white/10 rounded-lg p-4">
<div className="text-xs text-slate-400 mb-2">Build time</div>
<div className="text-2xl font-semibold text-white mb-1">
                      2m 04s
                    </div>
<div className="text-xs text-emerald-400">‑9%</div>
</div>
<div className="bg-white/5 ring-1 ring-white/10 rounded-lg p-4">
<div className="text-xs text-slate-400 mb-2">Deploys</div>
<div className="text-2xl font-semibold text-white mb-1">58</div>
<div className="text-xs text-emerald-400">+4</div>
</div>
</div>

<div className="w-full h-24 rounded-lg bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-end justify-between gap-1 h-full">
<div className="w-2 bg-gradient-to-t from-teal-400/30 to-teal-400 rounded-sm" style={{height: '35%'}}></div>
<div className="w-2 bg-gradient-to-t from-teal-400/30 to-teal-400 rounded-sm" style={{height: '55%'}}></div>
<div className="w-2 bg-gradient-to-t from-teal-400/30 to-teal-400 rounded-sm" style={{height: '70%'}}></div>
<div className="w-2 bg-gradient-to-t from-teal-400/30 to-teal-400 rounded-sm" style={{height: '45%'}}></div>
<div className="w-2 bg-gradient-to-t from-teal-400/30 to-teal-400 rounded-sm" style={{height: '85%'}}></div>
<div className="w-2 bg-gradient-to-t from-teal-400/30 to-teal-400 rounded-sm" style={{height: '60%'}}></div>
<div className="w-2 bg-gradient-to-t from-teal-400/30 to-teal-400 rounded-sm" style={{height: '92%'}}></div>
<div className="w-2 bg-gradient-to-t from-teal-400/30 to-teal-400 rounded-sm" style={{height: '75%'}}></div>
<div className="w-2 bg-gradient-to-t from-teal-400/30 to-teal-400 rounded-sm" style={{height: '65%'}}></div>
<div className="w-2 bg-gradient-to-t from-teal-400/30 to-teal-400 rounded-sm" style={{height: '50%'}}></div>
<div className="w-2 bg-gradient-to-t from-teal-400/30 to-teal-400 rounded-sm" style={{height: '80%'}}></div>
<div className="w-2 bg-gradient-to-t from-teal-400/30 to-teal-400 rounded-sm" style={{height: '68%'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="max-w-7xl mx-auto px-6">
<div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>
<section className="max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
<div className="text-center mb-12">
<div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-teal-300 bg-teal-400/10 ring-1 ring-teal-400/20 rounded-full mb-6">
<svg className="lucide lucide-credit-card h-3 w-3" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="20" x="2" y="5"></rect>
<line x1="2" x2="22" y1="10" y2="10"></line>
</svg>
          Pricing
        </div>
<h2 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight mb-4">
          Simple, transparent
          <span className="text-teal-400">pricing</span>
</h2>
<p className="text-xl text-slate-300 max-w-2xl mx-auto">
          Scale as you grow. No surprises.
        </p>
</div>

<div className="flex mb-14 items-center justify-center">
<div className="inline-flex ring-1 ring-white/10 bg-black rounded-full pt-1 pr-1 pb-1 pl-1 relative shadow-lg space-x-1 items-center" id="billingToggle">
<button aria-pressed="false" className="z-[1] transition-colors text-sm font-medium text-white/70 rounded-none pt-2 pr-4 pb-2 pl-4 relative" data-plan="annual" type="button">
            Annual
          </button>
<button aria-pressed="true" className="z-[1] transition-colors text-sm font-medium text-[#000000] bg-[#ffffff] rounded-full pt-2 pr-4 pb-2 pl-4 relative" data-plan="monthly" type="button">
            Monthly
          </button>
<span className="transition-all duration-200 ring-white/20 text-slate-900 w-[92px] rounded-full absolute top-1 bottom-1 left-1 shadow-lg" id="toggleThumb" style={{left: 'calc(50% - 92px + 1px)'}}></span>
</div>
<span className="ml-3 hidden px-2.5 py-1 text-xs font-medium rounded-full bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-400/20" id="saveBadge">
          Save 20%
        </span>
</div>

<div className="grid lg:grid-cols-3 gap-8">

<div className="bg-black/40 backdrop-blur-xl ring-1 ring-white/10 rounded-3xl p-8 flex flex-col">
<div className="flex items-center justify-between mb-8">
<span className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-slate-300 ring-1 ring-white/10">
              Basic
            </span>
</div>
<div className="mb-3">
<div className="flex items-baseline gap-2">
<span className="text-5xl font-semibold tracking-tight text-white" data-annual="0" data-monthly="0" data-price="">
                $0
              </span>
<span className="text-slate-400" data-term="">/month</span>
</div>
<p className="text-slate-300 mt-3">
              Ideal for startups getting started with AI‑powered workflows.
            </p>
</div>
<div className="my-8 h-px bg-white/10"></div>
<ul className="space-y-3 text-slate-300 flex-1">
<li className="flex items-start gap-3">
<svg className="lucide lucide-check h-4 w-4 text-teal-400 mt-0.5" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
              Access to core AI tools
            </li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check h-4 w-4 text-teal-400 mt-0.5" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
              Basic analytics and reporting
            </li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check h-4 w-4 text-teal-400 mt-0.5" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
              Email support
            </li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check h-4 w-4 text-teal-400 mt-0.5" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
              Community access
            </li>
</ul>
<div className="my-8 h-px bg-white/10"></div>
<div className="space-y-2">
<button className="w-full inline-flex items-center justify-center px-6 py-3 text-base font-medium text-slate-200 bg-white/5 hover:bg-white/10 ring-1 ring-white/10 rounded-xl transition">
              Get started
            </button>
</div>
</div>

<div className="relative bg-black/40 backdrop-blur-xl ring-1 ring-white/10 rounded-3xl p-8 flex flex-col">
<div className="flex items-center justify-between mb-8">
<span className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-slate-300 ring-1 ring-white/10">
              Pro
            </span>
<span className="px-2.5 py-1 text-xs font-medium rounded-full bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-400/20">
              Most popular
            </span>
</div>
<div className="mb-3">
<div className="flex items-baseline gap-2">
<span className="text-5xl font-semibold tracking-tight text-white" data-annual="192" data-monthly="20" data-price="">
                $20
              </span>
<span className="text-slate-400" data-term="">/month</span>
</div>
<p className="text-slate-300 mt-3">
              For growing teams that need advanced features and priority
              support.
            </p>
</div>
<div className="my-8 h-px bg-white/10"></div>
<ul className="space-y-3 text-slate-300 flex-1">
<li className="flex items-start gap-3">
<svg className="lucide lucide-check h-4 w-4 text-teal-400 mt-0.5" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
              in Basic
            </li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check h-4 w-4 text-teal-400 mt-0.5" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
              Enhanced analytics &amp; insights
            </li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check h-4 w-4 text-teal-400 mt-0.5" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
              Priority email support
            </li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check h-4 w-4 text-teal-400 mt-0.5" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
              Integrations with popular apps
            </li>
</ul>
<div className="my-8 h-px bg-white/10"></div>
<div className="space-y-2">
<button className="w-full inline-flex items-center justify-center px-6 py-3 text-base font-medium text-slate-900 bg-teal-400 hover:bg-teal-300 rounded-xl ring-1 ring-teal-400/30 transition">
              Get started
            </button>
</div>
</div>

<div className="bg-black/40 backdrop-blur-xl ring-1 ring-white/10 rounded-3xl p-8 flex flex-col">
<div className="flex items-center justify-between mb-8">
<span className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-slate-300 ring-1 ring-white/10">
              Enterprise
            </span>
</div>
<div className="mb-3">
<div className="flex items-baseline gap-2">
<span className="text-5xl font-semibold tracking-tight text-white" data-annual="490" data-monthly="49" data-price="">
                $49
              </span>
<span className="text-slate-400" data-term="">/month</span>
</div>
<p className="text-slate-300 mt-3">
              Custom solutions for large organizations with advanced needs.
            </p>
</div>
<div className="my-8 h-px bg-white/10"></div>
<ul className="space-y-3 text-slate-300 flex-1">
<li className="flex items-start gap-3">
<svg className="lucide lucide-check h-4 w-4 text-teal-400 mt-0.5" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
              Everything in Pro
            </li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check h-4 w-4 text-teal-400 mt-0.5" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
              Dedicated account manager
            </li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check h-4 w-4 text-teal-400 mt-0.5" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
              Customizable workflows
            </li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check h-4 w-4 text-teal-400 mt-0.5" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
              Comprehensive training &amp; support
            </li>
</ul>
<div className="my-8 h-px bg-white/10"></div>
<div className="space-y-2">
<button className="w-full inline-flex items-center justify-center px-6 py-3 text-base font-medium text-slate-200 bg-white/5 hover:bg-white/10 ring-1 ring-white/10 rounded-xl transition">
              Get started
            </button>
</div>
</div>
</div>

</section>

<div className="max-w-7xl mx-auto px-6">
<div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>

<footer className="max-w-7xl mr-auto ml-auto pt-20 pr-6 pb-12 pl-6">
<div className="grid gap-8 md:grid-cols-4">
<div className="md:col-span-2">
<h3 className="text-xl font-semibold text-white tracking-tight mb-4">
            BuildAI
          </h3>
<p className="text-slate-300/80 max-w-md mb-6">
            AI that builds your product, front to back. Making software
            development accessible to everyone.
          </p>
<div className="flex items-center gap-4">
<a className="p-2 rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition" href="#">
<svg className="lucide lucide-twitter h-5 w-5 text-slate-300" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</a>
<a className="p-2 rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition" href="#">
<svg className="lucide lucide-github h-5 w-5 text-slate-300" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
<path d="M9 18c-4.51 2-5-2-7-2"></path>
</svg>
</a>
<a className="p-2 rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition" href="#">
<svg className="lucide lucide-linkedin h-5 w-5 text-slate-300" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>
</div>
</div>
<div className="">
<h4 className="text-sm font-normal text-white mb-4">Product</h4>
<ul className="space-y-3 text-sm text-slate-300/80">
<li>
<a className="hover:text-white transition" href="#">Features</a>
</li>
<li><a className="hover:text-white transition" href="#">Pricing</a></li>
<li>
<a className="hover:text-white transition" href="#">Examples</a>
</li>
<li>
<a className="hover:text-white transition" href="#">Documentation</a>
</li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-normal text-white mb-4">Company</h4>
<ul className="space-y-3 text-sm text-slate-300/80">
<li><a className="hover:text-white transition" href="#">About</a></li>
<li><a className="hover:text-white transition" href="#">Blog</a></li>
<li><a className="hover:text-white transition" href="#">Careers</a></li>
<li><a className="hover:text-white transition" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-sm text-slate-400">
          © 2024 BuildAI. All rights reserved.
        </p>
<div className="flex items-center gap-6 text-sm text-slate-400">
<a className="hover:text-white transition" href="#">Privacy Policy</a>
<a className="hover:text-white transition" href="#">Terms of Service</a>
<a className="hover:text-white transition" href="#">Cookie Policy</a>
</div>
</div>
</footer>
<style>
      @keyframes fadeSlideIn {
          from {
              opacity: 0;
              transform: translateY(32px) translateX(32px);
              filter: blur(8px);
          }
          to {
              opacity: 1;
              transform: translateY(0) translateX(0);
              filter: blur(0);
          }
      }
    </style>


    </>
  );
}
