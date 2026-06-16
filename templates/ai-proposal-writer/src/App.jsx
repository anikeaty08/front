import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.30/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



        // Scroll Reveal Observer
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });

        // Accordion Logic
        function toggleAccordion(id) {
            const content = document.getElementById(id);
            const icon = document.getElementById(`icon-${id}`);
            
            if (content.style.gridTemplateRows === "1fr") {
                content.classList.remove('open');
                content.style.gridTemplateRows = "0fr";
                icon.style.transform = 'rotate(0deg)';
            } else {
                content.classList.add('open');
                content.style.gridTemplateRows = "1fr";
                icon.style.transform = 'rotate(180deg)';
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div data-us-project="N9XzvQXu7fA5SY2ewADJ" style={{width: '1440px', height: '900px'}}></div>
</div>

<div className="ambient-light"></div>

<header className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl supports-[backdrop-filter]:bg-black/30">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="relative flex items-center justify-center w-6 h-6 text-blue-500">
<iconify-icon height="24" icon="solar:plain-linear" width="24"></iconify-icon>
</div>
<span className="font-semibold tracking-tighter text-white text-xs uppercase">
                    Propel
                </span>
</div>
<nav className="hidden md:flex gap-8 text-[11px] font-medium tracking-wide uppercase text-neutral-500">
<a className="hover:text-white transition-colors duration-300" href="#how-it-works">Method</a>
<a className="hover:text-white transition-colors duration-300" href="#features">Features</a>
<a className="hover:text-white transition-colors duration-300" href="#pricing">Pricing</a>
</nav>
<a className="hidden md:flex items-center justify-center px-4 py-1.5 bg-white/5 border border-white/10 text-white text-[11px] font-medium rounded hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-sm" href="#pricing">
                Get Started
            </a>
</div>
</header>

<section className="md:pt-48 md:pb-36 flex flex-col overflow-hidden text-center pt-32 pr-6 pb-24 pl-6 relative items-center">
<div className="z-10 flex flex-col relative items-center">

<div className="mb-8 opacity-80 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-md">
<svg className="text-blue-400" data-icon-set="solar" data-solar="stars-minimalistic-linear" height="14" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor"><path d="M10.08 7.897C11.157 5.966 11.695 5 12.5 5s1.343.966 2.42 2.897l.278.5c.306.549.46.823.698 1.004s.535.248 1.13.383l.54.122c2.091.473 3.137.71 3.385 1.51c.249.8-.464 1.633-1.89 3.3l-.368.43c-.405.474-.607.711-.699 1.004c-.09.293-.06.609.001 1.24l.056.576c.216 2.224.323 3.336-.328 3.83s-1.63.044-3.587-.857l-.507-.234c-.556-.256-.834-.384-1.129-.384s-.573.128-1.13.384l-.506.234c-1.957.9-2.936 1.352-3.587.857c-.651-.494-.543-1.606-.328-3.83l.056-.575c.061-.632.092-.948 0-1.24c-.09-.294-.293-.53-.698-1.004l-.369-.432c-1.425-1.666-2.138-2.5-1.89-3.3c.25-.8 1.295-1.036 3.386-1.509l.54-.122c.595-.135.892-.202 1.13-.383c.239-.18.392-.455.698-1.004z" strokeWidth="1.5"></path><path d="M4.99 2s.288 1.458.92 2.085C6.54 4.712 8 4.99 8 4.99s-1.458.288-2.085.92C5.288 6.54 5.01 8 5.01 8s-.288-1.458-.92-2.085C3.46 5.288 2 5.01 2 5.01s1.458-.288 2.085-.92C4.712 3.46 4.99 2 4.99 2Z" strokeLinejoin="round"></path><path d="M18 5h2m-1 1V4" strokeLinecap="round" strokeWidth="1.5"></path></g></svg>
<span className="text-[10px] uppercase tracking-widest text-blue-300 font-medium">New: Portfolio Matching</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tighter mb-8 max-w-5xl mx-auto leading-[0.95] drop-shadow-2xl">
                Stop Writing Proposals. <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-300 to-blue-700">
                    Start Winning Jobs.
                </span>
</h1>
<p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto mb-12 leading-relaxed font-light tracking-wide">
                Instantly turn any Upwork job description into a personalized, high-converting proposal. 
                Our AI trains on your unique profile to sound exactly like you—only better.
            </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center">
<a className="group isolate inline-flex cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_8px_rgba(59,130,246,0.35)] rounded-full relative shadow-[0_8px_40px_rgba(59,130,246,0.25)] w-full sm:w-auto justify-center" href="#pricing" style={{-Spread: '90deg', -ShimmerColor: 'rgba(255,255,255,0.6)', -Radius: '9999px', -Speed: '4s', -Cut: '1px', -Bg: 'rgba(255, 255, 255, 0.05)'}}>
<div className="absolute inset-0">
<div className="absolute inset-[-200%] w-[400%] h-[400%] [animation:rotate-gradient_var(--speed)_linear_infinite]">
<div className="absolute inset-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]"></div>
</div>
</div>
<div className="absolute rounded-full [background:var(--bg)] [inset:var(--cut)] backdrop-blur"></div>
<div className="z-10 flex gap-2 sm:w-auto overflow-hidden text-xs uppercase font-semibold tracking-wider text-white w-full py-3.5 px-8 relative items-center justify-center" style={{borderRadius: '9999px'}}>
<div style={{position: 'absolute', content: '\' \'', display: 'block', width: '200%', height: '200%', background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), transparent)', animation: 'borderBeamRotation 4s infinite linear', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', pointerEvents: 'none'}}></div>
<div className="" style={{position: 'absolute', inset: '1px', background: 'rgba(59, 130, 246, 0.9)', borderRadius: '9999px', backdropFilter: 'blur(8px)'}}></div>
<span className="whitespace-nowrap relative z-10">Start Winning for Free</span>
</div>
</a>
<a className="flex items-center justify-center gap-2 px-8 py-3.5 glass-panel text-neutral-300 hover:text-white text-xs uppercase font-medium tracking-wider rounded-lg transition-colors w-full sm:w-auto group" href="#how-it-works">
                    View Demo
                    <iconify-icon className="text-neutral-500 group-hover:text-white transition-colors" icon="solar:play-circle-linear" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="mt-24 reveal delay-100 w-full max-w-4xl border-t border-white/5 pt-12">
<p className="text-[10px] uppercase tracking-widest text-neutral-600 mb-8 font-medium">Trusted by top freelancers on</p>
<div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<iconify-icon className="hover:text-[#14A800] transition-colors" height="36" icon="simple-icons:upwork" width="96"></iconify-icon>
<iconify-icon className="hover:text-[#3863FF] transition-colors" height="36" icon="simple-icons:toptal" width="96"></iconify-icon>
<iconify-icon className="hover:text-[#1DBF73] transition-colors" height="36" icon="simple-icons:fiverr" width="96"></iconify-icon>
<iconify-icon className="hover:text-[#29B2FE] transition-colors" height="36" icon="simple-icons:freelancer" width="96"></iconify-icon>
<iconify-icon className="hover:text-[#49C3D6] transition-colors" height="36" icon="simple-icons:guru" width="96"></iconify-icon>
</div>
</div>
</section>

<section className="py-32 px-6 border-y border-white/5 relative z-10 bg-white/[0.01]">
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
<div className="reveal space-y-8">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tighter">
                    The "Copy-Paste" Trap  Is Killing Your Conversion.
                </h2>
<div className="space-y-8">
<div className="flex items-start gap-5 group">
<div className="w-0.5 h-12 bg-neutral-800 group-hover:bg-red-500/50 transition-colors mt-1"></div>
<div>
<h4 className="text-white text-sm font-medium mb-2 flex items-center gap-2">
<iconify-icon className="text-red-500" icon="solar:close-circle-linear"></iconify-icon> Generic Templates
                            </h4>
<p className="text-neutral-500 text-sm font-light leading-relaxed">
                                Clients can smell a template from a mile away. It shows lack of effort and gets your proposal archived immediately.
                            </p>
</div>
</div>
<div className="flex items-start gap-5 group">
<div className="w-0.5 h-12 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] mt-1"></div>
<div>
<h4 className="text-white text-sm font-medium mb-2 flex items-center gap-2">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> The Propel Advantage
                            </h4>
<p className="text-neutral-400 text-sm font-light leading-relaxed">
                                Propel reads the job post, understands your specific skills, and weaves them together into a bespoke pitch that feels human.
                            </p>
</div>
</div>
</div>
</div>
<div className="glass-panel p-1 rounded-2xl relative overflow-hidden group reveal delay-100 aspect-video flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>

<div className="relative z-10 w-3/4 space-y-3">
<div className="h-2 bg-white/10 rounded-full w-1/3 animate-pulse"></div>
<div className="h-2 bg-white/10 rounded-full w-3/4 delay-75"></div>
<div className="h-2 bg-white/10 rounded-full w-full delay-150"></div>
<div className="h-2 bg-white/10 rounded-full w-5/6 delay-200"></div>
<div className="mt-4 p-4 rounded-lg bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-blue-400" icon="solar:magic-stick-3-linear"></iconify-icon>
<span className="text-[10px] text-blue-300 font-medium">AI Optimization Complete</span>
</div>
<div className="h-1.5 bg-blue-500/40 rounded-full w-full"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative" id="how-it-works">
<div className="max-w-7xl mx-auto">
<h2 className="text-2xl font-medium text-white tracking-tight mb-16 text-center reveal">
                3 Steps to Hired
            </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-6 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10"></div>

<div className="flex flex-col md:items-center md:text-center reveal group">
<div className="w-12 h-12 glass-panel rounded-full flex items-center justify-center text-white mb-6 z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:border-blue-500/50 transition-colors">
<iconify-icon icon="solar:user-id-linear" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-white mb-2 uppercase tracking-wide">Set Profile</h3>
<p className="text-xs text-neutral-500 leading-relaxed max-w-[220px]">
                         Input your skills, experience, and portfolio once. The AI remembers who you are.
                     </p>
</div>

<div className="flex flex-col md:items-center md:text-center reveal delay-75 group">
<div className="w-12 h-12 glass-panel rounded-full flex items-center justify-center text-white mb-6 z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:border-blue-500/50 transition-colors">
<iconify-icon icon="solar:clipboard-text-linear" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-white mb-2 uppercase tracking-wide">Paste Job</h3>
<p className="text-xs text-neutral-500 leading-relaxed max-w-[220px]">
                        Copy the client's job description and paste it into Propel.
                    </p>
</div>

<div className="flex flex-col md:items-center md:text-center reveal delay-150 group">
<div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white mb-6 z-10 shadow-[0_0_25px_rgba(59,130,246,0.4)] ring-4 ring-black/50">
<iconify-icon icon="solar:rocket-linear" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-white mb-2 uppercase tracking-wide">Generate &amp; Send</h3>
<p className="text-xs text-neutral-500 leading-relaxed max-w-[220px]">
                        Get a perfectly formatted, persuasive proposal in seconds. Review and hit send.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-black/40" id="features">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">
                    Engineered for Upwork
                </h2>
<p className="text-neutral-500 text-sm max-w-lg mx-auto">
                    Features designed to beat the algorithm, impress clients, and save you hours every week.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="glass-panel rounded-2xl p-8 relative overflow-hidden transition-all duration-500 hover:border-blue-500/30 group reveal">
<div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/5 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/10 transition-colors"></div>
<div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-500">
<iconify-icon icon="solar:document-add-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3">Deep Context Analysis</h3>
<p className="text-neutral-400 text-xs font-light mb-6 leading-relaxed">
                        It doesn't just write; it references specific pain points from the job post to show you read it.
                    </p>
<ul className="space-y-3 relative z-10">
<li className="flex items-start gap-3 text-xs text-neutral-300">
<iconify-icon className="text-blue-500 mt-0.5 flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span className="font-light">Identifies hidden requirements</span>
</li>
<li className="flex items-start gap-3 text-xs text-neutral-300">
<iconify-icon className="text-blue-500 mt-0.5 flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span className="font-light">Matches skills to problems</span>
</li>
<li className="flex items-start gap-3 text-xs text-neutral-300">
<iconify-icon className="text-blue-500 mt-0.5 flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span className="font-light">References client name</span>
</li>
</ul>
</div>

<div className="glass-panel rounded-2xl p-8 relative overflow-hidden transition-all duration-500 hover:border-blue-500/30 group reveal delay-75">
<div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/5 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/10 transition-colors"></div>
<div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-500">
<iconify-icon icon="solar:tuning-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3">Adaptive Tone</h3>
<p className="text-neutral-400 text-xs font-light mb-6 leading-relaxed">
                        Match the client's vibe instantly. Corporate, startup, or friendly—the choice is yours.
                    </p>
<ul className="space-y-3 relative z-10">
<li className="flex items-start gap-3 text-xs text-neutral-300">
<iconify-icon className="text-blue-500 mt-0.5 flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span className="font-light">Formal for Enterprise clients</span>
</li>
<li className="flex items-start gap-3 text-xs text-neutral-300">
<iconify-icon className="text-blue-500 mt-0.5 flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span className="font-light">Casual &amp; fast for Startups</span>
</li>
<li className="flex items-start gap-3 text-xs text-neutral-300">
<iconify-icon className="text-blue-500 mt-0.5 flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span className="font-light">Custom tone settings</span>
</li>
</ul>
</div>

<div className="glass-panel rounded-2xl p-8 relative overflow-hidden transition-all duration-500 hover:border-blue-500/30 group reveal delay-150">
<div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/5 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/10 transition-colors"></div>
<div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-500">
<iconify-icon icon="solar:gallery-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3">Smart Portfolio Sync</h3>
<p className="text-neutral-400 text-xs font-light mb-6 leading-relaxed">
                        Proves your expertise by automatically selecting and inserting the right case studies.
                    </p>
<ul className="space-y-3 relative z-10">
<li className="flex items-start gap-3 text-xs text-neutral-300">
<iconify-icon className="text-blue-500 mt-0.5 flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span className="font-light">Auto-selects relevant projects</span>
</li>
<li className="flex items-start gap-3 text-xs text-neutral-300">
<iconify-icon className="text-blue-500 mt-0.5 flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span className="font-light">Embeds links naturally</span>
</li>
<li className="flex items-start gap-3 text-xs text-neutral-300">
<iconify-icon className="text-blue-500 mt-0.5 flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span className="font-light">Highlights specific results (ROI)</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden" id="pricing">
<div className="relative max-w-5xl mx-auto text-center reveal">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-8">
                Pricing that Pays for Itself.
            </h2>
<p className="text-neutral-400 mb-16 text-sm font-light">
                One won job covers a year of Propel.
            </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-3xl mx-auto">

<button className="glass-panel p-8 rounded-2xl hover:border-white/20 transition-all group flex flex-col items-center relative overflow-hidden">
<span className="text-xs text-neutral-400 font-medium uppercase tracking-widest mb-4">
                        Starter
                    </span>
<span className="text-4xl font-bold text-white mb-2">$0</span>
<span className="text-[10px] text-neutral-500 mb-8">Forever free</span>
<ul className="text-left w-full space-y-3 mb-8 pl-8">
<li className="flex gap-3 text-xs text-neutral-300">
<iconify-icon className="text-white" icon="solar:check-read-linear"></iconify-icon> 5 AI Proposals / month
                        </li>
<li className="flex gap-3 text-xs text-neutral-300">
<iconify-icon className="text-white" icon="solar:check-read-linear"></iconify-icon> Basic Profile Context
                        </li>
<li className="flex gap-3 text-xs text-neutral-300">
<iconify-icon className="text-white" icon="solar:check-read-linear"></iconify-icon> Standard Tone
                        </li>
</ul>
<div className="px-6 py-3 bg-neutral-800 border border-white/5 text-white text-xs font-semibold uppercase tracking-wider rounded group-hover:bg-white group-hover:text-black transition-colors w-full">
                        Try For Free
                    </div>
</button>

<button className="relative p-8 rounded-2xl bg-blue-600/10 border border-blue-500 hover:bg-blue-600/20 transition-all group flex flex-col items-center overflow-hidden shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)] transform md:-translate-y-4">
<div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent opacity-50"></div>
<div className="absolute top-0 px-4 py-1 bg-blue-600 text-white text-[10px] uppercase font-bold tracking-widest rounded-b-lg">
                        Best Value
                    </div>
<span className="text-xs text-blue-400 font-bold uppercase tracking-widest mb-4 mt-2 relative z-10">
                        Freelancer Pro
                    </span>
<span className="text-4xl font-bold text-white mb-2 relative z-10">$19</span>
<span className="text-[10px] text-blue-200/60 mb-8 relative z-10">Per Month</span>
<ul className="text-left w-full space-y-3 mb-8 pl-8 relative z-10">
<li className="flex gap-3 text-xs text-white">
<iconify-icon className="text-blue-400" icon="solar:check-read-linear"></iconify-icon> Unlimited Proposals
                        </li>
<li className="flex gap-3 text-xs text-white">
<iconify-icon className="text-blue-400" icon="solar:check-read-linear"></iconify-icon> Advanced Portfolio Matching
                        </li>
<li className="flex gap-3 text-xs text-white">
<iconify-icon className="text-blue-400" icon="solar:check-read-linear"></iconify-icon> All Tone Styles
                        </li>
<li className="flex gap-3 text-xs text-white">
<iconify-icon className="text-blue-400" icon="solar:check-read-linear"></iconify-icon> Proposal Score Analysis
                        </li>
</ul>
<div className="relative z-10 px-6 py-3 bg-blue-600 text-white text-xs font-semibold uppercase tracking-wider rounded hover:bg-blue-500 transition-colors w-full shadow-lg">
                        Unlock Unlimited
                    </div>
</button>
</div>
</div>
</section>

<section className="py-24 px-6 border-y border-white/5">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="glass-panel p-6 rounded-xl reveal">
<div className="flex items-center gap-1 text-yellow-500 mb-4">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p className="text-xs text-neutral-300 leading-relaxed mb-6">
                    "I used to spend 30 mins per proposal. Now I spend 2. I've closed 3 deals in my first week using Propel."
                </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center text-xs font-bold text-white">JD</div>
<div>
<div className="text-xs font-semibold text-white">James D.</div>
<div className="text-[10px] text-neutral-500">Web Developer</div>
</div>
</div>
</div>
<div className="glass-panel p-6 rounded-xl reveal delay-75">
<div className="flex items-center gap-1 text-yellow-500 mb-4">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p className="text-xs text-neutral-300 leading-relaxed mb-6">
                    "The portfolio matching is a game changer. It automatically grabs the right links from my history."
                </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center text-xs font-bold text-white">SK</div>
<div>
<div className="text-xs font-semibold text-white">Sarah K.</div>
<div className="text-[10px] text-neutral-500">Graphic Designer</div>
</div>
</div>
</div>
<div className="glass-panel p-6 rounded-xl reveal delay-150">
<div className="flex items-center gap-1 text-yellow-500 mb-4">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p className="text-xs text-neutral-300 leading-relaxed mb-6">
                    "Finally, an AI that doesn't sound like a robot. The tone customization is actually impressive."
                </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center text-xs font-bold text-white">MR</div>
<div>
<div className="text-xs font-semibold text-white">Mike R.</div>
<div className="text-[10px] text-neutral-500">Copywriter</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-white/5 bg-black/40">
<div className="max-w-2xl mx-auto reveal">
<h2 className="text-2xl font-medium text-white tracking-tight mb-12 text-center">
                Questions
            </h2>
<div className="space-y-3">

<div className="border border-white/5 rounded-lg bg-white/[0.02] overflow-hidden">
<button className="w-full flex items-center justify-between p-5 text-left text-sm font-medium text-white hover:bg-white/5 transition-colors" onclick="toggleAccordion('faq1')">
                        Is this safe to use on Upwork?
                        <iconify-icon className="text-neutral-500 transition-transform" icon="solar:alt-arrow-down-linear" id="icon-faq1"></iconify-icon>
</button>
<div className="accordion-content" id="faq1">
<div className="p-5 pt-0 text-sm text-neutral-400 font-light leading-relaxed">
                            Yes. Propel generates the text for you, which you then copy and paste. You are still the one submitting the proposal. We recommend always reviewing the output before sending.
                        </div>
</div>
</div>

<div className="border border-white/5 rounded-lg bg-white/[0.02] overflow-hidden">
<button className="w-full flex items-center justify-between p-5 text-left text-sm font-medium text-white hover:bg-white/5 transition-colors" onclick="toggleAccordion('faq2')">
                        How is this different from ChatGPT?
                        <iconify-icon className="text-neutral-500 transition-transform" icon="solar:alt-arrow-down-linear" id="icon-faq2"></iconify-icon>
</button>
<div className="accordion-content" id="faq2">
<div className="p-5 pt-0 text-sm text-neutral-400 font-light leading-relaxed">
                            ChatGPT doesn't know you. Propel stores your specific skills, portfolio, and past experience to create highly personalized proposals, rather than generic ones.
                        </div>
</div>
</div>

<div className="border border-white/5 rounded-lg bg-white/[0.02] overflow-hidden">
<button className="w-full flex items-center justify-between p-5 text-left text-sm font-medium text-white hover:bg-white/5 transition-colors" onclick="toggleAccordion('faq3')">
                        Can I cancel anytime?
                        <iconify-icon className="text-neutral-500 transition-transform" icon="solar:alt-arrow-down-linear" id="icon-faq3"></iconify-icon>
</button>
<div className="accordion-content" id="faq3">
<div className="p-5 pt-0 text-sm text-neutral-400 font-light leading-relaxed">
                            Absolutely. You can cancel your Pro subscription instantly from your dashboard. You will retain access until the end of your billing cycle.
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 text-center">
<div className="reveal">
<h2 className="text-4xl font-medium text-white tracking-tight mb-6">
                Stop Wasting Connects.
            </h2>
<div className="flex justify-center gap-4">
<a className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-white px-8 font-medium text-black transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-50" href="#pricing">
<span className="mr-2">Start Earning Now</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="20"></iconify-icon>
<div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-100 to-white opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
</a>
</div>
</div>
</section>

<footer className="py-16 border-t border-white/5 text-center bg-black">
<div className="flex items-center justify-center gap-2 mb-6 text-blue-500">
<iconify-icon icon="solar:plain-linear" width="24"></iconify-icon>
</div>
<p className="text-sm font-semibold text-white tracking-tight mb-2">
            PROPEL AI
        </p>
<p className="text-[10px] text-neutral-600 mb-10">
            Automating the freelancer hustle.
        </p>
<div className="flex justify-center gap-8 text-[10px] text-neutral-600 uppercase tracking-widest font-medium">
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
</footer>


    </>
  );
}
