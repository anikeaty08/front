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



tailwind.config = { darkMode: 'class' };



(function() {
const section = document.querySelector('[data-element-id="aura-emmgpbuif06hx3e8"]') || document.querySelector('#timeline-steps').parentElement;
const beam = document.getElementById('timeline-beam');
const steps = section ? section.querySelectorAll('.timeline-step') : [];
function updateBeam() {
if (!section || !beam) return;
const rect = section.getBoundingClientRect();
const viewportHeight = window.innerHeight;
const sectionTop = rect.top;
const triggerPoint = viewportHeight * 0.55; // Beam hits center screen
// Beam grows as user scrolls
let fillHeight = triggerPoint - sectionTop;
fillHeight = Math.max(0, Math.min(fillHeight, rect.height));
beam.style.height = `${fillHeight}px`;
steps.forEach((step) => {
const node = step.querySelector('.timeline-node');
if(!node) return;
// Calculate where the node is relative to the section top
// Node is vertically centered in the step
const nodeTop = step.offsetTop + (step.offsetHeight / 2);
if (fillHeight >= nodeTop) {
node.classList.add('node-active');
} else {
node.classList.remove('node-active');
}
});
}
window.addEventListener('scroll', updateBeam);
window.addEventListener('resize', updateBeam);
setTimeout(updateBeam, 100);
// Animation Observer for Reveal
const observerOptions = { threshold: 0.15 };
const revealObserver = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
const left = entry.target.querySelector('.reveal-left');
const right = entry.target.querySelector('.reveal-right');
const header = document.getElementById('timeline-header');
if (header && entry.target.contains(header)) header.classList.remove('opacity-0', 'translate-y-8');
if (left) left.classList.add('reveal-visible');
if (right) right.classList.add('reveal-visible');
revealObserver.unobserve(entry.target);
}
});
}, observerOptions);
const header = document.getElementById('timeline-header');
if(header && header.parentElement) revealObserver.observe(header.parentElement);
steps.forEach(step => revealObserver.observe(step));
})();



{
"@context": "https://schema.org",
"@type": "LocalBusiness",
"name": "Project D",
"image": "https://projectd.io/logo.png",
"@id": "https://projectd.io",
"url": "https://projectd.io",
"telephone": "[Your Phone Number]",
"priceRange": "$$",
"address": {
"@type": "PostalAddress",
"streetAddress": "[Your Street Address]",
"addressLocality": "Deer Park",
"addressRegion": "NY",
"postalCode": "11729",
"addressCountry": "US"
},
"geo": {
"@type": "GeoCoordinates",
"latitude": 40.7618,
"longitude": -73.3293
},
"openingHoursSpecification": {
"@type": "OpeningHoursSpecification",
"dayOfWeek": [
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday"
],
"opens": "09:00",
"closes": "18:00"
},
"sameAs": [
"https://www.linkedin.com/company/project-d",
"https://www.instagram.com/projectd",
"https://projectdweb3.com"
],
"description": "Project D is a dual-force growth agency combining co-engineered video marketing with AI maximization programs (AMP) to automate business workloads and scale without overhead.",
"knowsAbout": [
"AI Automation",
"Video Marketing",
"Creative Strategy",
"Business Scaling",
"AIOps"
]
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      function toggleTheme() {
        const html = document.documentElement;
        if (html.classList.contains('dark')) {
          html.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        } else {
          html.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        }
      }
      // Initialize theme based on preference or system
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      }
    


            (function(){
                          // DREAM-BOT INTELLIGENCE CORE v8.0
                          let STATE = { step: 'init', stage: null, industry: null, depth: 0 };

                          const DB = {
                            'medspa': {
                              k:['medspa','botox','aesthetic','injector','filler','spa','beauty'],
                              new: [
                                { text: "For a <b>New MedSpa</b>, trust is your currency. 💉<br><br>Do you currently have a strategy to get <b>Video Testimonials</b> from your first patients?", opts: ["Yes, I have a plan", "No, not yet", "Why video?"] },
                                { text: "Video converts 3x better than text. <br><br>Next: Are you planning to launch with a <b>'Founding Member'</b> membership to secure recurring revenue early?", opts: ["Yes, membership ready", "No, tell me more", "I prefer packages"] },
                                { text: "Memberships stabilize cash flow. <br><br>We build 'Launch Systems' that combine these elements. Would you like us to map out your <b>Grand Opening Campaign</b>?", opts: ["Yes, let's do it", "How much is it?"] }
                              ],
                              existing: [
                                { text: "Scaling an <b>Existing MedSpa</b> means removing bottlenecks. 📉<br><br>Are you currently confirming appointments <b>manually</b> by phone/text?", opts: ["Yes, my staff does", "No, it's automated", "Mostly manual"] },
                                { text: "Manual follow-up caps your growth. <br><br>Do you have a database of <b>past leads</b> (older than 6 months) that you aren't actively nurturing?", opts: ["Yes, big list", "Small list", "No list"] },
                                { text: "That list is a goldmine. <br><br>We can use AI to reactivate those leads and fill your calendar automatically. Ready to see the <b>AI Booking Bot</b> in action?", opts: ["Yes, let's do it", "Maybe later"] }
                              ]
                            },
                            'solar': {
                              k:['solar','energy','panel','sun','power'],
                              new: [
                                { text: "Breaking into <b>Solar</b> requires high credibility. ☀️<br><br>Are you planning to generate leads via <b>Door-Knocking</b> or <b>Paid Ads</b>?", opts: ["Door Knocking", "Paid Ads", "Both"] },
                                { text: "Both require trust. <br><br>Have you set up a personal brand profile that positions you as a <b>Consultant</b> rather than a Salesperson?", opts: ["Yes, I have", "No, not yet", "Working on it"] },
                                { text: "Positioning is everything. <br><br>We can build a 'Consultant Funnel' that pre-educates homeowners before you even speak to them. Want to see a demo?", opts: ["Yes, let's do it", "No thanks"] }
                              ],
                              existing: [
                                { text: "Growing a <b>Solar Team</b> is about lead velocity. ⚡<br><br>What is your current <b>Cost Per Acquisition (CPA)</b> roughly?", opts: ["Under $1000", "Over $1000", "Not sure"] },
                                { text: "Tracking that is vital. <br><br>Do you currently have an automated <b>12-month nurture sequence</b> for homeowners who say 'Not Ready'?", opts: ["Yes", "No", "Sort of"] },
                                { text: "The money is in the follow-up. <br><br>We can install an AI Nurture system that works 24/7. Ready to lower that CPA?", opts: ["Yes, let's do it", "Tell me more"] }
                              ]
                            },
                            'real estate': {
                              k:['real estate','realtor','agent','broker','home','house'],
                              new: [
                                { text: "New to <b>Real Estate</b>? You need visibility fast. 🏠<br><br>Are you focusing more on <b>Buyers</b> or <b>Listings</b> right now?", opts: ["Buyers", "Listings", "Both"] },
                                { text: "Got it. <br><br>To get either, you need to be the 'Digital Mayor'. Are you comfortable filming <b>video content</b> for social media?", opts: ["Yes, I love it", "I'm camera shy", "I need help"] },
                                { text: "Video is non-negotiable in 2026. <br><br>We can handle the editing and strategy so you just show up. Ready to build your <b>Personal Brand</b>?", opts: ["Yes, let's do it", "How does it work?"] }
                              ],
                              existing: [
                                { text: "Scaling a <b>Real Estate Business</b> requires leverage. 🏗️<br><br>Do you currently use a <b>Virtual Assistant</b> or AI to handle paperwork?", opts: ["Yes, I have a VA", "No, I do it all", "Looking to hire"] },
                                { text: "Delegation is key. <br><br>Do you send automated <b>Video Updates</b> to your past clients to spark referrals?", opts: ["Yes", "No", "Sometimes"] },
                                { text: "Referrals are your lifeblood. <br><br>We can automate your entire referral engine with AI. Want to clone yourself?", opts: ["Yes, let's do it", "Maybe later"] }
                              ]
                            },
                            'ecom': {
                              k:['etsy','ecom','shopify','store','drop','product'],
                              new: [
                                { text: "Launching <b>E-Com</b>? Don't burn cash on ads yet. 🛍️<br><br>Do you have a plan for <b>User Generated Content (UGC)</b>?", opts: ["Yes, I have creators", "No, what is UGC?", "I do it myself"] },
                                { text: "UGC drives lower CPA than polished ads. <br><br>Are you collecting <b>emails/SMS</b> before you launch?", opts: ["Yes", "No", "Not yet"] },
                                { text: "The list is the asset. <br><br>We can build your UGC pipeline and Launch Flow. Ready to sell out?", opts: ["Yes, let's do it", "No"] }
                              ],
                              existing: [
                                { text: "Scaling <b>E-Com</b> is a game of LTV. 📦<br><br>What is your current <b>Cart Abandonment Rate</b>? (Average is ~70%)", opts: ["High (>70%)", "Average", "Low"] },
                                { text: "Recovering those carts is pure profit. <br><br>Do you use <b>SMS recovery</b> (98% open rates) or just Email?", opts: ["Just Email", "SMS & Email", "Neither"] },
                                { text: "SMS is the king of recovery. <br><br>We can set up your AI Recovery Agent. Ready to increase LTV?", opts: ["Yes, let's do it", "No thanks"] }
                              ]
                            },
                            'service': {
                              k:['hvac','plumb','landscap','roof','contractor'],
                              new: [
                                 { text: "Starting a <b>Service Biz</b>? Speed wins. 🛠️<br><br>Can you answer the phone <b>instantly</b> 24/7?", opts: ["Yes, always", "No, I miss calls", "During business hours"] },
                                 { text: "Missed calls = lost money. <br><br>Do you ask for a <b>Review</b> immediately after every job?", opts: ["Yes", "No", "Sometimes"] },
                                 { text: "Speed-to-lead and Reputation are everything. <br><br>We can automate your phone answering and review requests. Ready to dominate local search?", opts: ["Yes, let's do it", "No"] }
                              ],
                              existing: [
                                 { text: "Scaling a <b>Home Service Biz</b> means fixing the leaky bucket. 🚰<br><br>Do you actively <b>reactivate</b> past clients for seasonal work?", opts: ["Yes", "No", "Sometimes"] },
                                 { text: "That's low-hanging fruit. <br><br>Are you struggling to hire <b>qualified technicians</b>?", opts: ["Yes, hiring is hard", "No, team is full", "It varies"] },
                                 { text: "We use 'Day in the Life' content to attract top talent and AI to fill their schedules. Ready to optimize?", opts: ["Yes, let's do it", "No thanks"] }
                              ]
                            },
                            'generic': {
                               new: [
                                 { text: "Starting a business is a journey. <br><br>What is your biggest hurdle right now: <b>Getting Leads</b> or <b>Managing Operations</b>?", opts: ["Getting Leads", "Operations", "Both"] },
                                 { text: "That's the most common challenge. <br><br>Have you considered using <b>AI Automation</b> to handle that workload?", opts: ["Yes, looking into it", "No, what is it?", "I'm skeptical"] },
                                 { text: "AI is the great equalizer. <br><br>We can build a custom roadmap to solve that specific hurdle. Shall we book a time to brainstorm?", opts: ["Yes, let's do it", "No thanks"] }
                               ],
                               existing: [
                                 { text: "Growth requires systems. <br><br>Are you currently <b>tracking your leads</b> in a CRM?", opts: ["Yes, I use a CRM", "No, spreadsheets/paper", "It's messy"] },
                                 { text: "Data is power. <br><br>Do you have automated <b>SMS/Email follow-ups</b> for your leads?", opts: ["Yes", "No", "Some"] },
                                 { text: "Automation improves conversion by 300%. <br><br>We can install this infrastructure for you. Ready to scale?", opts: ["Yes, let's do it", "No thanks"] }
                               ]
                            }
                          };

                          function getResponse(txt) {
                            const t = txt.toLowerCase();

                            // Global Commands
                            if(t.includes('reset') || t.includes('start over') || t.includes('no thanks') || t.includes('no, thanks')) {
                              STATE = { step:'init', stage:null, industry:null, depth:0 };
                              return {
                                reply: "Memory reset. 🧠<br><br>Let's start fresh. Are you launching a <b>new business</b> or looking to <b>grow an existing one</b>?",
                                suggestions: ['Start New Business','Grow Existing Business','What is AMP?']
                              };
                            }

                            // AMP Info Logic
                            if(t.includes('what is amp') || t.includes('amp center') || t.includes('amp program')) {
                               STATE.industry = 'amp_info';
                               STATE.stage = 'new';
                               STATE.step = 'depth';
                               STATE.depth = 1;

                               if(t.includes('center')) {
                                  return {
                                     reply: "The <b>AMP Center</b> is our business command center. It handles your Leads, Finance, and Tasks.<br><br>Do you currently pay for software like Salesforce, HubSpot, or Monday?",
                                     suggestions: ["Yes", "No", "I use Excel"]
                                  };
                               } else if(t.includes('program')) {
                                  return {
                                     reply: "The <b>AMP Program</b> is our Growth Engine. We provide the Video Content and the AI Automation.<br><br>Are you looking more for <b>Creative Content</b> or <b>Operational Automation</b>?",
                                     suggestions: ["Creative Content", "AI Automation", "Both"]
                                  };
                               } else {
                                  return {
                                     reply: "Project D offers two pillars: <b>AMP Center</b> (Software) and <b>AMP Program</b> (Services).<br><br>Which sounds more interesting to you?",
                                     suggestions: ["AMP Center", "AMP Program"]
                                  };
                               }
                            }

                            // Handling AMP Depth
                            if(STATE.industry === 'amp_info') {
                                STATE.depth++;
                                if(STATE.depth === 2) {
                                     return {
                                         reply: "Got it. Most businesses struggle to connect their tools with their marketing. <br><br>Would it be helpful to have a <b>Single Dashboard</b> for everything?",
                                         suggestions: ["Yes, definitely", "Tell me more"]
                                     };
                                }
                                if(STATE.depth >= 3) {
                                     return {
                                         reply: "That's exactly what we built. <br><br>We can demo the full system for you. Ready to see the future of business management?",
                                         suggestions: ["Yes, let's do it", "No thanks"]
                                     };
                                }
                            }

                            // Step 1: Init -> Stage
                            if(STATE.step === 'init') {
                              if(t.includes('new') || t.includes('start') || t.includes('launch')) {
                                STATE.stage = 'new';
                                STATE.step = 'industry';
                                return { reply: "Starting fresh is exciting. To give you the right playbook, <b>what industry</b> are you in?", suggestions: ['MedSpa','Real Estate','Solar','E-Commerce','Service Biz'] };
                              }
                              if(t.includes('grow') || t.includes('scale') || t.includes('exist')) {
                                STATE.stage = 'existing';
                                STATE.step = 'industry';
                                return { reply: "To scale, we need to optimize your specific machine. <b>What industry</b> is your business in?", suggestions: ['MedSpa','Real Estate','Solar','E-Commerce','Service Biz'] };
                              }
                              for(let k in DB) {
                                if(DB[k].k && DB[k].k.some(w => t.includes(w))) {
                                   STATE.industry = k;
                                   STATE.stage = 'existing';
                                   STATE.step = 'depth';
                                   STATE.depth = 0;
                                   return { reply: `Are you a <b>New ${k} Business</b> or an <b>Existing one</b>?`, suggestions: ['New', 'Existing'] };
                                }
                              }
                              return { reply: "I can help with that. First, are you a <b>New Business</b> or an <b>Existing Business</b>?", suggestions: ['New Business', 'Existing Business'] };
                            }

                            // Step 2: Industry Selection
                            if(STATE.step === 'industry') {
                              let found = 'generic';
                              for(let k in DB) {
                                if(DB[k].k && DB[k].k.some(w => t.includes(w))) {
                                  found = k;
                                  break;
                                }
                              }
                              STATE.industry = found;
                              STATE.step = 'depth';
                              STATE.depth = 0;

                              const flow = DB[found][STATE.stage] || DB['generic'][STATE.stage];
                              const stepData = flow[0];
                              return { reply: stepData.text, suggestions: stepData.opts };
                            }

                            // Step 3: Depth Flow
                            if(STATE.step === 'depth') {
                               if(t.includes('new') && STATE.depth === 0) { STATE.stage = 'new'; STATE.depth=0; }
                               else if(t.includes('exist') && STATE.depth === 0) { STATE.stage = 'existing'; STATE.depth=0; }
                               else { STATE.depth++; }

                               const flow = (DB[STATE.industry] || DB['generic'])[STATE.stage || 'existing'];

                               if(flow && flow[STATE.depth]) {
                                  return { reply: flow[STATE.depth].text, suggestions: flow[STATE.depth].opts };
                               } else {
                                  STATE.step = 'pitch';
                                  return { reply: "We specialize in solving exactly this. <br><br>Let's book a <b>Free Strategy Call</b> to build your custom roadmap.", suggestions: ["Yes, let's do it", "No thanks"] };
                               }
                            }

                            if(STATE.step === 'pitch') {
                                 return { reply: "Great choice. Scroll down to the calendar below to lock in your time. 👇", suggestions: ["Book Now"] };
                            }

                            return { reply: "I'm learning every day. Could you rephrase that? Are you New or Existing?", suggestions: ['Reset'] };
                          }

                          // --- UI BINDINGS ---
                          window.dreambotAsk = function(text) {
                            const t = text ? text.toLowerCase() : '';
                            if(t.includes('book') || t.includes('yes, let') || t.includes('help me') || t.includes('do it')) {
                                setTimeout(() => {
                                  const section = document.getElementById('discovery-call');
                                  if(section) section.scrollIntoView({behavior: 'smooth'});
                                }, 500);
                            }
                            const inp = document.getElementById('dreambot-input');
                            if(inp) { inp.value = text; window.dreambotSubmit(); }
                          };
                          window.dreambotSubmit = function(e) {
                            if(e) e.preventDefault();
                            const inp = document.getElementById('dreambot-input');
                            const val = inp.value.trim();
                            if(!val) return;

                            const w = document.getElementById('dreambot-wrapper');
                            if(w) w.classList.replace('rounded-full', 'rounded-2xl');
                            const h = document.getElementById('dreambot-header');
                            if(h) { h.classList.remove('hidden'); h.classList.add('flex'); }
                            const hist = document.getElementById('dreambot-history');
                            if(hist) { hist.classList.remove('hidden'); hist.classList.add('flex'); }
                            const p = document.getElementById('dreambot-prompts');
                            if(p) { p.classList.add('opacity-0', '-translate-y-2', 'pointer-events-none'); setTimeout(() => p.classList.add('hidden'), 500); }

                            const u = document.createElement('div');
                            u.className = 'flex gap-3 justify-end animate-[animationIn_0.3s_ease-out_both]';
                            u.innerHTML = `<div class="bg-gray-900 border border-gray-800 text-white px-4 py-3 rounded-2xl rounded-tr-sm text-sm shadow-sm">${val}</div>`;
                            hist.appendChild(u);
                            hist.scrollTop = hist.scrollHeight;
                            inp.value = '';

                            const oldQRs = hist.querySelectorAll('.qr-container');
                            oldQRs.forEach(el => el.remove());

                            const t = document.createElement('div');
                            t.className = 'flex gap-3 animate-[animationIn_0.3s_ease-out_both]';
                            t.innerHTML = `<div class="w-8 h-8 rounded-full bg-gray-900 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/65f31962-c0e3-4e58-a4a8-9b6355e0a37d_320w.png)] bg-cover bg-center shadow-md flex items-center justify-center shrink-0"></div><div class="bg-white border border-gray-100 px-4 py-4 rounded-2xl rounded-tl-sm flex gap-1"><div class="w-1.5 h-1.5 bg-gray-400 rounded-full typing-dot"></div><div class="w-1.5 h-1.5 bg-gray-400 rounded-full typing-dot" style="animation-delay:0.2s"></div><div class="w-1.5 h-1.5 bg-gray-400 rounded-full typing-dot" style="animation-delay:0.4s"></div></div>`;
                            hist.appendChild(t);
                            hist.scrollTop = hist.scrollHeight;

                            setTimeout(() => {
                              t.remove();
                              const res = getResponse(val);
                              const b = document.createElement('div');
                              b.className = 'flex gap-3 animate-[animationIn_0.3s_ease-out_both]';
                              b.innerHTML = `<div class="w-8 h-8 rounded-full bg-gray-900 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/65f31962-c0e3-4e58-a4a8-9b6355e0a37d_320w.png)] bg-cover bg-center shadow-md flex items-center justify-center shrink-0"></div><div class="bg-white border border-gray-100 text-gray-700 px-4 py-3 rounded-2xl rounded-tl-sm text-sm leading-relaxed max-w-[90%] shadow-sm">${res.reply}</div>`;
                              hist.appendChild(b);

                              if(res.suggestions && res.suggestions.length > 0) {
                                const s = document.createElement('div');
                                s.className = 'qr-container flex flex-wrap gap-2 pl-11 mt-1 animate-[animationIn_0.4s_ease-out_both]';
                                let pills = '';
                                res.suggestions.forEach(sug => {
                                    pills += `<button onclick="dreambotAsk('${sug}')" class="bg-white border border-gray-200 hover:border-[#ff9146] hover:text-[#ff9146] text-xs font-medium text-gray-600 px-3 py-1.5 rounded-full shadow-sm transition-all hover:-translate-y-0.5">${sug}</button>`;
                                });
                                s.innerHTML = pills;
                                hist.appendChild(s);
                              }
                              hist.scrollTop = hist.scrollHeight;
                            }, 800);
                          };

                          const inp = document.getElementById('dreambot-input');
                          const form = document.getElementById('dreambot-form');
                          if(inp) inp.addEventListener('focus', () => {
                              const w = document.getElementById('dreambot-wrapper');
                              if(w) w.classList.replace('rounded-full', 'rounded-2xl');
                              const h = document.getElementById('dreambot-header');
                              if(h) { h.classList.remove('hidden'); h.classList.add('flex'); }
                              const hist = document.getElementById('dreambot-history');
                              if(hist) { hist.classList.remove('hidden'); hist.classList.add('flex'); }
                              const p = document.getElementById('dreambot-prompts');
                              if(p) { p.classList.add('opacity-0', '-translate-y-2', 'pointer-events-none'); setTimeout(() => p.classList.add('hidden'), 500); }
                          });
                          if(form) form.addEventListener('submit', window.dreambotSubmit);
                        })();
          


            (function(){let currentMode='ai';window.setBotMode=function(mode,focus=true){currentMode=mode;const aiBtn=document.getElementById('mode-ai');const humanBtn=document.getElementById('mode-human');const history=document.getElementById('dreambot-history');const form=document.getElementById('dreambot-form');const humanView=document.getElementById('dreambot-human-view');if(mode==='ai'){aiBtn.className='px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all bg-white shadow-sm text-gray-900';humanBtn.className='px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all text-gray-500 hover:text-gray-900';history.classList.remove('hidden');history.classList.add('flex');form.classList.remove('hidden');form.classList.add('flex');humanView.classList.add('hidden');humanView.classList.remove('flex');if(focus)setTimeout(()=>document.getElementById('dreambot-input')?.focus(),50)}else{humanBtn.className='px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all bg-white shadow-sm text-gray-900';aiBtn.className='px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all text-gray-500 hover:text-gray-900';history.classList.add('hidden');history.classList.remove('flex');form.classList.add('hidden');form.classList.remove('flex');humanView.classList.remove('hidden');humanView.classList.add('flex')}};window.dreambotExpand=function(){const w=document.getElementById('dreambot-wrapper');if(w)w.classList.replace('rounded-full','rounded-2xl');const h=document.getElementById('dreambot-header');if(h){h.classList.remove('hidden');h.classList.add('flex')}window.setBotMode(currentMode);const p=document.getElementById('dreambot-prompts');if(p){p.classList.add('opacity-0','-translate-y-2','pointer-events-none');setTimeout(()=>p.classList.add('hidden'),500)}};window.dreambotClose=function(){window.setBotMode('ai',false);const w=document.getElementById('dreambot-wrapper');if(w)w.classList.replace('rounded-2xl','rounded-full');const h=document.getElementById('dreambot-header');if(h){h.classList.add('hidden');h.classList.remove('flex')}const hist=document.getElementById('dreambot-history');if(hist){hist.classList.add('hidden');hist.classList.remove('flex')}const p=document.getElementById('dreambot-prompts');if(p){p.classList.remove('hidden');setTimeout(()=>p.classList.remove('opacity-0','-translate-y-2','pointer-events-none'),50)};const inp=document.getElementById('dreambot-input');if(inp)inp.blur()}})();
          
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
      
<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 hover:scale-[1.02] print:hidden" id="dynamic-island">
<div className="flex gap-1.5 items-center p-1.5 rounded-full bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.1)] transition-all hover:bg-white/10 hover:border-white/20 duration-300">

<a className="flex items-center justify-center transition-transform hover:scale-110 group bg-center w-9 h-9 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8c547aee-5092-488d-9b24-cc3cadf37fdc_320w.png)] bg-cover rounded-full" href="#"></a>

<div className="flex items-center gap-0.5 px-1">
<a className="transition-all text-xs font-medium text-slate-950 bg-white/20 mix-blend-difference rounded-full px-3.5 py-1.5 relative shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]" href="#">
            Home
          </a>
<a className="hover:bg-white/10 transition-all text-xs font-normal text-slate-950 mix-blend-difference rounded-full pt-1.5 pr-3.5 pb-1.5 pl-3.5" href="/amp-center">
            AMP Center
          </a>
</div>

<div className="w-px h-4 bg-white/60 mix-blend-difference mx-1.5"></div>

<button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-all active:scale-90" onclick="toggleTheme()">
<iconify-icon className="block dark:hidden text-[#ff9146]" icon="solar:sun-2-bold-duotone" width="20"></iconify-icon>
<iconify-icon className="hidden dark:block text-[#46d4c6]" icon="solar:moon-stars-bold-duotone" width="18"></iconify-icon>
</button>
</div>
</nav>


<div className="video-background-container fixed top-0 w-full h-screen -z-10 mix-blend-overlay opacity-30" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, black 0%, black 40%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 40%, transparent 100%)'}}>
<video autoplay="" className="w-full h-full object-cover grayscale" loop="" muted="" playsinline="" src="https://www.youtube.com/watch?v=tVz2L"></video>
</div>

<div className="fixed -top-48 -left-48 w-96 h-96 bg-[#ff9146] rounded-full blur-[100px] opacity-70 pointer-events-none z-0" id="orange-glow" style={{willChange: 'transform'}}></div>

<div className="absolute inset-0 z-0 flex justify-center pointer-events-none overflow-hidden">

<div className="w-full max-w-6xl flex justify-between px-4 sm:px-8 absolute h-full pointer-events-none">

<div className="absolute left-0 top-0 bottom-0 w-px bg-white/20 overflow-hidden">
<div className="absolute w-full h-[50vh] -top-[50vh] bg-gradient-to-b from-transparent via-[#ff9146] dark:via-[#46d4c6] to-transparent animate-beam-drop shadow-[0_0_25px_rgba(255,145,70,0.8)] dark:shadow-[0_0_25px_rgba(70,212,198,0.6)]" style={{opacity: '0.7', animationDelay: '0s', animationDuration: '14s'}}></div>
<div className="absolute w-full h-[50vh] -top-[50vh] bg-gradient-to-b from-transparent via-[#ff9146] dark:via-[#46d4c6] to-transparent animate-beam-drop shadow-[0_0_25px_rgba(255,145,70,0.8)] dark:shadow-[0_0_25px_rgba(70,212,198,0.6)]" style={{opacity: '0.5', animationDelay: '7s', animationDuration: '18s'}}></div>
</div>

<div className="absolute right-0 top-0 bottom-0 w-px bg-white/20 overflow-hidden">
<div className="absolute w-full h-[50vh] -top-[50vh] bg-gradient-to-b from-transparent via-[#ff9146] dark:via-[#46d4c6] to-transparent animate-beam-drop shadow-[0_0_25px_rgba(255,145,70,0.8)] dark:shadow-[0_0_25px_rgba(70,212,198,0.6)]" style={{opacity: '0.7', animationDelay: '4s', animationDuration: '13s'}}></div>
<div className="absolute w-full h-[50vh] -top-[50vh] bg-gradient-to-b from-transparent via-[#ff9146] dark:via-[#46d4c6] to-transparent animate-beam-drop shadow-[0_0_25px_rgba(255,145,70,0.8)] dark:shadow-[0_0_25px_rgba(70,212,198,0.6)]" style={{opacity: '0.5', animationDelay: '11s', animationDuration: '17s'}}></div>
</div>

<div className="relative w-px h-full bg-white/20 overflow-hidden">
<div className="absolute w-full h-[50vh] -top-[50vh] bg-gradient-to-b from-transparent via-[#ff9146] dark:via-[#46d4c6] to-transparent animate-beam-drop shadow-[0_0_25px_rgba(255,145,70,0.8)] dark:shadow-[0_0_25px_rgba(70,212,198,0.6)]" style={{opacity: '0.7', animationDelay: '2s', animationDuration: '12s'}}></div>
<div className="absolute w-full h-[50vh] -top-[50vh] bg-gradient-to-b from-transparent via-[#ff9146] dark:via-[#46d4c6] to-transparent animate-beam-drop shadow-[0_0_25px_rgba(255,145,70,0.8)] dark:shadow-[0_0_25px_rgba(70,212,198,0.6)]" style={{opacity: '0.5', animationDelay: '8.5s', animationDuration: '16s'}}></div>
</div>
<div className="relative w-px h-full bg-white/20 overflow-hidden">
<div className="absolute w-full h-[50vh] -top-[50vh] bg-gradient-to-b from-transparent via-[#ff9146] dark:via-[#46d4c6] to-transparent animate-beam-drop shadow-[0_0_25px_rgba(255,145,70,0.8)] dark:shadow-[0_0_25px_rgba(70,212,198,0.6)]" style={{opacity: '0.7', animationDelay: '6s', animationDuration: '15s'}}></div>
<div className="absolute w-full h-[50vh] -top-[50vh] bg-gradient-to-b from-transparent via-[#ff9146] dark:via-[#46d4c6] to-transparent animate-beam-drop shadow-[0_0_25px_rgba(255,145,70,0.8)] dark:shadow-[0_0_25px_rgba(70,212,198,0.6)]" style={{opacity: '0.5', animationDelay: '13s', animationDuration: '20s'}}></div>
</div>
<div className="relative w-px h-full bg-white/20 overflow-hidden">
<div className="absolute w-full h-[50vh] -top-[50vh] bg-gradient-to-b from-transparent via-[#ff9146] dark:via-[#46d4c6] to-transparent animate-beam-drop shadow-[0_0_25px_rgba(255,145,70,0.8)] dark:shadow-[0_0_25px_rgba(70,212,198,0.6)]" style={{opacity: '0.7', animationDelay: '3.5s', animationDuration: '11s'}}></div>
<div className="absolute w-full h-[50vh] -top-[50vh] bg-gradient-to-b from-transparent via-[#ff9146] dark:via-[#46d4c6] to-transparent animate-beam-drop shadow-[0_0_25px_rgba(255,145,70,0.8)] dark:shadow-[0_0_25px_rgba(70,212,198,0.6)]" style={{opacity: '0.5', animationDelay: '9.5s', animationDuration: '15s'}}></div>
</div>
</div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] opacity-80 pointer-events-none">
<div className="absolute top-24 right-1/4 w-[28rem] h-[28rem] bg-[#46d4c6] rounded-full blur-[140px] mix-blend-color-burn opacity-40"></div>
</div>
</div>

<main className="w-full z-10 pt-24 pb-40 relative">

<div className="absolute top-10 left-0 right-0 h-[600px] max-w-7xl mx-auto pointer-events-none z-50 block">

<div className="absolute top-[22%] left-3 sm:top-[15%] sm:left-[5%] lg:left-[10%] float-1 pointer-events-none">
<a className="flex items-center justify-center hover:text-[#E1306C] hover:bg-white/80 hover:scale-110 transition-all duration-300 group sm:w-16 sm:h-16 pointer-events-auto text-gray-700 bg-white/50 w-10 h-10 border-white/60 border rounded-full relative shadow-xl backdrop-blur-xl translate-x-6 -translate-y-1 scale-75" href="https://www.instagram.com/projectd.io" target="_blank">
<iconify-icon className="" height="26" icon="solar:camera-linear" style={{color: 'rgb(225, 48, 108)'}} width="26"></iconify-icon>
<span className="absolute top-full mt-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-medium tracking-wide text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity border border-white shadow-sm pointer-events-none">
              Instagram
            </span>
</a>
</div>

<div className="absolute top-[35%] right-3 sm:top-[45%] sm:right-[5%] lg:right-[8%] float-2 pointer-events-none">
<a className="sm:w-20 sm:h-20 flex items-center justify-center hover:text-[#ff0050] hover:bg-white/80 hover:scale-110 transition-all duration-300 group text-gray-700 bg-white/50 w-12 h-12 pointer-events-auto border-white/60 border rounded-full relative shadow-xl backdrop-blur-xl translate-x-1 -translate-y-1 scale-75" href="https://www.tiktok.com/@projectdmediagroup" target="_blank">
<iconify-icon className="" icon="solar:music-notes-linear" width="32"></iconify-icon>
<span className="absolute top-full mt-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-medium tracking-wide text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity border border-white shadow-sm pointer-events-none">
              TikTok
            </span>
</a>
</div>

<div className="absolute top-[38%] left-3 sm:top-[65%] sm:left-[6%] lg:left-[14%] float-3 pointer-events-none">
<a className="sm:w-14 sm:h-14 flex items-center justify-center hover:text-[#1877F2] hover:bg-white/80 hover:scale-110 transition-all duration-300 group -translate-x-2 text-gray-700 bg-white/50 w-10 h-10 pointer-events-auto border-white/60 border rounded-full relative shadow-xl backdrop-blur-xl translate-y-16 scale-90" href="https://www.facebook.com/projectdmediagroup/" target="_blank">
<iconify-icon className="" icon="solar:users-group-two-rounded-linear" width="22"></iconify-icon>
<span className="absolute top-full mt-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-medium tracking-wide text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity border border-white shadow-sm pointer-events-none">
              Facebook
            </span>
</a>
</div>
</div>

<section className="z-30 text-center max-w-4xl mr-auto ml-auto pr-6 pl-6 relative">

<div className="group flex md:gap-12 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate mb-12 gap-x-6 gap-y-6 items-center justify-center">
<div className="group/step1 flex flex-col items-center gap-3 cursor-pointer">
<span className="text-xs font-medium tracking-widest text-[#ff9146] uppercase transition-colors duration-300 group-hover:text-gray-500 group-hover/step1:!text-[#ff9146]">
              01
            </span>
<div className="h-1 w-12 md:w-20 bg-[#ff9146] rounded-full shadow-[0_0_12px_rgba(255,145,70,0.6)] transition-all duration-300 group-hover:bg-gray-400/30 group-hover:shadow-none group-hover/step1:!bg-[#ff9146] group-hover/step1:!shadow-[0_0_12px_rgba(255,145,70,0.6)]"></div>
<span className="text-sm font-medium text-gray-800 transition-all duration-300 group-hover:text-gray-600 group-hover:font-normal group-hover/step1:!text-gray-800 group-hover/step1:!font-medium">
              Internal Efficiency
            </span>
</div>
<div className="group/step2 flex flex-col items-center gap-3 cursor-pointer">
<span className="text-xs font-medium tracking-widest text-gray-500 uppercase transition-colors duration-300 group-hover/step2:text-[#ff9146]">
              02
            </span>
<div className="h-1 w-12 md:w-20 bg-gray-400/30 rounded-full transition-all duration-300 group-hover/step2:bg-[#ff9146] group-hover/step2:shadow-[0_0_12px_rgba(255,145,70,0.6)]"></div>
<span className="text-sm font-normal text-gray-600 transition-all duration-300 group-hover/step2:text-gray-800 group-hover/step2:font-medium">
              External Gravity
            </span>
</div>
<div className="group/step3 flex flex-col items-center gap-3 cursor-pointer">
<span className="text-xs font-medium tracking-widest text-gray-500 uppercase transition-colors duration-300 group-hover/step3:text-[#ff9146]">
              03
            </span>
<div className="h-1 w-12 md:w-20 bg-gray-400/30 rounded-full transition-all duration-300 group-hover/step3:bg-[#ff9146] group-hover/step3:shadow-[0_0_12px_rgba(255,145,70,0.6)]"></div>
<span className="text-sm font-normal text-gray-600 transition-all duration-300 group-hover/step3:text-gray-800 group-hover/step3:font-medium">
              Dual-Force Scale
            </span>
</div>
</div>
<h1 className="sm:text-6xl md:text-7xl leading-[1.1] text-5xl font-medium text-gray-900 tracking-tight mb-8 [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll animate">
          Project D Growth Agency
        </h1>
<p className="sm:text-2xl leading-relaxed [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll animate text-xl font-normal text-gray-700 max-w-2xl mr-auto ml-auto">
          We make businesses famous with our Social Media &amp; UGC Content and
          profitable with our custom AI. We train your staff on how to automate
          the business to maximize profits.
        </p>

<div className="[animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll animate z-40 text-left mt-12 mr-auto mb-4 ml-auto relative max-w-3xl">
<div className="shadow-gray-400/30 overflow-hidden transition-all duration-500 ease-in-out flex flex-col group hover:bg-white/90 bg-white/70 border-white/60 border rounded-full shadow-2xl backdrop-blur-2xl max-w-xl mx-auto" id="dreambot-wrapper">

<div className="bg-white/50 border-gray-100 border-b pt-4 pr-5 pb-4 pl-5 items-center justify-between hidden" id="dreambot-header">
<div className="flex items-center justify-between w-full">
<div className="flex items-center gap-3">
<div className="flex text-white bg-gray-900 w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/65f31962-c0e3-4e58-a4a8-9b6355e0a37d_320w.png)] bg-cover bg-center rounded-full relative shadow-md items-center justify-center">
<div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#46d4c6] border-2 border-white"></div>
</div>
<div>
<h3 className="text-sm font-medium text-gray-900 tracking-tight leading-tight">
                      Dream-Bot
                    </h3>
<p className="text-[10px] uppercase tracking-widest text-[#46d4c6] font-medium leading-tight">
                      AI Business Architect
                    </p>
</div>
</div>
<div className="flex items-center gap-2">
<div className="flex items-center bg-gray-100/80 rounded-full p-0.5 border border-gray-200/50 backdrop-blur-sm">
<button className="px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all bg-white shadow-sm text-gray-900" id="mode-ai" onclick="window.setBotMode('ai')">
                      AI
                    </button>
<button className="px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all text-gray-500 hover:text-gray-900" id="mode-human" onclick="window.setBotMode('human')">
                      Team
                    </button>
</div>
<button className="text-gray-400 hover:text-gray-600 hover:bg-gray-100/50 active:bg-gray-200/50 transition-all rounded-full w-8 h-8 flex items-center justify-center z-10" onclick="event.preventDefault(); event.stopPropagation(); window.dreambotClose();" type="button">
<svg className="lucide lucide-x-circle pointer-events-none" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m15 9-6 6"></path>
<path d="m9 9 6 6"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="overflow-y-auto flex-col gap-4 custom-scrollbar bg-gray-50/50 max-h-[320px] pt-5 pr-5 pb-5 pl-5 gap-x-4 gap-y-4 hidden" id="dreambot-history">
<div className="flex gap-3 gap-x-3 gap-y-3">
<div className="shrink-0 w-8 h-8 rounded-full bg-gray-900 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/65f31962-c0e3-4e58-a4a8-9b6355e0a37d_320w.png)] bg-cover bg-center shadow-md"></div>
<div className="bg-white border border-gray-100 shadow-sm rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-gray-700 font-normal leading-relaxed">
                  Hello! I'm Dream-Bot, Project D's AI Architect. 🤖
                  <br/>
<br/>
                  I can help you build a growth strategy for your specific
                  industry. To get started, are you launching a
                  <b>new business</b>
                  or looking to
                  <b>grow an existing one</b>
                  ?
                </div>
</div>
</div>
<div className="hidden flex-col h-[320px] items-center justify-center p-6 text-center animate-[animationIn_0.3s_ease-out_both]" id="dreambot-human-view">
<div className="w-16 h-16 rounded-full bg-white p-1 shadow-lg mb-4 relative mx-auto">
<img className="w-full h-full rounded-full object-cover" src="https://cdn.commoninja.com/asset/6ada5091-b3d5-4d5b-9920-80bf3411de3f.png"/>
<div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
</div>
<h3 className="text-gray-900 font-medium text-lg mb-1">
                Project D Team
              </h3>
<p className="text-xs text-gray-500 mb-6">
                Typically replies very quickly
              </p>
<div className="bg-white p-4 rounded-2xl rounded-tr-sm shadow-sm border border-gray-100 text-sm text-gray-700 mb-6 max-w-[260px] mx-auto text-left relative">
<div className="absolute -right-2 top-0 w-4 h-4 bg-white transform rotate-45 border-t border-r border-gray-100"></div>
                Hey there! How can we help you to scale your business? 🫡
              </div>
<a className="inline-flex items-center gap-2 text-white px-6 py-2.5 rounded-full font-medium text-sm transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 hover:-translate-y-0.5 group overflow-hidden isolate" href="https://m.me/101132579519882" target="_blank">
<div className="absolute inset-[-200%] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#ffffff_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[spin_4s_linear_infinite] pointer-events-none"></div>
<div className="absolute inset-[1px] rounded-full bg-[#0084FF] group-hover:bg-[#0078e8] transition-colors duration-300 pointer-events-none z-0"></div>
<div className="absolute inset-[1px] rounded-full overflow-hidden pointer-events-none z-0">
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
</div>
<span className="relative z-10 flex items-center gap-2">
<iconify-icon className="brightness-0 invert" icon="logos:messenger" width="16"></iconify-icon>
                  Chat on Messenger
                </span>
</a>
</div>

<form className="flex w-full pt-1.5 pr-1.5 pb-1.5 pl-1.5 relative items-center" id="dreambot-form">
<div className="pl-4 pr-2 text-[#ff9146] transition-transform duration-300 group-hover:scale-110">
<iconify-icon className="" icon="solar:magic-stick-3-linear" width="20"></iconify-icon>
</div>
<input autocomplete="off" className="border-none focus:ring-0 placeholder-gray-500 sm:text-base outline-none text-sm text-gray-800 bg-transparent w-full pt-3 pr-2 pb-3 pl-2" id="dreambot-input" placeholder="Ask about starting a business, your niche, or AMP..." type="text"/>
<button className="hover:bg-[#ff9146] flex transition-all duration-300 shrink-0 transform active:scale-95 text-white bg-gray-900 w-10 h-10 rounded-full mr-1 shadow-md items-center justify-center" onclick="dreambotSubmit(event)" type="submit">
<svg className="lucide lucide-arrow-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path className="" d="m12 5 7 7-7 7"></path>
</svg>
</button>
</form>
</div>

<div className="flex flex-wrap gap-2 transition-all duration-500 transform opacity-100 mt-4 translate-y-0 gap-x-2 gap-y-2 items-center justify-center" id="dreambot-prompts">
<button className="bg-white/60 hover:bg-white backdrop-blur-md border border-white/80 text-xs font-medium text-gray-600 px-3 py-1.5 rounded-full shadow-sm hover:shadow transition-all hover:-translate-y-0.5 whitespace-nowrap" onclick="dreambotAsk('I started a new business')" type="button">
              I started a new business
            </button>
<button className="bg-white/60 hover:bg-white backdrop-blur-md border border-white/80 text-xs font-medium text-gray-600 px-3 py-1.5 rounded-full shadow-sm hover:shadow transition-all hover:-translate-y-0.5 whitespace-nowrap" onclick="dreambotAsk('I want to grow my business')" type="button">
              I want to grow my business
            </button>
<button className="bg-white/60 hover:bg-white backdrop-blur-md border border-white/80 text-xs font-medium text-gray-600 px-3 py-1.5 rounded-full shadow-sm hover:shadow transition-all hover:-translate-y-0.5 whitespace-nowrap" onclick="dreambotAsk('What is AMP Center?')" type="button">
              What is AMP Center?
            </button>
<button className="bg-white/60 hover:bg-white backdrop-blur-md border border-white/80 text-xs font-medium text-gray-600 px-3 py-1.5 rounded-full shadow-sm hover:shadow transition-all hover:-translate-y-0.5 whitespace-nowrap" onclick="dreambotAsk('What is AMP Program?')" type="button">
              What is AMP Program?
            </button>
<button className="bg-white/60 hover:bg-white backdrop-blur-md border border-gray-300 border-dashed text-xs font-medium text-gray-600 px-3 py-1.5 rounded-full shadow-sm hover:shadow transition-all hover:-translate-y-0.5 whitespace-nowrap flex items-center gap-1.5" onclick="document.getElementById('dreambot-input').focus()" type="button">
<iconify-icon icon="solar:pen-new-square-linear" width="14"></iconify-icon>
              Write custom prompt
            </button>
</div>


</div>
</section>

<section className="sm:px-6 max-w-6xl mt-16 mr-auto ml-auto pr-4 pl-4 perspective-[2000px]">
<div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/80 dark:border-gray-800 shadow-2xl shadow-gray-200/60 dark:shadow-black/20 overflow-hidden ring-1 ring-black/[0.04] dark:ring-white/[0.05] scroll-flip-card opacity-0 relative z-30">

<div className="flex gap-4 bg-[#f9fafb] dark:bg-gray-900 border-gray-200/60 dark:border-gray-800 border-b pt-3 pr-4 pb-3 pl-4 items-center justify-between relative z-20">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]"></div>
<div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]"></div>
<div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]"></div>
</div>
<div className="flex-1 flex justify-center">
<div className="flex dark:text-gray-400 dark:bg-gray-800 dark:border-gray-700 gap-1.5 text-xs font-normal text-gray-500 bg-white w-full max-w-sm border-gray-200 border rounded-md pt-1.5 pr-4 pb-1.5 pl-4 shadow-sm gap-x-1.5 gap-y-1.5 items-center justify-center cursor-pointer" onclick="window.location.href='/amp-center'" role="button">
                projectd.io/amp-center
              </div>
</div>
<div className="w-12"></div>
</div>

<div className="relative bg-[#EEF2F5] dark:bg-[#0B0F19] min-h-[700px] p-4 sm:p-6 lg:p-8 overflow-hidden font-sans">

<div className="absolute right-0 top-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-orange-500/10 dark:bg-orange-500/5 blur-[100px] rounded-full pointer-events-none"></div>

<div className="flex justify-center mb-8 relative z-10">
<div className="flex items-center gap-3 bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl px-4 py-2 rounded-full border border-white/40 dark:border-gray-700/50 shadow-sm ring-1 ring-black/5 dark:ring-white/5">
<div className="dark:bg-white flex dark:text-gray-900 text-[10px] bg-center font-medium text-white tracking-tight w-7 h-7 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0313e2ab-89dc-4df3-a716-3f8d562bb22c_320w.png)] bg-cover rounded-full items-center justify-center"></div>
<span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  Home
                </span>
<span className="text-xs text-gray-300 dark:text-gray-700">/</span>
<span className="text-sm font-medium text-gray-900 dark:text-white">
                  AMP Center
                </span>
<div className="w-px h-4 bg-gray-200 dark:bg-gray-700 mx-1"></div>
<svg className="text-orange-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle className="" cx="12" cy="12" r="4"></circle>
<path d="M12 2v2"></path>
<path d="M12 20v2"></path>
<path d="m4.93 4.93 1.41 1.41"></path>
<path d="m17.66 17.66 1.41 1.41"></path>
<path d="M2 12h2"></path>
<path d="M20 12h2"></path>
<path d="m6.34 17.66-1.41 1.41"></path>
<path d="m19.07 4.93-1.41 1.41"></path>
</svg>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10 max-w-6xl mx-auto w-full items-start">

<div className="col-span-1 lg:col-span-5 flex flex-col gap-6">

<div className="bg-white dark:bg-[#111827] rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-gray-800/80 relative overflow-hidden group hover:shadow-md transition-shadow">
<div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-teal-50/50 dark:from-teal-900/10 to-transparent pointer-events-none rounded-t-3xl"></div>
<div className="relative z-10">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-teal-50 dark:bg-teal-500/10 flex items-center justify-center text-teal-600 dark:text-teal-400">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"></path>
<path d="M4 6v12c0 1.1.9 2 2 2h14v-4"></path>
<path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z"></path>
</svg>
</div>
<h3 className="text-base font-medium text-gray-900 dark:text-white tracking-tight">
                          Finance
                        </h3>
</div>
<button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="1"></circle>
<circle cx="19" cy="12" r="1"></circle>
<circle cx="5" cy="12" r="1"></circle>
</svg>
</button>
</div>
<div className="mb-6">
<div className="text-[10px] font-medium text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">
                        Net Revenue
                      </div>
<div className="text-4xl font-medium tracking-tight text-teal-600 dark:text-teal-400">
                        $32,850.00
                      </div>
</div>

<div className="space-y-3 mb-6">
<div className="flex gap-2">
<div className="relative flex-1">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                            $
                          </span>
<input className="w-full bg-transparent border border-gray-200 dark:border-gray-800 rounded-lg pl-7 pr-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition" placeholder="0.00" type="text"/>
</div>
<div className="flex p-1 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-800 shrink-0">
<button className="px-3 py-1.5 text-xs font-medium text-gray-500 dark:text-gray-400 rounded-md hover:text-gray-900 dark:hover:text-white transition-colors">
                            In
                          </button>
<button className="px-3 py-1.5 text-xs font-medium bg-white dark:bg-gray-700 shadow-sm rounded-md text-orange-600 dark:text-orange-400">
                            Out
                          </button>
</div>
</div>
<input className="w-full bg-transparent border border-gray-200 dark:border-gray-800 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition-colors dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-600" placeholder="Description (e.g. Allergan Order)" type="text"/>
<button className="w-full bg-[#14a689] hover:bg-[#108c73] text-white text-sm font-medium py-2.5 rounded-lg transition-colors shadow-sm shadow-teal-500/20">
                        Add Transaction
                      </button>
</div>

<div className="space-y-2">
<div className="flex items-center justify-between p-3 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/30">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-500/10 flex items-center justify-center text-orange-500">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="m19 19-7-7 7-7"></path>
<path d="M5 19V5h14"></path>
</svg>
</div>
<span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Allergan Supplies
                          </span>
</div>
<span className="text-sm font-medium text-orange-500">
                          -$2,400
                        </span>
</div>
<div className="flex items-center justify-between p-3 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/30">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-teal-100 dark:bg-teal-500/10 flex items-center justify-center text-teal-600 dark:text-teal-400">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="m5 5 7 7-7 7"></path>
<path d="M19 5v14H5"></path>
</svg>
</div>
<span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Liquid Facelift Pkg
                          </span>
</div>
<span className="text-sm font-medium text-teal-600 dark:text-teal-400">
                          +$3,500
                        </span>
</div>
<div className="flex items-center justify-between p-3 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/30">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-teal-100 dark:bg-teal-500/10 flex items-center justify-center text-teal-600 dark:text-teal-400">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="m5 5 7 7-7 7"></path>
<path d="M19 5v14H5"></path>
</svg>
</div>
<span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Morpheus8 Session
                          </span>
</div>
<span className="text-sm font-medium text-teal-600 dark:text-teal-400">
                          +$1,200
                        </span>
</div>
</div>
</div>
</div>

<div className="bg-white/60 dark:bg-[#111827]/60 backdrop-blur-xl rounded-3xl p-6 shadow-sm border border-gray-200/50 dark:border-gray-800/50 relative overflow-hidden group">
<div className="flex items-center justify-between mb-8 relative z-10">
<div className="flex items-center gap-2 text-gray-400 dark:text-gray-500">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="1"></circle>
<circle cx="19" cy="12" r="1"></circle>
<circle cx="5" cy="12" r="1"></circle>
</svg>
</div>
</div>
<div className="flex items-center gap-3 mb-8 relative z-10">
<div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-500/10 flex items-center justify-center text-orange-500 shadow-sm shadow-orange-500/20">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
</svg>
</div>
<h3 className="text-base font-medium text-gray-900 dark:text-white tracking-tight">
                      Automation Engine
                    </h3>
</div>
<div className="flex flex-col items-center justify-center py-6 relative z-10">

<button className="group/btn flex shadow-black/40 hover:scale-105 transition-all duration-300 [&amp;.power-active]:border-[#ff9146]/50 [&amp;.power-active]:shadow-[0_0_30px_rgba(255,145,70,0.3)] bg-[#171A21] w-24 h-24 border-gray-700 border rounded-full mb-6 relative shadow-2xl items-center justify-center" onclick="this.classList.toggle('power-active')">

<div className="absolute inset-0 rounded-full overflow-hidden opacity-0 transition-opacity duration-500 [.power-active_&amp;]:opacity-100 pointer-events-none z-0">
<div className="w-full h-full animate-spin [animation-duration:1.5s] transition-[filter] duration-75 delay-0 [.power-active_&amp;]:delay-[3000ms] [.power-active_&amp;]:duration-[3000ms] [.power-active_&amp;]:hue-rotate-[150deg]" style={{background: 'conic-gradient(from 0deg, transparent 0 240deg, #ff9146 360deg)', WebkitMask: 'radial-gradient(closest-side, transparent 92%, black 93%)', mask: 'radial-gradient(closest-side, transparent 92%, black 93%)'}}></div>
</div>

<div className="absolute inset-0 rounded-full border border-white/5 pointer-events-none z-10"></div>

<svg className="relative z-20 transition-all duration-300 text-gray-600 [.power-active_&amp;]:text-white [.power-active_&amp;]:drop-shadow-[0_0_8px_rgba(255,255,255,1)]" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v10"></path>
<path d="M18.4 6.6a9 9 0 1 1-12.77.04"></path>
</svg>
</button>
<div className="text-[10px] font-medium text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em] mb-2">
                      Initiate Sequence
                    </div>
<div className="text-xs font-normal text-gray-400 dark:text-gray-500">
                      Targets: 14 Consults, 5 Post-Op
                    </div>
</div>
</div>
</div>

<div className="col-span-1 lg:col-span-7 flex flex-col gap-6">

<div className="bg-white dark:bg-[#111827] rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-gray-800/80 hover:shadow-md transition-shadow flex flex-col h-full">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-500">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
</div>
<h3 className="text-base font-medium text-gray-900 dark:text-white tracking-tight">
                        Patient Pipeline
                      </h3>
</div>
<button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="1"></circle>
<circle cx="19" cy="12" r="1"></circle>
<circle cx="5" cy="12" r="1"></circle>
</svg>
</button>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
<input className="w-full bg-transparent border border-gray-200 dark:border-gray-800 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition-colors dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-600" placeholder="Patient Name" type="text"/>
<input className="w-full bg-transparent border border-gray-200 dark:border-gray-800 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition-colors dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-600" placeholder="Treatment Interest" type="text"/>
<input className="w-full bg-transparent border border-gray-200 dark:border-gray-800 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition-colors dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-600" placeholder="Email Address" type="email"/>
<input className="w-full bg-transparent border border-gray-200 dark:border-gray-800 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition-colors dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-600" placeholder="Phone Number" type="tel"/>
</div>
<button className="w-full bg-[#14a689] hover:bg-[#108c73] text-white text-sm font-medium py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 mb-6 shadow-sm shadow-teal-500/20">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
                    Add Patient
                  </button>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-auto">

<div className="border border-gray-100 dark:border-gray-800 rounded-xl p-3.5 bg-white dark:bg-[#111827] flex items-start gap-3 hover:border-gray-200 dark:hover:border-gray-700 transition-colors cursor-pointer shadow-sm">
<div className="w-2.5 h-2.5 rounded-full bg-orange-400 mt-1 shrink-0 shadow-[0_0_8px_rgba(251,146,60,0.4)]"></div>
<div className="flex-1">
<div className="text-sm font-medium text-gray-900 dark:text-white">
                          Sarah Jenkins
                        </div>
<div className="text-xs font-normal text-gray-500 dark:text-gray-400 mb-2 mt-0.5">
                          Botox Consultation
                        </div>
<div className="flex items-center gap-2 text-gray-400">
<svg className="hover:text-gray-600 dark:hover:text-gray-300" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
</svg>
<svg className="hover:text-gray-600 dark:hover:text-gray-300" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
</svg>
</div>
</div>
</div>

<div className="border border-gray-100 dark:border-gray-800 rounded-xl p-3.5 bg-white dark:bg-[#111827] flex items-start gap-3 hover:border-gray-200 dark:hover:border-gray-700 transition-colors cursor-pointer shadow-sm">
<div className="w-2.5 h-2.5 rounded-full bg-pink-400 mt-1 shrink-0 shadow-[0_0_8px_rgba(244,114,182,0.4)]"></div>
<div className="flex-1">
<div className="text-sm font-medium text-gray-900 dark:text-white">
                          Jessica Taylor
                        </div>
<div className="text-xs font-normal text-gray-500 dark:text-gray-400 mb-2 mt-0.5">
                          Laser Hair Removal
                        </div>
<div className="flex items-center gap-2 text-gray-400">
<svg className="hover:text-gray-600 dark:hover:text-gray-300" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
</svg>
<svg className="hover:text-gray-600 dark:hover:text-gray-300" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
</svg>
</div>
</div>
</div>

<div className="border border-gray-100 dark:border-gray-800 rounded-xl p-3.5 bg-white dark:bg-[#111827] flex items-start gap-3 hover:border-gray-200 dark:hover:border-gray-700 transition-colors cursor-pointer shadow-sm">
<div className="w-2.5 h-2.5 rounded-full bg-pink-400 mt-1 shrink-0 shadow-[0_0_8px_rgba(244,114,182,0.4)]"></div>
<div className="flex-1">
<div className="text-sm font-medium text-gray-900 dark:text-white">
                          Emily Roberts
                        </div>
<div className="text-xs font-normal text-gray-500 dark:text-gray-400 mb-2 mt-0.5">
                          Lip Fillers
                        </div>
<div className="flex items-center gap-2 text-gray-400">
<svg className="hover:text-gray-600 dark:hover:text-gray-300" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
</svg>
<svg className="hover:text-gray-600 dark:hover:text-gray-300" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
</svg>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white dark:bg-[#111827] rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-gray-800/80 hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-orange-50 dark:bg-orange-500/10 flex items-center justify-center text-orange-500">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="3"></rect>
<path d="M9 9h6"></path>
<path d="M9 15h6"></path>
</svg>
</div>
<h3 className="text-base font-medium text-gray-900 dark:text-white tracking-tight">
                        Daily Tasks
                      </h3>
</div>
<button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="1"></circle>
<circle cx="19" cy="12" r="1"></circle>
<circle cx="5" cy="12" r="1"></circle>
</svg>
</button>
</div>
<div className="relative mb-6">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
</span>
<input className="w-full bg-transparent border border-gray-200 dark:border-gray-800 rounded-lg pl-9 pr-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-colors dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-600" placeholder="New task (Enter)" type="text"/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

<label className="flex items-start gap-3 p-3.5 rounded-xl border border-gray-100 dark:border-gray-800 cursor-pointer bg-gray-50/50 dark:bg-gray-800/30">
<div className="relative flex items-start pt-0.5">
<div className="w-4 h-4 rounded-[4px] border border-orange-500 bg-orange-500 flex items-center justify-center shrink-0">
<svg className="text-white" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M20 6 9 17l-5-5"></path>
</svg>
</div>
</div>
<div className="flex-1">
<div className="text-sm font-medium text-gray-400 dark:text-gray-500 line-through">
                          Call Sarah about Botox touch-up
                        </div>
<div className="text-xs font-normal text-gray-400 dark:text-gray-600 mt-1">
                          Due: Feb 23
                        </div>
</div>
</label>

<label className="flex items-start gap-3 p-3.5 rounded-xl border border-gray-100 dark:border-gray-800 cursor-pointer hover:border-gray-200 dark:hover:border-gray-700 transition-colors">
<div className="relative flex items-start pt-0.5">
<div className="w-4 h-4 rounded-[4px] border border-gray-300 dark:border-gray-600 bg-transparent flex items-center justify-center shrink-0 transition-colors"></div>
</div>
<div className="flex-1">
<div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Order more Allergan supplies
                        </div>
<div className="text-xs font-normal text-gray-500 dark:text-gray-400 mt-1">
                          Due: Feb 24
                        </div>
</div>
</label>

<label className="flex items-start gap-3 p-3.5 rounded-xl border border-gray-100 dark:border-gray-800 cursor-pointer hover:border-gray-200 dark:hover:border-gray-700 transition-colors">
<div className="relative flex items-start pt-0.5">
<div className="w-4 h-4 rounded-[4px] border border-gray-300 dark:border-gray-600 bg-transparent flex items-center justify-center shrink-0 transition-colors"></div>
</div>
<div className="flex-1">
<div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Review March Promo Reels
                        </div>
<div className="text-xs font-normal text-gray-500 dark:text-gray-400 mt-1">
                          Due: Feb 28
                        </div>
</div>
</label>
</div>
</div>
</div>
</div>

<div className="absolute bottom-6 right-6 z-20">
<button className="flex items-center gap-1.5 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-gray-200/50 dark:border-gray-700/50 shadow-sm text-xs font-medium text-red-500 hover:bg-white dark:hover:bg-gray-800 transition-colors ring-1 ring-black/5 dark:ring-white/5">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
<path d="M3 3v5h5"></path>
</svg>
                Reset System
              </button>
</div>
</div>
</div>
</section>

<section className="sm:px-6 overflow-hidden max-w-6xl mt-40 mr-auto ml-auto pr-4 pl-4 perspective-[2000px]">
<div className="flex flex-col items-center justify-center text-center [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate mb-12 gap-6">
<div className="max-w-2xl mx-auto">
<h2 className="text-4xl font-medium text-gray-900 tracking-tight">
              The Dual-Force Synergy
            </h2>
<p className="text-lg font-normal text-gray-700 mt-4">
              One does not work without the other. We build massive authority,
              then automate the heavy lifting. Try our FREE AMP Center to manage
              your business with no sign up required.
            </p>
</div>
<a className="group inline-flex items-center justify-center gap-2 transition-all shadow-teal-500/20 hover:shadow-teal-500/30 hover:-translate-y-0.5 text-sm font-medium text-white rounded-full pt-2.5 pr-6 pb-2.5 pl-6 shadow-lg relative overflow-hidden isolate" href="/amp-center">
<div className="absolute inset-[-200%] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#ffffff_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[spin_4s_linear_infinite] pointer-events-none"></div>
<div className="absolute inset-[1px] rounded-full bg-[#14a689] group-hover:bg-[#108c73] transition-colors duration-300 pointer-events-none z-0"></div>
<div className="absolute inset-[1px] rounded-full overflow-hidden pointer-events-none z-0">
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
</div>
<span className="relative z-10 flex items-center gap-2">
              The AMP Center
              <svg className="transition-transform duration-300 group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 lg:gap-16 gap-x-8 gap-y-8 items-start">

<div className="relative block w-full aspect-[4/3] sm:aspect-[4/3] scroll-flip-card opacity-0" style={{perspective: '2000px'}}>
<div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d]" id="card-1-spinner">

<div className="absolute inset-0 w-full h-full [backface-visibility:hidden] cursor-pointer group rounded-[2.5rem] overflow-hidden bg-white border border-gray-100 shadow-2xl shadow-gray-300/60 ring-1 ring-black/[0.03]" onclick="document.getElementById('card-1-spinner').classList.add('[transform:rotateY(180deg)]')">
<div className="absolute inset-0 bg-[#FAFAFA] transition-colors duration-500 group-hover:bg-gray-50">
<div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-white rounded-2xl border border-gray-100 shadow-xl opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 p-5 flex flex-col gap-4">
<div className="flex gap-3 items-center">
<div className="w-8 h-8 rounded-full bg-[#46d4c6]/10 border border-[#46d4c6]/20 flex items-center justify-center">
<svg className="text-[#46d4c6]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect>
<line x1="16" x2="16" y1="2" y2="6"></line>
<line x1="8" x2="8" y1="2" y2="6"></line>
<line x1="3" x2="21" y1="10" y2="10"></line>
</svg>
</div>
<div className="space-y-1.5 flex-1">
<div className="h-2 w-24 bg-gray-100 rounded-full"></div>
<div className="h-1.5 w-16 bg-gray-50 rounded-full"></div>
</div>
</div>
<div className="flex-1 bg-gray-50 rounded-xl border border-gray-100/50 flex flex-col justify-end p-3 gap-2">
<div className="w-3/4 h-6 bg-white rounded border border-gray-100 self-start shadow-sm"></div>
<div className="w-3/4 h-6 bg-[#46d4c6]/20 rounded border border-[#46d4c6]/30 self-end shadow-sm"></div>
<div className="w-1/2 h-6 bg-white rounded border border-gray-100 self-start shadow-sm"></div>
</div>
</div>
</div>
<div className="sm:p-10 flex flex-col bg-center z-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a7b7f11a-df7f-491d-a4a9-1bae637f5eca_1600w.jpg)] bg-cover pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-center z-20"></div></div></div></div></div></div></section></main>
    </>
  );
}
