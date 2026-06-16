import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Newsreader', 'serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
obsidian: '#070707',
neutral: {
925: '#0a0a0a',
950: '#050505',
},
science: {
500: '#2563eb',
600: '#1d4ed8',
900: '#1e3a8a',
},
metal: {
300: '#cbd5e1',
400: '#94a3b8',
500: '#64748b',
}
},
letterSpacing: {
tighter: '-0.04em',
},
animation: {
'marquee': 'marquee 40s linear infinite',
'beam': 'beam 8s linear infinite',
'reveal': 'reveal 0.4s ease-out forwards',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-100%)' },
},
beam: {
'0%': { top: '-200px', opacity: '0' },
'10%': { opacity: '1' },
'90%': { opacity: '1' },
'100%': { top: '100%', opacity: '0' },
},
reveal: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



document.addEventListener("DOMContentLoaded", () => {
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
}
});
}, { threshold: 0.1 });
document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
});



      !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.2/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
    


      (function (C, A, L) { 
        let p = function (a, ar) { a.q.push(ar); }; 
        let d = C.document; 
        C.Cal = C.Cal || function () { 
          let cal = C.Cal; 
          let ar = arguments; 
          if (!cal.loaded) { 
            cal.ns = {}; 
            cal.q = cal.q || []; 
            d.head.appendChild(d.createElement("script")).src = A; 
            cal.loaded = true; 
          } 
          if (ar[0] === L) { 
            const api = function () { p(api, arguments); }; 
            const namespace = ar[1]; 
            api.q = api.q || []; 
            if(typeof namespace === "string"){
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar); 
            return;
          } 
          p(cal, ar); 
        }; 
      })(window, "https://app.cal.com/embed/embed.js", "init");
      
      Cal("init", "30min", {origin:"https://app.cal.com"});
      
      Cal.ns["30min"]("inline", {
        elementOrSelector:"#my-cal-inline-30min",
        config: {"layout":"month_view"},
        calLink: "alvaro-espinal-cxycp8/30min",
      });
      
      // Theme customization to match your site
      Cal.ns["30min"]("ui", {
        "cssVarsPerTheme": {
          "dark": {
            "cal-bg": "#050505",
            "cal-bg-emphasis": "#0a0a0a",
            "cal-bg-subtle": "#0f0f0f",
            "cal-bg-muted": "#141414",
            "cal-bg-inverted": "#ffffff",
            "cal-border": "rgba(255,255,255,0.1)",
            "cal-border-emphasis": "rgba(255,255,255,0.2)",
            "cal-border-subtle": "rgba(255,255,255,0.05)",
            "cal-border-booker": "rgba(255,255,255,0.1)",
            "cal-text": "#d1d5db",
            "cal-text-emphasis": "#ffffff",
            "cal-text-subtle": "#6b7280",
            "cal-text-muted": "#4b5563",
            "cal-text-inverted": "#000000",
            "cal-brand": "#2563eb",
            "cal-brand-emphasis": "#1d4ed8",
            "cal-brand-subtle": "rgba(37,99,235,0.2)",
            "cal-brand-text": "#ffffff"
          }
        },
        "theme": "dark",
        "hideEventTypeDetails": true,
        "layout": "month_view"
      });
    


      const body = document.getElementById('main-body');
      const spotlightGroups = document.querySelectorAll('.spotlight-group');

      document.addEventListener('mousemove', (e) => {
          const x = e.clientX;
          const y = e.clientY;

          body.style.setProperty('--mouse-x', `${x}px`);
          body.style.setProperty('--mouse-y', `${y}px`);

          spotlightGroups.forEach(group => {
              const rect = group.getBoundingClientRect();
              const relX = x - rect.left;
              const relY = y - rect.top;

              group.style.setProperty('--mouse-x-rel', `${relX}px`);
              group.style.setProperty('--mouse-y-rel', `${relY}px`);
          });
      });

      // Navigation View Logic
      function showBooking() {
          document.getElementById('landing-view').classList.remove('active');
          document.getElementById('booking-view').classList.add('active');
          window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      function showLanding() {
          document.getElementById('booking-view').classList.remove('active');
          document.getElementById('landing-view').classList.add('active');
          window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      // --- Chat Logic ---
      const chatPanel = document.getElementById('chat-panel');
      const chatOverlay = document.getElementById('chat-overlay');
      const chatInput = document.getElementById('chat-input');
      const messagesContainer = document.getElementById('chat-messages');
      const typingIndicator = document.getElementById('typing-indicator');

      let step = 0;
      let userData = {
          business: '',
          systems: '',
          bottleneck: ''
      };

      function toggleChat() {
          chatPanel.classList.toggle('open');
          chatOverlay.classList.toggle('open');
          if (chatPanel.classList.contains('open')) {
              setTimeout(() => chatInput.focus(), 100);
          }
      }

      function handleKeyDown(e) {
          if (e.key === 'Enter') {
              sendMessage();
          }
      }

      function addMessage(text, isUser = false, isHtml = false) {
          const div = document.createElement('div');
          div.className = `flex gap-4 max-w-[90%] msg-enter ${isUser ? 'ml-auto flex-row-reverse' : ''}`;

          const avatar = isUser
              ? `<div class="w-6 h-6 rounded bg-white text-black flex-shrink-0 flex items-center justify-center mt-1"><iconify-icon icon="solar:user-linear" class="text-xs"></iconify-icon></div>`
              : `<div class="w-6 h-6 rounded bg-science-900/50 border border-science-500/20 flex-shrink-0 flex items-center justify-center mt-1"><iconify-icon icon="solar:code-square-linear" class="text-science-500 text-xs"></iconify-icon></div>`;

          const contentClass = isUser
              ? 'bg-science-600 text-white rounded-lg px-4 py-2 text-sm font-sans'
              : 'p-3 bg-white/5 rounded-lg border border-white/5 text-sm text-gray-300 leading-relaxed font-mono';

          div.innerHTML = `
              ${avatar}
              <div class="space-y-2 text-left">
                  ${!isUser ? '<div class="text-xs text-science-500 font-mono mb-1">Omni-Architect</div>' : ''}
                  <div class="${contentClass}">
                      ${isHtml ? text : `<p>${text}</p>`}
                  </div>
              </div>
          `;

          messagesContainer.appendChild(div);
          messagesContainer.scrollTop = messagesContainer.scrollHeight;
      }

      function showTyping() {
          typingIndicator.classList.remove('hidden');
          messagesContainer.scrollTop = messagesContainer.scrollHeight;
      }

      function hideTyping() {
          typingIndicator.classList.add('hidden');
      }

      function botReply(text, delay = 800, isHtml = false) {
          showTyping();
          setTimeout(() => {
              hideTyping();
              addMessage(text, false, isHtml);
          }, delay);
      }

      function sendMessage() {
          const text = chatInput.value.trim();
          if (!text) return;

          addMessage(text, true);
          chatInput.value = '';

          // Chat State Machine
          if (step === 0) {
              step = 1;
              botReply("Excellent. To begin, please briefly describe your core business model (e.g., Marketing Agency, SaaS, E-commerce, Legal Firm).");
          } else if (step === 1) {
              userData.business = text;
              step = 2;
              botReply(`Understood, ${text}. <br><br>Which primary software tools drive your operations currently? (e.g., Salesforce, Slack, Notion, Hubspot, Xero)`);
          } else if (step === 2) {
              userData.systems = text;
              step = 3;
              botReply("Acknowledged. Now, where is the most significant bottleneck or 'busy work' in your current process? (e.g., Lead qualification, Data entry, Client onboarding, Reporting)");
          } else if (step === 3) {
              userData.bottleneck = text;
              step = 4;
              botReply("Analyzing workflow topology...", 600);
              setTimeout(() => {
                 botReply("Identifying automation vectors...", 1200);
              }, 600);

              setTimeout(() => {
                  const html = `
                      <div class="border border-white/10 bg-black/40 rounded p-3 mb-2">
                          <div class="text-xs text-gray-500 uppercase tracking-widest mb-2">Preliminary Audit</div>
                          <div class="grid grid-cols-2 gap-4 mb-3">
                              <div>
                                  <div class="text-[10px] text-gray-500">Est. Hours Saved</div>
                                  <div class="text-lg text-emerald-400 font-bold">25-30h<span class="text-xs text-gray-500 font-normal">/wk</span></div>
                              </div>
                              <div>
                                  <div class="text-[10px] text-gray-500">Efficiency Lift</div>
                                  <div class="text-lg text-science-500 font-bold">3.5x</div>
                              </div>
                          </div>
                          <div class="w-full bg-white/5 h-px mb-3"></div>
                          <div class="text-xs text-gray-300">
                              <strong>Comparison:</strong><br>
                              Manual Ops: <span class="text-red-400">~$4,500/mo</span> (Labor)<br>
                              Omni Auto: <span class="text-emerald-400">~$500/mo</span> (Compute)
                          </div>
                      </div>
                      <p>I've calculated significant ROI potential by automating your <strong>${userData.bottleneck}</strong> workflow using <strong>${userData.systems}</strong> APIs.</p>
                      <p class="mt-2">Would you like me to propose 3 specific automation ideas for this stack, or do you have a specific request?</p>
                  `;
                  botReply(html, 2500, true);
              }, 2000);

          } else if (step === 4) {
              step = 5;
              botReply("Generating architecture specs...", 1000);
              setTimeout(() => {
                  const html = `
                      <div class="space-y-3">
                          <div class="p-2 border border-science-500/30 bg-science-900/10 rounded">
                              <div class="text-xs font-bold text-science-400 mb-1">1. Autonomous Onboarding Agent</div>
                              <div class="text-[11px] text-gray-400">Triggers from ${userData.systems} -> Drafts contracts -> Sends welcome kit -> Updates CRM. Zero human touch.</div>
                          </div>
                          <div class="p-2 border border-white/10 bg-white/5 rounded">
                              <div class="text-xs font-bold text-gray-300 mb-1">2. Intelligent Lead Router</div>
                              <div class="text-[11px] text-gray-400">Qualifies inbound leads via AI Voice/Chat -> Schedules meeting based on deal size -> Notifies Sales.</div>
                          </div>
                          <div class="p-2 border border-white/10 bg-white/5 rounded">
                              <div class="text-xs font-bold text-gray-300 mb-1">3. Executive Reporting Node</div>
                              <div class="text-[11px] text-gray-400">Aggregates metrics from all tools -> Generates daily briefing -> Delivers to Slack/Email at 8am.</div>
                          </div>
                      </div>
                      <p class="mt-3">We can deploy option #1 in less than 72 hours.</p>
                      <p class="mt-2">Shall I schedule a technical briefing with a human engineer to finalize the specs?</p>
                  `;
                  botReply(html, 2000, true);
              }, 1000);
          } else if (step === 5) {
              botReply("Perfect. I have logged this session ID: #OMNI-829. Please click the 'Book Briefing' button in the navigation bar to select a time slot. Our engineers have access to this context.");
          }
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 w-full h-full pointer-events-none">
<div data-us-project="0ioCtonkfumGiCgMQu5C" style={{width: '100%', height: '100%'}}></div>
</div>


<div className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300" style={{background: 'radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(37,99,235,0.03), transparent 40%)'}}></div>
<div className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-science-600 via-metal-400 to-science-600 z-50 opacity-60"></div>
<div className="fixed inset-0 pointer-events-none z-0 grid grid-cols-6 md:grid-cols-12 max-w-7xl mx-auto border-x border-white/5 h-full">
<div className="border-r border-white/5 h-full hidden md:block animate-line relative overflow-hidden" style={{animationDelay: '0.1s'}}>
<div className="absolute -top-40 -right-[1px] w-[1px] h-40 bg-gradient-to-b from-transparent via-science-500 to-transparent animate-beam" style={{animationDuration: '7s', animationDelay: '1.5s'}}></div>
</div>
<div className="border-r border-white/5 h-full hidden md:block animate-line" style={{animationDelay: '0.3s'}}></div>
<div className="border-r border-white/5 h-full hidden md:block animate-line relative overflow-hidden" style={{animationDelay: '0.15s'}}>
<div className="absolute -top-52 -right-[1px] w-[1px] h-52 bg-gradient-to-b from-transparent via-metal-300 to-transparent animate-beam" style={{animationDuration: '11s', animationDelay: '4s'}}></div>
</div>
<div className="border-r border-white/5 h-full hidden md:block animate-line" style={{animationDelay: '0.4s'}}></div>
<div className="border-r border-white/5 h-full hidden md:block animate-line relative overflow-hidden" style={{animationDelay: '0.25s'}}>
<div className="absolute -top-32 -right-[1px] w-[1px] h-32 bg-gradient-to-b from-transparent via-science-600 to-transparent animate-beam" style={{animationDuration: '6s', animationDelay: '0.5s'}}></div>
</div>
<div className="border-r border-white/5 h-full hidden md:block animate-line" style={{animationDelay: '0.1s'}}></div>
<div className="border-r border-white/5 h-full hidden md:block animate-line relative overflow-hidden" style={{animationDelay: '0.35s'}}>
<div className="absolute -top-64 -right-[1px] w-[1px] h-64 bg-gradient-to-b from-transparent via-metal-400 to-transparent animate-beam" style={{animationDuration: '9s', animationDelay: '2.5s'}}></div>
</div>
<div className="border-r border-white/5 h-full hidden md:block animate-line" style={{animationDelay: '0.2s'}}></div>
<div className="border-r border-white/5 h-full hidden md:block animate-line relative overflow-hidden" style={{animationDelay: '0.45s'}}>
<div className="absolute -top-40 -right-[1px] w-[1px] h-40 bg-gradient-to-b from-transparent via-science-500 to-transparent animate-beam" style={{animationDuration: '8s', animationDelay: '5s'}}></div>
</div>
<div className="border-r border-white/5 h-full hidden md:block animate-line" style={{animationDelay: '0.15s'}}></div>
<div className="border-r border-white/5 h-full hidden md:block animate-line" style={{animationDelay: '0.3s'}}></div>
</div>
<nav className="sticky top-0 z-40 w-full border-b border-white/5 bg-black/60 backdrop-blur-md shrink-0">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="flex items-center gap-3 group cursor-pointer" href="javascript:showLanding()">
<div className="w-16 h-16 flex items-center justify-center overflow-hidden">
<img alt="OS Logo" className="filter w-full h-full object-contain drop-shadow-[0_0_10px_rgba(37,99,235,0.5)] brightness-110 group-hover:brightness-125 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b9dcafe9-55c1-4c2d-a589-e91ca1eb7993_3840w.png"/>
</div>
<span className="text-xl font-medium italic font-serif tracking-tight text-white group-hover:text-science-400 transition-colors">
            Omni-Science
          </span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-mono text-gray-400 hover:text-white transition-colors uppercase tracking-widest" href="#services" onclick="showLanding()">
            Capabilities
          </a>
<a className="text-xs font-mono text-gray-400 hover:text-white transition-colors uppercase tracking-widest" href="#process" onclick="showLanding()">
            Protocol
          </a>
<a className="text-xs font-mono text-gray-400 hover:text-white transition-colors uppercase tracking-widest" href="#results" onclick="showLanding()">
            Results
          </a>
</div>
<div className="flex items-center gap-6">
<button className="relative rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-white hover:bg-white/10 transition-all duration-300 overflow-hidden group" onclick="showBooking()">
<span className="z-10 uppercase font-mono relative">
              Book your Whiteboard session
            </span>
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-science-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
</button>
</div>
</div>
</nav>
<main className="relative">

<div className="view-section active w-full" id="landing-view">
<section className="flex flex-col w-full max-w-7xl z-10 mt-24 mr-auto mb-32 ml-auto pt-12 pr-6 pl-6 relative" id="hero">
<div className="w-full flex justify-start mb-8 spotlight-group relative animate-on-scroll animate">
<div className="-inset-px spotlight-border transition-opacity duration-300 opacity-0 w-fit rounded-full absolute" style={{background: 'radial-gradient(120px circle at var(--mouse-x-rel) var(--mouse-y-rel), rgba(37,99,235,0.4), transparent)'}}></div>
<a className="relative z-10 group flex items-center gap-4 rounded-full border border-white/10 bg-black/40 pr-4 pl-1.5 py-1.5 hover:border-white/20 transition-all overflow-hidden" href="#">
<span className="rounded-full bg-science-900/50 border border-science-500/30 px-3 py-1 text-[10px] font-semibold text-science-500 tracking-wide uppercase font-mono">
<span className="animate-pulse mr-1">●</span>
                ONLINE
              </span>
<span className="text-sm font-light text-gray-300">
                Omni-Science: Intelligence Driven Automation
              </span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center w-full">
<div className="relative z-20 animate-on-scroll animate">
<div className="flex flex-col gap-2">
<div className="text-white/30 font-mono text-xs mb-3 flex items-center gap-2 uppercase tracking-widest">
                  01 // PERCEPTION
                </div>
<h1 className="md:text-7xl leading-[0.95] text-5xl italic text-white tracking-tight font-serif">
<span className="block not-italic font-light text-gray-500 tracking-tighter">
                    Intelligence driven
                  </span>
<span className="block">automation</span>
<span className="block text-science-500">solutions.</span>
</h1>
</div>
</div>
<div className="relative z-20 md:text-right animate-on-scroll animate">
<div className="flex flex-col gap-2 md:items-end">
<div className="text-white/30 font-mono text-xs mb-3 flex items-center gap-2 justify-start md:justify-end uppercase tracking-widest">
                  02 // EXECUTION
                </div>
<h2 className="md:text-7xl leading-[0.95] text-5xl italic text-white tracking-tight font-serif">
<span className="block not-italic md:text-6xl text-4xl font-light text-gray-500 tracking-tighter mb-3">
                    Stop wasting
                  </span>
<span className="block">time on busy work.</span>
</h2>
</div>
</div>
</div>
<div className="mt-12 md:mt-16 w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-end animate-on-scroll animate">
<div className="group relative rounded-2xl bg-white/[0.02] p-6 md:p-8 spotlight-group spotlight-card overflow-hidden">
<div className="absolute inset-0 pointer-events-none border border-white/5 rounded-2xl"></div>
<div className="absolute inset-0 pointer-events-none rounded-2xl opacity-0 spotlight-border transition-opacity duration-300 border border-transparent" style={{background: 'border-box radial-gradient(300px circle at var(--mouse-x-rel) var(--mouse-y-rel), rgba(37,99,235,0.15), transparent) border-box', WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude'}}></div>
<div className="absolute left-0 top-6 w-0.5 h-10 bg-gradient-to-b from-science-600 to-metal-400 rounded-r-full"></div>
<p className="text-base md:text-xl text-gray-300 font-serif italic leading-relaxed z-10 relative max-w-lg">
                "We deliver end-to-end AI automation systems. We audit
                workflows, remove the noise, and deploy intelligent agents that
                handle the mundane, so your team focuses on the mission."
              </p>
<div className="mt-6 flex gap-3 items-center">
<div className="flex -space-x-2">
<div className="h-6 w-6 rounded-full border border-black bg-science-900 flex items-center justify-center text-[10px] text-white">
<iconify-icon icon="solar:user-linear"></iconify-icon>
</div>
<div className="h-6 w-6 rounded-full border border-black bg-metal-500 flex items-center justify-center text-[10px] text-white">
<iconify-icon icon="solar:user-linear"></iconify-icon>
</div>
</div>
<span className="text-[10px] uppercase text-gray-500 tracking-wider font-mono">
                  Trusted by Legal, Finance &amp; Real Estate
                </span>
</div>
</div>
<div className="flex flex-col md:flex-row md:items-center gap-5 z-10 pl-2 relative justify-end">
<button className="group/btn rounded-full relative">
<div className="-inset-1 group-hover/btn:opacity-75 transition duration-500 bg-science-500/40 opacity-40 rounded-full absolute blur"></div>
</button>
<button className="relative inline-flex h-11 overflow-hidden rounded-full p-[1px] focus:outline-none group" onclick="showBooking()">
<span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#2563eb_50%,#000000_100%)]"></span>
<span className="inline-flex cursor-pointer items-center justify-center transition-all group-hover:bg-neutral-950/80 group-hover:text-white text-sm font-medium text-gray-200 bg-neutral-950 w-full h-full rounded-full pr-5 pl-5 backdrop-blur-3xl">
                  See how our automations work for you-&gt;
                </span>
</button>
</div>
</div>
<div className="animate-on-scroll w-full z-20 mt-24 relative">
<p className="uppercase text-xs font-semibold text-gray-600 tracking-widest font-mono text-center mb-8">
              Integrated with your infrastructure
            </p>
<div className="relative flex overflow-hidden group marquee-mask opacity-70 hover:opacity-100 transition-opacity duration-500">
<div className="flex animate-marquee whitespace-nowrap min-w-full gap-x-20 gap-y-20 items-center">
<iconify-icon className="text-gray-500" height="36" icon="simple-icons:openai" width="96"></iconify-icon>
<iconify-icon className="text-gray-500" height="36" icon="simple-icons:hubspot" width="96"></iconify-icon>
<iconify-icon className="text-gray-500" height="36" icon="simple-icons:salesforce" width="96"></iconify-icon>
<iconify-icon className="text-gray-500" height="36" icon="simple-icons:microsoftazure" width="96"></iconify-icon>
<iconify-icon className="text-gray-500" height="36" icon="simple-icons:googlecloud" width="96"></iconify-icon>
<iconify-icon className="text-gray-500" height="36" icon="simple-icons:notion" width="96"></iconify-icon>
</div>
<div aria-hidden="true" className="flex gap-20 animate-marquee whitespace-nowrap items-center min-w-full absolute top-0 left-full pl-20">
<iconify-icon className="text-gray-500" height="36" icon="simple-icons:openai" width="96"></iconify-icon>
<iconify-icon className="text-gray-500" height="36" icon="simple-icons:hubspot" width="96"></iconify-icon>
<iconify-icon className="text-gray-500" height="36" icon="simple-icons:salesforce" width="96"></iconify-icon>
<iconify-icon className="text-gray-500" height="36" icon="simple-icons:microsoftazure" width="96"></iconify-icon>
<iconify-icon className="text-gray-500" height="36" icon="simple-icons:googlecloud" width="96"></iconify-icon>
</div>
</div>
</div>
</section>
<section className="flex flex-col w-full max-w-7xl mt-44 mr-auto mb-44 ml-auto pr-6 pl-6 relative items-center" id="services">
<div className="text-center max-w-2xl mx-auto px-6 mb-16 animate-on-scroll">
<h2 className="text-4xl md:text-5xl font-serif italic text-white tracking-tight mb-4">
<span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-500">
                Full Spectrum
              </span>
<span className="text-science-500">Automation</span>
</h2>
<p className="text-gray-400 text-lg font-light leading-relaxed">
              Custom architectures that eliminate repetitive tasks and amplify
              productivity.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full relative gap-x-6 gap-y-6">

<div className="group relative rounded-2xl bg-white/[0.02] border border-white/5 p-6 spotlight-group overflow-hidden hover:bg-white/[0.04] transition-colors duration-500 flex flex-col h-full animate-on-scroll">
<div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'radial-gradient(600px circle at var(--mouse-x-rel) var(--mouse-y-rel), rgba(37,99,235,0.06), transparent 40%)'}}></div>
<div className="h-48 w-full mb-8 rounded-xl bg-black/40 border border-white/5 relative overflow-hidden flex flex-col justify-center p-4 select-none">
<div className="grid grid-cols-2 gap-3 w-full h-full">
<div className="col-span-2 bg-white/5 rounded-lg border border-white/5 p-3 flex items-center justify-between backdrop-blur-sm">
<div className="flex gap-2 items-center">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
<div className="h-2 w-16 bg-white/20 rounded"></div>
</div>
<div className="text-xs font-mono text-emerald-400">
                      +342% ROI
                    </div>
</div>
<div className="bg-white/5 rounded-lg border border-white/5 p-3 flex flex-col justify-center gap-2 backdrop-blur-sm">
<div className="text-[10px] text-gray-500 font-mono uppercase">
                      Saved
                    </div>
<div className="text-xl font-mono text-science-500">247h</div>
</div>
<div className="bg-white/5 rounded-lg border border-white/5 p-3 flex flex-col justify-center gap-2 backdrop-blur-sm">
<div className="text-[10px] text-gray-500 font-mono uppercase">
                      Tasks
                    </div>
<div className="text-xl font-mono text-white">1.8k</div>
</div>
</div>
</div>
<div className="mt-auto relative z-10">
<div className="flex items-center gap-3 mb-3">
<span className="text-xs font-mono text-science-500 border border-science-500/20 bg-science-500/5 px-2 py-0.5 rounded">
                    01
                  </span>
<iconify-icon className="text-gray-400 group-hover:text-science-500 transition-colors" icon="solar:chart-square-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-2 tracking-tight">
                  Executive Intelligence
                </h3>
<p className="text-sm text-gray-500 leading-relaxed">
                  Real-time dashboard showing hours saved, tasks automated, and
                  ROI. Track your AI investment live.
                </p>
</div>
</div>

<div className="group relative rounded-2xl bg-white/[0.02] border border-white/5 p-6 spotlight-group overflow-hidden hover:bg-white/[0.04] transition-colors duration-500 flex flex-col h-full animate-on-scroll">
<div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'radial-gradient(600px circle at var(--mouse-x-rel) var(--mouse-y-rel), rgba(37,99,235,0.06), transparent 40%)'}}></div>
<div className="h-48 w-full mb-8 rounded-xl bg-black/40 border border-white/5 relative overflow-hidden flex items-center justify-center p-4 select-none">
<div className="w-full max-w-[200px] space-y-3 relative z-10">
<div className="p-3 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm">
<div className="text-[8px] font-mono text-science-500 mb-1">
                      QUERY: PROCESS_DOC_V2
                    </div>
<div className="h-1.5 w-3/4 bg-white/20 rounded mb-1"></div>
<div className="h-1.5 w-1/2 bg-white/20 rounded"></div>
</div>
<div className="p-3 bg-science-600/10 border border-science-500/20 rounded-lg ml-8">
<div className="h-1.5 w-full bg-science-600/40 rounded mb-1"></div>
<div className="h-1.5 w-3/4 bg-science-600/40 rounded"></div>
</div>
</div>
</div>
<div className="mt-auto relative z-10">
<div className="flex items-center gap-3 mb-3">
<span className="text-xs font-mono text-science-500 border border-science-500/20 bg-science-500/5 px-2 py-0.5 rounded">
                    02
                  </span>
<iconify-icon className="text-gray-400 group-hover:text-science-500 transition-colors" icon="solar:database-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-2 tracking-tight">
                  Institutional Memory
                </h3>
<p className="text-sm text-gray-500 leading-relaxed">
                  The system remembers important things so people do not have
                  to. Knowledge doesn't disappear when someone leaves.
                </p>
</div>
</div>

<div className="group relative rounded-2xl bg-white/[0.02] border border-white/5 p-6 spotlight-group overflow-hidden hover:bg-white/[0.04] transition-colors duration-500 flex flex-col h-full animate-on-scroll">
<div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'radial-gradient(600px circle at var(--mouse-x-rel) var(--mouse-y-rel), rgba(148,163,184,0.06), transparent 40%)'}}></div>
<div className="h-48 w-full mb-8 rounded-xl bg-black/40 border border-white/5 relative overflow-hidden flex items-center justify-center p-6 select-none">
<div className="flex gap-4">
<div className="h-12 w-12 rounded-full border border-metal-400/30 bg-metal-500/10 flex items-center justify-center animate-pulse">
<iconify-icon className="text-metal-300 text-xl" icon="solar:target-linear"></iconify-icon>
</div>
<div className="h-12 w-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center">
<iconify-icon className="text-gray-400 text-xl" icon="solar:letter-linear"></iconify-icon>
</div>
</div>
</div>
<div className="mt-auto relative z-10">
<div className="flex items-center gap-3 mb-3">
<span className="text-xs font-mono text-metal-400 border border-metal-400/20 bg-metal-400/5 px-2 py-0.5 rounded">
                    03
                  </span>
<iconify-icon className="text-gray-400 group-hover:text-metal-300 transition-colors" icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-2 tracking-tight">
                  AI Lead Generation
                </h3>
<p className="text-sm text-gray-500 leading-relaxed">
                  Precision targeting and automated outreach. Fill your pipeline
                  with qualified, ready-to-convert prospects on autopilot.
                </p>
</div>
</div>
</div>
</section>
<section className="flex flex-col w-full max-w-7xl z-20 mt-32 mr-auto mb-32 ml-auto px-6 relative items-center" id="workflow">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 w-full">
<div className="flex flex-col justify-center animate-on-scroll">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-science-500 text-lg" icon="solar:layers-minimalistic-linear"></iconify-icon>
<span className="text-xs font-mono tracking-widest uppercase text-science-500">
                  The Methodology
                </span>
</div>
<h2 className="text-5xl md:text-6xl font-serif text-white tracking-tight mb-6 leading-[0.95]">
<span className="block text-5xl font-light italic text-gray-500">
                  Transform operations
                </span>
<span className="font-normal">into intelligent systems</span>
</h2>
<p className="text-lg text-gray-400 font-light leading-relaxed mb-12 max-w-lg">
                We audit your current workflows, identify high-impact automation
                opportunities, and deploy custom architecture.
              </p>
<div className="grid grid-cols-2 gap-y-8 gap-x-4 mb-16">
<div className="flex items-start gap-3 group">
<div className="mt-0.5 text-science-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:magnifer-linear" width="24"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-gray-200 mb-1">
                      1. Discovery
                    </div>
<div className="text-xs text-gray-500 font-light">
                      Audit current workflows
                    </div>
</div>
</div>
<div className="flex items-start gap-3 group">
<div className="mt-0.5 text-science-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:pen-new-square-linear" width="24"></iconify-icon>
</div>
<div className="">
<div className="text-sm font-medium text-gray-200 mb-1">
                      2. Design
                    </div>
<div className="text-xs text-gray-500 font-light">
                      Custom AI architecture
                    </div>
</div>
</div>
<div className="flex items-start gap-3 group">
<div className="mt-0.5 text-science-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:rocket-linear" width="24"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-gray-200 mb-1">
                      3. Deploy
                    </div>
<div className="text-xs text-gray-500 font-light">
                      Rapid implementation
                    </div>
</div>
</div>
<div className="flex items-start gap-3 group">
<div className="mt-0.5 text-science-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:tuning-linear" width="24"></iconify-icon>
</div>
<div className="">
<div className="text-sm font-medium text-gray-200 mb-1">
                      4. Optimize
                    </div>
<div className="text-xs text-gray-500 font-light">
                      Continuous ROI monitoring
                    </div>
</div>
</div>
</div>
<div className="border-t border-white/10 pt-10">
<p className="text-sm text-gray-500 mb-8 font-light">
                  Proven results for clients in the first 90 days.
                </p>
<div className="flex gap-16">
<div>
<div className="text-5xl font-serif italic text-white mb-2 tracking-tight">
                      500+
                    </div>
<div className="text-xs text-gray-500 font-mono uppercase tracking-widest">
                      Hours Saved
                    </div>
</div>
<div>
<div className="text-5xl font-serif italic text-white mb-2 tracking-tight">
                      10x
                    </div>
<div className="text-xs text-gray-500 font-mono uppercase tracking-widest">
                      Efficiency
                    </div>
</div>
</div>
</div>
</div>
<div className="flex flex-col gap-12 animate-on-scroll">
<div className="w-full rounded-xl bg-[#050505] border border-white/10 p-1 relative shadow-2xl overflow-hidden group/ui">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-science-500/50 to-transparent"></div>
<div className="flex overflow-hidden bg-black/40 w-full h-[500px] rounded-lg relative">
<div className="text-[10px] leading-3 overflow-hidden text-green-500 font-mono opacity-20 pt-4 pr-4 pb-4 pl-4 absolute top-0 right-0 bottom-0 left-0">
                    PROCESSING_NODE_01... OPTIMIZING_ROUTE...
                    GENERATING_LEAD_LIST... ANALYZING_SENTIMENT...
                    CONSTRUCTING_RESPONSE...
                  </div>
<div className="z-10 bg-black/80 w-full max-w-sm border-white/10 border rounded-xl mt-auto mr-auto mb-auto ml-auto pt-6 pr-6 pb-6 pl-6 relative backdrop-blur-md">
<div className="flex items-center gap-3 mb-4">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<div className="w-2 h-2 rounded-full bg-green-500"></div>
</div>
<div className="space-y-4 font-mono text-xs">
<div className="text-gray-500">
                        &gt; Initiating Workflow...
                      </div>
<div className="text-science-500">
                        &gt; Connecting CRM... SUCCESS
                      </div>
<div className="text-science-500">
                        &gt; Scraping Data Points... [4,201 found]
                      </div>
<div className="text-white">
                        &gt; Deploying Agent Swarm...
                      </div>
<div className="h-1 w-full bg-gray-800 rounded overflow-hidden mt-2">
<div className="h-full bg-science-500 w-[75%] animate-pulse"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="overflow-hidden w-full pt-32 pb-32 relative">
<div className="absolute inset-0 bg-gradient-to-t from-science-900/20 to-black pointer-events-none"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-science-500/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="flex flex-col animate-on-scroll text-center max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-science-600/10 border border-science-500/20 text-science-500 text-xs font-mono mb-8">
              Ready to scale?
            </div>
<h2 className="text-6xl md:text-[80px] font-serif text-white tracking-tight leading-none mb-8">
              Build your
              <span className="italic text-transparent bg-clip-text bg-gradient-to-br from-science-500 to-metal-300">
                future.
              </span>
</h2>
<p className="text-xl text-gray-400 font-light max-w-2xl mb-12">
              Schedule a consultation to discover how AI automation can
              accelerate your business. Get a custom roadmap in 30 minutes.
            </p>
<div className="flex flex-col md:flex-row gap-4 items-center">
<button className="hover:bg-gray-200 transition-colors flex text-sm font-semibold text-black bg-white h-11 rounded-full pr-6 pl-6 shadow-[0_0_20px_rgba(255,255,255,0.3)] gap-x-2 gap-y-2 items-center" onclick="showBooking()">
                Book your Whiteboard Session
              </button>
</div>
</div>
</section>
</div>

<div className="view-section w-full min-h-[90vh] flex flex-col items-center justify-start pt-24 pb-20" id="booking-view">
<div className="max-w-7xl mx-auto px-6 w-full flex flex-col items-center">

<div className="text-center mb-12 space-y-4">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-mono">
<span className="w-1.5 h-1.5 rounded-full bg-science-500 animate-pulse"></span>
              Strategic Audit
            </div>
<h1 className="text-4xl md:text-5xl font-serif text-white tracking-tight">
              Schedule your
              <span className="italic text-science-500">Whiteboard Session</span>
</h1>
<p className="text-gray-400 max-w-lg mx-auto font-light">
              Select a time slot below. We will map your current workflow and
              identify high-value automation targets.
            </p>
</div>

<div className="w-full max-w-6xl bg-[#050505] border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative flex flex-col md:flex-row min-h-[700px]">

<div className="w-full md:w-1/3 border-r border-white/10 bg-white/[0.02] p-8 flex flex-col justify-between relative overflow-hidden">
<div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
<div className="relative z-10 space-y-6">
<div className="h-10 w-10 rounded-lg bg-science-900/30 border border-science-500/30 flex items-center justify-center text-science-400">
<iconify-icon className="text-xl" icon="solar:user-id-linear"></iconify-icon>
</div>
<div>
<h3 className="text-white font-serif italic text-2xl mb-2">
                    Whiteboard Session
                  </h3>
<div className="flex items-center gap-2 text-xs font-mono text-gray-500">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
                    30 MIN
                    <span className="text-gray-700">|</span>
<iconify-icon icon="solar:videocamera-record-linear"></iconify-icon>
                    GOOGLE MEET
                  </div>
</div>
<p className="text-sm text-gray-400 leading-relaxed">
                  "We will map your current workflow topology and identify the
                  highest-leverage automation targets."
                </p>

<div className="pt-4 space-y-3">
<div className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">What We'll Cover</div>
<div className="space-y-2">
<div className="flex items-start gap-2 text-xs text-gray-400">
<iconify-icon className="text-science-500 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Current workflow analysis</span>
</div>
<div className="flex items-start gap-2 text-xs text-gray-400">
<iconify-icon className="text-science-500 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Automation opportunity mapping</span>
</div>
<div className="flex items-start gap-2 text-xs text-gray-400">
<iconify-icon className="text-science-500 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>ROI projection &amp; next steps</span>
</div>
</div>
</div>
</div>
<div className="relative z-10 mt-auto pt-8 border-t border-white/5">
<div className="flex items-center gap-3 mb-3">
<div className="relative">
<div className="h-2 w-2 rounded-full bg-emerald-500"></div>
<div className="absolute inset-0 h-2 w-2 rounded-full bg-emerald-500 animate-ping opacity-75"></div>
</div>
<span className="text-[10px] font-mono uppercase tracking-widest text-emerald-500">
                    Available Now
                  </span>
</div>
<div className="text-xs text-gray-600 font-mono">
                  Live Sync: <span className="text-gray-300">Active</span>
</div>
</div>
</div>

<div className="w-full md:w-2/3 bg-[#050505] relative flex flex-col min-h-[700px]" id="cal-embed-container">
<div id="my-cal-inline-30min" style={{width: '100%', height: '100%', minHeight: '700px', overflow: 'hidden'}}></div>
</div>
</div>
</div>

<div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-white/10 pt-8 w-full max-w-3xl">
<div>
<iconify-icon className="text-science-500 text-2xl mb-2" icon="solar:clock-circle-linear"></iconify-icon>
<div className="text-sm font-medium text-white">30 Minutes</div>
<div className="text-xs text-gray-500">High-intensity session</div>
</div>
<div>
<iconify-icon className="text-science-500 text-2xl mb-2" icon="solar:document-text-linear"></iconify-icon>
<div className="text-sm font-medium text-white">Custom Roadmap</div>
<div className="text-xs text-gray-500">Delivered post-call</div>
</div>
<div>
<iconify-icon className="text-science-500 text-2xl mb-2" icon="solar:shield-check-linear"></iconify-icon>
<div className="text-sm font-medium text-white">Zero Obligation</div>
<div className="text-xs text-gray-500">Free strategic audit</div>
</div>
</div>
</div>
<footer className="w-full border-t border-white/10 bg-black pt-20 pb-12 relative z-20">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-3 text-white">
<div className="w-8 h-8 flex items-center justify-center">
<img alt="OS Logo" className="w-full h-full object-contain filter brightness-110 drop-shadow-[0_0_10px_rgba(37,99,235,0.5)]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<span className="text-lg font-semibold tracking-tight font-serif italic">
                Omni-Science Solutions
              </span>
</div>
<div className="text-xs text-gray-600 font-mono">
              © 2024 Omni-Science. All rights reserved.
            </div>
</div>
</div>
</footer>
</main>

<div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[59] panel-overlay" id="chat-overlay" onclick="toggleChat()"></div>

<div className="fixed top-0 right-0 h-full w-full md:w-[480px] bg-[#0a0a0a] border-l border-white/10 z-[60] side-panel flex flex-col shadow-2xl" id="chat-panel">

<div className="flex items-center justify-between p-4 border-b border-white/5 bg-black/40 backdrop-blur-md shrink-0">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-science-900/30 border border-science-500/20 flex items-center justify-center">
<iconify-icon className="text-science-500" icon="solar:smart-home-angle-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-white tracking-wide">
              Architect Agent
            </div>
<div className="text-[10px] text-science-500 font-mono flex items-center gap-1.5">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
</span>
              Online
            </div>
</div>
</div>
<button className="text-gray-500 hover:text-white transition-colors p-2" onclick="toggleChat()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>

<div className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth" id="chat-messages">

<div className="flex gap-4 max-w-[90%] msg-enter">
<div className="w-6 h-6 rounded bg-science-900/50 border border-science-500/20 flex-shrink-0 flex items-center justify-center mt-1">
<iconify-icon className="text-science-500 text-xs" icon="solar:code-square-linear"></iconify-icon>
</div>
<div className="space-y-2">
<div className="text-xs text-science-500 font-mono mb-1">
              Omni-Architect
            </div>
<div className="p-3 bg-white/5 rounded-lg border border-white/5 text-sm text-gray-300 leading-relaxed font-mono">
<p>Welcome. I am the Omni-Science Architect Agent.</p>
<p className="mt-2">
                I can audit your current workflow, identify bottlenecks, and
                estimate your automation potential.
              </p>
<p className="mt-2">Shall we begin your assessment?</p>
</div>
</div>
</div>
</div>

<div className="px-6 py-2 hidden" id="typing-indicator">
<div className="flex gap-4 max-w-[90%]">
<div className="w-6 h-6 rounded bg-science-900/50 border border-science-500/20 flex-shrink-0 flex items-center justify-center mt-1">
<iconify-icon className="text-science-500 text-xs" icon="solar:code-square-linear"></iconify-icon>
</div>
<div className="flex items-center gap-1 h-8 px-3 bg-white/5 rounded-lg border border-white/5 w-fit">
<div className="w-1.5 h-1.5 bg-gray-500 rounded-full typing-dot"></div>
<div className="w-1.5 h-1.5 bg-gray-500 rounded-full typing-dot"></div>
<div className="w-1.5 h-1.5 bg-gray-500 rounded-full typing-dot"></div>
</div>
</div>
</div>

<div className="p-4 border-t border-white/5 bg-black/40 backdrop-blur-md">
<div className="relative flex items-center">
<input className="w-full bg-white/5 border border-white/10 rounded-lg pl-4 pr-12 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-science-500/50 focus:ring-1 focus:ring-science-500/20 transition-all font-mono" id="chat-input" onkeydown="handleKeyDown(event)" placeholder="Type your response..." type="text"/>
<button className="absolute right-2 p-1.5 bg-science-600 hover:bg-science-500 text-white rounded-md transition-colors flex items-center justify-center" onclick="sendMessage()">
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
<div className="mt-2 text-[10px] text-gray-600 text-center font-mono">
          Powered by Omni-Science Neural Engine v2.4
        </div>
</div>
</div>
<div className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-black/90 to-transparent pointer-events-none z-20"></div>





    </>
  );
}
