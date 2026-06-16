import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Lucide init
    if (window.lucide) {
      lucide.createIcons();
    }
    // Year
    document.getElementById('year-span').textContent = new Date().getFullYear();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="min-h-screen flex flex-col">

<header className="w-full border-b border-white/5 bg-black/40 backdrop-blur">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-xl bg-[#00C853]/10 flex items-center justify-center shadow-[0_0_25px_rgba(0,200,83,0.45)]">
<svg className="w-4 h-4 text-[#00C853]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<span className="text-[18px] tracking-tight font-semibold">Synta</span>
</div>

<nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
<a className="hover:text-white transition-colors" href="#how-it-works">How it works</a>
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#templates">Templates</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</nav>

<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex text-sm text-white/70 hover:text-white px-3 py-1.5 rounded-full border border-white/10 hover:border-white/25 transition-colors">
            Sign in
          </button>
<button className="inline-flex text-sm px-4 py-2 rounded-full bg-[#00C853] text-black font-medium hover:bg-[#00e060] shadow-[0_0_22px_rgba(0,200,83,0.45)] transition-colors">
            Get Started
          </button>
</div>
</div>
</header>

<main className="flex-1">

<section className="relative overflow-hidden border-b border-white/5">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-48 -left-24 w-80 h-80 rounded-full bg-[#00C853]/10 blur-3xl opacity-70"></div>
<div className="absolute -bottom-56 -right-10 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl opacity-70"></div>
</div>
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
<div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

<div>
<div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur text-xs text-white/70 mb-4">
<span className="inline-flex h-5 w-5 rounded-full bg-[#00C853]/10 items-center justify-center">
<svg className="w-[13px] h-[13px] text-[#00C853]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</span>
<span>New • AI workflow builder</span>
</div>
<h1 className="text-[32px] sm:text-[40px] lg:text-[46px] leading-tight tracking-tight font-semibold">
                Build powerful workflows<br className="hidden sm:block"/>
                with simple chat.
              </h1>
<p className="mt-4 text-sm sm:text-base text-white/70 max-w-xl">
                Describe what you want in natural language. Synta turns it into fully automated workflows — from tasks and steps to integrations and execution logic — in seconds.
              </p>
<div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center">
<button className="inline-flex justify-center items-center gap-2 px-5 py-2.5 rounded-full bg-[#00C853] text-black text-sm font-medium hover:bg-[#00e060] shadow-[0_0_22px_rgba(0,200,83,0.45)] transition-colors">
                  Get Started
                  <span className="inline-flex items-center justify-center text-black/70">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14" strokeLinecap="round"></path>
<path d="M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</span>
</button>
<button className="inline-flex justify-center items-center gap-2 px-4 py-2 rounded-full border border-white/12 bg-white/5 text-sm text-white/80 hover:bg-white/10 hover:border-white/25 transition-colors">
<span className="inline-flex items-center justify-center rounded-full bg-white/10 p-1.5">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M10 9l5 3-5 3V9z" strokeLinejoin="round"></path>
</svg>
</span>
                  Watch Demo
                </button>
</div>
<div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center text-xs text-white/50">
<div className="flex items-center gap-2">
<div className="flex -space-x-2">
<img alt="User 1" className="h-7 w-7 rounded-full border border-black/60 object-cover" src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&amp;fit=crop&amp;w=80&amp;q=80"/>
<img alt="User 2" className="h-7 w-7 rounded-full border border-black/60 object-cover" src="https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&amp;fit=crop&amp;w=80&amp;q=80"/>
<img alt="User 3" className="h-7 w-7 rounded-full border border-black/60 object-cover" src="https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&amp;fit=crop&amp;w=80&amp;q=80"/>
</div>
<span className="text-white/60">Teams ship workflows 3× faster with Synta.</span>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -top-6 -right-6 w-28 h-28 bg-[#00C853]/15 rounded-full blur-3xl opacity-70 pointer-events-none"></div>
<div className="absolute -bottom-10 -left-4 w-24 h-24 bg-white/5 rounded-full blur-2xl opacity-70 pointer-events-none"></div>
<div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-black/60 shadow-2xl shadow-black/70 overflow-hidden">

<div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10 bg-black/50 backdrop-blur">
<div className="flex items-center gap-2 text-xs text-white/50">
<span className="h-2 w-2 rounded-full bg-emerald-400"></span>
<span>chat.synta.app</span>
</div>
<div className="flex items-center gap-1 text-white/40">
<span className="h-1.5 w-1.5 rounded-full bg-white/20"></span>
<span className="h-1.5 w-1.5 rounded-full bg-white/20"></span>
<span className="h-1.5 w-1.5 rounded-full bg-white/40"></span>
</div>
</div>
<div className="grid md:grid-cols-5">

<div className="md:col-span-3 p-4 sm:p-5 space-y-3">

<div className="flex justify-end">
<div className="max-w-xs sm:max-w-sm bg-[#00C853]/15 border border-[#00C853]/40 rounded-2xl rounded-br-sm px-3 py-2.5 text-[13px]">
                        When a customer signs up, send a welcome email, add them to our CRM, and post a message in Slack.
                      </div>
</div>

<div className="flex items-start gap-2">
<div className="mt-1 h-6 w-6 rounded-full bg-[#00C853]/10 flex items-center justify-center text-[#00C853]">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div className="max-w-xs sm:max-w-sm bg-white/5 border border-white/10 rounded-2xl rounded-bl-sm px-3 py-2.5 text-[13px] text-white/80">
<p className="mb-1.5">Got it. I’ll create a 3-step workflow:</p>
<ol className="list-decimal list-inside space-y-0.5 text-white/70">
<li>Trigger: New customer signup</li>
<li>Action: Send welcome email via Gmail</li>
<li>Action: Create contact in HubSpot &amp; post in Slack</li>
</ol>
</div>
</div>

<div className="mt-4">
<div className="flex items-center gap-2 rounded-full border border-white/15 bg-black/60 px-3 py-1.5">
<input className="bg-transparent border-none focus:outline-none focus:ring-0 text-xs text-white placeholder:text-white/35 flex-1" placeholder="Describe your next workflow..." type="text"/>
<button className="inline-flex items-center justify-center rounded-full bg-[#00C853] hover:bg-[#00e060] text-black w-7 h-7 shadow-[0_0_15px_rgba(0,200,83,0.45)]">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14" strokeLinecap="round"></path>
<path d="M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</div>
<div className="mt-1 text-[10px] text-white/40">
                        Press Enter to generate an automation.
                      </div>
</div>
</div>

<div className="md:col-span-2 border-t md:border-t-0 md:border-l border-white/10 bg-black/40 p-4 sm:p-5 flex flex-col gap-3">
<div className="flex items-center justify-between text-[11px] text-white/60">
<span className="inline-flex items-center gap-1">
<svg className="w-3.5 h-3.5 text-[#00C853]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
</svg>
                        Flow preview
                      </span>
<span className="inline-flex items-center gap-1 text-[10px] text-emerald-300/80">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        Generated in 2.1s
                      </span>
</div>
<div className="space-y-3 mt-1">

<div className="relative">
<div className="absolute left-3 -bottom-3 h-3 w-px bg-white/15"></div>
<div className="flex items-center justify-between rounded-xl border border-white/12 bg-white/5 px-3 py-2">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-lg bg-[#00C853]/10 flex items-center justify-center text-[#00C853]">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14" strokeLinecap="round"></path>
<path d="M5 12h14" strokeLinecap="round"></path>
</svg>
</div>
<div>
<div className="text-[11px] font-medium text-white">New signup</div>
<div className="text-[10px] text-white/50">Trigger · Web form</div>
</div>
</div>
<span className="text-[10px] text-white/40 uppercase tracking-[0.08em]">TRIGGER</span>
</div>
</div>

<div className="relative">
<div className="absolute left-3 -bottom-3 h-3 w-px bg-white/15"></div>
<div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/60 px-3 py-2">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4h16v16H4z"></path>
<path d="M4 7l8 5 8-5"></path>
</svg>
</div>
<div>
<div className="text-[11px] font-medium text-white">Send welcome email</div>
<div className="text-[10px] text-white/50">Gmail · From support@</div>
</div>
</div>
<span className="text-[10px] text-white/40">Action</span>
</div>
</div>

<div className="relative">
<div className="absolute left-3 -bottom-3 h-3 w-px bg-white/15"></div>
<div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/60 px-3 py-2">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-400">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
</svg>
</div>
<div>
<div className="text-[11px] font-medium text-white">Create contact</div>
<div className="text-[10px] text-white/50">CRM · HubSpot</div>
</div>
</div>
<span className="text-[10px] text-white/40">Action</span>
</div>
</div>

<div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/60 px-3 py-2">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-lg bg-fuchsia-500/10 flex items-center justify-center text-fuchsia-400">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 3h2v10a2 2 0 1 1-2-2h2"></path>
<path d="M17 3h2v10a2 2 0 1 0-2-2h2"></path>
<path d="M3 7h10a2 2 0 1 1-2 2V7"></path>
<path d="M3 17h10a2 2 0 1 0-2-2v2"></path>
</svg>
</div>
<div>
<div className="text-[11px] font-medium text-white">Notify #new-customers</div>
<div className="text-[10px] text-white/50">Slack · Inbound channel</div>
</div>
</div>
<span className="text-[10px] text-white/40">Action</span>
</div>
</div>
<div className="mt-3 flex items-center justify-between text-[10px] text-white/45">
<span className="inline-flex items-center gap-1">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                        Ready to run
                      </span>
<button className="px-2.5 py-1 rounded-full border border-white/15 hover:border-white/30 text-[10px] hover:bg-white/10 transition-colors">
                        Test workflow
                      </button>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-4 left-6 translate-y-1/2">
<div className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-black/80 backdrop-blur px-3 py-2 text-[11px] shadow-lg shadow-black/60">
<div className="flex -space-x-1">
<span className="h-4 w-4 rounded-full bg-emerald-500/80"></span>
<span className="h-4 w-4 rounded-full bg-sky-500/80"></span>
<span className="h-4 w-4 rounded-full bg-fuchsia-500/80"></span>
</div>
<div className="text-white/70">
                    Workflows deployed
                    <span className="font-medium text-white ml-1">12,384</span>
</div>
</div>
</div>
</div>
</div>

<div className="mt-12 border-t border-white/5 pt-6">
<p className="text-[11px] text-white/40 uppercase tracking-[0.15em] mb-3">
              CONNECT YOUR STACK
            </p>
<div className="flex flex-wrap items-center gap-4 text-xs text-white/50">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-white/5 border border-white/10">
<span className="h-4 w-4 rounded-[6px] bg-white/90"></span>
<span>Notion</span>
</div>
<div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-white/5 border border-white/10">
<span className="h-4 w-4 rounded-full bg-sky-400/90"></span>
<span>Slack</span>
</div>
<div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-white/5 border border-white/10">
<span className="h-4 w-4 rounded-full bg-[#635bff]"></span>
<span>Stripe</span>
</div>
<div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-white/5 border border-white/10">
<span className="h-4 w-4 rounded-[4px] bg-red-500"></span>
<span>Gmail</span>
</div>
<div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-white/5 border border-white/10">
<span className="h-4 w-4 rounded-full bg-amber-400"></span>
<span>Zapier</span>
</div>
<span className="text-[11px] text-white/40">+ dozens more</span>
</div>
</div>
</div>
</section>

<section className="border-b border-white/5" id="how-it-works">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
<div>
<h2 className="text-[24px] md:text-[28px] tracking-tight font-semibold">How Synta works</h2>
<p className="mt-2 text-sm text-white/65 max-w-md">
                Go from idea to live automation in minutes. Just describe your workflow, watch Synta generate it, then refine and publish.
              </p>
</div>
<div className="text-xs text-white/45">
              Built on advanced AI models with human-friendly controls for every step.
            </div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="relative rounded-2xl border border-white/8 bg-white/[0.02] p-4 sm:p-5 hover:border-[#00C853]/40 hover:bg-white/[0.04] transition-colors">
<div className="absolute -top-3 left-4 px-2 py-0.5 rounded-full bg-black border border-white/10 text-[10px] text-white/60">
                STEP 1
              </div>
<div className="flex items-center justify-between mb-3">
<h3 className="text-[16px] tracking-tight font-medium">Describe your workflow in chat</h3>
<div className="h-7 w-7 rounded-lg bg-[#00C853]/15 flex items-center justify-center text-[#00C853]">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 8h10M7 12h6M5 20l2-3h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</div>
<p className="text-xs text-white/65 mb-3">
                Explain what should happen in your own words. No syntax, triggers, or APIs to learn — Synta understands context and intent.
              </p>
<div className="rounded-xl border border-dashed border-white/15 bg-black/60 px-3 py-2 text-[11px] text-white/60">
                “When an opportunity hits ‘Won’, invoice the customer, update their account, and notify the finance channel.”
              </div>
</div>

<div className="relative rounded-2xl border border-white/8 bg-white/[0.02] p-4 sm:p-5 hover:border-[#00C853]/40 hover:bg-white/[0.04] transition-colors">
<div className="absolute -top-3 left-4 px-2 py-0.5 rounded-full bg-black border border-white/10 text-[10px] text-white/60">
                STEP 2
              </div>
<div className="flex items-center justify-between mb-3">
<h3 className="text-[16px] tracking-tight font-medium">AI generates tasks &amp; flows</h3>
<div className="h-7 w-7 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-300">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3v6l4 2" strokeLinecap="round" strokeLinejoin="round"></path>
<circle cx="12" cy="12" r="9"></circle>
</svg>
</div>
</div>
<p className="text-xs text-white/65 mb-3">
                Synta turns your prompt into structured steps, maps data between tools, and proposes a complete automation path — instantly.
              </p>
<div className="space-y-1.5 text-[11px] text-white/70">
<div className="flex items-center justify-between rounded-lg bg-black/60 border border-white/10 px-2.5 py-1.5">
<span>Trigger: Deal moved to “Won”</span>
<span className="text-white/45 text-[10px]">CRM</span>
</div>
<div className="flex items-center justify-between rounded-lg bg-black/60 border border-white/10 px-2.5 py-1.5">
<span>Create invoice draft</span>
<span className="text-white/45 text-[10px]">Billing</span>
</div>
<div className="flex items-center justify-between rounded-lg bg-black/60 border border-white/10 px-2.5 py-1.5">
<span>Notify #finance</span>
<span className="text-white/45 text-[10px]">Slack</span>
</div>
</div>
</div>

<div className="relative rounded-2xl border border-white/8 bg-white/[0.02] p-4 sm:p-5 hover:border-[#00C853]/40 hover:bg-white/[0.04] transition-colors">
<div className="absolute -top-3 left-4 px-2 py-0.5 rounded-full bg-black border border-white/10 text-[10px] text-white/60">
                STEP 3
              </div>
<div className="flex items-center justify-between mb-3">
<h3 className="text-[16px] tracking-tight font-medium">Edit, refine &amp; automate instantly</h3>
<div className="h-7 w-7 rounded-lg bg-sky-500/15 flex items-center justify-center text-sky-300">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="18" x="3" y="4"></rect>
<path d="M8 2v4M16 2v4"></path>
<path d="M3 10h18"></path>
</svg>
</div>
</div>
<p className="text-xs text-white/65 mb-3">
                Fine-tune via drag‑and‑drop, adjust conditions, and hit deploy. Synta handles execution, retries, and monitoring for you.
              </p>
<div className="grid grid-cols-3 gap-2 text-[10px] text-white/70">
<div className="rounded-lg bg-black/60 border border-white/10 px-2 py-1.5 flex flex-col gap-0.5">
<span className="text-white/55">Live runs</span>
<span className="text-[11px] font-medium text-white">2.4k</span>
</div>
<div className="rounded-lg bg-black/60 border border-white/10 px-2 py-1.5 flex flex-col gap-0.5">
<span className="text-white/55">Success rate</span>
<span className="text-[11px] font-medium text-emerald-300">99.3%</span>
</div>
<div className="rounded-lg bg-black/60 border border-white/10 px-2 py-1.5 flex flex-col gap-0.5">
<span className="text-white/55">Avg. latency</span>
<span className="text-[11px] font-medium text-white">1.2s</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-white/5" id="features">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
<div>
<h2 className="text-[24px] md:text-[28px] tracking-tight font-semibold">Everything you need to automate at scale</h2>
<p className="mt-2 text-sm text-white/65 max-w-xl">
                Synta combines conversational AI with a full‑stack automation engine, so you can design, run, and monitor workflows without glue code.
              </p>
</div>
<div className="text-xs text-white/45">
              From solo operators to large teams — built for reliability, visibility, and control.
            </div>
</div>
<div className="grid md:grid-cols-3 gap-5">

<div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 hover:border-[#00C853]/40 hover:bg-white/[0.04] transition-colors">
<div className="flex items-center justify-between mb-2.5">
<h3 className="text-[15px] tracking-tight font-medium">Chat-based workflow creation</h3>
<div className="h-7 w-7 rounded-lg bg-[#00C853]/15 flex items-center justify-center text-[#00C853]">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 8h10M7 12h6M5 20l2-3h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</div>
<p className="text-xs text-white/65">
                Start every workflow from a conversation. Synta turns your descriptions into structured actions, conditions, and integrations.
              </p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 hover:border-[#00C853]/40 hover:bg-white/[0.04] transition-colors">
<div className="flex items-center justify-between mb-2.5">
<h3 className="text-[15px] tracking-tight font-medium">AI-generated automation logic</h3>
<div className="h-7 w-7 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-300">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3v6l4 2" strokeLinecap="round" strokeLinejoin="round"></path>
<circle cx="12" cy="12" r="9"></circle>
</svg>
</div>
</div>
<p className="text-xs text-white/65">
                Synta infers conditions, mappings, and fallbacks automatically — with explainable suggestions you can accept or tweak.
              </p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 hover:border-[#00C853]/40 hover:bg-white/[0.04] transition-colors">
<div className="flex items-center justify-between mb-2.5">
<h3 className="text-[15px] tracking-tight font-medium">Drag-and-drop flow visualizer</h3>
<div className="h-7 w-7 rounded-lg bg-sky-500/15 flex items-center justify-center text-sky-300">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="7" rx="1.5" width="7" x="3" y="4"></rect>
<rect height="7" rx="1.5" width="7" x="14" y="4"></rect>
<rect height="7" rx="1.5" width="7" x="3" y="15"></rect>
<rect height="7" rx="1.5" width="7" x="14" y="15"></rect>
<path d="M10 7h4M7 11v4M17 11v4M10 18h4"></path>
</svg>
</div>
</div>
<p className="text-xs text-white/65">
                Visualize every step in a canvas. Rearrange nodes, branch logic, and connect apps with a single drag.
              </p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 hover:border-[#00C853]/40 hover:bg-white/[0.04] transition-colors">
<div className="flex items-center justify-between mb-2.5">
<h3 className="text-[15px] tracking-tight font-medium">Real-time execution &amp; monitoring</h3>
<div className="h-7 w-7 rounded-lg bg-emerald-400/15 flex items-center justify-center text-emerald-200">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="9"></circle>
<path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</div>
<p className="text-xs text-white/65">
                Trace every run live. Inspect payloads, timings, and retries, with alerts when something misbehaves.
              </p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 hover:border-[#00C853]/40 hover:bg-white/[0.04] transition-colors">
<div className="flex items-center justify-between mb-2.5">
<h3 className="text-[15px] tracking-tight font-medium">Team collaboration &amp; versioning</h3>
<div className="h-7 w-7 rounded-lg bg-fuchsia-500/15 flex items-center justify-center text-fuchsia-300">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 20v-2a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v2"></path>
<circle cx="12" cy="7" r="3"></circle>
<path d="M5 8a3 3 0 1 0 0 6"></path>
<path d="M19 8a3 3 0 1 1 0 6"></path>
</svg>
</div>
</div>
<p className="text-xs text-white/65">
                Work together with roles, approvals, and version history. Safely experiment, review, and roll back.
              </p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 hover:border-[#00C853]/40 hover:bg-white/[0.04] transition-colors">
<div className="flex items-center justify-between mb-2.5">
<h3 className="text-[15px] tracking-tight font-medium">Smart error detection &amp; templates</h3>
<div className="h-7 w-7 rounded-lg bg-amber-500/15 flex items-center justify-center text-amber-300">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M10.29 3.86 1.82 18a1 1 0 0 0 .86 1.5h18.64a1 1 0 0 0 .86-1.5L13.71 3.86a1 1 0 0 0-1.72 0z"></path>
<path d="M12 9v4" strokeLinecap="round"></path>
<path d="M12 17h.01" strokeLinecap="round"></path>
</svg>
</div>
</div>
<p className="text-xs text-white/65">
                Catch breaking changes before they ship. Start from best‑practice templates and let Synta validate each step.
              </p>
</div>
</div>
</div>
</section>

<section className="border-b border-white/5">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
<div className="grid lg:grid-cols-2 gap-8 items-start">
<div>
<h2 className="text-[24px] md:text-[28px] tracking-tight font-semibold mb-2">Try Synta’s live chat‑to‑workflow demo</h2>
<p className="text-sm text-white/65 mb-4 max-w-md">
                See how Synta turns a single sentence into a ready‑to‑run automation. Modify the prompt and explore the generated flow.
              </p>
<div className="text-xs text-white/45 mb-6">
                Example prompt
              </div>
<div className="rounded-2xl border border-white/10 bg-black/60 p-4 space-y-3">

<div className="space-y-3 text-[13px]">

<div className="flex justify-end">
<div className="max-w-xs rounded-2xl rounded-br-sm bg-[#00C853]/15 border border-[#00C853]/40 px-3 py-2">
                      When a customer signs up, send a welcome email, add them to CRM, and post in Slack.
                    </div>
</div>

<div className="flex items-start gap-2">
<div className="mt-1 h-6 w-6 rounded-full bg-[#00C853]/10 flex items-center justify-center text-[#00C853]">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div className="max-w-xs rounded-2xl rounded-bl-sm bg-white/5 border border-white/10 px-3 py-2 text-white/80">
                      I’ll create a workflow with:
                      <ul className="mt-1.5 list-disc list-inside space-y-0.5 text-white/70">
<li>Trigger: New signup event</li>
<li>Action: Send welcome email via Gmail</li>
<li>Action: Add contact to your CRM</li>
<li>Action: Post a message to a Slack channel</li>
</ul>
</div>
</div>
</div>
<div className="pt-2 border-t border-white/10">
<label className="text-[11px] text-white/50 mb-1 inline-block">Prompt</label>
<div className="flex items-center gap-2 rounded-full border border-white/15 bg-black/70 px-3 py-1.5">
<input className="bg-transparent border-none focus:outline-none focus:ring-0 text-xs text-white placeholder:text-white/35 flex-1" type="text" value="When a customer signs up, send a welcome email, add them to CRM, and post in Slack."/>
<button className="text-[11px] px-2.5 py-1 rounded-full bg-[#00C853] text-black hover:bg-[#00e060] shadow-[0_0_12px_rgba(0,200,83,0.45)] transition-colors">
                      Generate
                    </button>
</div>
<p className="mt-1 text-[10px] text-white/40">
                    No sign‑up required. This is a static demo prompt.
                  </p>
</div>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-black/80 p-4 sm:p-5">
<div className="flex items-center justify-between mb-3">
<div>
<div className="text-xs text-white/45 uppercase tracking-[0.14em]">GENERATED FLOW</div>
<div className="mt-1 text-[13px] text-white/75">
                    “Customer signup → multi‑channel onboarding”
                  </div>
</div>
<button className="text-[11px] px-2.5 py-1 rounded-full border border-white/15 hover:border-white/30 hover:bg-white/10 transition-colors text-white/70">
                  Open in builder
                </button>
</div>
<div className="mt-3">

<div className="relative h-72 rounded-xl bg-black/70 border border-dashed border-white/12 overflow-hidden">

<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:16px_16px] opacity-40"></div>
<div className="relative h-full w-full p-4 space-y-3">

<div className="flex items-center gap-3">
<div className="flex items-center gap-2 rounded-xl bg-black/80 border border-white/15 px-3 py-2 shadow-lg shadow-black/60">
<div className="h-7 w-7 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-300">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14" strokeLinecap="round"></path>
<path d="M5 12h14" strokeLinecap="round"></path>
</svg>
</div>
<div>
<div className="text-[11px] font-medium text-white">Customer signup</div>
<div className="text-[10px] text-white/50">Trigger · Auth service</div>
</div>
</div>
<div className="h-px flex-1 bg-gradient-to-r from-white/40 via-white/30 to-transparent"></div>
</div>

<div className="flex items-center gap-3">
<div className="flex-1 flex flex-col gap-3">

<div className="flex items-center gap-2 rounded-xl bg-black/80 border border-white/12 px-3 py-2">
<div className="h-7 w-7 rounded-lg bg-red-500/15 flex items-center justify-center text-red-300">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4h16v16H4z"></path>
<path d="M4 7l8 5 8-5"></path>
</svg>
</div>
<div className="flex-1">
<div className="text-[11px] font-medium text-white">Send welcome email</div>
<div className="text-[10px] text-white/50">Gmail · Personalized template</div>
</div>
<span className="text-[10px] text-white/45">Action</span>
</div>

<div className="flex items-center gap-2 rounded-xl bg-black/80 border border-white/12 px-3 py-2">
<div className="h-7 w-7 rounded-lg bg-sky-500/15 flex items-center justify-center text-sky-300">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
</svg>
</div>
<div className="flex-1">
<div className="text-[11px] font-medium text-white">Create CRM contact</div>
<div className="text-[10px] text-white/50">HubSpot · Upsert record</div>
</div>
<span className="text-[10px] text-white/45">Action</span>
</div>
</div>

<div className="flex flex-col items-center justify-center gap-1">
<div className="h-8 w-px bg-white/15"></div>
<span className="text-[10px] text-white/45 uppercase tracking-[0.18em]">AND</span>
<div className="h-8 w-px bg-white/15"></div>
</div>

<div className="flex-1 flex items-center rounded-xl bg-black/80 border border-white/12 px-3 py-2">
<div className="h-7 w-7 rounded-lg bg-fuchsia-500/15 flex items-center justify-center text-fuchsia-300">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 3h2v10a2 2 0 1 1-2-2h2"></path>
<path d="M17 3h2v10a2 2 0 1 0-2-2h2"></path>
<path d="M3 7h10a2 2 0 1 1-2 2V7"></path>
<path d="M3 17h10a2 2 0 1 0-2-2v2"></path>
</svg>
</div>
<div className="flex-1 ml-2">
<div className="text-[11px] font-medium text-white">Post to #new-customers</div>
<div className="text-[10px] text-white/50">Slack · Include plan &amp; source</div>
</div>
</div>
</div>

<div className="mt-4 rounded-lg bg-white/5 border border-white/10 px-3 py-2 flex items-center justify-between text-[10px] text-white/65">
<div className="inline-flex items-center gap-2">
<span className="h-5 w-5 rounded-md bg-[#00C853]/15 flex items-center justify-center text-[#00C853]">
<svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 11l3 3L22 4" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
</svg>
</span>
<div>
<div className="text-[11px] font-medium text-white">Validation checks</div>
<div className="text-[10px] text-white/55">All steps pass schema &amp; auth tests.</div>
</div>
</div>
<button className="px-2.5 py-1 rounded-full border border-white/15 hover:border-white/30 hover:bg-white/10 transition-colors text-[10px]">
                        View details
                      </button>
</div>
</div>
</div>
</div>
<div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-[11px] text-white/50">
<div className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
<span>Estimated latency: <span className="text-white/80">1.6s</span></span>
</div>
<div className="flex items-center gap-2">
<span className="text-white/40">Preview only ·</span>
<a className="text-[#00C853] hover:text-[#00e060] transition-colors" href="#pricing">Create a live workflow →</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-white/5" id="templates">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
<div>
<h2 className="text-[24px] md:text-[28px] tracking-tight font-semibold">Launch faster with ready‑made templates</h2>
<p className="mt-2 text-sm text-white/65 max-w-xl">
                Start from curated blueprints for common flows, then adapt them to your stack with a sentence or two.
              </p>
</div>
<button className="text-xs px-3 py-1.5 rounded-full border border-white/15 hover:border-white/30 hover:bg-white/10 transition-colors text-white/70">
              Browse all templates
            </button>
</div>
<div className="grid md:grid-cols-4 gap-5">

<div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 flex flex-col hover:border-[#00C853]/40 hover:bg-white/[0.04] transition-colors">
<div className="flex items-center justify-between mb-2">
<span className="text-[12px] font-medium text-white">CRM automation</span>
<span className="text-[10px] text-white/45 px-2 py-0.5 rounded-full bg-white/5 border border-white/10">Popular</span>
</div>
<p className="text-[11px] text-white/65 mb-3">
                Auto‑enrich leads, assign owners, and keep your pipeline always up‑to‑date.
              </p>
<div className="mt-auto text-[11px] text-[#00C853]">
                Use template →
              </div>
</div>

<div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 flex flex-col hover:border-[#00C853]/40 hover:bg-white/[0.04] transition-colors">
<div className="flex items-center justify-between mb-2">
<span className="text-[12px] font-medium text-white">Order fulfillment</span>
<span className="text-[10px] text-white/45 px-2 py-0.5 rounded-full bg-white/5 border border-white/10">Ops</span>
</div>
<p className="text-[11px] text-white/65 mb-3">
                Sync orders, trigger shipping labels, and notify customers at every step.
              </p>
<div className="mt-auto text-[11px] text-[#00C853]">
                Use template →
              </div>
</div>

<div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 flex flex-col hover:border-[#00C853]/40 hover:bg-white/[0.04] transition-colors">
<div className="flex items-center justify-between mb-2">
<span className="text-[12px] font-medium text-white">Content pipeline</span>
<span className="text-[10px] text-white/45 px-2 py-0.5 rounded-full bg-white/5 border border-white/10">Marketing</span>
</div>
<p className="text-[11px] text-white/65 mb-3">
                Turn ideas into drafts, approvals, and scheduled posts across channels.
              </p>
<div className="mt-auto text-[11px] text-[#00C853]">
                Use template →
              </div>
</div>

<div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 flex flex-col hover:border-[#00C853]/40 hover:bg-white/[0.04] transition-colors">
<div className="flex items-center justify-between mb-2">
<span className="text-[12px] font-medium text-white">Lead capturing</span>
<span className="text-[10px] text-white/45 px-2 py-0.5 rounded-full bg-white/5 border border-white/10">Growth</span>
</div>
<p className="text-[11px] text-white/65 mb-3">
                Capture leads from forms, ads, and chat, then route them where they belong.
              </p>
<div className="mt-auto text-[11px] text-[#00C853]">
                Use template →
              </div>
</div>
</div>
</div>
</section>

<section className="border-b border-white/5" id="pricing">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
<div className="text-center mb-10">
<h2 className="text-[24px] md:text-[28px] tracking-tight font-semibold">Pricing that scales with your workflows</h2>
<p className="mt-2 text-sm text-white/65 max-w-xl mx-auto">
              Start free, then upgrade as your automations grow. No setup fees, no long‑term contracts.
            </p>
</div>
<div className="flex flex-col lg:flex-row gap-6 items-stretch">

<div className="flex-1 rounded-2xl border border-white/10 bg-white/[0.02] p-5 flex flex-col">
<div className="flex items-center justify-between mb-2">
<h3 className="text-[16px] tracking-tight font-medium">Free</h3>
<span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/55">Get started</span>
</div>
<div className="flex items-baseline gap-1 mt-1">
<span className="text-[24px] font-semibold">$0</span>
<span className="text-xs text-white/50">/month</span>
</div>
<p className="mt-2 text-xs text-white/65">
                For individuals experimenting with automation or small side projects.
              </p>
<ul className="mt-4 space-y-1.5 text-[11px] text-white/70">
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-[#00C853]"></span>
                  Up to 3 active workflows
                </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-[#00C853]"></span>
                  500 runs / month
                </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-white/40"></span>
                  Core integrations (Slack, Gmail, Notion)
                </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-white/40"></span>
                  Community templates
                </li>
</ul>
<button className="mt-5 text-sm w-full px-4 py-2 rounded-full border border-white/12 hover:border-white/30 hover:bg-white/10 transition-colors text-white/80">
                Start for free
              </button>
</div>

<div className="flex-1 rounded-2xl border border-[#00C853]/70 bg-[radial-gradient(circle_at_top,_rgba(0,200,83,0.16),_transparent)] bg-black/80 p-5 shadow-[0_0_40px_rgba(0,200,83,0.35)] relative overflow-hidden">
<div className="absolute -top-8 right-4 px-2.5 py-1 rounded-full bg-[#00C853] text-black text-[10px] font-medium uppercase tracking-[0.16em] shadow-[0_0_24px_rgba(0,200,83,0.8)]">
                Most popular
              </div>
<div className="flex items-center justify-between mb-2">
<h3 className="text-[16px] tracking-tight font-medium">Pro</h3>
</div>
<div className="flex items-baseline gap-1 mt-1">
<span className="text-[24px] font-semibold">$39</span>
<span className="text-xs text-white/50">/user/month</span>
</div>
<p className="mt-2 text-xs text-white/75">
                For teams that run automations across the business and need visibility, controls, and advanced integrations.
              </p>
<ul className="mt-4 space-y-1.5 text-[11px] text-white/80">
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-[#00C853]"></span>
                  Unlimited workflows
                </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-[#00C853]"></span>
                  50k runs / month included
                </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-[#00C853]"></span>
                  Priority integrations &amp; webhooks
                </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-[#00C853]"></span>
                  Versioning, approvals &amp; audit logs
                </li>
</ul>
<button className="mt-5 text-sm w-full px-4 py-2 rounded-full bg-[#00C853] text-black font-medium hover:bg-[#00e060] shadow-[0_0_24px_rgba(0,200,83,0.8)] transition-colors">
                Start Pro trial
              </button>
<div className="mt-2 text-[10px] text-white/60 text-center">
                14‑day free trial · No credit card required
              </div>
</div>

<div className="flex-1 rounded-2xl border border-white/10 bg-white/[0.02] p-5 flex flex-col">
<div className="flex items-center justify-between mb-2">
<h3 className="text-[16px] tracking-tight font-medium">Team</h3>
<span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/55">Scale</span>
</div>
<div className="flex items-baseline gap-1 mt-1">
<span className="text-[24px] font-semibold">Let’s talk</span>
</div>
<p className="mt-2 text-xs text-white/65">
                For larger organizations with mission‑critical automations, SSO, and custom security requirements.
              </p>
<ul className="mt-4 space-y-1.5 text-[11px] text-white/70">
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-[#00C853]"></span>
                  Usage‑based pricing for high‑volume runs
                </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-[#00C853]"></span>
                  SSO, SCIM &amp; advanced permissions
                </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-[#00C853]"></span>
                  Dedicated success &amp; onboarding
                </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-white/40"></span>
                  Custom data residency &amp; SLAs
                </li>
</ul>
<button className="mt-5 text-sm w-full px-4 py-2 rounded-full border border-white/12 hover:border-white/30 hover:bg-white/10 transition-colors text-white/80">
                Talk to sales
              </button>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-black/80">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-xl bg-[#00C853]/10 flex items-center justify-center shadow-[0_0_25px_rgba(0,200,83,0.45)]">
<svg className="w-4 h-4 text-[#00C853]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<span className="text-[16px] tracking-tight font-semibold">Synta</span>
</div>
<div className="flex flex-wrap items-center gap-4 text-xs text-white/60">
<a className="hover:text-white transition-colors" href="#">Documentation</a>
<a className="hover:text-white transition-colors" href="mailto:contact@synta.ai">contact@synta.ai</a>
<div className="flex items-center gap-3">
<a className="hover:text-white transition-colors inline-flex items-center gap-1" href="#">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 3h4.5L9 21H4.5L15 3z"></path>
</svg>
                X
              </a>
<a className="hover:text-white transition-colors inline-flex items-center gap-1" href="#">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 1 0-5.33 5.96V14H8v-2h2.67V9.5H8V7.5h2.67V5.41A4 4 0 0 1 15 9h2v2h-2v2h2v2h-2v2h-2v-1.96A6 6 0 0 0 16 8z"></path>
</svg>
                LinkedIn
              </a>
<a className="hover:text-white transition-colors inline-flex items-center gap-1" href="#">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4h16v16H4z"></path>
<path d="M8 11.5l3 3 5-6"></path>
</svg>
                Changelog
              </a>
</div>
</div>
</div>
<div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-[11px] text-white/55 border-t border-white/5 pt-4">
<span>© <span id="year-span">2024</span> Synta, Inc. All rights reserved.</span>
<div className="flex items-center gap-4">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Status</a>
</div>
</div>
</div>
</footer>
</div>


    </>
  );
}
