import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

            document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<svg className="hidden" height="0" width="0">
<defs>
<filter height="200%" id="neon-teal" width="200%" x="-50%" y="-50%">
<fegaussianblur in="SourceGraphic" result="blur1" stddeviation="4"></fegaussianblur>
<fegaussianblur in="SourceGraphic" result="blur2" stddeviation="12"></fegaussianblur>
<femerge>
<femergenode in="blur2"></femergenode>
<femergenode in="blur1"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>
<filter height="200%" id="neon-red" width="200%" x="-50%" y="-50%">
<fegaussianblur in="SourceGraphic" result="blur1" stddeviation="4"></fegaussianblur>
<fegaussianblur in="SourceGraphic" result="blur2" stddeviation="12"></fegaussianblur>
<femerge>
<femergenode in="blur2"></femergenode>
<femergenode in="blur1"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>
</defs>
</svg>

<div className="bg-[#005F6B] text-[#F0F0F0] text-xs font-medium py-2.5 px-4 text-center tracking-wide flex justify-center items-center gap-2">
<span className="bg-[#00FFD1] text-[#030B0C] px-1.5 py-0.5 rounded-sm text-xs font-semibold">BETA</span>
        AI-driven schema generation is now live. Experience zero-config mappings.
        <a className="underline decoration-white/30 hover:decoration-white underline-offset-2 ml-1" href="#">Read docs</a>
</div>

<nav className="sticky top-0 z-50 bg-[#030B0C]/80 backdrop-blur-xl border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between reveal active">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#00FFD1] text-2xl" icon="solar:infinity-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-lg font-semibold tracking-tighter uppercase text-[#F0F0F0]">Nexus</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#F0F0F0]/70">
<a className="hover:text-[#00FFD1] transition-colors" href="#">Platform</a>
<a className="hover:text-[#00FFD1] transition-colors" href="#">Solutions</a>
<a className="hover:text-[#00FFD1] transition-colors" href="#">Security</a>
<a className="hover:text-[#00FFD1] transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-[#F0F0F0] hover:text-[#00FFD1]" href="#">Log in</a>
<a className="bg-[#00FFD1] text-[#030B0C] hover:bg-[#00FFD1]/90 transition-all px-4 py-2 rounded-md text-sm font-semibold tracking-wide neon-glow" href="#">
                    Start Building
                </a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-24 overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#005F6B]/20 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-5xl mx-auto px-6 relative z-10 text-center text-balance">
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] reveal">
                Automate operations.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFD1] to-[#005F6B]">Zero infrastructure bloat.</span>
</h1>
<p className="mt-8 text-lg md:text-xl text-[#F0F0F0]/60 max-w-2xl mx-auto font-medium leading-relaxed reveal delay-100">
                Connect your entire data stack visually. Stop maintaining fragile glue code and start executing on logic. Deploys in milliseconds.
            </p>
<div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 reveal delay-200">
<a className="w-full sm:w-auto bg-[#00FFD1] text-[#030B0C] px-8 py-3.5 rounded-md text-sm font-semibold tracking-wide hover:scale-105 transition-transform flex items-center justify-center gap-2 neon-glow" href="#">
                    Deploy Your First Workflow
                    <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto bg-white/5 border border-white/10 text-[#F0F0F0] px-8 py-3.5 rounded-md text-sm font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2" href="#">
<iconify-icon className="text-lg text-[#005F6B]" icon="solar:play-circle-linear"></iconify-icon>
                    Interactive Demo
                </a>
</div>
<p className="mt-4 text-xs text-[#F0F0F0]/40 font-medium reveal delay-300">No credit card required • Free forever hobby tier • SOC2 Type II Compliant</p>
<div className="mt-20 w-full aspect-video md:aspect-[21/9] bg-[#0A1618] border border-white/10 rounded-xl teal-glow overflow-hidden relative flex flex-col reveal delay-300 animate-float">
<div className="h-10 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2 relative z-20">
<div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
<div className="ml-4 text-xs text-[#F0F0F0]/30 font-medium flex items-center gap-2">
<iconify-icon icon="solar:lock-keyhole-linear"></iconify-icon> nexus.app/canvas/project-x
                    </div>
</div>
<div className="flex-1 relative p-8 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] overflow-hidden">

<svg className="absolute inset-0 w-full h-full opacity-40 pointer-events-none" preserveaspectratio="none" viewbox="0 0 1000 300">
<path className="svg-draw" d="M -100,150 C 200,150 300,50 500,50 C 700,50 800,250 1100,250" fill="none" stroke="#005F6B" strokeWidth="1.5"></path>
<path className="svg-draw-reverse" d="M -100,200 C 150,200 250,100 450,100 C 650,100 850,200 1100,200" fill="none" filter="url(#neon-teal)" stroke="#00FFD1" strokeWidth="1.5"></path>
<circle cx="0" cy="0" fill="#00FFD1" filter="url(#neon-teal)" r="4">
<animatemotion dur="3s" path="M -100,150 C 200,150 300,50 500,50 C 700,50 800,250 1100,250" repeatcount="indefinite"></animatemotion>
</circle>
</svg>

<div className="absolute top-1/4 left-1/4 w-48 bg-[#030B0C] border border-[#005F6B]/50 rounded-lg p-3 shadow-lg z-10 backdrop-blur-md">
<div className="flex items-center gap-2 mb-2">
<div className="w-6 h-6 rounded bg-[#00FFD1]/10 flex items-center justify-center text-[#00FFD1]">
<iconify-icon icon="solar:database-linear"></iconify-icon>
</div>
<span className="text-xs font-semibold">Postgres DB</span>
</div>
<div className="text-[10px] text-[#F0F0F0]/50">SELECT * FROM users</div>
</div>
<div className="absolute top-1/4 right-1/4 w-48 bg-[#030B0C] border border-[#00FFD1]/50 rounded-lg p-3 shadow-[0_0_20px_-5px_rgba(0,255,209,0.2)] z-10 backdrop-blur-md">
<div className="flex items-center gap-2 mb-2">
<div className="w-6 h-6 rounded bg-[#00FFD1]/10 flex items-center justify-center text-[#00FFD1]">
<iconify-icon icon="solar:code-scan-linear"></iconify-icon>
</div>
<span className="text-xs font-semibold">Transform Data</span>
</div>
<div className="text-[10px] text-[#00FFD1]">Mapping applied successfully</div>
</div>
</div>
</div>
</div>
</header>

<section className="border-y border-white/5 py-10 bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6 reveal">
<p className="text-center text-xs font-medium text-[#F0F0F0]/40 tracking-widest uppercase mb-8">Trusted by engineering teams scaling beyond 10k users</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="text-lg font-semibold tracking-tighter text-[#F0F0F0]">ACME CORP</div>
<div className="text-lg font-semibold tracking-tighter text-[#F0F0F0]">GLOBEX</div>
<div className="text-lg font-semibold tracking-tighter text-[#F0F0F0]">SOYLENT</div>
<div className="text-lg font-semibold tracking-tighter text-[#F0F0F0]">INTEQ</div>
<div className="text-lg font-semibold tracking-tighter text-[#F0F0F0] hidden sm:block">UMBRELLA</div>
</div>
</div>
</section>

<section className="py-32 px-6">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Stop maintaining the plumbing.</h2>
<p className="mt-4 text-[#F0F0F0]/60 max-w-xl mx-auto text-sm">Every hour spent managing API version changes and retries is an hour not spent building core features.</p>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-red-950/20 border border-red-500/20 rounded-2xl p-8 relative overflow-hidden group reveal">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-red-950/40 z-0"></div>
<div className="relative z-10">
<span className="text-xs font-semibold tracking-widest text-red-400 uppercase">The Old Way</span>
<h3 className="text-xl font-medium tracking-tight mt-2 text-[#F0F0F0]">Fragile custom scripts</h3>
<p className="text-sm text-[#F0F0F0]/50 mt-2 mb-8">Manual routing, untracked errors, and silent webhook failures.</p>

<div className="bg-[#030B0C] border border-red-500/10 rounded-lg p-4 h-48 overflow-hidden opacity-80 relative flex items-center justify-center">
<svg className="absolute inset-0 w-full h-full opacity-70" preserveaspectratio="none" viewbox="0 0 400 200">
<path className="svg-draw" d="M0,100 L100,100 L120,50 L140,150 L160,100 L300,100 L320,80" fill="none" filter="url(#neon-red)" stroke="#ef4444" strokeWidth="1.5"></path>
<circle cx="120" cy="50" fill="#ef4444" filter="url(#neon-red)" r="3"></circle>
<circle cx="140" cy="150" fill="#ef4444" filter="url(#neon-red)" r="3">
<animate attributename="opacity" dur="1s" repeatcount="indefinite" values="1;0;1"></animate>
</circle>
<text fill="#ef4444" filter="url(#neon-red)" fontFamily="monospace" fontSize="10" x="160" y="170">ERR_CONNECTION_REFUSED</text>
</svg>
</div>
</div>
</div>

<div className="bg-[#005F6B]/10 border border-[#005F6B]/30 rounded-2xl p-8 relative overflow-hidden reveal delay-100">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#005F6B]/20 z-0"></div>
<div className="relative z-10">
<span className="text-xs font-semibold tracking-widest text-[#00FFD1] uppercase">The Nexus Way</span>
<h3 className="text-xl font-medium tracking-tight mt-2 text-[#F0F0F0]">Resilient, visual engines</h3>
<p className="text-sm text-[#F0F0F0]/50 mt-2 mb-8">Intelligent auto-retries, dead-letter queues, and 100% visibility.</p>

<div className="bg-[#030B0C] border border-white/10 rounded-lg p-4 h-48 relative flex items-center justify-center overflow-hidden">
<svg className="absolute inset-0 w-full h-full" preserveaspectratio="none" viewbox="0 0 400 200">
<path className="svg-draw" d="M-50,150 Q50,150 100,100 T250,80 T450,20" fill="none" filter="url(#neon-teal)" stroke="#00FFD1" strokeWidth="2"></path>

<circle cx="100" cy="100" fill="#030B0C" filter="url(#neon-teal)" r="4" stroke="#00FFD1" strokeWidth="2"></circle>
<circle cx="250" cy="80" fill="#030B0C" filter="url(#neon-teal)" r="4" stroke="#00FFD1" strokeWidth="2"></circle>
<circle cx="0" cy="0" fill="#00FFD1" filter="url(#neon-teal)" r="3">
<animatemotion dur="2.5s" path="M-50,150 Q50,150 100,100 T250,80 T450,20" repeatcount="indefinite"></animatemotion>
</circle>
</svg>
<div className="absolute bottom-4 right-4 bg-[#00FFD1]/10 border border-[#00FFD1]/30 rounded px-2 py-1 text-[10px] text-[#00FFD1] font-mono backdrop-blur-sm shadow-[0_0_15px_rgba(0,255,209,0.2)]">
                                99.99% SUCCESS
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-gradient-to-b from-[#0A1618] to-[#030B0C] relative overflow-hidden">

<svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" preserveaspectratio="none" viewbox="0 0 100 100">
<line className="svg-draw" stroke="#005F6B" stroke-dasharray="2,2" strokeWidth="0.2" x1="20" x2="20" y1="0" y2="100"></line>
<line className="svg-draw" stroke="#005F6B" stroke-dasharray="2,2" strokeWidth="0.2" x1="40" x2="40" y1="0" y2="100"></line>
<line className="svg-draw" stroke="#005F6B" stroke-dasharray="2,2" strokeWidth="0.2" x1="60" x2="60" y1="0" y2="100"></line>
<line className="svg-draw" stroke="#005F6B" stroke-dasharray="2,2" strokeWidth="0.2" x1="80" x2="80" y1="0" y2="100"></line>
</svg>
<div className="max-w-7xl mx-auto px-6 text-center relative z-10 reveal">
<span className="inline-flex items-center gap-2 bg-[#005F6B]/20 border border-[#005F6B]/50 px-3 py-1 rounded-full text-xs font-medium text-[#00FFD1] mb-6">
<iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon> The Visual Canvas
            </span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#F0F0F0] mb-6">Drag. Drop. Deploy.</h2>
<p className="text-lg text-[#F0F0F0]/60 max-w-2xl mx-auto font-medium mb-16">
                Build complex, multi-step integrations without writing a single line of boilerplate. What used to take sprints now takes minutes.
            </p>
<div className="relative w-full max-w-4xl mx-auto bg-[#030B0C] rounded-2xl border border-white/10 shadow-2xl p-2 animate-float">
<div className="absolute -inset-0.5 bg-gradient-to-r from-[#005F6B] to-[#00FFD1] rounded-2xl opacity-20 blur-sm pointer-events-none"></div>
<div className="relative bg-[#0A1618] rounded-xl overflow-hidden h-96 flex">

<div className="w-48 border-r border-white/5 p-4 hidden md:block z-10 bg-[#0A1618]">
<div className="text-xs font-semibold text-[#F0F0F0]/40 mb-4 uppercase tracking-wider">Triggers</div>
<div className="bg-white/5 border border-white/10 rounded p-2 text-xs flex items-center gap-2 mb-2 cursor-pointer hover:bg-white/10 transition-colors">
<iconify-icon className="text-[#00FFD1]" icon="solar:webhook-linear"></iconify-icon> Webhook
                        </div>
<div className="text-xs font-semibold text-[#F0F0F0]/40 mt-6 mb-4 uppercase tracking-wider">Actions</div>
<div className="bg-white/5 border border-white/10 rounded p-2 text-xs flex items-center gap-2 mb-2 opacity-50">
<iconify-icon icon="solar:letter-linear"></iconify-icon> Send Email
                        </div>
<div className="bg-white/5 border border-white/10 rounded p-2 text-xs flex items-center gap-2 opacity-50">
<iconify-icon icon="solar:database-linear"></iconify-icon> Upsert Row
                        </div>
</div>

<div className="flex-1 relative flex items-center justify-center bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:20px_20px]">
<svg className="absolute inset-0 w-full h-full" pointer-events="none">
<path className="svg-draw" d="M100,100 C 200,100 250,192 350,192" fill="none" filter="url(#neon-teal)" stroke="#00FFD1" stroke-dasharray="4,4" strokeWidth="1.5"></path>
<path className="svg-draw" d="M100,284 C 200,284 250,192 350,192" fill="none" stroke="#005F6B" stroke-dasharray="4,4" strokeWidth="1.5"></path>
</svg>

<div className="absolute top-[80px] left-[50px] bg-[#030B0C] border border-[#00FFD1]/30 p-2 rounded text-[10px] text-[#F0F0F0] font-mono shadow-lg flex items-center gap-2">
<iconify-icon className="text-[#00FFD1]" icon="solar:webhook-linear"></iconify-icon> Event_In
                        </div>
<div className="absolute bottom-[80px] left-[50px] bg-[#030B0C] border border-white/10 p-2 rounded text-[10px] text-[#F0F0F0]/50 font-mono shadow-lg flex items-center gap-2">
<iconify-icon icon="solar:database-linear"></iconify-icon> User_Data
                        </div>

<div className="bg-[#030B0C] border border-[#005F6B] rounded-lg p-4 shadow-xl w-64 z-20 absolute top-[150px] left-[350px]">
<div className="text-sm font-semibold mb-2">Configure Data Mapping</div>
<div className="space-y-2">
<div className="flex items-center justify-between text-xs bg-white/5 p-2 rounded">
<span className="text-[#F0F0F0]/60">Source.email</span>
<iconify-icon className="text-[#00FFD1]" icon="solar:arrow-right-linear"></iconify-icon>
<span>Target.user_email</span>
</div>
<div className="flex items-center justify-between text-xs bg-[#005F6B]/20 border border-[#005F6B]/50 p-2 rounded relative overflow-hidden">
<div className="absolute inset-0 bg-[#00FFD1]/10 w-1/2 animate-[pulse-line_1s_infinite]"></div>
<span className="text-[#F0F0F0]/60 relative z-10">Source.id</span>
<iconify-icon className="text-[#00FFD1] relative z-10" icon="solar:arrow-right-linear"></iconify-icon>
<span className="text-[#00FFD1] font-medium relative z-10">Auto-generating...</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden flex items-center justify-center reveal">
<div className="absolute inset-0 bg-[#005F6B] opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 to-transparent"></div>
<div className="relative z-10 text-center">
<button className="group w-24 h-24 rounded-full bg-[#00FFD1] text-[#030B0C] flex items-center justify-center mx-auto hover:scale-110 transition-transform duration-300 neon-glow relative">

<svg className="absolute -inset-4 w-32 h-32 animate-spin" style={{animationDuration: '4s'}} viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="48" stroke="#00FFD1" stroke-dasharray="10 20" strokeWidth="0.5"></circle>
</svg>
<iconify-icon className="text-4xl translate-x-0.5 group-hover:scale-90 transition-transform" icon="solar:play-bold"></iconify-icon>
</button>
<h3 className="mt-8 text-2xl font-semibold tracking-tight">Experience the engine.</h3>
<p className="mt-2 text-sm text-[#F0F0F0]/60 font-medium">3-minute interactive walkthrough. No signup required.</p>
</div>
</section>

<section className="py-24 px-6 bg-[#0A1618]">
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-24 items-center">

<div className="order-2 md:order-1 reveal">
<div className="w-12 h-12 bg-[#005F6B]/20 rounded-xl flex items-center justify-center text-[#00FFD1] mb-6">
<iconify-icon className="text-2xl" icon="solar:chart-square-linear"></iconify-icon>
</div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">Total visibility.<br/>Zero micromanagement.</h3>
<p className="text-sm text-[#F0F0F0]/60 leading-relaxed font-medium mb-6">
                    For Operations Leaders: Stop asking engineers for status updates on broken syncs. Get a unified dashboard of every transaction, error rate, and throughput across your entire organization.
                </p>
<ul className="space-y-3 text-sm font-medium">
<li className="flex items-center gap-3"><iconify-icon className="text-[#00FFD1]" icon="solar:check-circle-linear"></iconify-icon> Real-time alerting</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#00FFD1]" icon="solar:check-circle-linear"></iconify-icon> Audit logs for compliance</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#00FFD1]" icon="solar:check-circle-linear"></iconify-icon> Cost-usage tracking</li>
</ul>
</div>
<div className="order-1 md:order-2 bg-[#030B0C] rounded-2xl border border-white/10 p-6 shadow-2xl relative reveal delay-100">

<div className="h-40 relative mb-4 flex items-end justify-center">
<svg className="absolute inset-0 w-full h-full" preserveaspectratio="none" viewbox="0 0 300 150">

<line stroke="rgba(255,255,255,0.05)" strokeWidth="1" x1="0" x2="300" y1="30" y2="30"></line>
<line stroke="rgba(255,255,255,0.05)" strokeWidth="1" x1="0" x2="300" y1="75" y2="75"></line>
<line stroke="rgba(255,255,255,0.05)" strokeWidth="1" x1="0" x2="300" y1="120" y2="120"></line>

<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#00FFD1" stop-opacity="0.3"></stop>
<stop offset="100%" stop-color="#00FFD1" stop-opacity="0"></stop>
</lineargradient>
</defs>

<path className="svg-draw" d="M0,120 C 50,110 80,40 150,60 C 220,80 260,20 300,40" fill="none" filter="url(#neon-teal)" stroke="#00FFD1" strokeWidth="2"></path>
<path d="M0,120 C 50,110 80,40 150,60 C 220,80 260,20 300,40 L300,150 L0,150 Z" fill="url(#chartGradient)"></path>
</svg>
</div>
<div className="flex justify-between border-t border-white/5 pt-4 text-xs font-medium">
<div className="text-[#F0F0F0]/50">Errors: <span className="text-[#F0F0F0]">0.00%</span></div>
<div className="text-[#F0F0F0]/50">Uptime: <span className="text-[#00FFD1] drop-shadow-[0_0_5px_rgba(0,255,209,0.5)]">100%</span></div>
</div>
</div>

<div className="bg-[#030B0C] rounded-2xl border border-white/10 p-6 shadow-2xl relative order-3 reveal delay-100">
<div className="flex gap-2 mb-4 border-b border-white/5 pb-4">
<div className="w-3 h-3 rounded-full bg-white/20"></div>
<div className="w-3 h-3 rounded-full bg-white/20"></div>
<div className="w-3 h-3 rounded-full bg-white/20"></div>
</div>
<div className="font-mono text-xs text-[#F0F0F0]/70 space-y-2 relative">

<svg className="absolute -right-4 top-0 w-16 h-full opacity-30" preserveaspectratio="none" viewbox="0 0 20 100">
<line className="svg-draw" stroke="#005F6B" stroke-dasharray="5 5" strokeWidth="1" x1="10" x2="10" y1="0" y2="100"></line>
<circle cx="10" cy="0" fill="#00FFD1" filter="url(#neon-teal)" r="2">
<animate attributename="cy" dur="2s" from="0" repeatcount="indefinite" to="100"></animate>
</circle>
</svg>
<div><span className="text-[#00FFD1]">➜</span> ~ nexus deploy --prod</div>
<div className="text-[#F0F0F0]/40">Compiling visual schema to highly-optimized edge functions...</div>
<div className="text-[#F0F0F0]/40">Provisioning dead-letter queues...</div>
<div className="text-[#00FFD1] drop-shadow-[0_0_8px_rgba(0,255,209,0.3)]">✔ Deployed to 42 edge regions in 1.2s</div>
</div>
</div>
<div className="order-4 reveal">
<div className="w-12 h-12 bg-[#005F6B]/20 rounded-xl flex items-center justify-center text-[#00FFD1] mb-6">
<iconify-icon className="text-2xl" icon="solar:code-square-linear"></iconify-icon>
</div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">Ship features.<br/>Not infrastructure.</h3>
<p className="text-sm text-[#F0F0F0]/60 leading-relaxed font-medium mb-6">
                    For Engineers: Nexus handles the tedious parts of system integration—authentication, rate limiting, retries, and schema validation—so you can focus on building your actual product.
                </p>
<ul className="space-y-3 text-sm font-medium">
<li className="flex items-center gap-3"><iconify-icon className="text-[#00FFD1]" icon="solar:check-circle-linear"></iconify-icon> Git-synced workflows</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#00FFD1]" icon="solar:check-circle-linear"></iconify-icon> Local testing CLI</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#00FFD1]" icon="solar:check-circle-linear"></iconify-icon> TypeScript native</li>
</ul>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-2xl font-semibold tracking-tight">Enterprise-grade by default.</h2>
<p className="text-sm text-[#F0F0F0]/50 mt-2">Security isn't an upgrade tier. It's the foundation.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-white/[0.02] border border-white/5 p-6 rounded-xl text-center reveal">
<iconify-icon className="text-3xl text-[#005F6B] mb-4" icon="solar:shield-check-linear"></iconify-icon>
<h4 className="text-sm font-semibold mb-2">SOC2 Type II Certified</h4>
<p className="text-xs text-[#F0F0F0]/50 font-medium">Independently audited and verified to meet strict security and privacy standards.</p>
</div>
<div className="bg-white/[0.02] border border-white/5 p-6 rounded-xl text-center reveal delay-100">
<iconify-icon className="text-3xl text-[#005F6B] mb-4" icon="solar:lock-password-linear"></iconify-icon>
<h4 className="text-sm font-semibold mb-2">AES-256 Encryption</h4>
<p className="text-xs text-[#F0F0F0]/50 font-medium">Your data is encrypted at rest and in transit. We never store raw payload data.</p>
</div>
<div className="bg-white/[0.02] border border-white/5 p-6 rounded-xl text-center reveal delay-200">
<iconify-icon className="text-3xl text-[#005F6B] mb-4" icon="solar:server-square-linear"></iconify-icon>
<h4 className="text-sm font-semibold mb-2">Isolated Execution</h4>
<p className="text-xs text-[#F0F0F0]/50 font-medium">Every workflow runs in its own secure, ephemeral v8 isolate environment.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden">
<div className="absolute inset-0 bg-[#0A1618] -z-10"></div>

<svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="40" id="grid" patternunits="userSpaceOnUse" width="40">
<path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1"></path>
</pattern>
</defs>
<rect fill="url(#grid)" height="100%" width="100%"></rect>
<path className="svg-draw" d="M 100 100 L 300 200 L 500 100 L 700 300 L 900 150" fill="none" stroke="#005F6B" strokeWidth="1"></path>
<path className="svg-draw-reverse" d="M 200 300 L 400 100 L 600 250 L 800 50" fill="none" filter="url(#neon-teal)" stroke="#00FFD1" strokeWidth="0.5"></path>
</svg>
<div className="max-w-5xl mx-auto text-center relative z-10 reveal">
<h2 className="text-3xl font-semibold tracking-tight mb-12">Connects with your entire stack.</h2>
<div className="grid grid-cols-4 md:grid-cols-8 gap-4">
<div className="aspect-square bg-[#030B0C]/80 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center hover:border-[#00FFD1]/50 hover:shadow-[0_0_15px_rgba(0,255,209,0.2)] transition-all cursor-pointer"><iconify-icon className="text-2xl text-[#F0F0F0]/50 hover:text-[#00FFD1] transition-colors" icon="solar:database-linear"></iconify-icon></div>
<div className="aspect-square bg-[#030B0C]/80 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center hover:border-[#00FFD1]/50 hover:shadow-[0_0_15px_rgba(0,255,209,0.2)] transition-all cursor-pointer"><iconify-icon className="text-2xl text-[#F0F0F0]/50 hover:text-[#00FFD1] transition-colors" icon="solar:letter-linear"></iconify-icon></div>
<div className="aspect-square bg-[#030B0C]/80 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center hover:border-[#00FFD1]/50 hover:shadow-[0_0_15px_rgba(0,255,209,0.2)] transition-all cursor-pointer"><iconify-icon className="text-2xl text-[#F0F0F0]/50 hover:text-[#00FFD1] transition-colors" icon="solar:chat-round-line-linear"></iconify-icon></div>
<div className="aspect-square bg-[#030B0C]/80 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center hover:border-[#00FFD1]/50 hover:shadow-[0_0_15px_rgba(0,255,209,0.2)] transition-all cursor-pointer"><iconify-icon className="text-2xl text-[#F0F0F0]/50 hover:text-[#00FFD1] transition-colors" icon="solar:wallet-linear"></iconify-icon></div>
<div className="aspect-square bg-[#030B0C]/80 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center hover:border-[#00FFD1]/50 hover:shadow-[0_0_15px_rgba(0,255,209,0.2)] transition-all cursor-pointer"><iconify-icon className="text-2xl text-[#F0F0F0]/50 hover:text-[#00FFD1] transition-colors" icon="solar:box-linear"></iconify-icon></div>
<div className="aspect-square bg-[#030B0C]/80 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center hover:border-[#00FFD1]/50 hover:shadow-[0_0_15px_rgba(0,255,209,0.2)] transition-all cursor-pointer"><iconify-icon className="text-2xl text-[#F0F0F0]/50 hover:text-[#00FFD1] transition-colors" icon="solar:graph-linear"></iconify-icon></div>
<div className="aspect-square bg-[#030B0C]/80 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center hover:border-[#00FFD1]/50 hover:shadow-[0_0_15px_rgba(0,255,209,0.2)] transition-all cursor-pointer"><iconify-icon className="text-2xl text-[#F0F0F0]/50 hover:text-[#00FFD1] transition-colors" icon="solar:shield-keyhole-linear"></iconify-icon></div>
<div className="aspect-square bg-[#030B0C]/80 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center hover:border-[#00FFD1]/50 hover:shadow-[0_0_15px_rgba(0,255,209,0.2)] transition-all cursor-pointer"><iconify-icon className="text-2xl text-[#F0F0F0]/50 hover:text-[#00FFD1] transition-colors" icon="solar:users-group-rounded-linear"></iconify-icon></div>
</div>
<p className="mt-8 text-sm text-[#F0F0F0]/50 font-medium">Plus 150+ pre-built connectors and a universal REST/GraphQL client.</p>
</div>
</section>

<section className="py-24 border-y border-[#005F6B]/30 bg-gradient-to-r from-[#030B0C] via-[#005F6B]/10 to-[#030B0C]">
<div className="max-w-4xl mx-auto px-6 text-center reveal">
<iconify-icon className="text-4xl text-[#00FFD1] opacity-50 mb-6" icon="solar:quote-left-linear"></iconify-icon>
<h2 className="text-2xl md:text-4xl font-medium tracking-tight leading-snug mb-8">
                "Nexus cut our integration backlog by 80%. We were able to launch our enterprise tier 3 months ahead of schedule because we didn't have to build custom API polling engines."
            </h2>
<div className="flex items-center justify-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-xs font-semibold uppercase">SF</div>
<div className="text-left text-sm">
<div className="font-semibold text-[#F0F0F0]">Sarah Fowler</div>
<div className="text-[#F0F0F0]/50">VP of Engineering, Horizon Data</div>
</div>
</div>
<a className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-[#00FFD1] hover:text-[#00FFD1]/80 transition-colors underline decoration-transparent hover:decoration-[#00FFD1] underline-offset-4" href="#">
                View Full Story <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center">
<div className="pt-8 md:pt-0 reveal">
<div className="text-5xl font-semibold text-[#00FFD1] tracking-tighter mb-2 drop-shadow-[0_0_15px_rgba(0,255,209,0.3)]">12 hrs</div>
<div className="text-sm font-medium text-[#F0F0F0]/60">Saved per week on maintenance</div>
</div>
<div className="pt-8 md:pt-0 reveal delay-100">
<div className="text-5xl font-semibold text-[#00FFD1] tracking-tighter mb-2 drop-shadow-[0_0_15px_rgba(0,255,209,0.3)]">99.999%</div>
<div className="text-sm font-medium text-[#F0F0F0]/60">Guaranteed uptime SLA</div>
</div>
<div className="pt-8 md:pt-0 reveal delay-200">
<div className="text-5xl font-semibold text-[#00FFD1] tracking-tighter mb-2 drop-shadow-[0_0_15px_rgba(0,255,209,0.3)]">&lt;50ms</div>
<div className="text-sm font-medium text-[#F0F0F0]/60">P99 execution latency</div>
</div>
</div>
</section>

<section className="py-32 bg-[#0A1618] border-y border-white/5 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<h2 className="text-3xl font-semibold tracking-tight text-center mb-16 reveal">From zero to production in minutes.</h2>
<div className="grid md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[1px] bg-gradient-to-r from-transparent via-[#005F6B] to-transparent z-0 overflow-hidden">
<div className="w-full h-full bg-[#00FFD1] opacity-50 shadow-[0_0_10px_#00FFD1] -translate-x-full animate-[pulse-line_3s_infinite]"></div>
</div>
<div className="relative z-10 bg-[#030B0C] p-8 rounded-2xl border border-white/5 flex flex-col items-center text-center reveal">
<div className="w-12 h-12 rounded-full bg-[#005F6B] text-[#F0F0F0] flex items-center justify-center font-semibold text-lg mb-6 shadow-lg border border-[#00FFD1]/30">1</div>
<h3 className="text-lg font-semibold tracking-tight mb-2">Connect Sources</h3>
<p className="text-xs text-[#F0F0F0]/50 font-medium">Authenticate your tools using secure OAuth or API keys. Takes 30 seconds.</p>
</div>
<div className="relative z-10 bg-[#030B0C] p-8 rounded-2xl border border-[#005F6B]/40 flex flex-col items-center text-center shadow-[0_0_30px_-10px_rgba(0,95,107,0.4)] reveal delay-100">
<div className="w-12 h-12 rounded-full bg-[#005F6B] text-[#F0F0F0] flex items-center justify-center font-semibold text-lg mb-6 shadow-[0_0_15px_rgba(0,255,209,0.3)] border border-[#00FFD1]">2</div>
<h3 className="text-lg font-semibold tracking-tight mb-2">Define Logic</h3>
<p className="text-xs text-[#F0F0F0]/50 font-medium">Use the visual canvas to map data, add conditions, and handle transformations.</p>
</div>
<div className="relative z-10 bg-[#030B0C] p-8 rounded-2xl border border-white/5 flex flex-col items-center text-center reveal delay-200">
<div className="w-12 h-12 rounded-full bg-[#005F6B] text-[#F0F0F0] flex items-center justify-center font-semibold text-lg mb-6 shadow-lg border border-[#00FFD1]/30">3</div>
<h3 className="text-lg font-semibold tracking-tight mb-2">Deploy &amp; Scale</h3>
<p className="text-xs text-[#F0F0F0]/50 font-medium">Hit deploy. We handle the provisioning, edge distribution, and auto-scaling.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Transparent pricing. ROI on day one.</h2>
<p className="mt-4 text-sm text-[#F0F0F0]/60">Pay only for successful workflow executions.</p>
<div className="mt-8 flex items-center justify-center gap-3 text-sm font-medium">
<span className="text-[#F0F0F0]/50">Monthly</span>
<div className="w-12 h-6 bg-[#005F6B] rounded-full relative cursor-pointer border border-[#00FFD1]/30">
<div className="absolute right-1 top-1 w-4 h-4 bg-[#00FFD1] rounded-full"></div>
</div>
<span className="text-[#F0F0F0]">Annually <span className="text-[10px] text-[#00FFD1] bg-[#00FFD1]/10 px-1.5 py-0.5 rounded ml-1">Save 20%</span></span>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
<div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 flex flex-col reveal">
<h3 className="text-lg font-semibold mb-2">Hobby</h3>
<div className="text-4xl font-semibold tracking-tight mb-6">$0<span className="text-sm text-[#F0F0F0]/40 font-medium tracking-normal">/mo</span></div>
<p className="text-xs text-[#F0F0F0]/50 font-medium mb-8">Perfect for side projects and testing.</p>
<ul className="space-y-3 text-sm font-medium mb-8 flex-1">
<li className="flex items-center gap-2"><iconify-icon className="text-[#F0F0F0]/30" icon="solar:check-circle-linear"></iconify-icon> 10,000 tasks/mo</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#F0F0F0]/30" icon="solar:check-circle-linear"></iconify-icon> 3 active workflows</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#F0F0F0]/30" icon="solar:check-circle-linear"></iconify-icon> Community support</li>
</ul>
<a className="w-full block text-center bg-white/5 hover:bg-white/10 border border-white/10 text-[#F0F0F0] py-3 rounded-lg text-sm font-semibold transition-colors" href="#">Get Started</a>
</div>
<div className="bg-[#030B0C] border border-[#00FFD1]/50 rounded-2xl p-8 flex flex-col relative shadow-[0_0_40px_-15px_rgba(0,255,209,0.2)] scale-105 z-10 reveal delay-100">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#00FFD1] text-[#030B0C] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Most Popular</div>
<h3 className="text-lg font-semibold mb-2">Pro</h3>
<div className="text-4xl font-semibold tracking-tight mb-6">$49<span className="text-sm text-[#F0F0F0]/40 font-medium tracking-normal">/mo</span></div>
<p className="text-xs text-[#F0F0F0]/50 font-medium mb-8">For scaling teams needing reliability.</p>
<ul className="space-y-3 text-sm font-medium mb-8 flex-1">
<li className="flex items-center gap-2"><iconify-icon className="text-[#00FFD1]" icon="solar:check-circle-linear"></iconify-icon> 1,000,000 tasks/mo</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#00FFD1]" icon="solar:check-circle-linear"></iconify-icon> Unlimited workflows</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#00FFD1]" icon="solar:check-circle-linear"></iconify-icon> Auto-retries &amp; error handling</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#00FFD1]" icon="solar:check-circle-linear"></iconify-icon> Email &amp; chat support</li>
</ul>
<a className="w-full block text-center bg-[#00FFD1] hover:bg-[#00FFD1]/90 text-[#030B0C] py-3 rounded-lg text-sm font-semibold transition-colors neon-glow" href="#">Start Free Trial</a>
</div>
<div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 flex flex-col reveal delay-200">
<h3 className="text-lg font-semibold mb-2">Enterprise</h3>
<div className="text-4xl font-semibold tracking-tight mb-6">Custom</div>
<p className="text-xs text-[#F0F0F0]/50 font-medium mb-8">For organizations needing custom SLAs.</p>
<ul className="space-y-3 text-sm font-medium mb-8 flex-1">
<li className="flex items-center gap-2"><iconify-icon className="text-[#F0F0F0]/30" icon="solar:check-circle-linear"></iconify-icon> Unlimited tasks</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#F0F0F0]/30" icon="solar:check-circle-linear"></iconify-icon> Dedicated infrastructure</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#F0F0F0]/30" icon="solar:check-circle-linear"></iconify-icon> Single Sign-On (SSO)</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#F0F0F0]/30" icon="solar:check-circle-linear"></iconify-icon> 24/7 phone support</li>
</ul>
<a className="w-full block text-center bg-white/5 hover:bg-white/10 border border-white/10 text-[#F0F0F0] py-3 rounded-lg text-sm font-semibold transition-colors" href="#">Contact Sales</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0A1618] border-y border-white/5">
<div className="max-w-3xl mx-auto px-6 reveal">
<h2 className="text-2xl font-semibold tracking-tight mb-12 text-center">Frequently asked questions</h2>
<div className="space-y-4">
<div className="border-b border-white/10 pb-4">
<div className="flex justify-between items-center cursor-pointer text-sm font-semibold py-2">
                        How long does implementation take?
                        <iconify-icon className="text-[#00FFD1] text-lg" icon="solar:minus-circle-linear"></iconify-icon>
</div>
<p className="text-xs text-[#F0F0F0]/60 mt-2 font-medium leading-relaxed">
                        If you have your API keys ready, you can deploy your first workflow in under 5 minutes. Our visual canvas and pre-built templates eliminate the need to read third-party API documentation.
                    </p>
</div>
<div className="border-b border-white/10 pb-4">
<div className="flex justify-between items-center cursor-pointer text-sm font-medium py-2 hover:text-[#00FFD1] transition-colors">
                        Is my data secure?
                        <iconify-icon className="text-lg opacity-50" icon="solar:add-circle-linear"></iconify-icon>
</div>
</div>
<div className="border-b border-white/10 pb-4">
<div className="flex justify-between items-center cursor-pointer text-sm font-medium py-2 hover:text-[#00FFD1] transition-colors">
                        What happens if a connected API changes?
                        <iconify-icon className="text-lg opacity-50" icon="solar:add-circle-linear"></iconify-icon>
</div>
</div>
<div className="border-b border-white/10 pb-4">
<div className="flex justify-between items-center cursor-pointer text-sm font-medium py-2 hover:text-[#00FFD1] transition-colors">
                        Can I write custom code if I need to?
                        <iconify-icon className="text-lg opacity-50" icon="solar:add-circle-linear"></iconify-icon>
</div>
</div>
<div className="border-b border-white/10 pb-4">
<div className="flex justify-between items-center cursor-pointer text-sm font-medium py-2 hover:text-[#00FFD1] transition-colors">
                        How is ROI calculated for the Pro plan?
                        <iconify-icon className="text-lg opacity-50" icon="solar:add-circle-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 reveal">
<div className="max-w-2xl mx-auto text-center">
<div className="w-16 h-16 bg-[#005F6B] rounded-full mx-auto mb-6 flex items-center justify-center border border-[#00FFD1]/30">
<iconify-icon className="text-2xl text-[#00FFD1]" icon="solar:user-bold-duotone"></iconify-icon>
</div>
<p className="text-lg italic text-[#F0F0F0]/80 font-medium mb-6">
                "We built Nexus because we were exhausted by writing the same API polling logic and error-handling scripts at every startup we worked at. Infrastructure should be invisible. You should be building your product."
            </p>
<div className="text-sm font-semibold text-[#00FFD1]">David Chen &amp; Alex Rivera</div>
<div className="text-xs text-[#F0F0F0]/40 font-medium mt-1">Co-Founders, Nexus</div>
</div>
</section>

<section className="py-32 px-6 bg-gradient-to-b from-transparent to-[#005F6B]/10 relative overflow-hidden reveal">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-[#00FFD1]/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<h2 className="text-5xl font-semibold tracking-tight mb-6">Stop building infrastructure.<br/>Start building your product.</h2>
<p className="text-lg text-[#F0F0F0]/60 mb-10 max-w-xl mx-auto font-medium">Join 10,000+ engineering teams who have automated their operations with Nexus.</p>
<a className="inline-flex items-center justify-center gap-2 bg-[#00FFD1] text-[#030B0C] px-10 py-4 rounded-md text-base font-semibold tracking-wide hover:bg-[#00FFD1]/90 transition-all neon-glow hover:scale-105 duration-300" href="#">
                Start Building for Free
                <iconify-icon className="text-xl" icon="solar:rocket-linear"></iconify-icon>
</a>
<p className="mt-6 text-xs text-[#F0F0F0]/40 font-medium">Takes 2 minutes. No credit card required.</p>
</div>
</section>

<section className="py-16 border-t border-white/5 bg-[#0A1618] reveal">
<div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
<div>
<h4 className="text-sm font-semibold">Not ready to commit?</h4>
<p className="text-xs text-[#F0F0F0]/50 mt-1 font-medium">Get our "Architect's Guide to Automation" and weekly engineering tips.</p>
</div>
<form className="flex w-full md:w-auto gap-2">
<input className="bg-[#030B0C] border border-white/10 rounded px-4 py-2 text-sm focus:outline-none focus:border-[#00FFD1]/50 w-full md:w-64 text-[#F0F0F0] placeholder-[#F0F0F0]/30" placeholder="name@company.com" type="email"/>
<button className="bg-white/10 hover:bg-white/20 border border-white/10 text-[#F0F0F0] px-4 py-2 rounded text-sm font-semibold transition-colors" type="submit">
                    Subscribe
                </button>
</form>
</div>
</section>

<footer className="bg-[#030B0C] pt-16 pb-8 border-t border-white/5 mt-auto reveal">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-[#00FFD1] text-2xl" icon="solar:infinity-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-lg font-semibold tracking-tighter uppercase text-[#F0F0F0]">Nexus</span>
</div>
<p className="text-xs text-[#F0F0F0]/50 font-medium max-w-xs mb-6">
                        The visual automation engine for modern engineering and operations teams. Build faster, break less.
                    </p>
<div className="flex items-center gap-4 text-[#F0F0F0]/40">
<a className="hover:text-[#00FFD1] transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:minimalistic-magnifer-linear"></iconify-icon></a>
<a className="hover:text-[#00FFD1] transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon></a>
</div>
</div>
<div>
<h5 className="text-xs font-semibold uppercase tracking-wider text-[#F0F0F0]/80 mb-4">Platform</h5>
<ul className="space-y-3 text-xs font-medium text-[#F0F0F0]/50">
<li><a className="hover:text-[#00FFD1] transition-colors" href="#">Visual Canvas</a></li>
<li><a className="hover:text-[#00FFD1] transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-[#00FFD1] transition-colors" href="#">Edge Execution</a></li>
<li><a className="hover:text-[#00FFD1] transition-colors" href="#">Security</a></li>
<li><a className="hover:text-[#00FFD1] transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h5 className="text-xs font-semibold uppercase tracking-wider text-[#F0F0F0]/80 mb-4">Resources</h5>
<ul className="space-y-3 text-xs font-medium text-[#F0F0F0]/50">
<li><a className="hover:text-[#00FFD1] transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-[#00FFD1] transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-[#00FFD1] transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-[#00FFD1] transition-colors" href="#">Case Studies</a></li>
<li><a className="hover:text-[#00FFD1] transition-colors" href="#">Community</a></li>
</ul>
</div>
<div>
<h5 className="text-xs font-semibold uppercase tracking-wider text-[#F0F0F0]/80 mb-4">Company</h5>
<ul className="space-y-3 text-xs font-medium text-[#F0F0F0]/50">
<li><a className="hover:text-[#00FFD1] transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-[#00FFD1] transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-[#00FFD1] transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-[#00FFD1] transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-[#00FFD1] transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-[10px] font-medium text-[#F0F0F0]/40">
<p>© 2026 Nexus Systems Inc. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<span className="flex items-center gap-1"><iconify-icon icon="solar:shield-check-linear"></iconify-icon> SOC2 Certified</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:server-square-linear"></iconify-icon> Systems Operational</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
