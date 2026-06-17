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
navy: {
DEFAULT: '#1e3a5f',
900: '#152943',
950: '#0b1523', // Very dark navy base
},
plum: {
DEFAULT: '#6b2d5c',
light: '#8a3d76'
},
gold: {
DEFAULT: '#d4af37',
light: '#e5c158',
dark: '#b8962e'
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
},
animation: {
'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
}
}
}



      const chatBox = document.getElementById('chat-box');
      const chatMessages = document.getElementById('chat-messages');
      let isOpen = false;

      function toggleChat() {
          isOpen = !isOpen;
          if (isOpen) {
              chatBox.classList.remove('chat-exit');
              chatBox.classList.add('chat-enter');
              setTimeout(() => document.getElementById('chat-input').focus(), 100);
          } else {
              chatBox.classList.remove('chat-enter');
              chatBox.classList.add('chat-exit');
          }
      }

      // Knowledge Base Logic
      const knowledgeBase = [
          {
              keywords: ["who", "barbara", "background", "qualification", "coach", "experience", "bio"],
              response: "Barbara Harrington is a specialized coach helping accomplished women in STEMM transition from corporate careers to six-figure consulting practices. With 20+ years of experience, she guides women through the psychological and strategic shifts needed to succeed."
          },
          {
              keywords: ["program", "process", "approach", "method", "work", "structure", "curriculum", "detail"],
              response: "The program includes Mindset Work (unlearning corporate conditioning), Strategic Planning, Market Research, and Sales Positioning. It's customized for you to help you reclaim your value and build a practice that fits your life."
          },
          {
              keywords: ["cost", "price", "fee", "investment", "money", "expensive", "rate", "afford"],
              response: "Investment varies based on support level, typically mid-4 to 5 figures. It's best discussed during a free Discovery Call to align with your goals. The ROI is high—most clients reach $250K-500K+ in annual revenue."
          },
          {
              keywords: ["time", "long", "month", "year", "duration", "fast", "timeline", "when"],
              response: "Most clients see breakthroughs within 6-18 months. Some launch in 3-4 months. Many plan their transition while still employed to reduce risk, building a financial cushion and landing first retainers before leaving."
          },
          {
              keywords: ["risk", "fail", "secure", "safe", "job", "quit", "leave", "security"],
              response: "Barbara's approach is designed for risk-averse professionals. We recommend planning the transition over 12-18 months while employed, landing first retainers before leaving, and maintaining a 6-12 month financial cushion."
          },
          {
              keywords: ["imposter", "doubt", "ready", "enough", "confidence", "fear", "scared"],
              response: "Imposter syndrome is normal for high-achieving women in STEMM (70-80% experience it). You have 15-25+ years of expertise. Companies hire for results, not confidence. Coaching helps you unlearn the conditioning that makes you underestimate your value."
          },
          {
              keywords: ["mba", "business", "credential", "degree", "qualified"],
              response: "You don't need an MBA. Your STEMM expertise IS your credential. Clients pay for your ability to solve specific problems, not generic business degrees. Domain experts often command higher rates."
          },
          {
              keywords: ["age", "old", "50", "55", "discrimination", "mature"],
              response: "Being 50+ is an advantage. Mature professionals bring deep expertise, credibility, and wisdom that command premium rates ($150-500+/hour). Many of Barbara's most successful clients are 50-65."
          },
          {
              keywords: ["result", "income", "salary", "earn", "revenue", "much", "profit"],
              response: "Clients often transition from $100-180K corporate salaries to $250K-500K+ consulting revenue within 12-18 months. A six-figure practice is conservative; many exceed this with just 3-5 core retainer clients."
          },
          {
              keywords: ["swot", "guide", "download", "analysis", "resource"],
              response: "The free SWOT Analysis Guide helps you identify Strengths, Weaknesses, Opportunities, and Threats specifically for a STEMM-to-consulting transition. It's the perfect first step to gain clarity. Download it above!"
          },
          {
              keywords: ["call", "discovery", "schedule", "book", "contact", "appointment"],
              response: "A Discovery Call is a complimentary 30-45 minute conversation to explore your goals. It's low pressure—just an honest conversation about your background and potential. Use the button in the menu to book!"
          },
          {
              keywords: ["client", "find", "sales", "network", "marketing"],
              response: "We move away from 'begging' for work. You'll learn to leverage your existing network and reputation to attract high-value opportunities. Most clients land their first contracts within 2-6 months."
          },
          {
              keywords: ["legal", "contract", "compete", "allow", "restriction", "lawyer"],
              response: "Please review your employment contract and consult an attorney regarding non-competes. Often, there are adjacent fields or ways to negotiate. Barbara can help think through strategic alternatives, but cannot give legal advice."
          }
      ];

      function findResponse(input) {
          const lowerInput = input.toLowerCase();

          for (const item of knowledgeBase) {
              if (item.keywords.some(keyword => lowerInput.includes(keyword))) {
                  return item.response;
              }
          }

          // Fallback response
          return "That's a great question! While I don't have the specific details right here, I'd highly recommend scheduling a Discovery Call with Barbara. She can give you personalized advice based on your specific situation.";
      }

      function handleChatSubmit(e) {
          e.preventDefault();
          const input = document.getElementById('chat-input');
          const message = input.value.trim();
          if (!message) return;

          // Add user message
          appendMessage('user', message);
          input.value = '';

          // Show typing indicator
          const typingId = showTyping();

          // Simulate AI processing time
          setTimeout(() => {
              removeTyping(typingId);
              const response = findResponse(message);
              appendMessage('bot', response);
          }, 1200 + Math.random() * 800);
      }

      function appendMessage(sender, text) {
          const div = document.createElement('div');

          if (sender === 'user') {
              div.className = "flex justify-end mb-4 animate-fade-in-up";
              div.innerHTML = `
                  <div class="bg-gradient-to-br from-gold to-gold-dark text-navy-950 font-medium rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[85%] shadow-md">
                      <p class="text-sm leading-relaxed">${text}</p>
                  </div>
              `;
          } else {
              div.className = "flex gap-3 mb-4 animate-fade-in-up";
              div.innerHTML = `
                  <div class="w-6 h-6 rounded-full bg-navy-900 border border-white/10 flex-shrink-0 flex items-center justify-center mt-1">
                       <svg class="w-3 h-3 text-gold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 1 0 10 10H12V2z"></path><path d="M12 2a10 10 0 1 1-10 10h10V2z"></path></svg>
                  </div>
                  <div class="bg-navy-900/80 border border-white/5 rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[85%]">
                      <p class="text-sm text-zinc-200 leading-relaxed">${text}</p>
                  </div>
              `;
          }

          chatMessages.appendChild(div);
          chatMessages.scrollTop = chatMessages.scrollHeight;
      }

      function showTyping() {
          const id = 'typing-' + Date.now();
          const div = document.createElement('div');
          div.id = id;
          div.className = "flex gap-3 mb-4";
          div.innerHTML = `
              <div class="w-6 h-6 rounded-full bg-navy-900 border border-white/10 flex-shrink-0 flex items-center justify-center mt-1">
                   <svg class="w-3 h-3 text-gold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 1 0 10 10H12V2z"></path><path d="M12 2a10 10 0 1 1-10 10h10V2z"></path></svg>
              </div>
              <div class="bg-navy-900/80 border border-white/5 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%] flex gap-1 items-center">
                  <span class="w-1.5 h-1.5 bg-zinc-500 rounded-full typing-dot"></span>
                  <span class="w-1.5 h-1.5 bg-zinc-500 rounded-full typing-dot"></span>
                  <span class="w-1.5 h-1.5 bg-zinc-500 rounded-full typing-dot"></span>
              </div>
          `;
          chatMessages.appendChild(div);
          chatMessages.scrollTop = chatMessages.scrollHeight;
          return id;
      }

      function removeTyping(id) {
          const el = document.getElementById(id);
          if (el) el.remove();
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
      

<nav className="fixed top-0 w-full z-50 border-b border-navy/30 bg-navy-950/80 backdrop-blur-md">
<div className="flex h-16 max-w-7xl mx-auto px-6 items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-gradient-to-br from-white to-gold rounded-full shadow-[0_0_10px_rgba(212,175,55,0.3)]"></div>
<span className="text-sm font-semibold tracking-tight text-white uppercase">
            Harrington
          </span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-zinc-400">
<a className="hover:text-gold transition-colors duration-200" href="#guide">
            The Guide
          </a>
<a className="hover:text-gold transition-colors duration-200" href="#about">
            About Barbara
          </a>
<a className="hover:text-gold transition-colors duration-200" href="#barriers">
            Barriers
          </a>
<a className="hover:text-gold transition-colors duration-200" href="#contact">
            Contact
          </a>
</div>
<div className="flex items-center gap-4">
<a className="inline-flex items-center justify-center px-4 py-1.5 text-xs font-medium text-navy-950 bg-gold rounded-full hover:bg-gold-light transition-colors" href="#contact">
            Schedule Discovery Call
          </a>
</div>
</div>
</nav>

<main className="md:pt-48 md:pb-32 overflow-hidden pt-32 pb-20 relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] hero-glow pointer-events-none -z-10 rounded-full blur-3xl opacity-60"></div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/20 bg-gold/5 text-xs font-medium text-gold mb-8 animate-fade-in-up hover:border-gold/30 transition-colors cursor-default">
<span className="flex h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_8px_rgba(212,175,55,0.6)]"></span>
          Women in STEMM Over 45
        </div>
<h1 className="md:text-6xl lg:text-7xl leading-[1] bg-clip-text text-5xl font-medium text-white tracking-tighter bg-gradient-to-b from-white via-white to-zinc-400 max-w-5xl mx-auto mb-8">
          Transform Your STEMM Expertise Into a
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light">
            Six-Figure
          </span>
          Consulting Business
        </h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-6 leading-relaxed font-light tracking-wide">
          Without sacrificing financial security or starting from scratch.
        </p>
<p className="text-sm md:text-base text-zinc-500 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          You’ve spent two decades mastering your craft. Yet promotions go to
          others, and the paycheck feels like golden handcuffs. Break free from
          corporate constraints and build a thriving practice.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium text-navy-950 bg-gold rounded-full hover:bg-gold-light transition-all duration-200 group shadow-[0_0_20px_rgba(212,175,55,0.15)]" href="#contact">
            Schedule Discovery Call
            <svg aria-hidden="true" className="iconify iconify--lucide group-hover:translate-x-0.5 transition-transform" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium text-white border border-white/10 bg-white/5 rounded-full hover:bg-white/10 transition-all duration-200" href="#guide">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<polyline points="7 10 12 15 17 10"></polyline>
<line x1="12" x2="12" y1="15" y2="3"></line>
</svg>
            Download Free Guide
          </a>
</div>
</div>
</main>

<section className="py-24 bg-navy-900/30 border-t border-navy/30" id="guide">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="">
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-white mb-4">
              Start With Clarity
            </h2>
<p className="text-zinc-400 max-w-xl text-sm leading-relaxed">
              Before you can build a successful consulting practice, you need a
              clear-eyed assessment. Download your
              <strong>FREE SWOT Analysis Guide</strong>
              for Women in STEMM.
            </p>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative">
<div className="aspect-[4/3] overflow-hidden rounded-lg bg-navy-900/50 mb-4 relative border border-white/5 flex items-center justify-center group-hover:border-gold/20 transition-all">
<svg className="w-12 h-12 text-zinc-600 group-hover:text-gold transition-colors" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 24 24">
<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
</svg>
<div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-60"></div>
<div className="absolute bottom-4 left-4">
<span className="inline-block px-2 py-0.5 rounded text-[10px] font-medium bg-plum text-white mb-2 shadow-lg shadow-plum/20">
                  Inside The Guide
                </span>
</div>
</div>
<h3 className="text-base font-medium text-white group-hover:text-gold transition-colors">
              Strategic Framework
            </h3>
<p className="text-xs text-zinc-500">
              Tailored specific to STEMM professionals
            </p>
</div>

<div className="group relative">
<div className="aspect-[4/3] overflow-hidden rounded-lg bg-navy-900/50 mb-4 relative border border-white/5 flex items-center justify-center group-hover:border-gold/20 transition-all">
<svg className="w-12 h-12 text-zinc-600 group-hover:text-gold transition-colors" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="10"></circle>
<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
<line x1="12" x2="12.01" y1="17" y2="17"></line>
</svg>
<div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-60"></div>
</div>
<h3 className="text-base font-medium text-white group-hover:text-gold transition-colors">
              Reflection Questions
            </h3>
<p className="text-xs text-zinc-500">
              Expose limiting corporate conditioning
            </p>
</div>

<div className="group relative">
<div className="aspect-[4/3] overflow-hidden rounded-lg bg-navy-900/50 mb-4 relative border border-white/5 flex items-center justify-center group-hover:border-gold/20 transition-all">
<svg className="w-12 h-12 text-zinc-600 group-hover:text-gold transition-colors" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 24 24">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
<div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-60"></div>
</div>
<h3 className="text-base font-medium text-white group-hover:text-gold transition-colors">
              Real Examples
            </h3>
<p className="text-xs text-zinc-500">
              Insights from women who made the leap
            </p>
</div>

<div className="group relative">
<div className="aspect-[4/3] overflow-hidden rounded-lg bg-navy-900/50 mb-4 relative border border-white/5 flex items-center justify-center group-hover:border-gold/20 transition-all">
<svg className="w-12 h-12 text-zinc-600 group-hover:text-gold transition-colors" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 24 24">
<path d="m9 11 3 3L22 4"></path>
<path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
</svg>
<div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-60"></div>
</div>
<h3 className="text-base font-medium text-white group-hover:text-gold transition-colors">
              Action Steps
            </h3>
<p className="text-xs text-zinc-500">
              Transform assessment into a roadmap
            </p>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center justify-center px-6 py-3 text-xs font-medium text-navy-950 bg-white rounded-full hover:bg-gold hover:text-navy-950 transition-colors shadow-lg" href="#contact">
            Download Free Guide
          </a>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="about">

<div className="absolute inset-0 bg-[linear-gradient(rgba(30,58,95,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(30,58,95,0.1)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>
<div className="max-w-5xl mx-auto px-6 relative z-10">
<div className="flex flex-col items-center mb-16 text-center">
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-white mb-6">
            About Coach Barbara Harrington
          </h2>
<p className="text-zinc-400 max-w-2xl text-sm leading-relaxed">
            I help women in STEMM over 45 see their true market value—and build
            consulting practices that prove it.
          </p>

<div className="mt-8 p-1.5 bg-navy-900/50 backdrop-blur-xl border border-white/5 rounded-full inline-flex items-center gap-1 shadow-2xl">
<button className="px-6 py-2 text-xs font-medium text-navy-950 bg-white shadow-sm rounded-full transition-all hover:shadow-md">
              My Story
            </button>
<button className="px-6 py-2 text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-full transition-all">
              My Approach
            </button>
<button className="px-6 py-2 text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-full transition-all">
              My Mission
            </button>
</div>
</div>

<div className="relative space-y-4">

<div className="absolute left-[27px] top-6 bottom-6 w-px bg-gradient-to-b from-navy/50 via-navy/30 to-transparent hidden sm:block"></div>

<div className="group relative flex flex-col sm:flex-row gap-6 items-stretch">
<div className="hidden sm:flex flex-col items-center gap-2 pt-6 w-[54px] shrink-0">
<div className="w-3.5 h-3.5 rounded-full bg-gold live-indicator z-10 relative">
<div className="absolute inset-0 bg-gold rounded-full animate-ping opacity-20"></div>
</div>
</div>
<div className="flex-1 schedule-card p-6 rounded-2xl border border-navy/50 bg-gradient-to-r from-navy-900/30 to-transparent relative overflow-hidden">
<div className="absolute top-0 right-0 p-3 opacity-100">
<div className="flex items-center gap-2">
<span className="text-[10px] font-medium uppercase tracking-wider text-gold">
                    The Reality
                  </span>
</div>
</div>
<div className="flex flex-col md:flex-row md:items-center gap-6">
<div className="w-24 shrink-0">
<span className="text-sm font-semibold text-white font-mono">
                    20 YEARS
                  </span>
</div>
<div className="flex-1">
<h3 className="text-lg font-medium text-white mb-2">
                    The Corporate Trap
                  </h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-4 max-w-xl">
                    For 20 years, I lived the reality most seasoned STEMM
                    professionals know too well: brilliant work that goes
                    unrecognized, expertise that gets undervalued, and a
                    persistent sense of being trapped in a system designed for
                    someone else’s success.
                  </p>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-navy-900 flex items-center justify-center border border-white/10">
<svg className="w-3 h-3 text-gold" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<line x1="12" x2="12" y1="8" y2="12"></line>
<line x1="12" x2="12.01" y1="16" y2="16"></line>
</svg>
</div>
<span className="text-xs text-zinc-300">
                        Undervalued Expertise
                      </span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="group relative flex flex-col sm:flex-row gap-6 items-stretch">
<div className="hidden sm:flex flex-col items-center gap-2 pt-6 w-[54px] shrink-0">
<div className="w-2 h-2 rounded-full bg-zinc-700 group-hover:bg-plum transition-colors z-10"></div>
</div>
<div className="flex-1 schedule-card p-6 rounded-2xl border border-white/5 bg-navy-900/10">
<div className="flex flex-col md:flex-row md:items-center gap-6">
<div className="w-24 shrink-0">
<span className="text-sm font-medium text-zinc-500 font-mono group-hover:text-plum transition-colors">
                    METHOD
                  </span>
</div>
<div className="flex-1">
<h3 className="text-lg font-medium text-zinc-200 mb-2 group-hover:text-white transition-colors">
                    Beyond Business Tactics
                  </h3>
<p className="text-sm text-zinc-500 leading-relaxed mb-4 max-w-xl group-hover:text-zinc-400 transition-colors">
                    I don’t just teach business tactics. I address what really
                    holds women back: the deep corporate conditioning that
                    shapes how you view your worth, price your services, and
                    assess your readiness to go independent.
                  </p>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-navy-900 flex items-center justify-center border border-white/10">
<svg className="w-3 h-3 text-zinc-400 group-hover:text-plum transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
<polyline points="14 2 14 8 20 8"></polyline>
<path d="m9 15 2 2 4-4"></path>
</svg>
</div>
<span className="text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors">
                        Rewire Thinking
                      </span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="group relative flex flex-col sm:flex-row gap-6 items-stretch">
<div className="hidden sm:flex flex-col items-center gap-2 pt-6 w-[54px] shrink-0">
<div className="w-2 h-2 rounded-full bg-zinc-700 group-hover:bg-plum transition-colors z-10"></div>
</div>
<div className="flex-1 schedule-card p-6 rounded-2xl border border-white/5 bg-navy-900/10">
<div className="flex flex-col md:flex-row md:items-center gap-6">
<div className="w-24 shrink-0">
<span className="text-sm font-medium text-zinc-500 font-mono group-hover:text-plum transition-colors">
                    MISSION
                  </span>
</div>
<div className="flex-1">
<h3 className="text-lg font-medium text-zinc-200 mb-2 group-hover:text-white transition-colors">
                    Unlocking Your Future
                  </h3>
<p className="text-sm text-zinc-500 leading-relaxed mb-4 max-w-xl group-hover:text-zinc-400 transition-colors">
                    My mission is straightforward: Help you identify invisible
                    barriers, dismantle the beliefs that no longer serve you,
                    and build a consulting practice grounded in the undeniable
                    value you bring to the market.
                  </p>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-navy-900 flex items-center justify-center border border-white/10">
<svg className="w-3 h-3 text-zinc-400 group-hover:text-plum transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg>
</div>
<span className="text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors">
                        Impact &amp; Income
                      </span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-navy/30 bg-navy-900/30 hover:bg-navy-900/50 hover:border-navy/50 transition-all text-xs font-medium text-zinc-300" href="#contact">
            Your corporate experience is your foundation.
          </a>
</div>
</div>
</section>

<section className="py-24 border-t border-navy/30 relative bg-navy-950/50" id="barriers">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-white mb-4">
            Invisible Barriers
          </h2>
<p className="text-zinc-400 text-sm max-w-xl mx-auto">
            Most corporate professionals—especially women in STEMM—have absorbed
            limiting beliefs so gradually they don’t even recognize them.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">

<div className="p-8 rounded-xl border border-white/5 card-gradient hover:border-gold/20 transition-colors duration-300 flex flex-col h-full bg-navy-900/20">
<div className="mb-6">
<h3 className="text-base font-semibold text-white mb-2">
                The Credential Trap
              </h3>
<p className="text-xs text-zinc-500 h-10">
                "I need more credentials before I can consult."
              </p>
</div>
<div className="mb-8 flex items-baseline gap-1">
<span className="text-4xl font-medium text-white tracking-tight">
                Worth
              </span>
<span className="text-zinc-500 text-sm">/Defined</span>
</div>
<div className="space-y-4 mb-8 flex-1">
<p className="text-sm text-zinc-300 leading-relaxed">
                You believe your value lies in the next certification, but your
                true value is in the decades of problems you've already solved.
              </p>
</div>
</div>

<div className="p-8 rounded-xl card-gradient-pro relative flex flex-col h-full md:-mt-4 md:mb-4">
<div className="absolute top-0 right-0 -mt-3 mr-4">
<span className="bg-gold text-navy-950 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider shadow-lg shadow-gold/20">
                Transformation
              </span>
</div>
<div className="mb-6">
<h3 className="text-base font-semibold text-white mb-2">
                The Value Gap
              </h3>
<p className="text-xs text-zinc-300 h-10">
                "Who would pay for my expertise? I can't charge that much."
              </p>
</div>
<div className="mb-8 flex items-baseline gap-1">
<span className="text-4xl font-medium text-white tracking-tight">
                Price
              </span>
<span className="text-zinc-400 text-sm">/Outcome</span>
</div>
<div className="space-y-4 mb-8 flex-1">
<p className="text-sm text-white leading-relaxed">
                We dismantle the beliefs that keep you undercharging. You learn
                to price based on the massive value you create, not the hours
                you work.
              </p>
</div>
<button className="w-full py-3 rounded-lg bg-white hover:bg-gold hover:text-navy-950 text-navy-950 text-xs font-bold transition-colors shadow-lg" onclick="location.href='#contact'">
              Break These Patterns
            </button>
</div>

<div className="p-8 rounded-xl border border-white/5 card-gradient hover:border-gold/20 transition-colors duration-300 flex flex-col h-full bg-navy-900/20">
<div className="mb-6">
<h3 className="text-base font-semibold text-white mb-2">
                The Readiness Myth
              </h3>
<p className="text-xs text-zinc-500 h-10">
                "I should wait until conditions are perfect."
              </p>
</div>
<div className="mb-8 flex items-baseline gap-1">
<span className="text-4xl font-medium text-white tracking-tight">
                Now
              </span>
<span className="text-zinc-500 text-sm">/Action</span>
</div>
<div className="space-y-4 mb-8 flex-1">
<p className="text-sm text-zinc-300 leading-relaxed">
                Waiting is a survival mechanism. We turn your assessment into a
                concrete roadmap so you can act with confidence today.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-navy-950 border-white/5 border-t pt-24 pb-24" id="success">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/5 pb-8">
<div className="">
<h2 className="text-xs font-semibold uppercase tracking-widest text-gold mb-2">
              Success Stories
            </h2>
<p className="text-3xl text-white font-medium tracking-tight">
              Empowering women from top organizations.
            </p>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-white/5 border border-white/5 overflow-hidden rounded-lg">

<div className="bg-navy-950 p-8 flex items-center justify-center group hover:bg-navy-900 transition-colors">
<div className="flex items-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
<span className="font-bold text-white tracking-tight text-lg">
                PharmaCo
              </span>
</div>
</div>
<div className="bg-navy-950 p-8 flex items-center justify-center group hover:bg-navy-900 transition-colors">
<div className="flex items-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
<span className="font-semibold text-white tracking-tight font-display text-lg">
                BioTech
              </span>
</div>
</div>
<div className="bg-navy-950 p-8 flex items-center justify-center group hover:bg-navy-900 transition-colors">
<div className="flex items-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
<span className="font-bold text-white tracking-tight italic text-lg">
                Engineering
              </span>
</div>
</div>
<div className="bg-navy-950 p-8 flex items-center justify-center group hover:bg-navy-900 transition-colors">
<div className="flex items-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
<span className="font-light text-white tracking-widest uppercase text-sm">
                ScienceInc
              </span>
</div>
</div>
<div className="bg-navy-950 p-8 flex items-center justify-center group hover:bg-navy-900 transition-colors">
<div className="flex items-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
<span className="font-bold text-white tracking-tighter text-lg">
                MedDevice
              </span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-navy/30">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tighter text-white mb-12 text-center">
          Common Questions
        </h2>
<div className="space-y-4">
<details className="group bg-navy-900/30 border border-white/5 rounded-lg open:bg-navy-900/50 transition-colors">
<summary className="flex cursor-pointer list-none pt-6 pr-6 pb-6 pl-6 items-center justify-between">
<span className="text-sm font-medium text-zinc-200">
                Can I really replace my corporate salary?
              </span>
<span className="transition group-open:rotate-180">
<svg aria-hidden="true" className="iconify text-zinc-500 iconify--lucide" data-icon="lucide:chevron-down" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</span>
</summary>
<div className="text-zinc-400 text-sm px-6 pb-6 pt-0 leading-relaxed">
              Yes. By properly valuing your decades of expertise and positioning
              yourself as a specialist consultant, you can often exceed your
              corporate salary while working with more autonomy.
            </div>
</details>
<details className="group bg-navy-900/30 border border-white/5 rounded-lg open:bg-navy-900/50 transition-colors">
<summary className="flex justify-between items-center cursor-pointer p-6 list-none">
<span className="text-sm font-medium text-zinc-200">
                What if I don't have business experience?
              </span>
<span className="transition group-open:rotate-180">
<svg aria-hidden="true" className="iconify text-zinc-500 iconify--lucide" data-icon="lucide:chevron-down" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</span>
</summary>
<div className="text-zinc-400 text-sm px-6 pb-6 pt-0 leading-relaxed">
              That is exactly what we address. Your STEMM skills are the
              product; I provide the business framework, strategy, and mindset
              shift needed to sell that product effectively.
            </div>
</details>
<details className="group bg-navy-900/30 border border-white/5 rounded-lg open:bg-navy-900/50 transition-colors">
<summary className="flex justify-between items-center cursor-pointer p-6 list-none">
<span className="text-sm font-medium text-zinc-200">
                How do I find clients?
              </span>
<span className="transition group-open:rotate-180">
<svg aria-hidden="true" className="iconify text-zinc-500 iconify--lucide" data-icon="lucide:chevron-down" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</span>
</summary>
<div className="text-zinc-400 text-sm px-6 pb-6 pt-0 leading-relaxed">
              We move away from "begging" for work and towards strategic
              positioning. You'll learn how to leverage your existing network
              and reputation to attract high-value opportunities.
            </div>
</details>
</div>
</div>
</section>

<footer className="border-t border-navy/30 pt-20 pb-12 bg-navy-950 relative overflow-hidden" id="contact">

<div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none overflow-hidden">
<span className="text-[12rem] md:text-[18rem] font-bold leading-none tracking-tighter footer-logo-clip opacity-20">
          BARBARA
        </span>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">

<div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-12">
<div className="max-w-sm">
<div className="flex items-center gap-2 mb-6">
<div className="w-5 h-5 bg-gradient-to-br from-white to-gold rounded-full shadow-[0_0_10px_rgba(255,255,255,0.4)]"></div>
<span className="text-lg font-bold tracking-tight text-white uppercase">
                Harrington
              </span>
</div>
<p className="text-sm text-zinc-400 leading-relaxed mb-8">
              Helping seasoned STEMM professionals build thriving, profitable
              consulting practices.
            </p>
<div className="flex flex-col gap-2 mb-4">
<div className="flex items-center gap-3 text-sm text-zinc-300">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>
                302-507-3927
              </div>
<div className="flex items-center gap-3 text-sm text-zinc-300">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
</svg>
                barbara@coachbarbaraharrington.com
              </div>
</div>
</div>

<div className="w-full max-w-md bg-navy-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 shadow-2xl">
<h3 className="text-base font-medium text-white mb-2">
              Ready to explore what’s possible?
            </h3>
<p className="text-xs text-zinc-500 mb-6">
              Let’s talk about your transition to consulting success.
            </p>
<div className="flex gap-2 flex-col">
<button className="w-full py-3 bg-white text-navy-950 text-sm font-bold rounded-lg hover:bg-gold hover:text-navy-950 transition-colors">
                Schedule Discovery Call
              </button>
</div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 border-t border-white/5 pt-12">
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-6">
              Explore
            </h4>
<ul className="space-y-4">
<li>
<a className="text-sm text-zinc-500 hover:text-gold transition-colors" href="#about">
                  About Barbara
                </a>
</li>
<li>
<a className="text-sm text-zinc-500 hover:text-gold transition-colors" href="#guide">
                  SWOT Guide
                </a>
</li>
<li>
<a className="text-sm text-zinc-500 hover:text-gold transition-colors" href="#success">
                  Success Stories
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-6">
              Connect
            </h4>
<ul className="space-y-4">
<li>
<a className="text-sm text-zinc-500 hover:text-gold transition-colors" href="#">
                  LinkedIn
                </a>
</li>
<li>
<a className="text-sm text-zinc-500 hover:text-gold transition-colors" href="#">
                  Email
                </a>
</li>
<li>
<a className="text-sm text-zinc-500 hover:text-gold transition-colors" href="#">
                  Book Call
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-6">
              Legal
            </h4>
<ul className="space-y-4">
<li>
<a className="text-sm text-zinc-500 hover:text-gold transition-colors" href="#">
                  Privacy Policy
                </a>
</li>
<li>
<a className="text-sm text-zinc-500 hover:text-gold transition-colors" href="#">
                  Terms of Service
                </a>
</li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
<p className="text-xs text-zinc-600">
            © 2024 Barbara Harrington. All rights reserved.
          </p>
<div className="flex items-center gap-2 mt-4 md:mt-0 px-3 py-1 rounded-full bg-navy-900/50 border border-white/5">
<span className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_8px_rgba(212,175,55,0.5)]"></span>
<span className="text-[10px] font-medium text-zinc-400">
              Accepting new clients
            </span>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4" id="chat-widget">

<div className="w-[340px] md:w-[380px] h-[550px] bg-navy-900/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col transition-all duration-300 transform origin-bottom-right chat-exit" id="chat-box">

<div className="flex items-center justify-between p-4 border-b border-white/5 bg-navy-950/50 rounded-t-2xl">
<div className="flex items-center gap-3">
<div className="relative">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-white to-gold flex items-center justify-center text-navy-950 font-bold text-xs">
                BH
              </div>
<div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-navy-950 rounded-full"></div>
</div>
<div>
<h4 className="text-sm font-semibold text-white">Ask Barbara</h4>
<p className="text-[10px] text-zinc-400">Assistant Online</p>
</div>
</div>
<button className="text-zinc-500 hover:text-white transition-colors" onclick="toggleChat()">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
</div>

<div className="flex-1 overflow-y-auto p-4 space-y-4" id="chat-messages">

<div className="flex gap-3">
<div className="w-6 h-6 rounded-full bg-navy-900 border border-white/10 flex-shrink-0 flex items-center justify-center mt-1">
<svg className="w-3 h-3 text-gold" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2a10 10 0 1 0 10 10H12V2z"></path>
<path d="M12 2a10 10 0 1 1-10 10h10V2z"></path>
</svg>
</div>
<div className="bg-navy-900/80 border border-white/5 rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[85%]">
<p className="text-sm text-zinc-200">
                Hi! 👋 I'm here to help you explore what's possible for your
                transition to consulting. Whether you're just exploring the idea
                or ready to take action, I'm happy to answer your questions.
              </p>
</div>
</div>
</div>

<div className="p-4 border-t border-white/5 bg-navy-950/30 rounded-b-2xl">
<form className="relative" id="chat-form" onsubmit="handleChatSubmit(event)">
<input className="w-full bg-navy-950/50 text-sm text-white placeholder-zinc-500 rounded-full pl-4 pr-12 py-3 border border-white/10 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all" id="chat-input" placeholder="Ask about consulting, rates, or the program..." type="text"/>
<button className="absolute right-1.5 top-1.5 p-1.5 bg-gold rounded-full text-navy-950 hover:bg-white transition-colors shadow-lg" type="submit">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m22 2-7 20-4-9-9-4Z"></path>
<path d="M22 2 11 13"></path>
</svg>
</button>
</form>
<div className="text-center mt-2">
<p className="text-[9px] text-zinc-600">
              Powered by Coach Harrington AI
            </p>
</div>
</div>
</div>

<button className="group relative flex items-center justify-center w-14 h-14 bg-white hover:bg-gold rounded-full shadow-[0_0_30px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-105 active:scale-95" onclick="toggleChat()">
<span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-navy-950 z-10 flex items-center justify-center">
<span className="w-1.5 h-1.5 bg-white rounded-full"></span>
</span>
<svg className="w-6 h-6 text-navy-950 transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
</svg>
</button>
</div>



    </>
  );
}
