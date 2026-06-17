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
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Theme Toggle Logic
        function toggleTheme() {
            document.documentElement.classList.toggle('dark');
        }

        // View Switching Logic
        function switchView(viewName) {
            const landing = document.getElementById('landing-view');
            const dashboard = document.getElementById('dashboard-view');
            
            window.scrollTo({ top: 0, behavior: 'smooth' });

            if (viewName === 'dashboard') {
                landing.classList.remove('view-visible');
                landing.classList.add('view-hidden');
                
                dashboard.classList.remove('view-hidden');
                dashboard.classList.add('view-visible');
                
                if (!document.querySelector('.agent-btn.active')) {
                    loadAgent('n8n');
                }
            } else {
                dashboard.classList.remove('view-visible');
                dashboard.classList.add('view-hidden');
                
                landing.classList.remove('view-hidden');
                landing.classList.add('view-visible');
            }
        }

        // Custom Dropdown Logic
        function toggleDropdown() {
            const dropdown = document.getElementById('vector-dropdown');
            dropdown.classList.toggle('hidden');
        }

        function selectVector(value) {
            document.getElementById('selected-vector').innerText = value;
            document.getElementById('vector-dropdown').classList.add('hidden');
        }

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            const container = document.getElementById('project-vector-container');
            const dropdown = document.getElementById('vector-dropdown');
            if (container && !container.contains(e.target)) {
                dropdown.classList.add('hidden');
            }
        });

        // Data Store for Agents
        const agents = {
            n8n: {
                title: "Enterprise Orchestrator",
                tagline: "Automated Lead Qualification System",
                description: "A self-healing N8N workflow that ingests leads from Typeform, enriches them via Clearbit, scores them using GPT-4o, and routes high-value targets to a private Slack channel.",
                stack: ["n8n", "PostgreSQL", "OpenAI API", "Slack Webhooks"],
                visual: "lucide:git-merge",
                color: "text-pink-600 dark:text-pink-500",
                bg: "bg-pink-50 dark:bg-pink-500/10",
                border: "border-pink-200 dark:border-pink-500/20",
                stats: [
                    { label: "Throughput", value: "5k req/day" },
                    { label: "Avg Latency", value: "1.2s" },
                    { label: "Cost Saved", value: "$4k/mo" }
                ]
            },
            rag: {
                title: "Legal Context Engine",
                tagline: "Semantic Search for Case Law",
                description: "A secure RAG pipeline designed for law firms. Ingests PDFs, chunks them semantically, and stores embeddings in Pinecone. The retrieval system cites specific page numbers.",
                stack: ["Python FastAPI", "LangChain", "Pinecone", "React"],
                visual: "lucide:database-zap",
                color: "text-blue-600 dark:text-blue-500",
                bg: "bg-blue-50 dark:bg-blue-500/10",
                border: "border-blue-200 dark:border-blue-500/20",
                stats: [
                    { label: "Vector Count", value: "2.5M" },
                    { label: "Accuracy", value: "98.5%" },
                    { label: "Privacy", value: "SOC2" }
                ]
            },
            support: {
                title: "Omni-Channel Support",
                tagline: "24/7 Customer Resolution Agent",
                description: "Deployed on Vercel Edge functions. This agent handles Level 1 support tickets, initiates refunds via Stripe API, and escalates complex issues to human agents with a summary.",
                stack: ["Next.js", "Vercel AI SDK", "Stripe API", "Zendesk"],
                visual: "lucide:bot",
                color: "text-orange-600 dark:text-orange-500",
                bg: "bg-orange-50 dark:bg-orange-500/10",
                border: "border-orange-200 dark:border-orange-500/20",
                stats: [
                    { label: "Resolution", value: "70%" },
                    { label: "Resp Time", value: "< 200ms" },
                    { label: "Uptime", value: "99.99%" }
                ]
            },
            scraper: {
                title: "Market Intelligence",
                tagline: "Autonomous Competitor Analysis",
                description: "Headless browser fleet that monitors competitor pricing changes daily. Data is normalized and visualized in a custom dashboard with alert triggers for price drops.",
                stack: ["Puppeteer", "Docker", "Redis", "Tremor UI"],
                visual: "lucide:radar",
                color: "text-emerald-600 dark:text-emerald-500",
                bg: "bg-emerald-50 dark:bg-emerald-500/10",
                border: "border-emerald-200 dark:border-emerald-500/20",
                stats: [
                    { label: "Sites Monitored", value: "45+" },
                    { label: "Data Points", value: "12k/day" },
                    { label: "Proxies", value: "Rotational" }
                ]
            }
        };

        function loadAgent(id) {
            document.querySelectorAll('.agent-btn').forEach(btn => {
                btn.classList.remove('bg-zinc-100', 'dark:bg-emerald-500/5', 'border-zinc-300', 'dark:border-emerald-500/20');
                btn.classList.add('bg-white/80', 'dark:bg-white/[0.02]', 'border-zinc-200', 'dark:border-white/[0.08]');
            });
            const activeBtn = document.getElementById(`btn-${id}`);
            if(activeBtn) {
                activeBtn.classList.remove('bg-white/80', 'dark:bg-white/[0.02]', 'border-zinc-200', 'dark:border-white/[0.08]');
                // Assuming Emerald styling for active state across all agents for consistency
                activeBtn.classList.add('bg-zinc-100', 'dark:bg-emerald-500/5', 'border-zinc-300', 'dark:border-emerald-500/20');
            }

            const agent = agents[id];
            const display = document.getElementById('agent-display');

            display.style.opacity = '0';
            
            setTimeout(() => {
                display.innerHTML = `
                    <div class="flex-1 flex flex-col justify-between">
                        <div>
                            <div class="flex items-start justify-between mb-8">
                                <div class="p-3.5 rounded-xl ${agent.bg} border ${agent.border} ${agent.color}">
                                    <span class="iconify" data-icon="${agent.visual}" data-width="32" data-stroke-width="1.5"></span>
                                </div>
                                <div class="flex gap-2">
                                    <span class="px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-white/5 text-xs text-zinc-500 dark:text-zinc-400 font-mono border border-zinc-200 dark:border-white/10 font-medium">V 1.4.0</span>
                                    <span class="px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-500/10 text-xs text-emerald-700 dark:text-emerald-400 font-mono border border-emerald-200 dark:border-emerald-500/20 uppercase font-medium">Active</span>
                                </div>
                            </div>
                            
                            <h2 class="text-3xl font-medium text-zinc-900 dark:text-white mb-2 tracking-tight">${agent.title}</h2>
                            <p class="text-emerald-600 dark:text-emerald-400 font-mono text-sm mb-6 uppercase tracking-widest font-medium">// ${agent.tagline}</p>
                            
                            <p class="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed mb-10 border-l-2 border-zinc-200 dark:border-white/10 pl-5 font-light">
                                ${agent.description}
                            </p>

                            <div class="mb-10">
                                <h4 class="text-xs font-mono text-zinc-500 dark:text-zinc-500 uppercase mb-4 font-medium tracking-widest">Tech Stack Architecture</h4>
                                <div class="flex flex-wrap gap-2.5">
                                    ${agent.stack.map(tech => `
                                        <span class="px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm font-medium flex items-center gap-2">
                                            <span class="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600"></span>
                                            ${tech}
                                        </span>
                                    `).join('')}
                                </div>
                            </div>
                        </div>

                        <div class="grid grid-cols-3 gap-6 border-t border-zinc-200 dark:border-white/10 pt-8">
                            ${agent.stats.map(stat => `
                                <div>
                                    <div class="text-xs text-zinc-500 dark:text-zinc-500 font-mono uppercase mb-1.5 font-medium tracking-widest">${stat.label}</div>
                                    <div class="text-xl text-zinc-900 dark:text-white font-medium">${stat.value}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
                display.style.opacity = '1';
                display.style.transition = 'opacity 0.3s ease-in-out';
            }, 150);
        }

        function toggleModal(modalId) {
            const modal = document.getElementById(modalId);
            const dropdown = document.getElementById('vector-dropdown');
            if (modal.classList.contains('open')) {
                modal.classList.remove('open');
                document.body.style.overflow = 'auto';
                if(dropdown) dropdown.classList.add('hidden'); // Ensure dropdown closes with modal
            } else {
                modal.classList.add('open');
                document.body.style.overflow = 'hidden';
            }
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
      

<div className="view-section view-visible min-h-screen flex flex-col" id="landing-view">
<div className="grid-pattern"></div>
<div className="spotlight"></div>

<nav className="w-full z-50 h-20 flex items-center justify-between px-6 max-w-7xl mx-auto">
<div className="flex items-center gap-3">
<div className="w-7 h-7 rounded-md bg-gradient-to-br from-zinc-200 to-zinc-400 dark:from-white dark:to-zinc-400 flex items-center justify-center text-black font-mono font-medium text-sm shadow-sm dark:shadow-lg dark:shadow-white/10">
                    I
                </div>
<span className="font-medium tracking-tight text-zinc-900 dark:text-white/90 text-base">IRONCLAD</span>
</div>
<div className="flex items-center gap-4">
<button className="p-2 rounded-full text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200/50 dark:hover:bg-white/5 transition-colors" onclick="toggleTheme()">
<svg className="hidden dark:block" fill="none" height="18" id="theme-icon-light" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
<svg className="block dark:hidden" fill="none" height="18" id="theme-icon-dark" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
</button>
<button className="bg-zinc-900 text-white dark:bg-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-100 shadow-md dark:shadow-[0_0_20px_rgba(255,255,255,0.1)] px-5 py-2.5 rounded-full font-normal text-sm tracking-tight flex items-center gap-2 transition-all hover:-translate-y-[1px]" onclick="toggleModal('contact-modal')">
<span>Hire Me</span>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-up-right" data-strokeWidth="1.5" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</button>
</div>
</nav>

<main className="flex-grow flex flex-col sm:px-6 z-10 pt-8 pr-4 pb-20 pl-4 relative justify-center">
<div className="max-w-6xl mx-auto w-full">

<div className="text-center mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-500/5 border border-emerald-200 dark:border-emerald-500/10 text-emerald-700 dark:text-emerald-400/90 text-xs font-normal uppercase tracking-widest mb-8 backdrop-blur-sm">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
</span>
                        Available for Projects
                    </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight text-zinc-900 dark:text-white mb-6 leading-[0.95]">
                        Full-Stack AI Architect.<br/>
<span className="text-zinc-400 dark:text-zinc-600">Security Baked In.</span>
</h1>
<p className="leading-relaxed text-xl font-light text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-10">Hello. My name is Edewede. I don't just write prompts. I build production-grade <span className="text-zinc-900 dark:text-zinc-200 font-normal">SaaS platforms</span>, <span className="text-zinc-900 dark:text-zinc-200 font-normal">autonomous agents</span>, and <span className="text-zinc-900 dark:text-zinc-200 font-normal">secure infrastructure</span>. From design to deployment.</p>

<div className="flex flex-wrap justify-center gap-2.5 max-w-3xl mx-auto">
<span className="text-sm px-4 py-1.5 rounded-full bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-400 display-inline-flex items-center gap-2 transition-all hover:bg-zinc-50 hover:border-zinc-300 dark:hover:bg-white/10 dark:hover:text-white dark:hover:border-white/20 shadow-sm cursor-default font-light flex"><svg className="text-zinc-400" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg> React &amp; Next.js</span>
<span className="text-sm px-4 py-1.5 rounded-full bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-400 display-inline-flex items-center gap-2 transition-all hover:bg-zinc-50 hover:border-zinc-300 dark:hover:bg-white/10 dark:hover:text-white dark:hover:border-white/20 shadow-sm cursor-default font-light flex"><svg className="text-zinc-400" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg> Vector DBs</span>
<span className="text-sm px-4 py-1.5 rounded-full bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-400 display-inline-flex items-center gap-2 transition-all hover:bg-zinc-50 hover:border-zinc-300 dark:hover:bg-white/10 dark:hover:text-white dark:hover:border-white/20 shadow-sm cursor-default font-light flex"><svg className="text-zinc-400" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M8 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M8 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg> LLM Fine-tuning</span>
<span className="text-sm px-4 py-1.5 rounded-full bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-400 display-inline-flex items-center gap-2 transition-all hover:bg-zinc-50 hover:border-zinc-300 dark:hover:bg-white/10 dark:hover:text-white dark:hover:border-white/20 shadow-sm cursor-default font-light flex"><svg className="text-zinc-400" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg> Penetration Testing</span>
<span className="text-sm px-4 py-1.5 rounded-full bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-400 display-inline-flex items-center gap-2 transition-all hover:bg-zinc-50 hover:border-zinc-300 dark:hover:bg-white/10 dark:hover:text-white dark:hover:border-white/20 shadow-sm cursor-default font-light flex"><svg className="text-zinc-400" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z"></path><path d="M10 21.9V14L2.1 9.1"></path><path d="M10 14l11.9-6.9"></path><path d="M14 19.8v-8.1"></path><path d="M18 17.5V9.4"></path></svg> Docker/K8s</span>
<span className="text-sm px-4 py-1.5 rounded-full bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-400 display-inline-flex items-center gap-2 transition-all hover:bg-zinc-50 hover:border-zinc-300 dark:hover:bg-white/10 dark:hover:text-white dark:hover:border-white/20 shadow-sm cursor-default font-light flex"><svg className="text-zinc-400" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path></svg> UI/UX Design</span>
<span className="text-sm px-4 py-1.5 rounded-full bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-400 display-inline-flex items-center gap-2 transition-all hover:bg-zinc-50 hover:border-zinc-300 dark:hover:bg-white/10 dark:hover:text-white dark:hover:border-white/20 shadow-sm cursor-default font-light flex"><svg className="text-zinc-400" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg> Python FastAPI</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:h-[420px]">

<div className="md:col-span-1 bg-white/80 dark:bg-zinc-900/30 backdrop-blur-xl border border-zinc-200/50 dark:border-white/5 shadow-sm dark:shadow-none hover:shadow-md dark:hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] rounded-2xl p-6 flex flex-col justify-between group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:bg-white dark:hover:bg-zinc-900/50 dark:hover:border-white/10">
<div className="absolute -right-6 -top-6 w-32 h-32 bg-purple-100 dark:bg-purple-500/10 blur-3xl rounded-full group-hover:bg-purple-200 dark:group-hover:bg-purple-500/15 transition-all duration-500"></div>
<div className="">
<div className="w-12 h-12 rounded-xl bg-zinc-50 dark:bg-[#1a1a1c] border border-zinc-200 dark:border-white/5 flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400 shadow-inner">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="18" x="3" y="3"></rect><rect height="7" rx="1" width="9" x="3" y="14"></rect><rect height="7" rx="1" width="5" x="16" y="14"></rect></svg>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 dark:text-white mb-2">Frontend &amp; Design</h3>
<p className="text-zinc-600 dark:text-zinc-400 text-sm font-light leading-relaxed">
                                Pixel-perfect interfaces. I design and code complex React dashboards that feel like native apps.
                            </p>
</div>
<div className="mt-6 flex gap-2 opacity-50">
<span className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600"></span>
<span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
<span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
</div>
</div>

<div className="md:col-span-2 flex flex-col gap-5">

<div className="flex-1 bg-white/80 dark:bg-zinc-900/30 backdrop-blur-xl border border-zinc-200/50 dark:border-white/5 shadow-sm dark:shadow-none hover:shadow-md dark:hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] rounded-2xl p-6 flex items-center justify-between group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:bg-white dark:hover:bg-zinc-900/50 dark:hover:border-white/10">
<div className="absolute right-0 top-0 w-2/3 h-full bg-gradient-to-l from-emerald-50 dark:from-emerald-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 max-w-[60%]">
<div className="flex items-center gap-3 mb-3">
<svg className="text-emerald-600 dark:text-emerald-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
<h3 className="text-xl font-medium tracking-tight text-zinc-900 dark:text-white">AI Engineering</h3>
</div>
<p className="text-zinc-600 dark:text-zinc-400 text-sm font-light leading-relaxed">
                                    Custom RAG pipelines, LangChain orchestration, and local LLM deployment on private clouds.
                                </p>
</div>
<div className="hidden md:flex items-center justify-center pr-4 opacity-[0.03] dark:opacity-10 group-hover:opacity-[0.05] dark:group-hover:opacity-20 transition-opacity duration-500">
<svg className="text-emerald-600 dark:text-emerald-400" fill="none" height="80" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="80" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" ry="2" width="16" x="4" y="4"></rect><rect height="6" width="6" x="9" y="9"></rect><line x1="9" x2="9" y1="1" y2="4"></line><line x1="15" x2="15" y1="1" y2="4"></line><line x1="9" x2="9" y1="20" y2="23"></line><line x1="15" x2="15" y1="20" y2="23"></line><line x1="20" x2="23" y1="9" y2="9"></line><line x1="20" x2="23" y1="14" y2="14"></line><line x1="1" x2="4" y1="9" y2="9"></line><line x1="1" x2="4" y1="14" y2="14"></line></svg>
</div>
</div>

<div className="flex-1 bg-white/80 dark:bg-zinc-900/30 backdrop-blur-xl border border-zinc-200/50 dark:border-white/5 shadow-sm dark:shadow-none hover:shadow-md dark:hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] rounded-2xl p-6 flex items-center justify-between group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:bg-white dark:hover:bg-zinc-900/50 dark:hover:border-white/10">
<div className="absolute right-0 top-0 w-2/3 h-full bg-gradient-to-l from-blue-50 dark:from-blue-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 max-w-[60%]">
<div className="flex items-center gap-3 mb-3">
<svg className="text-blue-600 dark:text-blue-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5"></path><path d="M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5"></path><path d="M6 6h.01"></path><path d="M6 18h.01"></path><path d="m15.7 13.4-.9-.3"></path><path d="m9.2 10.9-.9-.3"></path><path d="m10.6 15.7.3-.9"></path><path d="m13.6 15.7-.4-1"></path><path d="m10.8 9.3-.4-1"></path><path d="m8.3 13.6 1-.4"></path><path d="m14.7 10.8 1-.4"></path><path d="m13.4 8.3-.3.9"></path><path d="M12 12v.01"></path></svg>
<h3 className="text-xl font-medium tracking-tight text-zinc-900 dark:text-white">Backend Systems</h3>
</div>
<p className="text-zinc-600 dark:text-zinc-400 text-sm font-light leading-relaxed">
                                    Scalable APIs, PostgreSQL optimization, Redis caching layers, and serverless architecture.
                                </p>
</div>
<div className="hidden md:flex items-center justify-center pr-4 opacity-[0.03] dark:opacity-10 group-hover:opacity-[0.05] dark:group-hover:opacity-20 transition-opacity duration-500">
<svg className="text-blue-600 dark:text-blue-400" fill="none" height="80" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="80" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
</div>
</div>
</div>

<div className="md:col-span-1 bg-white/80 dark:bg-zinc-900/30 backdrop-blur-xl border border-zinc-200/50 dark:border-white/5 shadow-sm dark:shadow-none hover:shadow-md dark:hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] rounded-2xl p-6 flex flex-col justify-between group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:bg-white dark:hover:bg-zinc-900/50 dark:hover:border-white/10">
<div className="absolute -right-6 -bottom-6 w-40 h-40 bg-orange-100 dark:bg-orange-500/5 blur-3xl rounded-full group-hover:bg-orange-200 dark:group-hover:bg-orange-500/10 transition-all duration-500"></div>
<div className="">
<div className="w-12 h-12 rounded-xl bg-zinc-50 dark:bg-[#1a1a1c] border border-zinc-200 dark:border-white/5 flex items-center justify-center mb-6 text-orange-600 dark:text-orange-400 shadow-inner">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 dark:text-white mb-2">Security First</h3>
<p className="text-zinc-600 dark:text-zinc-400 text-sm font-light leading-relaxed">
                                SOC2-ready code. Data sanitization layers, PII protection, and secure API gateways.
                            </p>
</div>
<div className="mt-6">
<div className="flex items-center gap-2 text-xs text-orange-700 dark:text-orange-400/80 bg-orange-50 dark:bg-orange-500/5 border border-orange-200 dark:border-orange-500/10 px-2.5 py-1.5 rounded-md w-fit uppercase tracking-widest font-medium">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span>Audit Ready</span>
</div>
</div>
</div>
</div>

<div className="mt-20 text-center relative z-20">
<p className="text-zinc-500 dark:text-zinc-600 mb-6 text-xs font-medium tracking-widest uppercase">Trusted to build mission-critical infrastructure</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-zinc-900 text-white dark:bg-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-100 shadow-md dark:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all hover:-translate-y-[1px] flex gap-2 text-sm font-medium rounded-xl py-3.5 px-8 items-center justify-center" onclick="toggleModal('contact-modal')">
                            Start Your Project
                            <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-normal text-zinc-600 dark:text-zinc-300 text-sm bg-white/80 dark:bg-zinc-900/30 backdrop-blur-xl border border-zinc-200 dark:border-white/5 hover:bg-white dark:hover:bg-white/5 hover:border-zinc-300 dark:hover:border-white/10 transition-all flex items-center justify-center gap-2 group" onclick="switchView('dashboard')">
                            View Live Dashboard
                            <svg className="text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
</button>
</div>
</div>
</div>

<footer className="mt-24 text-center border-t border-zinc-200 dark:border-white/5 pt-8">
<p className="text-xs text-zinc-500 dark:text-zinc-600 font-mono tracking-wider">
                    IRONCLAD.AI SYSTEM // SECURE CONNECTION // <span className="text-emerald-600 dark:text-emerald-500">ONLINE</span>
</p>
</footer>
</main>
</div>

<div className="view-section view-hidden min-h-screen flex flex-col bg-zinc-50 dark:bg-[#09090b] transition-colors duration-300" id="dashboard-view">
<div className="grid-bg"></div>

<nav className="w-full z-40 border-b border-zinc-200 dark:border-white/5 bg-white/80 dark:bg-black/50 backdrop-blur-md sticky top-0 transition-colors duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3 cursor-pointer group" onclick="switchView('landing')">
<div className="w-8 h-8 rounded bg-zinc-900 dark:bg-white flex items-center justify-center text-white dark:text-black font-medium text-sm tracking-tight group-hover:bg-zinc-700 dark:group-hover:bg-zinc-200 transition-colors shadow-sm">
                        IC
                    </div>
<span className="font-medium text-base tracking-tight text-zinc-900 dark:text-white group-hover:text-zinc-600 dark:group-hover:text-zinc-200 transition-colors">IRONCLAD <span className="text-zinc-400 dark:text-zinc-500 font-normal ml-2 text-sm">v2.0</span></span>
</div>
<div className="flex items-center gap-4">
<button className="p-2 rounded-full text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200/50 dark:hover:bg-white/5 transition-colors hidden sm:block" onclick="toggleTheme()">
<svg className="hidden dark:block" fill="none" height="16" id="dash-theme-icon-light" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
<svg className="block dark:hidden" fill="none" height="16" id="dash-theme-icon-dark" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
</button>
<button className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white text-sm font-medium mr-2 hidden sm:block transition-colors" onclick="switchView('landing')">
                        EXIT PREVIEW
                    </button>
<button className="bg-zinc-900 text-white dark:bg-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 px-4 py-2 rounded-lg text-sm font-medium tracking-tight transition-colors flex items-center gap-2 shadow-sm" onclick="toggleModal('contact-modal')">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m7 11 2-2-2-2"></path><path d="M11 15h4"></path><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect></svg>
                        Init Project
                    </button>
</div>
</div>
</nav>
<main className="flex-grow flex flex-col px-4 sm:px-6 pt-12 pb-20 max-w-7xl mx-auto w-full gap-16">

<header className="max-w-3xl">
<div className="flex items-center gap-2 mb-6">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-emerald-600 dark:text-emerald-500 font-mono text-xs tracking-widest uppercase">System Online</span>
</div>
<h1 className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-900 dark:text-white mb-6">
                    Constructing intelligence.<br/>
<span className="text-zinc-400 dark:text-zinc-500 font-normal">Not just wrapping APIs.</span>
</h1>
<p className="text-zinc-600 dark:text-zinc-400 text-xl font-light max-w-2xl leading-relaxed">
                    I deploy autonomous agents and secure infrastructure. From "vibe coding" prototypes to production-grade N8N workflows and Kubernetes clusters.
                </p>
</header>

<section>
<div className="flex items-center justify-between mb-6">
<h2 className="text-xs font-mono text-zinc-500 dark:text-zinc-500 uppercase tracking-widest font-medium">Active Agent Protocols</h2>
<div className="text-sm text-zinc-500 flex gap-2 items-center font-medium">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                        Live Preview
                    </div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[600px] lg:h-[520px]">

<div className="lg:col-span-4 flex flex-col gap-3 h-full overflow-y-auto custom-scroll pr-2">

<button className="agent-btn w-full text-left p-4 rounded-xl flex items-center gap-4 bg-white/80 dark:bg-white/[0.02] border border-zinc-200 dark:border-white/[0.08] hover:bg-zinc-50 dark:hover:bg-white/[0.06] transition-all shadow-sm dark:shadow-none" id="btn-n8n" onclick="loadAgent('n8n')">
<div className="w-12 h-12 rounded-lg bg-pink-50 dark:bg-pink-500/10 text-pink-600 dark:text-pink-500 flex items-center justify-center border border-pink-100 dark:border-pink-500/20 shrink-0">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
</div>
<div className="flex-grow">
<h3 className="text-zinc-900 dark:text-white font-medium text-base">Enterprise Orchestrator</h3>
<p className="text-zinc-500 text-sm mt-0.5 font-light">N8N • Webhooks • Slack</p>
</div>
<svg className="text-zinc-400 shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>

<button className="agent-btn w-full text-left p-4 rounded-xl flex items-center gap-4 bg-white/80 dark:bg-white/[0.02] border border-zinc-200 dark:border-white/[0.08] hover:bg-zinc-50 dark:hover:bg-white/[0.06] transition-all shadow-sm dark:shadow-none" id="btn-rag" onclick="loadAgent('rag')">
<div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-500 flex items-center justify-center border border-blue-100 dark:border-blue-500/20 shrink-0">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M8 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M8 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>
</div>
<div className="flex-grow">
<h3 className="text-zinc-900 dark:text-white font-medium text-base">Legal Context Engine</h3>
<p className="text-zinc-500 text-sm mt-0.5 font-light">Pinecone • LangChain • Python</p>
</div>
<svg className="text-zinc-400 shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>

<button className="agent-btn w-full text-left p-4 rounded-xl flex items-center gap-4 bg-white/80 dark:bg-white/[0.02] border border-zinc-200 dark:border-white/[0.08] hover:bg-zinc-50 dark:hover:bg-white/[0.06] transition-all shadow-sm dark:shadow-none" id="btn-support" onclick="loadAgent('support')">
<div className="w-12 h-12 rounded-lg bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-500 flex items-center justify-center border border-orange-100 dark:border-orange-500/20 shrink-0">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 3h2"></path><path d="M14 19h-2"></path><path d="M2 12V10"></path><path d="M2 18v-2.7a.7.7 0 0 1 1.2-.5l1.1-1.1"></path><path d="M20 19a2 2 0 0 0 2-2v-1"></path><path d="M22 10V8"></path><path d="M22 4V3a2 2 0 0 0-2-2"></path><path d="M4 3a2 2 0 0 0-2 2v1"></path><path d="M10 19h2"></path><path d="M8 3h2"></path></svg>
</div>
<div className="flex-grow">
<h3 className="text-zinc-900 dark:text-white font-medium text-base">Omni-Channel Support</h3>
<p className="text-zinc-500 text-sm mt-0.5 font-light">Vercel AI SDK • OpenAI</p>
</div>
<svg className="text-zinc-400 shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>

<button className="agent-btn w-full text-left p-4 rounded-xl flex items-center gap-4 bg-white/80 dark:bg-white/[0.02] border border-zinc-200 dark:border-white/[0.08] hover:bg-zinc-50 dark:hover:bg-white/[0.06] transition-all shadow-sm dark:shadow-none" id="btn-scraper" onclick="loadAgent('scraper')">
<div className="w-12 h-12 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-500 flex items-center justify-center border border-emerald-100 dark:border-emerald-500/20 shrink-0">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<div className="flex-grow">
<h3 className="text-zinc-900 dark:text-white font-medium text-base">Market Intelligence</h3>
<p className="text-zinc-500 text-sm mt-0.5 font-light">Puppeteer • Browserless</p>
</div>
<svg className="text-zinc-400 shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>

<div className="lg:col-span-8 bg-white dark:bg-white/[0.02] backdrop-blur-xl border border-zinc-200 dark:border-white/[0.08] rounded-2xl p-8 relative overflow-hidden flex flex-col shadow-sm dark:shadow-none">

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-200/50 dark:via-emerald-500/5 to-transparent pointer-events-none opacity-20" style={{backgroundSize: '100% 3px'}}></div>
<div className="relative z-10 h-full flex flex-col" id="agent-display">

</div>
</div>
</div>
</section>

<section>
<div className="flex items-center gap-2 mb-6 border-t border-zinc-200 dark:border-white/10 pt-10">
<svg className="text-purple-600 dark:text-purple-400" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="M5 3v4"></path><path d="M19 17v4"></path><path d="M3 5h4"></path><path d="M17 19h4"></path></svg>
<h2 className="text-xs font-mono text-zinc-500 uppercase tracking-widest font-medium">Vibe Coding / Rapid Prototyping</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-5">

<a className="group bg-white/80 dark:bg-white/[0.02] border border-zinc-200 dark:border-white/[0.08] rounded-xl p-6 hover:bg-white dark:hover:bg-white/[0.05] hover:shadow-md dark:hover:shadow-none transition-all cursor-pointer relative overflow-hidden" href="#">
<div className="absolute right-0 top-0 p-5 opacity-0 group-hover:opacity-100 transition-opacity translate-y-1 group-hover:translate-y-0 duration-200">
<svg className="text-zinc-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-lg bg-zinc-900 dark:bg-[#2D2D2D] flex items-center justify-center text-white font-medium shadow-sm">L</div>
<span className="font-medium text-zinc-900 dark:text-white text-base">Lovable.dev</span>
</div>
<p className="text-sm text-zinc-600 dark:text-zinc-500 leading-relaxed font-light">
                            Full-stack React apps generated from natural language prompts. Used for rapid dashboard iteration.
                        </p>
</a>

<a className="group bg-white/80 dark:bg-white/[0.02] border border-zinc-200 dark:border-white/[0.08] rounded-xl p-6 hover:bg-white dark:hover:bg-white/[0.05] hover:shadow-md dark:hover:shadow-none transition-all cursor-pointer relative overflow-hidden" href="#">
<div className="absolute right-0 top-0 p-5 opacity-0 group-hover:opacity-100 transition-opacity translate-y-1 group-hover:translate-y-0 duration-200">
<svg className="text-zinc-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-lg bg-zinc-900 dark:bg-black border border-zinc-800 dark:border-white/20 flex items-center justify-center text-white font-medium shadow-sm">v0</div>
<span className="font-medium text-zinc-900 dark:text-white text-base">Vercel v0</span>
</div>
<p className="text-sm text-zinc-600 dark:text-zinc-500 leading-relaxed font-light">
                            Generative UI system. Instant component creation compatible with Shadcn/UI and Tailwind.
                        </p>
</a>

<a className="group bg-white/80 dark:bg-white/[0.02] border border-zinc-200 dark:border-white/[0.08] rounded-xl p-6 hover:bg-white dark:hover:bg-white/[0.05] hover:shadow-md dark:hover:shadow-none transition-all cursor-pointer relative overflow-hidden" href="#">
<div className="absolute right-0 top-0 p-5 opacity-0 group-hover:opacity-100 transition-opacity translate-y-1 group-hover:translate-y-0 duration-200">
<svg className="text-zinc-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-sm">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
</div>
<span className="font-medium text-zinc-900 dark:text-white text-base">Bolt.new (Aura)</span>
</div>
<p className="text-sm text-zinc-600 dark:text-zinc-500 leading-relaxed font-light">
                            Browser-based full-stack development environment. Seamless deployment of prototypes to Netlify.
                        </p>
</a>
</div>
</section>
</main>

<footer className="border-t border-zinc-200 dark:border-white/5 bg-white/50 dark:bg-black/20 backdrop-blur-sm py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<span className="font-medium tracking-tight text-zinc-900 dark:text-white block mb-1">IRONCLAD</span>
<span className="text-zinc-500 dark:text-zinc-600 text-sm font-light">San Francisco, CA • Remote First</span>
</div>
<div className="flex items-center gap-6">
<a className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm font-medium" href="#">GitHub</a>
<a className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm font-medium" href="#">Twitter / X</a>
<a className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm font-medium" href="#">LinkedIn</a>
</div>
</div>
</footer>
</div>

<div className="modal fixed inset-0 z-[60] flex items-center justify-center px-4" id="contact-modal">

<div className="absolute inset-0 bg-zinc-900/40 dark:bg-black/80 backdrop-blur-sm" onclick="toggleModal('contact-modal')"></div>

<div className="modal-content relative bg-white dark:bg-[#111] border border-zinc-200 dark:border-white/10 w-full max-w-lg rounded-2xl p-8 shadow-2xl">
<button className="absolute top-5 right-5 text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors" onclick="toggleModal('contact-modal')">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
<div className="mb-8">
<h3 className="text-2xl font-medium tracking-tight text-zinc-900 dark:text-white mb-2">Initialize Collaboration</h3>
<p className="text-zinc-600 dark:text-zinc-400 text-sm font-light leading-relaxed">Define your project parameters. I will review the architecture and respond within 24 hours.</p>
</div>
<form className="space-y-5" onsubmit="event.preventDefault(); toggleModal('contact-modal');">
<div className="space-y-2">
<label className="text-xs font-mono text-zinc-500 dark:text-zinc-500 uppercase font-medium tracking-widest">Identity</label>
<input className="w-full bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-zinc-400 dark:focus:border-white/30 focus:ring-1 focus:ring-zinc-400 dark:focus:ring-white/30 text-sm transition-all" placeholder="you@company.com" type="email"/>
</div>
<div className="space-y-2 relative" id="project-vector-container">
<label className="text-xs font-mono text-zinc-500 dark:text-zinc-500 uppercase font-medium tracking-widest">Project Vector</label>

<button className="w-full bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-zinc-900 dark:text-white focus:outline-none focus:border-zinc-400 dark:focus:border-white/30 focus:ring-1 focus:ring-zinc-400 dark:focus:ring-white/30 text-sm transition-all flex items-center justify-between" onclick="toggleDropdown()" type="button">
<span id="selected-vector">Full-Stack AI SaaS</span>
<svg className="text-zinc-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>

<div className="hidden absolute top-[calc(100%+4px)] left-0 w-full bg-white dark:bg-[#1a1a1a] border border-zinc-200 dark:border-white/10 rounded-xl shadow-lg z-50 overflow-hidden py-1" id="vector-dropdown">
<button className="w-full text-left px-4 py-2.5 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/10 transition-colors" onclick="selectVector('Full-Stack AI SaaS')" type="button">Full-Stack AI SaaS</button>
<button className="w-full text-left px-4 py-2.5 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/10 transition-colors" onclick="selectVector('Internal N8N Workflow')" type="button">Internal N8N Workflow</button>
<button className="w-full text-left px-4 py-2.5 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/10 transition-colors" onclick="selectVector('Security Audit')" type="button">Security Audit</button>
<button className="w-full text-left px-4 py-2.5 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/10 transition-colors" onclick="selectVector('RAG Implementation')" type="button">RAG Implementation</button>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-mono text-zinc-500 dark:text-zinc-500 uppercase font-medium tracking-widest">Briefing</label>
<textarea className="w-full bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-zinc-400 dark:focus:border-white/30 focus:ring-1 focus:ring-zinc-400 dark:focus:ring-white/30 text-sm transition-all resize-none" placeholder="Describe the mission parameters..." rows="3"></textarea>
</div>
<button className="w-full bg-zinc-900 text-white dark:bg-white dark:text-black font-medium rounded-xl py-3.5 mt-4 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all shadow-sm flex items-center justify-center gap-2 hover:-translate-y-[1px]" type="submit">
                    Transmit
                    <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
</button>
</form>
</div>
</div>


    </>
  );
}
