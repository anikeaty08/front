import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Mouse Tracking
        document.addEventListener('mousemove', (e) => {
            requestAnimationFrame(() => {
                const x = e.clientX;
                const y = e.clientY;
                document.documentElement.style.setProperty('--mouse-x', x + 'px');
                document.documentElement.style.setProperty('--mouse-y', y + 'px');
            });
        });
        
        // Simulating the playground chat
        function runPlayground() {
            const input = document.getElementById('ai-input');
            const chatBox = document.getElementById('chat-box');
            if(!input || !input.value) return;
            
            // Add user message
            const userMsg = `<div class="flex justify-end mb-4"><div class="bg-white/10 text-white px-4 py-2 rounded-lg rounded-tr-none text-sm">${input.value}</div></div>`;
            chatBox.innerHTML += userMsg;
            const originalVal = input.value;
            input.value = '';
            
            // Show typing
            const typingId = 'typing-' + Date.now();
            chatBox.innerHTML += `<div id="${typingId}" class="flex justify-start mb-4 items-center gap-2"><div class="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center"><iconify-icon icon="lucide:bot" class="text-emerald-400" width="16"></iconify-icon></div><div class="flex gap-1 bg-white/5 px-4 py-3 rounded-lg rounded-tl-none"><div class="w-1.5 h-1.5 bg-slate-500 rounded-full typing-dot"></div><div class="w-1.5 h-1.5 bg-slate-500 rounded-full typing-dot"></div><div class="w-1.5 h-1.5 bg-slate-500 rounded-full typing-dot"></div></div></div>`;
            chatBox.scrollTop = chatBox.scrollHeight;

            // Simulated response logic
            setTimeout(() => {
                const typingEl = document.getElementById(typingId);
                if(typingEl) typingEl.remove();
                
                let reply = "I can automate that workflow. Integrating OpenAI with your CRM and WhatsApp is one of Innoin's core capabilities.";
                const lowerVal = originalVal.toLowerCase();
                
                if(lowerVal.includes('price') || lowerVal.includes('cost')) {
                    reply = "Our pricing is tailored to your business needs. Book a consultation for a custom quote.";
                } else if(lowerVal.includes('hello') || lowerVal.includes('hi')) {
                    reply = "Hello there! I'm ready to assist you with AI Agents and Automation queries.";
                } else if(lowerVal.includes('service')) {
                    reply = "We offer AI Chatbots, Workflow Automation (Make/Zapier), and Custom Software Development.";
                }
                
                chatBox.innerHTML += `<div class="flex justify-start mb-4 items-start gap-2"><div class="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center mt-1"><iconify-icon icon="lucide:sparkles" class="text-emerald-400" width="16"></iconify-icon></div><div class="bg-[#0f0f11] border border-white/10 text-slate-300 px-4 py-2 rounded-lg rounded-tl-none text-sm shadow-lg shadow-emerald-900/5">${reply}</div></div>`;
                chatBox.scrollTop = chatBox.scrollHeight;
            }, 1500);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none bg-[#020204]">
<div className="tech-grid opacity-20"></div>
<div className="spotlight-bg"></div>

<div className="nebula-container">
<div className="nebula-blob bg-emerald-500/10 w-[500px] h-[500px] top-[-10%] right-[-10%]"></div>
<div className="nebula-blob bg-cyan-500/10 w-[600px] h-[600px] bottom-[10%] left-[-10%] animation-delay-2000"></div>
<div className="nebula-blob bg-purple-500/5 w-[400px] h-[400px] top-[40%] left-[30%]"></div>
</div>

<div className="falling-lines">
<div className="falling-line" style={{left: '15%', animationDuration: '4s', animationDelay: '0s'}}></div>
<div className="falling-line" style={{left: '35%', animationDuration: '6s', animationDelay: '2s'}}></div>
<div className="falling-line" style={{left: '55%', animationDuration: '5s', animationDelay: '1.5s'}}></div>
<div className="falling-line" style={{left: '80%', animationDuration: '7s', animationDelay: '0.5s'}}></div>
</div>
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent to-transparent via-emerald-500/20"></div>
</div>

<nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 border-b bg-[#020204]/80 backdrop-blur-xl border-white/5">
<a className="flex items-center gap-2 cursor-pointer group" href="#" onclick="window.scrollTo(0,0); return false;">

<div className="relative flex items-center justify-center w-9 h-9 transition-transform group-active:scale-95 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-lg border border-white/10">
<iconify-icon className="text-emerald-400" icon="lucide:cpu" width="20"></iconify-icon>
<div className="absolute inset-0 bg-emerald-500/20 blur-md rounded-full group-hover:bg-emerald-500/30 transition-all -z-10"></div>
</div>
<div className="flex flex-col">
<span className="text-sm tracking-tight font-bold text-white leading-none">INNOIN AI</span>
<span className="text-[9px] tracking-widest text-emerald-400 uppercase font-mono mt-0.5">Automation</span>
</div>
</a>
<div className="hidden md:flex items-center gap-1 p-1 rounded-full border backdrop-blur-md bg-white/5 border-white/5">
<a className="px-4 py-1.5 text-xs font-medium rounded-full transition-all text-white bg-white/10 hover:bg-white/15" href="#home">Home</a>
<a className="px-4 py-1.5 text-xs font-medium rounded-full transition-all text-slate-400 hover:text-white hover:bg-white/5" href="#services">Services</a>
<a className="px-4 py-1.5 text-xs font-medium rounded-full transition-all text-slate-400 hover:text-white hover:bg-white/5" href="#playground">Playground</a>
<a className="px-4 py-1.5 text-xs font-medium rounded-full transition-all text-slate-400 hover:text-white hover:bg-white/5" href="#process">Process</a>
<a className="px-4 py-1.5 text-xs font-medium rounded-full transition-all text-slate-400 hover:text-white hover:bg-white/5" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden lg:flex items-center gap-2 text-[11px] font-medium transition-all text-emerald-400 hover:text-emerald-300 active:scale-95" href="https://wa.me/917062633555" target="_blank">
<iconify-icon icon="lucide:message-circle" width="14"></iconify-icon>
<span>+91 7062633555</span>
</a>
<div className="h-4 w-px hidden lg:block bg-white/10"></div>
<button className="group relative text-xs font-semibold bg-[#0a0a0c] border px-5 py-2 rounded-md transition-all overflow-hidden hover:border-emerald-500/50 shadow-[0_0_0_1px_rgba(0,0,0,0)] hover:shadow-[0_0_0_1px_rgba(16,185,129,0.2)] text-white border-white/10 active:scale-95">
<span className="btn-content-slide">
<span className="btn-text-original">Book Consultation</span>
<span className="btn-text-hover text-emerald-300">Book Now →</span>
</span>
</button>
</div>
</nav>

<main className="min-h-screen flex flex-col overflow-hidden w-full z-10 pt-32 pb-20 relative items-center" id="home">

<div className="text-center max-w-5xl z-20 mx-auto px-6 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-[11px] font-medium mb-8 animate-fade-in shadow-[0_0_20px_rgba(16,185,129,0.1)] text-emerald-300">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-emerald-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span>The Future of Business Automation</span>
</div>
<h1 className="md:text-8xl leading-[0.95] text-5xl font-medium text-white tracking-tight font-newsreader mb-8">
                Intelligent Systems,<br/>
<span className="bg-clip-text text-transparent font-newsreader bg-gradient-to-r from-emerald-300 via-cyan-300 to-emerald-300">Autonomous Growth.</span>
</h1>
<p className="leading-relaxed text-base max-w-2xl mx-auto mb-10 font-light text-slate-400">
                Innoin AI builds bespoke <span className="text-white font-medium">AI Agents</span>, <span className="text-white font-medium">Chatbots</span>, and <span className="text-white font-medium">Workflow Automations</span> for enterprises and SMEs. Based in Jaipur, engineering for the world.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-5">

<div className="btn-glow-border group cursor-pointer w-full md:w-auto">
<button className="relative z-10 w-full md:w-auto block px-8 py-3.5 bg-[#0a0a0c] text-sm font-semibold rounded-[5px] transition-all hover:bg-[#121215] active:bg-[#16161a] text-white" onclick="document.getElementById('contact').scrollIntoView({behavior: 'smooth'})">
<span className="btn-content-slide">
<span className="btn-text-original">Explore Solutions</span>
<span className="btn-text-hover text-emerald-300">View Services</span>
</span>
</button>
</div>

<button className="group flex transition-all md:w-auto text-sm font-medium bg-[#0a0a0b] w-full border-0 rounded-md pt-3 pr-6 pb-3 pl-6 gap-x-2 gap-y-2 items-center justify-center hover:text-white text-slate-400 active:scale-95" onclick="document.getElementById('playground').scrollIntoView({behavior: 'smooth'})">
<iconify-icon className="text-slate-500 group-hover:text-emerald-400 transition-colors" icon="lucide:play-circle" width="16"></iconify-icon>
<span className="border-b border-transparent group-hover:border-slate-500 transition-all">Try AI Playground</span>
</button>
</div>
</div>

<div className="dashboard-container w-full max-w-6xl z-20 mx-auto px-4 mt-16 relative">
<div className="dashboard-ui relative w-full rounded-xl border bg-[#0a0a0c] overflow-hidden shadow-2xl border-white/10">

<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent -translate-y-full animate-[scan_8s_linear_infinite] pointer-events-none z-30"></div>

<div className="h-10 border-b bg-white/[0.02] flex items-center px-4 justify-between select-none border-white/5">
<div className="flex items-center gap-3">
<div className="flex gap-1.5 opacity-50">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="h-4 w-px mx-1 bg-white/10"></div>
<div className="flex items-center gap-2 text-[10px] px-2 py-0.5 rounded border bg-black/40 border-white/5 text-slate-400">
<iconify-icon icon="lucide:workflow" width="10"></iconify-icon>
<span className="font-mono">innoin-workflow-manager</span>
</div>
</div>
<div className="hidden sm:flex items-center gap-6">
<div className="flex items-center gap-2 text-[10px] text-slate-500 font-mono">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                            SYSTEM ONLINE
                        </div>
</div>
</div>

<div className="flex h-[450px]">

<div className="w-14 md:w-56 border-r bg-white/[0.01] flex flex-col justify-between py-4 border-white/5">
<div className="space-y-1 px-2">
<div className="flex items-center gap-3 px-3 py-2 rounded-md border text-xs cursor-pointer bg-emerald-500/10 border-emerald-500/20 text-emerald-300">
<iconify-icon icon="lucide:activity" width="14"></iconify-icon>
<span className="hidden md:inline font-medium">Dashboard</span>
</div>
<div className="flex items-center gap-3 px-3 py-2 text-slate-500 rounded-md transition-all text-xs cursor-pointer hover:text-slate-300 hover:bg-white/5">
<iconify-icon icon="lucide:bot" width="14"></iconify-icon>
<span className="hidden md:inline">Active Agents</span>
</div>
<div className="flex items-center gap-3 px-3 py-2 text-slate-500 rounded-md transition-all text-xs cursor-pointer hover:text-slate-300 hover:bg-white/5">
<iconify-icon icon="lucide:users" width="14"></iconify-icon>
<span className="hidden md:inline">CRM Sync</span>
</div>
</div>
<div className="px-4 hidden md:block">
<div className="text-[10px] uppercase tracking-widest mb-2 font-semibold text-slate-600">Leads Captured</div>
<div className="w-full h-1 rounded-full overflow-hidden mb-1 bg-white/5">
<div className="bg-emerald-500 w-[85%] h-full rounded-full shadow-[0_0_10px_#10b981]"></div>
</div>
<div className="flex justify-between text-[10px] text-slate-500">
<span>Weekly Goal</span>
<span className="text-white">85%</span>
</div>
</div>
</div>

<div className="flex-1 p-6 overflow-hidden flex flex-col gap-6">

<div className="grid grid-cols-3 gap-4">
<div className="p-4 rounded-lg border bg-gradient-to-br from-white/[0.03] to-transparent border-white/5">
<div className="text-[10px] text-slate-500 uppercase tracking-wide mb-1">Messages Processed</div>
<div className="text-xl font-medium font-mono text-white">45,201</div>
<div className="text-[10px] mt-1 flex items-center gap-1 text-emerald-400">
<iconify-icon icon="lucide:arrow-up-right" width="10"></iconify-icon> +12%
                                </div>
</div>
<div className="p-4 rounded-lg border bg-gradient-to-br from-white/[0.03] to-transparent border-white/5">
<div className="text-[10px] text-slate-500 uppercase tracking-wide mb-1">Cost Per Lead</div>
<div className="text-xl font-medium font-mono text-white">₹14.2</div>
<div className="text-[10px] mt-1 flex items-center gap-1 text-emerald-400">
<iconify-icon icon="lucide:arrow-down-right" width="10"></iconify-icon> -30%
                                </div>
</div>
<div className="p-4 rounded-lg border bg-gradient-to-br from-white/[0.03] to-transparent border-white/5">
<div className="text-[10px] text-slate-500 uppercase tracking-wide mb-1">Uptime</div>
<div className="text-xl font-medium font-mono text-white">99.99%</div>
<div className="text-[10px] text-slate-500 mt-1">Systems Nominal</div>
</div>
</div>

<div className="flex-1 rounded-lg border bg-[#050505] p-4 relative overflow-hidden flex items-center justify-center border-white/5">
<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle, #333 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

<div className="absolute left-[20%] top-[40%] bg-[#1c1c1f] border border-white/10 rounded-lg p-3 shadow-xl z-10 w-32">
<div className="flex items-center gap-2 mb-2">
<iconify-icon icon="logos:whatsapp-icon" width="16"></iconify-icon>
<span className="text-[10px] text-white font-medium">New Lead</span>
</div>
<div className="h-1 w-full bg-emerald-500/20 rounded"></div>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
<path className="opacity-30" d="M 220 190 C 300 190, 300 150, 380 150" fill="none" stroke="#64748b" stroke-dasharray="4" strokeWidth="2"></path>
<circle className="animate-ping" cx="300" cy="170" fill="#10b981" r="3"></circle>
</svg>

<div className="absolute left-[45%] top-[30%] bg-[#1c1c1f] border border-emerald-500/30 rounded-lg p-3 shadow-[0_0_20px_rgba(16,185,129,0.1)] z-10 w-36">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-emerald-400" icon="lucide:brain-circuit" width="16"></iconify-icon>
<span className="text-[10px] text-white font-medium">Innoin Agent</span>
</div>
<div className="text-[9px] text-slate-500 leading-tight">Analyzing intent &amp; drafting response...</div>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
<path className="opacity-30" d="M 520 150 C 600 150, 600 220, 680 220" fill="none" stroke="#64748b" stroke-dasharray="4" strokeWidth="2"></path>
</svg>

<div className="absolute left-[70%] top-[45%] bg-[#1c1c1f] border border-white/10 rounded-lg p-3 shadow-xl z-10 w-32">
<div className="flex items-center gap-2 mb-2">
<iconify-icon icon="logos:hubspot" width="16"></iconify-icon>
<span className="text-[10px] text-white font-medium">Update CRM</span>
</div>
<div className="h-1 w-full bg-orange-500/20 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="horizon-ring"></div>
</main>

<section className="relative py-32 bg-transparent overflow-hidden border-t border-white/5" id="services">
<div className="absolute inset-0 bg-[#020204]/70 -z-10"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="mb-20 max-w-2xl">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 font-serif text-white">
                    End-to-end 
                    <span className="font-serif text-emerald-400">digital transformation.</span>
</h2>
<p className="text-lg leading-relaxed font-light text-slate-400">
                    We combine low-code efficiency with custom code power to deliver robust automation ecosystems for Indian and Global businesses.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">

<div className="md:col-span-2 row-span-2 group relative overflow-hidden rounded-2xl border bg-[#050505]/80 p-8 hover:border-emerald-500/30 transition-colors duration-500 shadow-lg border-white/10 backdrop-blur-sm">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.05),transparent_50%)]"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="mb-8">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 rounded-lg border bg-emerald-500/5 text-emerald-400 border-emerald-500/10">
<iconify-icon icon="lucide:bot-message-square" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white">AI Agents &amp; Chatbots</h3>
</div>
<p className="text-sm leading-relaxed text-slate-400">
                                24/7 intelligent support for your Website and WhatsApp. Our agents can qualify leads, book appointments, and handle customer queries instantly using natural language processing.
                            </p>
</div>
<div className="grid grid-cols-2 gap-3 mt-4">
<div className="px-3 py-2 border border-white/5 rounded bg-white/[0.02] text-xs text-slate-300">Voice Agents</div>
<div className="px-3 py-2 border border-white/5 rounded bg-white/[0.02] text-xs text-slate-300">WhatsApp Bots</div>
<div className="px-3 py-2 border border-white/5 rounded bg-white/[0.02] text-xs text-slate-300">Lead Gen Agents</div>
<div className="px-3 py-2 border border-white/5 rounded bg-white/[0.02] text-xs text-slate-300">Support Desks</div>
</div>
</div>
</div>

<div className="md:col-span-2 lg:col-span-2 group relative overflow-hidden rounded-2xl border bg-[#050505]/80 p-8 hover:border-cyan-500/30 transition-colors duration-500 shadow-lg border-white/10 backdrop-blur-sm">
<div className="relative z-10">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 rounded-lg border bg-cyan-500/5 text-cyan-400 border-cyan-500/10">
<iconify-icon icon="lucide:workflow" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white">Workflow Automation</h3>
</div>
<p className="text-sm leading-relaxed mb-6 text-slate-400">
                            Connect your apps. Eliminate manual data entry. We are experts in Make.com, n8n, and Zapier integration.
                        </p>
<div className="flex items-center gap-4 opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500">
<iconify-icon icon="logos:google-sheets" width="24"></iconify-icon>
<div className="w-8 h-px bg-white/20"></div>
<iconify-icon className="text-red-400" icon="simple-icons:n8n" width="24"></iconify-icon>
<div className="w-8 h-px bg-white/20"></div>
<iconify-icon icon="logos:slack-icon" width="24"></iconify-icon>
</div>
</div>
</div>

<div className="md:col-span-1 lg:col-span-1 group relative overflow-hidden rounded-2xl border bg-[#050505]/80 p-8 hover:border-purple-500/30 transition-colors duration-500 shadow-lg border-white/10 backdrop-blur-sm">
<div className="relative z-10">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 rounded-lg border bg-white/5 text-purple-400 border-white/10">
<iconify-icon icon="lucide:smartphone" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-white">Web &amp; App Dev</h3>
</div>
<p className="text-xs leading-relaxed text-slate-400">
                            Modern React/Next.js websites and React Native mobile apps designed for performance and SEO.
                        </p>
</div>
</div>

<div className="md:col-span-1 lg:col-span-1 group relative overflow-hidden rounded-2xl border bg-[#050505]/80 p-8 hover:border-pink-500/30 transition-colors duration-500 shadow-lg border-white/10 backdrop-blur-sm">
<div className="relative z-10">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 rounded-lg border bg-white/5 text-pink-400 border-white/10">
<iconify-icon icon="lucide:palette" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-white">UI/UX &amp; Design</h3>
</div>
<p className="text-xs leading-relaxed text-slate-400">
                            High-converting landing pages, logos, and social media graphics that build trust.
                        </p>
</div>
</div>

<div className="md:col-span-3 lg:col-span-2 group relative overflow-hidden rounded-2xl border bg-[#050505]/80 p-8 hover:border-emerald-500/30 transition-colors duration-500 shadow-lg border-white/10 backdrop-blur-sm">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.05),transparent_50%)]"></div>
<div className="relative z-10">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 rounded-lg border bg-white/5 text-emerald-400 border-white/10">
<iconify-icon icon="lucide:code-2" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-white">Custom AI Solutions</h3>
</div>
<p className="text-sm leading-relaxed text-slate-400 mb-4">
                            Need something unique? We build custom predictive models, OCR systems, and proprietary AI tools tailored to your specific business logic.
                        </p>
<a className="inline-flex items-center gap-2 text-xs text-emerald-400 hover:text-emerald-300 transition-colors" href="#contact">
                            Discuss your project <iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 bg-transparent border-t border-white/5" id="playground">
<div className="absolute inset-0 bg-[#020204]/70 -z-10"></div>
<div className="max-w-4xl mx-auto px-6 z-10 relative">
<div className="text-center mb-12">
<span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">Interactive Demo</span>
<h2 className="text-3xl font-serif text-white mt-4 mb-4">Experience Innoin AI</h2>
<p className="text-slate-400 font-light">Try our simulated customer service agent. Ask about "Price", "Services", or just say "Hi".</p>
</div>
<div className="relative rounded-xl border border-white/10 bg-[#08080a] shadow-2xl overflow-hidden max-w-2xl mx-auto">
<div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/[0.02]">
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
</div>
<div className="text-xs text-slate-500">Innoin Chat Demo</div>
<div className="w-10"></div>
</div>

<div className="h-80 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-black/50 to-black/80 font-mono scroll-smooth" id="chat-box">

<div className="flex justify-start mb-4 items-start gap-2">
<div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center mt-1">
<iconify-icon className="text-emerald-400" icon="lucide:bot" width="16"></iconify-icon>
</div>
<div className="bg-[#0f0f11] border border-white/10 text-slate-300 px-4 py-2 rounded-lg rounded-tl-none text-sm shadow-lg shadow-emerald-900/5">
                            Hello! I am Innoin's virtual assistant. How can I help you automate your business today?
                        </div>
</div>
</div>

<div className="p-4 border-t border-white/5 bg-white/[0.02]">
<div className="flex gap-2">
<input className="flex-1 bg-black/50 border border-white/10 rounded-md px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500/50 transition-colors placeholder:text-slate-600" id="ai-input" onkeydown="if(event.key==='Enter') runPlayground()" placeholder="Type your message..." type="text"/>
<button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-md transition-all active:scale-95" onclick="runPlayground()">
<iconify-icon icon="lucide:send" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 bg-transparent overflow-hidden border-t border-white/5" id="process">
<div className="absolute inset-0 bg-[#020204]/70 -z-10"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium text-white tracking-tight font-serif mb-4">Deployment Roadmap</h2>
<p className="text-slate-400">From concept to production in 4 weeks.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
<div className="p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors relative group backdrop-blur-sm">
<div className="text-4xl font-bold text-white/5 absolute right-4 top-4 group-hover:text-emerald-500/10 transition-colors">01</div>
<div className="w-10 h-10 rounded-full bg-emerald-900/20 flex items-center justify-center mb-4 text-emerald-400 border border-emerald-500/20">
<iconify-icon icon="lucide:search" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Discovery</h3>
<p className="text-sm text-slate-500">We analyze your bottlenecks and identify high-ROI automation opportunities.</p>
</div>
<div className="p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors relative group backdrop-blur-sm">
<div className="text-4xl font-bold text-white/5 absolute right-4 top-4 group-hover:text-cyan-500/10 transition-colors">02</div>
<div className="w-10 h-10 rounded-full bg-cyan-900/20 flex items-center justify-center mb-4 text-cyan-400 border border-cyan-500/20">
<iconify-icon icon="lucide:code-2" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Build</h3>
<p className="text-sm text-slate-500">Developing agents, connecting APIs (Make/Zapier), and setting up the infrastructure.</p>
</div>
<div className="p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors relative group backdrop-blur-sm">
<div className="text-4xl font-bold text-white/5 absolute right-4 top-4 group-hover:text-purple-500/10 transition-colors">03</div>
<div className="w-10 h-10 rounded-full bg-purple-900/20 flex items-center justify-center mb-4 text-purple-400 border border-purple-500/20">
<iconify-icon icon="lucide:rocket" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Deploy</h3>
<p className="text-sm text-slate-500">Live implementation, staff training, and rigorous testing on your live servers.</p>
</div>
<div className="p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors relative group backdrop-blur-sm">
<div className="text-4xl font-bold text-white/5 absolute right-4 top-4 group-hover:text-orange-500/10 transition-colors">04</div>
<div className="w-10 h-10 rounded-full bg-orange-900/20 flex items-center justify-center mb-4 text-orange-400 border border-orange-500/20">
<iconify-icon icon="lucide:bar-chart-2" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Scale</h3>
<p className="text-sm text-slate-500">Continuous monitoring, analytics reporting, and iterative improvements.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-transparent border-t border-white/5 relative">
<div className="absolute inset-0 bg-[#020204]/70 -z-10"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10">
<h2 className="text-2xl font-medium text-white mb-12 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-[#0a0a0c]/90 border border-white/5 rounded-lg open:border-emerald-500/20 transition-colors">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-slate-300 group-hover:text-white transition-colors">
<span>How much does a custom AI agent cost?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="lucide:chevron-down"></iconify-icon>
</span>
</summary>
<div className="text-slate-500 text-sm mt-0 px-5 pb-5 leading-relaxed">
                        Pricing depends on complexity. Simple chatbot integrations start at lower rates, while fully autonomous enterprise agents require custom quoting. Book a consultation for an estimate.
                    </div>
</details>
<details className="group bg-[#0a0a0c]/90 border border-white/5 rounded-lg open:border-emerald-500/20 transition-colors">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-slate-300 group-hover:text-white transition-colors">
<span>Do you work with startups?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="lucide:chevron-down"></iconify-icon>
</span>
</summary>
<div className="text-slate-500 text-sm mt-0 px-5 pb-5 leading-relaxed">
                        Yes, we specialize in helping startups and SMEs in Jaipur and across India scale operations with minimal headcount using automation.
                    </div>
</details>
<details className="group bg-[#0a0a0c]/90 border border-white/5 rounded-lg open:border-emerald-500/20 transition-colors">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-slate-300 group-hover:text-white transition-colors">
<span>Can you integrate with my existing CRM?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="lucide:chevron-down"></iconify-icon>
</span>
</summary>
<div className="text-slate-500 text-sm mt-0 px-5 pb-5 leading-relaxed">
                        Absolutely. We have extensive experience integrating with HubSpot, Salesforce, Zoho, and custom databases using API connectors.
                    </div>
</details>
</div>
</div>
</section>

<section className="overflow-hidden bg-transparent w-full border-white/5 border-t pt-24 pb-12 relative" id="contact">
<div className="absolute inset-0 bg-[#020204]/70 -z-10"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">

<div className="relative rounded-2xl border border-white/10 bg-[#0a0a0c]/80 backdrop-blur-2xl p-8 md:p-12 overflow-hidden shadow-2xl mb-20">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent pointer-events-none"></div>
<div className="flex flex-col md:flex-row gap-12 justify-between">
<div className="max-w-md">
<div className="flex items-center gap-3 mb-6">

<div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
<iconify-icon className="text-emerald-400" icon="lucide:cpu" width="24"></iconify-icon>
</div>
<span className="text-xl font-semibold text-white">Innoin AI</span>
</div>
<p className="text-sm text-slate-400 mb-8">
                            Empowering Indian enterprises with next-gen AI automation. From Jaipur to the World.
                        </p>
<div className="space-y-4 text-sm text-slate-400">
<div className="flex items-start gap-3">
<iconify-icon className="mt-1 text-emerald-500" icon="lucide:map-pin"></iconify-icon>
<div>
<p className="text-white">Head Office</p>
<p>31/16, Krishna Apartment, Pratap Nagar,<br/>Jaipur, Rajasthan, India</p>
</div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="mt-1 text-emerald-500" icon="lucide:map-pin"></iconify-icon>
<div>
<p className="text-white">Branch Office</p>
<p>Near Dr. Wellness Clinic, Khatwa Road,<br/>Lalsot, Dausa, Rajasthan</p>
</div>
</div>
</div>
</div>

<div className="flex-1 max-w-sm">
<form action="https://innoinmedia.app.n8n.cloud/form/46bb1391-0172-4fbc-85d1-3266e762ec05" className="space-y-4" method="POST">
<h3 className="text-white font-medium mb-4">Start your transformation</h3>
<input className="w-full bg-black/40 border border-white/10 rounded-md px-4 py-3 text-sm text-white focus:border-emerald-500/50 focus:outline-none transition-colors" name="name" placeholder="Your Name" required="" type="text"/>
<input className="w-full bg-black/40 border border-white/10 rounded-md px-4 py-3 text-sm text-white focus:border-emerald-500/50 focus:outline-none transition-colors" name="email" placeholder="Work Email" required="" type="email"/>
<input className="w-full bg-black/40 border border-white/10 rounded-md px-4 py-3 text-sm text-white focus:border-emerald-500/50 focus:outline-none transition-colors" name="phone" placeholder="Phone Number" required="" type="tel"/>
<textarea className="w-full bg-black/40 border border-white/10 rounded-md px-4 py-3 text-sm text-white focus:border-emerald-500/50 focus:outline-none transition-colors" name="message" placeholder="Tell us about your project..." rows="3"></textarea>
<button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-3 rounded-md transition-all active:scale-95" type="submit">Send Message</button>
</form>
</div>
</div>
<div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap gap-6 text-sm text-slate-400 items-center justify-between">
<div>
<a className="hover:text-emerald-400 transition-colors mr-6" href="mailto:innoinai@gmail.com">innoinai@gmail.com</a>
<a className="hover:text-emerald-400 transition-colors" href="tel:+917062633555">+91 7062633555</a>
</div>
<div className="flex gap-4">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Terms</a>
<a className="text-xs text-slate-600 hover:text-slate-400" href="#">Admin Login</a>
</div>
</div>
</div>
<div className="text-center text-xs text-slate-600">
                © 2024 Innoin AI. All rights reserved. Built for the future.
            </div>
</div>
</section>



    </>
  );
}
