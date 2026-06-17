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



    (function() {
      const messages = [
        { type: 'incoming', text: 'Hey Iris, I found your portfolio and loved the clarity. Could you share what services you currently offer?', delay: 1000 },
        { type: 'time', text: '3 mins ago', delay: 2000 },
        { type: 'typing', delay: 3500 },
        { type: 'outgoing', text: 'Thank you! I help teams with end‑to‑end product design, UX audits, design systems, and interactive prototypes for web & mobile.', delay: 6000 },
        { type: 'incoming', text: "What's your usual process to kick off?", delay: 9000 },
        { type: 'time', text: 'Just now', delay: 10000 },
        { type: 'typing', delay: 11500 },
        { type: 'outgoing', text: 'Great question! I typically start with a discovery call to understand your goals, then move to user research and wireframes before high-fidelity designs.', delay: 15000 },
        { type: 'incoming', text: 'How long does a typical project take?', delay: 18000 },
        { type: 'time', text: 'Just now', delay: 19000 },
        { type: 'typing', delay: 20500 },
        { type: 'outgoing', text: 'Most projects take 2–6 weeks depending on scope. I can provide a detailed timeline after our initial consultation.', delay: 24000 },
        { type: 'incoming', text: 'Perfect! Can we schedule a call this week?', delay: 27000 },
        { type: 'time', text: 'Just now', delay: 28000 }
      ];

      const container = document.getElementById('chatMessages');
      let currentIndex = 0;
      let typingIndicator = null;
      
      // Ensure the script runs only once for this element
      if (container && !container.dataset.chatInitialized) {
        container.dataset.chatInitialized = 'true';

        function createMessage(msg) {
          if (msg.type === 'incoming') {
            const wrapper = document.createElement('div');
            wrapper.className = 'flex gap-2';
            wrapper.style.opacity = '0';
            wrapper.style.transition = 'opacity 0.3s ease-out';
            wrapper.innerHTML = `
              <div class="ml-8 max-w-[85%] rounded-2xl rounded-tl-sm bg-slate-800 text-white px-3.5 py-2.5 text-[13px] leading-relaxed shadow font-sans">
                ${msg.text}
              </div>
            `;
            container.appendChild(wrapper);
            setTimeout(() => wrapper.style.opacity = '1', 50);
          } else if (msg.type === 'outgoing') {
            const wrapper = document.createElement('div');
            wrapper.className = 'flex gap-2 justify-end';
            wrapper.style.opacity = '0';
            wrapper.style.transition = 'opacity 0.3s ease-out';
            wrapper.innerHTML = `
              <div class="max-w-[85%] rounded-2xl rounded-tr-sm bg-indigo-600 text-white px-3.5 py-2.5 text-[13px] leading-relaxed shadow font-sans">
                ${msg.text}
              </div>
            `;
            container.appendChild(wrapper);
            setTimeout(() => wrapper.style.opacity = '1', 50);
          } else if (msg.type === 'time') {
            const time = document.createElement('p');
            time.className = 'text-[11px] text-slate-500 ml-8 font-sans';
            time.style.opacity = '0';
            time.style.transition = 'opacity 0.3s ease-out';
            time.textContent = msg.text;
            container.appendChild(time);
            setTimeout(() => time.style.opacity = '1', 50);
          } else if (msg.type === 'typing') {
            typingIndicator = document.createElement('div');
            typingIndicator.className = 'flex gap-2';
            typingIndicator.innerHTML = `
              <div class="ml-8 rounded-2xl rounded-tl-sm bg-slate-800 px-3.5 py-2.5 shadow">
                <div class="flex gap-1">
                  <span class="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style="animation-delay: 0s; animation-duration: 1s;"></span>
                  <span class="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style="animation-delay: 0.2s; animation-duration: 1s;"></span>
                  <span class="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style="animation-delay: 0.4s; animation-duration: 1s;"></span>
                </div>
              </div>
            `;
            container.appendChild(typingIndicator);
          }
          if (container.scrollHeight > container.clientHeight) {
            container.scrollTop = container.scrollHeight;
          }
        }

        function removeTypingIndicator() {
          if (typingIndicator) {
            typingIndicator.remove();
            typingIndicator = null;
          }
        }

        function showNextMessage() {
          if (currentIndex >= messages.length) {
            // Optional: loop animation
            // currentIndex = 0;
            // container.innerHTML = '';
            // setTimeout(showNextMessage, 5000); // 5s pause before looping
            return;
          };

          const msg = messages[currentIndex];
          
          const timeout = currentIndex === 0 ? msg.delay : msg.delay - (messages[currentIndex - 1]?.delay || 0);

          setTimeout(() => {
            if (msg.type === 'typing') {
              createMessage(msg);
            } else {
              removeTypingIndicator();
              createMessage(msg);
            }
            currentIndex++;
            showNextMessage();
          }, timeout);
        }

        // Clear initial static content before starting animation
        container.innerHTML = '';
        showNextMessage();
      }
    })();
  


      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons();
        const button = document.querySelector('.liquid-glass-button');
        if(button){
          button.addEventListener('click', function(e){
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const ripple = document.createElement('span');
            ripple.className = 'absolute rounded-full bg-gradient-radial from-white/30 to-transparent pointer-events-none animate-ping';
            ripple.style.left = x - 25 + 'px';
            ripple.style.top = y - 25 + 'px';
            ripple.style.width = '50px';
            ripple.style.height = '50px';
            ripple.style.animation = 'ripple 0.6s linear';
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
          });
        }
      });
    


      document.addEventListener('DOMContentLoaded', () => {
        // Billing toggle
        const billingToggle = document.getElementById('billingToggle');
        const billingKnob = document.getElementById('billingKnob');
        const annualBadge = document.getElementById('annualBadge');
        let isAnnual = true;

        if(billingToggle) {
          billingToggle.addEventListener('click', () => {
            isAnnual = !isAnnual;
            billingKnob.style.transform = isAnnual ? 'translateX(32px)' : 'translateX(0px)';
            annualBadge.style.opacity = isAnnual ? '1' : '0';
            document.querySelectorAll('[data-period]').forEach(el => {
              el.textContent = isAnnual ? '/yr' : '/mo';
            });
            const proPriceEl = document.querySelector('[data-monthly]');
            if(proPriceEl) {
              proPriceEl.textContent = isAnnual ? proPriceEl.getAttribute('data-annual') : proPriceEl.getAttribute('data-monthly');
            }
          });
        }

        // FAQ accordion
        document.querySelectorAll('[data-faq-toggle]').forEach(button => {
          button.addEventListener('click', () => {
            const item = button.closest('.faq-item');
            const content = item.querySelector('.faq-content');
            const icon = button.querySelector('svg');
            const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';

            // Close all
            document.querySelectorAll('.faq-content').forEach(c => c.style.maxHeight = '0px');
            document.querySelectorAll('[data-faq-toggle] svg').forEach(i => i.classList.remove('rotate-180'));

            if(!isOpen) {
              content.style.maxHeight = content.scrollHeight + 'px';
              icon.classList.add('rotate-180');
            }
          });
        });

        // Update year
        const yearEl = document.getElementById('year');
        if(yearEl) yearEl.textContent = new Date().getFullYear();
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
      <div className="fixed top-0 w-full h-screen opacity-10 mix-blend-screen pointer-events-none bg-cover bg-center -z-10" data-alpha-mask="60" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e8a73c34-737c-4f43-bbd4-ce204f94152c_3840w.webp")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 60%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 60%, transparent)'}}></div>


<div className="" id="wrapper">
<div className="gradient-blur">
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
</div>
<style>
        .gradient-blur {
          position: fixed;
          z-index: 5;
          inset: 0 0 auto 0;
          height: 12%;
          pointer-events: none;
        }

        .gradient-blur>div,
        .gradient-blur::before,
        .gradient-blur::after {
          position: absolute;
          inset: 0;
        }

        .gradient-blur::before {
          content: "";
          z-index: 1;
          backdrop-filter: blur(0.5px);
          mask: linear-gradient(to top,
              rgba(0, 0, 0, 0) 0%,
              rgba(0, 0, 0, 1) 12.5%,
              rgba(0, 0, 0, 1) 25%,
              rgba(0, 0, 0, 0) 37.5%);
        }

        .gradient-blur>div:nth-of-type(1) {
          z-index: 2;
          backdrop-filter: blur(1px);
          mask: linear-gradient(to top,
              rgba(0, 0, 0, 0) 12.5%,
              rgba(0, 0, 0, 1) 25%,
              rgba(0, 0, 0, 1) 37.5%,
              rgba(0, 0, 0, 0) 50%);
        }

        .gradient-blur>div:nth-of-type(2) {
          z-index: 3;
          backdrop-filter: blur(2px);
          mask: linear-gradient(to top,
              rgba(0, 0, 0, 0) 25%,
              rgba(0, 0, 0, 1) 37.5%,
              rgba(0, 0, 0, 1) 50%,
              rgba(0, 0, 0, 0) 62.5%);
        }

        .gradient-blur>div:nth-of-type(3) {
          z-index: 4;
          backdrop-filter: blur(4px);
          mask: linear-gradient(to top,
              rgba(0, 0, 0, 0) 37.5%,
              rgba(0, 0, 0, 1) 50%,
              rgba(0, 0, 0, 1) 62.5%,
              rgba(0, 0, 0, 0) 75%);
        }

        .gradient-blur>div:nth-of-type(4) {
          z-index: 5;
          backdrop-filter: blur(8px);
          mask: linear-gradient(to top,
              rgba(0, 0, 0, 0) 50%,
              rgba(0, 0, 0, 1) 62.5%,
              rgba(0, 0, 0, 1) 75%,
              rgba(0, 0, 0, 0) 87.5%);
        }

        .gradient-blur>div:nth-of-type(5) {
          z-index: 6;
          backdrop-filter: blur(16px);
          mask: linear-gradient(to top,
              rgba(0, 0, 0, 0) 62.5%,
              rgba(0, 0, 0, 1) 75%,
              rgba(0, 0, 0, 1) 87.5%,
              rgba(0, 0, 0, 0) 100%);
        }

        .gradient-blur>div:nth-of-type(6) {
          z-index: 7;
          backdrop-filter: blur(32px);
          mask: linear-gradient(to top,
              rgba(0, 0, 0, 0) 75%,
              rgba(0, 0, 0, 1) 87.5%,
              rgba(0, 0, 0, 1) 100%);
        }

        .gradient-blur::after {
          content: "";
          z-index: 8;
          backdrop-filter: blur(64px);
          mask: linear-gradient(to top,
              rgba(0, 0, 0, 0) 87.5%,
              rgba(0, 0, 0, 1) 100%);
        }
      </style>
</div>

<header className="sticky w-full max-w-6xl z-50 mr-auto ml-auto pr-3 pl-3 top-4" style={{maskImage: 'linear-gradient(160deg, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(160deg, transparent, black 10%, black 90%, transparent)'}}>
<div className="max-w-7xl mx-auto py-[1px]">
<div className="flex bg-slate-900/80 h-14 ring-white/10 ring-1 rounded-full pr-1 pl-4 backdrop-blur-xl items-center justify-between">
<div className="flex gap-2 gap-x-2 gap-y-2 items-center">
<img alt="Iris avatar" className="w-8 h-8 object-cover ring-white/20 ring-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/41ec0205-228d-47a6-bae9-0e84ee8ba442_320w.webp"/>
<div className="hidden md:flex md:flex-col ml-2">
<span className="text-sm text-slate-400 font-sans">Hello,</span>
<span className="text-[15px] font-medium text-white font-sans">
                Iris's here!
              </span>
</div>
</div>
<nav className="flex items-center gap-3">

<a className="relative h-12 overflow-hidden transition-all duration-500 group inline-flex rounded-full pr-6 pl-6 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/30 cursor-pointer" href="#book" style={{animation: 'pulse-glow 3s ease-in-out infinite'}}>
<div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-b from-[#4f46e5] via-[#1e1b4b] to-[#312e81] group-hover:from-[#6366f1] group-hover:via-[#3730a3] group-hover:to-[#4338ca] transition-all duration-300">
<div className="absolute inset-0 bg-[#1e1b4b] rounded-full opacity-90 group-hover:opacity-95 transition-opacity duration-300"></div>
</div>
<div className="absolute inset-[2px] bg-[#1e1b4b] rounded-full opacity-95 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute inset-[2px] bg-gradient-to-r from-[#1e1b4b] via-[#312e81] to-[#1e1b4b] rounded-full opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute inset-[2px] bg-gradient-to-b from-[#4f46e5]/40 via-[#312e81] to-[#3730a3]/30 rounded-full opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
<div className="absolute inset-[2px] bg-gradient-to-br from-[#6366f1]/10 via-[#312e81] to-[#1e3a8a]/50 rounded-full group-hover:from-[#6366f1]/20 group-hover:to-[#1e3a8a]/70 transition-all duration-300"></div>
<div className="absolute inset-[2px] shadow-[inset_0_0_15px_rgba(99,102,241,0.15)] rounded-full group-hover:shadow-[inset_0_0_25px_rgba(99,102,241,0.25)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-[#6366f1]/10 to-transparent" style={{animation: 'shimmer 2s ease-in-out infinite'}}></div>
<div className="relative flex items-center justify-center gap-2 group-hover:gap-3 transition-all duration-300">
<svg className="lucide lucide-phone h-4 w-4 text-indigo-300" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span className="bg-clip-text group-hover:drop-shadow-[0_0_20px_rgba(99,102,241,0.6)] group-hover:scale-105 transition-all duration-300 text-sm font-medium text-transparent tracking-tight bg-gradient-to-b from-[#a5b4fc] to-[#6366f1] drop-shadow-[0_0_12px_rgba(99,102,241,0.4)]" style={{animation: '2s ease-in-out 0s infinite normal none running text-glow', color: 'rgba(0, 0, 0, 0)', position: 'static'}}>
                  Book 30 min Call
                </span>
</div>
</a>

<button className="liquid-glass-button relative inline-flex h-12 cursor-pointer outline-none overflow-hidden transition-all duration-300 ease-out text-sm font-medium text-white/90 rounded-full pr-6 pl-6 items-center justify-center group">
<div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-b from-white/25 via-white/10 to-white/5 opacity-90 group-hover:opacity-100 transition-all duration-300">
<div className="absolute inset-0 bg-slate-800 rounded-full opacity-80 group-hover:opacity-85 transition-opacity duration-300"></div>
</div>
<div className="absolute inset-[2px] bg-slate-900/85 rounded-full ring-1 ring-white/10"></div>
<div className="absolute inset-[2px] rounded-full bg-gradient-to-r from-white/5 via-transparent to-white/5 opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
<div className="absolute inset-[2px] rounded-full shadow-[inset_0_0_15px_rgba(255,255,255,0.08)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{animation: 'shimmer 2.2s ease-in-out infinite'}}></div>
<div className="relative flex items-center justify-center gap-2 group-hover:gap-3 transition-all duration-300">
<svg className="lucide lucide-badge-check h-4 w-4" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-sm font-medium tracking-tight text-white/90 font-sans">
                  About Me
                </span>
</div>
</button>
</nav>
</div>
</div>
</header>
<main className="sm:px-6 lg:px-8 max-w-7xl mt-8 mr-auto ml-auto pt-10 pr-4 pb-10 pl-4">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

<aside className="hidden lg:block lg:col-span-2">
<div className="sticky top-24">
<div className="flex items-center gap-2 text-slate-300 mb-4">
<span className="text-sm font-medium font-sans">Navigate</span>
</div>
<ul className="text-sm space-y-2" style={{maskImage: 'linear-gradient(90deg, transparent, black 15%, black 40%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 15%, black 40%, transparent)'}}>
<li className="">
<a className="group flex items-center gap-2 hover:text-white text-slate-400" href="#message">
<span className="h-px w-6 bg-slate-700 group-hover:bg-white transition-colors"></span>
                  Message
                </a>
</li>
<li className="">
<a className="group flex items-center gap-2 hover:text-white text-slate-400" href="/#tools">
<span className="h-px w-6 bg-slate-700 group-hover:bg-white transition-colors"></span>
                  Tools
                </a>
</li>
<li className="">
<a className="group flex items-center gap-2 hover:text-white text-slate-400" href="/#process">
<span className="h-px w-6 bg-slate-700 group-hover:bg-white transition-colors"></span>
                  Process
                </a>
</li>
<li className="">
<a className="group flex items-center gap-2 hover:text-white text-slate-400" href="#about">
<span className="h-px w-6 bg-slate-700 group-hover:bg-white transition-colors"></span>
                  About
                </a>
</li>
<li className="">
<a className="group flex items-center gap-2 text-slate-400 hover:text-white font-sans" href="#recognition">
<span className="h-px w-6 bg-slate-700 group-hover:bg-white transition-colors"></span>
                  Recognition
                </a>
</li>
<li className="">
<a className="group flex items-center gap-2 text-slate-400 hover:text-white font-sans" href="#pricing">
<span className="h-px w-6 bg-slate-700 group-hover:bg-white transition-colors"></span>
                  Pricing
                </a>
</li>
<li className="">
<a className="group flex items-center gap-2 hover:text-white text-slate-400" href="#faq">
<span className="h-px w-6 bg-slate-700 group-hover:bg-white transition-colors"></span>
                  FAQ
                </a>
</li>
</ul>
</div>
</aside>

<div className="lg:col-span-10 space-y-20">

<section className="" id="message">
<div className="overflow-hidden border-gradient before:rounded-3xl rounded-3xl relative transition-all duration-500 ease-in-out hover:scale-[1.01] hover:shadow-2xl hover:shadow-indigo-500/10">
<img alt="Sunlit mountains and valley" className="sm:h-[44vw] md:h-[420px] lg:h-[520px] w-full h-[56vw] max-h-[540px] object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/da40d1ee-106c-4496-b945-0a8c11290ded_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/20 to-transparent pointer-events-none"></div>
<div className="-bottom-10 sm:bottom-6 md:bottom-8 flex sm:px-6 pr-4 pl-4 absolute right-0 left-0 justify-center">
<div className="md:p-5 border-gradient before:rounded-3xl bg-slate-900/80 w-full max-w-md rounded-3xl ring-white/10 ring-1 pt-4 pr-4 pb-4 pl-4" style={{maskImage: 'linear-gradient(150deg, transparent, black 10%, black 70%, transparent)', WebkitMaskImage: 'linear-gradient(150deg, transparent, black 10%, black 70%, transparent)'}}>
<div className="flex items-center gap-3">
<img alt="Iris avatar" className="w-8 h-8 object-cover ring-white/20 ring-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/41ec0205-228d-47a6-bae9-0e84ee8ba442_320w.webp"/>
<div>
<p className="text-sm font-medium text-white font-sans">Iris Kwan</p>
<p className="text-xs text-slate-400 font-sans">Product Designer • B2B &amp; SaaS</p>
</div>
</div>
<div className="mt-4 space-y-3" id="chatMessages"><div className="flex gap-2" style={{opacity: '0', transition: 'opacity 0.3s ease-out 0s'}}>
<div className="ml-8 max-w-[85%] rounded-2xl rounded-tl-sm bg-slate-800 text-white px-3.5 py-2.5 text-[13px] leading-relaxed shadow font-sans">
              Hey Iris, I found your portfolio and loved the clarity. Could you share what services you currently offer?
            </div>
</div><p className="text-[11px] text-slate-500 ml-8 font-sans" style={{opacity: '0', transition: 'opacity 0.3s ease-out 0s'}}>3 mins ago</p><div className="flex gap-2 justify-end" style={{opacity: '0', transition: 'opacity 0.3s ease-out 0s'}}>
<div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-indigo-600 text-white px-3.5 py-2.5 text-[13px] leading-relaxed shadow font-sans">
              Thank you! I help teams with end‑to‑end product design, UX audits, design systems, and interactive prototypes for web &amp; mobile.
            </div>
</div><div className="flex gap-2" style={{opacity: '0', transition: 'opacity 0.3s ease-out 0s'}}>
<div className="ml-8 max-w-[85%] rounded-2xl rounded-tl-sm bg-slate-800 text-white px-3.5 py-2.5 text-[13px] leading-relaxed shadow font-sans">
              What's your usual process to kick off?
            </div>
</div><p className="text-[11px] text-slate-500 ml-8 font-sans" style={{opacity: '0', transition: 'opacity 0.3s ease-out 0s'}}>Just now</p><div className="flex gap-2 justify-end" style={{opacity: '0', transition: 'opacity 0.3s ease-out 0s'}}>
<div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-indigo-600 text-white px-3.5 py-2.5 text-[13px] leading-relaxed shadow font-sans">
              Great question! I typically start with a discovery call to understand your goals, then move to user research and wireframes before high-fidelity designs.
            </div>
</div><div className="flex gap-2" style={{opacity: '0', transition: 'opacity 0.3s ease-out 0s'}}>
<div className="ml-8 max-w-[85%] rounded-2xl rounded-tl-sm bg-slate-800 text-white px-3.5 py-2.5 text-[13px] leading-relaxed shadow font-sans">
              How long does a typical project take?
            </div>
</div><p className="text-[11px] text-slate-500 ml-8 font-sans" style={{opacity: '0', transition: 'opacity 0.3s ease-out 0s'}}>Just now</p></div>
<div className="mt-4 flex items-center gap-2">
<div className="flex-1 relative">
<input className="w-full placeholder-slate-500 text-[13px] md:text-sm rounded-xl bg-slate-800/50 ring-1 ring-white/10 px-3.5 py-2.5 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-white" disabled="" id="chatInput" placeholder="Send a message" type="text"/>
<button className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors">
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</div>
</div>
</div>
</div>
<div className="absolute right-4 bottom-4 md:right-6 md:bottom-6">
<p className="text-[12px] md:text-xs text-white/90 font-sans">
      Message me here or mention <span className="font-medium font-sans">@iris</span> to ask about my service.
    </p>
</div>

</div>

<div className="md:mt-40 md:mb-40 mt-14 mb-14" style={{maskImage: 'linear-gradient(150deg, transparent, black 10%, black 40%, transparent)', WebkitMaskImage: 'linear-gradient(150deg, transparent, black 10%, black 40%, transparent)'}}>
<h1 className="sm:text-5xl lg:text-7xl text-4xl font-normal text-white tracking-tight font-instrument-serif">
    Design is not decoration.
    <br className="hidden sm:block"/>
    It's the bridge between vision and reality.
  </h1>
<div className="mt-8 space-y-6 max-w-2xl text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
<p>
      I believe in clarity over complexity. In outcomes over aesthetics. In systems that empower teams to move faster, not slower.
    </p>
<p>
      Every pixel serves a purpose. Every interaction tells a story. Every decision is rooted in understanding the problem before designing the solution.
    </p>
<p>
      I don't chase trends. I don't sell fantasy. I craft experiences that work—for real people, in real products, delivering real business value.
    </p>
<p className="text-white font-medium">
      This is design with intention. Design with accountability. Design that ships.
    </p>
</div>
<div className="mt-8 flex flex-wrap gap-4 items-center">
<span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/90 ring-1 ring-white/20 font-sans">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
      User-centered
    </span>
<span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/90 ring-1 ring-white/20 font-sans">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
      Data-driven
    </span>
<span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/90 ring-1 ring-white/20 font-sans">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
      Measurable impact
    </span>
</div>
</div>
</section>

<section className="md:my-40 bg-white/5 border-white/5 border rounded-3xl mt-20 mb-20 pt-8 pr-8 pb-8 pl-8" id="tools" style={{maskImage: 'linear-gradient(140deg, transparent, black 25%, black 75%, transparent)', WebkitMaskImage: 'linear-gradient(140deg, transparent, black 25%, black 75%, transparent)'}}>
<div className="animate-in text-center">
<span className="inline-flex items-center gap-1 rounded-full bg-lime-400/10 px-2 py-1 text-[11px] text-lime-300 ring-1 ring-lime-300/20 uppercase tracking-tight font-sans">
<svg className="lucide lucide-plug h-3.5 w-3.5" data-lucide="plug" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22v-5"></path><path d="M9 8V2"></path><path d="M15 8V2"></path><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"></path></svg>
                Design Tools
              </span>
<h2 className="karaoke-container sm:text-7xl text-4xl font-semibold tracking-tight mt-4" data-karaoke-animated="true" data-karaoke-wrapped="true">
<span className="karaoke-word"></span>
<span className="karaoke-word font-normal font-instrument-serif">
                  Tools
                </span>
<span className="karaoke-word font-normal font-instrument-serif">
                  I
                </span>
<span className="karaoke-word font-instrument-serif font-normal">
                  use
                </span>
<span className="karaoke-word font-instrument-serif font-normal">
                  every
                </span>
<span className="karaoke-word font-instrument-serif font-normal">
                  day
                </span>
<span className="karaoke-word"></span>
</h2>
<p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-neutral-300 karaoke-container" data-karaoke-animated="true" data-karaoke-wrapped="true">
<span className="karaoke-word"></span>
<span className="karaoke-word font-sans">Seamless</span>
<span className="karaoke-word font-sans">workflow</span>
<span className="karaoke-word font-sans">from</span>
<span className="karaoke-word font-sans">concept</span>
<span className="karaoke-word font-sans">to</span>
<span className="karaoke-word font-sans">production.</span>
<span className="karaoke-word font-sans">Design,</span>
<span className="karaoke-word font-sans">prototype,</span>
<span className="karaoke-word font-sans">and</span>
<span className="karaoke-word font-sans">collaborate.</span>
<span className="karaoke-word"></span>
</p>
</div>
<div className="relative mx-auto mt-12 max-w-4xl">
<div className="animate-in stagger-delay-1 flex sm:gap-10 gap-x-2 gap-y-6 items-center justify-center">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-github h-5 w-5 text-white" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</span>
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-slack h-5 w-5 text-white" data-lucide="slack" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="1.5" width="3" x="13" y="2"></rect><path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"></path><rect height="8" rx="1.5" width="3" x="8" y="14"></rect><path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"></path><rect height="3" rx="1.5" width="8" x="14" y="13"></rect><path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"></path><rect height="3" rx="1.5" width="8" x="2" y="8"></rect><path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"></path></svg>
</span>
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-trello h-5 w-5 text-white" data-lucide="trello" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><rect height="9" width="3" x="7" y="7"></rect><rect height="5" width="3" x="14" y="7"></rect></svg>
</span>
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-figma h-5 w-5 text-white" data-lucide="figma" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg>
</span>
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-database h-5 w-5 text-white" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
</span>
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-cloud h-5 w-5 text-white" data-lucide="cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
</span>
</div>
<div className="animate-in stagger-delay-2 relative mt-6 h-64">
<svg className="absolute inset-0 w-full h-full" fill="none" viewbox="0 0 900 360">
<defs></defs>
<circle className="" cx="150" cy="30" fill="#A3E635" filter="url(#glow)" r="4">
<animate attributename="opacity" className="" dur="2s" repeatcount="indefinite" values="0.5;1;0.5"></animate>
</circle>
<circle className="" cx="270" cy="30" fill="#A3E635" filter="url(#glow)" r="4">
<animate attributename="opacity" begin="0.2s" className="" dur="2s" repeatcount="indefinite" values="0.5;1;0.5"></animate>
</circle>
<circle className="" cx="390" cy="30" fill="#A3E635" filter="url(#glow)" r="4">
<animate attributename="opacity" begin="0.4s" className="" dur="2s" repeatcount="indefinite" values="0.5;1;0.5"></animate>
</circle>
<circle className="" cx="510" cy="30" fill="#A3E635" filter="url(#glow)" r="4">
<animate attributename="opacity" begin="0.6s" className="" dur="2s" repeatcount="indefinite" values="0.5;1;0.5"></animate>
</circle>
<circle className="" cx="630" cy="30" fill="#A3E635" filter="url(#glow)" r="4">
<animate attributename="opacity" begin="0.8s" className="" dur="2s" repeatcount="indefinite" values="0.5;1;0.5"></animate>
</circle>
<circle className="" cx="750" cy="30" fill="#A3E635" filter="url(#glow)" r="4">
<animate attributename="opacity" begin="1s" className="" dur="2s" repeatcount="indefinite" values="0.5;1;0.5"></animate>
</circle>
<path className="" d="M450 300 C 450 200, 300 120, 150 30" fill="none" stroke="#A3E635" strokeLinecap="round" strokeWidth="2" style={{strokeDasharray: '600', strokeDashoffset: '600'}}>
<animate attributename="stroke-dashoffset" begin="0s" calcmode="spline" className="" dur="3s" keysplines="0.42 0 0.58 1; 0.42 0 0.58 1" repeatcount="indefinite" values="600;0;600"></animate>
</path>
<path className="" d="M450 300 C 450 210, 360 130, 270 30" fill="none" stroke="#A3E635" strokeLinecap="round" strokeWidth="2" style={{strokeDasharray: '520', strokeDashoffset: '520'}}>
<animate attributename="stroke-dashoffset" begin="0.2s" calcmode="spline" className="" dur="3s" keysplines="0.42 0 0.58 1; 0.42 0 0.58 1" repeatcount="indefinite" values="520;0;520"></animate>
</path>
<path className="" d="M450 300 C 450 150, 420 80, 390 30" fill="none" stroke="#A3E635" strokeLinecap="round" strokeWidth="2" style={{strokeDasharray: '450', strokeDashoffset: '450'}}>
<animate attributename="stroke-dashoffset" begin="0.4s" calcmode="spline" className="" dur="3s" keysplines="0.42 0 0.58 1; 0.42 0 0.58 1" repeatcount="indefinite" values="450;0;450"></animate>
</path>
<path className="" d="M450 300 C 450 150, 480 80, 510 30" fill="none" stroke="#A3E635" strokeLinecap="round" strokeWidth="2" style={{strokeDasharray: '450', strokeDashoffset: '450'}}>
<animate attributename="stroke-dashoffset" begin="0.6s" calcmode="spline" className="" dur="3s" keysplines="0.42 0 0.58 1; 0.42 0 0.58 1" repeatcount="indefinite" values="450;0;450"></animate>
</path>
<path className="" d="M450 300 C 450 210, 540 130, 630 30" fill="none" stroke="#A3E635" strokeLinecap="round" strokeWidth="2" style={{strokeDasharray: '520', strokeDashoffset: '520'}}>
<animate attributename="stroke-dashoffset" begin="0.8s" calcmode="spline" className="" dur="3s" keysplines="0.42 0 0.58 1; 0.42 0 0.58 1" repeatcount="indefinite" values="520;0;520"></animate>
</path>
<path className="" d="M450 300 C 450 200, 600 120, 750 30" fill="none" stroke="#A3E635" strokeLinecap="round" strokeWidth="2" style={{strokeDasharray: '600', strokeDashoffset: '600'}}>
<animate attributename="stroke-dashoffset" begin="1s" calcmode="spline" className="" dur="3s" keysplines="0.42 0 0.58 1; 0.42 0 0.58 1" repeatcount="indefinite" values="600;0;600"></animate>
</path>
</svg>
<div className="absolute bottom-2 left-1/2 -translate-x-1/2">
<span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-lime-400/20 ring-2 ring-lime-300/40" style={{boxShadow: '0 0 20px rgba(163, 230, 53, 0.6), 0 0 40px rgba(163,230,53,0.3)'}}>
<svg className="lucide lucide-zap h-6 w-6 text-lime-300" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</span>
</div>
</div>
</div>
<div className="animate-in stagger-delay-3 mx-auto mt-12 max-w-4xl">
<div className="flex gap-3 flex-wrap text-sm gap-x-3 gap-y-3 items-center justify-center">
<div className="inline-flex items-center gap-2">
<svg className="lucide lucide-workflow h-4 w-4 text-lime-300" data-lucide="workflow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
<span className="font-medium font-sans">Fast prototyping</span>
</div>
<div className="hidden sm:block w-24 h-px border-t border-dashed border-lime-300/40"></div>
<div className="inline-flex items-center gap-2">
<svg className="lucide lucide-shield-check h-4 w-4 text-lime-300" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="font-medium font-sans">Version control</span>
</div>
<div className="hidden sm:block w-24 h-px border-t border-dashed border-lime-300/40"></div>
<div className="inline-flex items-center gap-2">
<svg className="lucide lucide-gauge h-4 w-4 text-lime-300" data-lucide="gauge" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>
<span className="font-medium font-sans">Live collaboration</span>
</div>
</div>
</div>
</section>

<section className="" id="process">

<div className="grid lg:gap-10 xl:gap-16 lg:grid-cols-2 lg:my-40 mt-40 mb-40 gap-x-8 gap-y-8 items-center">
<div className="order-2 lg:order-1">
<div className="overflow-hidden shadow-black/50 sm:rounded-3xl bg-white/5 border-white/10 border rounded-2xl relative shadow-2xl" style={{transform: 'perspective(1000px) rotateX(0deg)', animationPlayState: 'running', maskImage: 'linear-gradient(130deg, transparent, black 35%, black 60%, transparent)', WebkitMaskImage: 'linear-gradient(130deg, transparent, black 35%, black 60%, transparent)'}}>
<img alt="Team collaborating in modern studio" className="sm:h-[40vh] md:h-[50vh] lg:h-[62vh] w-full h-[30vh] max-h-full object-cover saturate-50" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5ad9ce22-2376-4be9-92f8-ac48b9861d75_1600w.webp"/>
<div className="pointer-events-none absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-violet-600/10 via-transparent to-fuchsia-600/10 mix-blend-overlay"></div>
<div className="pointer-events-none absolute inset-0 rounded-2xl sm:rounded-3xl" style={{boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.06), inset 0 0 0 2px rgba(124, 58, 237, 0.15), inset 0 40px 120px rgba(0,0,0,0.35)'}}></div>
</div>
</div>
<div className="order-1 lg:order-2 h-full max-h-full relative">
<div className="inline-flex overflow-hidden text-xs text-white/80 bg-[#000000]/5 border-white/10 border rounded-full mb-4 pt-2 pr-3 pb-2 pl-3 backdrop-blur gap-x-2 gap-y-2 items-center" style={{animationPlayState: 'running'}}>
                  Process
                </div>
<h2 className="sm:text-4xl lg:text-5xl xl:text-6xl text-3xl font-normal tracking-tight font-instrument-serif mt-4" style={{animationPlayState: 'running'}}>
  Crafting digital experiences
  <span className="block bg-clip-text font-normal text-transparent font-instrument-serif bg-neutral-50/60">
    driven by data and user insight
  </span>
</h2>
<p className="leading-relaxed text-base text-white/70 max-w-xl mt-4" style={{animationPlayState: 'running'}}>
                  I partner with B2B &amp; SaaS teams to turn complexity into
                  simple, scalable experiences—across discovery, design systems,
                  and high‑fidelity prototyping.
                </p>
<div className="overflow-hidden sm:h-72 md:h-80 sm:rounded-3xl sm:mt-8 h-60 max-h-full border-white/10 rounded-2xl mt-6 relative shadow-lg backdrop-blur-sm" style={{maskImage: 'linear-gradient(180deg, transparent, black 30%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 30%, black 80%, transparent)'}}>
<div className="animate-scroll-up sm:pt-8 sm:pr-6 sm:pb-8 sm:pl-6 pt-6 pr-4 pb-6 pl-4 space-y-4" style={{animation: 'scrollUp 12s linear infinite'}}>
<div className="bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg opacity-0 translate-y-4" style={{borderTop: '1px solid rgb(255 255 255 / 0.4)', boxShadow: '0 -2px 8px rgba(255, 255, 255, 0.15), 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)', animation: 'fadeInUp 0.8s ease-out 0.2s forwards'}}>
<div className="flex items-start justify-between">
<div className="inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl bg-white/10 text-white border border-white/20">
<svg className="lucide lucide-columns-3 h-4 w-4 sm:h-5 sm:w-5" data-lucide="columns-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M9 3v18"></path><path d="M15 3v18"></path></svg>
</div>
<span className="rounded-full border border-white/20 bg-white/10 px-2 sm:px-3 py-1 text-xs text-white font-sans">
                          Strategy
                        </span>
</div>
<h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-semibold tracking-tight font-sans">
                        Outcome‑driven roadmaps
                      </h3>
<p className="mt-1 sm:mt-2 text-xs sm:text-sm text-white/70 font-sans">
                        Align teams with clear goals, fast feedback loops, and
                        pragmatic milestones to ship with confidence.
                      </p>
</div>
<div className="bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg opacity-0 translate-y-4" style={{borderTop: '1px solid rgb(255 255 255 / 0.4)', boxShadow: '0 -2px 8px rgba(255, 255, 255, 0.15), 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)', animation: 'fadeInUp 0.8s ease-out 0.4s forwards'}}>
<div className="flex items-start justify-between">
<div className="inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl bg-white/10 text-white border border-white/20">
<svg className="lucide lucide-palette h-4 w-4 sm:h-5 sm:w-5" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</div>
<span className="rounded-full border border-white/20 bg-white/10 px-2 sm:px-3 py-1 text-xs text-white font-sans">
                          Design
                        </span>
</div>
<h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-semibold tracking-tight font-sans">
                        Design systems that scale
                      </h3>
<p className="mt-1 sm:mt-2 text-xs sm:text-sm text-white/70 font-sans">
                        Consistent components, accessibility baked‑in, and rapid
                        iteration across web &amp; mobile.
                      </p>
</div>
<div className="bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg opacity-0 translate-y-4" style={{borderTop: '1px solid rgb(255 255 255 / 0.4)', boxShadow: '0 -2px 8px rgba(255, 255, 255, 0.15), 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)', animation: 'fadeInUp 0.8s ease-out 0.6s forwards'}}>
<div className="flex items-start justify-between">
<div className="inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl bg-white/10 text-white border border-white/20">
<svg className="lucide lucide-cpu h-4 w-4 sm:h-5 sm:w-5" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<span className="rounded-full border border-white/20 bg-white/10 px-2 sm:px-3 py-1 text-xs text-white font-sans">
                          Prototyping
                        </span>
</div>
<h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-semibold tracking-tight font-sans">
                        Interactive prototypes
                      </h3>
<p className="mt-1 sm:mt-2 text-xs sm:text-sm text-white/70 font-sans">
                        High‑fidelity flows that de‑risk engineering and align
                        stakeholders before development.
                      </p>
</div>

<div className="bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg" style={{borderTop: '1px solid rgb(255 255 255 / 0.4)', boxShadow: '0 -2px 8px rgba(255, 255, 255, 0.15), 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'}}>
<div className="flex items-start justify-between">
<div className="inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl bg-white/10 text-white border border-white/20">
<svg className="lucide lucide-columns-3 h-4 w-4 sm:h-5 sm:w-5" data-lucide="columns-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M9 3v18"></path><path d="M15 3v18"></path></svg>
</div>
<span className="rounded-full border border-white/20 bg-white/10 px-2 sm:px-3 py-1 text-xs text-white font-sans">
                          Strategy
                        </span>
</div>
<h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-semibold tracking-tight font-sans">
                        Outcome‑driven roadmaps
                      </h3>
<p className="mt-1 sm:mt-2 text-xs sm:text-sm text-white/70 font-sans">
                        Align teams with clear goals, fast feedback loops, and
                        pragmatic milestones to ship with confidence.
                      </p>
</div>
</div>
</div>
<style className="">
                  @keyframes fadeInUp {
                    from {
                      opacity: 0;
                      transform: translateY(16px);
                    }
                    to {
                      opacity: 1;
                      transform: translateY(0);
                    }
                  }

                  @keyframes scrollUp {
                    0% {
                      transform: translateY(0);
                    }
                    100% {
                      transform: translateY(-25%);
                    }
                  }

                  .animate-scroll-up:hover {
                    animation-play-state: paused;
                  }
                </style>
</div>
</div>

<div className="mt-14">
<div className="overflow-hidden bg-white/5 rounded-2xl ring-white/10 ring-1" id="about" style={{maskImage: 'linear-gradient(150deg, transparent, black 20%, black 75%, transparent)', WebkitMaskImage: 'linear-gradient(150deg, transparent, black 20%, black 75%, transparent)'}}>
<div className="flex border-white/10 border-b pt-6 pr-6 pb-6 pl-6 items-end justify-between">
<h2 className="sm:text-7xl text-2xl font-normal text-white tracking-tight font-instrument-serif">
                    About
                  </h2>
<p className="hidden sm:block text-xs text-neutral-400 font-sans">
                    Story, experience, recognitions
                  </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-12">

<div className="p-6 md:col-span-3 border-b md:border-b-0 md:border-r border-white/10">
<p className="text-sm text-neutral-400 font-sans">
                      Product Designer
                    </p>
<p className="mt-1 text-lg font-medium tracking-tight text-white font-sans">
                      Iris Kwan
                    </p>
<div className="mt-4 flex items-center gap-2 text-xs text-neutral-400">
<svg className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="font-sans">Remote‑friendly • Global</span>
</div>
</div>

<div className="relative md:col-span-6 md:row-span-2 border-b md:border-b-0 md:border-r border-white/10">
<div className="relative aspect-[16/10] md:aspect-[9/10] lg:aspect-[16/10]">
<img alt="Portrait side profile with dramatic lighting" className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0c3c539c-3652-4f65-8b64-14356c3bae10_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent pointer-events-none"></div>

<div className="hidden md:block absolute inset-0 pointer-events-none">
<div className="absolute top-5 right-5 rounded-xl bg-black/45 ring-1 ring-white/10 backdrop-blur-sm p-4">
<div className="text-2xl lg:text-3xl tracking-tight text-white font-instrument-serif font-normal">
                            100+
                          </div>
<p className="text-[11px] text-neutral-300 mt-0.5 font-sans">
                            Completed Projects
                          </p>
</div>
<div className="absolute bottom-5 left-5 rounded-xl bg-black/45 ring-1 ring-white/10 backdrop-blur-sm p-4">
<div className="text-2xl lg:text-3xl tracking-tight text-white font-instrument-serif font-normal">
                            10+
                          </div>
<p className="text-[11px] text-neutral-300 mt-0.5 font-sans">
                            Years of Experience
                          </p>
</div>
<div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-xl bg-black/45 ring-1 ring-white/10 backdrop-blur-sm p-4">
<div className="text-2xl lg:text-3xl tracking-tight text-white font-instrument-serif font-normal">
                            3
                          </div>
<p className="text-[11px] text-neutral-300 mt-0.5 font-sans">
                            Languages Spoken
                          </p>
</div>
</div>
</div>
</div>

<div className="p-6 md:col-span-3 border-b md:border-b-0">
<div className="text-3xl tracking-tight text-white font-instrument-serif font-normal">
                      5
                    </div>
<p className="text-xs text-neutral-400 mt-1 font-sans">
                      Industry Awards
                    </p>
</div>

<div className="p-6 md:col-span-3 border-t md:border-t border-white/10 md:border-r">
<p className="text-sm text-neutral-300 leading-relaxed font-sans">
                      I design and build considered interfaces and rapid
                      prototypes that bridge engineering and visual craft. From
                      early concepts to production, I help teams move faster
                      with clarity and intention.
                    </p>
<a className="mt-4 inline-flex items-center gap-2 text-sm font-medium tracking-tight text-white bg-white/10 hover:bg-white/20 rounded-full px-3 py-1.5 ring-1 ring-white/10" href="#recognition">
<svg className="lucide lucide-file-text w-4 h-4" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
<span className="font-sans">Request CV</span>
</a>
</div>

<div className="p-6 md:col-span-3 border-t border-white/10">
<div className="text-3xl tracking-tight text-white font-instrument-serif font-normal">
                      30+
                    </div>
<p className="text-xs text-neutral-400 mt-1 font-sans">
                      Clients Served
                    </p>
</div>
</div>

<div className="md:hidden border-t border-white/10 grid grid-cols-3">
<div className="p-4 text-center border-r border-white/10">
<div className="text-xl font-semibold tracking-tight text-white font-sans">
                      100+
                    </div>
<p className="text-[11px] text-neutral-400 mt-0.5 font-sans">
                      Projects
                    </p>
</div>
<div className="p-4 text-center border-r border-white/10">
<div className="text-xl font-semibold tracking-tight text-white font-sans">
                      10+
                    </div>
<p className="text-[11px] text-neutral-400 mt-0.5 font-sans">
                      Years
                    </p>
</div>
<div className="p-4 text-center">
<div className="text-xl font-semibold tracking-tight text-white font-sans">
                      3
                    </div>
<p className="text-[11px] text-neutral-400 mt-0.5 font-sans">
                      Languages
                    </p>
</div>
</div>
</div>
</div>
</section>

<section className="" id="recognition">
<div className="sm:py-16 pt-12 pb-12">
<h2 className="leading-none sm:text-7xl lg:text-7xl text-5xl font-normal text-white tracking-tight font-instrument-serif mt-4">
                Award-winning
              </h2>
<h2 className="leading-none sm:text-7xl lg:text-7xl text-5xl font-normal text-white tracking-tight font-instrument-serif">
                Portfolio
              </h2>
<div className="mt-6 flex items-center gap-3 text-white/30">
<span className="text-base font-sans">+</span>
<div className="h-px flex-1 bg-white/10"></div>
<span className="text-base font-sans">+</span>
</div>
<div className="mt-8 grid lg:grid-cols-12 gap-8 items-start">
<div className="hidden lg:block lg:col-span-5"></div>
<div className="lg:col-span-7">
<p className="text-xl sm:text-2xl text-white/70 tracking-tight font-instrument-serif font-normal">
                    Recognitions for product design, usability, and craft from
                    industry organizations and communities.
                  </p>
<div className="mt-8 border-t border-white/10 divide-y divide-white/10">
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4">
<div className="text-base text-white/80 font-sans">
                        Design Excellence Awards
                      </div>
<div className="text-base text-white/80 font-sans">
                        Interface Craft — Finalist
                      </div>
<div className="text-base text-white/60 text-right font-sans">
                        (2024)
                      </div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4">
<div className="text-base text-white/80 font-sans">
                        Product Community Awards
                      </div>
<div className="text-base text-white/80 font-sans">
                        Best UX Initiative
                      </div>
<div className="text-base text-white/60 text-right font-sans">
                        (2024)
                      </div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4">
<div className="text-base text-white/80 font-sans">
                        Industry Excellence Awards
                      </div>
<div className="text-base text-white/80 font-sans">
                        Customer Impact
                      </div>
<div className="text-base text-white/60 text-right font-sans">
                        (2024)
                      </div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4">
<div className="text-base text-white/80 font-sans">
                        Design Systems Collective
                      </div>
<div className="text-base text-white/80 font-sans">
                        System of the Year — Nominee
                      </div>
<div className="text-base text-white/60 text-right font-sans">
                        (2024)
                      </div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4">
<div className="text-base text-white/80 font-sans">
                        Digital Product Awards
                      </div>
<div className="text-base text-white/80 font-sans">
                        Innovation in UX
                      </div>
<div className="text-base text-white/60 text-right font-sans">
                        (2023)
                      </div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4">
<div className="text-base text-white/80 font-sans">
                        Startup Community
                      </div>
<div className="text-base text-white/80 font-sans">
                        Top Launch
                      </div>
<div className="text-base text-white/60 text-right font-sans">
                        (2023)
                      </div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4">
<div className="text-base text-white/80 font-sans">
                        UX Research Guild
                      </div>
<div className="text-base text-white/80 font-sans">
                        Outstanding Usability
                      </div>
<div className="text-base text-white/60 text-right font-sans">
                        (2023)
                      </div>
</div>
</div>
</div>
</div>
</div>
</section>
</div>
</div>
<section className="isolate overflow-hidden pt-24 pb-24 relative" id="pricing" style={{maskImage: 'linear-gradient(180deg, transparent, black 15%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 15%, black 100%, transparent)'}}>
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_0%,rgba(255,255,255,0.05),transparent_60%)]"></div>
<div className="z-10 md:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="text-center">
<h2 className="sm:text-5xl text-4xl font-normal tracking-tight font-instrument-serif text-white">
              Pricing Plans
            </h2>
<div className="flex mt-6 gap-x-4 gap-y-4 items-center justify-center">
<span className="text-sm text-white/70 font-sans">Monthly</span>
<button className="relative inline-flex h-8 w-16 items-center rounded-full bg-white/10 p-1 ring-1 ring-white/15 transition" id="billingToggle">
<span className="inline-flex h-6 w-6 translate-x-8 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.25)] transition will-change-transform" id="billingKnob" style={{transform: 'translateX(32px)'}}></span>
</button>
<span className="text-sm text-white/70 font-sans">
                Annual
                <span className="ml-2 inline-flex items-center rounded-full bg-amber-400/10 px-2 py-0.5 text-[10px] text-amber-300 ring-1 ring-amber-300/20" id="annualBadge" style={{opacity: '1'}}>
                  Save 20%
                </span>
</span>
</div>
</div>
<div className="grid gap-6 lg:grid-cols-3 mt-10 gap-x-6 gap-y-6">
<div className="border-white/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-xl">
<div className="flex items-center justify-between">
<div className="">
<div className="text-sm uppercase tracking-[0.18em] text-white/60 font-sans">
                    Starter
                  </div>
<div className="mt-2 flex items-end gap-2">
<div className="text-4xl font-normal tracking-tight text-white font-instrument-serif">
                      $0
                    </div>
<div className="text-sm text-white/50 font-sans" data-period="">
                      /yr
                    </div>
</div>
</div>
</div>
<button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-medium tracking-tight text-black hover:bg-white/90 font-sans">
                Start Building
              </button>
<ul className="mt-6 space-y-3 text-sm text-white/75 font-sans">
<li className="flex items-start gap-2">
<svg className="lucide lucide-check h-4 w-4 text-emerald-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                  Up to 5 projects per month
                </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check h-4 w-4 text-emerald-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                  Basic design templates
                </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check h-4 w-4 text-emerald-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                  Email support
                </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check h-4 w-4 text-emerald-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                  Community resources
                </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check h-4 w-4 text-emerald-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                  2-week revision window
                </li>
</ul>
</div>
<div className="border-white/10 border ring-amber-300/10 ring-1 rounded-3xl pt-2 pr-2 pb-2 pl-2 relative backdrop-blur-xl">
<div className="overflow-hidden bg-gradient-to-b from-white/[0.06] to-transparent rounded-2xl relative">
<div className="absolute top-0 right-0 bottom-0 left-0">
<img alt="Premium background" className="opacity-60 w-full h-48 object-cover rounded-t-2xl" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/bcea1183-92c3-41f9-8bab-dd0d75b35a36_800w.webp" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 45%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 45%, transparent)'}}/>
<div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_80%_0%,rgba(251,191,36,0.25),transparent_60%)]"></div>
</div>
<div className="pt-6 pr-6 pb-6 pl-6 relative">
<div className="flex items-start justify-between">
<div className="">
<div className="text-sm uppercase tracking-[0.18em] text-white/70 font-sans">
                        Professional
                      </div>
<div className="mt-2 flex items-end gap-2">
<div className="text-4xl font-normal tracking-tight text-white font-instrument-serif" data-annual="$470" data-monthly="$49">
                          $470
                        </div>
<div className="text-sm text-white/60 font-sans" data-period="">
                          /yr
                        </div>
</div>
</div>
<span className="inline-flex items-center gap-1 rounded-full bg-amber-400/15 px-2 py-1 text-[10px] text-amber-300 ring-1 ring-amber-300/25 font-sans">
<svg className="lucide lucide-star h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
                      Most Popular
                    </span>
</div>
<button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-amber-300 to-amber-400 px-4 py-3 text-sm font-medium tracking-tight text-black shadow-[0_10px_30px_rgba(251,191,36,0.25)] hover:from-amber-200 hover:to-amber-300 font-sans">
                    Upgrade to Pro
                  </button>
<ul className="mt-6 space-y-3 text-sm text-white/85 font-sans">
<li className="flex items-start gap-2">
<svg className="lucide lucide-check-circle-2 h-4 w-4 text-emerald-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
                      Unlimited projects
                    </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check-circle-2 h-4 w-4 text-emerald-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
                      Advanced design systems &amp; prototyping
                    </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check-circle-2 h-4 w-4 text-emerald-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
                      UX audits &amp; analytics
                    </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check-circle-2 h-4 w-4 text-emerald-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
                      Priority support &amp; custom workflows
                    </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check-circle-2 h-4 w-4 text-emerald-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
                      4-week revision window
                    </li>
</ul>
</div>
</div>
</div>
<div className="border-white/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-xl">
<div className="flex items-center justify-between">
<div className="">
<div className="text-sm uppercase tracking-[0.18em] text-white/60 font-sans">
                    Enterprise
                  </div>
<div className="mt-2 flex items-end gap-2">
<div className="text-4xl font-normal tracking-tight text-white font-instrument-serif">
                      Custom
                    </div>
<div className="text-sm text-white/50 font-sans" data-period="">
                      /yr
                    </div>
</div>
</div>
</div>
<button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-medium tracking-tight text-white/90 hover:bg-white/10 font-sans">
                Contact Sales
              </button>
<ul className="mt-6 space-y-3 text-sm text-white/75 font-sans">
<li className="flex items-start gap-2">
<svg className="lucide lucide-check h-4 w-4 text-emerald-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                  Dedicated design team
                </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check h-4 w-4 text-emerald-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                  Custom design systems &amp; brand guidelines
                </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check h-4 w-4 text-emerald-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                  On‑site workshops &amp; training
                </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check h-4 w-4 text-emerald-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                  24/7 dedicated support team
                </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check h-4 w-4 text-emerald-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                  Unlimited revisions
                </li>
</ul>
</div>
</div>
<p className="text-xs text-white/50 text-center mt-6 font-sans">
            All plans include initial consultation. Pricing flexible based on
            project scope.
          </p>
</div>
</section>
<section className="sm:px-6 lg:px-8 md:py-20 w-full max-w-7xl mr-auto ml-auto pt-14 pr-4 pb-14 pl-4" id="faq">
<div className="flex items-center justify-center">
<span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wide border rounded-full px-3 py-1 text-slate-300/80 bg-white/5 border-white/10 font-sans">
            
            Common Questions
          </span>
</div>
<div className="max-w-3xl text-center mx-auto mt-6">
<h1 className="text-4xl md:text-6xl font-normal tracking-tight text-slate-50 font-instrument-serif">
            Everything You
            <span className="bg-clip-text italic font-instrument-serif bg-gradient-to-r from-slate-200 via-cyan-300 to-indigo-300">
              Need to Know
            </span>
</h1>
<p className="mt-4 text-base md:text-lg text-slate-400 font-sans">
            Quick answers to help you get started with confidence
          </p>
</div>
<div className="grid gap-6 lg:grid-cols-2 mt-12">
<div className="overflow-hidden hover:bg-white/10 hover:ring-white/20 transition-all self-start bg-white/5 rounded-[1.2em] ring-white/10 ring-1 relative" style={{backdropFilter: 'blur(16px)', maskImage: 'linear-gradient(220deg, transparent, black 30%, black 70%, transparent)', WebkitMaskImage: 'linear-gradient(220deg, transparent, black 30%, black 70%, transparent)'}}>
<div className="md:p-8 flex flex-col text-center pt-6 pr-6 pb-6 pl-6 relative items-center">
<div className="h-12 w-12 flex ring-white/10 ring-1 bg-black/40 rounded-xl items-center justify-center">
<svg className="lucide lucide-message-circle-question h-6 w-6 text-slate-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path>
<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
<path d="M12 17h.01"></path>
</svg>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-100 mt-4 font-sans">
                Need Personal Guidance?
              </h3>
<p className="mt-2 text-sm md:text-base text-slate-400 max-w-md font-sans">
                Have specific questions about your project? Let's discuss your
                needs and find the perfect design solution together.
              </p>
<a className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white hover:bg-white/10 transition font-sans" href="#book">
                
                Schedule Consultation
              </a>
</div>
</div>
<div className="space-y-4" style={{maskImage: 'linear-gradient(220deg, transparent, black 30%, black 75%, transparent)', WebkitMaskImage: 'linear-gradient(220deg, transparent, black 30%, black 75%, transparent)'}}>
<div className="faq-item rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition">
<button className="w-full flex gap-4 focus:outline-none text-left pt-3 pr-4 pb-3 pl-4 items-center justify-between" data-faq-toggle="" type="button">
<span className="text-sm md:text-base text-slate-200 font-medium font-sans">
                  What's your typical project timeline?
                </span>
<svg className="lucide lucide-chevron-down h-5 w-5 text-slate-300 transition-transform duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="faq-content overflow-hidden transition-all duration-300 text-sm text-slate-400 pt-0 pr-4 pb-0 pl-4 font-sans" style={{maxHeight: '0px'}}>
<div className="pb-6">
                  Most projects take 2–6 weeks depending on scope. Simple UX
                  audits or design systems can be delivered in 1–2 weeks, while
                  full product design sprints typically require 4–6 weeks.
                  Enterprise projects are scoped individually.
                </div>
</div>
</div>
<div className="faq-item rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition">
<button className="w-full flex gap-4 focus:outline-none text-left pt-3 pr-4 pb-3 pl-4 items-center justify-between" data-faq-toggle="" type="button">
<span className="text-sm md:text-base text-slate-200 font-medium font-sans">
                  Do you work with startups or only established companies?
                </span>
<svg className="lucide lucide-chevron-down transition-transform duration-300 h-5 w-5 text-slate-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="faq-content px-4 pt-0 text-sm text-slate-400 overflow-hidden transition-all duration-300 font-sans" style={{maxHeight: '0px'}}>
<div className="pb-6">
                  I work with both! Whether you're an early-stage startup
                  validating your first MVP or a scaling SaaS company refining
                  your product experience, I tailor my process to fit your stage
                  and budget.
                </div>
</div>
</div>
<div className="faq-item rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition">
<button className="w-full flex gap-4 focus:outline-none text-left pt-3 pr-4 pb-3 pl-4 items-center justify-between" data-faq-toggle="" type="button">
<span className="text-sm md:text-base text-slate-200 font-medium font-sans">
                  What deliverables can I expect?
                </span>
<svg className="lucide lucide-chevron-down h-5 w-5 text-slate-300 transition-transform duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="faq-content px-4 pt-0 text-sm text-slate-400 overflow-hidden transition-all duration-300 font-sans" style={{maxHeight: '0px'}}>
<div className="pb-6">
                  Depending on the service: high-fidelity Figma prototypes,
                  design system documentation, interactive prototypes, UX audit
                  reports, user flow diagrams, and developer handoff files. All
                  source files are included with full ownership transfer.
                </div>
</div>
</div>
<div className="faq-item rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition">
<button className="w-full flex gap-4 focus:outline-none text-left pt-3 pr-4 pb-3 pl-4 items-center justify-between" data-faq-toggle="" type="button">
<span className="text-sm md:text-base text-slate-200 font-medium font-sans">
                  Can you integrate with our existing tools and workflow?
                </span>
<svg className="lucide lucide-chevron-down h-5 w-5 text-slate-300 transition-transform duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="faq-content px-4 pt-0 text-sm text-slate-400 overflow-hidden transition-all duration-300 font-sans" style={{maxHeight: '0px'}}>
<div className="pb-6">
                  Absolutely. I work seamlessly with tools like Figma, Slack,
                  Trello, GitHub, and most project management platforms. My
                  process is designed to fit into your existing workflow without
                  disruption.
                </div>
</div>
</div>
<div className="faq-item rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition">
<button className="w-full flex gap-4 focus:outline-none text-left pt-3 pr-4 pb-3 pl-4 items-center justify-between" data-faq-toggle="" type="button">
<span className="text-sm md:text-base text-slate-200 font-medium font-sans">
                  What if I need revisions after the project is complete?
                </span>
<svg className="lucide lucide-chevron-down h-5 w-5 text-slate-300 transition-transform duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="faq-content px-4 pt-0 text-sm text-slate-400 overflow-hidden transition-all duration-300 font-sans" style={{maxHeight: '0px'}}>
<div className="pb-6">
                  All plans include a post-launch revision window (2–4 weeks
                  depending on tier). For ongoing support, I offer monthly
                  retainer packages that cover updates, new features, and
                  continuous optimization.
                </div>
</div>
</div>
</div>
</div>
</section>
<footer className="sm:px-6 md:px-10 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4 relative" style={{maskImage: 'linear-gradient(210deg, transparent, black 0%, black 60%, transparent)', WebkitMaskImage: 'linear-gradient(210deg, transparent, black 0%, black 60%, transparent)'}}>
<div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
<div className="absolute left-0 bottom-0 w-[60%] h-[80%] rounded-[40%] bg-gradient-to-tr from-white/5 to-transparent blur-3xl"></div>
</div>
<div className="flex items-center justify-center gap-4 text-neutral-400 text-sm">
<span className="h-px w-12 bg-white/10"></span>
<span className="italic font-sans">Reach out anytime</span>
<span className="h-px w-12 bg-white/10"></span>
</div>
<h2 className="mt-4 text-4xl sm:text-6xl text-white text-center font-instrument-serif font-normal tracking-tight">
          Let's Stay
          <span className="text-white/90 font-instrument-serif font-normal tracking-tight">
            Connected
          </span>
</h2>
<p className="mt-4 text-sm sm:text-base text-neutral-400 max-w-xl mx-auto text-center font-sans">
          Got questions or want to collaborate? Feel free to reach out—I'm open
          to new projects or just a casual chat!
        </p>
<div className="mt-6 flex justify-center">
<a className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-white/5 hover:bg-white/10 ring-1 ring-white/10 text-white text-sm font-medium tracking-tight transition shadow-[inset_0_-2px_0_rgba(255,255,255,0.15)] font-sans" href="#book">
<svg className="lucide lucide-arrow-up-right w-4 h-4" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
            Contact Me
          </a>
</div>
<div className="mt-8 flex items-center justify-center gap-6 text-neutral-400">
<a aria-label="X (Twitter)" className="p-2 rounded hover:bg-white/5 hover:text-white transition" href="#">
<svg className="lucide lucide-twitter w-5 h-5" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</a>
<span className="h-6 w-px bg-white/10"></span>
<a aria-label="Instagram" className="p-2 rounded hover:bg-white/5 hover:text-white transition" href="#">
<svg className="lucide lucide-instagram w-5 h-5" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</a>
<span className="h-6 w-px bg-white/10"></span>
<a aria-label="LinkedIn" className="p-2 rounded hover:bg-white/5 hover:text-white transition" href="#">
<svg className="lucide lucide-linkedin w-5 h-5" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>
</div>
<p className="mt-6 text-center">
<a className="text-sm text-neutral-300 underline underline-offset-4 hover:text-white font-sans" href="mailto:hello@iriskwan.com">
            hello@iriskwan.com
          </a>
</p>
<div className="mt-12 h-px bg-white/5"></div>
<div className="mt-6 flex items-center justify-between text-xs text-neutral-500">
<p className="font-sans">
            ©
            <span className="font-sans" id="year">2025</span>
            Iris Kwan
          </p>
<div className="hidden sm:block text-neutral-500"></div>
</div>
</footer>
</main>



    </>
  );
}
